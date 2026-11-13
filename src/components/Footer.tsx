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
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const tCommon = useTranslations('common');
  const tNav = useTranslations('nav');
  const tServices = useTranslations('services');

  return (
    <footer className="bg-dark text-gray-300 pt-16 pb-12 border-t border-dark-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <div className="w-10 h-10 rounded-[14px] bg-teal flex items-center justify-center text-white shadow">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white block leading-none">
                  SK VISA
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-teal-400 block mt-0.5">
                  EXPERTS • RIYADH
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed">
              {t('aboutText')}
            </p>

            {/* Google Rating Badge */}
            <div className="bg-dark-600 border border-dark-400 p-3.5 rounded-[14px] flex items-center space-x-3 rtl:space-x-reverse">
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
              <div className="text-xs">
                <span className="font-bold text-white block">
                  4.4 / 5.0 Rating
                </span>
                <span className="text-gray-400">
                  {tCommon('googleReviews')}
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide border-b border-dark-400 pb-2">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-teal-400 transition-colors flex items-center space-x-1 rtl:space-x-reverse"
                >
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 text-teal-500" />
                  <span>{tNav('home')}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/visas"
                  className="hover:text-teal-400 transition-colors flex items-center space-x-1 rtl:space-x-reverse"
                >
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 text-teal-500" />
                  <span>{tNav('visas')}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="hover:text-teal-400 transition-colors flex items-center space-x-1 rtl:space-x-reverse"
                >
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 text-teal-500" />
                  <span>{tNav('packages')}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/hotels"
                  className="hover:text-teal-400 transition-colors flex items-center space-x-1 rtl:space-x-reverse"
                >
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 text-teal-500" />
                  <span>{tNav('hotels')}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/airline"
                  className="hover:text-teal-400 transition-colors flex items-center space-x-1 rtl:space-x-reverse"
                >
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 text-teal-500" />
                  <span>{tNav('airline')}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-teal-400 transition-colors flex items-center space-x-1 rtl:space-x-reverse"
                >
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 text-teal-500" />
                  <span>{tNav('about')}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-teal-400 transition-colors flex items-center space-x-1 rtl:space-x-reverse"
                >
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 text-teal-500" />
                  <span>{tNav('faq')}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide border-b border-dark-400 pb-2">
              {tServices('title')}
            </h3>
            <ul className="space-y-2 text-xs text-gray-300">
              <li className="flex items-start space-x-2 rtl:space-x-reverse">
                <span className="text-teal-400 font-bold">•</span>
                <span>{tServices('service1Title')}</span>
              </li>
              <li className="flex items-start space-x-2 rtl:space-x-reverse">
                <span className="text-teal-400 font-bold">•</span>
                <span>{tServices('service2Title')}</span>
              </li>
              <li className="flex items-start space-x-2 rtl:space-x-reverse">
                <span className="text-teal-400 font-bold">•</span>
                <span>{tServices('service3Title')}</span>
              </li>
              <li className="flex items-start space-x-2 rtl:space-x-reverse">
                <span className="text-teal-400 font-bold">•</span>
                <span>{tServices('service4Title')}</span>
              </li>
              <li className="flex items-start space-x-2 rtl:space-x-reverse">
                <span className="text-teal-400 font-bold">•</span>
                <span>{tServices('service5Title')}</span>
              </li>
            </ul>
            <div className="pt-2">
              <div className="bg-dark-600 p-3 rounded-lg border border-dark-400 flex items-center space-x-2 text-xs text-gray-300">
                <Shield className="w-4 h-4 text-coral flex-shrink-0" />
                <span>8 Authorized Payment Gateways Supported</span>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide border-b border-dark-400 pb-2">
              Riyadh Office
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2.5 rtl:space-x-reverse">
                <MapPin className="w-4 h-4 text-coral mt-1 flex-shrink-0" />
                <span className="text-gray-300 leading-snug">
                  {tCommon('address')}
                </span>
              </div>

              <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
                <Phone className="w-4 h-4 text-coral flex-shrink-0" />
                <a
                  href="tel:+966599326936"
                  className="text-white hover:text-teal-400 font-medium"
                  dir="ltr"
                >
                  +966 59 932 6936
                </a>
              </div>

              <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href="https://wa.me/966599326936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-medium"
                  dir="ltr"
                >
                  WhatsApp: +966 59 932 6936
                </a>
              </div>

              <div className="flex items-start space-x-2.5 rtl:space-x-reverse">
                <Clock className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-xs">
                  {tCommon('hours')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-12 pt-8 border-t border-dark-400 text-xs text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} {t('rights')}</p>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link
              href="/privacy"
              className="hover:text-teal-400 transition-colors"
            >
              {t('privacyPolicy')}
            </Link>
            <Link
              href="/terms"
              className="hover:text-teal-400 transition-colors"
            >
              {t('termsOfService')}
            </Link>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-4 text-[11px] text-gray-500 text-center leading-relaxed">
          {t('disclaimer')}
        </div>
      </div>
    </footer>
  );
}
