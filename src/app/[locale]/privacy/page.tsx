import React from 'react';
import { ShieldCheck, AlertTriangle } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      {/* Notice Banner */}
      <div className="bg-amber-50 border border-amber-300 rounded-[14px] p-4 text-xs text-amber-900 flex items-start space-x-3 rtl:space-x-reverse">
        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-bold block">
            [PLACEHOLDER LEGAL NOTICE - MARKED FOR REPLACEMENT]
          </span>
          <span>
            This privacy policy is a standard placeholder template. It must be reviewed and replaced with the finalized corporate legal text approved by legal counsel for SK Visa Experts under Saudi Arabian data protection laws (PDPL).
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl font-black text-dark tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs text-gray-500">
          Last updated: [PLACEHOLDER: Insert Date, e.g., November 2024]
        </p>
      </div>

      <div className="prose prose-teal text-sm text-gray-700 space-y-6 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-dark">1. Introduction</h2>
          <p>
            SK Visa Experts (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;), located at Umm Al Hamam St, Umm Al Hamam Al Sharqi, Riyadh 12321, Saudi Arabia, respects the privacy of our clients. This policy explains how we collect, handle, audit, and protect your personal identification records, travel details, and financial documentation when utilizing our visa preparation services.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-dark">2. Information We Collect</h2>
          <p>
            To compile and audit embassy-compliant visa files, we may request:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Full Name, Passport Number, Nationality, and Date of Birth</li>
            <li>Contact details: Phone number (+966 WhatsApp), Email address</li>
            <li>Saudi Iqama or National Identification documents</li>
            <li>Bank statements, salary certificates (NOC), and employment verification</li>
            <li>Travel itineraries, flight bookings, and hotel vouchers</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-dark">3. Purpose of Processing</h2>
          <p>
            All client data collected is utilized solely to prepare consular applications, draft professional cover letters, book appointment slots (VFS/TLS/BLS), and communicate application progress.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-dark">4. Payment Security & Data Privacy</h2>
          <p>
            We utilize 8 authorized payment gateways (Stripe, PayPal, JazzCash, Easypaisa, Saudi Bank Wire, Tap, Telr, PayTabs). Credit and debit card numbers are never stored on our servers. Transactions are encrypted using 256-bit SSL protocols.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-dark">5. Contact Information</h2>
          <p>
            For inquiries regarding your personal data:
            <br />
            <strong>SK Visa Experts</strong>
            <br />
            Umm Al Hamam St, Umm Al Hamam Al Sharqi, Riyadh 12321, Saudi Arabia
            <br />
            Phone / WhatsApp: +966 59 932 6936
            <br />
            Email: [PLACEHOLDER: Replace with privacy@skvisaexperts.com]
          </p>
        </section>
      </div>
    </div>
  );
}
