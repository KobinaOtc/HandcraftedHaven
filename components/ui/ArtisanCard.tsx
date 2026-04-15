import Image from "next/image";
import Link from "next/link";
import { MapPin, Star, Package } from "lucide-react";
import { Artisan } from "@/lib/data";
import { cn, formatNumber } from "@/lib/utils";

interface ArtisanCardProps {
  artisan: Artisan;
  className?: string;
}

export default function ArtisanCard({ artisan, className }: ArtisanCardProps) {
  return (
    <Link
      href={`/artisans/${artisan.id}`}
      className={cn(
        "group flex flex-col bg-white rounded-3xl overflow-hidden border border-cream-200 hover-lift transition-all duration-300",
        className
      )}
    >
      {/* Cover Image */}
      <div className="relative h-36 overflow-hidden bg-cream-100">
        <Image
          src={artisan.coverImage}
          alt={artisan.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bark/60 to-transparent" />
      </div>

      {/* Avatar */}
      <div className="relative px-6 -mt-8">
        <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-4 border-white shadow-md">
          <Image
            src={artisan.avatar}
            alt={artisan.name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Info */}
      <div className="px-6 pb-6 pt-3 flex flex-col gap-3">
        <div>
          <h3 className="font-display text-lg font-600 text-bark group-hover:text-terracotta-500 transition-colors">
            {artisan.name}
          </h3>
          <p className="font-body text-sm text-stone-mid">{artisan.specialty}</p>
        </div>

        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-stone-mid" strokeWidth={1.5} />
          <span className="font-body text-xs text-stone-mid">
            {artisan.location}
          </span>
        </div>

        <div className="flex items-center gap-4 py-3 border-y border-cream-100">
          <div className="flex items-center gap-1.5">
            <Star
              className="w-3.5 h-3.5 text-cream-400 fill-cream-400"
              strokeWidth={0}
            />
            <span className="font-body text-xs font-600 text-bark">
              {artisan.rating}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Package className="w-3.5 h-3.5 text-stone-mid" strokeWidth={1.5} />
            <span className="font-body text-xs text-stone-mid">
              {artisan.totalProducts} products
            </span>
          </div>
          <div className="ml-auto">
            <span className="font-body text-xs text-stone-mid">
              {formatNumber(artisan.totalSales)} sales
            </span>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          {artisan.badges.slice(0, 2).map((badge) => (
            <span
              key={badge}
              className="px-2.5 py-1 bg-cream-100 text-bark text-xs font-500 rounded-full"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
