/* eslint-disable */
const fs = require("fs");
const path = require("path");
const { CANONICAL_BASE } = require("../lib/seo-constants");

const TITLE_SUFFIX = " | Mo Abdel";

function titleWidthPx(str) {
  const map = { " ": 3.5, "|": 6, "-": 6, ",": 6, "&": 6 };
  let px = 0;
  for (const ch of str) {
    if (map[ch] !== undefined) px += map[ch];
    else if ("MW".includes(ch)) px += 9;
    else if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(ch)) px += 8;
    else if ("iltfj".includes(ch)) px += 5;
    else if ("0123456789".includes(ch)) px += 7;
    else px += 7;
  }
  return px;
}
const ensureSuffix = (t) => `${t.trim().replace(/\s+\|\s+Mo Abdel.*$/i, "")}${TITLE_SUFFIX}`;

function trimTitleTo600Px(title) {
  let t = title.replace(/\s+/g, " ").trim();
  if (!t.endsWith(TITLE_SUFFIX)) t = ensureSuffix(t);
  t = t.replace(/\s\|\s[^|]+(?=\s\|)/g, "");
  while (titleWidthPx(t) > 600) {
    t = t.replace(/ in Orange County, CA/i, " in Orange County");
    t = t.replace(/\s{2,}/g, " ").trim();
    if (titleWidthPx(t) <= 600) break;
    const [left] = t.split(TITLE_SUFFIX);
    const parts = left.split(" ");
    if (parts.length <= 3) break;
    parts.splice(parts.length - 1, 1);
    t = parts.join(" ") + TITLE_SUFFIX;
  }
  return t;
}
function clampDesc(desc) {
  let d = desc.replace(/\s+/g, " ").trim();
  if (!/Orange County, CA/i.test(d)) d = (d + " Orange County, CA.").replace(/\.{2}/g, ".");
  if (!/(Get|Call|Compare|Start|Apply)/i.test(d)) d = d.replace(/\.$/, "") + " Get started today.";
  if (d.length > 160) d = d.slice(0, 157).replace(/\s+\S*$/, "") + "...";
  return d;
}
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
const TARGETS = ["app/areas", "app/resources", "app/guides", "app/loan-programs"];

function upsertGenerateMetadata(code, route) {
  if (/export\s+async\s+function\s+generateMetadata\s*\(/.test(code)) {
    return code.replace(
      /alternates:\s*{[^}]*canonical[^}]*}/gs,
      (m) => m.replace(/https?:\/\/(www\.)?mothebroker\.com[^\"]*/g, CANONICAL_BASE + route)
    );
  }
  if (/export\s+const\s+metadata\s*=/.test(code)) {
    const titleMatch = code.match(/title:\s*['"`]([^'"`]+)['"`]/);
    const descMatch = code.match(/description:\s*['"`]([^'"`]+)['"`]/);
    const titleRaw = titleMatch ? titleMatch[1] : "Mortgage Broker in Orange County, CA";
    const descRaw = descMatch ? descMatch[1] : "Local mortgage options in Orange County, CA. Get started today.";
    const title = trimTitleTo600Px(ensureSuffix(titleRaw));
    const description = clampDesc(descRaw);
    const codeNoMeta = code.replace(/export\s+const\s+metadata\s*=[\s\S]*?\};?/m, "");
    const inject = `
export async function generateMetadata() {
  return {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    alternates: { canonical: ${JSON.stringify(CANONICAL_BASE + route)} }
  }
}`.trim();
    return codeNoMeta.replace(/(export\s+default)/, inject + "\n\n$1");
  }
  const title = trimTitleTo600Px(ensureSuffix("Mortgage Broker in Orange County, CA"));
  const description = clampDesc("Local mortgage options in Orange County, CA. Get started today.");
  if (/export\s+default/.test(code)) {
    return code.replace(
      /(export\s+default)/,
      `export async function generateMetadata(){return{title:${JSON.stringify(
        title
      )},description:${JSON.stringify(description)},alternates:{canonical:${JSON.stringify(
        CANONICAL_BASE + route
      )}}}};\n\n$1`
    );
  }
  return `
export async function generateMetadata(){return{title:${JSON.stringify(
    title
  )},description:${JSON.stringify(description)},alternates:{canonical:${JSON.stringify(
    CANONICAL_BASE + route
  )}}}};
` + code;
}
function routeFromPath(filePath) {
  return (
    "/" +
    filePath.replace(/^app[\\\/]/, "").replace(/[\\\\]/g, "/").replace(/\/page\.tsx?$/, "")
  );
}

let changed = 0;
for (const base of TARGETS) {
  if (!fs.existsSync(base)) continue;
  const files = findFiles(base);
  files.forEach((file) => {
    const route = routeFromPath(file);
    const src = fs.readFileSync(file, "utf8");
    const out = upsertGenerateMetadata(src, route);
    if (out !== src) {
      fs.writeFileSync(file, out, "utf8");
      changed++;
      console.log("metadata enforced:", file);
    }
  });
}
console.log(`Done. Files changed: ${changed}`);

