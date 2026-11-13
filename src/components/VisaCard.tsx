'use client';

import React, { useState } from 'react';
import { VisaItem } from '@/lib/types';
import { Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import EnquiryModal from './EnquiryModal';

interface VisaCardProps {
  visa: VisaItem;
}

export default function VisaCard({ visa }: VisaCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-[14px] border border-gray-100 shadow-sm hover:shadow-md hover:border-teal/30 transition-all p-6 flex flex-col justify-between relative group">
        {visa.popular && (
          <div className="absolute -top-3 right-4 bg-coral text-white text-[10px] uppercase font-bold tracking-wider py-1 px-2.5 rounded-full shadow-sm">
            Popular
          </div>
        )}

        <div>
          {/* Header & Country */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse mb-3">
            <span className="text-3xl" role="img" aria-label={visa.country}>
              {visa.flag}
            </span>
            <div>
              <span className="text-xs uppercase tracking-wider text-teal font-bold block">
                {visa.country}
              </span>
              <h3 className="text-lg font-bold text-dark group-hover:text-teal transition-colors">
                {visa.title}
              </h3>
            </div>
          </div>

          {/* Pricing & Processing */}
          <div className="my-4 p-3.5 bg-mint rounded-xl border border-teal-50 flex items-center justify-between">
            <div>
              <span className="text-[11px] text-gray-500 block">Consultation Fee</span>
              <span className="text-xl font-extrabold text-teal">
                {visa.price} {visa.currency}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-gray-500 flex items-center justify-end space-x-1">
                <Clock className="w-3 h-3 text-teal" />
                <span>Processing</span>
              </span>
              <span className="text-xs font-semibold text-dark block mt-0.5">
                {visa.processingTime}
              </span>
            </div>
          </div>

          {/* Key Requirements Checklist */}
          <div className="space-y-2 mb-6">
            <span className="text-xs font-bold text-gray-700 block uppercase tracking-wide">
              Document Inclusions:
            </span>
            <ul className="space-y-1.5 text-xs text-gray-600">
              {visa.requirements.slice(0, 4).map((req, idx) => (
                <li key={idx} className="flex items-start space-x-2 rtl:space-x-reverse">
                  <ShieldCheck className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
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
            className="w-full py-3 px-4 rounded-[14px] bg-teal hover:bg-teal-800 text-white font-semibold text-sm transition-all shadow-sm hover:shadow flex items-center justify-center space-x-2 rtl:space-x-reverse"
          >
            <span>Start Application</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
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
