/* eslint-disable */
const fs = require('fs');
const path = require('path');
const { CANONICAL_BASE } = require('../lib/seo-constants');

function findFiles(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    const st = fs.statSync(p);
    if (st.isDirectory()) findFiles(p, acc);
    else if (f === 'page.tsx' || f === 'page.ts') acc.push(p);
  }
  return acc;
}
function titleFrom(code) {
  const m1 = code.match(/title:\s*['"`]([^'"`]+)['"`]/);
  const m2 = code.match(/generateMetadata[\s\S]*?return\s*{[\s\S]*?title:\s*['"`]([^'"`]+)['"`]/);
  return (m2 && m2[1]) || (m1 && m1[1]) || '';
}
function descFrom(code) {
  const m1 = code.match(/description:\s*['"`]([^'"`]+)['"`]/);
  const m2 = code.match(/generateMetadata[\s\S]*?return\s*{[\s\S]*?description:\s*['"`]([^'"`]+)['"`]/);
  return (m2 && m2[1]) || (m1 && m1[1]) || '';
}
function canonicalFrom(code) {
  const m = code.match(/alternates:\s*{[\s\S]*?canonical:\s*['"`]([^'"`]+)['"`]/);
  return (m && m[1]) || '';
}
function px(str) {
  const map = { ' ': 3.5, '|': 6, '-': 6, ',': 6, '&': 6 };
  let s = 0;
  for (const ch of str) {
    if (map[ch] !== undefined) s += map[ch];
    else if ('MW'.includes(ch)) s += 9;
    else if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(ch)) s += 8;
    else if ('iltfj'.includes(ch)) s += 5;
    else if ('0123456789'.includes(ch)) s += 7;
    else s += 7;
  }
  return s;
}
function typeFor(file) {
  const fp = file.replace(/\\/g, '/');
  if (fp.includes('/loan-programs/')) return 'SERVICE';
  if (fp.includes('/areas/')) return 'CITY';
  if (fp.includes('/articles/')) return 'ARTICLE';
  if (fp.includes('/resources/')) return 'RESOURCE';
  if (fp.includes('/guides/')) return 'GUIDE';
  if (fp.includes('/calculator/') || fp.includes('/tools/mortgage-calculator')) return 'CALC';
  if (fp.endsWith('app/page.tsx')) return 'HOME';
  if (fp.includes('/about/')) return 'ABOUT';
  if (fp.includes('/contact/')) return 'CONTACT';
  return 'OTHER';
}
function requiresSchema(type) {
  return {
    SERVICE: [/FinancialService/, /FAQPage/],
    CITY: [/LocalBusiness/],
    ARTICLE: [/"@type":\s*"Article"/],
    GUIDE: [/"@type":\s*(Article|TechArticle)"/],
    RESOURCE: [/"@type":\s*(TechArticle|Article)"/],
    CALC: [/"@type":\s*"SoftwareApplication"/],
    ABOUT: [/"@type":\s*"Organization"/],
    CONTACT: [/LocalBusiness/],
    HOME: [/Person/, /Organization/]
  }[type] || [];
}
function hasInternalLinks(type, code) {
  if (type === 'SERVICE') return /Related Options/.test(code);
  if (type === 'ARTICLE' || type === 'GUIDE')
    return /href=["']\/loan-programs\//.test(code) && /href=["']\/areas\//.test(code);
  return true;
}
function hasLoanLimits(type, code) {
  if (!/(SERVICE|ARTICLE|RESOURCE|GUIDE)/.test(type)) return true;
  if (/conforming|fha|jumbo/i.test(code) === false) return true;
  const ok1 = /\$1,209,750/.test(code);
  const ok2 = /\$1,089,300/.test(code);
  const ok3 = /(>\s*\$1,209,750|above\s+\$1,209,750)/i.test(code);
  return ok1 || ok2 || ok3;
}

const files = findFiles('app');
let fails = [];
for (const file of files) {
  const code = fs.readFileSync(file, 'utf8');
  const t = typeFor(file);
  const title = titleFrom(code);
  const desc = descFrom(code);
  const canon = canonicalFrom(code);
  const titlePx = px(title);
  const titleOk = title && titlePx <= 600 && /\|\s*Mo Abdel$/.test(title);
  const descOk = desc && desc.length <= 160 && /Orange County, CA/i.test(desc);
  const canonOk = canon && canon.startsWith(CANONICAL_BASE);
  const schemaReq = requiresSchema(t);
  const schemaOk = schemaReq.every((re) => re.test(code));
  const linksOk = hasInternalLinks(t, code);
  const limitsOk = hasLoanLimits(t, code);
  const pass = titleOk && descOk && canonOk && schemaOk && linksOk && limitsOk;
  if (!pass) {
    const reasons = [];
    if (!titleOk) reasons.push('TitleOK');
    if (!descOk) reasons.push('DescOK');
    if (!canonOk) reasons.push('CanonOK');
    if (!schemaOk) reasons.push('SchemaOK');
    if (!linksOk) reasons.push('LinksOK');
    if (!limitsOk) reasons.push('LimitsOK');
    fails.push({ file, type: t, reasons });
  }
}
console.log('Remaining FAIL rows:', fails.length);
fails.slice(0, 200).forEach((f) => {
  console.log(`- ${f.file} [${f.type}] -> ${f.reasons.join(', ')}`);
});

