'use client';

import React from 'react';
import { X, CheckCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface SuccessPopupProps {
  isVisible: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  buttonText?: string;
}

export default function SuccessPopup({
  isVisible,
  onClose,
  title = "Successfully Subscribed!",
  message = "Welcome to Mo's Market Insights! You'll receive your first newsletter within 24 hours with exclusive Orange County market data and rate forecasts.",
  buttonText = "Continue"
}: SuccessPopupProps) {
  
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Popup */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
          aria-label="Close popup"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
        
        {/* Content */}
        <div className="p-8 text-center">
          {/* Success icon */}
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          
          {/* Title */}
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            {title}
          </h3>
          
          {/* Message */}
          <p className="text-slate-600 mb-6 leading-relaxed">
            {message}
          </p>
          
          {/* Benefits list */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6 text-left">
            <div className="flex items-center mb-3">
              <Mail className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-semibold text-slate-900">What to expect:</span>
            </div>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• Weekly Orange County market insights</li>
              <li>• Exclusive competitive rate updates</li>
              <li>• First-time buyer tips and programs</li>
              <li>• Mo's personal market predictions</li>
            </ul>
          </div>
          
          {/* Action button */}
          <Button 
            onClick={onClose}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
          >
            {buttonText}
          </Button>
          
          {/* Footer note */}
          <p className="text-xs text-slate-500 mt-4">
            No spam, ever. Unsubscribe with one click anytime.
          </p>
        </div>
      </div>
    </div>
  );
}

