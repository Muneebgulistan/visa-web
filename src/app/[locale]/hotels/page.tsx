import React from 'react';
import { useTranslations } from 'next-intl';
import HotelCatalogView from '@/components/HotelCatalogView';
import { Hotel, CheckCircle, ShieldCheck } from 'lucide-react';

export default function HotelsPage() {
  const t = useTranslations('hotelsPage');

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      {/* Page Header: Bento Light Card */}
      <div className="bg-card-light bento-card p-8 sm:p-12 border border-white/50 text-center max-w-4xl mx-auto space-y-4 shadow-soft">
        <span className="tag-coral text-xs mb-1">
          Embassy-Approved Vouchers
        </span>
        <h1 className="text-3xl sm:text-5xl font-normal text-dark tracking-tight">
          <span className="font-light italic">Verifiable</span> Hotel Reservations
        </h1>
        <p className="text-xs sm:text-sm text-dark-200 leading-relaxed max-w-xl mx-auto">
          {t('subtitle')}
        </p>

        {/* Feature Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2 text-xs text-dark-200">
          <span className="flex items-center space-x-1.5 rtl:space-x-reverse">
            <Hotel className="w-3.5 h-3.5 text-luxury-accent" />
            <span>Verified 4 &amp; 5-Star Properties</span>
          </span>
          <span className="flex items-center space-x-1.5 rtl:space-x-reverse">
            <CheckCircle className="w-3.5 h-3.5 text-luxury-accent" />
            <span>Embassy VFS &amp; TLS Accepted</span>
          </span>
          <span className="flex items-center space-x-1.5 rtl:space-x-reverse">
            <ShieldCheck className="w-3.5 h-3.5 text-luxury-highlight" />
            <span>Risk-Free Provisional Bookings</span>
          </span>
        </div>
      </div>

      {/* Catalog View */}
      <HotelCatalogView />
    </div>
  );
}
