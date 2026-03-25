import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { artisans } from "@/lib/data";
import ArtisanCard from "@/components/ui/ArtisanCard";

export default function FeaturedArtisans() {
  const featured = artisans.filter((a) => a.featured);

  return (
    <section className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-body text-xs font-600 text-terracotta-500 uppercase tracking-widest mb-3">
              The Makers
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-700 text-bark leading-tight">
              Meet Our Artisans
            </h2>
          </div>
          <Link
            href="/artisans"
            className="hidden md:inline-flex items-center gap-2 font-body text-sm font-500 text-bark hover:text-terracotta-500 transition-colors group"
          >
            All artisans
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((artisan, i) => (
            <ArtisanCard
              key={artisan.id}
              artisan={artisan}
              className={`animate-fade-up delay-${(i + 1) * 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
