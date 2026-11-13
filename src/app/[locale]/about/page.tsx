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
  ArrowUpRight,
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
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      {/* 1. Header: Bento Light Card */}
      <div className="bg-card-light bento-card p-8 sm:p-12 border border-white/50 text-center max-w-4xl mx-auto space-y-3 shadow-soft">
        <span className="tag-coral text-xs mb-1">
          Riyadh Immigration &amp; Travel Pioneers
        </span>
        <h1 className="text-3xl sm:text-5xl font-normal text-dark tracking-tight">
          <span className="font-light italic">Advisory</span> Excellence &amp; Story
        </h1>
        <p className="text-xs sm:text-sm text-dark-200 leading-relaxed max-w-xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      {/* 2. Company Story: Bento Grid Tile */}
      <div className="bg-card-light bento-card border border-white/50 p-6 sm:p-10 shadow-soft">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="tag-coral text-xs">
              Established in Riyadh
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-dark">
              <span className="font-light italic">Dossier</span> Preparation &amp; Protocol
            </h2>
            <p className="text-xs sm:text-sm text-dark-200 leading-relaxed">
              {t('storyP1')}
            </p>
            <p className="text-xs sm:text-sm text-dark-200 leading-relaxed">
              {t('storyP2')}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-dark-200">
              <span className="flex items-center space-x-1.5 rtl:space-x-reverse font-medium">
                <MapPin className="w-3.5 h-3.5 text-luxury-highlight" />
                <span>Umm Al Hamam Al Sharqi</span>
              </span>
              <span className="flex items-center space-x-1.5 rtl:space-x-reverse font-medium">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                <span>4.4 from 71 Google reviews</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative p-2 bg-white/20 rounded-3xl">
            <div className="rounded-2xl overflow-hidden shadow-soft">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
                alt="Riyadh Skyline"
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4 rtl:left-auto rtl:right-4 bg-dark text-white py-2 px-4 rounded-pill shadow-soft text-xs font-semibold flex items-center space-x-2 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-luxury-highlight" />
              <span>99.2% Audit Accuracy</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Why Choose Us (4 pillars) */}
      <div className="space-y-4 pt-4">
        <div className="px-2">
          <span className="tag-coral text-xs mb-1">The SK Advantage</span>
          <h2 className="text-2xl sm:text-4xl font-normal text-dark tracking-tight">
            <span className="font-light italic">Strategic</span> Advantages
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-card-light bento-card p-6 border border-white/50 space-y-3">
            <div className="w-10 h-10 rounded-[20px] bg-dark text-white flex items-center justify-center">
              <Compass className="w-5 h-5 text-luxury-accent" />
            </div>
            <h3 className="text-sm font-bold text-dark">{t('why1Title')}</h3>
            <p className="text-xs text-dark-200 leading-relaxed">{t('why1Desc')}</p>
          </div>

          <div className="bg-card-light bento-card p-6 border border-white/50 space-y-3">
            <div className="w-10 h-10 rounded-[20px] bg-dark text-white flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-luxury-accent" />
            </div>
            <h3 className="text-sm font-bold text-dark">{t('why2Title')}</h3>
            <p className="text-xs text-dark-200 leading-relaxed">{t('why2Desc')}</p>
          </div>

          <div className="bg-card-light bento-card p-6 border border-white/50 space-y-3">
            <div className="w-10 h-10 rounded-[20px] bg-dark text-white flex items-center justify-center">
              <Award className="w-5 h-5 text-luxury-highlight" />
            </div>
            <h3 className="text-sm font-bold text-dark">{t('why3Title')}</h3>
            <p className="text-xs text-dark-200 leading-relaxed">{t('why3Desc')}</p>
          </div>

          <div className="bg-card-light bento-card p-6 border border-white/50 space-y-3">
            <div className="w-10 h-10 rounded-[20px] bg-dark text-white flex items-center justify-center">
              <Phone className="w-5 h-5 text-luxury-accent" />
            </div>
            <h3 className="text-sm font-bold text-dark">{t('why4Title')}</h3>
            <p className="text-xs text-dark-200 leading-relaxed">{t('why4Desc')}</p>
          </div>
        </div>
      </div>

      {/* 4. Leadership Team */}
      <div className="space-y-4 pt-4">
        <div className="px-2">
          <span className="tag-coral text-xs mb-1">Professional Guidance</span>
          <h2 className="text-2xl sm:text-4xl font-normal text-dark tracking-tight">
            <span className="font-light italic">Consular</span> Advisory Leadership
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-card-light bento-card border border-white/50 overflow-hidden flex flex-col justify-between p-2 shadow-soft"
            >
              <div>
                <div className="h-56 rounded-2xl overflow-hidden bg-white/20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-base font-bold text-dark">{member.name}</h3>
                  <span className="text-xs font-medium text-dark-200 block mt-0.5 mb-2">
                    {member.role}
                  </span>
                  <p className="text-xs text-dark-200 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Contact Callout: Dark Bento Card */}
      <div className="bg-card-dark text-white bento-card p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-float border border-white/10">
        <div className="space-y-2 text-center md:text-left rtl:md:text-right">
          <h3 className="text-xl sm:text-2xl font-normal">
            <span className="font-light italic">Complex Case</span> or Consular Query?
          </h3>
          <p className="text-xs sm:text-sm text-white/70">
            Our Riyadh specialists in Umm Al Hamam are available for in-person and digital consultations.
          </p>
        </div>
        <Link
          href="/contact"
          className="btn-pill-primary py-3 px-6 text-xs gap-1.5 bg-white text-dark hover:bg-white/90 whitespace-nowrap"
        >
          <span>Schedule Consultation</span>
          <ArrowUpRight className="w-4 h-4 text-dark" />
        </Link>
      </div>
    </div>
  );
}
