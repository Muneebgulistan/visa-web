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
  ArrowUpRight,
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
      // Dispatches to /api/enquiry which triggers Web3Forms, Resend, or SMTP
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
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
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
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      {/* Page Header */}
      <div className="bg-card-light bento-card p-8 sm:p-12 border border-white/50 text-center max-w-4xl mx-auto space-y-3">
        <span className="tag-coral text-xs mb-1">Direct Communication</span>
        <h1 className="text-3xl sm:text-5xl font-normal text-dark tracking-tight">
          <span className="font-light italic">Advisory</span> Desk &amp; Consultation
        </h1>
        <p className="text-xs sm:text-sm text-dark-200 leading-relaxed max-w-xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        {/* Left Side: Contact Cards & Business Info (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Main Info Card */}
          <div className="bg-card-light bento-card border border-white/50 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-dark/10 pb-3">
              <h2 className="text-lg font-bold text-dark">
                SK Visa Experts Office
              </h2>
              <span className="tag-coral text-[10px] py-0.5 px-2">Riyadh</span>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              <div className="w-10 h-10 rounded-[20px] bg-white text-dark flex items-center justify-center flex-shrink-0 shadow-subtle">
                <MapPin className="w-4 h-4 text-luxury-highlight" />
              </div>
              <div>
                <span className="text-[11px] font-medium text-dark-200 block">
                  {t('officeAddress')}
                </span>
                <p className="text-xs sm:text-sm font-semibold text-dark mt-0.5 leading-snug">
                  {tCommon('address')}
                </p>
                <span className="text-[11px] text-dark-200 mt-0.5 block">
                  Umm Al Hamam Al Sharqi, Riyadh 12321
                </span>
              </div>
            </div>

            {/* Phone & Calls */}
            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              <div className="w-10 h-10 rounded-[20px] bg-white text-dark flex items-center justify-center flex-shrink-0 shadow-subtle">
                <Phone className="w-4 h-4 text-luxury-accent" />
              </div>
              <div>
                <span className="text-[11px] font-medium text-dark-200 block">
                  Direct Phone Line
                </span>
                <a
                  href="tel:+966599326936"
                  className="text-sm sm:text-base font-bold text-dark hover:underline mt-0.5 block"
                  dir="ltr"
                >
                  +966 59 932 6936
                </a>
                <span className="text-[11px] text-dark-200 block">
                  Immediate consular intake &amp; case dispatch
                </span>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              <div className="w-10 h-10 rounded-[20px] bg-dark text-white flex items-center justify-center flex-shrink-0 shadow-subtle">
                <MessageCircle className="w-4 h-4 text-luxury-highlight" />
              </div>
              <div>
                <span className="text-[11px] font-medium text-dark-200 block">
                  Official WhatsApp Desk
                </span>
                <a
                  href="https://wa.me/966599326936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-bold text-dark hover:underline mt-0.5 block"
                  dir="ltr"
                >
                  +966 59 932 6936
                </a>
                <span className="text-[11px] text-dark-200 block">
                  Document dispatch &amp; status reviews
                </span>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              <div className="w-10 h-10 rounded-[20px] bg-white text-dark flex items-center justify-center flex-shrink-0 shadow-subtle">
                <Clock className="w-4 h-4 text-luxury-accent" />
              </div>
              <div>
                <span className="text-[11px] font-medium text-dark-200 block">
                  {t('openingHours')}
                </span>
                <p className="text-xs sm:text-sm font-semibold text-dark mt-0.5">
                  Opens 8:00 AM Saturday
                </p>
                <p className="text-[11px] text-dark-200 mt-0.5">
                  Remaining days: to be confirmed (appointments via WhatsApp)
                </p>
              </div>
            </div>
          </div>

          {/* Embedded Google Map: Bento Dark Card */}
          <div className="bg-card-dark text-white bento-card border border-white/10 overflow-hidden shadow-soft">
            <div className="p-4 border-b border-white/10 flex items-center justify-between text-xs text-white/70">
              <span className="font-medium flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-luxury-highlight" />
                <span>Google Maps Location</span>
              </span>
              <span className="text-luxury-accent font-mono text-[11px]">Umm Al Hamam St</span>
            </div>
            <div className="h-60 w-full">
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

        {/* Right Side: Online Enquiry Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-card-light bento-card border border-white/50 p-6 sm:p-10 shadow-soft">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 bg-dark text-white rounded-full flex items-center justify-center mx-auto shadow-soft">
                  <CheckCircle2 className="w-8 h-8 text-luxury-highlight" />
                </div>
                <h3 className="text-2xl font-normal text-dark">
                  <span className="font-light italic">Request</span> Successfully Logged
                </h3>
                <p className="text-xs sm:text-sm text-dark-200 max-w-md mx-auto">
                  Your reference ID is{' '}
                  <span className="font-mono font-bold text-dark text-base bg-white/80 px-2 py-0.5 rounded-pill border border-dark/10">
                    {reference}
                  </span>
                </p>
                <p className="text-xs text-dark-200">
                  Dispatched via Web3Forms protocol. A senior consular advisor from our Riyadh office will call you at <strong>{phone}</strong>.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFullName('');
                      setMessage('');
                    }}
                    className="btn-pill-primary py-2.5 px-6 text-xs gap-1.5"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h2 className="text-xl font-normal text-dark">
                    <span className="font-light italic">Consultation</span> Intake Form
                  </h2>
                  <p className="text-xs text-dark-200 mt-0.5">
                    {t('formSubtitle')}
                  </p>
                </div>

                {error && (
                  <div className="p-3 bg-red-100 border border-red-200 text-red-900 rounded-2xl text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 text-luxury-badge" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-dark-200 mb-1">
                      {t('fullName')} *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Abdullah Al-Otaibi"
                      className="w-full px-4 py-2.5 rounded-pill bg-white text-xs text-dark border border-white/60 focus:outline-none focus:ring-1 focus:ring-dark"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-dark-200 mb-1">
                      {t('email')} *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="client@example.com"
                      className="w-full px-4 py-2.5 rounded-pill bg-white text-xs text-dark border border-white/60 focus:outline-none focus:ring-1 focus:ring-dark"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-dark-200 mb-1">
                      {t('phoneNumber')} *
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

                  <div>
                    <label className="block text-[11px] font-medium text-dark-200 mb-1">
                      {t('serviceInterest')}
                    </label>
                    <select
                      value={serviceInterest}
                      onChange={(e) => setServiceInterest(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-pill bg-white text-xs text-dark border border-white/60 focus:outline-none focus:ring-1 focus:ring-dark cursor-pointer"
                    >
                      <option value="Complete Visa File Preparation">
                        Complete Visa File Preparation
                      </option>
                      <option value="Document Review & Audit">
                        Document Review &amp; Audit
                      </option>
                      <option value="Flight & Hotel Itinerary Vouchers">
                        Flight &amp; Hotel Itinerary Vouchers
                      </option>
                      <option value="Umrah Travel Packages">
                        Umrah Travel Packages
                      </option>
                      <option value="VFS / TLS Biometrics Assistance">
                        VFS / TLS Biometrics Assistance
                      </option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-dark-200 mb-1">
                      {t('destinationCountry')}
                    </label>
                    <input
                      type="text"
                      value={destinationCountry}
                      onChange={(e) => setDestinationCountry(e.target.value)}
                      placeholder="e.g. United Kingdom, France, USA"
                      className="w-full px-4 py-2.5 rounded-pill bg-white text-xs text-dark border border-white/60 focus:outline-none focus:ring-1 focus:ring-dark"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-dark-200 mb-1">
                      {t('travelDate')}
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
                    {t('message')}
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details on your nationality, Iqama residency status, or target deadlines..."
                    className="w-full px-4 py-3 rounded-2xl bg-white text-xs text-dark border border-white/60 focus:outline-none focus:ring-1 focus:ring-dark resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-pill-primary w-full py-3.5 text-sm gap-2 shadow-soft disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{tCommon('submitting')}</span>
                    </>
                  ) : (
                    <>
                      <span>{t('sendEnquiry')}</span>
                      <ArrowUpRight className="w-4 h-4 text-luxury-highlight" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center space-x-2 text-[11px] text-dark-200 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-luxury-accent" />
                  <span>Confidentiality guaranteed under Saudi PDPL regulations.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
