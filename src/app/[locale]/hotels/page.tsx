import React from 'react';
import { useTranslations } from 'next-intl';
import HotelCatalogView from '@/components/HotelCatalogView';
import { Hotel, CheckCircle, ShieldCheck } from 'lucide-react';

export default function HotelsPage() {
  const t = useTranslations('hotelsPage');

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-coral uppercase tracking-widest block">
          Embassy-Approved Vouchers
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
            <Hotel className="w-4 h-4 text-teal" />
            <span>Verified 4 & 5-Star Properties</span>
          </span>
          <span className="flex items-center space-x-1.5 rtl:space-x-reverse">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Embassy VFS & TLS Accepted</span>
          </span>
          <span className="flex items-center space-x-1.5 rtl:space-x-reverse">
            <ShieldCheck className="w-4 h-4 text-coral" />
            <span>No Non-refundable Purchases Required</span>
          </span>
        </div>
      </div>

      {/* Catalog View */}
      <HotelCatalogView />
    </div>
  );
}
