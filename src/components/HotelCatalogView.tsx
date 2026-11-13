'use client';

import React, { useState, useMemo } from 'react';
import { hotelList } from '@/data/hotels';
import HotelCard from '@/components/HotelCard';
import { MapPin, Calendar, Building } from 'lucide-react';

export default function HotelCatalogView() {
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const cities = ['all', 'Riyadh', 'Makkah', 'Madinah', 'London', 'Paris', 'Dubai'];

  const filteredHotels = useMemo(() => {
    if (selectedCity === 'all') return hotelList;
    return hotelList.filter((h) => h.city.toLowerCase() === selectedCity.toLowerCase());
  }, [selectedCity]);

  return (
    <div className="space-y-6">
      {/* Top Filter & Global Date Picker Bar: Bento Bar */}
      <div className="bg-card-light bento-card p-4 border border-white/50 shadow-soft flex flex-col md:flex-row items-center justify-between gap-3">
        {/* City Filter Pills */}
        <div className="flex items-center space-x-1.5 rtl:space-x-reverse overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
          <Building className="w-3.5 h-3.5 text-luxury-accent mr-1 flex-shrink-0" />
          {cities.map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => setSelectedCity(city)}
              className={`px-3.5 py-1.5 rounded-pill text-xs font-medium whitespace-nowrap transition-all ${
                selectedCity === city
                  ? 'bg-dark text-white font-semibold shadow-soft'
                  : 'bg-white/70 text-dark hover:bg-white'
              }`}
            >
              {city === 'all' ? 'All Cities' : city}
            </button>
          ))}
        </div>

        {/* Global Travel Dates */}
        <div className="flex items-center space-x-2 text-xs w-full md:w-auto justify-end">
          <div className="flex items-center space-x-1 bg-white/70 px-2.5 py-1 rounded-pill border border-white/60">
            <span className="text-dark-200 text-[10px] font-medium">In:</span>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="bg-transparent text-xs text-dark focus:outline-none cursor-pointer"
            />
          </div>
          <div className="flex items-center space-x-1 bg-white/70 px-2.5 py-1 rounded-pill border border-white/60">
            <span className="text-dark-200 text-[10px] font-medium">Out:</span>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="bg-transparent text-xs text-dark focus:outline-none cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Hotels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredHotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
            checkInDate={checkIn}
            checkOutDate={checkOut}
          />
        ))}
      </div>
    </div>
  );
}
