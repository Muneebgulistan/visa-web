'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle2, AlertCircle, Loader2, CreditCard } from 'lucide-react';
import PaymentSelector from './PaymentSelector';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
  defaultCategory?: string;
  defaultDestination?: string;
  price?: number;
  currency?: string;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  serviceTitle,
  defaultCategory = 'Visa Application',
  defaultDestination = '',
  price,
  currency = 'SAR',
}: EnquiryModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [showPayment, setShowPayment] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          serviceType: serviceTitle,
          destination: defaultDestination,
          travelDate,
          message,
          amount: price,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit enquiry.');
      }

      setReference(data.reference);
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-[14px] shadow-2xl border border-gray-100 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-teal text-white p-5 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-teal-100 uppercase tracking-wider block">
              {defaultCategory}
            </span>
            <h3 className="text-lg font-bold mt-0.5">{serviceTitle}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-teal-100 hover:text-white p-1 rounded-lg hover:bg-teal-800/50 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {showPayment && price ? (
            <div>
              <div className="mb-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setShowPayment(false)}
                  className="text-xs text-teal font-semibold hover:underline"
                >
                  ← Back to Enquiry Details
                </button>
                <span className="text-xs text-gray-500">Ref: {reference || 'New'}</span>
              </div>
              <PaymentSelector
                amount={price}
                currency={currency}
                itemTitle={serviceTitle}
                customerName={name}
                customerEmail={email}
                customerPhone={phone}
              />
            </div>
          ) : submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-dark">Enquiry Received!</h4>
                <p className="text-sm text-gray-600 mt-2 max-w-md mx-auto">
                  Thank you, <strong>{name}</strong>. Your request for{' '}
                  <strong>{serviceTitle}</strong> has been assigned reference{' '}
                  <span className="font-mono font-semibold text-teal">{reference}</span>.
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Our Riyadh office will contact you at <strong>{phone}</strong> shortly.
                </p>
              </div>

              {price && (
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-700 mb-3">
                    Would you like to lock in your file consultation fee now?
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowPayment(true)}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-[14px] bg-coral hover:bg-coral-600 text-white font-semibold text-sm transition-colors shadow-sm"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>
                      Pay {price} {currency} via Gateway Selector
                    </span>
                  </button>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-dark font-medium rounded-lg text-sm transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {price && (
                <div className="bg-mint p-3.5 rounded-xl border border-teal-100 flex items-center justify-between">
                  <span className="text-xs text-teal-900 font-medium">
                    Consultation & Processing Fee:
                  </span>
                  <span className="text-base font-bold text-teal">
                    {price} {currency}
                  </span>
                </div>
              )}

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Fahad Al-Otaibi"
                    className="w-full px-3.5 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal text-sm text-dark"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+966 5X XXX XXXX"
                    className="w-full px-3.5 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal text-sm text-dark"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal text-sm text-dark"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Estimated Travel Date
                  </label>
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal text-sm text-dark"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Message / Notes (Nationality, visa type, specific requests)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Please state your nationality, number of travelers, or any specific requirements..."
                  className="w-full px-3.5 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal text-sm text-dark"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3 px-5 rounded-[14px] bg-teal hover:bg-teal-800 text-white font-semibold text-sm transition-colors flex items-center justify-center space-x-2 disabled:opacity-70 shadow-sm"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Free Enquiry</span>
                    </>
                  )}
                </button>
                {price && (
                  <button
                    type="button"
                    onClick={() => setShowPayment(true)}
                    className="py-3 px-5 rounded-[14px] bg-coral hover:bg-coral-600 text-white font-semibold text-sm transition-colors flex items-center justify-center space-x-2 shadow-sm"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Pay Fee Now</span>
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
