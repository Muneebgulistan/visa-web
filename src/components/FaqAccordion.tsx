'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  defaultOpenIndex?: number;
}

export default function FaqAccordion({ items, defaultOpenIndex = 0 }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={item.id}
            className={`rounded-2xl transition-all overflow-hidden border ${
              isOpen
                ? 'border-dark/20 bg-white shadow-soft'
                : 'border-white/60 bg-white/70 hover:bg-white'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="w-full p-4 sm:p-5 text-left rtl:text-right flex items-center justify-between space-x-4 rtl:space-x-reverse focus:outline-none"
            >
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="w-7 h-7 rounded-full bg-dark/5 flex items-center justify-center flex-shrink-0 text-dark">
                  <HelpCircle className="w-4 h-4 text-luxury-accent" />
                </span>
                <span className="font-semibold text-dark text-sm sm:text-base">
                  {item.question}
                </span>
              </div>
              <div className={`btn-icon-circle w-8 h-8 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-dark text-white' : 'bg-white'}`}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-dark-200 leading-relaxed border-t border-dark/5">
                <p>{item.answer}</p>
                {item.category && (
                  <span className="inline-block mt-3 text-[10px] font-semibold tag-coral">
                    {item.category}
                  </span>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
