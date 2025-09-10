export const dynamic = "force-static";
const BASE="https://www.mothebroker.com", BRAND="Mo Abdel — Mortgage Broker", LOGO=`${BASE}/logo.png`;
export async function generateMetadata(){const url=`${BASE}/tools/mortgage-calculator`,title="Mortgage Calculator | Mo Abdel",description="Try the mortgage calculator for Orange County, CA. Get started today.";return{title,description,alternates:{canonical:url},openGraph:{title,description,url,siteName:BRAND,images:[{url:LOGO}]}};}
export default function ToolsCalcLayout({children}:{children:React.ReactNode}){return <>{children}</>;}