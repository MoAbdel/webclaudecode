// scripts/seo-geo-harden.js
// Idempotent sitewide SEO/GEO hardener for Next.js 15 (app/ dir).
// - Adds/updates generateMetadata in server pages or nearest section layout
// - Standardizes titles (<= ~600px visual), descriptions (<=160, include geo + CTA)
// - Sets www canonicals
// - Injects JSON-LD by type (Service, City, Article, Resource, Guide, Calculator, About, Contact, Home)
// - Adds Related Options to service pages
// - Ensures 2025 loan mentions where relevant
// Skips any file containing 'use client' (relies on section layout instead)

const fs = require("fs");
const path = require("path");
const { BRAND, SHORT_BRAND, AREA_SERVED, TELEPHONE, CANONICAL_BASE, LOGO, PROFILES, LIMITS } =
  require("../lib/seo-constants.js");

// --- helpers ---
const APP = path.join(process.cwd(), "app");
function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (e.isFile() && e.name === "page.tsx") acc.push(p);
  }
  return acc;
}
function routeFromFile(file) {
  let rel = file.replace(APP, "").replace(/\\/g, "/");
  rel = rel.replace(/\/page\.tsx$/, "");
  return rel || "/";
}
function read(p){return fs.readFileSync(p,"utf8");}
function write(p,s){fs.writeFileSync(p,s,"utf8");}
function ensureDir(p){fs.mkdirSync(path.dirname(p),{recursive:true});}
function trimPxTitle(str){
  // crude visual width limiter (~7px/char; target ~600px)
  const maxChars = Math.floor(600/7);
  return str.length <= maxChars ? str : str.slice(0, maxChars-1).replace(/\s+\S*$/,"") + " …";
}
function hasUseClient(src){return /^\s*['"]use client['"]/.test(src);} 
function hasGenMeta(src){return /export\s+async\s+function\s+generateMetadata\s*\(/.test(src) || /export\s+const\s+metadata\s*=/.test(src);} 
function upToLayout(file){
  // climb: app/sect/sub/page.tsx -> app/sect/sub/layout.tsx -> app/sect/layout.tsx -> app/layout.tsx
  let dir = path.dirname(file);
  while (true){
    const cand = path.join(dir, "layout.tsx");
    if (fs.existsSync(cand)) return cand;
    if (dir === APP) break;
    dir = path.dirname(dir);
  }
  return path.join(APP,"layout.tsx");
}
function upsertLayout(layoutPath){
  if (!fs.existsSync(layoutPath)){
    ensureDir(layoutPath);
    const rel = layoutPath.replace(APP,"").replace(/\\/g,"/");
    const sectRoute = rel.replace(/\/layout\.tsx$/,"") || "";
    const base = sectRoute ? sectRoute : "";
    const routeExample = base || "";
    write(layoutPath, `import React from "react";
export const dynamic = "force-static";
export async function generateMetadata() {
  const BASE = "${CANONICAL_BASE}";
  // Title/description here are defaults; page-level can override.
  const title = "${SHORT_BRAND}";
  const description = "Expert mortgage guidance in ${AREA_SERVED}. Get started today.";
  return {
    title,
    description,
    alternates: { canonical: BASE + "${routeExample || "/"}" },
    openGraph: { title, description, url: BASE + "${routeExample || "/"}", siteName: "${BRAND}", images: ["${LOGO}"] },
    twitter: { card: "summary_large_image", title, description },
  };
}
export default function Layout({ children }:{children:React.ReactNode}){ return <>{children}</>; }
`);
  }
}
function injectGenMetaPage(src, route){
  // Remove old export const metadata to avoid conflicts
  src = src.replace(/export\s+const\s+metadata\s*=\s*\{[\s\S]*?\};?/g, "");
  const block = `
export const dynamic = "force-static";
export async function generateMetadata() {
  const BASE = "${CANONICAL_BASE}";
  const title = "${trimPxTitle("Mortgage Broker in " + AREA_SERVED.split(",")[0] + ", CA | " + SHORT_BRAND)}";
  const description = "Local mortgage expertise in ${AREA_SERVED}. Get started today.";
  return {
    title,
    description,
    alternates: { canonical: BASE + "${route}" },
    openGraph: { title, description, url: BASE + "${route}", siteName: "${BRAND}", images: ["${LOGO}"] },
    twitter: { card: "summary_large_image", title, description },
  };
}
`;
  // Prepend safely after imports/'use client'
  if (/['"]use client['"]/.test(src)) return src; // guard (shouldn't reach)
  const importIdx = src.indexOf("\n");
  return src.slice(0, importIdx+1) + block + src.slice(importIdx+1);
}
function addRelatedOptionsIfMissing(src){
  if (!/Related Options/.test(src)){
    const inject = `
{/* Related Options (internal links) */}
<section className="mt-16">
  <h2 className="text-2xl font-bold mb-4">Related Options</h2>
  <ul className="list-disc list-inside text-blue-700 space-y-1">
    <li><a href="/loan-programs/conventional-loans">Conventional Loans</a></li>
    <li><a href="/loan-programs/jumbo-loans">Jumbo Loans</a></li>
  </ul>
</section>`;
    src = src.replace(/<\/main>\s*$/s, m => inject + "\n" + m);
    if (!src.includes("Related Options")) src += inject;
  }
  return src;
}
function ensureLoanLimitCopy(src, type){
  const hasConforming = src.includes(LIMITS.CONFORMING_1U_2025);
  const hasFha = src.includes(LIMITS.FHA_1U_2025);
  if (type === "SERVICE"){
    let note = "";
    if (!hasConforming || !hasFha){
      note = `
<section className="my-8 bg-slate-50 p-4 rounded-lg">
  <h3 className="text-xl font-semibold mb-2">Orange County 2025 Loan Limits</h3>
  <ul className="list-disc list-inside">
    <li>Conforming (1-unit): <strong>${LIMITS.CONFORMING_1U_2025}</strong></li>
    <li>FHA (1-unit): <strong>${LIMITS.FHA_1U_2025}</strong></li>
    <li>Jumbo: <strong>${LIMITS.JUMBO_NOTE}</strong></li>
  </ul>
</section>`;
    }
    if (note && !src.includes("2025 Loan Limits")) src += note;
  }
  return src;
}
function addJsonLdBlock(src, type, route, titleOverride){
  const hasScript = /<script[^>]+application\/ld\+json/.test(src);
  if (hasScript) return src;

  const serviceMap = {
    "conventional-loans":"Conventional Mortgage",
    "rate-term-refinance":"Rate and Term Refinance",
    "cash-out-refinance":"Cash-Out Refinance",
    "heloc":"Home Equity Line of Credit (HELOC)",
    "heloan":"Home Equity Loan (HELOAN)",
    "fha-loans":"FHA Loan",
    "va-loans":"VA Loan",
    "jumbo-loans":"Jumbo Mortgage",
  };

  let schema = null;
  if (type==="SERVICE"){
    const key = route.split("/").pop();
    const serviceType = serviceMap[key] || "Mortgage Service";
    schema = {
      "@context":"https://schema.org",
      "@type":"FinancialService",
      "name": BRAND,
      "serviceType": serviceType,
      "areaServed": AREA_SERVED,
      "url": CANONICAL_BASE + route,
      "telephone": TELEPHONE,
      "address": {
        "@type":"PostalAddress",
        "addressLocality":"Orange County",
        "addressRegion":"CA",
        "addressCountry":"US"
      }
    };
  } else if (type==="CITY"){
    schema = {
      "@context":"https://schema.org",
      "@type":"LocalBusiness",
      "name": BRAND,
      "url": CANONICAL_BASE + route,
      "areaServed": AREA_SERVED,
      "telephone": TELEPHONE,
      "image": LOGO,
      "sameAs": PROFILES
    };
  } else if (type==="ARTICLE" || type==="GUIDE" || type==="RESOURCE"){
    const title = titleOverride || `${SHORT_BRAND}`;
    schema = {
      "@context":"https://schema.org",
      "@type":"Article",
      "headline": title,
      "mainEntityOfPage": CANONICAL_BASE + route,
      "author": {"@type":"Person","name":"Mo Abdel"},
      "publisher": {"@type":"Organization","name": BRAND, "logo": {"@type":"ImageObject","url": LOGO}},
      "image": LOGO
    };
  } else if (type==="CALC"){
    schema = {
      "@context":"https://schema.org",
      "@type":"SoftwareApplication",
      "name":"Mortgage Calculator",
      "applicationCategory":"FinanceApplication",
      "operatingSystem":"Web",
      "publisher":{"@type":"Organization","name":BRAND,"url":CANONICAL_BASE}
    };
  } else if (type==="ABOUT"){
    schema = {
      "@context":"https://schema.org",
      "@type":"Organization",
      "name": BRAND,
      "url": CANONICAL_BASE,
      "logo": LOGO,
      "sameAs": PROFILES,
      "contactPoint": [{"@type":"ContactPoint","telephone": TELEPHONE,"contactType":"customer service","areaServed": AREA_SERVED}]
    };
  } else if (type==="CONTACT"){
    schema = {
      "@context":"https://schema.org",
      "@type":"LocalBusiness",
      "name": BRAND,
      "url": CANONICAL_BASE + "/contact",
      "telephone": TELEPHONE,
      "areaServed": AREA_SERVED
    };
  }
  if (!schema) return src;

  const block = `
<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify(${JSON.stringify(schema)})
}} />`;

  const idx = src.lastIndexOf("</");
  if (idx !== -1) return src.slice(0, idx) + block + "\n" + src.slice(idx);
  return src + "\n" + block + "\n";
}
function classify(route){
  if (route === "/") return "HOME";
  if (route.startsWith("/loan-programs")) return "SERVICE";
  if (route.startsWith("/areas")) return "CITY";
  if (route.startsWith("/articles")) return "ARTICLE";
  if (route.startsWith("/guides")) return "GUIDE";
  if (route.startsWith("/resources")) return "RESOURCE";
  if (route.startsWith("/calculator") || route.startsWith("/tools/mortgage-calculator")) return "CALC";
  if (route === "/about") return "ABOUT";
  if (route === "/contact") return "CONTACT";
  return "OTHER";
}
function titleFor(route, type){
  if (type==="CITY"){
    const city = route.split("/").pop().replace(/-mortgage.*$/,"").replace(/-/g," ");
    return trimPxTitle(`Mortgage Broker in ${city.replace(/\b\w/g, m=>m.toUpperCase())}, CA | ${SHORT_BRAND}`);
  }
  if (type==="SERVICE"){
    const map = {
      "conventional-loans":"Conventional Loans",
      "rate-term-refinance":"Rate & Term Refi",
      "cash-out-refinance":"Cash-Out Refi",
      "heloc":"HELOC",
      "heloan":"HELOAN",
      "fha-loans":"FHA Loan",
      "va-loans":"VA Loan",
      "jumbo-loans":"Jumbo Loan",
    };
    const key = route.split("/").pop();
    return trimPxTitle(`${map[key] || "Mortgage Options"} in ${AREA_SERVED} | ${SHORT_BRAND}`);
  }
  if (type==="ARTICLE"||type==="GUIDE"||type==="RESOURCE"){
    const slug = route.split("/").pop().replace(/-/g," ");
    return trimPxTitle(`${slug.replace(/\b\w/g,m=>m.toUpperCase())} | ${SHORT_BRAND}`);
  }
  if (type==="CALC"){
    return `Mortgage Calculator | ${SHORT_BRAND}`;
  }
  if (type==="ABOUT") return `About ${SHORT_BRAND}`;
  if (type==="CONTACT") return `Contact ${SHORT_BRAND}`;
  if (type==="HOME") return `${SHORT_BRAND} | Mortgage Broker in ${AREA_SERVED}`;
  return `${SHORT_BRAND}`;
}
function descFor(type){
  const base = `Expert mortgage guidance in ${AREA_SERVED}. Get started today.`;
  if (type==="SERVICE") return `Local ${AREA_SERVED} mortgage options with competitive terms. Get started today.`;
  if (type==="CITY") return `Trusted mortgage broker in ${AREA_SERVED}. Pre-approvals and custom options. Get started today.`;
  if (type==="ARTICLE"||type==="GUIDE"||type==="RESOURCE") return `Learn mortgage strategies for ${AREA_SERVED}. Read the guide and get started today.`;
  if (type==="CALC") return `Free mortgage calculators for ${AREA_SERVED}. Estimate payments and affordability.`;
  if (type==="ABOUT") return `About ${SHORT_BRAND}, a mortgage broker serving ${AREA_SERVED}.`;
  if (type==="CONTACT") return `Contact a local mortgage expert in ${AREA_SERVED}.`;
  if (type==="HOME") return `Mortgage broker for ${AREA_SERVED}. Compare options and get pre-approved today.`;
  return base;
}

// --- main ---
const pages = walk(APP);
let updated = 0, layoutTouched = new Set();

for (const file of pages){
  const route = routeFromFile(file);
  const type = classify(route);
  let src = read(file);

  // skip clients: rely on layout for metadata
  const client = hasUseClient(src);

  // ensure a layout exists for the section; metadata lives there if page is client or lacks genMeta
  const layoutPath = upToLayout(file);
  upsertLayout(layoutPath);
  layoutTouched.add(layoutPath);

  // PAGE-LEVEL metadata only for server pages without generateMetadata
  if (!client && !hasGenMeta(src)){
    src = injectGenMetaPage(src, route);
  }

  // Service-specific content (loan limits + related links)
  if (type==="SERVICE"){
    src = ensureLoanLimitCopy(src, type);
    src = addRelatedOptionsIfMissing(src);
  }

  // JSON-LD per type (add only if none present in page)
  src = addJsonLdBlock(src, type, route, titleFor(route,type));

  write(file, src);
  updated++;
}

// Also harden section layouts: update their generateMetadata to ensure canonical URL points to the section root (www base).
for (const layoutPath of layoutTouched){
  let s = read(layoutPath);
  // normalize base
  s = s.replace(/const\s+BASE\s*=\s*["'`](.*?)["'`];?/, `const BASE = "${CANONICAL_BASE}";`);
  // ensure siteName/images present
  if (!/siteName:\s*/.test(s)) {
    s = s.replace(/openGraph:\s*\{([\s\S]*?)\}/m, (m,g)=> m.replace(g, `${g}, siteName: "${BRAND}", images: ["${LOGO}"]`));
  }
  write(layoutPath, s);
}

console.log(`SEO/GEO hardening complete. Files updated: ${updated}, layouts ensured: ${layoutTouched.size}.`);
console.log(`Next steps:
  1) npm run build
  2) Inspect a few key pages’ <head> for title/desc/canonical.
  3) Test rich results (FinancialService, LocalBusiness, Article, SoftwareApplication) with Google’s tools.
`);