import { MetadataRoute } from 'next';

const BASE_URL = 'https://skvisaexperts.com';
const locales = ['en', 'ar', 'fr', 'de'];
const pages = ['', 'visas', 'packages', 'hotels', 'airline', 'about', 'contact', 'faq', 'privacy', 'terms'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of locales) {
      const path = page ? `${locale}/${page}` : locale;
      entries.push({
        url: `${BASE_URL}/${path}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1.0 : page === 'visas' ? 0.9 : 0.8,
      });
    }
  }

  return entries;
}
