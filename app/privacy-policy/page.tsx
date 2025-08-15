import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Eye, FileText, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Mo Abdel Mortgage Broker - NMLS #1426884',
  description: 'Privacy Policy for Mo Abdel Wholesale Mortgage Services. Learn how we protect your personal and financial information in compliance with CCPA, GDPR, and Gramm-Leach-Bliley Act.',
  robots: 'noindex, nofollow' // Typical for legal pages
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "January 15, 2025";
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Legal Document
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-600">
            How we protect and handle your personal and financial information
          </p>
          <p className="text-sm text-slate-500 mt-4">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
          <div className="flex">
            <Eye className="w-6 h-6 text-yellow-600 mr-3 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Legal Notice</h3>
              <p className="text-yellow-700">
                <strong>This privacy policy is currently under legal review and will be updated with final compliance language. 
                Please contact us directly for current privacy practices until this notice is removed.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Policy Content */}
        <div className="prose prose-lg max-w-none">
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
            <p className="text-slate-700 mb-4">
              Mo Abdel, NMLS #1426884, operating as a wholesale mortgage broker with NEXA Mortgage, 
              is committed to protecting your privacy and personal information. This Privacy Policy 
              explains how we collect, use, share, and protect your information when you use our website 
              and mortgage services.
            </p>
            <p className="text-slate-700">
              This policy complies with the California Consumer Privacy Act (CCPA), the General Data 
              Protection Regulation (GDPR), and the Gramm-Leach-Bliley Act requirements for financial services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Personal Information</h3>
            <p className="text-slate-700 mb-4">We may collect the following types of personal information:</p>
            <ul className="list-disc pl-6 text-slate-700 mb-6">
              <li>Contact information (name, address, phone number, email)</li>
              <li>Financial information (income, assets, debts, credit information)</li>
              <li>Employment information (employer, job title, employment history)</li>
              <li>Government identifiers (Social Security Number, driver's license)</li>
              <li>Property information (intended purchase details, current home information)</li>
              <li>Website usage data (cookies, IP address, browsing behavior)</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Sensitive Personal Information (CCPA)</h3>
            <p className="text-slate-700 mb-4">We may collect sensitive personal information including:</p>
            <ul className="list-disc pl-6 text-slate-700 mb-6">
              <li>Social Security Numbers and government identifiers</li>
              <li>Financial account information</li>
              <li>Credit reports and credit scores</li>
              <li>Precise geolocation data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
            <p className="text-slate-700 mb-4">We use your personal information for the following business purposes:</p>
            <ul className="list-disc pl-6 text-slate-700 mb-6">
              <li>Processing mortgage loan applications and providing financing services</li>
              <li>Communicating with you about your loan application and services</li>
              <li>Complying with legal and regulatory requirements</li>
              <li>Fraud prevention and security measures</li>
              <li>Improving our website and services</li>
              <li>Marketing our services (with your consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Information Sharing and Disclosure</h2>
            <p className="text-slate-700 mb-4">We may share your information with:</p>
            <ul className="list-disc pl-6 text-slate-700 mb-6">
              <li><strong>Lenders and Financial Institutions:</strong> To process your loan application</li>
              <li><strong>Service Providers:</strong> Credit agencies, appraisers, title companies, and other professionals necessary for loan processing</li>
              <li><strong>Regulatory Bodies:</strong> As required by law or regulation</li>
              <li><strong>NEXA Mortgage:</strong> Our licensed mortgage company</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
            </ul>
            <p className="text-slate-700">
              <strong>We do not sell your personal information to third parties.</strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Your California Privacy Rights (CCPA)</h2>
            <p className="text-slate-700 mb-4">
              If you are a California resident, you have the following rights under the California Consumer Privacy Act:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-6">
              <li><strong>Right to Know:</strong> Request information about how we collect, use, and share your personal information</li>
              <li><strong>Right to Delete:</strong> Request deletion of your personal information (subject to legal retention requirements)</li>
              <li><strong>Right to Correct:</strong> Request correction of inaccurate personal information</li>
              <li><strong>Right to Opt-Out:</strong> Opt-out of the sale or sharing of personal information</li>
              <li><strong>Right to Limit:</strong> Limit the use of sensitive personal information</li>
              <li><strong>Right to Non-Discrimination:</strong> Not be discriminated against for exercising your privacy rights</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">How to Exercise Your Rights</h3>
            <p className="text-slate-700 mb-4">To exercise your California privacy rights, contact us:</p>
            <ul className="list-disc pl-6 text-slate-700 mb-6">
              <li>Email: privacy@mothebroker.com</li>
              <li>Phone: (949) 579-2057</li>
              <li>Mail: [NEXA Mortgage Address - To be provided by attorney]</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Retention</h2>
            <p className="text-slate-700 mb-4">
              We retain your personal information for the following periods:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-6">
              <li><strong>Loan Applications:</strong> 25 months after application date (HMDA requirement)</li>
              <li><strong>Closed Loans:</strong> 3 years after loan closing (regulatory requirement)</li>
              <li><strong>Marketing Communications:</strong> Until you opt-out or request deletion</li>
              <li><strong>Website Data:</strong> As outlined in our Cookie Policy</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Security Measures</h2>
            <p className="text-slate-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-6">
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Secure servers and firewalls</li>
              <li>Access controls and authentication measures</li>
              <li>Regular security assessments and updates</li>
              <li>Employee training on data protection</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Cookies and Website Technology</h2>
            <p className="text-slate-700 mb-4">
              Our website uses cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-6">
              <li>Improve website functionality and user experience</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide personalized content and recommendations</li>
              <li>Remember your preferences and settings</li>
            </ul>
            <p className="text-slate-700">
              You can control cookies through your browser settings. For more information, see our Cookie Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">International Data Transfers</h2>
            <p className="text-slate-700">
              Your information may be transferred to and processed in countries other than your country of residence. 
              We ensure appropriate safeguards are in place for such transfers in compliance with applicable privacy laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-slate-700">
              We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. 
              We will post the updated policy on our website with a new "Last Updated" date. For material changes, 
              we will provide additional notice as required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Information</h2>
            <p className="text-slate-700 mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-slate-900 mb-3">Privacy Contact Information</h4>
              <div className="space-y-2 text-slate-700">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>Phone: (949) 579-2057</span>
                </div>
                <div className="flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>Email: privacy@mothebroker.com</span>
                </div>
                <div>
                  <strong>Mo Abdel, NMLS #1426884</strong><br />
                  Licensed Mortgage Loan Originator<br />
                  NEXA Mortgage<br />
                  [Physical Address - To be provided]
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Regulatory Information</h2>
            <p className="text-slate-700 mb-4">
              This privacy policy is designed to comply with:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-6">
              <li>California Consumer Privacy Act (CCPA)</li>
              <li>General Data Protection Regulation (GDPR)</li>
              <li>Gramm-Leach-Bliley Act (GLBA)</li>
              <li>Fair Credit Reporting Act (FCRA)</li>
              <li>Other applicable federal and state privacy laws</li>
            </ul>
            
            <p className="text-slate-700">
              <strong>NMLS Consumer Access:</strong> Verify our license and view regulatory information at 
              <a href="https://www.nmlsconsumeraccess.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                www.nmlsconsumeraccess.org
              </a>
            </p>
          </section>

        </div>

        {/* Footer Navigation */}
        <div className="border-t border-slate-200 pt-8 mt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <Link 
              href="/contact" 
              className="text-blue-600 hover:text-blue-700 font-medium mb-4 sm:mb-0"
            >
              Questions about this policy? Contact us
            </Link>
            <div className="flex space-x-6 text-sm">
              <Link href="/terms-of-service" className="text-slate-600 hover:text-slate-900">
                Terms of Service
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