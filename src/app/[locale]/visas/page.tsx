import React, { Suspense } from 'react';
import { useTranslations } from 'next-intl';
import VisaFilterView from '@/components/VisaFilterView';
import { ShieldCheck, Clock, Award } from 'lucide-react';

export default function VisasPage() {
  const t = useTranslations('visasPage');

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-coral uppercase tracking-widest block">
          Authorized Consular Advisory
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
            <ShieldCheck className="w-4 h-4 text-teal" />
            <span>Embassy-Compliant Dossier</span>
          </span>
          <span className="flex items-center space-x-1.5 rtl:space-x-reverse">
            <Clock className="w-4 h-4 text-teal" />
            <span>Fast VFS / TLS Appointments</span>
          </span>
          <span className="flex items-center space-x-1.5 rtl:space-x-reverse">
            <Award className="w-4 h-4 text-coral" />
            <span>99.2% Accuracy Audit</span>
          </span>
        </div>
      </div>

      {/* Filterable Catalog wrapped in Suspense for searchParams */}
      <Suspense fallback={<div className="text-center py-12 text-sm text-gray-500">Loading visa plans...</div>}>
        <VisaFilterView />
      </Suspense>
    </div>
  );
}
