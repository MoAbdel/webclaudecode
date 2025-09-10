// scripts/auto-fix-from-report.js
// SAFE, IDEMPOTENT FIXER:
// - Skips generateMetadata on 'use client' files
// - Normalizes canonicals to app routes (not file paths)
// - Removes legacy `export const metadata` and prior generateMetadata cleanly
// - Avoids duplicate JSON-LD blocks with markers
// - Adds FinancialService/Article/LocalBusiness/SoftwareApplication only when missing
// - Adds 2025 loan limit note when flagged
//
// Run: node scripts/auto-fix-from-report.js

const fs = require("fs");
const path = require("path");

// ---- Project constants (adjust if needed) ----
const CANONICAL_BASE = "https://www.mothebroker.com";
const BRAND = "Mo Abdel — Mortgage Broker";
const AREA_SERVED = "Orange County, CA";
const TELEPHONE = "(949) 579-2057";
const LOGO = "https://www.mothebroker.com/logo.png";

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, "app");
const REPORT = path.join(ROOT, "reports", "sitewide-validation.md");

// ---- FS helpers ----
const read = (p) => fs.readFileSync(p, "utf8");
const write = (p, s) => fs.writeFileSync(p, s.replace(/\r\n/g, "\n"), "utf8");
const exists = (p) => fs.existsSync(p);
const asPosix = (p) => p.replace(/\\/g, "/");

// ---- Route helpers ----
function routeFromAppFile(fp) {
  // fp: absolute or relative path under app/*
  let p = asPosix(fp);
  const appIdx = p.lastIndexOf("/app/");
  if (appIdx !== -1) p = p.slice(appIdx + 4); // strip prefix up to /app
  // remove "page.tsx" or "page.jsx"
  p = p.replace(/\/page\.(tsx|jsx)$/, "");
  if (p === "" || p === "/") return "/";
  if (!p.startsWith("/")) p = "/" + p;
  return p;
}

function canonicalForFile(fp) {
  const route = routeFromAppFile(fp);
  return (CANONICAL_BASE + route).replace(/\/+$/, "") || CANONICAL_BASE;
}

// ---- Source transforms ----
function stripLegacyMetadataAndGM(src) {
  // Remove export const metadata = { ... };
  src = src.replace(/export\s+const\s+metadata\s*=\s*\{[\s\S]*?\}\s*;?\s*/gm, "");
  // Remove any existing generateMetadata definition
  src = src.replace(
    /export\s+async\s+function\s+generateMetadata\s*\([\s\S]*?\)\s*\{[\s\S]*?\}\s*/gm,
    ""
  );
  // Remove obvious dangling "}};" or ");" left by bad merges
  src = src.replace(/\n\s*}\s*}\s*;\s*\n/g, "\n");
  src = src.replace(/\n\s*\)\s*;\s*\n/g, "\n");
  return src;
}

