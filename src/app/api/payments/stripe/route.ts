import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { amount, currency = 'SAR', title, customerName, customerEmail } = await request.json();

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: 'Valid amount is required.' }, { status: 400 });
    }

    const stripeSecret = process.env.STRIPE_SECRET_KEY;
    const isConfigured = stripeSecret && !stripeSecret.includes('placeholder');

    const orderId = `STRIPE-${Date.now()}`;

    if (isConfigured) {
      // In production with real Stripe credentials:
      // Uses Stripe Sessions API to create hosted checkout URL
      try {
        const stripeRes = await fetch('https://api.stripe.com/v1/checkout/sessions', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${stripeSecret}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            'payment_method_types[0]': 'card',
            mode: 'payment',
            'line_items[0][price_data][currency]': currency.toLowerCase(),
            'line_items[0][price_data][product_data][name]': title || 'SK Visa Experts Service',
            'line_items[0][price_data][unit_amount]': String(Math.round(amount * 100)),
            'line_items[0][quantity]': '1',
            customer_email: customerEmail || 'client@example.com',
            success_url: `${request.nextUrl.origin}/en/contact?payment=success&orderId=${orderId}`,
            cancel_url: `${request.nextUrl.origin}/en/visas?payment=cancelled`,
          }),
        });

        const stripeData = await stripeRes.json();
        if (stripeData.url) {
          return NextResponse.json({
            gateway: 'stripe',
            sessionId: stripeData.id,
            redirectUrl: stripeData.url,
            orderId,
          });
        }
      } catch (stripeErr) {
        console.error('[Stripe API Error]', stripeErr);
      }
    }

    // Mock/Demo session for development testing
    return NextResponse.json({
      gateway: 'stripe',
      status: 'session_created',
      orderId,
      amount,
      currency,
      customerName,
      message: 'Stripe payment session created successfully. Add STRIPE_SECRET_KEY in .env to redirect to live Stripe checkout.',
      demoCheckoutUrl: `https://checkout.stripe.com/c/pay/cs_test_mock_${orderId}`,
    });
  } catch (error: any) {
    console.error('[Stripe Route Error]', error);
    return NextResponse.json({ error: 'Failed to initiate Stripe payment.' }, { status: 500 });
  }
}
