"use client";

import { useState } from "react";
import Link from "next/link";
import { Leaf, Eye, EyeOff, ArrowRight, Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    // TODO: wire up real auth (NextAuth / Clerk / Supabase)
    setError("Authentication is not yet configured. Coming soon!");
  };

  return (
    <main className="min-h-screen bg-cream-50 font-body flex">
      {/* ── Left panel — branding ─────────────────────────── */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-bark flex-col justify-between p-14">
        {/* Grain + glows */}
        <div className="pointer-events-none absolute inset-0 bg-grain-texture opacity-40" />
        <div className="pointer-events-none absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-terracotta-700 opacity-25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-forest-700 opacity-20 blur-3xl" />

        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center gap-2.5 group w-fit">
          <div className="w-9 h-9 bg-terracotta-500 rounded-full flex items-center justify-center group-hover:bg-terracotta-400 transition-colors">
            <Leaf className="w-5 h-5 text-cream-50" strokeWidth={1.5} />
          </div>
          <div>
            <span className="font-display text-xl text-cream-50 tracking-tight">Handcrafted</span>
            <span className="font-display text-xl italic text-terracotta-300"> Haven</span>
          </div>
        </Link>

        {/* Hero copy */}
        <div className="relative z-10">
          <h1 className="font-display text-5xl text-cream-50 leading-tight mb-5">
            Welcome<br />
            back,<br />
            <em className="italic text-terracotta-300">maker.</em>
          </h1>
          <p className="font-accent text-lg text-cream-300 leading-relaxed max-w-xs">
            Sign in to manage your shop, track orders, and connect with a community of passionate creators.
          </p>
        </div>

        {/* Testimonial */}
        <div className="relative z-10 border-l-2 border-terracotta-500 pl-5">
          <p className="font-accent text-base text-cream-200 leading-relaxed italic mb-3">
            &ldquo;Handcrafted Haven gave my ceramics studio the audience it deserved. I couldn&rsquo;t imagine selling anywhere else.&rdquo;
          </p>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-terracotta-500 flex items-center justify-center text-white text-xs font-display font-semibold">
              A
            </div>
            <div>
              <p className="text-xs font-semibold text-cream-100 font-body">Amara O.</p>
              <p className="text-xs text-cream-400 font-body">Clay &amp; Co. Studio</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right panel — form ────────────────────────────── */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-16">
        {/* Mobile logo */}
        <Link href="/" className="flex items-center gap-2.5 mb-10 lg:hidden w-fit">
          <div className="w-8 h-8 bg-terracotta-500 rounded-full flex items-center justify-center">
            <Leaf className="w-4 h-4 text-cream-50" strokeWidth={1.5} />
          </div>
          <div>
            <span className="font-display text-lg text-bark">Handcrafted</span>
            <span className="font-display text-lg italic text-terracotta-500"> Haven</span>
          </div>
        </Link>

        <div className="max-w-md w-full mx-auto">
          {/* Heading */}
          <div className="mb-8">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-terracotta-500 font-body mb-2">
              Welcome back
            </p>
            <h2 className="font-display text-4xl text-bark leading-tight mb-2">
              Sign in to your account
            </h2>
            <p className="text-sm text-stone-mid font-body">
              Don&rsquo;t have an account?{" "}
              <Link
                href="/auth/register"
                className="text-terracotta-500 hover:text-terracotta-600 font-semibold underline underline-offset-4 transition-colors"
              >
                Create one free
              </Link>
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-6 px-4 py-3 rounded-xl bg-terracotta-50 border border-terracotta-200 text-sm text-terracotta-700 font-body">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-xs font-semibold tracking-widest uppercase text-stone-dark font-body"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-mid"
                  strokeWidth={1.75}
                />
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-cream-200 bg-cream-50 pl-11 pr-4 py-3 text-bark text-sm font-body placeholder:text-stone-warm focus:outline-none focus:ring-2 focus:ring-terracotta-300 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-xs font-semibold tracking-widest uppercase text-stone-dark font-body"
                >
                  Password
                </label>
                <Link
                  href="/auth/forgot-password"
                  className="text-xs text-terracotta-500 hover:text-terracotta-600 font-semibold font-body transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-mid"
                  strokeWidth={1.75}
                />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-cream-200 bg-cream-50 pl-11 pr-12 py-3 text-bark text-sm font-body placeholder:text-stone-warm focus:outline-none focus:ring-2 focus:ring-terracotta-300 focus:border-transparent transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-mid hover:text-bark transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" strokeWidth={1.75} />
                  ) : (
                    <Eye className="w-4 h-4" strokeWidth={1.75} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                className="w-4 h-4 accent-terracotta-500 cursor-pointer"
              />
              <span className="text-sm text-stone-mid font-body group-hover:text-bark transition-colors">
                Keep me signed in for 30 days
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2.5 bg-bark hover:bg-terracotta-600 disabled:opacity-60 text-white font-semibold font-body text-sm tracking-wide rounded-xl py-3.5 transition-colors duration-200 mt-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Signing in…
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-cream-200" />
            <span className="text-xs text-stone-mid font-body">or continue with</span>
            <div className="flex-1 h-px bg-cream-200" />
          </div>

          {/* OAuth placeholders */}
          <div className="grid grid-cols-2 gap-3">
            {[
              {
                label: "Google",
                icon: (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                ),
              },
              {
                label: "GitHub",
                icon: (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                ),
              },
            ].map(({ label, icon }) => (
              <button
                key={label}
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-cream-200 bg-white hover:bg-cream-50 hover:border-cream-300 text-bark text-sm font-semibold font-body transition-colors"
              >
                {icon}
                {label}
              </button>
            ))}
          </div>

          {/* Footer note */}
          <p className="text-xs text-stone-mid text-center font-body mt-8 leading-relaxed">
            By signing in you agree to our{" "}
            <Link href="/terms" className="text-terracotta-500 hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-terracotta-500 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}