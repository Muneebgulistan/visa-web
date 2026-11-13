'use client';

import React, { useState } from 'react';
import { Link, usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import { Phone, Menu, X, ArrowUpRight, Compass } from 'lucide-react';

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
    <header className="sticky top-0 z-40 bg-sage/90 backdrop-blur-md transition-all pt-2 pb-2 px-4 sm:px-6">
      {/* Top micro-bar: Minimal dark pill container */}
      <div className="max-w-7xl mx-auto mb-2">
        <div className="bg-dark text-white text-xs py-2 px-4 sm:px-6 rounded-pill flex justify-between items-center shadow-soft">
          <div className="flex items-center space-x-3 rtl:space-x-reverse text-white/70">
            <span className="inline-block w-2 h-2 rounded-full bg-luxury-highlight animate-pulse" />
            <span className="hidden sm:inline font-normal">
              {tCommon('hours')}
            </span>
            <span className="sm:hidden font-normal">
              Riyadh, Saudi Arabia
            </span>
          </div>

          <div className="flex items-center space-x-4 rtl:space-x-reverse text-white/80">
            <div className="relative hidden md:flex items-center space-x-1 rtl:space-x-reverse text-white/80">
              <span>★ {tCommon('googleReviews')}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-badge absolute -top-0.5 -right-2" />
            </div>
            <a
              href="tel:+966599326936"
              className="flex items-center space-x-1.5 rtl:space-x-reverse font-medium text-white hover:text-coral transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-luxury-highlight" />
              <span dir="ltr">+966 59 932 6936</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation container: Floating Light Bento Card */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-card-light/95 backdrop-blur-md rounded-2xl sm:rounded-pill px-4 sm:px-6 py-2.5 shadow-soft border border-white/40 flex items-center justify-between">
          {/* Logo / Brand Tile */}
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-[20px] bg-dark flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform relative overflow-hidden">
              <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
              <Compass className="w-5 h-5 text-luxury-accent relative z-10" />
            </div>
            <div>
              <span className="text-base font-bold tracking-tight text-dark block leading-none">
                SK Visa
              </span>
              <span className="text-[11px] font-medium text-dark-200 block mt-0.5">
                Private Advisory • Riyadh
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
                  className={`px-3.5 py-1.5 text-xs md:text-sm font-medium rounded-pill transition-all ${
                    active
                      ? 'bg-dark text-white font-semibold shadow-sm'
                      : 'text-dark/80 hover:text-dark hover:bg-white/60'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right actions: Language Switcher & Pill CTA */}
          <div className="hidden sm:flex items-center space-x-2.5 rtl:space-x-reverse">
            <LanguageSwitcher />
            <Link
              href="/visas"
              className="btn-pill-primary text-xs sm:text-sm py-2 px-5 gap-1.5 shadow-soft"
            >
              <span>{tCommon('applyNow')}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-luxury-highlight" />
            </Link>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse lg:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-pill bg-white/70 text-dark flex items-center justify-center hover:bg-white focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown drawer: Floating Card */}
      {mobileMenuOpen && (
        <div className="max-w-7xl mx-auto mt-2 lg:hidden">
          <div className="bg-card-light rounded-2xl p-4 space-y-3 shadow-float border border-white/40 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      active
                        ? 'bg-dark text-white font-semibold'
                        : 'text-dark hover:bg-white/60'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-dark/10 flex flex-col gap-2">
              <a
                href="tel:+966599326936"
                className="w-full py-2.5 px-4 rounded-pill bg-white/80 text-dark font-medium text-xs flex items-center justify-center space-x-2"
              >
                <Phone className="w-3.5 h-3.5 text-luxury-accent" />
                <span dir="ltr">+966 59 932 6936</span>
              </a>
              <Link
                href="/visas"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-pill-primary w-full py-3 text-center text-xs justify-center gap-1.5"
              >
                <span>{tCommon('applyNow')}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-luxury-highlight" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
