import { notFound } from "next/navigation";
import Image from "next/image";
import { MapPin, Star, Package, Calendar, Award } from "lucide-react";
import { artisans, products } from "@/lib/data";
import { ProductCard } from "@/components/ui/ProductCard";
import { formatNumber } from "@/lib/utils";
import { Metadata } from "next";

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const artisan = artisans.find((a) => a.id === params.id);
  return {
    title: artisan ? artisan.name : "Artisan",
    description: artisan?.bio,
  };
}

export default function ArtisanProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const artisan = artisans.find((a) => a.id === params.id);
  if (!artisan) notFound();

  const artisanProducts = products.filter((p) => p.artisanId === artisan.id);

  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      {/* Cover */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={artisan.coverImage}
          alt={artisan.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bark/80 via-bark/30 to-transparent" />
      </div>

      {/* Profile Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end gap-6 -mt-16 mb-12 relative z-10">
          <div className="relative w-32 h-32 rounded-3xl overflow-hidden border-4 border-cream-50 shadow-xl flex-shrink-0">
            <Image
              src={artisan.avatar}
              alt={artisan.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h1 className="font-display text-3xl font-700 text-bark">
                  {artisan.name}
                </h1>
                <p className="font-body text-base text-terracotta-500 font-500">
                  {artisan.specialty}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <MapPin className="w-4 h-4 text-stone-mid" strokeWidth={1.5} />
                  <span className="font-body text-sm text-stone-mid">
                    {artisan.location}
                  </span>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="px-6 py-3 bg-bark text-cream-50 font-500 rounded-full hover:bg-terracotta-600 transition-colors text-sm">
                  Follow
                </button>
                <button className="px-6 py-3 border border-cream-300 text-bark font-500 rounded-full hover:bg-cream-100 transition-colors text-sm">
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { icon: Star, label: "Rating", value: artisan.rating.toString() },
            { icon: Package, label: "Products", value: artisan.totalProducts.toString() },
            { icon: Award, label: "Total Sales", value: formatNumber(artisan.totalSales) },
            { icon: Calendar, label: "Member Since", value: artisan.joinedYear.toString() },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-5 border border-cream-200 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-terracotta-50 flex items-center justify-center">
                <Icon className="w-5 h-5 text-terracotta-500" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-display text-xl font-700 text-bark">{value}</p>
                <p className="font-body text-xs text-stone-mid">{label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bio */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-xl font-700 text-bark mb-4">
            About {artisan.name.split(" ")[0]}
          </h2>
          <p className="font-body text-base text-stone-dark leading-relaxed">
            {artisan.bio}
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            {artisan.badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 bg-cream-100 border border-cream-200 text-bark text-xs font-500 rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="pb-16">
          <h2 className="font-display text-2xl font-700 text-bark mb-8">
            {artisan.name.split(" ")[0]}&apos;s Collection
          </h2>
          {artisanProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {artisanProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="font-body text-base text-stone-mid">
              No products listed yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
