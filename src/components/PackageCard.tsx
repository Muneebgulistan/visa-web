'use client';

import React, { useState } from 'react';
import { PackageItem } from '@/lib/types';
import { Clock, Star, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import EnquiryModal from './EnquiryModal';

interface PackageCardProps {
  pkg: PackageItem;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-[14px] border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between group">
        <div>
          {/* Package Image & Badges */}
          <div className="relative h-48 w-full overflow-hidden bg-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute top-3 left-3 bg-dark/80 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full font-medium flex items-center space-x-1">
              <MapPin className="w-3 h-3 text-coral" />
              <span>{pkg.destination}</span>
            </div>
            {pkg.featured && (
              <div className="absolute top-3 right-3 bg-coral text-white text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full font-bold shadow">
                Featured
              </div>
            )}
          </div>

          {/* Package Details */}
          <div className="p-6">
            <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-teal" />
                <span>{pkg.duration}</span>
              </span>
              <span className="flex items-center space-x-1 text-amber-500 font-semibold">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>{pkg.rating} Rating</span>
              </span>
            </div>

            <h3 className="text-lg font-bold text-dark group-hover:text-teal transition-colors">
              {pkg.title}
            </h3>

            {/* Inclusions */}
            <div className="mt-4 space-y-2">
              <span className="text-xs font-bold text-gray-700 block uppercase tracking-wider">
                Package Inclusions:
              </span>
              <ul className="space-y-1.5 text-xs text-gray-600">
                {pkg.inclusions.slice(0, 3).map((inc, i) => (
                  <li key={i} className="flex items-start space-x-2 rtl:space-x-reverse">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing & Footer Button */}
        <div className="p-6 pt-0 border-t border-gray-100 bg-gray-50/50 mt-4">
          <div className="flex items-center justify-between py-3">
            <div>
              <span className="text-[11px] text-gray-500 block">Starting From</span>
              <span className="text-xl font-extrabold text-teal">
                {pkg.price} {pkg.currency}
              </span>
              <span className="text-[10px] text-gray-500 block">per person</span>
            </div>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="py-2.5 px-4 rounded-[14px] bg-coral hover:bg-coral-600 text-white font-semibold text-xs transition-colors flex items-center space-x-1.5 rtl:space-x-reverse shadow-sm"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </button>
          </div>
        </div>
      </div>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceTitle={pkg.title}
        defaultCategory="Travel & Tour Package"
        defaultDestination={pkg.destination}
        price={pkg.price}
        currency={pkg.currency}
      />
    </>
  );
}
