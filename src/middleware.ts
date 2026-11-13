import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all request paths except for:
  // - API routes (/api/*)
  // - _next/static, _next/image, favicon.ico, images, etc.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
