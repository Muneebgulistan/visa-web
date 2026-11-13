# SK Visa Experts — Official Website

> **Riyadh's trusted visa file preparation and international travel consultancy.**
> Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and next-intl.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss)
![next-intl](https://img.shields.io/badge/next--intl-3.25-green)
![Vercel Ready](https://img.shields.io/badge/Vercel-Ready-black?logo=vercel)

---

## Table of Contents

1. [Business Information](#1-business-information)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Pages & Features](#4-pages--features)
5. [Local Development](#5-local-development)
6. [Environment Variables](#6-environment-variables)
7. [Payment Gateways](#7-payment-gateways)
8. [Email Configuration](#8-email-configuration)
9. [Internationalization (i18n)](#9-internationalization-i18n)
10. [SEO & Metadata](#10-seo--metadata)
11. [Deployment to Vercel](#11-deployment-to-vercel)
12. [Placeholder Content](#12-placeholder-content-needs-real-data-before-launch)
13. [Troubleshooting](#13-troubleshooting)
14. [Security Notes](#14-security-notes)

---

## 1. Business Information

| Field | Value |
|---|---|
| **Business Name** | SK Visa Experts |
| **Address** | Umm Al Hamam St, Umm Al Hamam Al Sharqi, Riyadh 12321, Saudi Arabia |
| **Phone / WhatsApp / Calls** | +966 59 932 6936 |
| **Opening Hours** | Saturday: 8:00 AM — *(Sun–Fri: to be confirmed)* |
| **Google Rating** | ⭐ 4.4 from 71 reviews |

**Core Services:**
- Complete visa file preparation
- Verified document review
- Cover letter and travel itinerary planning
- Flight and hotel reservation assistance
- General visa application support and guidance

---

## 2. Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 3 |
| **i18n** | next-intl 3.25 |
| **Icons** | lucide-react |
| **Email** | Resend *(primary)* / Nodemailer SMTP *(fallback)* |
| **Fonts** | Inter via `next/font/google` |
| **Deployment** | Vercel |

---

## 3. Project Structure

```
sk-visa-experts/
├── messages/                   # Translation files (all 4 locales)
│   ├── en.json                 #   English
│   ├── ar.json                 #   Arabic (RTL)
│   ├── fr.json                 #   French
│   └── de.json                 #   German
│
├── src/
│   ├── app/
│   │   ├── [locale]/           # All pages live under a locale segment
│   │   │   ├── layout.tsx      #   Root layout: Inter font, HTML dir, RTL
│   │   │   ├── page.tsx        #   Home page
│   │   │   ├── visas/          #   Visa catalogue + filter
│   │   │   ├── packages/       #   Umrah / Holiday / City packages
│   │   │   ├── hotels/         #   Hotel listings + date pickers
│   │   │   ├── airline/        #   Flight search + quote request
│   │   │   ├── about/          #   Company story, team, why us
│   │   │   ├── contact/        #   Map, phone, WhatsApp, enquiry form
│   │   │   ├── faq/            #   Accordion FAQ
│   │   │   ├── privacy/        #   Privacy policy (placeholder)
│   │   │   └── terms/          #   Terms of service (placeholder)
│   │   │
│   │   ├── api/
│   │   │   ├── enquiry/        #   POST /api/enquiry — email submissions
│   │   │   └── payments/
│   │   │       ├── stripe/     #   POST /api/payments/stripe
│   │   │       ├── paypal/     #   POST /api/payments/paypal
│   │   │       ├── jazzcash/   #   POST /api/payments/jazzcash
│   │   │       ├── easypaisa/  #   POST /api/payments/easypaisa
│   │   │       ├── bank-transfer/
│   │   │       ├── tap/        #   POST /api/payments/tap
│   │   │       ├── telr/       #   POST /api/payments/telr
│   │   │       └── paytabs/    #   POST /api/payments/paytabs
│   │   │
│   │   ├── sitemap.ts          # Dynamic sitemap for all locales
│   │   ├── robots.ts           # robots.txt
│   │   └── globals.css         # Global styles & Tailwind directives
│   │
│   ├── components/             # Reusable React components
│   │   ├── Header.tsx          #   Sticky nav, hamburger drawer, lang switcher
│   │   ├── Footer.tsx          #   Links, contact, social, legal
│   │   ├── FloatingWhatsApp.tsx#   Fixed WhatsApp button
│   │   ├── LanguageSwitcher.tsx#   Locale selector (preserves current page)
│   │   ├── LocalBusinessJsonLd.tsx # Schema.org LocalBusiness JSON-LD
│   │   ├── HomeSearchBar.tsx   #   Hero visa search (type + destination)
│   │   ├── EnquiryModal.tsx    #   Shared enquiry form modal
│   │   ├── PaymentSelector.tsx #   8-gateway payment modal (client UI only)
│   │   ├── FaqAccordion.tsx    #   Animated FAQ accordion
│   │   ├── VisaCard.tsx        #   Visa listing card
│   │   ├── VisaFilterView.tsx  #   Client-side filter for visas
│   │   ├── PackageCard.tsx     #   Package listing card
│   │   ├── PackageFilterView.tsx
│   │   ├── HotelCard.tsx       #   Hotel listing card
│   │   ├── HotelCatalogView.tsx
│   │   └── FlightSearchForm.tsx#   Flight search form
│   │
│   ├── data/
│   │   ├── visas.ts            # 10 visa listing objects
│   │   ├── packages.ts         # 6 packages (Umrah, holiday, city)
│   │   └── hotels.ts           # 6 hotel listings
│   │
│   ├── i18n/
│   │   ├── routing.ts          # Locale definitions (en, ar, fr, de)
│   │   └── request.ts          # getRequestConfig — loads messages
│   │
│   ├── lib/
│   │   └── types.ts            # Shared TypeScript interfaces
│   │
│   └── middleware.ts           # next-intl routing middleware
│
├── .env.example                # All required env keys (no real values)
├── .gitignore
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── README.md
```

---

## 4. Pages & Features

| Page | URL (English) | Key Features |
|---|---|---|
| **Home** | `/en` | Hero with visa search, trust stats, services, how-it-works, Google reviews, FAQ teaser, CTA |
| **Visas** | `/en/visas` | Filterable catalogue by visa type & destination, price, processing time, "Start application" |
| **Packages** | `/en/packages` | Umrah, holiday & city packages with inclusions, enquiry modal |
| **Hotels** | `/en/hotels` | Listings with city & price, check-in/out date pickers, enquiry modal |
| **Airline** | `/en/airline` | Flight search (from, to, date, class) → quote request |
| **About** | `/en/about` | Company story, team, why choose us |
| **Contact** | `/en/contact` | Embedded Google Map, phone, WhatsApp, office hours, enquiry form |
| **FAQ** | `/en/faq` | Accordion with common visa & travel questions |
| **Privacy** | `/en/privacy` | Placeholder — must be replaced with legal text |
| **Terms** | `/en/terms` | Placeholder — must be replaced with legal text |

**Global UI features:**
- 🌐 Language switcher (EN / AR / FR / DE) in the header — preserves current page
- 📱 Collapsible hamburger menu on mobile
- 💬 Floating WhatsApp button (bottom-right)
- ☎️ Click-to-call links using `tel:+966599326936`
- 🗺️ Embedded Google Map on Contact page
- 🌙 Arabic RTL layout with correct `dir="rtl"` and font

---

## 5. Local Development

### Prerequisites

- **Node.js** v18.17 or v20+ — [Download](https://nodejs.org/)
- **npm** (bundled with Node.js)

### Step 1 — Install dependencies

```bash
npm install
```

### Step 2 — Set up environment variables

```bash
# macOS / Linux
cp .env.example .env.local

# Windows (PowerShell)
Copy-Item .env.example .env.local
```

Then open `.env.local` and fill in the values you need for local testing. See [Section 6](#6-environment-variables) for the full list.

> **Tip:** For local testing of the enquiry form, only `RESEND_API_KEY` (or SMTP keys) and `EMAIL_TO` are needed. Payment routes will return mock responses without real gateway keys.

### Step 3 — Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the app auto-redirects to `/en`.

| Locale | URL |
|---|---|
| English | http://localhost:3000/en |
| Arabic (RTL) | http://localhost:3000/ar |
| French | http://localhost:3000/fr |
| German | http://localhost:3000/de |

### Step 4 — Production build (optional local test)

```bash
npm run build
npm run start
```

---

## 6. Environment Variables

Copy `.env.example` → `.env.local` and populate the values below.  
**Never commit `.env.local` to Git.** It is already listed in `.gitignore`.

```env
# ─── Email ───────────────────────────────────────────────────────────────────
# Option A: Resend (recommended)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

# Option B: Nodemailer / SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@email.com
SMTP_PASS=your_app_password

# Shared email settings
EMAIL_FROM=noreply@skvisaexperts.com
EMAIL_TO=info@skvisaexperts.com          # ← [PLACEHOLDER] real company inbox

# ─── Stripe ──────────────────────────────────────────────────────────────────
STRIPE_SECRET_KEY=sk_live_xxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxx

# ─── PayPal ──────────────────────────────────────────────────────────────────
PAYPAL_CLIENT_ID=xxxxxxxxxxxxxxxxxxxx
PAYPAL_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxx
PAYPAL_ENVIRONMENT=live                  # sandbox | live

# ─── JazzCash ────────────────────────────────────────────────────────────────
JAZZCASH_MERCHANT_ID=xxxxxxxxxxxx
JAZZCASH_PASSWORD=xxxxxxxxxxxx
JAZZCASH_INTEGRITY_SALT=xxxxxxxxxxxx

# ─── Easypaisa ───────────────────────────────────────────────────────────────
EASYPAISA_STORE_ID=xxxxxxxxxxxx
EASYPAISA_HASH_KEY=xxxxxxxxxxxx

# ─── Bank Transfer (Saudi) ───────────────────────────────────────────────────
BANK_NAME=Al Rajhi Bank                  # ← [PLACEHOLDER]
BANK_ACCOUNT_NAME=SK Visa Experts        # ← [PLACEHOLDER]
BANK_IBAN=SA00000000000000000000         # ← [PLACEHOLDER]
BANK_SWIFT=RJHISARI                      # ← [PLACEHOLDER]

# ─── Tap Payments ────────────────────────────────────────────────────────────
TAP_SECRET_KEY=sk_live_xxxxxxxxxxxx
NEXT_PUBLIC_TAP_PUBLISHABLE_KEY=pk_live_xxxxxxxxxxxx

# ─── Telr ────────────────────────────────────────────────────────────────────
TELR_STORE_ID=xxxxxxxxxxxx
TELR_AUTH_KEY=xxxxxxxxxxxx
TELR_TEST_MODE=0                         # 0 = live, 1 = test

# ─── PayTabs ─────────────────────────────────────────────────────────────────
PAYTABS_PROFILE_ID=xxxxxxxxxxxx
PAYTABS_SERVER_KEY=xxxxxxxxxxxx
PAYTABS_REGION=SAU
```

---

## 7. Payment Gateways

All eight payment gateways are implemented **server-side only** in Route Handlers. Secret keys never reach the browser. No card details are stored anywhere.

| Gateway | Route Handler | Where to Get Keys | Region |
|---|---|---|---|
| **Stripe** | `/api/payments/stripe` | [dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys) | Global |
| **PayPal** | `/api/payments/paypal` | [developer.paypal.com](https://developer.paypal.com/dashboard/applications) | Global |
| **JazzCash** | `/api/payments/jazzcash` | [sandbox.jazzcash.com.pk](https://sandbox.jazzcash.com.pk/) | Pakistan |
| **Easypaisa** | `/api/payments/easypaisa` | [easypaisa.com.pk](https://easypaisa.com.pk/) | Pakistan |
| **Bank Transfer** | `/api/payments/bank-transfer` | Your Saudi corporate bank (SNB, Al Rajhi, etc.) | Saudi Arabia |
| **Tap Payments** | `/api/payments/tap` | [dashboard.tap.company](https://dashboard.tap.company/) | Saudi / GCC |
| **Telr** | `/api/payments/telr` | [telr.com](https://telr.com/) | MENA |
| **PayTabs** | `/api/payments/paytabs` | [merchant.paytabs.sa](https://merchant.paytabs.sa/) | Saudi / MENA |

**To activate a gateway:**
1. Sign up with the gateway provider
2. Copy your live/production credentials
3. Paste them into `.env.local` (locally) or the Vercel Environment Variables dashboard (production)
4. No code changes are required

---

## 8. Email Configuration

Enquiry form submissions at `/api/enquiry` are emailed to your team.

### Option A — Resend (Recommended for Vercel)

1. Create a free account at [resend.com](https://resend.com)
2. Add and verify your sending domain (e.g. `skvisaexperts.com`)
3. Generate an API key
4. Set in `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
   EMAIL_FROM=noreply@skvisaexperts.com
   EMAIL_TO=info@skvisaexperts.com
   ```

### Option B — SMTP / Nodemailer (Gmail, Outlook, etc.)

1. Enable App Passwords in your Gmail / Outlook account
2. Set in `.env.local`:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=youraddress@gmail.com
   SMTP_PASS=your_16_char_app_password
   EMAIL_FROM=youraddress@gmail.com
   EMAIL_TO=info@skvisaexperts.com
   ```

> In development without any email keys set, submission responses are logged to the terminal instead of emailed.

---

## 9. Internationalization (i18n)

Routing is handled by **next-intl** with the following locale structure:

| Locale | Path prefix | Direction | Status |
|---|---|---|---|
| English | `/en` | LTR | ✅ Default |
| Arabic | `/ar` | **RTL** | ✅ Full translation + RTL layout |
| French | `/fr` | LTR | ✅ Full translation |
| German | `/de` | LTR | ✅ Full translation |

**Translation files** are in `messages/*.json`.  
To add or edit text, update the relevant key in all four files.

**To add a new locale:**
1. Add the locale code to `src/i18n/routing.ts`
2. Create `messages/<locale>.json` (copy from `en.json` as a starting template)
3. Set `dir="rtl"` in `src/app/[locale]/layout.tsx` if the locale is RTL

---

## 10. SEO & Metadata

| Feature | File |
|---|---|
| Per-page `<title>` and `<meta description>` | Each `page.tsx` exports a `generateMetadata()` function |
| Open Graph tags | Same `generateMetadata()` |
| `sitemap.xml` | `src/app/sitemap.ts` — covers all pages × all locales |
| `robots.txt` | `src/app/robots.ts` |
| LocalBusiness JSON-LD | `src/components/LocalBusinessJsonLd.tsx` (included in root layout) |

The JSON-LD schema includes:
- Exact address (Umm Al Hamam St, Riyadh 12321)
- Phone: +966 59 932 6936
- Aggregate rating: 4.4 / 71 reviews
- Opening hours

---

## 11. Deployment to Vercel

**Zero-configuration deployment** — Vercel detects Next.js automatically.

### Steps

1. **Push this repository to GitHub** (or GitLab / Bitbucket)
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository
3. Under **Settings → Environment Variables**, add every key from `.env.example` with real values
4. Click **Deploy**

### Recommended Vercel settings

| Setting | Value |
|---|---|
| Framework Preset | Next.js (auto-detected) |
| Root Directory | `.` (project root) |
| Node.js Version | 20.x |
| Output | Automatic (default) |

### Custom domain

After deploying, go to **Settings → Domains** in Vercel and add `skvisaexperts.com` (or your domain). Vercel provisions a free TLS certificate automatically.

---

## 12. Placeholder Content (Needs Real Data Before Launch)

The following items contain placeholder values clearly marked with `[PLACEHOLDER]` in the source code. **These must be replaced before going live:**

| # | Item | Location | Action Required |
|---|---|---|---|
| 1 | **Business email** | `.env.local` → `EMAIL_TO` | Replace with real company inbox (e.g. `info@skvisaexperts.com`) |
| 2 | **Opening hours (Sun–Fri)** | `messages/*.json` → `contact.hours.*` | Confirm and fill in actual daily hours |
| 3 | **Visa prices** | `src/data/visas.ts` | Replace example prices with real service fees |
| 4 | **Package prices & inclusions** | `src/data/packages.ts` | Replace placeholder pricing and bullet points |
| 5 | **Hotel prices** | `src/data/hotels.ts` | Replace with real partner hotel rates |
| 6 | **Bank account details** | `.env.local` → `BANK_IBAN`, `BANK_ACCOUNT_NAME`, etc. | Add Saudi corporate bank account |
| 7 | **Privacy Policy** | `src/app/[locale]/privacy/page.tsx` | Replace placeholder text with lawyer-approved policy |
| 8 | **Terms of Service** | `src/app/[locale]/terms/page.tsx` | Replace placeholder text with lawyer-approved terms |
| 9 | **Team bios & photos** | `src/app/[locale]/about/page.tsx` | Add real team member names, titles, and photos |
| 10 | **FAQ answers** | `messages/*.json` → `faq.*` | Expand with real company-specific answers |

---

## 13. Troubleshooting

### `npm run dev` fails with "Cannot find module"
Run `npm install` first. The `node_modules/` folder is not committed to Git.

### Arabic pages show LTR layout
Check that the `locale` parameter reaches `src/app/[locale]/layout.tsx` and that `dir={locale === 'ar' ? 'rtl' : 'ltr'}` is set on the `<html>` element.

### Enquiry form submits but no email arrives
1. Check that `RESEND_API_KEY` or SMTP keys are set in `.env.local`
2. Check that `EMAIL_TO` is set to a real inbox
3. Check the terminal for server-side error logs
4. If using Resend, ensure your sending domain is verified

### Payment route returns 500
The payment routes require real gateway credentials. Without them, they return a stub response in development. Add the relevant keys to `.env.local` to test against sandbox/test mode.

### Inter font not loading in production build (sandbox/offline)
If building in a restricted network environment, add `preload: false` to the `Inter()` call in `src/app/[locale]/layout.tsx`:
```ts
const inter = Inter({ subsets: ['latin'], preload: false });
```

---

## 14. Security Notes

- ✅ **Secret keys are server-only** — payment credentials never reach the browser
- ✅ **No card storage** — the app never stores raw card numbers, CVVs, or bank credentials
- ✅ **`.env.local` is gitignored** — real credentials are never committed
- ✅ **Server-side validation** — all form inputs are validated in Route Handlers before processing
- ✅ **HTTPS enforced** — Vercel provides automatic TLS; never deploy over plain HTTP
- ⚠️ **Rotate keys immediately** if you accidentally commit a real secret — revoke it in the gateway dashboard and generate a new one

---

## License

This project is proprietary software for **SK Visa Experts**.  
All rights reserved. Unauthorized copying, redistribution, or modification is prohibited.

---

*Built with ❤️ for SK Visa Experts, Riyadh, Saudi Arabia.*  
*For technical support, refer to the [Next.js docs](https://nextjs.org/docs), [next-intl docs](https://next-intl-docs.vercel.app/), and [Tailwind CSS docs](https://tailwindcss.com/docs).*
