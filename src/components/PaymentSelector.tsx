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
  ArrowUpRight,
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
    badge: 'Zero Fees',
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
    <div className="bg-card-light bento-card rounded-2xl border border-white/60 shadow-soft overflow-hidden max-w-2xl w-full mx-auto">
      {/* Header */}
      <div className="bg-card-dark text-white p-5 sm:p-6 border-b border-white/10">
        <div className="flex justify-between items-start">
          <div>
            <span className="tag-coral text-[10px] py-0.5 px-2 mb-1">
              Secure Protocol
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white mt-1">{itemTitle}</h3>
            <p className="text-white/60 text-xs mt-0.5">
              Select one of our 8 authorized payment options
            </p>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-white/50 block">Amount</span>
            <span className="text-xl sm:text-2xl font-bold text-white">
              {amount} <span className="text-xs font-normal text-white/70">{currency}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-5">
        {/* Gateway Selection Grid */}
        <div>
          <label className="block text-xs font-medium text-dark-200 mb-2">
            Payment Methods
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-72 overflow-y-auto pr-1">
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
                  className={`flex items-start p-3 rounded-2xl border text-left transition-all relative ${
                    isSelected
                      ? 'border-dark bg-white ring-2 ring-dark shadow-soft'
                      : 'border-white/60 bg-white/70 hover:bg-white'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mr-2.5 rtl:mr-0 rtl:ml-2.5 flex-shrink-0 ${
                      isSelected ? 'bg-dark text-white' : 'bg-dark/5 text-dark'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs text-dark truncate">
                        {gw.name}
                      </span>
                      {gw.badge && (
                        <span className="text-[9px] font-medium tag-coral py-0 px-1.5">
                          {gw.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-dark-200 mt-0.5 line-clamp-1">
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
          <div className="p-3 rounded-2xl bg-red-100 border border-red-200 text-red-900 flex items-center space-x-2 text-xs">
            <AlertCircle className="w-4 h-4 flex-shrink-0 text-luxury-badge" />
            <span>{error}</span>
          </div>
        )}

        {/* Result & Instructions */}
        {result && (
          <div className="p-5 rounded-2xl bg-white border border-white/60 space-y-3 shadow-soft">
            <div className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-5 h-5 text-luxury-accent flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-dark text-sm">
                  {result.gateway === 'bank-transfer'
                    ? 'Bank Transfer Instructions Generated'
                    : 'Payment Session Initialized'}
                </h4>
                <p className="text-xs text-dark-200 mt-0.5">
                  {result.message || 'Proceed with the details below.'}
                </p>
              </div>
            </div>

            {/* Bank details preview */}
            {result.bankDetails && (
              <div className="bg-card-light/60 p-4 rounded-xl border border-white/60 text-xs space-y-2">
                <div className="flex justify-between items-center py-1 border-b border-dark/5">
                  <span className="text-dark-200">Bank:</span>
                  <span className="font-semibold text-dark">{result.bankDetails.bankName}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-dark/5">
                  <span className="text-dark-200">Account:</span>
                  <span className="font-semibold text-dark">{result.bankDetails.accountName}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-dark/5">
                  <span className="text-dark-200">IBAN:</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono font-bold text-dark">{result.bankDetails.iban}</span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(result.bankDetails.iban)}
                      className="text-dark hover:text-black p-1"
                      title="Copy IBAN"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-dark/5">
                  <span className="text-dark-200">Reference:</span>
                  <span className="font-mono font-bold text-dark">
                    {result.bankDetails.referenceNumber}
                  </span>
                </div>
                {copiedIban && (
                  <p className="text-emerald-700 text-[11px] font-medium text-right">
                    ✓ IBAN copied
                  </p>
                )}
                <div className="pt-2">
                  <a
                    href={result.bankDetails.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill-primary w-full py-2 text-xs gap-1.5 justify-center bg-dark text-white"
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
                  className="btn-pill-primary w-full py-2.5 text-xs gap-1.5 justify-center shadow-soft"
                >
                  <span>Open Gateway Checkout Page</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-luxury-highlight" />
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
            className="btn-pill-primary w-full py-3.5 text-xs sm:text-sm gap-2 shadow-soft disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing Server Request...</span>
              </>
            ) : (
              <>
                <span>
                  Proceed with {GATEWAYS.find((g) => g.id === selectedGateway)?.name}
                </span>
                <ArrowUpRight className="w-4 h-4 text-luxury-highlight" />
              </>
            )}
          </button>
        )}

        {/* Security badge footer */}
        <div className="flex items-center justify-center text-[11px] text-dark-200 space-x-1.5 pt-1">
          <ShieldCheck className="w-3.5 h-3.5 text-luxury-accent" />
          <span>Server-side encryption. No raw card credentials stored.</span>
        </div>
      </div>
    </div>
  );
}
