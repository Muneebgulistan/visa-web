'use client';

import React, { useState } from 'react';
import {
  CreditCard,
  Building2,
  Wallet,
  ShieldCheck,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Copy,
  Loader2,
} from 'lucide-react';
import { PaymentGatewayId } from '@/lib/types';

interface PaymentSelectorProps {
  amount: number;
  currency?: string;
  itemTitle?: string;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  onSuccess?: (details: any) => void;
  onClose?: () => void;
}

interface GatewayInfo {
  id: PaymentGatewayId;
  name: string;
  category: 'card' | 'wallet' | 'bank' | 'regional';
  description: string;
  badge?: string;
  icon: any;
}

const GATEWAYS: GatewayInfo[] = [
  {
    id: 'stripe',
    name: 'Stripe',
    category: 'card',
    description: 'International Credit / Debit Cards, Apple Pay & Google Pay',
    badge: 'Global',
    icon: CreditCard,
  },
  {
    id: 'tap',
    name: 'Tap Payments',
    category: 'regional',
    description: 'Saudi Mada, Apple Pay, KNET, Benefit & GCC Cards',
    badge: 'GCC / Mada',
    icon: CreditCard,
  },
  {
    id: 'paytabs',
    name: 'PayTabs',
    category: 'regional',
    description: 'Mada, Visa, Mastercard, OmanNet & Apple Pay',
    badge: 'Saudi Arabia',
    icon: CreditCard,
  },
  {
    id: 'telr',
    name: 'Telr',
    category: 'regional',
    description: 'Middle East & International eCommerce Gateway',
    badge: 'Regional',
    icon: CreditCard,
  },
  {
    id: 'paypal',
    name: 'PayPal',
    category: 'wallet',
    description: 'PayPal Balance & Linked Credit / Debit Cards',
    badge: 'Global Wallet',
    icon: Wallet,
  },
  {
    id: 'bank-transfer',
    name: 'Saudi Bank Transfer (IBAN)',
    category: 'bank',
    description: 'Direct wire to Al Rajhi / SNB with reference slip',
    badge: 'Zero Processing Fees',
    icon: Building2,
  },
  {
    id: 'jazzcash',
    name: 'JazzCash',
    category: 'wallet',
    description: 'JazzCash Mobile Account & Voucher Payments',
    badge: 'Pakistan',
    icon: Wallet,
  },
  {
    id: 'easypaisa',
    name: 'Easypaisa',
    category: 'wallet',
    description: 'Easypaisa Mobile Wallet & Direct Billing',
    badge: 'Pakistan',
    icon: Wallet,
  },
];

