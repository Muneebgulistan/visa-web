import React from 'react';
import { FileText, AlertTriangle } from 'lucide-react';

export default function TermsPage() {
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
            These terms and conditions are placeholder terms. They must be reviewed and replaced with the finalized corporate terms of service approved by authorized legal counsel for SK Visa Experts.
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl font-black text-dark tracking-tight">
          Terms of Service
        </h1>
        <p className="text-xs text-gray-500">
          Last updated: [PLACEHOLDER: Insert Date, e.g., November 2024]
        </p>
      </div>

      <div className="prose prose-teal text-sm text-gray-700 space-y-6 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-dark">1. Consulting Scope & Disclaimer</h2>
          <p>
            SK Visa Experts is an independent, private visa file preparation and travel logistics advisory firm in Riyadh, Saudi Arabia. <strong>We are not an embassy, consulate, or governmental authority.</strong>
          </p>
          <p>
            The final decision to grant or refuse any visa category rests solely and exclusively with the sovereign government, embassy, or consulate to which the application is submitted. SK Visa Experts does not guarantee visa issuance.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-dark">2. Client Responsibilities</h2>
          <p>
            The applicant agrees to provide authentic, verifiable, and accurate personal documents, financial statements, employment letters, and disclosure of past immigration refusals. Submitting altered or forged documents results in immediate termination of services without refund.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-dark">3. Fees & Refund Policy</h2>
          <p>
            [PLACEHOLDER: Insert formal corporate refund terms here]
          </p>
          <p>
            Consultation fees paid to SK Visa Experts cover professional document compilation, auditing, itinerary drafting, and appointment scheduling. Once administrative work has commenced on a file, consultation fees are non-refundable. Consular and biometric fees paid directly to embassies or centers (e.g. VFS, TLS, BLS) are governed by their respective official terms.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-dark">4. Operating Hours & Appointments</h2>
          <p>
            Our office is located at Umm Al Hamam St, Umm Al Hamam Al Sharqi, Riyadh 12321, Saudi Arabia. The office opens at 8:00 AM on Saturday. [PLACEHOLDER: Working hours for remaining days are currently to be confirmed. Please schedule prior appointments via phone or WhatsApp at +966 59 932 6936].
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-dark">5. Contact</h2>
          <p>
            SK Visa Experts Co.
            <br />
            Umm Al Hamam St, Umm Al Hamam Al Sharqi, Riyadh 12321, Saudi Arabia
            <br />
            Phone / WhatsApp: +966 59 932 6936
            <br />
            Email: [PLACEHOLDER: Replace with legal@skvisaexperts.com]
          </p>
        </section>
      </div>
    </div>
  );
}
