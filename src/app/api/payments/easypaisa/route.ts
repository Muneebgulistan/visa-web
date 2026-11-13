import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { amount, currency = 'PKR', title, customerEmail, customerMobile } = await request.json();

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: 'Valid amount is required.' }, { status: 400 });
    }

    const storeId = process.env.EASYPAISA_STORE_ID;
    const isConfigured = storeId && !storeId.includes('placeholder');
    const orderId = `EP-${Date.now()}`;

    const paymentData = {
      storeId: storeId || 'STORE_MOCK_EASYPAISA',
      orderId,
      transactionAmount: String(amount),
      mobileAccountNo: customerMobile || '',
      emailAddress: customerEmail || '',
      transactionType: 'MA',
      description: title || 'Visa Application Support',
      postBackURL: process.env.EASYPAISA_POST_BACK_URL || 'http://localhost:3000/api/payments/easypaisa/callback',
    };

    return NextResponse.json({
      gateway: 'easypaisa',
      status: 'initiated',
      orderId,
      amount,
      currency,
      configured: Boolean(isConfigured),
      instructions: 'Authorize payment via your Easypaisa app or enter your registered Easypaisa mobile number.',
      paymentData,
    });
  } catch (error: any) {
    console.error('[Easypaisa Route Error]', error);
    return NextResponse.json({ error: 'Failed to initiate Easypaisa payment.' }, { status: 500 });
  }
}
