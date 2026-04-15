"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft, ShoppingBag, Heart, Star, MapPin, Package, Shield, Truck, RefreshCw, Plus, Minus,
} from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";
import { ProductCard } from "@/components/ui/ProductCard";
import { Product } from "@/lib/definitions";

export default function ProductDetailClient({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  // Safe fallbacks for UI elements not currently in the DB Schema
  const rating = 5.0;
  const reviews = 12;
  const materials = ["Premium Materials", "Handcrafted"];
  const tags = [product.category.toLowerCase(), "artisan", "unique"];
  const location = "Global";

  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8 font-body text-sm text-stone-mid">
          <Link href="/" className="hover:text-terracotta-500 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/marketplace" className="hover:text-terracotta-500 transition-colors">Marketplace</Link>
          <span>/</span>
          <span className="text-bark">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative rounded-3xl overflow-hidden aspect-square bg-cream-100">
              {/* FIXED: Uses product.image_url from the DB */}
              <Image
                src={product.image_url || "/placeholder.jpg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
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
                      <Star key={i} className={`w-4 h-4 ${i <= Math.floor(rating) ? "text-cream-400 fill-cream-400" : "text-cream-200 fill-cream-200"}`} strokeWidth={0} />
                    ))}
                  </div>
                  <span className="font-body text-sm font-600 text-bark">{rating}</span>
                  <span className="font-body text-sm text-stone-mid">({reviews} reviews)</span>
                </div>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="font-display text-4xl font-700 text-bark">
                  {formatPrice(product.price)}
                </span>
              </div>
            </div>

            {/* Artisan */}
            <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-cream-200">
              <div className="w-10 h-10 rounded-full bg-terracotta-100 flex items-center justify-center text-lg font-600 text-terracotta-600 uppercase">
                {/* FIXED: Uses artisan_email */}
                {product.artisan_email[0]}
              </div>
              <div className="flex-1">
                <p className="font-body text-sm text-stone-mid">Made by</p>
                <p className="font-body text-sm font-600 text-bark truncate">
                  {product.artisan_email}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-stone-mid">
                <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span className="font-body text-xs">{location}</span>
              </div>
            </div>

            {/* Description */}
            <p className="font-body text-base text-stone-dark leading-relaxed">
              {product.description || "A beautifully handcrafted item."}
            </p>

            {/* Materials */}
            <div>
              <p className="font-body text-xs font-600 text-bark uppercase tracking-widest mb-3">Materials</p>
              <div className="flex flex-wrap gap-2">
                {materials.map((mat) => (
                  <span key={mat} className="px-3 py-1.5 bg-cream-100 text-bark text-xs font-500 rounded-full capitalize">{mat}</span>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="px-3 py-1.5 border border-cream-200 text-stone-mid text-xs rounded-full">#{tag}</span>
              ))}
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex gap-3 items-center">
              <div className="flex items-center gap-2 bg-cream-100 rounded-full px-2 py-2">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-cream-200 transition-colors">
                  <Minus className="w-4 h-4 text-bark" />
                </button>
                <span className="font-body text-base font-600 text-bark w-8 text-center">{quantity}</span>
                <button onClick={() => setQuantity(Math.min(product.stock, quantity + 1))} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-cream-200 transition-colors">
                  <Plus className="w-4 h-4 text-bark" />
                </button>
              </div>

              <button
                onClick={handleAdd}
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-full font-500 transition-all duration-300 ${added ? "bg-forest-500 text-white" : "bg-bark text-cream-50 hover:bg-terracotta-600"}`}
              >
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                {added ? "Added to Cart!" : "Add to Cart"}
              </button>
            </div>

            {/* Stock */}
            <p className="font-body text-xs text-stone-mid flex items-center gap-1.5">
              <Package className="w-3.5 h-3.5" strokeWidth={1.5} />
              {product.stock <= 5 ? `Only ${product.stock} left in stock` : "In stock"}
            </p>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div>
            <h2 className="font-display text-2xl font-700 text-bark mb-8">You might also love</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* No more red underlines here! 'related' maps perfectly to ProductCard */}
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