import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-terracotta-100/60 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-forest-100/40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cream-200/40 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-terracotta-50 border border-terracotta-200 rounded-full w-fit animate-fade-up">
              <Sparkles className="w-4 h-4 text-terracotta-500" strokeWidth={1.5} />
              <span className="font-body text-xs font-500 text-terracotta-600">
                2,400+ artisans worldwide
              </span>
            </div>

            <div className="animate-fade-up delay-100">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-700 text-bark leading-[1.05] tracking-tight text-balance">
                Where craft{" "}
                <em className="italic text-terracotta-500 not-italic font-400">
                  meets
                </em>{" "}
                <span className="relative">
                  connection
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 8C60 3 140 3 298 8"
                      stroke="#c85a2a"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </div>

            <p className="font-body text-lg text-stone-mid leading-relaxed max-w-md animate-fade-up delay-200">
              A curated marketplace for handcrafted treasures. Discover
              one-of-a-kind pieces from artisans who pour their heart into every
              creation.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <Link
                href="/marketplace"
                className="group inline-flex items-center gap-2.5 px-7 py-4 bg-bark text-cream-50 font-500 rounded-full hover:bg-terracotta-600 transition-all duration-300 hover:gap-4"
              >
                Shop Now
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/artisans"
                className="inline-flex items-center gap-2.5 px-7 py-4 border-2 border-bark text-bark font-500 rounded-full hover:bg-bark hover:text-cream-50 transition-all duration-300"
              >
                Meet Artisans
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4 border-t border-cream-200 animate-fade-up delay-400">
              {[
                ["2,400+", "Artisans"],
                ["18,000+", "Products"],
                ["95k+", "Happy Buyers"],
              ].map(([num, label]) => (
                <div key={label}>
                  <p className="font-display text-2xl font-700 text-bark">
                    {num}
                  </p>
                  <p className="font-body text-xs text-stone-mid">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image Grid */}
          <div className="relative grid grid-cols-2 gap-4 animate-fade-up delay-200">
            {/* Large image */}
            <div className="col-span-1 row-span-2 relative rounded-3xl overflow-hidden h-[500px] shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80"
                alt="Handcrafted pottery"
                fill
                className="object-cover"
              />
            </div>
            {/* Small images */}
            <div className="relative rounded-3xl overflow-hidden h-[240px] shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80"
                alt="Handcrafted jewelry"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-3xl overflow-hidden h-[240px] shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
                alt="Handcrafted textiles"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-cream-200">
              <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center text-lg">
                🌿
              </div>
              <div>
                <p className="font-body text-xs font-600 text-bark">
                  Eco-Friendly
                </p>
                <p className="font-body text-xs text-stone-mid">
                  Sustainable materials
                </p>
              </div>
            </div>

            {/* Second floating card */}
            <div className="absolute -top-4 -right-4 bg-terracotta-500 rounded-2xl shadow-xl px-4 py-3">
              <p className="font-display text-sm font-600 text-white">
                Free shipping
              </p>
              <p className="font-body text-xs text-terracotta-100">
                on orders over $75
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
