export const dynamic = "force-static";
const BASE="https://www.mothebroker.com", BRAND="Mo Abdel — Mortgage Broker", LOGO=`${BASE}/logo.png`;
export async function generateMetadata(){const url=`${BASE}/resources`,title="Mortgage Resources | Mo Abdel",description="Tools and resources for Orange County, CA homebuyers. Get started today.";return{title,description,alternates:{canonical:url},openGraph:{title,description,url,siteName:BRAND,images:[{url:LOGO}]}};}
export default function ResourcesLayout({children}:{children:React.ReactNode}){return <>{children}</>;}