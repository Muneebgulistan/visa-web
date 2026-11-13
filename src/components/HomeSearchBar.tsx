'use client';

import React, { useState } from 'react';
import { useRouter } from '@/i18n/routing';
import { Search, Compass, MapPin, ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function HomeSearchBar() {
  const t = useTranslations('hero');
  const router = useRouter();

  const [visaType, setVisaType] = useState('all');
  const [destination, setDestination] = useState('all');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (visaType !== 'all') params.set('type', visaType);
    if (destination !== 'all') params.set('country', destination);
    router.push(`/visas?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="bg-card-light/95 backdrop-blur-md rounded-2xl sm:rounded-pill p-2 sm:p-3 shadow-soft border border-white/60 flex flex-col md:flex-row items-center gap-2.5 w-full max-w-4xl mx-auto"
    >
      {/* Visa Type Selector */}
      <div className="w-full md:flex-1 relative flex items-center bg-white/80 hover:bg-white rounded-pill px-4 py-2.5 transition-all border border-white/50 focus-within:border-luxury-accent focus-within:bg-white">
        <Compass className="w-4 h-4 text-luxury-accent mr-2.5 rtl:mr-0 rtl:ml-2.5 flex-shrink-0" />
        <div className="w-full text-left rtl:text-right">
          <label className="block text-[11px] font-medium text-dark-200 leading-none">
            {t('searchVisaType')}
          </label>
          <select
            value={visaType}
            onChange={(e) => setVisaType(e.target.value)}
            className="w-full bg-transparent text-xs sm:text-sm font-medium text-dark focus:outline-none cursor-pointer mt-0.5 truncate"
          >
            <option value="all">All visa categories</option>
            <option value="tourist">{t('touristVisa')}</option>
            <option value="business">{t('businessVisa')}</option>
            <option value="student">{t('studentVisa')}</option>
            <option value="transit">{t('umrahVisa')}</option>
          </select>
        </div>
      </div>

      {/* Destination Selector */}
      <div className="w-full md:flex-1 relative flex items-center bg-white/80 hover:bg-white rounded-pill px-4 py-2.5 transition-all border border-white/50 focus-within:border-luxury-accent focus-within:bg-white">
        <MapPin className="w-4 h-4 text-luxury-highlight mr-2.5 rtl:mr-0 rtl:ml-2.5 flex-shrink-0" />
        <div className="w-full text-left rtl:text-right">
          <label className="block text-[11px] font-medium text-dark-200 leading-none">
            {t('searchDestination')}
          </label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full bg-transparent text-xs sm:text-sm font-medium text-dark focus:outline-none cursor-pointer mt-0.5 truncate"
          >
            <option value="all">{t('allDestinations')}</option>
            <option value="United Kingdom">United Kingdom (UK)</option>
            <option value="France">Schengen Area (France, Germany, Italy, Spain)</option>
            <option value="United States">United States (USA)</option>
            <option value="Canada">Canada</option>
            <option value="Japan">Japan</option>
            <option value="Australia">Australia</option>
            <option value="Turkey">Turkey</option>
            <option value="Saudi Arabia">Saudi Arabia (Umrah / Transit)</option>
          </select>
        </div>
      </div>

      {/* Submit Action: Pill-shaped dark button with ample padding and arrow */}
      <div className="w-full md:w-auto flex-shrink-0">
        <button
          type="submit"
          className="btn-pill-primary w-full md:w-auto py-3 px-6 text-xs sm:text-sm gap-2 whitespace-nowrap shadow-soft"
        >
          <Search className="w-3.5 h-3.5 text-luxury-highlight" />
          <span>{t('searchAction')}</span>
          <ArrowUpRight className="w-3.5 h-3.5 opacity-60 hidden sm:inline" />
        </button>
      </div>
    </form>
  );
}
