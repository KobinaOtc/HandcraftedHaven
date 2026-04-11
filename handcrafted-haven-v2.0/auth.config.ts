import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/auth/login', // Redirects here if unauthenticated
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/artisans/dashboard');
      
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        // If logged in, prevent them from accessing the login/register pages
        const isAuthRoute = nextUrl.pathname.startsWith('/auth/login') || nextUrl.pathname.startsWith('/auth/register');
        if (isAuthRoute) {
          return Response.redirect(new URL('/artisans/dashboard', nextUrl));
        }
      }
      return true;
    },
  },
  providers: [], // We add the actual provider in auth.ts to avoid Edge compatibility issues
} satisfies NextAuthConfig;