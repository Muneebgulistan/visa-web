'use client';

import React, { useState } from 'react';
import { useRouter } from '@/i18n/routing';
import { Search, Compass, MapPin } from 'lucide-react';
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
      className="bg-white rounded-[14px] p-3 sm:p-4 shadow-xl border border-gray-100 grid grid-cols-1 md:grid-cols-12 gap-3"
    >
      {/* Visa Type Selector */}
      <div className="md:col-span-5 relative flex items-center bg-gray-50/80 rounded-xl px-3.5 py-2.5 border border-gray-200 focus-within:border-teal">
        <Compass className="w-5 h-5 text-teal mr-2.5 rtl:mr-0 rtl:ml-2.5 flex-shrink-0" />
        <div className="w-full">
          <label className="block text-[10px] uppercase font-bold text-gray-400 leading-none">
            {t('searchVisaType')}
          </label>
          <select
            value={visaType}
            onChange={(e) => setVisaType(e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-dark focus:outline-none cursor-pointer mt-1"
          >
            <option value="all">All Visa Types</option>
            <option value="tourist">{t('touristVisa')}</option>
            <option value="business">{t('businessVisa')}</option>
            <option value="student">{t('studentVisa')}</option>
            <option value="transit">{t('umrahVisa')}</option>
          </select>
        </div>
      </div>

      {/* Destination Selector */}
      <div className="md:col-span-5 relative flex items-center bg-gray-50/80 rounded-xl px-3.5 py-2.5 border border-gray-200 focus-within:border-teal">
        <MapPin className="w-5 h-5 text-coral mr-2.5 rtl:mr-0 rtl:ml-2.5 flex-shrink-0" />
        <div className="w-full">
          <label className="block text-[10px] uppercase font-bold text-gray-400 leading-none">
            {t('searchDestination')}
          </label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-dark focus:outline-none cursor-pointer mt-1"
          >
            <option value="all">{t('allDestinations')}</option>
            <option value="United Kingdom">United Kingdom (UK)</option>
            <option value="France">Schengen (France, Germany, Italy, Spain)</option>
            <option value="United States">United States (USA)</option>
            <option value="Canada">Canada</option>
            <option value="Japan">Japan</option>
            <option value="Australia">Australia</option>
            <option value="Turkey">Turkey</option>
            <option value="Saudi Arabia">Saudi Arabia (Umrah / Transit)</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full h-full min-h-[50px] rounded-xl bg-coral hover:bg-coral-600 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 rtl:space-x-reverse"
        >
          <Search className="w-4 h-4" />
          <span className="hidden sm:inline md:hidden lg:inline">{t('searchAction')}</span>
          <span className="sm:hidden md:inline lg:hidden">Search</span>
        </button>
      </div>
    </form>
  );
}
