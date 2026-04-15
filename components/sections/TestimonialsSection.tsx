import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-bark text-cream-50 relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-terracotta-500 blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-forest-500 blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-body text-xs font-600 text-terracotta-300 uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-cream-50">
            Loved by our community
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((review, i) => (
            <div
              key={review.id}
              className={`bg-white/5 border border-white/10 rounded-3xl p-7 animate-fade-up delay-${(i + 1) * 100}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-cream-400 fill-cream-400"
                    strokeWidth={0}
                  />
                ))}
              </div>

              <blockquote className="font-accent text-lg font-300 italic text-cream-100 leading-relaxed mb-6">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={review.avatar}
                    alt={review.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-body text-sm font-600 text-cream-50">
                    {review.author}
                  </p>
                  <p className="font-body text-xs text-cream-200/50">
                    {review.productName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
