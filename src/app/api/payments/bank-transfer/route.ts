import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { amount, currency = 'SAR', title, customerName, customerEmail } = await request.json();

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: 'Valid amount is required.' }, { status: 400 });
    }

    const transferRef = `SK-BANK-${Date.now().toString(36).toUpperCase()}`;

    const bankDetails = {
      bankName: process.env.BANK_NAME || 'Al Rajhi Bank / Saudi National Bank (SNB)',
      accountName: process.env.BANK_ACCOUNT_NAME || 'SK Visa Experts Services Co.',
      iban: process.env.BANK_IBAN || 'SA8480000204608010123456',
      swift: process.env.BANK_SWIFT || 'RJHIXXRI',
      currency: currency || 'SAR',
      referenceNumber: transferRef,
      amount,
      serviceTitle: title || 'Visa Application File Preparation',
      instructions: [
        'Please quote the reference number above in your bank transfer description.',
        'Take a screenshot or save the official transaction receipt / transfer slip.',
        'Send the transfer receipt via WhatsApp to +966 59 932 6936 or email info@skvisaexperts.com.',
        'Our Riyadh accounts team will verify the funds and immediately activate your visa case file.',
      ],
      whatsappNumber: '+966 59 932 6936',
      whatsappUrl: `https://wa.me/966599326936?text=${encodeURIComponent(
        `Hello SK Visa Experts, I have initiated a bank transfer of ${amount} ${currency} for Reference: ${transferRef}`
      )}`,
    };

    return NextResponse.json({
      gateway: 'bank-transfer',
      status: 'pending_transfer',
      referenceNumber: transferRef,
      amount,
      currency,
      bankDetails,
    });
  } catch (error: any) {
    console.error('[Bank Transfer Route Error]', error);
    return NextResponse.json({ error: 'Failed to process bank transfer request.' }, { status: 500 });
  }
}
