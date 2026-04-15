"use client";

import { useState, useMemo, useEffect, useRef, FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, ChevronDown, X } from "lucide-react";
import { products, categories } from "@/lib/data";
import { ProductCard } from "@/components/ui/ProductCard";
import { Product } from "@/lib/definitions";
import { cn } from "@/lib/utils";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest First" },
];

export default function MarketplaceClient({
  products, // We now receive live products as a prop!
  initialCategory,
}: {
  products: Product[];
  initialCategory?: string;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    initialCategory || "All"
  );
  const router = useRouter();
  const searchParams = useSearchParams();
  const querySearch = searchParams.get("q") ?? "";
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [search, setSearch] = useState(querySearch);
  const [sort, setSort] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);

  useEffect(() => {
    if (querySearch) {
      setSearch(querySearch);
    } else if (typeof window !== "undefined") {
      const storedSearch = localStorage.getItem("marketplaceSearch") ?? "";
      if (storedSearch) {
        setSearch(storedSearch);
      }
    }
  }, [querySearch]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (search.trim()) {
        localStorage.setItem("marketplaceSearch", search.trim());
      } else {
        localStorage.removeItem("marketplaceSearch");
      }
    }
  }, [search]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = new URLSearchParams();
    if (search.trim()) {
      params.set("q", search.trim());
    }

    const queryString = params.toString();
    router.push(`/marketplace${queryString ? `?${queryString}` : ""}`);
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (search) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.artisan.toLowerCase().includes(search.toLowerCase()) ||
          p.category.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    switch (sort) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result = result.filter((p) => p.isNew).concat(result.filter((p) => !p.isNew));
        break;
      default:
        result = result.filter((p) => p.isFeatured).concat(result.filter((p) => !p.isFeatured));
    }

    return result;
  }, [search, selectedCategory, sort, priceRange]);

  
  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      {/* Page Header */}
      <div className="bg-white border-b border-cream-200 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="font-display text-4xl font-700 text-bark mb-2">
            Marketplace
          </h1>
          <p className="font-body text-sm text-stone-mid">
            {products.length} handcrafted pieces from artisans worldwide
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Search + Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <form onSubmit={handleSearchSubmit} className="relative flex-1">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-mid"
              strokeWidth={1.5}
            />
            <input
              ref={inputRef}
              autoFocus
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products, artisans..."
              className="w-full pl-11 pr-12 py-3 bg-white border border-cream-200 rounded-full font-body text-sm text-bark placeholder-stone-mid focus:outline-none focus:border-terracotta-400 transition-colors"
            />
            <button
              type="submit"
              aria-label="Submit search"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center bg-terracotta-500 text-white hover:bg-terracotta-600 transition-colors"
            >
              <Search className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </form>

          <div className="flex gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={cn(
                "flex items-center gap-2 px-4 py-3 border rounded-full font-body text-sm font-500 transition-colors",
                showFilters
                  ? "bg-bark text-cream-50 border-bark"
                  : "bg-white border-cream-200 text-bark hover:border-terracotta-400"
              )}
            >
              <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
              Filters
            </button>

            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-white border border-cream-200 rounded-full px-5 pr-10 py-3 font-body text-sm text-bark focus:outline-none focus:border-terracotta-400 cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-mid pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="bg-white border border-cream-200 rounded-2xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Category */}
              <div>
                <h3 className="font-body text-sm font-600 text-bark mb-4">
                  Category
                </h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-xs font-500 transition-colors border",
                      !selectedCategory
                        ? "bg-bark text-cream-50 border-bark"
                        : "bg-white text-bark border-cream-200 hover:border-terracotta-400"
                    )}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id === selectedCategory ? null : cat.id)}
                      className={cn(
                        "px-3 py-1.5 rounded-full text-xs font-500 transition-colors border",
                        selectedCategory === cat.id
                          ? "bg-bark text-cream-50 border-bark"
                          : "bg-white text-bark border-cream-200 hover:border-terracotta-400"
                      )}
                    >
                      {cat.icon} {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-body text-sm font-600 text-bark mb-4">
                  Price Range: ${priceRange[0]} — ${priceRange[1]}
                </h3>
                <input
                  type="range"
                  min={0}
                  max={500}
                  step={10}
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], Number(e.target.value)])
                  }
                  className="w-full accent-terracotta-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* Active Filters */}
        {(selectedCategory || search) && (
          <div className="flex items-center gap-2 mb-6">
            <span className="font-body text-xs text-stone-mid">Active filters:</span>
            {selectedCategory && (
              <span className="flex items-center gap-1 px-3 py-1 bg-cream-100 rounded-full text-xs text-bark">
                {categories.find((c) => c.id === selectedCategory)?.name}
                <button onClick={() => setSelectedCategory(null)}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {search && (
              <span className="flex items-center gap-1 px-3 py-1 bg-cream-100 rounded-full text-xs text-bark">
                &quot;{search}&quot;
                <button onClick={() => setSearch("")}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        )}

        {/* Results count */}
        <p className="font-body text-sm text-stone-mid mb-6">
          Showing {filtered.length} of {products.length} products
        </p>

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <span className="text-5xl block mb-4">🔍</span>
            <p className="font-display text-xl font-600 text-bark mb-2">
              No products found
            </p>
            <p className="font-body text-sm text-stone-mid">
              Try adjusting your search or filters
            </p>
          </div>
        ) : (
        <div>
          {/* Product Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <span className="text-5xl block mb-4">🔍</span>
              <p className="font-display text-xl font-600 text-bark mb-2">
                No products found
              </p>
              <p className="font-body text-sm text-stone-mid">
                Try adjusting your search or filters
              </p>
            </div>
          ) : (
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* NO MORE ADAPTER! We just map the live database products directly */}
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
        )}
      </div>
    </div>
  );
}
