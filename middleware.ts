import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

// This initializes NextAuth with your edge-compatible config
export default NextAuth(authConfig).auth;

export const config = {
  // This Regex matcher tells Next.js to run the middleware on all routes
  // EXCEPT for API routes, static files, and images.
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};