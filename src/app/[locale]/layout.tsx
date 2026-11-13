import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LocalBusinessJsonLd from '@/components/LocalBusinessJsonLd';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://skvisaexperts.com'),
  title: {
    default: 'SK Visa Experts | Riyadh, Saudi Arabia',
    template: '%s | SK Visa Experts',
  },
  description:
    'SK Visa Experts is Riyadh’s premier visa and travel consultancy in Umm Al Hamam Al Sharqi. Complete visa file preparation, document review, flight & hotel reservations, and Umrah packages. Rated 4.4 from 71 Google reviews.',
  keywords: [
    'Visa Riyadh',
    'SK Visa Experts',
    'Schengen Visa Saudi Arabia',
    'UK Visa Riyadh',
    'USA Visa Riyadh',
    'Umrah Visa',
    'Hotel reservations for visa',
    'Flight itinerary visa',
  ],
  authors: [{ name: 'SK Visa Experts Co.' }],
  openGraph: {
    title: 'SK Visa Experts | Trusted Visa & Travel Consultants in Riyadh',
    description:
      'Complete visa file preparation, verified document review, travel itineraries, and 8 secure payment gateways in Riyadh, Saudi Arabia.',
    url: 'https://skvisaexperts.com',
    siteName: 'SK Visa Experts',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SK Visa Experts | Riyadh, Saudi Arabia',
    description: 'Premier visa and travel consultancy. Rated 4.4 on Google.',
  },
  alternates: {
    canonical: 'https://skvisaexperts.com',
    languages: {
      en: '/en',
      ar: '/ar',
      fr: '/fr',
      de: '/de',
    },
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const isRtl = locale === 'ar';
  const messages = await getMessages();

  return (
    <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'} className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-sage text-dark antialiased selection:bg-coral-300 selection:text-black">
        <NextIntlClientProvider messages={messages}>
          <LocalBusinessJsonLd />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
