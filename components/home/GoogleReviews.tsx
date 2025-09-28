import React from "react";
import { Star, ExternalLink } from "lucide-react";
import Link from "next/link";

// Google Reviews Schema for SEO
const googleReviewsSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mo Abdel - NEXA Mortgage LLC",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "25",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Karthikeyan R."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "datePublished": "2024-11-15",
      "reviewBody": "It has been a delightful experience to work with Mo. You know how stressful it can be to refinance your home. Waiting for your rate, waiting for the lender decision, temporary approval and so on. Mo was great in communicating with me clearly and was willing to go the extra mile to check documents, reach out to processors and so on. It could not have been stress free without Mo. so thank you Mo from the bottom of my heart. May you have good luck in all your loans.",
      "publisher": {
        "@type": "Organization",
        "name": "Google"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Sean K."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "datePublished": "2024-10-28",
      "reviewBody": "I can't recommend Mo enough! I was looking to tap into my home's equity but had no idea where to start. Mo walked me through each program and every step of the process in plain language, answered all my questions quickly, and never once made me feel pressured. The whole thing was smoother and faster than I expected. I had funds available in just days. He genuinely looked out for my best interest and got me an amazing rate. If you're thinking about a HELOC, Mo is the guy you want in your corner",
      "publisher": {
        "@type": "Organization",
        "name": "Google"
      }
    }
  ]
};

interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  platform: 'google' | 'yelp' | 'facebook';
  verified?: boolean;
  location?: string;
}

const reviews: Review[] = [
  {
    id: "1",
    author: "Karthikeyan R.",
    rating: 5,
    date: "2024-11-15",
    text: "It has been a delightful experience to work with Mo. You know how stressful it can be to refinance your home. Waiting for your rate, waiting for the lender decision, temporary approval and so on. Mo was great in communicating with me clearly and was willing to go the extra mile to check documents, reach out to processors and so on. It could not have been stress free without Mo. so thank you Mo from the bottom of my heart. May you have good luck in all your loans.",
    platform: "google",
    verified: true,
    location: ""
  },
  {
    id: "2",
    author: "Sean K.",
    rating: 5,
    date: "2024-10-28",
    text: "I can't recommend Mo enough! I was looking to tap into my home's equity but had no idea where to start. Mo walked me through each program and every step of the process in plain language, answered all my questions quickly, and never once made me feel pressured. The whole thing was smoother and faster than I expected. I had funds available in just days. He genuinely looked out for my best interest and got me an amazing rate. If you're thinking about a HELOC, Mo is the guy you want in your corner",
    platform: "google",
    verified: true,
    location: ""
  }
];

const getPlatformIcon = (platform: string) => {
  switch (platform) {
    case 'google':
      return (
        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">G</span>
        </div>
      );
    case 'yelp':
      return (
        <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">Y</span>
        </div>
      );
    case 'facebook':
      return (
        <div className="w-6 h-6 bg-blue-800 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">f</span>
        </div>
      );
    default:
      return null;
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

export default function GoogleReviews() {
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  return (
    <>
      {/* Google Reviews Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(googleReviewsSchema) }}
      />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Recent Client Reviews</h3>
          </div>

          {/* Reviews Grid */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  
                  {/* Review Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-900">{review.author}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          {review.location && (
                            <span>{review.location}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-700 leading-relaxed italic">
                    &quot;{review.text}&quot;
                  </p>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-8 pt-6 border-t border-slate-200">
              <p className="text-slate-600 mb-4">
                Ready to experience the same exceptional service?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact-orange-county-mortgage-broker"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Your Free Consultation
                </Link>
                <a 
                  href="tel:(949) 579-2057"
                  className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Call (949) 579-2057
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}