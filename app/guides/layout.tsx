import React from 'react';

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <section className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-3">Related Guides</h2>
        <ul className="list-disc list-inside text-blue-700">
          <li><a href="/loan-programs/fha-loans">FHA Loans in Orange County, CA</a></li>
          <li><a href="/loan-programs/va-loans">VA Loans in Orange County, CA</a></li>
        </ul>
      </section>
    </div>
  );
}



