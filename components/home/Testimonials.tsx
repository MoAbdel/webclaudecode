import React from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-base44">
          <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">What Our Clients Say</h3>
          
          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-4 italic text-lg">
                &quot;It has been a delightful experience to work with Mo. You know how stressful it can be to refinance your home. Waiting for your rate, waiting for the lender decision, temporary approval and so on. Mo was great in communicating with me clearly and was willing to go the extra mile to check documents, reach out to processors and so on. It could not have been stress free without Mo. so thank you Mo from the bottom of my heart. May you have good luck in all your loans.&quot;
              </p>
              <p className="font-semibold text-slate-900">Karthikeyan R.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}