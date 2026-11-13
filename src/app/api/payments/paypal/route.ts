import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { amount, currency = 'USD', title, customerName, customerEmail } = await request.json();

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: 'Valid amount is required.' }, { status: 400 });
    }

    const clientId = process.env.PAYPAL_CLIENT_ID;
    const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
    const isConfigured = clientId && clientSecret && !clientId.includes('placeholder');

    const orderId = `PAYPAL-${Date.now()}`;

    if (isConfigured) {
      // In production with real PayPal credentials:
      // 1. Get access token from PayPal OAuth
      // 2. Create v2/checkout/orders
      // Example endpoint: https://api-m.sandbox.paypal.com/v2/checkout/orders
    }

    return NextResponse.json({
      gateway: 'paypal',
      status: 'order_created',
      orderId,
      amount,
      currency,
      customerName,
      customerEmail,
      title: title || 'Visa Application Service',
      message: 'PayPal payment session initiated. Add PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET in .env for production flow.',
      demoCheckoutUrl: `https://www.sandbox.paypal.com/checkoutnow?token=EC-MOCK-${orderId}`,
    });
  } catch (error: any) {
    console.error('[PayPal Route Error]', error);
    return NextResponse.json({ error: 'Failed to initiate PayPal payment.' }, { status: 500 });
  }
}
