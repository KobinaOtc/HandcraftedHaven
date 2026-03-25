"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Plus, Minus, Trash2, ArrowRight, ArrowLeft } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-cream-50 pt-20 flex items-center justify-center">
        <div className="text-center max-w-md px-6 py-20">
          <div className="w-24 h-24 rounded-full bg-cream-100 flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-10 h-10 text-stone-warm" strokeWidth={1} />
          </div>
          <h1 className="font-display text-3xl font-700 text-bark mb-3">
            Your cart is empty
          </h1>
          <p className="font-body text-base text-stone-mid mb-8">
            Discover beautiful handcrafted pieces from our artisans.
          </p>
          <Link
            href="/marketplace"
            className="inline-flex items-center gap-2 px-8 py-4 bg-bark text-cream-50 font-500 rounded-full hover:bg-terracotta-600 transition-colors"
          >
            Browse Marketplace
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  const shipping = total >= 75 ? 0 : 8.99;
  const tax = total * 0.08;
  const grandTotal = total + shipping + tax;

  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-10">
          <h1 className="font-display text-4xl font-700 text-bark">
            Your Cart
          </h1>
          <button
            onClick={clearCart}
            className="font-body text-sm text-stone-mid hover:text-terracotta-500 transition-colors"
          >
            Clear all
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-5 bg-white rounded-3xl p-5 border border-cream-200"
              >
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/marketplace/${item.product.id}`}
                    className="font-display text-lg font-600 text-bark hover:text-terracotta-500 transition-colors block truncate"
                  >
                    {item.product.name}
                  </Link>
                  <p className="font-body text-sm text-stone-mid mb-1">
                    by {item.product.artisan}
                  </p>
                  <p className="font-body text-xs text-stone-mid mb-4">
                    📍 {item.product.location}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-cream-100 rounded-full px-2 py-1.5">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-cream-200 transition-colors"
                      >
                        <Minus className="w-3 h-3 text-bark" />
                      </button>
                      <span className="font-body text-sm font-600 text-bark w-5 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-cream-200 transition-colors"
                      >
                        <Plus className="w-3 h-3 text-bark" />
                      </button>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="font-display text-xl font-700 text-bark">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-red-50 hover:text-red-500 transition-colors text-stone-mid"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/marketplace"
              className="inline-flex items-center gap-2 font-body text-sm text-bark hover:text-terracotta-500 transition-colors mt-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-3xl border border-cream-200 p-6 sticky top-28">
              <h2 className="font-display text-xl font-700 text-bark mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="font-body text-sm text-stone-mid">
                    Subtotal
                  </span>
                  <span className="font-body text-sm font-600 text-bark">
                    {formatPrice(total)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-body text-sm text-stone-mid">
                    Shipping
                  </span>
                  <span className="font-body text-sm font-600 text-bark">
                    {shipping === 0 ? (
                      <span className="text-forest-600">Free</span>
                    ) : (
                      formatPrice(shipping)
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-body text-sm text-stone-mid">
                    Estimated Tax
                  </span>
                  <span className="font-body text-sm font-600 text-bark">
                    {formatPrice(tax)}
                  </span>
                </div>
              </div>

              {shipping > 0 && (
                <div className="p-3 bg-forest-50 border border-forest-200 rounded-xl mb-6 text-center">
                  <p className="font-body text-xs text-forest-700">
                    Add {formatPrice(75 - total)} more for free shipping!
                  </p>
                </div>
              )}

              <div className="flex justify-between py-4 border-t border-cream-200 mb-6">
                <span className="font-display text-base font-700 text-bark">
                  Total
                </span>
                <span className="font-display text-xl font-700 text-bark">
                  {formatPrice(grandTotal)}
                </span>
              </div>

              <button className="w-full py-4 bg-bark text-cream-50 font-500 rounded-full hover:bg-terracotta-600 transition-colors">
                Proceed to Checkout
              </button>

              <div className="mt-4 flex items-center justify-center gap-4">
                {["Visa", "MC", "PayPal", "Apple Pay"].map((pay) => (
                  <span
                    key={pay}
                    className="font-body text-xs text-stone-mid bg-cream-100 px-2 py-1 rounded"
                  >
                    {pay}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
