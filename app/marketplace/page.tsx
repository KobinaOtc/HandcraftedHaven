import { getAllProducts } from "@/lib/data-fetch";
import MarketplaceClient from "./MarketplaceClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Shop Handcrafted Items | Handcrafted Haven",
  description: "Discover unique handcrafted treasures from artisans worldwide.",
};

export default async function MarketplacePage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  // 1. Securely fetch all live products from Vercel Postgres
  const dbProducts = await getAllProducts();

  // 2. Pass the live data down to the Client Component for filtering
  return (
    <MarketplaceClient
      products={dbProducts}
      initialCategory={searchParams.category}
    />
  );
}