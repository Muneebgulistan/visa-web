import React from 'react';
import { useTranslations } from 'next-intl';
import FlightSearchForm from '@/components/FlightSearchForm';
import { Plane, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export default function AirlinePage() {
  const t = useTranslations('airlinePage');

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-coral uppercase tracking-widest block">
          Verifiable Flight Reservations
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-dark tracking-tight">
          {t('title')}
        </h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {t('subtitle')}
        </p>

        {/* Feature Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-3 text-xs text-gray-600">
          <span className="flex items-center space-x-1.5 rtl:space-x-reverse">
            <Plane className="w-4 h-4 text-teal" />
            <span>Active Airline PNR Codes</span>
          </span>
          <span className="flex items-center space-x-1.5 rtl:space-x-reverse">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Embassy-Compliant Itineraries</span>
          </span>
          <span className="flex items-center space-x-1.5 rtl:space-x-reverse">
            <Clock className="w-4 h-4 text-coral" />
            <span>Instant 2-Hour Turnaround</span>
          </span>
        </div>
      </div>

      {/* Flight Search & Quote Form */}
      <div className="max-w-4xl mx-auto">
        <FlightSearchForm />
      </div>

      {/* Why Book Flight Itineraries Through SK Visa Experts */}
      <div className="bg-mint rounded-[14px] p-8 border border-teal-100 max-w-4xl mx-auto">
        <h3 className="text-lg font-bold text-teal-900 mb-4 text-center">
          Why Consulates Require Verifiable Flight Reservations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-700">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <span className="font-bold text-teal block mb-1">
              Avoid Financial Risk
            </span>
            Embassies advise applicants not to purchase expensive non-refundable air tickets before visa approval. Our provisional PNR reservations satisfy all consular proof-of-travel criteria.
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <span className="font-bold text-teal block mb-1">
              Active PNR Verification
            </span>
            Visa officers cross-check your booking reference number directly on airline systems (e.g. Saudia, Emirates, British Airways). Our reservations are fully live and active.
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <span className="font-bold text-teal block mb-1">
              Flexible Dates
            </span>
            If the embassy takes longer to issue your visa, we adjust your flight dates free of charge to match your approved entry window.
          </div>
        </div>
      </div>
    </div>
  );
}
