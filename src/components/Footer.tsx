import React from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import {
  Compass,
  MapPin,
  Phone,
  Clock,
  Star,
  Shield,
  ArrowUpRight,
  MessageCircle,
} from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const tCommon = useTranslations('common');
  const tNav = useTranslations('nav');
  const tServices = useTranslations('services');

  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-4">
      <div className="bg-card-dark text-white bento-card p-8 sm:p-12 border border-white/10 relative overflow-hidden space-y-12 shadow-float">
        {/* Subtle background blueprint lines */}
        <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse group"
            >
              <div className="w-10 h-10 rounded-[20px] bg-white/10 flex items-center justify-center text-white border border-white/20 shadow-sm group-hover:scale-105 transition-transform">
                <Compass className="w-5 h-5 text-luxury-accent" />
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-white block leading-none">
                  SK VISA EXPERTS
                </span>
                <span className="text-[11px] font-medium text-white/60 block mt-0.5">
                  Private Advisory • Riyadh
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              {t('aboutText')}
            </p>

            {/* Google Rating Badge */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center space-x-3 rtl:space-x-reverse max-w-xs">
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
              <div className="text-xs">
                <span className="font-semibold text-white block">
                  4.4 / 5.0 Rating
                </span>
                <span className="text-white/60">
                  {tCommon('googleReviews')}
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold text-white/50 tracking-wider uppercase border-b border-white/10 pb-2">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/"
                  className="text-white/80 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>{tNav('home')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/30 group-hover:text-luxury-highlight transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  href="/visas"
                  className="text-white/80 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>{tNav('visas')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/30 group-hover:text-luxury-highlight transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="text-white/80 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>{tNav('packages')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/30 group-hover:text-luxury-highlight transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  href="/hotels"
                  className="text-white/80 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>{tNav('hotels')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/30 group-hover:text-luxury-highlight transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  href="/airline"
                  className="text-white/80 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>{tNav('airline')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/30 group-hover:text-luxury-highlight transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>{tNav('about')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/30 group-hover:text-luxury-highlight transition-colors" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold text-white/50 tracking-wider uppercase border-b border-white/10 pb-2">
              {t('servicesTitle')}
            </h3>
            <ul className="space-y-2 text-xs text-white/70">
              <li>{tServices('service1Title')}</li>
              <li>{tServices('service2Title')}</li>
              <li>{tServices('service3Title')}</li>
              <li>{tServices('service4Title')}</li>
              <li>{tServices('service5Title')}</li>
            </ul>
          </div>

          {/* Column 4: Riyadh Office & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold text-white/50 tracking-wider uppercase border-b border-white/10 pb-2">
              {t('contactTitle')}
            </h3>

            <div className="space-y-3 text-xs text-white/80">
              <div className="flex items-start space-x-2.5 rtl:space-x-reverse">
                <MapPin className="w-4 h-4 text-luxury-highlight flex-shrink-0 mt-0.5" />
                <span>{tCommon('address')}</span>
              </div>

              <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
                <Clock className="w-4 h-4 text-luxury-accent flex-shrink-0" />
                <span>{tCommon('hours')}</span>
              </div>

              <div className="pt-2">
                <a
                  href="tel:+966599326936"
                  className="btn-pill-primary w-full py-2.5 text-xs gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white justify-center"
                >
                  <Phone className="w-3.5 h-3.5 text-luxury-highlight" />
                  <span dir="ltr">+966 59 932 6936</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar: Legal & Disclaimers */}
        <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <div>{t('copyright')}</div>
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <Link href="/privacy" className="hover:text-white transition-colors">
              {t('privacy')}
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
