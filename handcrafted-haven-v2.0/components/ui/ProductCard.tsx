import Image from "next/image";
import { Tag, Package, MapPin } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image_url: string;
  description?: string;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-cream-200 overflow-hidden hover:shadow-md transition-shadow group">
      {/* Product Image */}
      <div className="relative h-48 w-full bg-cream-50 overflow-hidden">
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
      <div className="p-5">
        <div className="flex items-center gap-1.5 mb-2">
          <Tag className="w-3.5 h-3.5 text-terracotta-500" />
          <span className="text-[10px] uppercase tracking-wider font-700 text-stone-400">
            {product.category}
          </span>
        </div>
        
        <h3 className="font-display text-lg font-600 text-bark mb-1 truncate">
          {product.name}
        </h3>
        
        <p className="text-stone-dark text-sm line-clamp-2 font-body leading-relaxed mb-4">
          {product.description || "No description provided for this handcrafted item."}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-cream-100">
          <div className="flex items-center gap-1 text-stone-400">
            <Package className="w-4 h-4" />
            <span className="text-xs">In Stock</span>
          </div>
          <button className="text-xs font-600 text-terracotta-500 hover:text-terracotta-600 transition-colors uppercase tracking-tight">
            Edit Details
          </button>
        </div>
      </div>
    </div>
  );
}