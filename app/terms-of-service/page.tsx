import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, AlertTriangle, Scale, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Mo Abdel Mortgage Broker - NMLS #1426884',
  description: 'Terms of Service for Mo Abdel Wholesale Mortgage Services. Legal terms, conditions, and disclaimers for our mortgage broker services.',
  robots: 'noindex, nofollow' // Typical for legal pages
};

export default function TermsOfServicePage() {
  const lastUpdated = "January 15, 2025";
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Scale className="w-4 h-4 mr-2" />
            Legal Document
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-slate-600">
            Legal terms and conditions for using our mortgage broker services
          </p>
          <p className="text-sm text-slate-500 mt-4">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
          <div className="flex">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Legal Notice</h3>
              <p className="text-yellow-700">
                <strong>These terms of service are currently under legal review and will be updated with final compliance language. 
                Please contact us directly for current service terms until this notice is removed.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Terms of Service Content */}
        <div className="prose prose-lg max-w-none">
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Agreement to Terms</h2>
            <p className="text-slate-700 mb-4">
              These Terms of Service ("Terms") govern your use of the website and services provided by 
              Mohammad Abdelfattah, NMLS #1426884, operating as a licensed mortgage loan originator with NEXA Mortgage 
              ("we," "us," or "our"). By accessing our website or using our services, you agree to be bound by these Terms.
            </p>
            <p className="text-slate-700">
              If you do not agree to these Terms, please do not use our website or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Professional Licensing and Regulatory Information</h2>
            <div className="bg-blue-50 p-6 rounded-lg mb-4">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Licensing Information</h3>
              <ul className="list-disc pl-6 text-slate-700">
                <li><strong>Mortgage Loan Originator:</strong> Mohammad Abdelfattah, NMLS #1426884</li>
                <li><strong>Licensed Company:</strong> NEXA Mortgage</li>
                <li><strong>Equal Housing Lender</strong></li>
                <li><strong>License Verification:</strong> <a href="https://www.nmlsconsumeraccess.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.nmlsconsumeraccess.org</a></li>
                <li><strong>Licensed States:</strong> California, Washington, Virginia, Colorado</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Services Description</h2>
            <p className="text-slate-700 mb-4">We provide the following mortgage broker services:</p>
            <ul className="list-disc pl-6 text-slate-700 mb-6">
              <li>Mortgage loan consultation and application assistance</li>
              <li>Access to wholesale lending network (200+ lenders)</li>
              <li>Loan program comparison and recommendations</li>
              <li>Pre-approval and pre-qualification services</li>
              <li>Rate and term analysis</li>
              <li>Refinancing services and consultations</li>
              <li>Specialized loan programs (Non-QM, Bank Statement, Asset Depletion, etc.)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Important Disclaimers</h2>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3">No Loan Commitment</h3>
              <p className="text-red-700">
                <strong>This is not a commitment to lend.</strong> All information contained herein is subject to change without notice. 
                All loans are subject to credit approval, income verification, and property appraisal. Equal Housing Lender.
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">No Financial Advice</h3>
              <p className="text-orange-700">
                We are mortgage brokers, not financial advisors. Information provided is for educational purposes only and 
                should not be considered financial advice. You should consult with qualified financial professionals regarding 
                your specific financial situation.
              </p>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Information Accuracy</h3>
              <p className="text-gray-700">
                While we strive to provide accurate and up-to-date information, interest rates, loan terms, and program 
                availability are subject to change without notice. All information must be verified prior to loan approval.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">User Obligations and Restrictions</h2>
            <p className="text-slate-700 mb-4">By using our services, you agree to:</p>
            <ul className="list-disc pl-6 text-slate-700 mb-6">
              <li>Provide accurate and complete information</li>
              <li>Not misrepresent your financial situation or intentions</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not use our services for any fraudulent or illegal purposes</li>
              <li>Respect intellectual property rights</li>
              <li>Not attempt to circumvent security measures</li>
            </ul>

            <p className="text-slate-700 mb-4">You agree NOT to:</p>
            <ul className="list-disc pl-6 text-slate-700 mb-6">
              <li>Submit false or misleading loan applications</li>
              <li>Share login credentials or account access</li>
              <li>Interfere with or disrupt our services</li>
              <li>Use automated systems to access our website</li>
              <li>Reverse engineer or copy our proprietary processes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitation of Liability</h2>
            <p className="text-slate-700 mb-4">
              <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong>
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-6">
              <li>We are not liable for any indirect, incidental, or consequential damages</li>
              <li>Our total liability is limited to the amount of fees paid to us</li>
              <li>We are not responsible for lender decisions or loan denials</li>
              <li>We are not liable for market rate changes or program discontinuations</li>
              <li>We are not responsible for third-party service provider actions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Intellectual Property Rights</h2>
            <p className="text-slate-700 mb-4">
              All content on this website, including but not limited to text, graphics, logos, images, and software, 
              is the property of Mohammad Abdelfattah or our licensors and is protected by copyright and other intellectual property laws.
            </p>
            <p className="text-slate-700">
              You may not reproduce, distribute, modify, or create derivative works from our content without written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Privacy and Data Protection</h2>
            <p className="text-slate-700 mb-4">
              Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our 
              <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>, 
              which is incorporated into these Terms by reference.
            </p>
            <p className="text-slate-700">
              By using our services, you consent to the collection and use of your information as described in our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Third-Party Services and Links</h2>
            <p className="text-slate-700 mb-4">
              Our website may contain links to third-party websites or services. We are not responsible for:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-6">
              <li>The content or privacy practices of third-party sites</li>
              <li>Lender decisions, rates, or terms offered by our lending partners</li>
              <li>Actions of appraisers, title companies, or other service providers</li>
              <li>Technical issues with third-party systems or services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Dispute Resolution</h2>
            <p className="text-slate-700 mb-4">
              <strong>Governing Law:</strong> These Terms are governed by the laws of the State of California.
            </p>
            <p className="text-slate-700 mb-4">
              <strong>Dispute Resolution Process:</strong>
            </p>
            <ol className="list-decimal pl-6 text-slate-700 mb-6">
              <li>Initial contact and good faith resolution attempt</li>
              <li>Mediation through mutually agreed mediator</li>
              <li>Binding arbitration if mediation fails</li>
              <li>California state court jurisdiction for non-arbitrable disputes</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Regulatory Compliance and Consumer Rights</h2>
            <p className="text-slate-700 mb-4">
              We comply with all applicable federal and state regulations, including:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-6">
              <li>Truth in Lending Act (TILA)</li>
              <li>Real Estate Settlement Procedures Act (RESPA)</li>
              <li>Fair Credit Reporting Act (FCRA)</li>
              <li>Equal Credit Opportunity Act (ECOA)</li>
              <li>California Mortgage Lending Act</li>
              <li>Consumer Financial Protection Bureau (CFPB) regulations</li>
            </ul>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Consumer Rights Information</h3>
              <p className="text-green-700 mb-2">
                <strong>Right to Cancel:</strong> You have the right to cancel certain transactions within three business days.
              </p>
              <p className="text-green-700">
                <strong>Complaint Filing:</strong> You may file complaints with the California Department of Financial Protection and Innovation 
                or the Consumer Financial Protection Bureau (CFPB).
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Service Modifications and Termination</h2>
            <p className="text-slate-700 mb-4">
              We reserve the right to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-6">
              <li>Modify or discontinue services with reasonable notice</li>
              <li>Update these Terms as required by law or business needs</li>
              <li>Terminate service relationships for cause</li>
              <li>Refuse service in our sole discretion</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to Terms</h2>
            <p className="text-slate-700">
              We may update these Terms periodically. Material changes will be posted on our website with a new "Last Updated" date. 
              Continued use of our services after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Information</h2>
            <p className="text-slate-700 mb-4">
              If you have questions about these Terms or our services, please contact us:
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-slate-900 mb-3">Service Contact Information</h4>
              <div className="space-y-2 text-slate-700">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>Phone: (949) 579-2057</span>
                </div>
                <div className="flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>Email: info@mothebroker.com</span>
                </div>
                <div>
                  <strong>Mohammad Abdelfattah, NMLS #1426884</strong><br />
                  Licensed Mortgage Loan Originator<br />
                  NEXA Mortgage<br />
                  [Physical Address - To be provided]
                </div>
                <div className="mt-4">
                  <strong>License Verification:</strong><br />
                  <a href="https://www.nmlsconsumeraccess.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    www.nmlsconsumeraccess.org
                  </a>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Footer Navigation */}
        <div className="border-t border-slate-200 pt-8 mt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <Link 
              href="/contact" 
              className="text-blue-600 hover:text-blue-700 font-medium mb-4 sm:mb-0"
            >
              Questions about these terms? Contact us
            </Link>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-slate-600 hover:text-slate-900">
                Privacy Policy
              </Link>
              <Link href="/cookie-policy" className="text-slate-600 hover:text-slate-900">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}