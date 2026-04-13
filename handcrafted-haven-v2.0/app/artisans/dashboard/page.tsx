import { auth } from "@/auth";
import { sql } from "@vercel/postgres";
import { ProductCard } from "@/components/ui/ProductCard";
import Link from "next/link";
import { Plus } from "lucide-react";

export default async function DashboardPage() {
  const session = await auth();
  const artisanEmail = session?.user?.email;

  // Fetch only products belonging to this specific artisan
  const { rows: products } = await sql`
    SELECT * FROM products 
    WHERE artisan_email = ${artisanEmail}
    ORDER BY created_at DESC
  `;

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-bark">Your Product Catalog</h1>
        <Link 
          href="/artisans/dashboard/products/create"
          className="bg-terracotta-500 text-white px-4 py-2 rounded-full flex items-center gap-2"
        >
          <Plus size={18} /> Add Product
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-20 bg-cream-50 rounded-xl border-2 border-dashed border-cream-200">
          <p className="text-stone-500">You haven't listed any products yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}