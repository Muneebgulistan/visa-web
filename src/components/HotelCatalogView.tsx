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
    <div className="space-y-8">
      {/* Top Filter & Global Date Picker Bar */}
      <div className="bg-white p-5 rounded-[14px] border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        {/* City Filter Pills */}
        <div className="flex items-center space-x-2 rtl:space-x-reverse overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          <Building className="w-4 h-4 text-teal mr-1 flex-shrink-0" />
          {cities.map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => setSelectedCity(city)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCity === city
                  ? 'bg-teal text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {city === 'all' ? 'All Cities' : city}
            </button>
          ))}
        </div>

        {/* Global Travel Dates */}
        <div className="flex items-center space-x-3 text-xs w-full md:w-auto justify-end">
          <div className="flex items-center space-x-1">
            <span className="text-gray-500 font-medium">Check-In:</span>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="p-1.5 border border-gray-200 rounded-lg text-xs text-dark focus:outline-none focus:ring-1 focus:ring-teal"
            />
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-gray-500 font-medium">Check-Out:</span>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="p-1.5 border border-gray-200 rounded-lg text-xs text-dark focus:outline-none focus:ring-1 focus:ring-teal"
            />
          </div>
        </div>
      </div>

      {/* Hotels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
