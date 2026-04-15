import Image from "next/image";
import { Tag, Package } from "lucide-react";
import { Product } from "@/lib/definitions";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="w-full h-full flex flex-col bg-white rounded-2xl shadow-sm border border-cream-200 overflow-hidden hover:shadow-md transition-shadow group">
      {/* Product Image */}
      {/* Note the shrink-0 added here so the image height doesn't collapse */}
      <div className="relative h-48 w-full bg-cream-50 overflow-hidden shrink-0">
        {product.image_url ? (
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-stone-300">
            <Package size={48} />
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-600 text-bark border border-cream-100 shadow-sm">
          ${Number(product.price).toFixed(2)}
        </div>
      </div>

      {/* Product Info */}
      {/* Added flex-grow so this section expands to push the footer down */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-1.5 mb-2">
          <Tag className="w-3.5 h-3.5 text-terracotta-500" />
          <span className="text-[10px] uppercase tracking-wider font-700 text-stone-400">
            {product.category}
          </span>
        </div>
        
        <h3 className="font-display text-lg font-600 text-bark mb-1 truncate">
          {product.name}
        </h3>
        
        {/* Added flex-grow here to consume empty vertical space */}
        <p className="text-stone-dark text-sm line-clamp-2 font-body leading-relaxed mb-4 flex-grow">
          {product.description || "No description provided for this handcrafted item."}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-cream-100 mt-auto">
          <div className="flex items-center gap-1 text-stone-400">
            <Package className="w-4 h-4" />
            <span className="text-xs">In Stock</span>
          </div>
          <button className="text-xs font-600 text-terracotta-500 hover:text-terracotta-600 transition-colors uppercase tracking-tight">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}