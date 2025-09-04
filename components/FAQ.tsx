'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Script from 'next/script';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  includeFAQSchema?: boolean;
  pageUrl?: string;
  className?: string;
}

export const defaultMortgageFAQs: FAQItem[] = [
  {
    question: "What does a mortgage broker do?",
    answer: "A mortgage broker acts as an intermediary between borrowers and multiple lenders. Unlike banks that only offer their own loan products, mortgage brokers have access to 200+ lenders and can shop your loan to find the best rates, terms, and loan programs that match your specific financial situation. Brokers handle the entire loan process from application to closing, saving you time and potentially thousands of dollars."
  },
  {
    question: "How much does a mortgage broker cost in Orange County?",
    answer: "In most cases, mortgage brokers are paid by the lender, not the borrower, meaning their services are typically free to you. The lender pays the broker a commission (usually 1-2% of the loan amount) after your loan closes successfully. This means you get access to multiple lenders and expert guidance at no direct cost, while often securing better rates than going directly to a single bank."
  },
  {
    question: "What credit score is needed to qualify for a mortgage in Orange County?",
    answer: "Credit score requirements vary by loan type: FHA loans accept scores as low as 580 with 3.5% down (or 500 with 10% down), conventional loans typically require 620+, VA loans are flexible with no strict minimum, and jumbo loans usually need 700+. However, higher scores (740+) get the best rates. Even with lower scores, experienced brokers can find loan programs that work for your situation."
  },
  {
    question: "How long does the mortgage process take with a broker?",
    answer: "The typical mortgage process takes 25-45 days from application to closing. Pre-approval can be completed in 1-3 business days. Working with an experienced broker can actually speed up the process because they know which lenders work best for your situation, have established relationships, and can navigate any issues quickly. They also handle most of the paperwork and communication for you."
  },
  {
    question: "What are the benefits of using a mortgage broker vs. going directly to a bank?",
    answer: "Mortgage brokers offer several key advantages: access to 200+ lenders vs. one bank's products, competitive shopping for the best rates and terms, expert guidance through complex loan programs, personalized service throughout the process, and often better rates than retail banks. Brokers work for you, not the lender, ensuring you get the loan that best fits your needs and financial goals."
  }
];

export default function FAQ({ 
  title = "Frequently Asked Questions", 
  subtitle = "Get answers to common questions about mortgages and working with a broker",
  faqs, 
  includeFAQSchema = true,
  pageUrl = "",
  className = "" 
}: FAQProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Generate FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className={`py-16 bg-slate-50 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </button>
                
                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-6 pb-4"
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                  >
                    <div className="border-t border-slate-200 pt-4">
                      <p className="text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            Have more questions? Get personalized answers from a licensed mortgage professional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Expert Guidance
            </a>
            <a
              href="tel:(949) 579-2057"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Call (949) 579-2057
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Structured Data */}
      {includeFAQSchema && (
        <Script
          id={`faq-structured-data${pageUrl ? `-${pageUrl.replace(/\//g, '-')}` : ''}`}
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData)
          }}
        />
      )}
    </section>
  );
}