import React from 'react';
import { useTranslations } from 'next-intl';
import FaqAccordion from '@/components/FaqAccordion';
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
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      {/* Header: Bento Light Card */}
      <div className="bg-card-light bento-card p-8 sm:p-12 border border-white/50 text-center max-w-4xl mx-auto space-y-4 shadow-soft">
        <span className="tag-coral text-xs mb-1">
          Knowledge Base &amp; Protocol
        </span>
        <h1 className="text-3xl sm:text-5xl font-normal text-dark tracking-tight">
          <span className="font-light italic">Frequently</span> Addressed Inquiries
        </h1>
        <p className="text-xs sm:text-sm text-dark-200 leading-relaxed max-w-xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      {/* Accordion List */}
      <FaqAccordion items={allFaqs} defaultOpenIndex={0} />

      {/* Still Have Questions Box: Bento Dark Card */}
      <div className="bg-card-dark text-white bento-card p-8 sm:p-10 border border-white/10 max-w-3xl mx-auto text-center space-y-4 shadow-float">
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto text-white">
          <HelpCircle className="w-6 h-6 text-luxury-highlight" />
        </div>
        <h3 className="text-lg sm:text-xl font-normal text-white">
          <span className="font-light italic">Direct Questions</span> Regarding Your Dossier?
        </h3>
        <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto">
          Every consular case has unique nuances. Speak with our designated Riyadh case officer directly via phone or WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="https://wa.me/966599326936"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-primary w-full sm:w-auto py-2.5 px-5 text-xs gap-1.5 bg-dark border border-white/20 text-white hover:bg-black"
          >
            <MessageCircle className="w-4 h-4 text-luxury-highlight" />
            <span>WhatsApp (+966 59 932 6936)</span>
          </a>
          <a
            href="tel:+966599326936"
            className="btn-pill-primary w-full sm:w-auto py-2.5 px-5 text-xs gap-1.5 bg-white text-dark hover:bg-white/90"
          >
            <Phone className="w-3.5 h-3.5 text-dark" />
            <span dir="ltr">Call +966 59 932 6936</span>
          </a>
        </div>
      </div>
    </div>
  );
}
