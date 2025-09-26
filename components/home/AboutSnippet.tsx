'use client';

import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';
import { Award, Users, Clock } from 'lucide-react';

export default function AboutSnippet() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Meet Mo Abdel
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                I'm passionate about making homeownership accessible for Orange County families. As your dedicated mortgage broker, I leverage my extensive network of 200+ lenders to secure wholesale rates that big banks simply can't match. My commitment is simple: find you the best deal with the fastest closing timeline possible.
              </p>

              <div className="flex flex-wrap gap-4">
                <Badge className="bg-blue-100 text-blue-800 px-3 py-2">
                  <Award className="w-4 h-4 mr-2" />
                  NMLS #1426884
                </Badge>
                <Badge className="bg-green-100 text-green-800 px-3 py-2">
                  <Users className="w-4 h-4 mr-2" />
                  Local OC Expert
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
                  src="/images/moabdel-headshot-final.png"
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