import Link from "next/link";
import { ArrowRight } from "lucide-react";
// 1. Ensure we are using the named import for ProductCard
import { ProductCard } from "@/components/ui/ProductCard"; 
// 2. Import our live database fetcher
import { getAllProducts } from "@/lib/data-fetch"; 

// 3. Make the component async!
export default async function FeaturedProducts() {
  // 4. Fetch the live data and slice the first 4 newest items
  const allProducts = await getAllProducts();
  const featured = allProducts.slice(0, 4);

  return (
    <section className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-body text-xs font-600 text-terracotta-500 uppercase tracking-widest mb-3">
              Curated Selection
            </p>
            {/* I changed this text slightly since we removed the manual "isFeatured" boolean */}
            <h2 className="font-display text-4xl md:text-5xl font-700 text-bark leading-tight">
              Newest Additions
            </h2> 
          </div>
          <Link
            href="/marketplace"
            className="hidden md:inline-flex items-center gap-2 font-body text-sm font-500 text-bark hover:text-terracotta-500 transition-colors group"
          >
            View all
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 5. ADAPTER REMOVED! The live data maps perfectly to ProductCard */}
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            href="/marketplace"
            className="inline-flex items-center gap-2 px-6 py-3 border border-bark text-bark font-500 rounded-full hover:bg-bark hover:text-cream-50 transition-all"
          >
            Browse All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}