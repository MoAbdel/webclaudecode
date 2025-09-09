import React from "react";
import { Button } from "@/components/ui/Button";
import { Calculator, Phone } from "lucide-react";
import Link from "next/link";

export default function ReadyToGetStarted() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ready to Get Started CTA Section */}
        <div className="bg-blue-600 text-white rounded-2xl p-8 text-center shadow-lg">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl text-blue-100 mb-8">
            Get your personalized rate quote in under 60 seconds
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/calculator">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Rates
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                <Phone className="w-5 h-5 mr-2" />
                (949) 579-2057
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

