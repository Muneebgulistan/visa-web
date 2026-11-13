import React from 'react';

export default function LocalBusinessJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'SK Visa Experts',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    '@id': 'https://skvisaexperts.com',
    url: 'https://skvisaexperts.com',
    telephone: '+966599326936',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Umm Al Hamam St, Umm Al Hamam Al Sharqi',
      addressLocality: 'Riyadh',
      postalCode: '12321',
      addressCountry: 'SA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 24.685,
      longitude: 46.665,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '18:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.4',
      reviewCount: '71',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      'https://wa.me/966599326936',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
