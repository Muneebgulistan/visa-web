import React from 'react';
import { useTranslations } from 'next-intl';
import PackageFilterView from '@/components/PackageFilterView';
import { Sparkles, CheckCircle2, Shield } from 'lucide-react';

export default function PackagesPage() {
  const t = useTranslations('packagesPage');

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-coral uppercase tracking-widest block">
          Spiritual & Leisure Journeys
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
            <Sparkles className="w-4 h-4 text-teal" />
            <span>5-Star Umrah & Haram View Hotels</span>
          </span>
          <span className="flex items-center space-x-1.5 rtl:space-x-reverse">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Nusuk Permit & Rawdah Guidance</span>
          </span>
          <span className="flex items-center space-x-1.5 rtl:space-x-reverse">
            <Shield className="w-4 h-4 text-coral" />
            <span>End-to-End Ground Transfers</span>
          </span>
        </div>
      </div>

      {/* Filterable Package Catalog */}
      <PackageFilterView />
    </div>
  );
}
