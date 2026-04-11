"use client";

import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/lib/actions";
import { Mail, Lock, Loader2 } from "lucide-react";
import Link from "next/link";

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-cream-50 bg-bark hover:bg-terracotta-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terracotta-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Signing In...
        </>
      ) : (
        "Sign In"
      )}
    </button>
  );
}

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-white rounded-2xl shadow-xl border border-cream-200">
      <div className="text-center mb-8">
        <h2 className="font-display text-3xl font-600 text-bark">Welcome Back</h2>
        <p className="mt-2 text-stone-dark font-body text-sm">
          Sign in to your artisan account.
        </p>
      </div>

      <form action={dispatch} className="space-y-5">
        {/* Email */}
        <div>
          <label className="block text-xs font-600 text-stone-dark uppercase tracking-wider mb-1 px-1">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              name="email"
              type="email"
              required
              className="block w-full pl-10 pr-4 py-2.5 bg-cream-50 border border-cream-200 rounded-xl focus:ring-2 focus:ring-terracotta-500 outline-none text-bark"
              placeholder="artisan@haven.com"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-xs font-600 text-stone-dark uppercase tracking-wider mb-1 px-1">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              name="password"
              type="password"
              required
              className="block w-full pl-10 pr-4 py-2.5 bg-cream-50 border border-cream-200 rounded-xl focus:ring-2 focus:ring-terracotta-500 outline-none text-bark"
              placeholder="••••••••"
            />
          </div>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="p-3 rounded-lg bg-red-50 border border-red-100 text-red-600 text-sm text-center">
            {errorMessage}
          </div>
        )}

        <LoginButton />
        
        <div className="text-center mt-4 text-sm text-stone-dark">
          Don't have an account?{" "}
          <Link href="/auth/register" className="text-terracotta-500 hover:underline font-500">
            Register here
          </Link>
        </div>
      </form>
    </div>
  );
}