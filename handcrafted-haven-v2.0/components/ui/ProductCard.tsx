"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, MapPin, Star } from "lucide-react";
import { Product } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { cn, formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
  variant?: "default" | "compact" | "featured";
}

export default function ProductCard({
  product,
  className,
  variant = "default",
}: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
  };

  return (
    <Link
      href={`/marketplace/${product.id}`}
      className={cn(
        "group flex flex-col bg-white rounded-3xl overflow-hidden border border-cream-200 hover-lift transition-all duration-300",
        className
      )}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-cream-100 aspect-[4/3]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-2.5 py-1 bg-forest-500 text-white text-xs font-600 rounded-full">
              New
            </span>
          )}
          {product.isBestseller && (
            <span className="px-2.5 py-1 bg-terracotta-500 text-white text-xs font-600 rounded-full">
              Bestseller
            </span>
          )}
          {product.originalPrice && (
            <span className="px-2.5 py-1 bg-cream-500 text-white text-xs font-600 rounded-full">
              Sale
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => e.preventDefault()}
            className="w-9 h-9 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white hover:text-terracotta-500 transition-colors shadow-sm"
            aria-label="Add to wishlist"
          >
            <Heart className="w-4 h-4" strokeWidth={1.5} />
          </button>
          <button
            onClick={handleAddToCart}
            className="w-9 h-9 bg-bark/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-terracotta-500 text-white transition-colors shadow-sm"
            aria-label="Add to cart"
          >
            <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>

        {/* Custom badge */}
        {product.customizable && (
          <div className="absolute bottom-3 left-3">
            <span className="px-2.5 py-1 bg-white/90 backdrop-blur text-bark text-xs font-500 rounded-full">
              ✦ Customizable
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p className="font-body text-xs text-stone-mid mb-0.5">
              {product.category}
            </p>
            <h3 className="font-display text-base font-600 text-bark leading-tight group-hover:text-terracotta-500 transition-colors line-clamp-2">
              {product.name}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <Star
            className="w-3.5 h-3.5 text-cream-400 fill-cream-400"
            strokeWidth={0}
          />
          <span className="font-body text-xs font-600 text-bark">
            {product.rating}
          </span>
          <span className="font-body text-xs text-stone-mid">
            ({product.reviews})
          </span>
        </div>

        <div className="flex items-center gap-1.5 mt-auto">
          <MapPin className="w-3 h-3 text-stone-mid" strokeWidth={1.5} />
          <span className="font-body text-xs text-stone-mid">
            {product.location}
          </span>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-cream-100">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-lg font-700 text-bark">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="font-body text-sm text-stone-mid line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <span className="font-body text-xs text-stone-mid">
            by {product.artisan.split(" ")[0]}
          </span>
        </div>
      </div>
    </Link>
  );
}
