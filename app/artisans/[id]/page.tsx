import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Star, Package, ArrowLeft } from "lucide-react";
import { getArtisanById, getProductsByArtisanEmail } from "@/lib/data-fetch";
import { ProductCard } from "@/components/ui/ProductCard";

export default async function ArtisanProfilePage({
  params,
}: {
  params: { id: string };
}) {
  // 1. Fetch the specific artisan using the ID from the URL
  const artisan = await getArtisanById(params.id);

  // 2. If someone types a bad ID in the URL, gracefully show a 404 page
  if (!artisan) {
    notFound();
  }

  // 3. Fetch ONLY the products uploaded by this specific artisan!
  const artisanProducts = await getProductsByArtisanEmail(artisan.email);

  // 4. Fallback data for UI elements not yet supported by your DB schema
  const coverImage = "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1200&q=80";
  const avatar = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80";
  const rating = 5.0;
  const badges = ["Handmade", "Eco-friendly"];

  return (
    <div className="min-h-screen bg-cream-50 pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Link
          href="/artisans"
          className="inline-flex items-center gap-2 text-stone-mid hover:text-terracotta-500 font-body text-sm mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Artisans
        </Link>

        {/* Profile Header */}
        <div className="bg-white rounded-3xl overflow-hidden border border-cream-200 shadow-sm mb-12">
          <div className="relative h-64 md:h-80 w-full bg-cream-100">
            <Image src={coverImage} alt={artisan.name} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-bark/80 via-bark/20 to-transparent" />
          </div>

          <div className="relative px-8 pb-8">
            <div className="flex flex-col md:flex-row gap-6 md:items-end -mt-16 md:-mt-20 mb-6">
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-md bg-white">
                <Image src={avatar} alt={artisan.name} fill className="object-cover" />
              </div>

              <div className="flex-1 pb-2">
                <h1 className="font-display text-3xl md:text-4xl font-700 text-bark mb-2">
                  {artisan.name}
                </h1>
                <p className="font-body text-lg text-terracotta-600 mb-2">
                  {artisan.specialty}
                </p>
                <div className="flex flex-wrap items-center gap-4 font-body text-sm text-stone-mid">
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {artisan.location}</span>
                  <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-terracotta-400" /> {rating} Rating</span>
                  <span className="flex items-center gap-1.5"><Package className="w-4 h-4" /> {artisanProducts.length} Products</span>
                </div>
              </div>
            </div>

            <div className="max-w-3xl">
              <h2 className="font-display text-xl font-600 text-bark mb-3">About the Artisan</h2>
              <p className="font-body text-stone-dark leading-relaxed mb-6">
                {artisan.bio || "This artisan hasn't added a bio yet."}
              </p>
              <div className="flex flex-wrap gap-2">
                {badges.map(badge => (
                  <span key={badge} className="px-3 py-1 bg-cream-100 text-bark text-xs font-500 rounded-full">{badge}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-display text-2xl font-700 text-bark">Shop {artisan.name}&apos;s Collection</h2>
        </div>

        {artisanProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-cream-200">
            <span className="text-4xl block mb-4">🏪</span>
            <p className="font-display text-xl font-600 text-bark mb-2">No products yet</p>
            <p className="font-body text-stone-mid">Check back later for new items.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* ADAPTER REMOVED! We map the DB products directly to the ProductCard */}
            {artisanProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}