'use client';
import React from 'react';

type Props = {
  title: string;
  subtitle?: string;
  city?: string;
  county?: string;
  slug: string;
  lastUpdatedISO?: string;
  heroCTA?: { label: string; href: string };
  sections: { id: string; heading: string; body: React.ReactNode }[];
  bullets?: string[];
  faqs: { q: string; a: string }[];
  internalLinks?: { label: string; href: string }[];
};

export default function SeoServicePage({
  title,
  subtitle,
  city,
  county = 'Orange County, CA',
  slug,
  lastUpdatedISO,
  heroCTA = { label: 'Get a free quote', href: '/apply' },
  sections,
  bullets = [],
  faqs,
  internalLinks = [],
}: Props) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold">{title}</h1>
        {subtitle && <p className="mt-2 text-lg opacity-80">{subtitle}</p>}
        <div className="mt-4">
          <a className="inline-block rounded-xl px-5 py-3 border" href={heroCTA.href}>
            {heroCTA.label}
          </a>
        </div>
        {lastUpdatedISO && (
          <p className="mt-2 text-sm opacity-70">Last updated: {new Date(lastUpdatedISO).toLocaleDateString()}</p>
        )}
      </header>

      {bullets.length > 0 && (
        <ul className="list-disc pl-6 mb-6 space-y-1">{bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
      )}

      {sections.map((s) => (
        <section id={s.id} key={s.id} className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">{s.heading}</h2>
          <div className="prose prose-neutral">{s.body}</div>
        </section>
      ))}

      {faqs.length > 0 && (
        <section id="faqs" className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="border rounded-lg p-4">
                <summary className="font-medium cursor-pointer">{f.q}</summary>
                <p className="mt-2">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {internalLinks.length > 0 && (
        <nav className="mt-10">
          <h3 className="text-xl font-semibold mb-2">Helpful next steps</h3>
          <ul className="list-disc pl-6 space-y-1">
            {internalLinks.map((l, i) => (
              <li key={i}><a className="underline" href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </nav>
      )}
    </main>
  );
}