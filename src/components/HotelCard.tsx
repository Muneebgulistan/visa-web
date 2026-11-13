'use client';

import React, { useState } from 'react';
import { HotelItem } from '@/lib/types';
import { Star, MapPin, Calendar, Check, ArrowRight } from 'lucide-react';
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
      <div className="bg-white rounded-[14px] border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between group">
        <div>
          {/* Hotel Image & Location */}
          <div className="relative h-48 w-full overflow-hidden bg-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute top-3 left-3 bg-dark/80 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full font-medium flex items-center space-x-1">
              <MapPin className="w-3 h-3 text-coral" />
              <span>
                {hotel.city}, {hotel.country}
              </span>
            </div>
            <div className="absolute top-3 right-3 bg-amber-400 text-dark text-xs font-bold px-2 py-1 rounded-lg flex items-center space-x-1 shadow">
              <Star className="w-3.5 h-3.5 fill-dark" />
              <span>{hotel.userRating}</span>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-bold text-dark group-hover:text-teal transition-colors">
              {hotel.name}
            </h3>
            <p className="text-xs text-gray-500 mt-1 line-clamp-2">
              {hotel.locationDesc}
            </p>

            {/* Amenities */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {hotel.amenities.map((amenity, i) => (
                <span
                  key={i}
                  className="inline-flex items-center text-[10px] bg-mint text-teal font-medium px-2 py-0.5 rounded-full"
                >
                  <Check className="w-2.5 h-2.5 mr-1 rtl:mr-0 rtl:ml-1" />
                  {amenity}
                </span>
              ))}
            </div>

            {/* Date Pickers */}
            <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-2 text-xs">
              <div>
                <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1 flex items-center">
                  <Calendar className="w-3 h-3 mr-1 text-teal" />
                  Check-in
                </label>
                <input
                  type="date"
                  value={inDate}
                  onChange={(e) => setInDate(e.target.value)}
                  className="w-full p-1.5 border border-gray-200 rounded-lg text-xs text-dark focus:outline-none focus:ring-1 focus:ring-teal"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1 flex items-center">
                  <Calendar className="w-3 h-3 mr-1 text-teal" />
                  Check-out
                </label>
                <input
                  type="date"
                  value={outDate}
                  onChange={(e) => setOutDate(e.target.value)}
                  className="w-full p-1.5 border border-gray-200 rounded-lg text-xs text-dark focus:outline-none focus:ring-1 focus:ring-teal"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Pricing & Booking Request */}
        <div className="p-6 pt-0 border-t border-gray-100 bg-gray-50/50 mt-4">
          <div className="flex items-center justify-between py-3">
            <div>
              <span className="text-[11px] text-gray-500 block">From</span>
              <span className="text-xl font-extrabold text-teal">
                {hotel.pricePerNight} {hotel.currency}
              </span>
              <span className="text-[10px] text-gray-500 block">per night</span>
            </div>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="py-2.5 px-4 rounded-[14px] bg-coral hover:bg-coral-600 text-white font-semibold text-xs transition-colors flex items-center space-x-1.5 rtl:space-x-reverse shadow-sm"
            >
              <span>Book Voucher</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </button>
          </div>
        </div>
      </div>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceTitle={`Hotel Reservation: ${hotel.name}`}
        defaultCategory="Embassy Hotel Voucher"
        defaultDestination={`${hotel.city}, ${hotel.country}`}
        price={hotel.pricePerNight}
        currency={hotel.currency}
      />
    </>
  );
}
