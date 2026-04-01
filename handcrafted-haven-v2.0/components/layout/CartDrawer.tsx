"use client";

import { X, ShoppingBag, Plus, Minus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, total } =
    useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-bark/40 backdrop-blur-sm z-50"
        onClick={toggleCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-cream-50 z-50 shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream-200">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-bark" strokeWidth={1.5} />
            <h2 className="font-display text-lg font-600 text-bark">
              Your Cart
            </h2>
            {items.length > 0 && (
              <span className="w-6 h-6 bg-terracotta-500 text-white text-xs font-600 rounded-full flex items-center justify-center">
                {items.reduce((s, i) => s + i.quantity, 0)}
              </span>
            )}
          </div>
          <button
            onClick={toggleCart}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-cream-100 transition-colors"
          >
            <X className="w-5 h-5 text-bark" strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 py-20">
              <div className="w-20 h-20 rounded-full bg-cream-100 flex items-center justify-center">
                <ShoppingBag className="w-9 h-9 text-stone-warm" strokeWidth={1} />
              </div>
              <p className="font-display text-lg text-bark">
                Your cart is empty
              </p>
              <p className="font-body text-sm text-stone-mid text-center">
                Discover beautiful handcrafted pieces from our artisans.
              </p>
              <button
                onClick={toggleCart}
                className="mt-2 px-6 py-3 bg-bark text-cream-50 text-sm font-500 rounded-full hover:bg-terracotta-600 transition-colors"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 p-4 bg-white rounded-2xl border border-cream-200"
              >
                <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-body text-sm font-600 text-bark truncate">
                    {item.product.name}
                  </p>
                  <p className="font-body text-xs text-stone-mid mb-3">
                    by {item.product.artisan}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-cream-100 rounded-full px-1 py-1">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-cream-200 transition-colors"
                      >
                        <Minus className="w-3 h-3 text-bark" />
                      </button>
                      <span className="font-body text-sm font-600 text-bark w-4 text-center">
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
                    <div className="flex items-center gap-3">
                      <span className="font-display text-sm font-600 text-bark">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-red-50 hover:text-red-500 transition-colors text-stone-mid"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-cream-200 px-6 py-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-body text-sm text-stone-mid">Subtotal</span>
              <span className="font-display text-xl font-600 text-bark">
                {formatPrice(total)}
              </span>
            </div>
            <p className="font-body text-xs text-stone-mid">
              Shipping and taxes calculated at checkout
            </p>
            <Link
              href="/cart"
              onClick={toggleCart}
              className="block w-full text-center py-4 bg-bark text-cream-50 font-500 rounded-full hover:bg-terracotta-600 transition-colors"
            >
              Checkout
            </Link>
            <button
              onClick={toggleCart}
              className="block w-full text-center py-3 border border-cream-300 text-bark text-sm font-500 rounded-full hover:bg-cream-100 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
