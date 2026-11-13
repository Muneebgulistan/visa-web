import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import {
  Compass,
  CheckCircle2,
  Users,
  ShieldCheck,
  Award,
  Clock,
  MapPin,
  Phone,
  Star,
  ArrowRight,
} from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations('aboutPage');
  const tCommon = useTranslations('common');

  const team = [
    {
      name: 'Salman Khan',
      role: 'Managing Director & Senior Immigration Advisor',
      bio: 'Over 14 years advising Saudi citizens and GCC residents on UK, US, and Schengen consular filings.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Fatima Al-Harbi',
      role: 'Head of Consular File Auditing',
      bio: 'Former documentation officer specializing in strict financial statement evaluations and NOC compliance.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Omar Farooq',
      role: 'Head of Travel Logistics & Umrah Operations',
      bio: 'Leads our airline ticketing, luxury hotel partnerships in Makkah/Madinah, and verified PNR generation.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* 1. Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-coral uppercase tracking-widest block">
          Riyadh Immigration & Travel Pioneers
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-dark tracking-tight">
          {t('title')}
        </h1>
        <p className="text-base text-gray-600 leading-relaxed">
          {t('subtitle')}
        </p>
      </div>

      {/* 2. Company Story */}
      <div className="bg-white rounded-[14px] border border-gray-100 shadow-md p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-teal uppercase tracking-wider block">
              Established in Riyadh
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-dark">
              {t('storyTitle')}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {t('storyP1')}
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {t('storyP2')}
            </p>

            <div className="pt-2 flex items-center space-x-6 rtl:space-x-reverse text-xs text-gray-600">
              <span className="flex items-center space-x-1.5 rtl:space-x-reverse font-semibold text-teal">
                <MapPin className="w-4 h-4 text-coral" />
                <span>Umm Al Hamam Al Sharqi</span>
              </span>
              <span className="flex items-center space-x-1.5 rtl:space-x-reverse font-semibold text-teal">
                <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
                <span>4.4 from 71 Google reviews</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-[14px] overflow-hidden shadow-lg border border-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
                alt="Riyadh Skyline"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rtl:-left-auto rtl:-right-4 bg-teal text-white p-4 rounded-xl shadow-lg text-xs font-bold">
              <span>99.2% Audit Accuracy</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Why Choose Us (4 pillars) */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-coral uppercase tracking-widest block mb-2">
            The SK Advantage
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-dark">
            {t('whyTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-mint p-6 rounded-[14px] border border-teal-100 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal text-white flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-dark">{t('why1Title')}</h3>
            <p className="text-xs text-gray-600 leading-relaxed">{t('why1Desc')}</p>
          </div>

          <div className="bg-mint p-6 rounded-[14px] border border-teal-100 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal text-white flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-dark">{t('why2Title')}</h3>
            <p className="text-xs text-gray-600 leading-relaxed">{t('why2Desc')}</p>
          </div>

          <div className="bg-mint p-6 rounded-[14px] border border-teal-100 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal text-white flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-dark">{t('why3Title')}</h3>
            <p className="text-xs text-gray-600 leading-relaxed">{t('why3Desc')}</p>
          </div>

          <div className="bg-mint p-6 rounded-[14px] border border-teal-100 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal text-white flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-dark">{t('why4Title')}</h3>
            <p className="text-xs text-gray-600 leading-relaxed">{t('why4Desc')}</p>
          </div>
        </div>
      </div>

      {/* 4. Leadership Team */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-coral uppercase tracking-widest block mb-2">
            Professional Guidance
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-dark">
            {t('teamTitle')}
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            {t('teamSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-[14px] border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="h-56 bg-gray-100 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-dark">{member.name}</h3>
                  <span className="text-xs font-semibold text-teal block mt-0.5 mb-2">
                    {member.role}
                  </span>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Contact Callout */}
      <div className="bg-dark text-white rounded-[14px] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center md:text-left rtl:md:text-right">
          <h3 className="text-xl sm:text-2xl font-bold">
            Have a Specific Case or Complex Travel Requirement?
          </h3>
          <p className="text-xs sm:text-sm text-gray-300">
            Our Riyadh specialists in Umm Al Hamam are available for in-person and digital consultations.
          </p>
        </div>
        <Link
          href="/contact"
          className="px-6 py-3 rounded-[14px] bg-coral hover:bg-coral-600 text-white font-bold text-sm transition-all whitespace-nowrap shadow"
        >
          Schedule Consultation
        </Link>
      </div>
    </div>
  );
}
