import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  CreditCard,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  FileText,
  Clock,
  DollarSign,
  Shield,
  Target,
  Calendar,
  Download,
  Phone,
  ArrowRight,
  Star,
  Percent,
  Calculator,
  AlertCircle,
  BookOpen,
  Users
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Credit Repair Resources | Improve Your Credit Score for Better Rates',
  description: 'Complete guide to credit repair for Orange County home buyers. Improve your credit score, dispute errors, and qualify for better mortgage rates. Expert tips and strategies.',
  keywords: 'credit repair, improve credit score, mortgage credit requirements, dispute credit errors, credit reports, FICO score, Orange County mortgage, credit improvement strategies',
};

export default function CreditRepairPage() {
  const creditScoreRanges = [
    {
      range: '800-850',
      label: 'Exceptional',
      rate: '6.25%',
      description: 'Best rates available',
      color: 'bg-green-600',
      textColor: 'text-green-600'
    },
    {
      range: '740-799',
      label: 'Very Good',
      rate: '6.375%',
      description: 'Excellent rates',
      color: 'bg-blue-600',
      textColor: 'text-blue-600'
    },
    {
      range: '670-739',
      label: 'Good',
      rate: '6.625%',
      description: 'Good rates available',
      color: 'bg-yellow-600',
      textColor: 'text-yellow-600'
    },
    {
      range: '580-669',
      label: 'Fair',
      rate: '7.125%',
      description: 'Higher rates',
      color: 'bg-orange-600',
      textColor: 'text-orange-600'
    },
    {
      range: '300-579',
      label: 'Poor',
      rate: '8.25%+',
      description: 'Limited options',
      color: 'bg-red-600',
      textColor: 'text-red-600'
    }
  ];

  const creditFactors = [
    {
      factor: 'Payment History',
      weight: '35%',
      description: 'On-time payments are the most important factor',
      tips: ['Pay all bills on time', 'Catch up on past-due accounts', 'Consider payment reminders'],
      icon: Calendar
    },
    {
      factor: 'Credit Utilization',
      weight: '30%',
      description: 'Keep balances low relative to credit limits',
      tips: ['Use less than 30% of available credit', 'Pay down balances', 'Don\'t close old accounts'],
      icon: Percent
    },
    {
      factor: 'Length of Credit History',
      weight: '15%',
      description: 'Longer credit history is better',
      tips: ['Keep old accounts open', 'Don\'t close your oldest card', 'Be patient with new credit'],
      icon: Clock
    },
    {
      factor: 'Credit Mix',
      weight: '10%',
      description: 'Different types of credit accounts',
      tips: ['Mix of credit cards and installment loans', 'Don\'t open accounts just for mix', 'Focus on payment history first'],
      icon: CreditCard
    },
    {
      factor: 'New Credit',
      weight: '10%',
      description: 'Recent credit inquiries and new accounts',
      tips: ['Limit new credit applications', 'Shop for loans within 14-45 days', 'Avoid opening cards before mortgage'],
      icon: Star
    }
  ];

  const quickWins = [
    {
      action: 'Pay Down Credit Cards',
      timeframe: '1-2 months',
      impact: '+20-50 points',
      description: 'Reduce credit card balances to under 30% of limits',
      priority: 'High'
    },
    {
      action: 'Pay Off Collections',
      timeframe: '1 month',
      impact: '+10-40 points',
      description: 'Pay off or settle small collection accounts',
      priority: 'High'
    },
    {
      action: 'Remove Credit Report Errors',
      timeframe: '30-60 days',
      impact: '+5-100 points',
      description: 'Dispute inaccurate information on credit reports',
      priority: 'High'
    },
    {
      action: 'Become Authorized User',
      timeframe: '1-2 months',
      impact: '+10-30 points',
      description: 'Get added to family member\'s good account',
      priority: 'Medium'
    },
    {
      action: 'Pay Bills Early',
      timeframe: '2-3 months',
      impact: '+5-20 points',
      description: 'Pay credit cards before statement date',
      priority: 'Medium'
    },
    {
      action: 'Request Credit Limit Increases',
      timeframe: '1 month',
      impact: '+5-15 points',
      description: 'Increase available credit without new debt',
      priority: 'Low'
    }
  ];

  const disputeSteps = [
    {
      step: 1,
      title: 'Get Your Credit Reports',
      description: 'Obtain free reports from all three bureaus: Experian, Equifax, TransUnion',
      action: 'Visit annualcreditreport.com'
    },
    {
      step: 2,
      title: 'Review for Errors',
      description: 'Look for incorrect personal information, accounts not yours, wrong payment history',
      action: 'Document all errors found'
    },
    {
      step: 3,
      title: 'Gather Documentation',
      description: 'Collect proof to support your dispute: bank statements, payment records, etc.',
      action: 'Organize supporting documents'
    },
    {
      step: 4,
      title: 'File Disputes',
      description: 'Submit disputes online or by mail to each credit bureau with errors',
      action: 'Keep copies of all correspondence'
    },
    {
      step: 5,
      title: 'Follow Up',
      description: 'Credit bureaus have 30 days to investigate and respond to disputes',
      action: 'Monitor progress and results'
    }
  ];

  const mortgageRequirements = [
    {
      loanType: 'Conventional',
      minScore: '620',
      idealScore: '740+',
      downPayment: '3-20%',
      benefits: 'Best rates and terms available'
    },
    {
      loanType: 'FHA',
      minScore: '580',
      idealScore: '620+',
      downPayment: '3.5%',
      benefits: 'Lower credit requirements, smaller down payment'
    },
    {
      loanType: 'VA',
      minScore: '580',
      idealScore: '620+',
      downPayment: '0%',
      benefits: 'No down payment, no PMI'
    },
    {
      loanType: 'USDA',
      minScore: '640',
      idealScore: '660+',
      downPayment: '0%',
      benefits: 'Rural areas, no down payment'
    },
    {
      loanType: 'Jumbo',
      minScore: '700',
      idealScore: '740+',
      downPayment: '10-20%',
      benefits: 'High loan amounts for luxury homes'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-white/20 text-white mb-4">Credit Improvement Guide</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Credit Repair Resources & Strategies
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Improve your credit score to qualify for better mortgage rates and save thousands. 
              Expert strategies, dispute templates, and step-by-step guidance for Orange County home buyers.
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Credit Analysis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Score Impact */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              How Your Credit Score Affects Your Mortgage Rate
            </h2>
            <p className="text-xl text-slate-600">
              A higher credit score can save you thousands on your Orange County home purchase
            </p>
          </div>

          <div className="grid gap-4 mb-8">
            {creditScoreRanges.map((range, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full ${range.color} mr-4`}></div>
                      <div>
                        <div className="font-bold text-lg">{range.range}</div>
                        <div className="text-sm text-slate-600">{range.label}</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className={`font-bold text-xl ${range.textColor}`}>{range.rate}</div>
                      <div className="text-sm text-slate-600">Est. Rate</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-600">{range.description}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center">
                <DollarSign className="w-8 h-8 text-green-600 mr-4" />
                <div>
                  <h3 className="font-bold text-lg text-green-800">Potential Savings Example</h3>
                  <p className="text-green-700">
                    Improving from 620 to 740+ credit score on a $800,000 Orange County home could save you 
                    <strong> $85,000+ over 30 years</strong> in interest payments.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rate Compliance Disclaimer */}
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Rate Disclaimer:</strong> Rates shown are estimates for illustration purposes only and may vary based on current market conditions, loan amount, loan-to-value ratio, debt-to-income ratio, property type, occupancy, and other factors. Actual rates may be higher or lower. All loans subject to credit approval. Contact Mo Abdel, NMLS #1426884, for current rates and terms. Licensed by the Department of Financial Protection and Innovation under the California Residential Mortgage Lending Act.
            </p>
          </div>
        </div>
      </section>

      {/* Credit Factors */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What Affects Your Credit Score
            </h2>
            <p className="text-xl text-slate-600">
              Understanding the five factors that determine your FICO score
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creditFactors.map((factor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <factor.icon className="w-8 h-8 text-blue-600" />
                    <Badge variant="secondary">{factor.weight}</Badge>
                  </div>
                  <CardTitle className="text-xl">{factor.factor}</CardTitle>
                  <p className="text-sm text-slate-600">{factor.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Improvement Tips:</h4>
                    {factor.tips.map((tip, idx) => (
                      <div key={idx} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600 mt-0.5" />
                        {tip}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Wins */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Quick Credit Score Improvements
            </h2>
            <p className="text-xl text-slate-600">
              Strategies that can boost your score in 30-90 days
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickWins.map((win, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{win.action}</CardTitle>
                      <Badge 
                        className={`mt-2 ${
                          win.priority === 'High' ? 'bg-red-100 text-red-800' :
                          win.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}
                      >
                        {win.priority} Priority
                      </Badge>
                    </div>
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-semibold text-slate-700">Timeline:</div>
                      <div className="text-sm text-slate-600">{win.timeframe}</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-700">Potential Impact:</div>
                      <div className="text-sm text-green-600 font-semibold">{win.impact}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-600">{win.description}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dispute Process */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              How to Dispute Credit Report Errors
            </h2>
            <p className="text-xl text-slate-600">
              Step-by-step process to remove inaccurate information
            </p>
          </div>

          <div className="space-y-6">
            {disputeSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                      <p className="text-slate-600 mb-3">{step.description}</p>
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
                        <p className="text-sm text-blue-800">
                          <strong>Action:</strong> {step.action}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mortgage Requirements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Credit Requirements by Loan Type
            </h2>
            <p className="text-xl text-slate-600">
              Minimum credit scores and what lenders prefer to see
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Loan Type</th>
                  <th className="px-6 py-4 text-left font-semibold">Minimum Score</th>
                  <th className="px-6 py-4 text-left font-semibold">Ideal Score</th>
                  <th className="px-6 py-4 text-left font-semibold">Down Payment</th>
                  <th className="px-6 py-4 text-left font-semibold">Key Benefits</th>
                </tr>
              </thead>
              <tbody>
                {mortgageRequirements.map((req, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-6 py-4 font-semibold">{req.loanType}</td>
                    <td className="px-6 py-4">{req.minScore}</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">{req.idealScore}</td>
                    <td className="px-6 py-4">{req.downPayment}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{req.benefits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Credit Monitoring */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">Credit Monitoring & Maintenance</CardTitle>
              <p className="text-slate-600">Keep your credit in top shape for your mortgage application</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Free Credit Monitoring:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600 mt-0.5" />
                      Credit Karma - Free scores and reports
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600 mt-0.5" />
                      Credit Sesame - Credit monitoring
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600 mt-0.5" />
                      Bank apps - Most banks offer free scores
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600 mt-0.5" />
                      AnnualCreditReport.com - Official free reports
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Before Applying for Mortgage:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <AlertTriangle className="w-4 h-4 mr-2 text-orange-600 mt-0.5" />
                      Don't apply for new credit cards
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-4 h-4 mr-2 text-orange-600 mt-0.5" />
                      Don't close existing accounts
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-4 h-4 mr-2 text-orange-600 mt-0.5" />
                      Keep balances low (under 10%)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600 mt-0.5" />
                      Pay all bills on time
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Credit Repair FAQ
          </h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How long does it take to improve my credit score?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Credit score improvements can happen quickly or take time depending on the issue. Paying down 
                  credit card balances can show results in 30-60 days. Removing errors through disputes typically 
                  takes 30-45 days. Building positive payment history takes 3-6 months to show significant impact.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Should I pay off collections before applying for a mortgage?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  It depends on the type of collection and your loan program. Some mortgage programs require 
                  all collections to be paid, while others only require payment of collections above a certain 
                  amount. Paying collections may not always improve your score immediately, so timing matters.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I get a mortgage with bad credit?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Yes, there are loan programs for borrowers with lower credit scores. FHA loans accept scores 
                  as low as 580 (or 500 with 10% down). Non-QM loans and bank statement programs may work 
                  with scores in the 600s. However, better credit always means better rates and terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How many points will paying off credit cards improve my score?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  The impact depends on your current utilization and score. If you're using over 30% of your 
                  credit limits, paying cards down to under 10% could improve your score by 20-50 points. 
                  The higher your current utilization, the bigger the potential improvement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Improve Your Credit & Get Pre-Approved?
          </h2>
          <p className="text-xl mb-8">
            I'll review your credit report, help you develop an improvement strategy, and guide you 
            toward the best mortgage program for your situation. Let's maximize your buying power.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <CreditCard className="w-5 h-5 mr-2" />
                Free Credit Review
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
            Mo Abdel, NMLS #1426884 | Orange County Credit & Mortgage Expert
          </p>
        </div>
      </section>
    </div>
  );
}