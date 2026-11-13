'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle2, AlertCircle, Loader2, CreditCard, ArrowUpRight } from 'lucide-react';
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
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-card-light bento-card rounded-3xl shadow-float border border-white/60 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-card-dark text-white p-5 sm:p-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <span className="tag-coral text-[10px] py-0.5 px-2 mb-1">
              {defaultCategory}
            </span>
            <h3 className="text-base sm:text-lg font-bold mt-1 text-white">{serviceTitle}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
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
                  className="text-xs text-dark font-semibold hover:underline"
                >
                  ← Back to Enquiry Details
                </button>
                <span className="text-xs text-dark-200">Ref: {reference || 'New'}</span>
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
              <div className="w-14 h-14 bg-dark text-white rounded-full flex items-center justify-center mx-auto shadow-soft">
                <CheckCircle2 className="w-8 h-8 text-luxury-highlight" />
              </div>
              <div>
                <h4 className="text-xl font-normal text-dark">
                  <span className="font-light italic">Enquiry</span> Successfully Logged
                </h4>
                <p className="text-xs sm:text-sm text-dark-200 mt-2 max-w-md mx-auto">
                  Thank you, <strong>{name}</strong>. Your dossier request for{' '}
                  <strong>{serviceTitle}</strong> has been logged under reference{' '}
                  <span className="font-mono font-bold text-dark bg-white/80 px-2 py-0.5 rounded-pill border border-dark/10">
                    {reference}
                  </span>.
                </p>
                <p className="text-xs text-dark-200 mt-1">
                  Our Riyadh office will contact you at <strong>{phone}</strong> promptly.
                </p>
              </div>

              {price && (
                <div className="pt-4 border-t border-dark/10">
                  <p className="text-xs sm:text-sm text-dark-200 mb-3">
                    Lock in your consular file preparation appointment:
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowPayment(true)}
                    className="btn-pill-primary py-2.5 px-5 text-xs gap-2 shadow-soft"
                  >
                    <CreditCard className="w-4 h-4 text-luxury-highlight" />
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
                  className="px-5 py-2 rounded-pill bg-white/80 text-dark text-xs font-medium hover:bg-white transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {price && (
                <div className="bg-white/80 p-3.5 rounded-2xl border border-white/60 flex items-center justify-between">
                  <span className="text-xs text-dark font-medium">
                    Consultation &amp; Processing Fee:
                  </span>
                  <span className="text-base font-bold text-dark">
                    {price} {currency}
                  </span>
                </div>
              )}

              {error && (
                <div className="p-3 bg-red-100 border border-red-200 text-red-900 rounded-2xl text-xs flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 text-luxury-badge" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-dark-200 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Fahad Al-Otaibi"
                    className="w-full px-4 py-2.5 rounded-pill bg-white text-xs text-dark border border-white/60 focus:outline-none focus:ring-1 focus:ring-dark"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-dark-200 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+966 5X XXX XXXX"
                    className="w-full px-4 py-2.5 rounded-pill bg-white text-xs text-dark border border-white/60 focus:outline-none focus:ring-1 focus:ring-dark"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-dark-200 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-pill bg-white text-xs text-dark border border-white/60 focus:outline-none focus:ring-1 focus:ring-dark"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-dark-200 mb-1">
                    Estimated Travel Date
                  </label>
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-pill bg-white text-xs text-dark border border-white/60 focus:outline-none focus:ring-1 focus:ring-dark"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-dark-200 mb-1">
                  Message / Notes (Nationality, visa type, specific requests)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="State your nationality, number of travelers, or specific deadlines..."
                  className="w-full px-4 py-2.5 rounded-2xl bg-white text-xs text-dark border border-white/60 focus:outline-none focus:ring-1 focus:ring-dark resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-pill-primary flex-1 py-3 text-xs gap-1.5 shadow-soft disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Free Enquiry</span>
                      <ArrowUpRight className="w-4 h-4 text-luxury-highlight" />
                    </>
                  )}
                </button>
                {price && (
                  <button
                    type="button"
                    onClick={() => setShowPayment(true)}
                    className="btn-pill-primary py-3 px-5 text-xs gap-1.5 bg-white text-dark hover:bg-white/90 border border-white/60 shadow-soft"
                  >
                    <CreditCard className="w-4 h-4 text-dark" />
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
