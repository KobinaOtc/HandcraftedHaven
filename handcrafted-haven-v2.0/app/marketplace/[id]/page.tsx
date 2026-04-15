"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ShoppingBag,
  Heart,
  Star,
  MapPin,
  Package,
  Shield,
  Truck,
  RefreshCw,
  Plus,
  Minus,
} from "lucide-react";
import { products } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";
import { ProductCard } from "@/components/ui/ProductCard";
import { useState } from "react";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find((p) => p.id === params.id);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAdd = () => {
    // Format the static data to match the database schema
    const dbFormattedProduct = {
      ...product,
      id: product.id,
      image_url: product.image, // Map old image to new image_url
      artisan_email: product.artisan, // Map old artisan to email
      stock: product.stock || 1,
      description: product.description || null,
    };

    addItem(dbFormattedProduct, quantity); // Pass the formatted product!
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8 font-body text-sm text-stone-mid">
          <Link href="/" className="hover:text-terracotta-500 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/marketplace" className="hover:text-terracotta-500 transition-colors">
            Marketplace
          </Link>
          <span>/</span>
          <span className="text-bark">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative rounded-3xl overflow-hidden aspect-square bg-cream-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.isNew && (
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-forest-500 text-white text-xs font-600 rounded-full">
                    New Arrival
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-body text-xs font-600 text-terracotta-500 uppercase tracking-widest mb-2">
                {product.category}
              </p>
              <h1 className="font-display text-3xl md:text-4xl font-700 text-bark leading-tight mb-3">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i <= Math.floor(product.rating)
                            ? "text-cream-400 fill-cream-400"
                            : "text-cream-200 fill-cream-200"
                        }`}
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <span className="font-body text-sm font-600 text-bark">
                    {product.rating}
                  </span>
                  <span className="font-body text-sm text-stone-mid">
                    ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="font-display text-4xl font-700 text-bark">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="font-body text-lg text-stone-mid line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>

            {/* Artisan */}
            <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-cream-200">
              <div className="w-10 h-10 rounded-full bg-terracotta-100 flex items-center justify-center text-lg font-600 text-terracotta-600">
                {product.artisan[0]}
              </div>
              <div className="flex-1">
                <p className="font-body text-sm text-stone-mid">Made by</p>
                <p className="font-body text-sm font-600 text-bark">
                  {product.artisan}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-stone-mid">
                <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span className="font-body text-xs">{product.location}</span>
              </div>
            </div>

            {/* Description */}
            <p className="font-body text-base text-stone-dark leading-relaxed">
              {product.description}
            </p>

            {/* Materials */}
            <div>
              <p className="font-body text-xs font-600 text-bark uppercase tracking-widest mb-3">
                Materials
              </p>
              <div className="flex flex-wrap gap-2">
                {product.materials.map((mat) => (
                  <span
                    key={mat}
                    className="px-3 py-1.5 bg-cream-100 text-bark text-xs font-500 rounded-full capitalize"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 border border-cream-200 text-stone-mid text-xs rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex gap-3 items-center">
              <div className="flex items-center gap-2 bg-cream-100 rounded-full px-2 py-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-cream-200 transition-colors"
                >
                  <Minus className="w-4 h-4 text-bark" />
                </button>
                <span className="font-body text-base font-600 text-bark w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() =>
                    setQuantity(Math.min(product.stock, quantity + 1))
                  }
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-cream-200 transition-colors"
                >
                  <Plus className="w-4 h-4 text-bark" />
                </button>
              </div>

              <button
                onClick={handleAdd}
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-full font-500 transition-all duration-300 ${
                  added
                    ? "bg-forest-500 text-white"
                    : "bg-bark text-cream-50 hover:bg-terracotta-600"
                }`}
              >
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                {added ? "Added to Cart!" : "Add to Cart"}
              </button>

              <button className="w-14 h-14 flex items-center justify-center border border-cream-200 rounded-full hover:bg-cream-100 transition-colors">
                <Heart className="w-5 h-5 text-bark" strokeWidth={1.5} />
              </button>
            </div>

            {/* Stock */}
            <p className="font-body text-xs text-stone-mid flex items-center gap-1.5">
              <Package className="w-3.5 h-3.5" strokeWidth={1.5} />
              {product.stock <= 5
                ? `Only ${product.stock} left in stock`
                : "In stock"}
            </p>

            {/* Guarantees */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-cream-200">
              {[
                { icon: Truck, label: "Free over $75" },
                { icon: Shield, label: "Secure checkout" },
                { icon: RefreshCw, label: "30-day returns" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <Icon className="w-4 h-4 text-terracotta-500" strokeWidth={1.5} />
                  <span className="font-body text-xs text-stone-mid">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div>
            <h2 className="font-display text-2xl font-700 text-bark mb-8">
              You might also love
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
