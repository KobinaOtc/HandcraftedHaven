"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Leaf,
  Store,
  Star,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Upload,
} from "lucide-react";

const perks = [
  {
    icon: Store,
    title: "Your Own Storefront",
    desc: "A beautiful, customisable shop page that showcases your craft and your story.",
  },
  {
    icon: TrendingUp,
    title: "Built-in Audience",
    desc: "Reach thousands of buyers who actively seek handmade, one-of-a-kind pieces.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    desc: "We handle checkout, fraud protection, and payouts so you can focus on making.",
  },
  {
    icon: Star,
    title: "Zero Listing Fees",
    desc: "List as many products as you like. We only earn a small commission on sales.",
  },
];

const steps = [
  { num: "01", label: "Apply", desc: "Fill out the form below." },
  { num: "02", label: "Review", desc: "Our team responds in 3–5 days." },
  { num: "03", label: "Onboard", desc: "Set up your shop & upload products." },
  { num: "04", label: "Sell", desc: "Start earning from day one." },
];

const crafts = [
  "Ceramics & Pottery",
  "Jewellery & Accessories",
  "Textiles & Weaving",
  "Woodworking",
  "Candles & Soap",
  "Leather Goods",
  "Illustration & Print",
  "Glass & Mosaic",
  "Food & Pantry",
  "Other / Mixed Media",
];

