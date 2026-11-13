'use client';

import React, { useState } from 'react';
import { HotelItem } from '@/lib/types';
import { Star, MapPin, Calendar, Check, ArrowUpRight } from 'lucide-react';
import EnquiryModal from './EnquiryModal';

interface HotelCardProps {
  hotel: HotelItem;
  checkInDate?: string;
  checkOutDate?: string;
}

export default function HotelCard({
  hotel,
  checkInDate = '',
  checkOutDate = '',
}: HotelCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [inDate, setInDate] = useState(checkInDate);
  const [outDate, setOutDate] = useState(checkOutDate);

  return (
    <>
      <div className="bg-card-light bento-card border border-white/50 overflow-hidden flex flex-col justify-between group shadow-soft">
        <div>
          {/* Hotel Image & Location */}
          <div className="relative h-52 w-full overflow-hidden bg-white/20 p-2">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-2.5 left-2.5 glass-panel-dark text-white text-[11px] px-3 py-1 rounded-pill flex items-center space-x-1.5 rtl:space-x-reverse">
                <MapPin className="w-3 h-3 text-luxury-highlight" />
                <span>
                  {hotel.city}, {hotel.country}
                </span>
              </div>
              <div className="absolute top-2.5 right-2.5 bg-dark text-white text-[11px] font-bold px-2.5 py-1 rounded-pill flex items-center space-x-1 border border-white/20 shadow-soft">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span>{hotel.userRating}</span>
              </div>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-base sm:text-lg font-bold text-dark">
              {hotel.name}
            </h3>
            <p className="text-xs text-dark-200 mt-1 line-clamp-2">
              {hotel.locationDesc}
            </p>

            {/* Amenities */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {hotel.amenities.map((amenity, i) => (
                <span
                  key={i}
                  className="inline-flex items-center text-[10px] bg-white/80 text-dark font-medium px-2.5 py-0.5 rounded-pill border border-white/60"
                >
                  <Check className="w-2.5 h-2.5 mr-1 rtl:mr-0 rtl:ml-1 text-luxury-accent" />
                  {amenity}
                </span>
              ))}
            </div>

            {/* Date Pickers */}
            <div className="mt-4 pt-4 border-t border-dark/10 grid grid-cols-2 gap-2 text-xs">
              <div>
                <label className="block text-[10px] font-medium text-dark-200 mb-1 flex items-center">
                  <Calendar className="w-3 h-3 mr-1 text-luxury-accent" />
                  Check-in
                </label>
                <input
                  type="date"
                  value={inDate}
                  onChange={(e) => setInDate(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-pill bg-white text-xs text-dark border border-white/60 focus:outline-none focus:ring-1 focus:ring-dark"
                />
              </div>
              <div>
                <label className="block text-[10px] font-medium text-dark-200 mb-1 flex items-center">
                  <Calendar className="w-3 h-3 mr-1 text-luxury-accent" />
                  Check-out
                </label>
                <input
                  type="date"
                  value={outDate}
                  onChange={(e) => setOutDate(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-pill bg-white text-xs text-dark border border-white/60 focus:outline-none focus:ring-1 focus:ring-dark"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Pricing & Footer Button */}
        <div className="p-6 pt-0 mt-2">
          <div className="p-4 bg-white/80 rounded-2xl border border-white/60 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-dark-200 block">Nightly Rate</span>
              <span className="text-lg font-bold text-dark">
                {hotel.pricePerNight} <span className="text-xs font-normal text-dark-200">{hotel.currency}</span>
              </span>
              <span className="text-[10px] text-dark-200 block">per night</span>
            </div>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="btn-pill-primary py-2 px-4 text-xs gap-1.5 shadow-soft"
            >
              <span>Voucher</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-luxury-highlight" />
            </button>
          </div>
        </div>
      </div>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceTitle={`Hotel Voucher: ${hotel.name}`}
        defaultCategory="Embassy Hotel Voucher"
        defaultDestination={`${hotel.city}, ${hotel.country}`}
        price={hotel.pricePerNight}
        currency={hotel.currency}
      />
    </>
  );
}
