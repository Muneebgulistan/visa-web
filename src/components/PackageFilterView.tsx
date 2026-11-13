'use client';

import React, { useState, useMemo } from 'react';
import { packageList } from '@/data/packages';
import PackageCard from '@/components/PackageCard';
import { Filter } from 'lucide-react';

export default function PackageFilterView() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPackages = useMemo(() => {
    if (selectedCategory === 'all') return packageList;
    return packageList.filter((pkg) => pkg.category === selectedCategory);
  }, [selectedCategory]);

  const categories = [
    { id: 'all', label: 'All Packages' },
    { id: 'umrah', label: 'Umrah & Spiritual' },
    { id: 'holiday', label: 'Holiday & Leisure' },
    { id: 'city', label: 'City Breaks' },
  ];

  return (
    <div className="space-y-6">
      {/* Category Tabs: Bento Pill Bar */}
      <div className="bg-card-light bento-card p-3 border border-white/50 shadow-soft flex items-center justify-center space-x-2 rtl:space-x-reverse overflow-x-auto">
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

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPackages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </div>
  );
}
