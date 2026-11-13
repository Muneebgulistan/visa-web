import React from 'react';
import { useTranslations } from 'next-intl';
import FlightSearchForm from '@/components/FlightSearchForm';
import { Plane, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export default function AirlinePage() {
  const t = useTranslations('airlinePage');

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      {/* Page Header: Bento Light Card */}
      <div className="bg-card-light bento-card p-8 sm:p-12 border border-white/50 text-center max-w-4xl mx-auto space-y-4 shadow-soft">
        <span className="tag-coral text-xs mb-1">
          Verifiable Flight Reservations
        </span>
        <h1 className="text-3xl sm:text-5xl font-normal text-dark tracking-tight">
          <span className="font-light italic">Airline Itinerary</span> &amp; PNR Booking
        </h1>
        <p className="text-xs sm:text-sm text-dark-200 leading-relaxed max-w-xl mx-auto">
          {t('subtitle')}
        </p>

        {/* Feature Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2 text-xs text-dark-200">
          <span className="flex items-center space-x-1.5 rtl:space-x-reverse">
            <Plane className="w-3.5 h-3.5 text-luxury-accent" />
            <span>Active Airline PNR Codes</span>
          </span>
          <span className="flex items-center space-x-1.5 rtl:space-x-reverse">
            <ShieldCheck className="w-3.5 h-3.5 text-luxury-accent" />
            <span>Embassy-Compliant Itineraries</span>
          </span>
          <span className="flex items-center space-x-1.5 rtl:space-x-reverse">
            <Clock className="w-3.5 h-3.5 text-luxury-highlight" />
            <span>Instant 2-Hour Turnaround</span>
          </span>
        </div>
      </div>

      {/* Flight Search & Quote Form */}
      <div className="max-w-4xl mx-auto">
        <FlightSearchForm />
      </div>

      {/* Why Book Flight Itineraries Through SK Visa Experts: Bento Row */}
      <div className="bg-card-dark text-white bento-card p-6 sm:p-8 border border-white/10 max-w-4xl mx-auto space-y-6">
        <h3 className="text-base sm:text-lg font-normal text-white text-center">
          <span className="font-light italic">Why Embassies Require</span> Verifiable Flight Reservations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-white/70">
          <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-1">
            <span className="font-bold text-luxury-highlight block mb-1">
              Avoid Financial Risk
            </span>
            Embassies advise applicants not to purchase expensive non-refundable air tickets before visa approval. Our provisional PNR reservations satisfy all consular proof-of-travel criteria.
          </div>
          <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-1">
            <span className="font-bold text-luxury-highlight block mb-1">
              Active PNR Verification
            </span>
            Visa officers cross-check your booking reference number directly on airline systems (e.g. Saudia, Emirates, British Airways). Our reservations are fully live and active.
          </div>
          <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-1">
            <span className="font-bold text-luxury-highlight block mb-1">
              Flexible Dates
            </span>
            If the embassy takes longer to issue your visa, we adjust your flight dates free of charge to match your approved entry window.
          </div>
        </div>
      </div>
    </div>
  );
}
