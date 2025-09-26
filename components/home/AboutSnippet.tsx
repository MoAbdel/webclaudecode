'use client';

import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';
import { Award, Users, Clock } from 'lucide-react';

export default function AboutSnippet() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Meet Mo Abdel
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                With over a decade of experience in Orange County's mortgage industry, I specialize in securing wholesale rates and fast closings for my clients. As a licensed mortgage broker, I have access to 200+ lenders, allowing me to find the perfect loan program for your unique situation.
              </p>

              <div className="flex flex-wrap gap-4">
                <Badge className="bg-blue-100 text-blue-800 px-3 py-2">
                  <Award className="w-4 h-4 mr-2" />
                  NMLS #1426884
                </Badge>
                <Badge className="bg-green-100 text-green-800 px-3 py-2">
                  <Users className="w-4 h-4 mr-2" />
                  1000+ Happy Clients
                </Badge>
                <Badge className="bg-purple-100 text-purple-800 px-3 py-2">
                  <Clock className="w-4 h-4 mr-2" />
                  18-Day Avg Close
                </Badge>
              </div>
            </div>
          </div>

          {/* Right Column - Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/mo-headshot.webp"
                  alt="Mo Abdel - Orange County Mortgage Broker"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-500 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}