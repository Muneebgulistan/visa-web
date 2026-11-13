'use client';

import React, { useState } from 'react';
import { PackageItem } from '@/lib/types';
import { Clock, Star, MapPin, CheckCircle, ArrowUpRight } from 'lucide-react';
import EnquiryModal from './EnquiryModal';

interface PackageCardProps {
  pkg: PackageItem;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="bg-card-light bento-card border border-white/50 overflow-hidden flex flex-col justify-between group shadow-soft">
        <div>
          {/* Package Image & Floating Glass Badge */}
          <div className="relative h-52 w-full overflow-hidden bg-white/20 p-2">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-2.5 left-2.5 glass-panel-dark text-white text-[11px] px-3 py-1 rounded-pill flex items-center space-x-1.5 rtl:space-x-reverse">
                <MapPin className="w-3 h-3 text-luxury-highlight" />
                <span>{pkg.destination}</span>
              </div>
              {pkg.featured && (
                <div className="absolute top-2.5 right-2.5 tag-coral text-[10px] shadow-subtle">
                  Curated
                </div>
              )}
            </div>
          </div>

          {/* Package Details */}
          <div className="p-6">
            <div className="flex items-center justify-between text-xs text-dark-200 mb-2">
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-luxury-accent" />
                <span>{pkg.duration}</span>
              </span>
              <span className="flex items-center space-x-1 text-dark font-medium">
                <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                <span>{pkg.rating} Rating</span>
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-dark">
              {pkg.title}
            </h3>

            {/* Inclusions */}
            <div className="mt-4 space-y-2">
              <span className="text-[11px] font-semibold text-dark-200 block">
                Itinerary Inclusions:
              </span>
              <ul className="space-y-1.5 text-xs text-dark/80">
                {pkg.inclusions.slice(0, 3).map((inc, i) => (
                  <li key={i} className="flex items-start space-x-2 rtl:space-x-reverse">
                    <CheckCircle className="w-3.5 h-3.5 text-luxury-accent flex-shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing & Footer Button */}
        <div className="p-6 pt-0 mt-2">
          <div className="p-4 bg-white/80 rounded-2xl border border-white/60 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-dark-200 block">Starting From</span>
              <span className="text-lg font-bold text-dark">
                {pkg.price} <span className="text-xs font-normal text-dark-200">{pkg.currency}</span>
              </span>
              <span className="text-[10px] text-dark-200 block">per applicant</span>
            </div>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="btn-pill-primary py-2 px-4 text-xs gap-1.5 shadow-soft"
            >
              <span>Enquire</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-luxury-highlight" />
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
