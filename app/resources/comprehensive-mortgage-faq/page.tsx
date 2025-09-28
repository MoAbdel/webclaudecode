import React from 'react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { HelpCircle, CheckCircle, Phone, Calculator, Home, DollarSign, FileText, Clock, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Comprehensive Mortgage FAQ | Orange County Expert Answers',
  description: 'Complete mortgage FAQ with professional answers by licensed broker Mo Abdel (NMLS #1426884). Expert guidance on rates, qualification, process, and Orange County market.',
  alternates: {
    canonical: 'https://www.mothebroker.com/resources/comprehensive-mortgage-faq',
  },
};

export default function ComprehensiveMortgageFAQ() {
  const faqCategories = [
    {
      category: "Mortgage Rates & Costs",
      icon: DollarSign,
      questions: [
        {
          question: "What are current mortgage rates in Orange County?",
          answer: "Current rates vary by loan type and qualification factors. As of January 2025: 30-year fixed conventional around 6.125%, 15-year fixed around 5.50%, FHA loans around 6.125%, VA loans around 5.99%, and jumbo loans around 6.625%. Rates change daily and depend on credit score, down payment, loan amount, and property type. Contact for current personalized rate quotes.",
          tags: ["rates", "orange county", "current"]
        },
        {
          question: "How much does it cost to get a mortgage in Orange County?",
          answer: "Total mortgage costs typically range 2-5% of loan amount, including: origination fees (0.5-1%), appraisal ($500-800), title insurance ($2,000-5,000), escrow fees ($1,500-3,000), and prepaid items (taxes, insurance, interest). For a $1M Orange County home, expect $20,000-50,000 in total costs. Many costs can be negotiated or rolled into the loan amount.",
          tags: ["costs", "closing costs", "fees"]
        },
        {
          question: "Why do mortgage brokers often have better rates than banks?",
          answer: "Mortgage brokers access wholesale rates from multiple lenders, typically 0.125-0.25% lower than retail bank rates. Brokers compare offerings from 200+ lenders to find the best rate and terms for your specific situation. Banks only offer their own products at retail rates. Brokers also have lower overhead costs than bank branches, allowing them to pass savings to borrowers.",
          tags: ["broker benefits", "wholesale rates", "comparison"]
        },
        {
          question: "What factors affect my mortgage rate?",
          answer: "Primary rate factors include: credit score (740+ gets best rates), down payment amount (20%+ avoids PMI), loan-to-value ratio, debt-to-income ratio, loan amount, property type, occupancy (primary vs investment), and loan term. Orange County's high-cost area status affects conforming loan limits. Market conditions and the Fed funds rate also influence overall rate environment.",
          tags: ["rate factors", "credit score", "qualification"]
        },
        {
          question: "Should I pay points to lower my rate?",
          answer: "Points (1% of loan amount) typically reduce your rate by 0.25%. Calculate break-even: if paying $10,000 in points saves $100/month, break-even is 100 months (8.3 years). Pay points if you plan to keep the loan longer than break-even period. In Orange County's competitive market where people often refinance or move within 5-7 years, points may not be beneficial.",
          tags: ["points", "rate buydown", "break-even"]
        }
      ]
    },
    {
      category: "Loan Qualification",
      icon: CheckCircle,
      questions: [
        {
          question: "What credit score do I need for a mortgage?",
          answer: "Minimum credit scores vary by loan type: FHA loans accept 580+ (500+ with 10% down), conventional loans typically require 620+, VA loans have no strict minimum but most lenders prefer 580+, and jumbo loans usually need 700+. Higher scores (740+) qualify for the best rates. Even with lower scores, experienced brokers can find programs that work for your situation.",
          tags: ["credit score", "qualification", "loan types"]
        },
        {
          question: "How much house can I afford in Orange County?",
          answer: "General rule: house price should be 3-4x your annual income, but Orange County's high prices often require higher ratios. Key factors: debt-to-income ratio (typically max 45-50%), down payment available, monthly payment comfort level including taxes/insurance (often $1,000+/month in OC), and loan type. Use affordability calculators, but get pre-approved for accurate purchasing power.",
          tags: ["affordability", "orange county", "debt-to-income"]
        },
        {
          question: "What documents do I need for mortgage pre-approval?",
          answer: "Standard documents include: 2 recent pay stubs, last 2 years W-2s and tax returns, 2 months bank statements, government ID and Social Security card, employment verification letter. Self-employed borrowers need: 2 years business tax returns, profit/loss statements, business bank statements. Asset documentation for down payment and reserves also required.",
          tags: ["documents", "pre-approval", "requirements"]
        },
        {
          question: "Can I qualify for a mortgage if I'm self-employed?",
          answer: "Yes, self-employed borrowers have multiple options: traditional loans with 2 years tax returns, bank statement loans using deposits instead of tax returns, P&L statement programs, and asset depletion loans. Requirements vary by program. Bank statement loans are popular for self-employed borrowers who write off significant business expenses, as they use bank deposits rather than adjusted gross income.",
          tags: ["self-employed", "bank statement loans", "non-qm"]
        },
        {
          question: "What debt-to-income ratio do I need?",
          answer: "Debt-to-income (DTI) limits vary by loan type: conventional loans typically allow 45-50% DTI, FHA loans up to 57% with compensating factors, VA loans have no strict DTI limit (case-by-case), and jumbo loans typically max at 43-45%. DTI includes all monthly debt payments divided by gross monthly income. Higher DTI may be acceptable with high credit scores, significant assets, or other compensating factors.",
          tags: ["debt-to-income", "dti", "qualification"]
        }
      ]
    },
    {
      category: "Loan Programs",
      icon: Home,
      questions: [
        {
          question: "What's the difference between FHA, VA, and conventional loans?",
          answer: "FHA loans: government-backed, 3.5% down minimum, flexible credit (580+), mortgage insurance required, loan limits apply. VA loans: for eligible veterans, 0% down, no PMI, competitive rates, no loan limits. Conventional loans: not government-backed, 3-20% down, higher credit requirements (620+), no mortgage insurance with 20% down, conforming limits ($1.089M in Orange County).",
          tags: ["loan types", "fha", "va", "conventional"]
        },
        {
          question: "When do I need a jumbo loan in Orange County?",
          answer: "Jumbo loans are required for amounts above $1,089,300 (2025 Orange County conforming loan limit). Given Orange County's median home price around $1.2M+, many buyers need jumbo financing. Jumbo loans typically require: 10-20% down payment, 700+ credit score, lower debt-to-income ratios, and significant reserves. Rates are often competitive with conforming loans.",
          tags: ["jumbo loans", "orange county", "loan limits"]
        },
        {
          question: "What are Non-QM loans and when are they useful?",
          answer: "Non-Qualified Mortgage (Non-QM) loans don't meet standard government guidelines, offering flexibility for unique situations: self-employed borrowers with variable income, recent credit events, high debt-to-income ratios, or non-traditional income sources. Types include bank statement loans, asset depletion loans, and P&L statement programs. Rates are typically higher but provide access when conventional loans don't work.",
          tags: ["non-qm", "alternative loans", "self-employed"]
        },
        {
          question: "Should I choose a 15-year or 30-year mortgage?",
          answer: "15-year mortgages: lower rates (typically 0.5-0.75% less), significantly less interest paid over life of loan, faster equity building, but higher monthly payments. 30-year mortgages: lower monthly payments, more cash flow flexibility, easier qualification, but more interest paid overall. In Orange County's high-price market, 30-year loans are more common due to affordability. You can always pay extra principal to build equity faster.",
          tags: ["loan terms", "15-year", "30-year"]
        },
        {
          question: "What is an ARM and when should I consider one?",
          answer: "Adjustable Rate Mortgages (ARMs) have initial fixed periods, then adjust based on market indices. Common types: 5/1, 7/1, 10/1 ARMs (fixed for 5, 7, or 10 years). Initial rates are typically 0.5-1% lower than 30-year fixed. Consider ARMs if: you plan to move or refinance within the fixed period, you expect income to increase, or current fixed rates are high. Orange County's mobile population often benefits from ARMs.",
          tags: ["arm", "adjustable rate", "hybrid loans"]
        }
      ]
    },
    {
      category: "Orange County Specific",
      icon: Home,
      questions: [
        {
          question: "What makes Orange County's mortgage market unique?",
          answer: "Orange County is designated a high-cost area with conforming loan limits of $1,089,300 (vs $766,550 in standard areas). High median home prices ($1.2M+) mean many buyers need jumbo financing. Competitive market with multiple offers requires strong pre-approval. Property taxes vary by city. Many communities have HOAs with monthly fees. Beach proximity, school districts, and job centers significantly affect property values and loan considerations.",
          tags: ["orange county", "market conditions", "high-cost area"]
        },
        {
          question: "How do Orange County property taxes affect my mortgage?",
          answer: "Orange County property tax rates vary by city and districts, averaging 0.75-1.25% of assessed value annually. High home values mean significant monthly escrow payments. Example: $1.2M home = $9,000-15,000 annual taxes = $750-1,250 monthly escrow. Property taxes are deductible up to $10,000 annually (SALT cap). New construction may have Mello-Roos special assessments adding $200-500+ monthly.",
          tags: ["property taxes", "orange county", "escrow"]
        },
        {
          question: "What should I know about HOAs in Orange County?",
          answer: "Many Orange County communities have HOA fees ranging $200-800+ monthly. Luxury communities and condos often have higher fees ($500-1,500+). HOA fees affect debt-to-income calculations for loan qualification. Lenders require HOA financials and budgets for condo financing. Some HOAs have rental restrictions affecting investment property purchases. HOA fees cover amenities, maintenance, insurance, and reserves.",
          tags: ["hoa", "orange county", "condo financing"]
        },
        {
          question: "How do school districts affect home values and mortgages?",
          answer: "Top-rated school districts (Irvine USD, Newport-Mesa USD, Capistrano USD) command premium home prices. School quality affects property values and resale potential. Families often prioritize school districts, creating strong demand in certain areas. Loan amounts may be higher in top school districts due to elevated home prices. Some areas have school enrollment requirements tied to property ownership rather than rental.",
          tags: ["school districts", "home values", "orange county"]
        },
        {
          question: "What's different about buying luxury homes in Orange County?",
          answer: "Luxury home financing (typically $2M+) requires: jumbo loan programs, higher down payments (20-30%), significant cash reserves (2-6 months payments), lower debt-to-income ratios, and extensive asset documentation. Appraisals take longer due to fewer comparable sales. Some luxury properties may require portfolio lending. Private banking relationships often beneficial for high-net-worth clients.",
          tags: ["luxury homes", "jumbo loans", "high-end financing"]
        }
      ]
    },
    {
      category: "Process & Timeline",
      icon: Clock,
      questions: [
        {
          question: "How long does the mortgage process take?",
          answer: "Typical timeline: Pre-approval (1-3 days), house hunting (varies), full application after accepted offer (1-2 days), processing and underwriting (10-15 days), final approval and closing preparation (3-5 days). Total: 18-25 days from accepted offer to closing. Orange County's competitive market often requires pre-approval before shopping. Delays can occur due to appraisal issues, title problems, or additional documentation requests.",
          tags: ["timeline", "process", "closing"]
        },
        {
          question: "What happens during underwriting?",
          answer: "Underwriting is detailed loan review including: credit report analysis, income and employment verification, asset verification, appraisal review, title examination, and automated underwriting system (AUS) approval. Underwriters may request additional documentation (conditions) before final approval. Common requests: updated pay stubs, bank statements, explanation letters, or property repairs. Clear-to-close issued when all conditions are satisfied.",
          tags: ["underwriting", "approval process", "conditions"]
        },
        {
          question: "What can go wrong during the mortgage process?",
          answer: "Common issues: low appraisal (especially in competitive markets), employment changes, new credit inquiries, large deposits without explanation, property title issues, inspection problems, or rate lock expiration. Orange County specific issues: multiple offer situations, appraisal challenges in unique properties, HOA documentation delays. Working with an experienced broker helps anticipate and resolve issues quickly.",
          tags: ["problems", "delays", "issues"]
        },
        {
          question: "When should I lock my mortgage rate?",
          answer: "Rate locks protect against rate increases for 30-60 days (longer available for fee). Lock when: you have an accepted offer, rates are favorable, or you're concerned about rate increases. In volatile markets, consider locking at application. Orange County's quick closing timelines (often 21-30 days) work well with standard lock periods. Float down options available if rates decrease after locking.",
          tags: ["rate lock", "timing", "protection"]
        },
        {
          question: "What should I do to prepare for closing?",
          answer: "Pre-closing checklist: final walkthrough, wire transfer instructions to title company, homeowner's insurance in place, final loan approval received, closing disclosure reviewed (3-day review period), avoid new credit or large purchases, keep employment stable, and bring government ID and certified funds for closing costs. Orange County closings typically occur at title company offices.",
          tags: ["closing preparation", "walkthrough", "requirements"]
        }
      ]
    },
    {
      category: "Refinancing",
      icon: FileText,
      questions: [
        {
          question: "When does refinancing make sense?",
          answer: "Consider refinancing when: rates are 0.5-0.75% lower than current rate, you want to eliminate PMI, need cash for improvements/debt consolidation, want to shorten loan term, or switch loan types. Calculate break-even point: closing costs divided by monthly savings. In Orange County's appreciating market, cash-out refinancing for investment opportunities is common. Consider how long you plan to stay in the home.",
          tags: ["refinancing", "break-even", "cash-out"]
        },
        {
          question: "What's the difference between rate-and-term and cash-out refinancing?",
          answer: "Rate-and-term refinancing: changes rate/term without taking cash, lower rates, easier qualification, loan amount stays same or decreases. Cash-out refinancing: borrower receives cash above payoff amount, typically higher rates, stricter qualification, loan amount increases. Orange County homeowners often use cash-out for: investment properties, home improvements, debt consolidation, or education expenses.",
          tags: ["rate-and-term", "cash-out", "refinancing types"]
        },
        {
          question: "How much equity do I need to refinance?",
          answer: "Minimum equity requirements: rate-and-term refinancing typically requires 5-20% equity (80-95% LTV), cash-out refinancing usually requires 20-25% equity (75-80% LTV), jumbo cash-out may require 30% equity (70% LTV). Orange County's appreciation helps build equity quickly. Investment properties require higher equity (typically 25-30%). PMI removal requires 20% equity for conventional loans.",
          tags: ["equity", "ltv", "refinancing requirements"]
        },
        {
          question: "Should I refinance to eliminate PMI?",
          answer: "Eliminate PMI when you reach 20% equity through: appreciation, principal paydown, or home improvements. Options include: automatic removal at 78% LTV, requesting removal at 80% LTV (may require appraisal), or refinancing to remove PMI. In Orange County's appreciating market, many homeowners reach 20% equity within 2-3 years. Compare PMI elimination costs vs refinancing costs to determine best option.",
          tags: ["pmi removal", "equity", "appreciation"]
        },
        {
          question: "Can I refinance if my home value has decreased?",
          answer: "Limited options for underwater mortgages: HARP program ended, but some lenders offer similar programs for existing customers. Government programs like FHA Streamline or VA IRRRL allow refinancing without appraisal for existing FHA/VA loans. Portfolio lenders may offer solutions. Orange County's general appreciation trend means few properties are underwater, but pockets may exist from peak purchase periods.",
          tags: ["underwater", "declining values", "limited options"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <HelpCircle className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Mortgage FAQ
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Professional answers to every mortgage question. Licensed broker expertise for Orange County
              home buyers, homeowners, and investors.
            </p>
            <Badge className="bg-white text-blue-600 px-4 py-2 text-lg">
              50+ Expert Answers • Licensed NMLS #1426884
            </Badge>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {faqCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{category.category}</h3>
                      <p className="text-sm text-slate-600">{category.questions.length} questions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      {faqCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-4 mb-12">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">{category.category}</h2>
                <p className="text-slate-600">Professional answers to common questions</p>
              </div>
            </div>

            <div className="space-y-6">
              {category.questions.map((faq, index) => (
                <Card key={index} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900 flex items-start space-x-3">
                      <HelpCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span>{faq.question}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-slate max-w-none">
                      <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {faq.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Have a Question Not Answered Here?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get personalized answers from licensed mortgage broker Mo Abdel (NMLS #1426884).
            Comprehensive guidance for all Orange County mortgage needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-2" />
              <span className="font-semibold">Call Direct</span>
              <span className="text-blue-100">(949) 579-2057</span>
            </div>
            <div className="flex flex-col items-center">
              <Calculator className="w-8 h-8 mb-2" />
              <span className="font-semibold">Free Consultation</span>
              <span className="text-blue-100">Personalized Guidance</span>
            </div>
            <div className="flex flex-col items-center">
              <AlertCircle className="w-8 h-8 mb-2" />
              <span className="font-semibold">Response Time</span>
              <span className="text-blue-100">Within 24 Hours</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-orange-county-mortgage-broker">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Phone className="w-5 h-5 mr-2" />
                Ask Your Question
              </Button>
            </Link>
            <Link href="/calculator">
              <Button size="lg" variant="ghost" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Payment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-slate-600 space-y-2">
            <p>
              <strong>Professional Disclaimer:</strong> Answers provided by Mo Abdel, Licensed Mortgage Broker, NMLS #1426884.
            </p>
            <p>
              All information is for educational purposes only. Actual loan terms, rates, and requirements subject to credit approval,
              program availability, and market conditions. Contact for current rates and personalized guidance.
            </p>
            <p>
              Equal Housing Opportunity. Licensed to originate mortgages in California, Washington, Virginia, and Colorado.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}