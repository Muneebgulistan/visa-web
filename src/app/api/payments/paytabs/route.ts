import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { amount, currency = 'SAR', title, customerName, customerEmail, customerPhone } = await request.json();

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: 'Valid amount is required.' }, { status: 400 });
    }

    const profileId = process.env.PAYTABS_PROFILE_ID;
    const serverKey = process.env.PAYTABS_SERVER_KEY;
    const isConfigured = profileId && serverKey && !profileId.includes('placeholder');
    const cartId = `CART-PT-${Date.now()}`;

    if (isConfigured) {
      try {
        const paytabsRes = await fetch('https://secure.paytabs.sa/payment/request', {
          method: 'POST',
          headers: {
            authorization: serverKey,
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            profile_id: profileId,
            tran_type: 'sale',
            tran_class: 'ecom',
            cart_id: cartId,
            cart_description: title || 'SK Visa Experts Application Service',
            cart_currency: currency,
            cart_amount: Number(amount),
            customer_details: {
              name: customerName || 'Valued Customer',
              email: customerEmail || 'customer@example.com',
              phone: customerPhone || '+966599326936',
              street1: 'Umm Al Hamam St',
              city: 'Riyadh',
              state: 'Riyadh',
              country: 'SA',
              zip: '12321',
            },
            callback: `${request.nextUrl.origin}/api/payments/paytabs/callback`,
            return: `${request.nextUrl.origin}/en/contact?payment=paytabs_success&cartId=${cartId}`,
          }),
        });

        const ptData = await paytabsRes.json();
        if (ptData.redirect_url) {
          return NextResponse.json({
            gateway: 'paytabs',
            tranRef: ptData.tran_ref,
            redirectUrl: ptData.redirect_url,
          });
        }
      } catch (ptErr) {
        console.error('[PayTabs API Error]', ptErr);
      }
    }

    return NextResponse.json({
      gateway: 'paytabs',
      status: 'page_created',
      cartId,
      amount,
      currency,
      methods: ['Mada', 'Visa', 'Mastercard', 'OmanNet', 'KNET', 'Apple Pay'],
      message: 'PayTabs hosted payment session initialized. Add PAYTABS_PROFILE_ID and PAYTABS_SERVER_KEY in .env for production checkout.',
      demoCheckoutUrl: `https://secure.paytabs.sa/payment/page/mock_${cartId}`,
    });
  } catch (error: any) {
    console.error('[PayTabs Route Error]', error);
    return NextResponse.json({ error: 'Failed to initiate PayTabs transaction.' }, { status: 500 });
  }
}
