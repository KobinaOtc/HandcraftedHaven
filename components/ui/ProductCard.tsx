import Image from "next/image";
import Link from "next/link"; // 1. Add this import
import { Tag, Package } from "lucide-react";
import { Product } from "@/lib/definitions";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="w-full h-full flex flex-col bg-white rounded-2xl shadow-sm border border-cream-200 overflow-hidden hover:shadow-md transition-shadow group">
      
      {/* 2. Wrap the image in a Link */}
      <Link href={`/marketplace/${product.id}`} className="relative h-48 w-full bg-cream-50 overflow-hidden shrink-0 block">
        {product.image_url ? (
          <Image src={product.image_url} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <div className="flex items-center justify-center h-full text-stone-300"><Package size={48} /></div>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-600 text-bark border border-cream-100 shadow-sm">
          ${Number(product.price).toFixed(2)}
        </div>
      </Link>

      <div className="p-5 flex flex-col flex-grow">
        {/* ... (Keep your existing Tag, Title, and Description code here) ... */}

        <div className="flex items-center justify-between pt-4 border-t border-cream-100 mt-auto">
          <div className="flex items-center gap-1 text-stone-400">
            <Package className="w-4 h-4" />
            <span className="text-xs">In Stock</span>
          </div>
          {/* 3. Change the button to a Link */}
          <Link href={`/marketplace/${product.id}`} className="text-xs font-600 text-terracotta-500 hover:text-terracotta-600 transition-colors uppercase tracking-tight">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}