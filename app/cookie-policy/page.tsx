import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | Mo The Broker',
  description: 'Cookie policy for mothebroker.com. Learn how we use cookies to improve your experience.',
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: January 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">What Are Cookies</h2>
          <p className="mb-4">
            Cookies are small text files that are placed on your device when you visit our website. 
            They help us provide you with a better experience by remembering your preferences and 
            understanding how you use our site.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Cookies</h2>
          <p className="mb-4">We use cookies to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Remember your preferences and settings</li>
            <li>Understand how you navigate our website</li>
            <li>Improve our website performance</li>
            <li>Provide relevant content and services</li>
            <li>Analyze website traffic through Google Analytics</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Types of Cookies We Use</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Essential Cookies</h3>
          <p className="mb-4">
            These cookies are necessary for the website to function properly. They enable basic 
            functions like page navigation and access to secure areas of the website.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Analytics Cookies</h3>
          <p className="mb-4">
            We use Google Analytics to understand how visitors interact with our website. These 
            cookies collect information in an anonymous form, including the number of visitors, 
            where visitors come from, and the pages they visit.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Functional Cookies</h3>
          <p className="mb-4">
            These cookies allow the website to remember choices you make (such as your preferred 
            language or the region you are in) and provide enhanced, more personalized features.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Managing Cookies</h2>
          <p className="mb-4">
            You can control and manage cookies in your browser settings. Please note that removing 
            or blocking cookies may impact your user experience and parts of our website may no 
            longer be fully accessible.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our Cookie Policy, please contact us:
          </p>
          <ul className="list-none mb-4">
            <li><strong>Phone:</strong> (949) 579-2057</li>
            <li><strong>Email:</strong> mo@mothebroker.com</li>
            <li><strong>NMLS:</strong> #1426884</li>
          </ul>
        </div>
      </div>
    </div>
  )
}