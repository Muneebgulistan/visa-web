'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Mail,
  ShieldCheck,
} from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('contactPage');
  const tCommon = useTranslations('common');

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceInterest, setServiceInterest] = useState('Complete Visa File Preparation');
  const [destinationCountry, setDestinationCountry] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullName,
          email,
          phone,
          serviceType: serviceInterest,
          destination: destinationCountry,
          travelDate,
          message,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || t('errorMessage'));
      }

      setReference(data.reference);
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || t('errorMessage'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-coral uppercase tracking-widest block">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-dark tracking-tight">
          {t('title')}
        </h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Contact Cards & Business Info */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Info Card */}
          <div className="bg-white rounded-[14px] border border-gray-100 shadow-sm p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold text-dark border-b border-gray-100 pb-3">
              SK Visa Experts Office
            </h2>

            {/* Address */}
            <div className="flex items-start space-x-3.5 rtl:space-x-reverse">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                  {t('officeAddress')}
                </span>
                <p className="text-sm font-semibold text-dark mt-0.5 leading-snug">
                  {tCommon('address')}
                </p>
                <span className="text-xs text-gray-500 mt-1 block">
                  Umm Al Hamam Al Sharqi, Riyadh 12321
                </span>
              </div>
            </div>

            {/* Phone & Calls */}
            <div className="flex items-start space-x-3.5 rtl:space-x-reverse">
              <div className="w-10 h-10 rounded-xl bg-coral-50 text-coral flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                  Direct Phone & Call Line
                </span>
                <a
                  href="tel:+966599326936"
                  className="text-base font-bold text-teal hover:underline mt-0.5 block"
                  dir="ltr"
                >
                  +966 59 932 6936
                </a>
                <span className="text-xs text-gray-500 block">
                  Toll-free assistance & urgent queries
                </span>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start space-x-3.5 rtl:space-x-reverse">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                  Official WhatsApp Hotline
                </span>
                <a
                  href="https://wa.me/966599326936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-emerald-600 hover:underline mt-0.5 block"
                  dir="ltr"
                >
                  +966 59 932 6936
                </a>
                <span className="text-xs text-gray-500 block">
                  Instant document dispatch & status checks
                </span>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start space-x-3.5 rtl:space-x-reverse">
              <div className="w-10 h-10 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                  {t('openingHours')}
                </span>
                <p className="text-sm font-semibold text-dark mt-0.5">
                  Opens 8:00 AM Saturday
                </p>
                <p className="text-xs text-coral-600 font-medium mt-0.5">
                  Other days: to be confirmed (appointments available via WhatsApp)
                </p>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="bg-white rounded-[14px] border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between text-xs text-gray-600">
              <span className="font-semibold flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-coral" />
                <span>Google Maps Location</span>
              </span>
              <span className="text-teal font-medium">Umm Al Hamam St, Riyadh</span>
            </div>
            <div className="h-64 w-full">
              <iframe
                title="SK Visa Experts Location Map"
                src="https://maps.google.com/maps?q=Umm%20Al%20Hamam%20St,%20Umm%20Al%20Hamam%20Al%20Sharqi,%20Riyadh%2012321,%20Saudi%20Arabia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Online Enquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-[14px] border border-gray-100 shadow-md p-6 sm:p-10">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-dark">
                  {t('successMessage')}
                </h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Your reference ID is{' '}
                  <span className="font-mono font-bold text-teal text-base">{reference}</span>.
                </p>
                <p className="text-xs text-gray-500">
                  A senior consultant from our Umm Al Hamam office has received your details and will call you back at <strong>{phone}</strong>.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFullName('');
                      setMessage('');
                    }}
                    className="px-6 py-2.5 rounded-[14px] bg-teal text-white font-semibold text-sm hover:bg-teal-800 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="text-xl font-bold text-dark">{t('formTitle')}</h2>
                  <p className="text-xs text-gray-500 mt-1">{t('formSubtitle')}</p>
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {t('fullName')} *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Abdullah Al-Harbi"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal text-sm text-dark"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {t('phoneNumber')} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+966 5X XXX XXXX"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal text-sm text-dark"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {t('email')} *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="client@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal text-sm text-dark"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {t('serviceInterest')}
                    </label>
                    <select
                      value={serviceInterest}
                      onChange={(e) => setServiceInterest(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal text-sm text-dark"
                    >
                      <option value="Complete Visa File Preparation">
                        Complete Visa File Preparation
                      </option>
                      <option value="Verified Document Review">
                        Verified Document Review
                      </option>
                      <option value="Cover Letter & Travel Itinerary Planning">
                        Cover Letter & Travel Itinerary Planning
                      </option>
                      <option value="Flight & Hotel Reservation Assistance">
                        Flight & Hotel Reservation Assistance
                      </option>
                      <option value="General Visa Application Support & Guidance">
                        General Visa Application Support & Guidance
                      </option>
                      <option value="Umrah & Tour Packages">
                        Umrah & Tour Packages
                      </option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {t('destinationCountry')}
                    </label>
                    <input
                      type="text"
                      value={destinationCountry}
                      onChange={(e) => setDestinationCountry(e.target.value)}
                      placeholder="e.g. UK, France, USA, Japan..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal text-sm text-dark"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {t('travelDate')}
                    </label>
                    <input
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal text-sm text-dark"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {t('message')}
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your nationality, Saudi residency (Iqama) status, or specific visa deadlines..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal text-sm text-dark"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-[14px] bg-coral hover:bg-coral-600 text-white font-bold text-base transition-all shadow-md hover:shadow-lg disabled:opacity-70 flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>{tCommon('submitting')}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t('sendEnquiry')}</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 pt-1">
                  <ShieldCheck className="w-4 h-4 text-teal" />
                  <span>Your information is strictly confidential and protected.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
