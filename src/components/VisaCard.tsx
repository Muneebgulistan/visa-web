'use client';

import React, { useState } from 'react';
import { VisaItem } from '@/lib/types';
import { Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import EnquiryModal from './EnquiryModal';

interface VisaCardProps {
  visa: VisaItem;
}

export default function VisaCard({ visa }: VisaCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="bg-card-light bento-card border border-white/50 p-6 sm:p-7 flex flex-col justify-between relative group">
        {visa.popular && (
          <div className="absolute top-4 right-4 tag-coral text-[10px] shadow-subtle">
            Popular
          </div>
        )}

        <div>
          {/* Header & Country */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
            <span className="text-3xl" role="img" aria-label={visa.country}>
              {visa.flag}
            </span>
            <div>
              <span className="text-[11px] font-medium text-dark-200 block">
                {visa.country}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-dark">
                {visa.title}
              </h3>
            </div>
          </div>

          {/* Pricing & Processing */}
          <div className="my-4 p-4 bg-white/80 rounded-2xl border border-white/60 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-medium text-dark-200 block">Consultation Fee</span>
              <span className="text-xl font-bold text-dark">
                {visa.price} <span className="text-xs font-normal text-dark-200">{visa.currency}</span>
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-medium text-dark-200 flex items-center justify-end space-x-1">
                <Clock className="w-3 h-3 text-luxury-accent" />
                <span>Timeline</span>
              </span>
              <span className="text-xs font-semibold text-dark block mt-0.5">
                {visa.processingTime}
              </span>
            </div>
          </div>

          {/* Key Requirements Checklist */}
          <div className="space-y-2 mb-6">
            <span className="text-[11px] font-semibold text-dark-200 block">
              Document Inclusions:
            </span>
            <ul className="space-y-1.5 text-xs text-dark/80">
              {visa.requirements.slice(0, 4).map((req, idx) => (
                <li key={idx} className="flex items-start space-x-2 rtl:space-x-reverse">
                  <ShieldCheck className="w-3.5 h-3.5 text-luxury-accent flex-shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Button */}
        <div>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="btn-pill-primary w-full py-3 text-xs sm:text-sm gap-2 shadow-soft"
          >
            <span>Start Application</span>
            <ArrowUpRight className="w-4 h-4 text-luxury-highlight" />
          </button>
        </div>
      </div>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceTitle={visa.title}
        defaultCategory="Visa Application File"
        defaultDestination={visa.country}
        price={visa.price}
        currency={visa.currency}
      />
    </>
  );
}
