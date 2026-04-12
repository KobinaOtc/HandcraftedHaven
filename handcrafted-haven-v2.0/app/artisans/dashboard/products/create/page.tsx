import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Upload Product | Handcrafted Haven",
};

export default async function CreateProductPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/login");
  }

  return (
    <main className="max-w-3xl mx-auto px-6 lg:px-8 py-24 min-h-screen">
      <div className="mt-12 mb-8">
        <h1 className="font-display text-3xl font-600 text-bark">Upload New Product</h1>
        <p className="text-stone-dark mt-2 font-body text-sm">
          Add a new handcrafted item to your catalog.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-cream-200 p-8">
        {/* We will build the CreateProductForm client component here in the future */}
        <p className="text-stone-dark text-sm text-center py-8">
          Product upload form coming soon...
        </p>
      </div>
    </main>
  );
}