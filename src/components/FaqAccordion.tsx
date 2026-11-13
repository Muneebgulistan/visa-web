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
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={item.id}
            className={`border rounded-[14px] transition-all overflow-hidden ${
              isOpen
                ? 'border-teal bg-teal-50/30 shadow-sm ring-1 ring-teal/20'
                : 'border-gray-200 bg-white hover:border-teal/40'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="w-full p-5 text-left rtl:text-right flex items-center justify-between space-x-4 rtl:space-x-reverse focus:outline-none focus:ring-2 focus:ring-teal"
            >
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <HelpCircle
                  className={`w-5 h-5 flex-shrink-0 ${
                    isOpen ? 'text-teal' : 'text-gray-400'
                  }`}
                />
                <span className="font-bold text-dark text-base sm:text-lg">
                  {item.question}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-teal flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-sm text-gray-700 leading-relaxed border-t border-teal-100/50">
                <p>{item.answer}</p>
                {item.category && (
                  <span className="inline-block mt-3 text-[11px] font-semibold text-teal-800 bg-teal-100/80 px-2.5 py-0.5 rounded-full">
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