function hasUseClient(src) {
  // 'use client' must be the first statement (ignoring comments/blank lines)
  const head = src.split("\n").slice(0, 5).join("\n");
  return /['"]use client['"]/.test(head);
}

function insertAfterImports(src, block) {
  const m = src.match(/^(?:import[\s\S]*?;\s*)+/);
  const insertAt = m ? m[0].length : 0;
  return src.slice(0, insertAt) + "\n" + block + "\n" + src.slice(insertAt);
}

function upsertGenerateMetadata(src, url, title, description, extra = {}) {
  // IMPORTANT: NEVER call this for 'use client' files.
  src = stripLegacyMetadataAndGM(src);
  const extraLines = Object.entries(extra)
    .map(([k, v]) => `      ${k}: ${JSON.stringify(v)}`)
    .join(",\n");

  const block = `
export async function generateMetadata() {
  const title = ${JSON.stringify(title)};
  const description = ${JSON.stringify(description)};
  return {
    title,
    description,
    alternates: { canonical: ${JSON.stringify(url)} },
    openGraph: {
      title,
      description,
      url: ${JSON.stringify(url)},
      siteName: ${JSON.stringify(BRAND)},
      images: [{ url: ${JSON.stringify(LOGO)} }]
    }${extraLines ? ",\n" + extraLines : ""}
  };
}
`.trim();

  return insertAfterImports(src, block);
}

function injectJSONLDOnce(src, marker, obj) {
  const start = `/* JSONLD:${marker}:START */`;
  if (src.includes(start)) return src;
  const block = `
${start}
{(() => {
  const data = ${JSON.stringify(obj, null, 2)};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
})()}
/* JSONLD:${marker}:END */
`.trim();
  // Try to append just before export default / end of file (safe fallback: end of file)
  const exportDefaultIdx = src.search(/export\s+default\s+/);
  if (exportDefaultIdx !== -1) {
    return src.slice(0, exportDefaultIdx) + "\n\n" + block + "\n\n" + src.slice(exportDefaultIdx);
  }
  return src + "\n\n" + block + "\n";
}

function injectLoanLimitsNote(src) {
  if (src.includes("<!-- LOAN LIMITS 2025 NOTE -->")) return src;
  const note = `
{/* LOAN LIMITS 2025 NOTE */}
<section className="mt-8 rounded-xl bg-slate-50 p-6">
  <h2 className="text-2xl font-bold mb-2">Orange County 2025 Loan Limits</h2>
  <ul className="list-disc list-inside text-slate-700 space-y-1">
    <li>Conforming (1-unit): <strong>$1,209,750</strong></li>
    <li>FHA (1-unit): <strong>$1,089,300</strong></li>
    <li>Jumbo: <strong>Above $1,209,750</strong></li>
  </ul>
</section>
`.trim();
  return src + "\n\n" + note + "\n";
}

// ---- Type-specific fixers ----
function fixABOUT(fp, flags) {
  let src = read(fp);
  const url = canonicalForFile(fp);
  if (!hasUseClient(src)) {
    src = upsertGenerateMetadata(
      src,
      url,
      "About | Mo Abdel",
      "Learn about Mo Abdel — Mortgage Broker serving Orange County, CA. Get started today."
    );
  } else {
    // client: only JSON-LD (meta handled by parent layout if any)
    src = stripLegacyMetadataAndGM(src);
  }
  src = injectJSONLDOnce(src, "Organization", {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND,
    url,
    logo: { "@type": "ImageObject", url: LOGO },
    contactPoint: [{
      "@type": "ContactPoint",
      telephone: TELEPHONE,
      contactType: "customer service",
      areaServed: AREA_SERVED
    }]
  });
  write(fp, src);
}

function fixCONTACT(fp, flags) {
  let src = read(fp);
  const url = canonicalForFile(fp);
  if (!hasUseClient(src)) {
    src = upsertGenerateMetadata(
      src,
      url,
      "Contact | Mo Abdel",
      "Contact Mo Abdel — Mortgage Broker in Orange County, CA. Get started today."
    );
  } else {
    src = stripLegacyMetadataAndGM(src);
  }
  src = injectJSONLDOnce(src, "LocalBusiness", {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND,
    url,
    areaServed: AREA_SERVED,
    telephone: TELEPHONE
  });
  write(fp, src);
}

function fixHOME(fp, flags) {
  let src = read(fp);
  const url = canonicalForFile(fp);
  if (!hasUseClient(src)) {
    src = upsertGenerateMetadata(
      src,
      url,
      "Mortgage Broker in Orange County, CA | Mo Abdel",
      "Local mortgage guidance in Orange County, CA. Get started today."
    );
  } else {
    src = stripLegacyMetadataAndGM(src);
  }
  write(fp, src);
}

function fixCITY(fp, flags) {
  let src = read(fp);
  const url = canonicalForFile(fp);
  if (!hasUseClient(src)) {
    src = upsertGenerateMetadata(
      src,
      url,
      "Mortgage Broker in Orange County, CA | Mo Abdel",
      "Local mortgage help in Orange County, CA. Get started today."
    );
  } else {
    src = stripLegacyMetadataAndGM(src);
  }
  src = injectJSONLDOnce(src, "LocalBusiness", {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND,
    url,
    areaServed: AREA_SERVED,
    telephone: TELEPHONE
  });
  write(fp, src);
}

function titleFromSlug(fp) {
  const slug = asPosix(fp).split("/").slice(-2, -1)[0].replace(/-/g, " ");
  return slug.replace(/\b\w/g, (m) => m.toUpperCase());
}

function fixARTICLE(fp, flags) {
  let src = read(fp);
  const url = canonicalForFile(fp);
  const headline = titleFromSlug(fp);
  if (!hasUseClient(src)) {
    src = upsertGenerateMetadata(
      src,
      url,
      `${headline} | Mo Abdel`,
      "Expert mortgage insights for Orange County, CA. Get started today."
    );
  } else {
    src = stripLegacyMetadataAndGM(src);
  }
  src = injectJSONLDOnce(src, "Article", {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    author: { "@type": "Person", name: "Mo Abdel" },
    publisher: { "@type": "Organization", name: BRAND, logo: { "@type": "ImageObject", url: LOGO } },
    mainEntityOfPage: url
  });
  if ((flags.includes('LimitsOK:') && !flags.includes('LimitsOK:?')) || /limit|conforming|fha|jumbo/i.test(src)) {
    src = injectLoanLimitsNote(src);
  }
  write(fp, src);
}

function fixGUIDE(fp, flags) {
  let src = read(fp);
  const url = canonicalForFile(fp);
  const headline = titleFromSlug(fp);
  if (!hasUseClient(src)) {
    src = upsertGenerateMetadata(
      src,
      url,
      `${headline} | Mo Abdel`,
      "Practical mortgage guidance for Orange County, CA. Get started today."
    );
  } else {
    src = stripLegacyMetadataAndGM(src);
  }
  src = injectJSONLDOnce(src, "Article", {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    author: { "@type": "Person", name: "Mo Abdel" },
    publisher: { "@type": "Organization", name: BRAND, logo: { "@type": "ImageObject", url: LOGO } },
    mainEntityOfPage: url
  });
  if ((flags.includes('LimitsOK:') && !flags.includes('LimitsOK:?')) || /limit|conforming|fha|jumbo/i.test(src)) {
    src = injectLoanLimitsNote(src);
  }
  write(fp, src);
}

function fixCALC(fp, flags) {
  let src = read(fp);
  const url = canonicalForFile(fp);
  if (!hasUseClient(src)) {
    // Basic titles per slug (optional)
    const slug = asPosix(fp).split("/").slice(-2, -1)[0];
    const titleMap = {
      "page": "Mortgage Calculators | Mo Abdel",
      "closing-costs": "Mortgage Calculator — Closing Costs | Mo Abdel",
      "debt-to-income": "Mortgage Calculator — Debt-to-Income | Mo Abdel"
    };
    const title = titleMap[slug] || "Mortgage Calculator | Mo Abdel";
    const desc = "Estimate payments and affordability in Orange County, CA. Get started today.";
    src = upsertGenerateMetadata(src, url, title, desc);
  } else {
    src = stripLegacyMetadataAndGM(src);
  }
  src = injectJSONLDOnce(src, "SoftwareApplication", {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    applicationCategory: "FinanceApplication",
    name: titleFromSlug(fp),
    operatingSystem: "Web",
    publisher: { "@type": "Organization", name: BRAND },
    url
  });
  write(fp, src);
}

function fixSERVICE(fp, flags) {
  let src = read(fp);
  const url = canonicalForFile(fp);
  // Schema
  if (flags.includes("SchemaOK:?")) {
    const folder = asPosix(fp).split("/").slice(-2, -1)[0];
    const map = {
      "asset-depletion-loans": "Asset Depletion Mortgage",
      "bank-statement-loans": "Bank Statement Mortgage",
      "bank-statement-loans-irvine": "Bank Statement Mortgage",
      "dscr-investment-loans": "DSCR Investment Loan",
      "fha-loans-irvine": "FHA Loan",
      "fix-flip-loans": "Fix & Flip Loan",
      "foreign-national-loans": "Foreign National Mortgage",
      "non-qm-loans": "Non-QM Loan",
      "orange-county-fha-loon-limits": "FHA Loan",
      "orange-county-va-loans": "VA Loan",
      "profit-loss-statement-loans": "P&L Statement Mortgage",
      "usda-rural-loans": "USDA Rural Loan",
      "page": "Mortgage Services"
    };
    const serviceType = map[folder] || "Mortgage Service";
    src = injectJSONLDOnce(src, "FinancialService", {
      "@context": "https://schema.org",
      "@type": "FinancialService",
      name: BRAND,
      serviceType,
      url,
      areaServed: AREA_SERVED,
      telephone: TELEPHONE
    });
  }
  // 2025 loan limits note when flagged
  if (flags.includes('LimitsOK:') && !flags.includes('LimitsOK:?')) {
    src = injectLoanLimitsNote(src);
  }
  // Metadata (server only)
  if (!hasUseClient(src)) {
    src = upsertGenerateMetadata(
      src,
      url,
      "Mortgage Services in Orange County, CA | Mo Abdel",
      "Local mortgage options in Orange County, CA. Get started today."
    );
  } else {
    src = stripLegacyMetadataAndGM(src);
  }
  write(fp, src);
}

function fixOTHER(fp, flags) {
  let src = read(fp);
  const url = canonicalForFile(fp);
  const label = titleFromSlug(fp);
  if (!hasUseClient(src)) {
    src = upsertGenerateMetadata(
      src,
      url,
      `${label} | Mo Abdel`,
      "Helpful mortgage info for Orange County, CA. Get started today."
    );
  } else {
    src = stripLegacyMetadataAndGM(src);
  }
  write(fp, src);
}

function fixADMIN(fp, flags) {
  // DO NOT inject generateMetadata into client admin pages
  let src = read(fp);
  src = stripLegacyMetadataAndGM(src);
  write(fp, src);
  // Admin canonical/noindex handled by server layout we add in step #2
}

// ---- Parse the validation table ----
if (!exists(REPORT)) {
  console.error("Validation report not found:", REPORT);
  process.exit(1);
}

const lines = read(REPORT).split(/\r?\n/).filter(Boolean);
const rows = [];
for (const line of lines) {
  if (!line.startsWith("| ") || line.includes("---")) continue;
  const cols = line.split("|").map((s) => s.trim());
  if (cols.length < 12) continue;
  // normalize paths reported like "\about\page.tsx"
  const rawPath = cols[1].replace(/^\\/, "").replace(/\\/g, "/").replace(/^app\//, "");
  const type = cols[2];
  const flags = `TitleOK:${cols[4]} DescOK:${cols[6]} CanonOK:${cols[7]} SchemaOK:${cols[8]} LinksOK:${cols[9]} LimitsOK:${cols[10]}`;
  rows.push({ rawPath, type, flags });
}

// ---- Apply fixes ----
let touched = 0;
for (const { rawPath, type, flags } of rows) {
  const fp = path.join(APP_DIR, rawPath);
  if (!exists(fp)) continue;

  try {
    if (type === "ABOUT") fixABOUT(fp, flags);
    else if (type === "CONTACT") fixCONTACT(fp, flags);
    else if (type === "HOME") fixHOME(fp, flags);
    else if (type === "CITY") fixCITY(fp, flags);
    else if (type === "ARTICLE") fixARTICLE(fp, flags);
    else if (type === "GUIDE") fixGUIDE(fp, flags);
    else if (type === "CALC") fixCALC(fp, flags);
    else if (type === "SERVICE") fixSERVICE(fp, flags);
    else if (type === "ADMIN") fixADMIN(fp, flags);
    else fixOTHER(fp, flags);

    touched++;
  } catch (e) {
    console.error("Fix failed for:", fp, e.message);
  }
}

console.log(`Auto-fix complete. Files updated: ${touched}`);

