'use client';

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { visaList } from '@/data/visas';
import VisaCard from '@/components/VisaCard';
import { Search, Filter } from 'lucide-react';

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
    <div className="space-y-6">
      {/* Controls Bar: Bento Pill Bar */}
      <div className="bg-card-light bento-card p-3 sm:p-4 border border-white/50 shadow-soft flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Category Tabs */}
        <div className="flex items-center space-x-1.5 rtl:space-x-reverse overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
          <Filter className="w-3.5 h-3.5 text-luxury-accent mr-1 flex-shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-pill text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-dark text-white font-semibold shadow-soft'
                  : 'bg-white/70 text-dark hover:bg-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <Search className="w-3.5 h-3.5 text-dark-200 absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter destination, category..."
            className="w-full pl-9 rtl:pl-3.5 rtl:pr-9 pr-3.5 py-2 rounded-pill bg-white text-xs text-dark border border-white/60 focus:outline-none focus:ring-1 focus:ring-dark"
          />
        </div>
      </div>

      {/* Visas Grid */}
      {filteredVisas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredVisas.map((visa) => (
            <VisaCard key={visa.id} visa={visa} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-card-light bento-card border border-white/50 p-8 space-y-3">
          <p className="text-dark-200 text-xs sm:text-sm">
            No visas found matching your filter criteria.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="btn-pill-primary py-2 px-5 text-xs"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
