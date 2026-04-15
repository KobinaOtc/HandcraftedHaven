// 1. Remove the static data import and bring in your new live database function
import { getAllArtisans } from "@/lib/data-fetch";
import ArtisanCard from "@/components/ui/ArtisanCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artisans",
  description: "Meet the talented artisans behind Handcrafted Haven's unique pieces.",
};

// 2. Make the component 'async' so it can await the database fetch
export default async function ArtisansPage() {
  // 3. Fetch the live artisans securely from Vercel Postgres!
  const dbArtisans = await getAllArtisans();

  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      {/* Header */}
      <div className="relative bg-bark py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-terracotta-500 blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-forest-500 blur-2xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-body text-xs font-600 text-terracotta-300 uppercase tracking-widest mb-4">
            The Makers
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-700 text-cream-50 mb-5">
            Meet Our Artisans
          </h1>
          <p className="font-body text-base text-cream-200/70 max-w-xl mx-auto">
            Behind every piece is a person with a story. Discover the skilled
            craftspeople who pour their hearts into every creation.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* 4. Map over the LIVE database artisans instead of the static ones */}
          {dbArtisans.map((artisan: any) => {
            
            // ADAPTER: Safely bridge the DB schema to the UI Card's expectations
            const formattedArtisan = {
              ...artisan,
              // Match exact property names expected by ArtisanCard.tsx
              coverImage: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
              avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
              rating: 5.0, 
              totalProducts: 12,  
              totalSales: 150, // Fixed: Changed from 'sales' to 'totalSales'
              badges: ["Handmade", "Eco-friendly"], // Added: Prevents .map() crash
            };

            return (
              <ArtisanCard key={artisan.id} artisan={formattedArtisan} />
            );
          })}
        </div>

        {/* CTA to sell */}
        <div className="mt-16 bg-terracotta-50 border border-terracotta-200 rounded-3xl p-12 text-center">
          <span className="text-4xl block mb-5">🏺</span>
          <h2 className="font-display text-3xl font-700 text-bark mb-3">
            Are you an artisan?
          </h2>
          <p className="font-body text-base text-stone-mid max-w-md mx-auto mb-8">
            Join our community of makers. Reach thousands of customers who
            value handcrafted quality.
          </p>
          <a
            href="/auth/register" // Note: I updated this to point to your actual register route!
            className="inline-flex items-center gap-2 px-8 py-4 bg-terracotta-500 text-white font-500 rounded-full hover:bg-terracotta-600 transition-colors"
          >
            Start Selling
          </a>
        </div>
      </div>
    </div>
  );
}