export default function SellPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    shopName: "",
    craft: "",
    experience: "",
    bio: "",
    instagram: "",
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main className="bg-cream-50 min-h-screen font-body">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-bark pt-32 pb-24 px-6">
        <div className="pointer-events-none absolute inset-0 bg-grain-texture opacity-40" />
        <div className="pointer-events-none absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-terracotta-700 opacity-20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-forest-700 opacity-20 blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20">
            <Leaf className="w-3.5 h-3.5 text-terracotta-300" strokeWidth={2} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-terracotta-300 font-body">
              Artisan Programme
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl text-cream-50 leading-tight mb-5">
            Sell What You Make
          </h1>
          <p className="font-accent text-xl text-cream-200 leading-relaxed max-w-xl mx-auto mb-8">
            Join over 2,400 makers who have turned their craft into a thriving
            business on Handcrafted Haven.
          </p>
          <a
            href="#apply"
            className="inline-flex items-center gap-2 bg-terracotta-500 hover:bg-terracotta-400 text-white font-semibold text-sm font-body px-7 py-3.5 rounded-full transition-colors"
          >
            Apply Now <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ── Perks ────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl text-bark mb-3">
            Everything You Need to Grow
          </h2>
          <p className="text-stone-mid font-body max-w-lg mx-auto">
            We built Handcrafted Haven to give independent makers the tools that
            big platforms reserve for big brands.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {perks.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 border border-cream-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-11 h-11 rounded-xl bg-terracotta-50 flex items-center justify-center mb-4 group-hover:bg-terracotta-100 transition-colors">
                <Icon className="w-5 h-5 text-terracotta-500" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-bark text-lg mb-1">{title}</h3>
              <p className="text-sm text-stone-mid font-body leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it Works ─────────────────────────────────── */}
      <section className="bg-bark py-20 px-6 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grain-texture opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl text-cream-50 text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map(({ num, label, desc }, i) => (
              <div key={num} className="relative flex flex-col items-center text-center">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-px bg-white/10" />
                )}
                <div className="relative z-10 w-12 h-12 rounded-full bg-terracotta-500 flex items-center justify-center mb-3">
                  <span className="font-display text-white text-sm">{num}</span>
                </div>
                <p className="font-display text-cream-50 text-base mb-1">{label}</p>
                <p className="text-xs text-cream-300 font-body leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Application Form ─────────────────────────────── */}
      <section id="apply" className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl text-bark mb-2">Apply to Sell</h2>
          <p className="text-stone-mid font-body">
            Tell us about yourself and your craft. We review every application personally.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-2xl border border-cream-100 shadow-sm p-12 flex flex-col items-center text-center gap-5">
            <CheckCircle2 className="w-14 h-14 text-forest-500" strokeWidth={1.5} />
            <h3 className="font-display text-2xl text-bark">Application Submitted!</h3>
            <p className="text-stone-mid font-body max-w-sm leading-relaxed">
              Thanks, <strong>{form.name}</strong>! We&rsquo;ve received your application for{" "}
              <span className="text-terracotta-500">{form.shopName || "your shop"}</span> and will
              be in touch at <span className="text-terracotta-500">{form.email}</span> within 3–5
              business days.
            </p>
            <Link
              href="/marketplace"
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-terracotta-500 hover:text-terracotta-600 transition-colors font-body"
            >
              Browse the marketplace while you wait <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-sm border border-cream-100 space-y-6"
          >
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-semibold tracking-widest uppercase text-stone-dark font-body">
                  Full Name <span className="text-terracotta-400">*</span>
                </label>
                <input
                  id="name" name="name" type="text" required
                  value={form.name} onChange={handleChange}
                  placeholder="Jane Doe"
                  className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-bark text-sm font-body placeholder:text-stone-warm focus:outline-none focus:ring-2 focus:ring-terracotta-300 focus:border-transparent transition"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-semibold tracking-widest uppercase text-stone-dark font-body">
                  Email Address <span className="text-terracotta-400">*</span>
                </label>
                <input
                  id="email" name="email" type="email" required
                  value={form.email} onChange={handleChange}
                  placeholder="jane@example.com"
                  className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-bark text-sm font-body placeholder:text-stone-warm focus:outline-none focus:ring-2 focus:ring-terracotta-300 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Shop Name + Craft */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="shopName" className="text-xs font-semibold tracking-widest uppercase text-stone-dark font-body">
                  Shop Name <span className="text-terracotta-400">*</span>
                </label>
                <input
                  id="shopName" name="shopName" type="text" required
                  value={form.shopName} onChange={handleChange}
                  placeholder="Willow & Clay Studio"
                  className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-bark text-sm font-body placeholder:text-stone-warm focus:outline-none focus:ring-2 focus:ring-terracotta-300 focus:border-transparent transition"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="craft" className="text-xs font-semibold tracking-widest uppercase text-stone-dark font-body">
                  Primary Craft <span className="text-terracotta-400">*</span>
                </label>
                <select
                  id="craft" name="craft" required
                  value={form.craft} onChange={handleChange}
                  className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-bark text-sm font-body focus:outline-none focus:ring-2 focus:ring-terracotta-300 focus:border-transparent transition appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select your craft…</option>
                  {crafts.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>

            {/* Experience */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="experience" className="text-xs font-semibold tracking-widest uppercase text-stone-dark font-body">
                Years of Experience <span className="text-terracotta-400">*</span>
              </label>
              <select
                id="experience" name="experience" required
                value={form.experience} onChange={handleChange}
                className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-bark text-sm font-body focus:outline-none focus:ring-2 focus:ring-terracotta-300 focus:border-transparent transition appearance-none cursor-pointer"
              >
                <option value="" disabled>Select…</option>
                {["Less than 1 year", "1–3 years", "3–5 years", "5–10 years", "10+ years"].map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>

            {/* Bio */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="bio" className="text-xs font-semibold tracking-widest uppercase text-stone-dark font-body">
                Tell Us About Your Craft <span className="text-terracotta-400">*</span>
              </label>
              <textarea
                id="bio" name="bio" rows={4} required
                value={form.bio} onChange={handleChange}
                placeholder="Describe your process, inspiration, and what makes your work unique…"
                className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-bark text-sm font-body placeholder:text-stone-warm focus:outline-none focus:ring-2 focus:ring-terracotta-300 focus:border-transparent transition resize-none"
              />
            </div>

            {/* Instagram */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="instagram" className="text-xs font-semibold tracking-widest uppercase text-stone-dark font-body">
                Instagram / Portfolio URL <span className="text-stone-warm text-xs normal-case tracking-normal">(optional)</span>
              </label>
              <input
                id="instagram" name="instagram" type="url"
                value={form.instagram} onChange={handleChange}
                placeholder="https://instagram.com/yourshop"
                className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-bark text-sm font-body placeholder:text-stone-warm focus:outline-none focus:ring-2 focus:ring-terracotta-300 focus:border-transparent transition"
              />
            </div>

            {/* Portfolio upload hint */}
            <div className="flex items-center gap-4 rounded-xl border border-dashed border-cream-300 bg-cream-50 px-5 py-4">
              <Upload className="w-5 h-5 text-stone-mid flex-shrink-0" strokeWidth={1.75} />
              <p className="text-sm text-stone-mid font-body leading-snug">
                Product photo uploads are available after your application is approved during onboarding.
              </p>
            </div>

            {/* Agreement */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox" name="agree" required
                checked={form.agree} onChange={handleChange}
                className="mt-0.5 w-4 h-4 accent-terracotta-500 cursor-pointer"
              />
              <span className="text-sm text-stone-mid font-body leading-relaxed">
                I agree to the{" "}
                <Link href="/terms" className="text-terracotta-500 hover:underline">Seller Terms</Link>
                {" "}and confirm that all products I list are genuinely handmade or handcrafted by me.{" "}
                <span className="text-terracotta-400">*</span>
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit" disabled={loading}
              className="w-full flex items-center justify-center gap-2.5 bg-terracotta-500 hover:bg-terracotta-600 disabled:opacity-60 text-white font-semibold font-body text-sm tracking-wide rounded-xl py-3.5 transition-colors duration-200"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Submitting…
                </>
              ) : (
                <>
                  <Leaf className="w-4 h-4" strokeWidth={2} />
                  Submit Application
                </>
              )}
            </button>

            <p className="text-xs text-stone-mid text-center font-body">
              We review every application personally and aim to respond within 3–5 business days.
            </p>
          </form>
        )}
      </section>
    </main>
  );
}