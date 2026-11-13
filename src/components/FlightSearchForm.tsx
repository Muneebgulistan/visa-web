'use client';

import React, { useState } from 'react';
import { PlaneTakeoff, PlaneLanding, Calendar, Users, Send, CheckCircle2, Loader2 } from 'lucide-react';

export default function FlightSearchForm() {
  const [from, setFrom] = useState('RUH - King Khalid Intl, Riyadh');
  const [to, setTo] = useState('LHR - London Heathrow, UK');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [tripType, setTripType] = useState<'roundTrip' | 'oneWay'>('roundTrip');
  const [cabinClass, setCabinClass] = useState('economy');
  const [passengers, setPassengers] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const flightNotes = `Flight Booking Request: ${tripType.toUpperCase()} from ${from} to ${to}. Dep: ${departureDate}, Ret: ${returnDate || 'N/A'}. Class: ${cabinClass}, Passengers: ${passengers}.`;

      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          serviceType: 'Flight Itinerary & PNR Reservation',
          destination: to,
          travelDate: departureDate,
          message: flightNotes,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to request quote.');
      }

      setReference(data.reference);
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Error sending request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-[14px] shadow-xl border border-gray-100 p-6 sm:p-8">
      {submitted ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-dark">
            Flight Itinerary Request Confirmed!
          </h3>
          <p className="text-gray-600 text-sm max-w-lg mx-auto">
            Thank you, <strong>{name}</strong>. Your flight itinerary request for{' '}
            <strong>{from}</strong> to <strong>{to}</strong> has been logged with reference{' '}
            <span className="font-mono font-bold text-teal">{reference}</span>.
          </p>
          <p className="text-xs text-gray-500">
            Our Riyadh flight ticketing specialist will verify active airline PNR options and send your quote to{' '}
            <strong>{email}</strong> and WhatsApp <strong>{phone}</strong> within 2 hours.
          </p>
          <div className="pt-4">
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setName('');
              }}
              className="px-6 py-2.5 rounded-[14px] bg-teal text-white font-semibold text-sm hover:bg-teal-800 transition-colors"
            >
              Request Another Flight Quote
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Trip Type radio buttons */}
          <div className="flex items-center space-x-6 rtl:space-x-reverse pb-2 border-b border-gray-100">
            <label className="flex items-center space-x-2 rtl:space-x-reverse cursor-pointer text-sm font-semibold text-dark">
              <input
                type="radio"
                name="tripType"
                checked={tripType === 'roundTrip'}
                onChange={() => setTripType('roundTrip')}
                className="text-teal focus:ring-teal"
              />
              <span>Round Trip</span>
            </label>
            <label className="flex items-center space-x-2 rtl:space-x-reverse cursor-pointer text-sm font-semibold text-dark">
              <input
                type="radio"
                name="tripType"
                checked={tripType === 'oneWay'}
                onChange={() => setTripType('oneWay')}
                className="text-teal focus:ring-teal"
              />
              <span>One Way</span>
            </label>
          </div>

          {/* Cities & Dates Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Origin */}
            <div>
              <label className="block text-xs font-bold uppercase text-gray-600 mb-1 flex items-center">
                <PlaneTakeoff className="w-3.5 h-3.5 text-teal mr-1 rtl:mr-0 rtl:ml-1" />
                From (Origin)
              </label>
              <input
                type="text"
                required
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="Riyadh (RUH), Jeddah (JED)..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal text-sm text-dark font-medium"
              />
            </div>

            {/* Destination */}
            <div>
              <label className="block text-xs font-bold uppercase text-gray-600 mb-1 flex items-center">
                <PlaneLanding className="w-3.5 h-3.5 text-coral mr-1 rtl:mr-0 rtl:ml-1" />
                To (Destination)
              </label>
              <input
                type="text"
                required
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="London (LHR), Paris (CDG)..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal text-sm text-dark font-medium"
              />
            </div>

            {/* Departure Date */}
            <div>
              <label className="block text-xs font-bold uppercase text-gray-600 mb-1 flex items-center">
                <Calendar className="w-3.5 h-3.5 text-teal mr-1 rtl:mr-0 rtl:ml-1" />
                Departure Date
              </label>
              <input
                type="date"
                required
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal text-sm text-dark"
              />
            </div>

            {/* Return Date */}
            <div>
              <label className="block text-xs font-bold uppercase text-gray-600 mb-1 flex items-center">
                <Calendar className="w-3.5 h-3.5 text-teal mr-1 rtl:mr-0 rtl:ml-1" />
                Return Date {tripType === 'oneWay' && '(Optional)'}
              </label>
              <input
                type="date"
                disabled={tripType === 'oneWay'}
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal text-sm text-dark disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          {/* Cabin Class & Passengers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                Cabin Class
              </label>
              <select
                value={cabinClass}
                onChange={(e) => setCabinClass(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal text-sm text-dark"
              >
                <option value="economy">Economy Class</option>
                <option value="premiumEconomy">Premium Economy</option>
                <option value="business">Business Class</option>
                <option value="first">First Class</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-gray-600 mb-1 flex items-center">
                <Users className="w-3.5 h-3.5 text-teal mr-1 rtl:mr-0 rtl:ml-1" />
                Passengers (Adults & Children)
              </label>
              <input
                type="number"
                min="1"
                max="20"
                value={passengers}
                onChange={(e) => setPassengers(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal text-sm text-dark"
              />
            </div>
          </div>

          {/* Contact Details for Quote Delivery */}
          <div className="p-4 bg-mint rounded-xl border border-teal-100 space-y-3">
            <span className="text-xs font-bold text-teal-900 block uppercase tracking-wider">
              Where should we send your official PNR quote?
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name *"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-teal"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address *"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-teal"
              />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="WhatsApp Phone (+966...) *"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-teal"
              />
            </div>
          </div>

          {error && (
            <p className="text-xs text-red-600 bg-red-50 p-2.5 rounded-lg border border-red-200">
              {error}
            </p>
          )}

          {/* Action button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-6 rounded-[14px] bg-coral hover:bg-coral-600 text-white font-bold text-base transition-all shadow-md hover:shadow-lg disabled:opacity-70 flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Preparing Airline Itinerary Options...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Request Verifiable Flight Itinerary Quote</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
