import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard - Mo The Broker',
  description: 'Admin dashboard for managing rates and insights',
  robots: 'noindex, nofollow' // Prevent admin pages from being indexed
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}



