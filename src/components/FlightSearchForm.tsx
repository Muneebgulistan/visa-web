'use client';

import React, { useState } from 'react';
import { PlaneTakeoff, PlaneLanding, Calendar, Users, Send, CheckCircle2, Loader2, ArrowUpRight } from 'lucide-react';

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
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
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
    <div className="bg-card-light bento-card border border-white/50 p-6 sm:p-8 shadow-soft">
      {submitted ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-14 h-14 bg-dark text-white rounded-full flex items-center justify-center mx-auto shadow-soft">
            <CheckCircle2 className="w-8 h-8 text-luxury-highlight" />
          </div>
          <h3 className="text-2xl font-normal text-dark">
            <span className="font-light italic">Flight Itinerary</span> Request Confirmed
          </h3>
          <p className="text-xs sm:text-sm text-dark-200 max-w-lg mx-auto">
            Thank you, <strong>{name}</strong>. Your provisional flight dossier from{' '}
            <strong>{from}</strong> to <strong>{to}</strong> has been assigned reference{' '}
            <span className="font-mono font-bold text-dark bg-white/80 px-2 py-0.5 rounded-pill border border-dark/10">
              {reference}
            </span>.
          </p>
          <p className="text-xs text-dark-200">
            Our Riyadh flight logistics specialist will verify active airline PNR options and send your quote to{' '}
            <strong>{email}</strong> and WhatsApp <strong>{phone}</strong> within 2 hours.
          </p>
          <div className="pt-4">
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setName('');
              }}
              className="btn-pill-primary py-2.5 px-6 text-xs gap-1.5"
            >
              Request Another Flight Quote
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Trip Type radio buttons: Pill Style */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse pb-3 border-b border-dark/10">
            <button
              type="button"
              onClick={() => setTripType('roundTrip')}
              className={`px-4 py-1.5 rounded-pill text-xs font-medium transition-all ${
                tripType === 'roundTrip'
                  ? 'bg-dark text-white font-semibold shadow-soft'
                  : 'bg-white/70 text-dark hover:bg-white'
              }`}
            >
              Round Trip
            </button>
            <button
              type="button"
              onClick={() => setTripType('oneWay')}
              className={`px-4 py-1.5 rounded-pill text-xs font-medium transition-all ${
                tripType === 'oneWay'
                  ? 'bg-dark text-white font-semibold shadow-soft'
                  : 'bg-white/70 text-dark hover:bg-white'
              }`}
            >
              One Way
            </button>
          </div>

          {/* Cities & Dates Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Origin */}
            <div>
              <label className="block text-[11px] font-medium text-dark-200 mb-1 flex items-center">
                <PlaneTakeoff className="w-3.5 h-3.5 text-luxury-accent mr-1 rtl:mr-0 rtl:ml-1" />
                From (Origin)
              </label>
              <input
                type="text"
                required
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="Riyadh (RUH)..."
                className="w-full px-4 py-2.5 rounded-pill bg-white text-xs text-dark border border-white/60 focus:outline-none focus:ring-1 focus:ring-dark"
              />
            </div>

            {/* Destination */}
            <div>
              <label className="block text-[11px] font-medium text-dark-200 mb-1 flex items-center">
                <PlaneLanding className="w-3.5 h-3.5 text-luxury-highlight mr-1 rtl:mr-0 rtl:ml-1" />
                To (Destination)
              </label>
              <input
                type="text"
                required
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="London (LHR)..."
                className="w-full px-4 py-2.5 rounded-pill bg-white text-xs text-dark border border-white/60 focus:outline-none focus:ring-1 focus:ring-dark"
              />
            </div>

            {/* Departure Date */}
            <div>
              <label className="block text-[11px] font-medium text-dark-200 mb-1 flex items-center">
                <Calendar className="w-3.5 h-3.5 text-luxury-accent mr-1 rtl:mr-0 rtl:ml-1" />
                Departure Date
              </label>
              <input
                type="date"
                required
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-pill bg-white text-xs text-dark border border-white/60 focus:outline-none focus:ring-1 focus:ring-dark"
              />
            </div>

            {/* Return Date */}
            <div>
              <label className="block text-[11px] font-medium text-dark-200 mb-1 flex items-center">
                <Calendar className="w-3.5 h-3.5 text-luxury-accent mr-1 rtl:mr-0 rtl:ml-1" />
                Return Date {tripType === 'oneWay' && '(Optional)'}
              </label>
              <input
                type="date"
                disabled={tripType === 'oneWay'}
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-pill bg-white text-xs text-dark border border-white/60 focus:outline-none focus:ring-1 focus:ring-dark disabled:bg-white/40 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          {/* Cabin Class & Passengers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-medium text-dark-200 mb-1">
                Cabin Class
              </label>
              <select
                value={cabinClass}
                onChange={(e) => setCabinClass(e.target.value)}
                className="w-full px-4 py-2.5 rounded-pill bg-white text-xs text-dark border border-white/60 focus:outline-none focus:ring-1 focus:ring-dark cursor-pointer"
              >
                <option value="economy">Economy Class</option>
                <option value="premiumEconomy">Premium Economy</option>
                <option value="business">Business Class</option>
                <option value="first">First Class</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-dark-200 mb-1 flex items-center">
                <Users className="w-3.5 h-3.5 text-luxury-accent mr-1 rtl:mr-0 rtl:ml-1" />
                Passengers (Adults &amp; Children)
              </label>
              <input
                type="number"
                min="1"
                max="20"
                value={passengers}
                onChange={(e) => setPassengers(Number(e.target.value))}
                className="w-full px-4 py-2.5 rounded-pill bg-white text-xs text-dark border border-white/60 focus:outline-none focus:ring-1 focus:ring-dark"
              />
            </div>
          </div>

          {/* Contact Details for Quote Delivery */}
          <div className="p-4 sm:p-5 bg-white/80 rounded-2xl border border-white/60 space-y-3">
            <span className="text-[11px] font-semibold text-dark block">
              Where should we send your official PNR quote?
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name *"
                className="w-full px-4 py-2 rounded-pill bg-white text-xs text-dark border border-white/60 focus:outline-none focus:ring-1 focus:ring-dark"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address *"
                className="w-full px-4 py-2 rounded-pill bg-white text-xs text-dark border border-white/60 focus:outline-none focus:ring-1 focus:ring-dark"
              />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="WhatsApp (+966...) *"
                className="w-full px-4 py-2 rounded-pill bg-white text-xs text-dark border border-white/60 focus:outline-none focus:ring-1 focus:ring-dark"
              />
            </div>
          </div>

          {error && (
            <p className="text-xs text-red-700 bg-red-100 p-3 rounded-2xl border border-red-200">
              {error}
            </p>
          )}

          {/* Action button */}
          <button
            type="submit"
            disabled={loading}
            className="btn-pill-primary w-full py-3.5 text-sm gap-2 shadow-soft disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Preparing Airline Itinerary Options...</span>
              </>
            ) : (
              <>
                <span>Request Verifiable Flight Itinerary Quote</span>
                <ArrowUpRight className="w-4 h-4 text-luxury-highlight" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
