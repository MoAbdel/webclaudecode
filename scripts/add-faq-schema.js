/* eslint-disable */
const fs = require("fs");
const path = require("path");

function findFiles(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    const st = fs.statSync(p);
    if (st.isDirectory()) findFiles(p, acc);
    else if (f === "page.tsx" || f === "page.ts") acc.push(p);
  }
  return acc;
}
const targets = ["app/resources", "app/guides"];
let changed = 0;

function buildSchemaFromSection(html) {
  const qa = [];
  const h3 = [...html.matchAll(/<h3[^>]*>([^<]+)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/gi)];
  const det = [...html.matchAll(/<summary[^>]*>([^<]+)<\/summary>\s*<p[^>]*>([\s\S]*?)<\/p>/gi)];
  h3.forEach((m) => qa.push({ q: m[1].trim(), a: m[2].replace(/<[^>]+>/g, "").trim() }));
  det.forEach((m) => qa.push({ q: m[1].trim(), a: m[2].replace(/<[^>]+>/g, "").trim() }));
  if (!qa.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": qa.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": { "@type": "Answer", "text": a }
    }))
  };
}

targets.forEach((base) => {
  if (!fs.existsSync(base)) return;
  const files = findFiles(base);
  files.forEach((file) => {
    let code = fs.readFileSync(file, "utf8");
    if (!/(FAQ|Frequently Asked Questions|<details>|<summary>)/i.test(code)) return;
    if (/["@]type"\s*:\s*"FAQPage"/i.test(code)) return;

    const schema = buildSchemaFromSection(code);
    if (!schema) return;

    const inject = `
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(${JSON.stringify(
      schema
    )}) }} />
`.trim();

    if (code.includes("</main>")) code = code.replace("</main>", inject + "\n\n</main>");
    else code += "\n\n" + inject + "\n";

    fs.writeFileSync(file, code, "utf8");
    changed++;
    console.log("FAQ schema injected:", file);
  });
});
console.log(`Done. Files changed: ${changed}`);

