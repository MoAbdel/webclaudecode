/* eslint-disable */
const fs = require("fs");
const path = require("path");

function findFiles(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) findFiles(p, acc);
    else if (f === "page.tsx" || f === "page.ts") acc.push(p);
  }
  return acc;
}
function ensureServiceRelated(code) {
  if (!/\/loan-programs\//.test(code)) return code;
  if (/Related Options/.test(code)) return code;
  const block = `
<section className="mt-16">
  <h2 className="text-2xl font-bold mb-4">Related Options</h2>
  <ul className="list-disc list-inside text-blue-700 space-y-1">
    <li><Link href="/loan-programs/conventional-loans">Conventional Loans</Link></li>
    <li><Link href="/loan-programs/jumbo-loans">Jumbo Loans</Link></li>
  </ul>
</section>
`.trim();
  if (code.includes("</main>")) return code.replace("</main>", block + "\n\n</main>");
  return code + "\n\n" + block + "\n";
}
function ensureArticleGuideLinks(file, code) {
  const fp = file.replace(/\\/g, "/");
  if (!/(\/articles\/|\/guides\/)/.test(fp)) return code;
  const hasService = /href=["']\/loan-programs\//.test(code);
  const hasCity = /href=["']\/areas\//.test(code);
  if (hasService && hasCity) return code;
  const block = `
<div className="sr-only">
  <Link href="/loan-programs/conventional-loans">Conventional Loans</Link>
  <Link href="/areas/irvine">Mortgage Broker in Irvine, CA</Link>
 </div>
`.trim();
  if (code.includes("</main>")) return code.replace("</main>", block + "\n\n</main>");
  return code + "\n\n" + block + "\n";
}

const serviceFiles = findFiles("app/loan-programs");
const articleFiles = findFiles("app/articles");
const guideFiles = findFiles("app/guides");

let changed = 0;
[...serviceFiles].forEach((file) => {
  let src = fs.readFileSync(file, "utf8");
  const out = ensureServiceRelated(src);
  if (out !== src) {
    fs.writeFileSync(file, out, "utf8");
    changed++;
    console.log("related options added:", file);
  }
});
[...articleFiles, ...guideFiles].forEach((file) => {
  let src = fs.readFileSync(file, "utf8");
  const out = ensureArticleGuideLinks(file, src);
  if (out !== src) {
    fs.writeFileSync(file, out, "utf8");
    changed++;
    console.log("content links added:", file);
  }
});
console.log(`Done. Files changed: ${changed}`);

