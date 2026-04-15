"use client";

import { useState } from "react";
import { Send, Leaf } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-24 bg-terracotta-500 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-terracotta-400/30 blur-2xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-terracotta-600/30 blur-2xl" />
      </div>

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <Leaf className="w-7 h-7 text-white" strokeWidth={1.5} />
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-700 text-white mb-4">
          Stay in the loop
        </h2>
        <p className="font-body text-base text-terracotta-100 mb-10 leading-relaxed">
          Get stories about artisans, new collections, and exclusive offers
          delivered to your inbox — no spam, just craft.
        </p>

        {submitted ? (
          <div className="bg-white/20 border border-white/30 rounded-2xl p-8 animate-fade-in">
            <p className="font-display text-2xl font-600 text-white mb-2">
              Thank you! 🎉
            </p>
            <p className="font-body text-terracotta-100">
              You&apos;re on the list. We&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-6 py-4 bg-white rounded-full font-body text-bark placeholder-stone-mid outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-bark text-cream-50 font-500 rounded-full hover:bg-bark/90 transition-colors flex-shrink-0"
            >
              Subscribe
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="font-body text-xs text-terracotta-200 mt-4">
          Join 12,000+ craft lovers. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
