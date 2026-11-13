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
        className="group relative flex items-center bg-dark hover:bg-black text-white p-3.5 sm:px-5 sm:py-3 rounded-pill shadow-float hover:scale-105 transition-all duration-300 border border-white/20"
      >
        {/* Red Notification Badge */}
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-luxury-badge flex items-center justify-center text-[9px] font-bold text-white shadow-sm ring-2 ring-sage">
          1
        </span>

        <MessageCircle className="w-5 h-5 text-luxury-highlight" />
        <span className="hidden sm:inline-block font-medium text-xs ml-2 rtl:ml-0 rtl:mr-2 tracking-normal text-white">
          WhatsApp Advisory
        </span>
      </a>
    </div>
  );
}
