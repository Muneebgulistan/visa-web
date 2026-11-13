'use client';

import React, { useTransition } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Globe } from 'lucide-react';
import { Locale } from '@/i18n/routing';

const LOCALE_NAMES: Record<Locale, { label: string; native: string; flag: string }> = {
  en: { label: 'English', native: 'English', flag: '🇬🇧' },
  ar: { label: 'Arabic', native: 'العربية', flag: '🇸🇦' },
  fr: { label: 'French', native: 'Français', flag: '🇫🇷' },
  de: { label: 'German', native: 'Deutsch', flag: '🇩🇪' },
};

export default function LanguageSwitcher() {
  const currentLocale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (nextLocale: Locale) => {
    if (nextLocale === currentLocale) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="relative inline-flex items-center text-xs">
      <div className="flex items-center space-x-1.5 rtl:space-x-reverse bg-white/70 hover:bg-white px-3 py-1.5 rounded-pill transition-all border border-white/50 shadow-subtle">
        <Globe className="w-3.5 h-3.5 text-luxury-accent" />
        <select
          value={currentLocale}
          disabled={isPending}
          onChange={(e) => handleLocaleChange(e.target.value as Locale)}
          aria-label="Select Language"
          className="bg-transparent font-medium text-dark focus:outline-none cursor-pointer text-xs pr-1"
        >
          {Object.entries(LOCALE_NAMES).map(([loc, info]) => (
            <option key={loc} value={loc} className="text-dark bg-white">
              {info.flag} {info.native}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
