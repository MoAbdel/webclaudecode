import type { Metadata } from 'next';
import React from 'react';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const BASE = 'https://www.mothebroker.com';
  return {
    title: 'Contact — Mortgage Broker Orange County | Mo Abdel',
    description: 'Get rates, ask questions, or schedule a consult with a local mortgage broker.',
    alternates: { canonical: BASE + '/contact' },
    openGraph: { title: 'Contact — Mortgage Broker Orange County', description: 'Reach out for rates and guidance.', url: BASE + '/contact', siteName: 'Mo Abdel — Mortgage Broker' },
  };
}

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <p className="text-slate-700 mb-6">Call, email, or send a message and I’ll get back quickly.</p>
      <div className="space-y-2 mb-8">
        <div>Phone: <a href="tel:+1-949-579-2057" className="text-blue-600 hover:underline">(949) 579-2057</a></div>
        <div>Email: <a href="mailto:hello@mothebroker.com" className="text-blue-600 hover:underline">hello@mothebroker.com</a></div>
      </div>
      <form className="grid gap-3" name="contact" method="POST">
        <input className="border rounded px-3 py-2" name="name" placeholder="Your name" required />
        <input className="border rounded px-3 py-2" type="email" name="email" placeholder="you@example.com" required />
        <textarea className="border rounded px-3 py-2" name="message" rows={4} placeholder="How can I help?" />
        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2" type="submit">Send</button>
      </form>
    </main>
  );
}

