import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  FileText,
  Download,
  CheckCircle,
  AlertCircle,
  Folder,
  Calendar,
  DollarSign,
  Building,
  CreditCard,
  Home,
  Users,
  Shield,
  Clock,
  Target,
  Phone,
  ArrowRight,
  PlusCircle,
  MinusCircle,
  Star,
  Award
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mortgage Document Checklist & Templates | Orange County Home Buyers',
  description: 'Complete mortgage document checklist for Orange County home buyers. Required documents, templates, and organization tips for faster loan approval.',
  alternates: {
    canonical: 'https://www.mothebroker.com/resources/document-checklist',
  },
};

export default function DocumentChecklistPage() {
  const documentCategories = [
    {
      category: 'Income Documentation',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      description: 'Proof of income and employment history',
      documents: [
        {
          name: 'Last 2 Years Tax Returns',
          required: true,
          description: 'Complete tax returns including all schedules and W-2s',
          tips: ['Include all pages', 'Both federal and state returns', 'K-1s if applicable']
        },
        {
          name: 'Last 30 Days Pay Stubs',
          required: true,
          description: 'Recent pay stubs showing year-to-date earnings',
          tips: ['Must be recent (within 30 days)', 'Include all pages', 'Both borrowers if married']
        },
        {
          name: 'Employment Verification Letter',
          required: true,
          description: 'Letter from employer confirming employment and salary',
          tips: ['On company letterhead', 'Include hire date and salary', 'HR contact information']
        },
        {
          name: 'Profit & Loss Statement',
          required: false,
          description: 'For self-employed borrowers (YTD and prior year)',
          tips: ['Prepared by CPA preferred', 'Must be signed and dated', 'Include business license']
        },
        {
          name: 'Social Security Award Letters',
          required: false,
          description: 'If receiving Social Security or disability income',
          tips: ['Current award letter', 'Show continuing benefits', 'Include Medicare deductions']
        }
      ]
    },
    {
      category: 'Asset Documentation',
      icon: Building,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      description: 'Bank accounts, investments, and other assets',
      documents: [
        {
          name: 'Bank Statements (2 Months)',
          required: true,
          description: 'Complete statements for all accounts',
          tips: ['All pages required', 'No missing transactions', 'Include savings and checking']
        },
        {
          name: 'Investment Account Statements',
          required: true,
          description: '401k, IRA, stocks, bonds statements',
          tips: ['Most recent quarterly statement', 'Include all investment accounts', 'Vesting schedules if applicable']
        },
        {
          name: 'Gift Letter & Documentation',
          required: false,
          description: 'If using gift funds for down payment',
          tips: ['Signed gift letter form', 'Donor\'s bank statement', 'Wire transfer receipt']
        },
        {
          name: 'Real Estate Owned',
          required: false,
          description: 'Documentation for properties you own',
          tips: ['Rental agreements', 'Property tax statements', 'Mortgage statements']
        }
      ]
    },
    {
      category: 'Credit & Identity',
      icon: CreditCard,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      description: 'Personal identification and credit information',
      documents: [
        {
          name: 'Photo Identification',
          required: true,
          description: 'Driver\'s license or passport',
          tips: ['Current and unexpired', 'Clear, readable copy', 'Both sides of license']
        },
        {
          name: 'Social Security Card',
          required: true,
          description: 'Original Social Security card or W-2',
          tips: ['Clear copy of actual card', 'W-2 acceptable alternative', 'All borrowers']
        },
        {
          name: 'Credit Report',
          required: false,
          description: 'Recent credit report (lender will pull)',
          tips: ['Check for errors beforehand', 'Gather explanations for issues', 'Monitor during process']
        },
        {
          name: 'Letter of Explanation',
          required: false,
          description: 'Explanations for credit issues or unusual circumstances',
          tips: ['Be honest and detailed', 'Include supporting documentation', 'Address all credit inquiries']
        }
      ]
    },
    {
      category: 'Property Documentation',
      icon: Home,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      description: 'Documents related to the property being purchased',
      documents: [
        {
          name: 'Purchase Contract',
          required: true,
          description: 'Signed purchase agreement',
          tips: ['Include all addendums', 'Signed by all parties', 'Clear terms and conditions']
        },
        {
          name: 'Property Appraisal',
          required: true,
          description: 'Professional property appraisal (ordered by lender)',
          tips: ['Lender will order', 'Borrower typically pays', 'Review for accuracy']
        },
        {
          name: 'Homeowners Insurance',
          required: true,
          description: 'Insurance policy and paid receipt',
          tips: ['Adequate coverage amount', 'Lender named as mortgagee', 'Policy effective at closing']
        },
        {
          name: 'HOA Documentation',
          required: false,
          description: 'If property is in HOA community',
          tips: ['HOA bylaws and budget', 'Fee schedules', 'Special assessments']
        }
      ]
    },
    {
      category: 'Additional Documents',
      icon: Folder,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      description: 'Other documents that may be required',
      documents: [
        {
          name: 'Divorce Decree',
          required: false,
          description: 'If divorced and paying/receiving alimony or child support',
          tips: ['Complete decree', 'Show payment history', 'Include any modifications']
        },
        {
          name: 'Bankruptcy Papers',
          required: false,
          description: 'If filed bankruptcy in past 7 years',
          tips: ['Discharge papers', 'Schedule of creditors', 'Explanation letter']
        },
        {
          name: 'Military Records',
          required: false,
          description: 'For VA loan eligibility',
          tips: ['DD-214 form', 'Certificate of Eligibility', 'Service records']
        },
        {
          name: 'Previous Home Sale',
          required: false,
          description: 'If selling current home',
          tips: ['Listing agreement', 'Sales contract if pending', 'Proceeds estimate']
        }
      ]
    }
  ];

  const organizationTips = [
    {
      tip: 'Create Digital Copies',
      description: 'Scan all documents and organize in labeled folders',
      icon: FileText
    },
    {
      tip: 'Use a Checklist',
      description: 'Check off documents as you gather them to stay organized',
      icon: CheckCircle
    },
    {
      tip: 'Keep Originals Safe',
      description: 'Store original documents in a secure location',
      icon: Shield
    },
    {
      tip: 'Get Recent Statements',
      description: 'Ensure all financial documents are current and complete',
      icon: Calendar
    },
    {
      tip: 'Prepare Explanations',
      description: 'Write explanations for any unusual financial circumstances',
      icon: Target
    },
    {
      tip: 'Stay Responsive',
      description: 'Respond quickly to requests for additional documentation',
      icon: Clock
    }
  ];

  const timelineSteps = [
    {
      phase: 'Pre-Application',
      timeframe: '2-4 weeks before',
      tasks: [
        'Gather basic income and asset documents',
        'Check credit reports for errors',
        'Organize financial records',
        'Get pre-approved'
      ]
    },
    {
      phase: 'Application',
      timeframe: 'Day 1-3',
      tasks: [
        'Submit complete loan application',
        'Provide initial document package',
        'Order property appraisal',
        'Submit to underwriting'
      ]
    },
    {
      phase: 'Processing',
      timeframe: 'Week 1-3',
      tasks: [
        'Respond to document requests',
        'Provide updated statements if needed',
        'Complete employment verification',
        'Address underwriter conditions'
      ]
    },
    {
      phase: 'Final Approval',
      timeframe: 'Week 3-4',
      tasks: [
        'Final employment verification',
        'Insurance documentation',
        'Final walkthrough',
        'Closing document preparation'
      ]
    }
  ];

  // Remove useState for server-side rendering compatibility

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-white/20 text-white mb-4">Complete Document Guide</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mortgage Document Checklist & Templates
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Everything you need to get your mortgage approved quickly. Complete checklist, 
              downloadable templates, and organization tips for Orange County home buyers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <FileText className="w-5 h-5 mr-2" />
                  Get Document Help
                </Button>
              </Link>
              <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white/10">
                <Download className="w-5 h-5 mr-2" />
                Download Checklist
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-sm text-slate-600">Core Documents</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">30-45</div>
              <div className="text-sm text-slate-600">Days to Close</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">24hr</div>
              <div className="text-sm text-slate-600">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-sm text-slate-600">Digital Process</div>
            </div>
          </div>
        </div>
      </section>

      {/* Document Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Required Document Categories
            </h2>
            <p className="text-xl text-slate-600">
              Complete checklist organized by document type
            </p>
          </div>

          <div className="space-y-6">
            {documentCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`p-3 rounded-lg ${category.bgColor} mr-4`}>
                        <category.icon className={`w-8 h-8 ${category.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{category.category}</CardTitle>
                        <p className="text-slate-600">{category.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Badge variant="secondary" className="mr-3">
                        {category.documents.length} documents
                      </Badge>
                      <MinusCircle className="w-6 h-6 text-slate-400" />
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {category.documents.map((doc, docIndex) => (
                      <div key={docIndex} className="border-l-4 border-blue-200 pl-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center">
                            <h4 className="font-semibold text-slate-900">{doc.name}</h4>
                            {doc.required && (
                              <Badge className="ml-2 bg-red-100 text-red-800">Required</Badge>
                            )}
                          </div>
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        </div>
                        <p className="text-slate-600 mb-2">{doc.description}</p>
                        <div>
                          <h5 className="font-semibold text-sm text-slate-700 mb-1">Tips:</h5>
                          <ul className="space-y-1">
                            {doc.tips.map((tip, tipIndex) => (
                              <li key={tipIndex} className="text-sm text-slate-600 flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Tips */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Document Organization Tips
            </h2>
            <p className="text-xl text-slate-600">
              Pro tips to keep your documents organized and speed up approval
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizationTips.map((tip, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <tip.icon className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-lg mb-2">{tip.tip}</h3>
                  <p className="text-slate-600">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Document Timeline
            </h2>
            <p className="text-xl text-slate-600">
              When to prepare and submit your documents
            </p>
          </div>

          <div className="space-y-6">
            {timelineSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-xl">{step.phase}</h3>
                        <Badge variant="outline">{step.timeframe}</Badge>
                      </div>
                      <div className="grid md:grid-cols-2 gap-2">
                        {step.tasks.map((task, taskIndex) => (
                          <div key={taskIndex} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                            {task}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-yellow-200">
            <CardHeader>
              <CardTitle className="flex items-center text-yellow-800">
                <AlertCircle className="w-6 h-6 mr-2" />
                Common Document Mistakes to Avoid
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-yellow-800">Don't:</h4>
                  <ul className="space-y-1 text-sm text-yellow-700">
                    <li>• Submit incomplete bank statements</li>
                    <li>• Provide blurry or unreadable documents</li>
                    <li>• Wait until the last minute to gather docs</li>
                    <li>• Make large deposits without explanation</li>
                    <li>• Open new credit accounts during process</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-green-800">Do:</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• Submit all pages of every document</li>
                    <li>• Provide clear, high-quality scans</li>
                    <li>• Gather documents early in the process</li>
                    <li>• Explain any unusual financial activity</li>
                    <li>• Keep your finances stable during approval</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Template Downloads */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Downloadable Templates & Forms
            </h2>
            <p className="text-xl text-slate-600">
              Ready-to-use templates to streamline your application
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Document Checklist', description: 'Complete PDF checklist' },
              { name: 'Employment Verification Letter', description: 'Template for employers' },
              { name: 'Gift Letter Form', description: 'Required for gift funds' },
              { name: 'Asset Organization Sheet', description: 'Track all accounts' },
              { name: 'Income Calculation Worksheet', description: 'Self-employed borrowers' },
              { name: 'Explanation Letter Template', description: 'Credit or financial issues' },
              { name: 'Property Information Form', description: 'Organize property details' },
              { name: 'Document Submission Log', description: 'Track what you\'ve sent' }
            ].map((template, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center">
                  <Download className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-sm mb-1">{template.name}</h3>
                  <p className="text-xs text-slate-600 mb-3">{template.description}</p>
                  <Link href="/contact">
                    <Button size="sm" variant="ghost" className="text-blue-600">
                      Request Template
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need Help Getting Your Documents Ready?
          </h2>
          <p className="text-xl mb-8">
            I'll review your document checklist, help you gather everything needed, and guide you 
            through the entire process. Let's make your mortgage approval as smooth as possible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <FileText className="w-5 h-5 mr-2" />
                Document Review Session
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white/10">
                <Phone className="w-5 h-5 mr-2" />
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-sm mt-6 opacity-90">
            Mo Abdel, NMLS #1426884 | Streamlining Document Process for Orange County
          </p>
        </div>
      </section>
    </div>
  );
}