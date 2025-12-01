import React from 'react';
import { User, Calendar, FileText, File, Lock, Mail, Globe, Shield } from 'lucide-react';

export default function SimpleLandingPage() {
  return (
    <div className="min-h-screen bg-[#1e293b] flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full space-y-6">
        {/* Profile Section */}
        <div className="text-center space-y-4">
          {/* Profile Image with Gold Border */}
          <div className="inline-block">
            <div className="w-32 h-32 rounded-full border-4 border-yellow-500 overflow-hidden mx-auto">
              <img
                src="/images/moabdel-headshot-new.png"
                alt="Mo Abdel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name and Title */}
          <div>
            <h1 className="text-3xl font-serif text-yellow-500 mb-2">Mo Abdel</h1>
            <p className="text-white text-lg italic mb-1">Branch Manager</p>
            <p className="text-white text-lg italic">West Capital Lending</p>
          </div>

          {/* NMLS Information */}
          <div className="text-yellow-500 text-sm space-y-1">
            <p>NMLS 1426884 | NMLS 1566096</p>
            <p>DRE 02022356</p>
            <p className="text-white">(949) 537-2357</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {/* Add My Contact */}
          <a
            href="/mo-abdel-contact.vcf"
            download
            className="flex items-center justify-center gap-2 w-full bg-white text-gray-900 py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            <User className="w-5 h-5" />
            Add My Contact
          </a>

          {/* Schedule An Appointment */}
          <a
            href="https://calendly.com/mbabdel/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-white text-gray-900 py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            <Calendar className="w-5 h-5" />
            Schedule An Appointment
          </a>

          {/* Apply Now */}
          <a
            href="https://westcaplending.loanzify.io/register/mo-abdel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-white text-gray-900 py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            <FileText className="w-5 h-5" />
            Apply Now
          </a>

          {/* HELOC */}
          <a
            href="https://heloc.westcapitallending.com/account/heloc/register?referrer=cfc157b6-213d-43c7-9744-c1f238a8a44b"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-white text-gray-900 py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            <File className="w-5 h-5" />
            HELOC 100% Digital, No Docs, Can Fund in 7 days!
          </a>

          {/* Upload Documents Securely */}
          <a
            href="https://documentguardian.com/filedrop/mabdel@westcapitallending.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-white text-gray-900 py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            <Lock className="w-5 h-5" />
            Upload Documents Securely
          </a>

          {/* Email Me */}
          <a
            href="mailto:mabdel@wclloans.com"
            className="flex items-center justify-center gap-2 w-full bg-white text-gray-900 py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </a>

          {/* WestCapitalLending.com */}
          <a
            href="https://westcapitallending.com/team/mo-abdel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-white text-gray-900 py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            <Globe className="w-5 h-5" />
            WestCapitalLending.com
          </a>

          {/* NMLSConsumerAccess.org */}
          <a
            href="https://www.nmlsconsumeraccess.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-white text-gray-900 py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            <Shield className="w-5 h-5" />
            NMLSConsumerAccess.org
          </a>
        </div>

        {/* Footer Section */}
        <div className="text-center space-y-4 pt-6">
          <div className="text-yellow-500 font-medium">
            West Capital Lending
          </div>
          <div className="text-white text-sm">
            17911 Von Karman Ave Suite 400, Irvine, CA 92614
          </div>

          {/* Equal Housing Logo */}
          <div className="flex justify-center pt-4">
            <img
              src="/images/equal-housing-opportunity-logo.png"
              alt="Equal Housing Opportunity"
              width={120}
              height={80}
              className="opacity-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
