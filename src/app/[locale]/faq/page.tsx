import React from 'react';
import { useTranslations } from 'next-intl';
import FaqAccordion from '@/components/FaqAccordion';
import { Link } from '@/i18n/routing';
import { HelpCircle, Phone, MessageCircle } from 'lucide-react';

export default function FaqPage() {
  const t = useTranslations('faq');

  const allFaqs = [
    {
      id: 'timeline-q1',
      question: t('q1'),
      answer: t('a1'),
      category: 'Timelines & Deadlines',
    },
    {
      id: 'assurance-q2',
      question: t('q2'),
      answer: t('a2'),
      category: 'Guarantees & Approvals',
    },
    {
      id: 'itineraries-q3',
      question: t('q3'),
      answer: t('a3'),
      category: 'Flights & Hotel Vouchers',
    },
    {
      id: 'payments-q4',
      question: t('q4'),
      answer: t('a4'),
      category: 'Payment Gateways',
    },
    {
      id: 'location-q5',
      question: t('q5'),
      answer: t('a5'),
      category: 'Office & Working Hours',
    },
    {
      id: 'extra-iqama',
      question: 'Can expatriate residents holding Saudi Iqamas apply through your office?',
      answer:
        'Yes. We regularly handle visa applications for expatriate professionals, doctors, engineers, and families resident in Saudi Arabia. We ensure exit re-entry permits, chamber-certified employer letters, and local bank statements meet strict consular standards.',
      category: 'Eligibility',
    },
    {
      id: 'extra-biometrics',
      question: 'Do I still need to appear in person for biometrics at VFS or TLS in Riyadh?',
      answer:
        'For embassies that require fingerprint and photo capture (such as Schengen countries, the UK, and Canada), physical appearance at the visa application center in Riyadh is mandatory. SK Visa Experts prepares and schedules your appointment, arranges all papers in the exact sequence requested, and prepares you thoroughly for the visit.',
      category: 'Appointments',
    },
    {
      id: 'extra-umrah',
      question: 'Do you assist with Nusuk permits and Umrah packages for visitors?',
      answer:
        'Yes. We provide complete Umrah and spiritual visit logistics, including verified hotel reservations in Makkah (facing Haram) and Madinah, private GMC transfers, high-speed Haramain rail tickets, and Nusuk permit assistance.',
      category: 'Umrah & Pilgrimage',
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-coral uppercase tracking-widest block">
          Knowledge Base & Help Desk
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-dark tracking-tight">
          {t('title')}
        </h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {t('subtitle')}
        </p>
      </div>

      {/* Accordion List */}
      <FaqAccordion items={allFaqs} defaultOpenIndex={0} />

      {/* Still Have Questions Box */}
      <div className="bg-mint rounded-[14px] p-8 border border-teal-100 max-w-3xl mx-auto text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-teal text-white flex items-center justify-center mx-auto">
          <HelpCircle className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-teal-900">
          Still Have Questions Regarding Your Visa Case?
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto">
          Every consular case has unique nuances. Speak with our designated Riyadh case officer directly via phone or WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="https://wa.me/966599326936"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-[14px] bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center space-x-1.5 transition-colors shadow"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp (+966 59 932 6936)</span>
          </a>
          <a
            href="tel:+966599326936"
            className="w-full sm:w-auto px-5 py-2.5 rounded-[14px] bg-teal hover:bg-teal-800 text-white font-semibold text-xs flex items-center justify-center space-x-1.5 transition-colors shadow"
          >
            <Phone className="w-4 h-4" />
            <span dir="ltr">Call +966 59 932 6936</span>
          </a>
        </div>
      </div>
    </div>
  );
}
