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
  CheckCircle2,
  ArrowRight,
  Sparkles,
  PhoneCall,
  Clock,
  Compass,
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
    <div className="space-y-20 sm:space-y-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-mint via-mint/50 to-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle decorative background circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-100/40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-coral-100/30 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-teal-100/80 border border-teal-200 text-teal-900 px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-teal" />
              <span>{tHero('badge')}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-dark tracking-tight leading-tight">
              {tHero('title')}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {tHero('subtitle')}
            </p>

            {/* Interactive Search Bar */}
            <div className="pt-4">
              <HomeSearchBar />
              <p className="text-xs text-gray-500 mt-2.5">
                {tHero('popularSearches')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STATS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[14px] border border-gray-100 shadow-md p-6 sm:p-10 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x rtl:lg:divide-x-reverse divide-gray-100">
          <div className="text-center pt-4 lg:pt-0">
            <span className="text-3xl sm:text-4xl font-extrabold text-teal block">
              {tStats('approvalRate')}
            </span>
            <span className="text-xs sm:text-sm font-medium text-gray-600 mt-1 block">
              {tStats('approvalRateLabel')}
            </span>
          </div>

          <div className="text-center pt-4 lg:pt-0">
            <span className="text-3xl sm:text-4xl font-extrabold text-coral block">
              {tStats('applications')}
            </span>
            <span className="text-xs sm:text-sm font-medium text-gray-600 mt-1 block">
              {tStats('applicationsLabel')}
            </span>
          </div>

          <div className="text-center pt-4 lg:pt-0">
            <div className="flex items-center justify-center space-x-1 rtl:space-x-reverse text-amber-400">
              <Star className="w-6 h-6 fill-amber-400" />
              <span className="text-3xl sm:text-4xl font-extrabold text-dark">
                {tStats('rating')}
              </span>
            </div>
            <span className="text-xs sm:text-sm font-medium text-gray-600 mt-1 block">
              {tStats('ratingLabel')}
            </span>
          </div>

          <div className="text-center pt-4 lg:pt-0">
            <span className="text-3xl sm:text-4xl font-extrabold text-teal block">
              {tStats('destinations')}
            </span>
            <span className="text-xs sm:text-sm font-medium text-gray-600 mt-1 block">
              {tStats('destinationsLabel')}
            </span>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES SECTION (Exact 5 services) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-coral uppercase tracking-widest block mb-2">
            What We Do
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-dark">
            {tServices('title')}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3">
            {tServices('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service 1: Complete visa file preparation */}
          <div className="bg-white p-7 rounded-[14px] border border-gray-100 shadow-sm hover:shadow-md hover:border-teal/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal flex items-center justify-center mb-5 group-hover:bg-teal group-hover:text-white transition-colors">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-teal transition-colors">
                {tServices('service1Title')}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {tServices('service1Desc')}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-xs font-semibold text-teal">
              <span>Embassy-ready folders</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </div>
          </div>

          {/* Service 2: Verified document review */}
          <div className="bg-white p-7 rounded-[14px] border border-gray-100 shadow-sm hover:shadow-md hover:border-teal/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal flex items-center justify-center mb-5 group-hover:bg-teal group-hover:text-white transition-colors">
                <FileSearch className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-teal transition-colors">
                {tServices('service2Title')}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {tServices('service2Desc')}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-xs font-semibold text-teal">
              <span>Risk & error audit</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </div>
          </div>

          {/* Service 3: Cover letter & travel itinerary planning */}
          <div className="bg-white p-7 rounded-[14px] border border-gray-100 shadow-sm hover:shadow-md hover:border-teal/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal flex items-center justify-center mb-5 group-hover:bg-teal group-hover:text-white transition-colors">
                <FileSignature className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-teal transition-colors">
                {tServices('service3Title')}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {tServices('service3Desc')}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-xs font-semibold text-teal">
              <span>Customized itineraries</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </div>
          </div>

          {/* Service 4: Flight & hotel reservation assistance */}
          <div className="bg-white p-7 rounded-[14px] border border-gray-100 shadow-sm hover:shadow-md hover:border-teal/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal flex items-center justify-center mb-5 group-hover:bg-teal group-hover:text-white transition-colors">
                <Hotel className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-teal transition-colors">
                {tServices('service4Title')}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {tServices('service4Desc')}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-xs font-semibold text-teal">
              <span>Verifiable PNR & Vouchers</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </div>
          </div>

          {/* Service 5: General visa application support & guidance */}
          <div className="bg-white p-7 rounded-[14px] border border-gray-100 shadow-sm hover:shadow-md hover:border-teal/40 transition-all flex flex-col justify-between group md:col-span-2 lg:col-span-2">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal flex items-center justify-center mb-5 group-hover:bg-teal group-hover:text-white transition-colors">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-teal transition-colors">
                {tServices('service5Title')}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-xl">
                {tServices('service5Desc')}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-xs font-semibold text-teal">
              <span>Appointment booking & interview coaching</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOUR-STEP HOW IT WORKS */}
      <section className="bg-mint py-16 px-4 sm:px-6 lg:px-8 border-y border-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-coral uppercase tracking-widest block mb-2">
              Simple Process
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-dark">
              {tHow('title')}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              {tHow('subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-[14px] shadow-sm border border-gray-100 relative">
              <span className="text-3xl font-black text-teal-200 block mb-2">
                {tHow('step1Number')}
              </span>
              <h3 className="text-base font-bold text-dark mb-2">
                {tHow('step1Title')}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {tHow('step1Desc')}
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-[14px] shadow-sm border border-gray-100 relative">
              <span className="text-3xl font-black text-teal-200 block mb-2">
                {tHow('step2Number')}
              </span>
              <h3 className="text-base font-bold text-dark mb-2">
                {tHow('step2Title')}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {tHow('step2Desc')}
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-[14px] shadow-sm border border-gray-100 relative">
              <span className="text-3xl font-black text-teal-200 block mb-2">
                {tHow('step3Number')}
              </span>
              <h3 className="text-base font-bold text-dark mb-2">
                {tHow('step3Title')}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {tHow('step3Desc')}
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-[14px] shadow-sm border border-gray-100 relative">
              <span className="text-3xl font-black text-coral-200 block mb-2">
                {tHow('step4Number')}
              </span>
              <h3 className="text-base font-bold text-dark mb-2">
                {tHow('step4Title')}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {tHow('step4Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GOOGLE RATING & REVIEWS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-dark text-white rounded-[14px] p-8 sm:p-12 shadow-xl border border-dark-400">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Score Summary */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center space-x-1.5 rtl:space-x-reverse bg-dark-600 border border-dark-400 text-coral px-3 py-1 rounded-full text-xs font-semibold">
                <Star className="w-3.5 h-3.5 fill-coral" />
                <span>{tRating('badge')}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                {tRating('title')}
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                {tRating('description')}
              </p>
              <div className="pt-2 flex items-center space-x-4 rtl:space-x-reverse">
                <div className="text-4xl font-extrabold text-amber-400">4.4</div>
                <div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < 4
                            ? 'fill-amber-400'
                            : i === 4
                            ? 'fill-amber-400/50'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400 mt-1 block">
                    71 Verified Google Reviews
                  </span>
                </div>
              </div>
            </div>

            {/* Right Reviews Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-dark-600 p-5 rounded-xl border border-dark-400 space-y-3">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-gray-200 italic leading-relaxed">
                  &ldquo;{tRating('review1Text')}&rdquo;
                </p>
                <div>
                  <span className="font-bold text-white text-xs block">
                    {tRating('review1Author')}
                  </span>
                  <span className="text-[11px] text-gray-400 block">
                    {tRating('review1Role')}
                  </span>
                </div>
              </div>

              <div className="bg-dark-600 p-5 rounded-xl border border-dark-400 space-y-3">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-gray-200 italic leading-relaxed">
                  &ldquo;{tRating('review2Text')}&rdquo;
                </p>
                <div>
                  <span className="font-bold text-white text-xs block">
                    {tRating('review2Author')}
                  </span>
                  <span className="text-[11px] text-gray-400 block">
                    {tRating('review2Role')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-coral uppercase tracking-widest block mb-2">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-dark">
            {tFaq('title')}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            {tFaq('subtitle')}
          </p>
        </div>

        <FaqAccordion items={faqItems} defaultOpenIndex={0} />

        <div className="text-center mt-8">
          <Link
            href="/faq"
            className="inline-flex items-center space-x-2 rtl:space-x-reverse text-sm font-bold text-teal hover:text-teal-800 transition-colors"
          >
            <span>{tFaq('viewAll')}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-teal-800 via-teal-700 to-teal text-white rounded-[14px] p-8 sm:p-14 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              {tCta('title')}
            </h2>
            <p className="text-sm sm:text-base text-teal-100">
              {tCta('subtitle')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-[14px] bg-coral hover:bg-coral-600 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              {tCta('buttonPrimary')}
            </Link>
            <Link
              href="/visas"
              className="w-full sm:w-auto px-8 py-3.5 rounded-[14px] bg-white hover:bg-gray-100 text-teal-900 font-bold text-sm transition-all shadow"
            >
              {tCta('buttonSecondary')}
            </Link>
          </div>

          <div className="pt-4 flex items-center justify-center space-x-6 rtl:space-x-reverse text-xs text-teal-100">
            <span className="flex items-center space-x-1.5 rtl:space-x-reverse">
              <CheckCircle2 className="w-4 h-4 text-teal-200" />
              <span>Free Initial Assessment</span>
            </span>
            <span className="flex items-center space-x-1.5 rtl:space-x-reverse">
              <CheckCircle2 className="w-4 h-4 text-teal-200" />
              <span>Riyadh Office: Umm Al Hamam</span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
