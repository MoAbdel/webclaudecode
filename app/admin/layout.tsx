export const dynamic = "force-static";
export async function generateMetadata() {
  const base = "https://www.mothebroker.com";
  return {
    title: "Admin | Mo Abdel",
    description: "Administrative tools (noindex).",
    alternates: { canonical: `${base}/admin` },
    robots: { index: false, follow: true },
  };
}
export default function AdminLayout({ children }: { children: React.ReactNode }) { return <>{children}</>; }