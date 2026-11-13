'use client';

import React, { useState } from 'react';
import { Link, usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import { Phone, Menu, X, Plane, Compass } from 'lucide-react';

export default function Header() {
  const t = useTranslations('nav');
  const tCommon = useTranslations('common');
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/visas', label: t('visas') },
    { href: '/packages', label: t('packages') },
    { href: '/hotels', label: t('hotels') },
    { href: '/airline', label: t('airline') },
    { href: '/about', label: t('about') },
    { href: '/faq', label: t('faq') },
    { href: '/contact', label: t('contact') },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      {/* Top micro-bar for phone & quick status */}
      <div className="bg-teal text-white text-xs py-1.5 px-4 sm:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="hidden sm:inline font-light text-teal-100">
            {tCommon('hours')}
          </span>
          <span className="sm:hidden font-light text-teal-100">
            Riyadh, Saudi Arabia
          </span>
        </div>
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <span className="hidden md:inline text-teal-100">
            ★ {tCommon('googleReviews')}
          </span>
          <a
            href="tel:+966599326936"
            className="flex items-center space-x-1.5 rtl:space-x-reverse font-semibold hover:text-coral transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-coral" />
            <span dir="ltr">+966 59 932 6936</span>
          </a>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse group focus:outline-none focus:ring-2 focus:ring-teal rounded-lg p-1"
          >
            <div className="w-11 h-11 rounded-[14px] bg-gradient-to-tr from-teal-800 to-teal flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-teal block leading-none">
                SK VISA
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-dark block mt-0.5">
                EXPERTS • RIYADH
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    active
                      ? 'text-teal bg-teal-50 font-bold'
                      : 'text-dark hover:text-teal hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right actions: Language Switcher & Call-to-action */}
          <div className="hidden sm:flex items-center space-x-3 rtl:space-x-reverse">
            <LanguageSwitcher />
            <Link
              href="/visas"
              className="px-4 py-2.5 rounded-[14px] bg-coral hover:bg-coral-600 text-white font-semibold text-sm transition-all shadow-sm hover:shadow hover:-translate-y-0.5 flex items-center space-x-1.5 rtl:space-x-reverse"
            >
              <span>{tCommon('applyNow')}</span>
              <Plane className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse lg:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-dark hover:text-teal hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium ${
                    active
                      ? 'bg-teal-50 text-teal font-bold'
                      : 'text-dark hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
            <a
              href="tel:+966599326936"
              className="w-full py-2.5 px-4 rounded-[14px] bg-gray-100 text-dark font-medium text-sm flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-teal" />
              <span dir="ltr">+966 59 932 6936</span>
            </a>
            <Link
              href="/visas"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 px-4 rounded-[14px] bg-coral hover:bg-coral-600 text-white font-semibold text-center text-sm shadow"
            >
              {tCommon('applyNow')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
