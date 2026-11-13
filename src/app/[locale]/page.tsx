import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import HomeSearchBar from '@/components/HomeSearchBar';
import FaqAccordion from '@/components/FaqAccordion';
import {
  FileCheck2,
  FileSearch,
  FileSignature,
  Hotel,
  HelpCircle,
  ShieldCheck,
  Star,
  ArrowUpRight,
  Sparkles,
  PhoneCall,
  Clock,
  Compass,
  MapPin,
  TrendingUp,
  Globe2,
} from 'lucide-react';

export default function HomePage() {
  const tHero = useTranslations('hero');
  const tStats = useTranslations('stats');
  const tServices = useTranslations('services');
  const tHow = useTranslations('howItWorks');
  const tRating = useTranslations('ratingSection');
  const tFaq = useTranslations('faq');
  const tCta = useTranslations('cta');
  const tCommon = useTranslations('common');

  const faqItems = [
    { id: '1', question: tFaq('q1'), answer: tFaq('a1'), category: 'Timeline' },
    { id: '2', question: tFaq('q2'), answer: tFaq('a2'), category: 'Assurance' },
    { id: '3', question: tFaq('q3'), answer: tFaq('a3'), category: 'Itineraries' },
    { id: '4', question: tFaq('q4'), answer: tFaq('a4'), category: 'Payments' },
    { id: '5', question: tFaq('q5'), answer: tFaq('a5'), category: 'Riyadh Office' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-4">
      {/* ========================================================================= */}
      {/* 1. BENTO HERO GRID (12 Columns, 16px Gap)                                 */}
      {/* ========================================================================= */}
      <section className="grid grid-cols-12 gap-4">
        {/* Tile 1: Main Editorial Headline & Search (8 cols on desktop) */}
        <div className="col-span-12 lg:col-span-8 bg-card-light bento-card p-6 sm:p-10 flex flex-col justify-between border border-white/50 relative overflow-hidden">
          <div className="space-y-4 max-w-2xl">
            {/* Coral Highlight Tag */}
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse tag-coral shadow-subtle">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{tHero('badge')}</span>
            </div>

            {/* Headline with Mixed Style: Key words in italic */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-dark tracking-tighter leading-[1.1]">
              <span className="font-light italic">Trusted</span> Advisory for{' '}
              <span className="font-semibold italic">Global Travel</span> &amp; Passports
            </h1>

            <p className="text-sm sm:text-base text-dark-200 leading-relaxed max-w-xl">
              {tHero('subtitle')}
            </p>
          </div>

          {/* Integrated Bento Search Bar */}
          <div className="pt-8">
            <HomeSearchBar />
            <p className="text-xs text-dark-200 mt-3 px-1">
              {tHero('popularSearches')}
            </p>
          </div>
        </div>

        {/* Tile 2: Logo Tile with Blueprint Construction Lines (4 cols on desktop) */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-card-dark text-white bento-card p-8 flex flex-col justify-between relative overflow-hidden border border-white/10 min-h-[280px]">
          {/* Faint construction lines background */}
          <div className="absolute inset-0 blueprint-grid pointer-events-none" />

          {/* Top Tag & Notification */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[11px] font-medium tracking-wider text-white/60 uppercase">
              Consular Protocol
            </span>
            <div className="relative">
              <span className="w-2.5 h-2.5 rounded-full bg-luxury-badge block" />
            </div>
          </div>

          {/* Centered Brand Mark */}
          <div className="relative z-10 py-6 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-[20px] bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-soft mb-3">
              <Compass className="w-8 h-8 text-luxury-accent" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white block">
              SK VISA EXPERTS
            </span>
            <span className="text-xs text-white/60 tracking-widest uppercase mt-1">
              Riyadh Advisory Suite
            </span>
          </div>

          {/* Bottom Card Action */}
          <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10 text-xs text-white/70">
            <span>Umm Al Hamam St, Riyadh</span>
            <Link
              href="/contact"
              className="btn-icon-circle w-8 h-8 bg-white/10 hover:bg-white/20 text-white"
              aria-label="Contact Office"
            >
              <ArrowUpRight className="w-4 h-4 text-luxury-highlight" />
            </Link>
          </div>
        </div>

        {/* Tile 3: Product / Itinerary Visual Preview with Floating Glass Overlay (7 cols) */}
        <div className="col-span-12 lg:col-span-7 bg-card-dark text-white bento-card relative overflow-hidden min-h-[320px] sm:min-h-[360px] flex flex-col justify-between p-6 sm:p-8 border border-white/10">
          {/* Soft background aesthetic image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity scale-105"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />

          {/* Floating Glass Card (Overlay) */}
          <div className="relative z-10 self-start glass-panel-dark px-4 py-3 shadow-soft max-w-xs">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-1">
              <MapPin className="w-3.5 h-3.5 text-luxury-highlight" />
              <span className="text-xs font-semibold text-white">Global Filings</span>
              <span className="tag-coral text-[10px] py-0.5 px-2">Live Status</span>
            </div>
            <p className="text-[11px] text-white/70 leading-snug">
              Direct submission files prepared for UK, Schengen, USA &amp; Canada.
            </p>
          </div>

          {/* Bottom Stat Card tucked on the preview */}
          <div className="relative z-10 flex flex-wrap items-end justify-between gap-4 pt-8">
            <div className="bg-card-light/95 backdrop-blur-md rounded-2xl p-4 text-dark max-w-xs shadow-soft border border-white/50">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-medium text-dark-200">
                  {tStats('approvalRateLabel')}
                </span>
                <TrendingUp className="w-3.5 h-3.5 text-luxury-accent" />
              </div>
              <div className="text-3xl font-bold tracking-tight text-dark">
                {tStats('approvalRate')}
              </div>
            </div>

            <Link
              href="/visas"
              className="btn-pill-primary py-2.5 px-5 text-xs gap-1.5 shadow-soft bg-white text-dark hover:bg-white/90"
            >
              <span>Explore Visa Directory</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-dark" />
            </Link>
          </div>
        </div>

        {/* Tile 4: Data / Map Tile with Dotted Matrix (5 cols) */}
        <div className="col-span-12 lg:col-span-5 bg-card-dark text-white bento-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border border-white/10 min-h-[320px]">
          {/* Subtle dotted matrix pattern */}
          <div className="absolute inset-0 dotted-map-pattern opacity-40 pointer-events-none" />

          {/* Header */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Globe2 className="w-4 h-4 text-luxury-accent" />
              <span className="text-xs font-medium text-white/70">
                Consular Route Map
              </span>
            </div>
            <span className="text-[11px] text-luxury-highlight font-mono">
              24.685° N, 46.665° E
            </span>
          </div>

          {/* Dotted globe center with glowing marker */}
          <div className="relative z-10 py-6 text-center">
            <div className="relative inline-block">
              {/* Center Beacon */}
              <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-luxury-accent/30 flex items-center justify-center animate-pulse">
                  <div className="w-3 h-3 rounded-full bg-luxury-highlight shadow-float" />
                </div>
              </div>
            </div>
            <div className="mt-3">
              <span className="text-sm font-semibold text-white block">
                Riyadh Diplomatic Hub
              </span>
              <span className="text-xs text-white/60">
                Umm Al Hamam Al Sharqi, Riyadh 12321
              </span>
            </div>
          </div>

          {/* Footer note */}
          <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10 text-xs text-white/60">
            <span>Fast-track appointments</span>
            <span className="text-luxury-highlight font-medium">Active</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TRUST STATS BENTO ROW (12 Columns, 4 Tiles)                            */}
      {/* ========================================================================= */}
      <section className="grid grid-cols-12 gap-4">
        {/* Stat 1 */}
        <div className="col-span-6 lg:col-span-3 bg-card-light bento-card p-6 border border-white/50 flex flex-col justify-between">
          <div className="flex items-center justify-between text-dark-200 mb-4">
            <span className="text-xs font-medium">{tStats('approvalRateLabel')}</span>
            <TrendingUp className="w-4 h-4 text-luxury-accent" />
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-dark">
              {tStats('approvalRate')}
            </div>
            <span className="text-xs text-dark-200 mt-1 block">Audit verification</span>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="col-span-6 lg:col-span-3 bg-card-light bento-card p-6 border border-white/50 flex flex-col justify-between">
          <div className="flex items-center justify-between text-dark-200 mb-4">
            <span className="text-xs font-medium">{tStats('applicationsLabel')}</span>
            <Sparkles className="w-4 h-4 text-luxury-highlight" />
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-dark">
              {tStats('applications')}
            </div>
            <span className="text-xs text-dark-200 mt-1 block">Passports audited</span>
          </div>
        </div>

        {/* Stat 3 */}
        <div className="col-span-6 lg:col-span-3 bg-card-light bento-card p-6 border border-white/50 flex flex-col justify-between">
          <div className="flex items-center justify-between text-dark-200 mb-4">
            <span className="text-xs font-medium">{tStats('ratingLabel')}</span>
            <div className="flex text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-500" />
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-dark flex items-baseline gap-1">
              <span>{tStats('rating')}</span>
              <span className="text-xs font-normal text-dark-200">/ 5.0</span>
            </div>
            <span className="text-xs text-dark-200 mt-1 block">71 verified reviews</span>
          </div>
        </div>

        {/* Stat 4 */}
        <div className="col-span-6 lg:col-span-3 bg-card-light bento-card p-6 border border-white/50 flex flex-col justify-between">
          <div className="flex items-center justify-between text-dark-200 mb-4">
            <span className="text-xs font-medium">{tStats('destinationsLabel')}</span>
            <Globe2 className="w-4 h-4 text-luxury-accent" />
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-dark">
              {tStats('destinations')}
            </div>
            <span className="text-xs text-dark-200 mt-1 block">Worldwide embassies</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CORE SERVICES BENTO GRID (5 Services in varying sizes)                  */}
      {/* ========================================================================= */}
      <section className="space-y-4 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between px-2 gap-2">
          <div>
            <span className="tag-coral text-xs mb-2">Exclusive Scope</span>
            <h2 className="text-2xl sm:text-4xl font-normal text-dark tracking-tight">
              <span className="font-light italic">Dedicated</span> Consular Support
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-dark-200 max-w-md">
            {tServices('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* Service 1 (4 cols) */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-card-light bento-card p-6 sm:p-7 border border-white/50 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-[20px] bg-white flex items-center justify-center text-dark shadow-subtle group-hover:bg-dark group-hover:text-white transition-colors">
                  <FileCheck2 className="w-5 h-5 text-luxury-accent" />
                </div>
                <div className="btn-icon-circle w-9 h-9">
                  <ArrowUpRight className="w-4 h-4 text-dark" />
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-dark mb-2">
                {tServices('service1Title')}
              </h3>
              <p className="text-xs sm:text-sm text-dark-200 leading-relaxed">
                {tServices('service1Desc')}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-dark/10 text-xs font-medium text-dark-200">
              Embassy-ready folders
            </div>
          </div>

          {/* Service 2 (4 cols) */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-card-light bento-card p-6 sm:p-7 border border-white/50 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-[20px] bg-white flex items-center justify-center text-dark shadow-subtle group-hover:bg-dark group-hover:text-white transition-colors">
                  <FileSearch className="w-5 h-5 text-luxury-accent" />
                </div>
                <div className="btn-icon-circle w-9 h-9">
                  <ArrowUpRight className="w-4 h-4 text-dark" />
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-dark mb-2">
                {tServices('service2Title')}
              </h3>
              <p className="text-xs sm:text-sm text-dark-200 leading-relaxed">
                {tServices('service2Desc')}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-dark/10 text-xs font-medium text-dark-200">
              Financial &amp; Iqama audit
            </div>
          </div>

          {/* Service 3 (4 cols) */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-card-light bento-card p-6 sm:p-7 border border-white/50 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-[20px] bg-white flex items-center justify-center text-dark shadow-subtle group-hover:bg-dark group-hover:text-white transition-colors">
                  <FileSignature className="w-5 h-5 text-luxury-accent" />
                </div>
                <div className="btn-icon-circle w-9 h-9">
                  <ArrowUpRight className="w-4 h-4 text-dark" />
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-dark mb-2">
                {tServices('service3Title')}
              </h3>
              <p className="text-xs sm:text-sm text-dark-200 leading-relaxed">
                {tServices('service3Desc')}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-dark/10 text-xs font-medium text-dark-200">
              Tailored cover letters
            </div>
          </div>

          {/* Service 4: Wide Bento Tile (6 cols) */}
          <div className="col-span-12 md:col-span-6 bg-card-light bento-card p-6 sm:p-8 border border-white/50 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-[20px] bg-white flex items-center justify-center text-dark shadow-subtle group-hover:bg-dark group-hover:text-white transition-colors">
                  <Hotel className="w-5 h-5 text-luxury-accent" />
                </div>
                <div className="btn-icon-circle w-9 h-9">
                  <ArrowUpRight className="w-4 h-4 text-dark" />
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-dark mb-2">
                {tServices('service4Title')}
              </h3>
              <p className="text-xs sm:text-sm text-dark-200 leading-relaxed">
                {tServices('service4Desc')}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-dark/10 text-xs font-medium text-dark-200">
              Verifiable PNR &amp; confirmed hotel vouchers
            </div>
          </div>

          {/* Service 5: Wide Bento Tile (6 cols) */}
          <div className="col-span-12 md:col-span-6 bg-card-dark text-white bento-card p-6 sm:p-8 border border-white/10 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-[20px] bg-white/10 flex items-center justify-center text-white shadow-subtle group-hover:bg-white group-hover:text-dark transition-colors">
                  <HelpCircle className="w-5 h-5 text-luxury-highlight" />
                </div>
                <div className="btn-icon-circle w-9 h-9 bg-white/10 text-white">
                  <ArrowUpRight className="w-4 h-4 text-luxury-highlight" />
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                {tServices('service5Title')}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                {tServices('service5Desc')}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-medium text-white/60">
              Biometrics scheduling &amp; consular interview briefing
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FOUR-STEP PROCESS BENTO ROW                                            */}
      {/* ========================================================================= */}
      <section className="space-y-4 pt-6">
        <div className="px-2">
          <span className="tag-coral text-xs mb-2">Clear Journey</span>
          <h2 className="text-2xl sm:text-4xl font-normal text-dark tracking-tight">
            <span className="font-light italic">Precision</span> Protocol
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* Step 1 */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 bg-card-light bento-card p-6 border border-white/50 flex flex-col justify-between">
            <span className="text-2xl font-bold font-mono text-dark-200 mb-4">01</span>
            <div>
              <h3 className="text-sm font-bold text-dark mb-1">{tHow('step1Title')}</h3>
              <p className="text-xs text-dark-200 leading-relaxed">{tHow('step1Desc')}</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 bg-card-light bento-card p-6 border border-white/50 flex flex-col justify-between">
            <span className="text-2xl font-bold font-mono text-dark-200 mb-4">02</span>
            <div>
              <h3 className="text-sm font-bold text-dark mb-1">{tHow('step2Title')}</h3>
              <p className="text-xs text-dark-200 leading-relaxed">{tHow('step2Desc')}</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 bg-card-light bento-card p-6 border border-white/50 flex flex-col justify-between">
            <span className="text-2xl font-bold font-mono text-dark-200 mb-4">03</span>
            <div>
              <h3 className="text-sm font-bold text-dark mb-1">{tHow('step3Title')}</h3>
              <p className="text-xs text-dark-200 leading-relaxed">{tHow('step3Desc')}</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 bg-card-dark text-white bento-card p-6 border border-white/10 flex flex-col justify-between">
            <span className="text-2xl font-bold font-mono text-luxury-highlight mb-4">04</span>
            <div>
              <h3 className="text-sm font-bold text-white mb-1">{tHow('step4Title')}</h3>
              <p className="text-xs text-white/70 leading-relaxed">{tHow('step4Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. GOOGLE RATING & REVIEWS BENTO (Near-black Card with Editorial Style)    */}
      {/* ========================================================================= */}
      <section className="bg-card-dark text-white bento-card p-8 sm:p-12 border border-white/10 relative overflow-hidden">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Left Summary (5 cols) */}
          <div className="col-span-12 lg:col-span-5 space-y-4">
            <div className="inline-flex items-center space-x-1.5 rtl:space-x-reverse tag-coral">
              <Star className="w-3.5 h-3.5 fill-dark text-dark" />
              <span>{tRating('badge')}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-normal leading-tight">
              <span className="font-light italic">Validated</span> by Riyadh Clients
            </h2>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              {tRating('description')}
            </p>

            <div className="pt-2 flex items-center space-x-4 rtl:space-x-reverse">
              <div className="text-4xl font-bold text-white">4.4</div>
              <div>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < 4
                          ? 'fill-amber-400 text-amber-400'
                          : i === 4
                          ? 'fill-amber-400/50 text-amber-400'
                          : 'text-white/20'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-white/60 mt-0.5 block">
                  71 Verified Google Reviews
                </span>
              </div>
            </div>
          </div>

          {/* Right Reviews Grid (7 cols) */}
          <div className="col-span-12 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Review 1 */}
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 space-y-3 flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-white/90 italic leading-relaxed">
                &ldquo;{tRating('review1Text')}&rdquo;
              </p>
              <div>
                <span className="font-semibold text-white text-xs block">
                  {tRating('review1Author')}
                </span>
                <span className="text-[11px] text-white/50 block">
                  {tRating('review1Role')}
                </span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 space-y-3 flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-white/90 italic leading-relaxed">
                &ldquo;{tRating('review2Text')}&rdquo;
              </p>
              <div>
                <span className="font-semibold text-white text-xs block">
                  {tRating('review2Author')}
                </span>
                <span className="text-[11px] text-white/50 block">
                  {tRating('review2Role')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FAQ TEASER BENTO SECTION                                               */}
      {/* ========================================================================= */}
      <section className="bg-card-light bento-card p-8 sm:p-10 border border-white/50 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="tag-coral text-xs mb-2">Answers</span>
            <h2 className="text-2xl sm:text-4xl font-normal text-dark tracking-tight">
              <span className="font-light italic">Essential</span> Inquiries
            </h2>
          </div>
          <Link
            href="/faq"
            className="btn-pill-primary text-xs py-2 px-5 gap-1.5 self-start sm:self-auto"
          >
            <span>{tFaq('viewAll')}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-luxury-highlight" />
          </Link>
        </div>

        <FaqAccordion items={faqItems} defaultOpenIndex={0} />
      </section>

      {/* ========================================================================= */}
      {/* 7. FINAL CALL TO ACTION BENTO                                             */}
      {/* ========================================================================= */}
      <section className="bg-card-dark text-white bento-card p-8 sm:p-14 text-center border border-white/10 relative overflow-hidden space-y-6">
        <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-3">
          <div className="inline-flex tag-coral text-xs mb-2">
            Priority Consultation
          </div>
          <h2 className="text-2xl sm:text-4xl font-normal tracking-tight">
            <span className="font-light italic">Initiate</span> Your Visa File
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-lg mx-auto">
            {tCta('subtitle')}
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/contact"
            className="btn-pill-primary w-full sm:w-auto py-3.5 px-8 text-sm gap-2 bg-white text-dark hover:bg-white/90 shadow-soft"
          >
            <span>{tCta('buttonPrimary')}</span>
            <ArrowUpRight className="w-4 h-4 text-dark" />
          </Link>
          <Link
            href="/visas"
            className="btn-pill-primary w-full sm:w-auto py-3.5 px-8 text-sm gap-2 bg-white/10 text-white hover:bg-white/20 border border-white/20"
          >
            <span>{tCta('buttonSecondary')}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
