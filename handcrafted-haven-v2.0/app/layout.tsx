import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import { CartProvider } from "@/lib/cart-context";

export const metadata: Metadata = {
  title: {
    default: "Handcrafted Haven — Unique Artisan Marketplace",
    template: "%s | Handcrafted Haven",
  },
  description:
    "Discover and shop unique handcrafted items from talented artisans worldwide. Support independent makers and find one-of-a-kind treasures.",
  keywords: [
    "handmade",
    "artisan",
    "crafts",
    "marketplace",
    "unique gifts",
    "pottery",
    "jewelry",
    "textiles",
  ],
  openGraph: {
    title: "Handcrafted Haven",
    description: "A curated marketplace for handcrafted treasures",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-cream-50 antialiased">
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
