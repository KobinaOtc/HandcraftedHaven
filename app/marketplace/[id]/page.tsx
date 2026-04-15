import { notFound } from "next/navigation";
import { getProductById, getAllProducts } from "@/lib/data-fetch";
import ProductDetailClient from "./ProductDetailClient";

// Ensure dynamic rendering for database queries
export const dynamic = 'force-dynamic';

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // 1. Fetch the exact product from the database
  const product = await getProductById(params.id);

  // 2. Trigger 404 if the product doesn't exist
  if (!product) {
    notFound();
  }

  // 3. Fetch all products so we can find related items in the same category
  const allProducts = await getAllProducts();
  const related = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // 4. Pass the live data securely to the client component
  return (
    <ProductDetailClient product={product} related={related} />
  );
}