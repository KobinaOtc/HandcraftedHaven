"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingBag, Search, Menu, X, Leaf } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/marketplace", label: "Shop" },
  { href: "/artisans", label: "Artisans" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

const suggestions = [
  "Ceramic mugs",
  "Handwoven baskets",
  "Leather wallets",
  "Wooden bowls",
  "Candles",
  "Jewellery",
  "Pottery",
  "Woven textiles",
  "Glass art",
  "Soap & skincare",
];

export default function Navbar() {
  const { itemCount, toggleCart } = useCart();
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-focus input when modal opens
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  }, [isSearchOpen]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSearchOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setIsSearchOpen(false);
    router.push(`/marketplace?search=${encodeURIComponent(searchQuery.trim())}`);
    setSearchQuery("");
  };

  const handleSuggestion = (term: string) => {
    setIsSearchOpen(false);
    router.push(`/marketplace?search=${encodeURIComponent(term)}`);
    setSearchQuery("");
  };

  const filtered = searchQuery.trim()
    ? suggestions.filter((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : suggestions;

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-cream-200"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 bg-terracotta-500 rounded-full flex items-center justify-center group-hover:bg-terracotta-600 transition-colors">
                <Leaf className="w-5 h-5 text-cream-50" strokeWidth={1.5} />
              </div>
              <div>
                <span className="font-display text-xl font-600 text-bark tracking-tight">
                  Handcrafted
                </span>
                <span className="font-display text-xl font-400 italic text-terracotta-500">
                  {" "}Haven
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm font-500 text-stone-dark hover:text-terracotta-500 transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracotta-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Search button — now opens modal */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="hidden md:flex w-10 h-10 items-center justify-center rounded-full hover:bg-cream-100 transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-bark" strokeWidth={1.5} />
              </button>

              <button
                onClick={toggleCart}
                className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-cream-100 transition-colors"
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5 text-bark" strokeWidth={1.5} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-terracotta-500 text-white text-xs font-600 rounded-full flex items-center justify-center animate-fade-in">
                    {itemCount}
                  </span>
                )}
              </button>

              <Link
                href="/auth/login"
                className="hidden md:block px-5 py-2 bg-bark text-cream-50 text-sm font-500 rounded-full hover:bg-terracotta-600 transition-colors"
              >
                Sign In
              </Link>

              <button
                onClick={() => setIsMobileOpen(true)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-cream-100 transition-colors"
              >
                <Menu className="w-5 h-5 text-bark" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Search Modal ─────────────────────────────────────── */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-bark/60 backdrop-blur-sm"
            onClick={() => setIsSearchOpen(false)}
          />

          {/* Panel slides in from top */}
          <div className="relative z-10 bg-cream-50 w-full shadow-2xl animate-slide-in">
            <div className="max-w-3xl mx-auto px-6 py-6">
              {/* Input row */}
              <form onSubmit={handleSearch} className="flex items-center gap-3">
                <div className="flex-1 flex items-center gap-3 bg-white border border-cream-200 rounded-2xl px-5 py-3.5 shadow-sm focus-within:ring-2 focus-within:ring-terracotta-300 focus-within:border-transparent transition">
                  <Search
                    className="w-5 h-5 text-stone-mid flex-shrink-0"
                    strokeWidth={1.75}
                  />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for handcrafted items, artisans…"
                    className="flex-1 bg-transparent text-bark text-base font-body placeholder:text-stone-warm focus:outline-none"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="text-stone-mid hover:text-bark transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-bark hover:bg-terracotta-600 text-white text-sm font-semibold font-body rounded-2xl transition-colors flex-shrink-0"
                >
                  Search
                </button>
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-cream-100 transition-colors flex-shrink-0"
                  aria-label="Close search"
                >
                  <X className="w-5 h-5 text-bark" />
                </button>
              </form>

              {/* Suggestion pills */}
              <div className="mt-5">
                <p className="text-xs font-semibold tracking-widest uppercase text-stone-mid font-body mb-3">
                  {searchQuery.trim() ? "Matching suggestions" : "Popular searches"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {filtered.map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => handleSuggestion(term)}
                      className="px-4 py-2 bg-white border border-cream-200 hover:border-terracotta-300 hover:bg-terracotta-50 text-bark text-sm font-body rounded-full transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                  {filtered.length === 0 && (
                    <p className="text-sm text-stone-mid font-body">
                      No suggestions — press Enter to search anyway.
                    </p>
                  )}
                </div>
              </div>

              <p className="text-xs text-stone-mid font-body mt-4">
                Press{" "}
                <kbd className="px-1.5 py-0.5 bg-cream-100 border border-cream-200 rounded text-xs font-mono">
                  Esc
                </kbd>{" "}
                to close
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── Mobile Menu ──────────────────────────────────────── */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 bg-cream-50">
          <div className="flex flex-col h-full px-6 py-8">
            <div className="flex items-center justify-between mb-8">
              <span className="font-display text-xl font-600 text-bark">
                Menu
              </span>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-cream-100"
              >
                <X className="w-5 h-5 text-bark" />
              </button>
            </div>

            {/* Mobile search bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!searchQuery.trim()) return;
                setIsMobileOpen(false);
                router.push(
                  `/marketplace?search=${encodeURIComponent(searchQuery.trim())}`
                );
                setSearchQuery("");
              }}
              className="flex items-center gap-2 bg-cream-100 rounded-xl px-4 py-3 mb-8"
            >
              <Search className="w-4 h-4 text-stone-mid flex-shrink-0" strokeWidth={1.75} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search…"
                className="flex-1 bg-transparent text-bark text-sm font-body placeholder:text-stone-warm focus:outline-none"
              />
            </form>

            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="font-display text-4xl font-500 text-bark hover:text-terracotta-500 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-auto">
              <Link
                href="/auth/login"
                className="block text-center px-8 py-4 bg-bark text-cream-50 text-base font-500 rounded-full hover:bg-terracotta-600 transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}