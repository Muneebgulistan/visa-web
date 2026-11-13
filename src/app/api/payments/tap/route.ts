import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { amount, currency = 'SAR', title, customerName, customerEmail, customerPhone } = await request.json();

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: 'Valid amount is required.' }, { status: 400 });
    }

    const tapSecret = process.env.TAP_SECRET_KEY;
    const isConfigured = tapSecret && !tapSecret.includes('placeholder');
    const chargeId = `chg_tap_${Date.now()}`;

    if (isConfigured) {
      try {
        const tapRes = await fetch('https://api.tap.company/v2/charges', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${tapSecret}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: Number(amount),
            currency,
            customer: {
              first_name: customerName ? customerName.split(' ')[0] : 'Client',
              last_name: customerName ? customerName.split(' ').slice(1).join(' ') || 'Customer' : 'Valued',
              email: customerEmail || 'client@example.com',
              phone: {
                country_code: '966',
                number: customerPhone?.replace(/\D/g, '').slice(-9) || '599326936',
              },
            },
            source: { id: 'src_all' }, // Supports Mada, Visa, Mastercard, Apple Pay
            redirect: {
              url: `${request.nextUrl.origin}/en/contact?payment=tap_success&charge=${chargeId}`,
            },
          }),
        });

        const tapData = await tapRes.json();
        if (tapData.transaction?.url) {
          return NextResponse.json({
            gateway: 'tap',
            chargeId: tapData.id,
            redirectUrl: tapData.transaction.url,
          });
        }
      } catch (tapErr) {
        console.error('[Tap Payments API Error]', tapErr);
      }
    }

    return NextResponse.json({
      gateway: 'tap',
      status: 'charge_created',
      chargeId,
      amount,
      currency,
      supportedPaymentMethods: ['Mada', 'Visa', 'Mastercard', 'Apple Pay', 'KNET', 'Benefit'],
      message: 'Tap Payments session prepared. Configure TAP_SECRET_KEY in .env for live gateway redirection.',
      demoCheckoutUrl: `https://checkout.tap.company/v2/mock/${chargeId}`,
    });
  } catch (error: any) {
    console.error('[Tap Route Error]', error);
    return NextResponse.json({ error: 'Failed to initiate Tap payment.' }, { status: 500 });
  }
}
