import React from 'react';
import { ShieldCheck, AlertTriangle } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-6">
      {/* Notice Banner */}
      <div className="bg-card-light bento-card p-4 text-xs text-dark flex items-start space-x-3 rtl:space-x-reverse border border-white/60">
        <AlertTriangle className="w-5 h-5 text-luxury-highlight flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-bold block">
            [PLACEHOLDER LEGAL NOTICE - MARKED FOR REPLACEMENT]
          </span>
          <span className="text-dark-200">
            This privacy policy is a standard placeholder template. It must be reviewed and replaced with the finalized corporate legal text approved by legal counsel for SK Visa Experts under Saudi Arabian data protection laws (PDPL).
          </span>
        </div>
      </div>

      <div className="bg-card-light bento-card p-8 sm:p-10 border border-white/50 space-y-6">
        <div className="space-y-2 border-b border-dark/10 pb-4">
          <h1 className="text-2xl sm:text-4xl font-normal text-dark tracking-tight">
            <span className="font-light italic">Privacy</span> Protocol &amp; Policy
          </h1>
          <p className="text-xs text-dark-200">
            Last updated: [November 2024]
          </p>
        </div>

        <div className="text-xs sm:text-sm text-dark-200 space-y-6 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-dark">1. Introduction</h2>
            <p>
              SK Visa Experts (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;), located at Umm Al Hamam St, Umm Al Hamam Al Sharqi, Riyadh 12321, Saudi Arabia, respects the privacy of our clients. This policy explains how we collect, handle, audit, and protect your personal identification records, travel details, and financial documentation when utilizing our visa preparation services.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-dark">2. Information We Collect</h2>
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
            <h2 className="text-base font-bold text-dark">3. Purpose of Processing</h2>
            <p>
              All client data collected is utilized solely to prepare consular applications, draft professional cover letters, book appointment slots (VFS/TLS/BLS), and communicate application progress.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-dark">4. Payment Security &amp; Data Privacy</h2>
            <p>
              Credit card transactions are processed securely through authorized PCI-DSS compliant regional gateways (Tap, PayTabs, Telr, Stripe). SK Visa Experts never stores your raw credit card numbers or security CVV codes on our servers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-dark">5. Contact Information</h2>
            <p>
              If you have any questions or data removal requests regarding this policy, contact our Riyadh privacy officer at <strong>info@skvisaexperts.com</strong> or visit our office at Umm Al Hamam St, Riyadh 12321, Saudi Arabia.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
