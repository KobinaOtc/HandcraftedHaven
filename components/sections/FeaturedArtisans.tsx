import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ArtisanCard from "@/components/ui/ArtisanCard";
// 1. Import our live database fetcher
import { getAllArtisans } from "@/lib/data-fetch"; 

// 2. Make the component async!
export default async function FeaturedArtisans() {
  // 3. Fetch the live artisans and grab the first 3
  const allArtisans = await getAllArtisans();
  const featured = allArtisans.slice(0, 3);

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
          {/* 4. We map over the live data, but keep the safe UI Adapter! */}
          {featured.map((artisan: any) => {
            const dbFormattedArtisan = {
              ...artisan,
              coverImage: artisan.coverImage || "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
              avatar: artisan.avatar || "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
              rating: artisan.rating || 5.0,
              totalProducts: artisan.totalProducts || 12,
              totalSales: artisan.totalSales || 150, 
              badges: artisan.badges || ["Handmade", "Top Seller"], 
            };

            return (
              <ArtisanCard
                key={artisan.id}
                artisan={dbFormattedArtisan}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}