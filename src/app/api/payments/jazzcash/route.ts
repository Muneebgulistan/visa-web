import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { amount, currency = 'PKR', title, customerName, customerMobile } = await request.json();

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: 'Valid amount is required.' }, { status: 400 });
    }

    const merchantId = process.env.JAZZCASH_MERCHANT_ID;
    const isConfigured = merchantId && !merchantId.includes('placeholder');
    const txnRefNo = `T${Date.now()}`;

    // JazzCash payload structure
    const payload = {
      pp_Version: '1.1',
      pp_TxnType: 'MWALLET',
      pp_MerchantID: merchantId || 'MC_MOCK_JAZZCASH',
      pp_SubMerchantID: '',
      pp_TxnRefNo: txnRefNo,
      pp_Amount: String(Math.round(amount * 100)),
      pp_TxnCurrency: currency,
      pp_TxnDateTime: new Date().toISOString().replace(/[-:T.Z]/g, '').slice(0, 14),
      pp_BillReference: `BILL-${txnRefNo}`,
      pp_Description: title || 'SK Visa Experts Processing',
      pp_ReturnURL: process.env.JAZZCASH_RETURN_URL || 'http://localhost:3000/api/payments/jazzcash/callback',
      pp_MobileNumber: customerMobile || '',
      pp_CustomerName: customerName || '',
    };

    return NextResponse.json({
      gateway: 'jazzcash',
      status: 'initiated',
      txnRefNo,
      amount,
      currency,
      configured: Boolean(isConfigured),
      instructions: 'Pay via JazzCash Mobile Account or Voucher. Use reference number for tracking.',
      paymentPayload: payload,
    });
  } catch (error: any) {
    console.error('[JazzCash Route Error]', error);
    return NextResponse.json({ error: 'Failed to initiate JazzCash transaction.' }, { status: 500 });
  }
}
