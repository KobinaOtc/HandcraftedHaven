"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Instagram,
  Twitter,
  Facebook,
  CheckCircle2,
} from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email Us",
    value: "team-4@handcraftedhaven.com",
    sub: "We reply within 24 hours",
    href: "mailto:team-4@handcraftedhaven.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+27 000 000 0000",
    sub: "Mon–Fri, 9 am – 5 pm SAST",
    href: "tel:+270000000000",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "3 Derby Road, Kensington, South Africa",
    sub: "Open to the public on weekends",
    href: "https://maps.google.com/?q=3+Derby+Road+Kensington+South+Africa",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon–Fri: 9 am – 5 pm",
    sub: "Sat: 10 am – 5 pm SAST",
    href: null,
  },
];

const topics = [
  "General Inquiry",
  "Selling on Handcrafted Haven",
  "Order Support",
  "Partnership / Press",
  "Report an Issue",
  "Other",
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter / X", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main className="bg-cream-50 min-h-screen font-body">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-bark py-28 px-6">
        <div className="pointer-events-none absolute inset-0 bg-grain-texture opacity-40" />
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-terracotta-700 opacity-20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-16 w-72 h-72 rounded-full bg-forest-700 opacity-20 blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-block mb-4 text-xs font-semibold tracking-[0.25em] uppercase text-terracotta-300 font-body">
            We&rsquo;d love to hear from you
          </span>
          <h1 className="font-display text-5xl md:text-6xl text-cream-50 leading-tight mb-5">
            Get in Touch
          </h1>
          <p className="font-accent text-xl text-cream-200 leading-relaxed max-w-xl mx-auto">
            Whether you&rsquo;re a curious shopper, a passionate maker, or a
            prospective partner — our team is here and ready to help.
          </p>
        </div>
      </section>

      {/* ── Contact Cards ─────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactDetails.map(({ icon: Icon, label, value, sub, href }) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-6 shadow-md border border-cream-100 flex flex-col gap-3 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-terracotta-50 flex items-center justify-center group-hover:bg-terracotta-100 transition-colors">
                <Icon className="w-5 h-5 text-terracotta-500" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-stone-mid mb-1 font-body">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    className="block font-display text-bark text-base leading-snug hover:text-terracotta-500 transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="font-display text-bark text-base leading-snug">
                    {value}
                  </p>
                )}
                <p className="text-sm text-stone-mid mt-1 font-body">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Left — Form */}
        <div className="lg:col-span-3">
          <h2 className="font-display text-3xl text-bark mb-2">
            Send Us a Message
          </h2>
          <p className="text-stone-mid font-body mb-8">
            Fill out the form below and one of our team members will get back to
            you shortly.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-20 px-8 bg-white rounded-2xl border border-cream-100 shadow-sm gap-5">
              <CheckCircle2
                className="w-14 h-14 text-forest-500"
                strokeWidth={1.5}
              />
              <h3 className="font-display text-2xl text-bark">
                Message Received!
              </h3>
              <p className="text-stone-mid max-w-sm font-body leading-relaxed">
                Thank you for reaching out, <strong>{formData.name}</strong>.
                We&rsquo;ll be in touch at{" "}
                <span className="text-terracotta-500">{formData.email}</span>{" "}
                within one business day.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", topic: "", message: "" });
                }}
                className="mt-2 text-sm font-semibold text-terracotta-500 hover:text-terracotta-600 underline underline-offset-4 transition-colors font-body"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-sm border border-cream-100 space-y-6"
            >
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold tracking-widest uppercase text-stone-dark font-body"
                  >
                    Full Name <span className="text-terracotta-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-bark text-sm font-body placeholder:text-stone-warm focus:outline-none focus:ring-2 focus:ring-terracotta-300 focus:border-transparent transition"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold tracking-widest uppercase text-stone-dark font-body"
                  >
                    Email Address <span className="text-terracotta-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-bark text-sm font-body placeholder:text-stone-warm focus:outline-none focus:ring-2 focus:ring-terracotta-300 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Topic */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="topic"
                  className="text-xs font-semibold tracking-widest uppercase text-stone-dark font-body"
                >
                  Topic <span className="text-terracotta-400">*</span>
                </label>
                <select
                  id="topic"
                  name="topic"
                  required
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-bark text-sm font-body focus:outline-none focus:ring-2 focus:ring-terracotta-300 focus:border-transparent transition appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select a topic…
                  </option>
                  {topics.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold tracking-widest uppercase text-stone-dark font-body"
                >
                  Message <span className="text-terracotta-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help…"
                  className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-bark text-sm font-body placeholder:text-stone-warm focus:outline-none focus:ring-2 focus:ring-terracotta-300 focus:border-transparent transition resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2.5 bg-terracotta-500 hover:bg-terracotta-600 disabled:opacity-60 text-white font-semibold font-body text-sm tracking-wide rounded-xl py-3.5 transition-colors duration-200"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" strokeWidth={2} />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-xs text-stone-mid text-center font-body">
                We respect your privacy. Your information is never shared with
                third parties.
              </p>
            </form>
          )}
        </div>

        {/* Right — FAQ + Social */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          {/* FAQ */}
          <div className="bg-white rounded-2xl p-7 shadow-sm border border-cream-100">
            <h3 className="font-display text-xl text-bark mb-5">
              Common Questions
            </h3>
            <div className="space-y-5 divide-y divide-cream-100">
              {[
                {
                  q: "How do I start selling?",
                  a: "Apply through our Artisan Program page. Our team reviews applications within 3–5 business days.",
                },
                {
                  q: "What is your return policy?",
                  a: "Most items are eligible for return within 14 days of delivery. Customised pieces are final sale.",
                },
                {
                  q: "Do you ship internationally?",
                  a: "Yes! We ship to over 40 countries. International rates and timelines are shown at checkout.",
                },
                {
                  q: "How do I track my order?",
                  a: "A tracking link is emailed as soon as your order ships. You can also view it in My Orders.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="pt-4 first:pt-0">
                  <p className="text-sm font-semibold text-bark font-body mb-1">
                    {q}
                  </p>
                  <p className="text-sm text-stone-mid font-body leading-relaxed">
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="bg-bark rounded-2xl p-7 relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-grain-texture opacity-30" />
            <div className="relative z-10">
              <h3 className="font-display text-xl text-cream-50 mb-2">
                Follow Our Story
              </h3>
              <p className="text-sm text-cream-200 font-body mb-6 leading-relaxed">
                Behind-the-scenes maker content, new arrivals, and artisan
                spotlights — every day.
              </p>
              <div className="flex flex-col gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-3 text-cream-100 hover:text-terracotta-300 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Icon className="w-4 h-4" strokeWidth={1.75} />
                    </div>
                    <span className="text-sm font-semibold font-body">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Artisan CTA */}
          <div className="rounded-2xl border-2 border-dashed border-terracotta-200 bg-terracotta-50 p-7">
            <p className="text-xs font-semibold tracking-widest uppercase text-terracotta-500 font-body mb-2">
              Are you a maker?
            </p>
            <h3 className="font-display text-xl text-bark mb-2">
              Sell on Handcrafted Haven
            </h3>
            <p className="text-sm text-stone-mid font-body mb-4 leading-relaxed">
              Join over 2,400 artisans reaching customers who love handmade.
              Zero listing fees to get started.
            </p>
            <a
              href="/sell"
              className="inline-flex items-center gap-2 text-sm font-semibold font-body text-terracotta-600 hover:text-terracotta-700 transition-colors"
            >
              Learn about our Artisan Program →
            </a>
          </div>
        </div>
      </section>

      {/* ── Map Banner ────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="relative w-full rounded-2xl overflow-hidden border border-cream-200 shadow-sm">
          {/* Real Google Maps embed */}
          <iframe
            title="Handcrafted Haven location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d28.0717!3d-26.1937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2s3%20Derby%20Rd%2C%20Kensington%2C%20Johannesburg%2C%202094%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1700000000000"
            width="100%"
            height="360"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Address overlay badge */}
          <div className="absolute bottom-4 left-4 z-10">
            <div className="bg-white rounded-xl px-4 py-2.5 shadow-md flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-terracotta-500 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-3.5 h-3.5 text-white" strokeWidth={2} />
              </div>
              <div>
                <p className="font-display text-bark text-sm leading-tight">
                  3 Derby Road, Kensington, South Africa
                </p>
                <p className="text-xs text-stone-mid font-body mt-0.5">
                  Open Sat · 10 am – 5 pm SAST
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=3+Derby+Road+Kensington+Johannesburg+South+Africa"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-xs font-semibold text-terracotta-500 hover:text-terracotta-600 transition-colors font-body whitespace-nowrap"
              >
                Open in Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}