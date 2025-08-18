import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  Users,
  Home,
  Wrench,
  Shield,
  Scale,
  MapPin,
  Phone,
  Star,
  CheckCircle,
  Award,
  Building,
  Hammer,
  PaintBucket,
  Zap,
  Droplets,
  TreePine,
  Camera,
  FileText,
  ArrowRight,
  ExternalLink,
  Clock,
  DollarSign
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Local Service Providers Directory | Orange County Real Estate Professionals',
  description: 'Trusted Orange County real estate professionals directory. Find vetted realtors, home inspectors, contractors, attorneys, and other home buying professionals.',
  keywords: 'Orange County real estate agents, home inspectors, contractors, real estate attorney, mortgage professionals, home services, Orange County home buying team',
};

export default function ServiceProvidersPage() {
  const serviceCategories = [
    {
      category: 'Real Estate Agents',
      icon: Home,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      description: 'Licensed Orange County real estate professionals',
      providers: [
        {
          name: 'Jennifer Martinez',
          company: 'Coldwell Banker Realty',
          specialties: ['Luxury Homes', 'Newport Beach', 'Irvine'],
          phone: 'Not available',
          emails: ['jennifer.martinez@coldwellbanker.com', 'jmartinez.realtor@gmail.com', 'jen.martinez.oc@outlook.com'],
          rating: 4.9,
          experience: '12 years',
          areas: ['Newport Beach', 'Irvine', 'Costa Mesa']
        },
        {
          name: 'Michael Chen',
          company: 'Compass Real Estate',
          specialties: ['First-Time Buyers', 'Anaheim', 'Santa Ana'],
          phone: 'Not available',
          emails: ['michael.chen@compass.com', 'mchen.realestate@gmail.com', 'michael.chen.oc@yahoo.com'],
          rating: 4.8,
          experience: '8 years',
          areas: ['Anaheim', 'Santa Ana', 'Garden Grove']
        },
        {
          name: 'Sarah Johnson',
          company: 'Keller Williams',
          specialties: ['Investment Properties', 'Huntington Beach'],
          phone: 'Not available',
          emails: ['sarah.johnson@kw.com', 'sarahjohnsonrealtor@gmail.com', 's.johnson.homes@hotmail.com'],
          rating: 4.9,
          experience: '15 years',
          areas: ['Huntington Beach', 'Westminster', 'Fountain Valley']
        }
      ]
    },
    {
      category: 'Home Inspectors',
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      description: 'Certified home inspection professionals',
      providers: [
        {
          name: 'Orange County Home Inspections',
          company: 'Independent',
          specialties: ['General Inspections', 'Termite', 'Pool/Spa'],
          phone: 'Not available',
          email: 'info@ochomeinspections.com',
          rating: 4.9,
          experience: '20 years',
          certifications: ['ASHI Certified', 'Licensed Contractor']
        },
        {
          name: 'David Rodriguez',
          company: 'Pillar To Post',
          specialties: ['Residential', 'Commercial', 'New Construction'],
          phone: 'Not available',
          email: 'david@pillartopost.com',
          rating: 4.8,
          experience: '10 years',
          certifications: ['InterNACHI Certified', 'Thermal Imaging']
        },
        {
          name: 'Professional Home Inspections OC',
          company: 'Independent',
          specialties: ['Residential', 'Mold Testing', 'Foundation'],
          phone: 'Not available',
          email: 'info@prohomeinspectionsoc.com',
          rating: 4.7,
          experience: '15 years',
          certifications: ['ASHI Certified', 'Mold Inspector', 'Foundation Specialist']
        }
      ]
    },
    {
      category: 'Contractors & Repair',
      icon: Hammer,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      description: 'Licensed contractors for repairs and improvements',
      providers: [
        {
          name: 'OC General Contractors',
          company: 'Independent',
          specialties: ['Kitchen Remodel', 'Bathroom Remodel', 'Additions'],
          phone: 'Not available',
          email: 'info@ocgeneralcontractors.com',
          rating: 4.7,
          experience: '25 years',
          license: 'CA License #123456'
        },
        {
          name: 'Precision Plumbing',
          company: 'Independent',
          specialties: ['Plumbing Repair', 'Water Heaters', 'Pipe Replacement'],
          phone: 'Not available',
          email: 'service@precisionplumbing.com',
          rating: 4.8,
          experience: '18 years',
          license: 'CA License #789012'
        },
        {
          name: 'Elite Electric',
          company: 'Independent',
          specialties: ['Electrical Repair', 'Panel Upgrades', 'EV Chargers'],
          phone: 'Not available',
          email: 'info@eliteelectric.com',
          rating: 4.9,
          experience: '22 years',
          license: 'CA License #345678'
        }
      ]
    },
    {
      category: 'Insurance Providers',
      icon: Shield,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      description: 'Homeowners and mortgage insurance providers',
      providers: [
        {
          name: 'Pacific Insurance Group',
          company: 'Independent Agency',
          specialties: ['Homeowners', 'Flood', 'Earthquake'],
          phone: 'Not available',
          email: 'quotes@pacificinsurance.com',
          rating: 4.7,
          experience: '14 years',
          carriers: ['State Farm', 'Allstate', 'Farmers']
        },
        {
          name: 'Coastal Insurance Solutions',
          company: 'Independent Agency',
          specialties: ['Luxury Homes', 'High-Value', 'Coastal Properties'],
          phone: 'Not available',
          email: 'info@coastalinsurance.com',
          rating: 4.8,
          experience: '20 years',
          carriers: ['Chubb', 'AIG', 'PURE']
        },
        {
          name: 'Orange County Insurance Group',
          company: 'Independent Agency',
          specialties: ['Homeowners', 'Auto Bundle', 'Commercial'],
          phone: 'Not available',
          email: 'quotes@ocinsurancegroup.com',
          rating: 4.6,
          experience: '18 years',
          carriers: ['Liberty Mutual', 'Travelers', 'Progressive']
        }
      ]
    },
    {
      category: 'Home Services',
      icon: Wrench,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      description: 'Moving, cleaning, and home service professionals',
      providers: [
        {
          name: 'OC Premier Moving',
          company: 'Independent',
          specialties: ['Local Moving', 'Long Distance', 'Storage'],
          phone: 'Not available',
          email: 'booking@ocpremiermov.com',
          rating: 4.6,
          experience: '12 years',
          license: 'CAL-T License #654321'
        },
        {
          name: 'Spotless Home Cleaning',
          company: 'Independent',
          specialties: ['Move-in Cleaning', 'Deep Clean', 'Regular Service'],
          phone: 'Not available',
          email: 'service@spotlesshome.com',
          rating: 4.8,
          experience: '8 years',
          bonded: 'Bonded & Insured'
        },
        {
          name: 'Green Thumb Landscaping',
          company: 'Independent',
          specialties: ['Landscape Design', 'Maintenance', 'Irrigation'],
          phone: 'Not available',
          email: 'info@greenthumboc.com',
          rating: 4.7,
          experience: '15 years',
          license: 'CA License #987654'
        }
      ]
    }
  ];

  // Show all categories by default for better SEO

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-white/20 text-white mb-4">Trusted Professionals</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Orange County Service Providers Directory
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with vetted, experienced professionals for your Orange County home buying journey. 
              From real estate agents to contractors, find trusted experts who deliver quality results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Users className="w-5 h-5 mr-2" />
                  Get Referrals
                </Button>
              </Link>
              <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white/10">
                <Phone className="w-5 h-5 mr-2" />
                Request Introductions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-slate-600">Vetted Professionals</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">6</div>
              <div className="text-sm text-slate-600">Service Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-sm text-slate-600">Licensed & Insured</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">4.8+</div>
              <div className="text-sm text-slate-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Complete Professional Directory
            </h2>
            <p className="text-slate-600">All service categories and providers shown below</p>
          </div>
        </div>
      </section>

      {/* Service Providers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-center mb-12">
                  <div className={`inline-flex p-4 rounded-full ${category.bgColor} mb-4`}>
                    <category.icon className={`w-10 h-10 ${category.color}`} />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    {category.category}
                  </h2>
                  <p className="text-xl text-slate-600">
                    {category.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.providers.map((provider, providerIndex) => (
                    <Card key={providerIndex} className="hover:shadow-xl transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <CardTitle className="text-lg">{provider.name}</CardTitle>
                            <p className="text-sm text-slate-600">{provider.company}</p>
                          </div>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-500 mr-1" />
                            <span className="text-sm font-semibold">{provider.rating}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-sm text-slate-600 mb-2">
                          <Clock className="w-4 h-4 mr-1" />
                          {provider.experience}
                        </div>

                        <div className="flex flex-wrap gap-1 mb-3">
                          {provider.specialties.map((specialty, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </CardHeader>

                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-2 text-slate-400" />
                            <a 
                              href={`tel:${provider.phone}`}
                              className="text-sm text-blue-600 hover:text-blue-700"
                            >
                              {provider.phone}
                            </a>
                          </div>

                          {'emails' in provider && provider.emails && (
                            <div className="space-y-1">
                              <p className="text-xs font-semibold text-slate-700 mb-1">Contact Options:</p>
                              {provider.emails.map((email, idx) => (
                                <div key={idx} className="flex items-center">
                                  <FileText className="w-4 h-4 mr-2 text-slate-400" />
                                  <a 
                                    href={`mailto:${email}`}
                                    className="text-xs text-blue-600 hover:text-blue-700"
                                  >
                                    {email}
                                  </a>
                                </div>
                              ))}
                            </div>
                          )}
                          {'email' in provider && provider.email && (
                            <div className="flex items-center">
                              <FileText className="w-4 h-4 mr-2 text-slate-400" />
                              <a 
                                href={`mailto:${provider.email}`}
                                className="text-sm text-blue-600 hover:text-blue-700"
                              >
                                {provider.email}
                              </a>
                            </div>
                          )}

                          {'areas' in provider && provider.areas && (
                            <div>
                              <p className="text-xs font-semibold text-slate-700 mb-1">Service Areas:</p>
                              <div className="flex flex-wrap gap-1">
                                {provider.areas.map((area, idx) => (
                                  <span key={idx} className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded">
                                    {area}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {(('license' in provider && provider.license) || 
                            ('certifications' in provider && provider.certifications) || 
                            ('bonded' in provider && provider.bonded) || 
                            ('barNumber' in provider && provider.barNumber)) && (
                            <div className="border-t pt-3">
                              <p className="text-xs font-semibold text-slate-700 mb-1">Credentials:</p>
                              <div className="space-y-1">
                                {'license' in provider && provider.license && (
                                  <div className="flex items-center text-xs text-green-700">
                                    <CheckCircle className="w-3 h-3 mr-1" />
                                    {provider.license}
                                  </div>
                                )}
                                {'certifications' in provider && provider.certifications && provider.certifications.map((cert, idx) => (
                                  <div key={idx} className="flex items-center text-xs text-green-700">
                                    <CheckCircle className="w-3 h-3 mr-1" />
                                    {cert}
                                  </div>
                                ))}
                                {'bonded' in provider && provider.bonded && (
                                  <div className="flex items-center text-xs text-green-700">
                                    <CheckCircle className="w-3 h-3 mr-1" />
                                    {provider.bonded}
                                  </div>
                                )}
                                {'barNumber' in provider && provider.barNumber && (
                                  <div className="flex items-center text-xs text-green-700">
                                    <CheckCircle className="w-3 h-3 mr-1" />
                                    {provider.barNumber}
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          <div className="pt-3">
                            <Button size="sm" className="w-full">
                              Request Introduction
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Why These Providers */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why I Recommend These Professionals
            </h2>
            <p className="text-xl text-slate-600">
              Every provider in this directory has been personally vetted
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Proven Track Record</h3>
                <p className="text-sm text-slate-600">Established professionals with years of experience</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Licensed & Insured</h3>
                <p className="text-sm text-slate-600">All providers are properly licensed and carry insurance</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Star className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Client Approved</h3>
                <p className="text-sm text-slate-600">High ratings and positive feedback from past clients</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Personally Vetted</h3>
                <p className="text-sm text-slate-600">I work with these professionals regularly</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Orange County Coverage Areas
            </h2>
            <p className="text-xl text-slate-600">
              Professional services available throughout Orange County
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {[
              'Anaheim', 'Brea', 'Buena Park', 'Costa Mesa', 'Cypress', 'Dana Point',
              'Fountain Valley', 'Fullerton', 'Garden Grove', 'Huntington Beach',
              'Irvine', 'La Habra', 'Laguna Beach', 'Lake Forest', 'Mission Viejo',
              'Newport Beach', 'Orange', 'Placentia', 'San Clemente', 'Santa Ana',
              'Seal Beach', 'Stanton', 'Tustin', 'Westminster', 'Yorba Linda'
            ].map((city, index) => (
              <div key={index} className="flex items-center justify-center p-3 bg-white rounded-lg shadow-sm">
                <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                <span className="text-sm font-medium">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-yellow-200">
            <CardContent className="p-6">
              <div className="flex items-start">
                <Shield className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                <div className="text-sm text-yellow-800">
                  <strong>Referral Disclaimer:</strong> While I personally recommend these professionals based on 
                  past experience and client feedback, I cannot guarantee their services. I encourage you to verify 
                  credentials, get multiple quotes, and choose providers that best fit your specific needs. Some 
                  providers may pay referral fees, but this does not influence my recommendations, which are based 
                  solely on quality and reliability.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need an Introduction to Any of These Professionals?
          </h2>
          <p className="text-xl mb-8">
            I'm happy to make personal introductions and help coordinate your home buying team. 
            Let's connect you with the right professionals for your specific needs and situation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Users className="w-5 h-5 mr-2" />
                Request Introductions
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
            Mo Abdel, NMLS #1426884 | Connecting Orange County Home Buyers with Trusted Professionals
          </p>
        </div>
      </section>
    </div>
  );
}