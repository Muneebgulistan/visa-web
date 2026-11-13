'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-40">
      <a
        href="https://wa.me/966599326936?text=Hello%20SK%20Visa%20Experts,%20I%20would%20like%20to%20enquire%20about%20your%20visa%20services"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with SK Visa Experts on WhatsApp"
        className="group flex items-center bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-300"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
        <span className="hidden sm:inline-block font-semibold text-xs ml-2 rtl:ml-0 rtl:mr-2 tracking-wide">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
