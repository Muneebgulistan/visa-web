export type VisaCategory = 'tourist' | 'business' | 'student' | 'transit' | 'work';

export interface VisaItem {
  id: string;
  country: string;
  countryCode: string;
  flag: string;
  title: string;
  type: VisaCategory;
  price: number;
  currency: string;
  processingTime: string;
  validity: string;
  entryType: string;
  requirements: string[];
  popular?: boolean;
}

export interface PackageItem {
  id: string;
  title: string;
  category: 'umrah' | 'holiday' | 'city';
  destination: string;
  duration: string;
  price: number;
  currency: string;
  image: string;
  rating: number;
  inclusions: string[];
  exclusions: string[];
  featured?: boolean;
}

export interface HotelItem {
  id: string;
  name: string;
  city: string;
  country: string;
  starRating: number;
  userRating: number;
  reviewsCount: number;
  pricePerNight: number;
  currency: string;
  image: string;
  amenities: string[];
  locationDesc: string;
}

export interface FlightSearchQuery {
  from: string;
  to: string;
  departureDate: string;
  returnDate?: string;
  tripType: 'roundTrip' | 'oneWay';
  cabinClass: 'economy' | 'premiumEconomy' | 'business' | 'first';
  passengers: number;
}

export interface EnquirySubmission {
  id?: string;
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  destination?: string;
  travelDate?: string;
  message?: string;
  amount?: number;
  gateway?: string;
}

export type PaymentGatewayId =
  | 'stripe'
  | 'paypal'
  | 'jazzcash'
  | 'easypaisa'
  | 'bank-transfer'
  | 'tap'
  | 'telr'
  | 'paytabs';

export interface PaymentGatewayOption {
  id: PaymentGatewayId;
  name: string;
  description: string;
  badge?: string;
  supportedCurrencies: string[];
}
