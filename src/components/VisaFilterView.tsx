'use client';

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { visaList } from '@/data/visas';
import VisaCard from '@/components/VisaCard';
import { Search, Filter } from 'lucide-react';
import { VisaCategory } from '@/lib/types';

export default function VisaFilterView() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get('type') || 'all';
  const initialCountry = searchParams.get('country') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialType);
  const [searchQuery, setSearchQuery] = useState<string>(initialCountry);

  const filteredVisas = useMemo(() => {
    return visaList.filter((item) => {
      const matchCategory =
        selectedCategory === 'all' || item.type === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.country.toLowerCase().includes(q) ||
        item.title.toLowerCase().includes(q) ||
        item.requirements.some((r) => r.toLowerCase().includes(q));

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const categories = [
    { id: 'all', label: 'All Visas' },
    { id: 'tourist', label: 'Tourist' },
    { id: 'business', label: 'Business' },
    { id: 'student', label: 'Student' },
    { id: 'transit', label: 'Transit & Umrah' },
  ];

  return (
    <div className="space-y-8">
      {/* Controls Bar */}
      <div className="bg-white p-4 sm:p-6 rounded-[14px] border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Tabs */}
        <div className="flex items-center space-x-2 rtl:space-x-reverse overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          <Filter className="w-4 h-4 text-teal mr-1 flex-shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-teal text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search country, visa type..."
            className="w-full pl-9 rtl:pl-3 rtl:pr-9 pr-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal text-xs text-dark"
          />
        </div>
      </div>

      {/* Visas Grid */}
      {filteredVisas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVisas.map((visa) => (
            <VisaCard key={visa.id} visa={visa} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-[14px] border border-gray-100 p-8 space-y-3">
          <p className="text-gray-500 text-sm">
            No visas found matching your filter criteria.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-teal text-white text-xs font-semibold rounded-lg hover:bg-teal-800 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