export default function PaymentSelector({
  amount,
  currency = 'SAR',
  itemTitle = 'Visa Application Processing',
  customerName = '',
  customerEmail = '',
  customerPhone = '',
  onSuccess,
  onClose,
}: PaymentSelectorProps) {
  const [selectedGateway, setSelectedGateway] = useState<PaymentGatewayId>('stripe');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);
  const [copiedIban, setCopiedIban] = useState(false);

  const handleProcessPayment = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const endpoint = `/api/payments/${selectedGateway}`;
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          currency,
          title: itemTitle,
          customerName,
          customerEmail,
          customerPhone,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to initiate payment session.');
      }

      setResult(data);

      if (data.redirectUrl) {
        // Redirect to hosted payment checkout in 1.5s
        setTimeout(() => {
          window.location.href = data.redirectUrl;
        }, 1200);
      }

      if (onSuccess) {
        onSuccess(data);
      }
    } catch (err: any) {
      setError(err.message || 'Payment initiation error.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIban(true);
    setTimeout(() => setCopiedIban(false), 2000);
  };

  return (
    <div className="bg-white rounded-[14px] border border-gray-100 shadow-xl overflow-hidden max-w-2xl w-full mx-auto">
      {/* Header */}
      <div className="bg-teal-700 text-white p-6">
        <div className="flex justify-between items-start">
          <div>
            <span className="inline-block text-xs uppercase tracking-wider bg-teal-800/80 text-teal-100 px-2.5 py-1 rounded-full mb-2">
              Secure Checkout
            </span>
            <h3 className="text-xl font-bold">{itemTitle}</h3>
            <p className="text-teal-100 text-sm mt-1">
              Select one of our 8 authorized payment methods
            </p>
          </div>
          <div className="text-right">
            <span className="text-xs text-teal-200 block">Total Due</span>
            <span className="text-2xl font-extrabold text-white">
              {amount} {currency}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Gateway Selection Grid */}
        <div>
          <label className="block text-sm font-semibold text-dark mb-3">
            Choose Payment Method (All 8 Supported Gateways)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-1">
            {GATEWAYS.map((gw) => {
              const Icon = gw.icon;
              const isSelected = selectedGateway === gw.id;
              return (
                <button
                  key={gw.id}
                  type="button"
                  onClick={() => {
                    setSelectedGateway(gw.id);
                    setResult(null);
                    setError(null);
                  }}
                  className={`flex items-start p-3.5 rounded-[14px] border text-left transition-all relative ${
                    isSelected
                      ? 'border-teal bg-teal-50/70 ring-2 ring-teal/30 shadow-sm'
                      : 'border-gray-200 hover:border-teal/50 hover:bg-gray-50'
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg mr-3 ${
                      isSelected ? 'bg-teal text-white' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm text-dark truncate">
                        {gw.name}
                      </span>
                      {gw.badge && (
                        <span className="text-[10px] font-medium bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded">
                          {gw.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                      {gw.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="p-4 rounded-[14px] bg-red-50 border border-red-200 text-red-700 flex items-center space-x-2 text-sm">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Result & Instructions */}
        {result && (
          <div className="p-5 rounded-[14px] bg-teal-50 border border-teal-200 space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle2 className="w-6 h-6 text-teal-700 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-teal-900">
                  {result.gateway === 'bank-transfer'
                    ? 'Bank Transfer Instructions Generated'
                    : 'Payment Session Created'}
                </h4>
                <p className="text-sm text-teal-800 mt-1">
                  {result.message || 'Session ready. Proceed with the instructions below.'}
                </p>
              </div>
            </div>

            {/* Bank details preview */}
            {result.bankDetails && (
              <div className="bg-white p-4 rounded-xl border border-teal-100 text-xs space-y-2.5">
                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <span className="text-gray-500">Bank:</span>
                  <span className="font-semibold text-dark">{result.bankDetails.bankName}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <span className="text-gray-500">Account Name:</span>
                  <span className="font-semibold text-dark">{result.bankDetails.accountName}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <span className="text-gray-500">IBAN:</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono font-bold text-dark">{result.bankDetails.iban}</span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(result.bankDetails.iban)}
                      className="text-teal hover:text-teal-800 p-1"
                      title="Copy IBAN"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <span className="text-gray-500">Payment Reference:</span>
                  <span className="font-mono font-bold text-coral-600">
                    {result.bankDetails.referenceNumber}
                  </span>
                </div>
                {copiedIban && (
                  <p className="text-emerald-600 text-[11px] font-medium text-right">
                    ✓ IBAN copied to clipboard
                  </p>
                )}
                <div className="pt-2">
                  <a
                    href={result.bankDetails.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg text-xs transition-colors"
                  >
                    Confirm via WhatsApp (+966 59 932 6936)
                  </a>
                </div>
              </div>
            )}

            {/* External / Demo Redirection Link */}
            {(result.redirectUrl || result.demoCheckoutUrl) && (
              <div className="pt-2">
                <a
                  href={result.redirectUrl || result.demoCheckoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-2.5 bg-coral hover:bg-coral-600 text-white font-semibold rounded-lg text-sm transition-colors shadow-sm"
                >
                  <span>Open Gateway Checkout Page</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            )}
          </div>
        )}

        {/* Action Button */}
        {!result && (
          <button
            type="button"
            onClick={handleProcessPayment}
            disabled={loading}
            className="w-full py-3.5 px-6 rounded-[14px] bg-coral hover:bg-coral-600 text-white font-semibold text-base transition-all shadow-md hover:shadow-lg disabled:opacity-70 flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Processing Server Request...</span>
              </>
            ) : (
              <>
                <ShieldCheck className="w-5 h-5" />
                <span>
                  Proceed with {GATEWAYS.find((g) => g.id === selectedGateway)?.name}
                </span>
              </>
            )}
          </button>
        )}

        {/* Security badge footer */}
        <div className="flex items-center justify-center text-xs text-gray-500 space-x-1.5 pt-1">
          <ShieldCheck className="w-4 h-4 text-teal" />
          <span>Server-side encryption. No card details stored.</span>
        </div>
      </div>
    </div>
  );
}
