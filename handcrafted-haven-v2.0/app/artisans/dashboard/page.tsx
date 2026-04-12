import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Plus, Package } from "lucide-react";

export const metadata = {
  title: "Artisan Dashboard | Handcrafted Haven",
};

export default async function DashboardPage() {
  // Fetch the active session from NextAuth
  const session = await auth();

  // Extra layer of protection: redirect if somehow accessed without a session
  if (!session?.user) {
    redirect("/auth/login");
  }

  // Placeholder for products. Later, we will use @vercel/postgres 
  // to run: SELECT * FROM products WHERE artisan_email = session.user.email
  const products: any[] = []; 

  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-8 py-24 min-h-screen">
      <div className="flex items-center justify-between mb-8 mt-12">
        <div>
          <h1 className="font-display text-3xl font-600 text-bark">
            Dashboard
          </h1>
          <p className="text-stone-dark mt-2 font-body text-sm">
            Welcome back, {session.user.name || session.user.email}. Manage your catalog here.
          </p>
        </div>
        <Link
          href="/artisans/dashboard/products/create"
          className="flex items-center gap-2 px-5 py-2.5 bg-terracotta-500 text-cream-50 rounded-full hover:bg-terracotta-600 transition-colors text-sm font-500"
        >
          <Plus className="w-4 h-4" />
          Add New Product
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-cream-200 p-8">
        <div className="flex items-center gap-3 mb-6 border-b border-cream-100 pb-4">
          <Package className="w-5 h-5 text-terracotta-500" />
          <h2 className="font-display text-xl font-500 text-bark">Your Catalog</h2>
        </div>

        {/* Conditional rendering based on whether they have products */}
        {products.length === 0 ? (
          <div className="text-center py-12">
            <Package className="w-12 h-12 text-cream-200 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-bark mb-2">No products found</h3>
            <p className="text-stone-dark text-sm mb-6">
              You haven't added any handcrafted items to your shop yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* We will map over actual Product Cards here later */}
          </div>
        )}
      </div>
    </main>
  );
}