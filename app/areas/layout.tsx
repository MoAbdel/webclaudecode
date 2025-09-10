export const dynamic = "force-static";
const BASE="https://www.mothebroker.com", BRAND="Mo Abdel — Mortgage Broker", LOGO=`${BASE}/logo.png`;
export async function generateMetadata(){const url=`${BASE}/areas`,title="Orange County Mortgage Areas | Mo Abdel",description="City-specific mortgage help across Orange County, CA. Get started today.";return{title,description,alternates:{canonical:url},openGraph:{title,description,url,siteName:BRAND,images:[{url:LOGO}]}};}
export default function AreasLayout({children}:{children:React.ReactNode}){return <>{children}</>;}