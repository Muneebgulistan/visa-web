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
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse overflow-x-auto pb-2">
        <Filter className="w-4 h-4 text-teal mr-1 flex-shrink-0" />
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
              selectedCategory === cat.id
                ? 'bg-teal text-white shadow-sm'
                : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPackages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </div>
  );
}
