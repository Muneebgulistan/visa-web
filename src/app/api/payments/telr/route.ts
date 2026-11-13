import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { amount, currency = 'SAR', title, customerName, customerEmail } = await request.json();

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: 'Valid amount is required.' }, { status: 400 });
    }

    const storeId = process.env.TELR_STORE_ID;
    const authKey = process.env.TELR_AUTH_KEY;
    const isConfigured = storeId && authKey && !storeId.includes('placeholder');
    const orderRef = `TELR-${Date.now()}`;

    if (isConfigured) {
      try {
        const telrRes = await fetch('https://secure.telr.com/gateway/order.json', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            method: 'create',
            store: storeId,
            authkey: authKey,
            order: {
              ref: orderRef,
              amount: String(amount),
              currency,
              description: title || 'SK Visa Processing Service',
              test: process.env.TELR_TEST_MODE || '1',
            },
            customer: {
              name: { forenames: customerName || 'Valued', surname: 'Client' },
              email: customerEmail || 'info@skvisaexperts.com',
            },
            return: {
              authorised: `${request.nextUrl.origin}/en/contact?payment=telr_authorised`,
              declined: `${request.nextUrl.origin}/en/visas?payment=telr_declined`,
              cancelled: `${request.nextUrl.origin}/en/visas?payment=telr_cancelled`,
            },
          }),
        });

        const telrData = await telrRes.json();
        if (telrData.order?.url) {
          return NextResponse.json({
            gateway: 'telr',
            orderRef: telrData.order.ref,
            redirectUrl: telrData.order.url,
          });
        }
      } catch (telrErr) {
        console.error('[Telr API Error]', telrErr);
      }
    }

    return NextResponse.json({
      gateway: 'telr',
      status: 'order_prepared',
      orderRef,
      amount,
      currency,
      message: 'Telr transaction order created on server. Configure TELR_STORE_ID & TELR_AUTH_KEY for live redirection.',
      demoCheckoutUrl: `https://secure.telr.com/gateway/mock_portal?ref=${orderRef}`,
    });
  } catch (error: any) {
    console.error('[Telr Route Error]', error);
    return NextResponse.json({ error: 'Failed to initiate Telr payment.' }, { status: 500 });
  }
}
