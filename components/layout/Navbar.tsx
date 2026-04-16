"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Search, Menu, X, Leaf } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { cn } from "@/lib/utils";
// Import our new server actions
import { checkIsLoggedIn, logout } from "@/lib/actions";

const navLinks = [
  { href: "/marketplace", label: "Shop" },
  { href: "/artisans", label: "Artisans" },
  { href: "/about", label: "Our Story" },
];

export default function Navbar() {
  const { itemCount, toggleCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [savedSearch, setSavedSearch] = useState("");
  // New state to track if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSavedSearch(localStorage.getItem("marketplaceSearch") ?? "");
    }
    // Fetch the session state on mount
    checkIsLoggedIn().then((status) => setIsLoggedIn(status));
  }, []);

  const searchHref = savedSearch ? `/marketplace?q=${encodeURIComponent(savedSearch)}` : "/marketplace";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-500", isScrolled ? "bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-cream-200" : "bg-transparent")}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 bg-terracotta-500 rounded-full flex items-center justify-center group-hover:bg-terracotta-600 transition-colors">
                <Leaf className="w-5 h-5 text-cream-50" strokeWidth={1.5} />
              </div>
              <div>
                <span className="font-display text-xl font-600 text-bark tracking-tight">Handcrafted</span>
                <span className="font-display text-xl font-400 italic text-terracotta-500"> Haven</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="font-body text-sm font-500 text-stone-dark hover:text-terracotta-500 transition-colors relative group">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracotta-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
              
              {/* NEW: Dashboard link only visible if logged in */}
              {isLoggedIn && (
                <Link href="/artisans/dashboard" className="font-body text-sm font-600 text-terracotta-600 hover:text-terracotta-500 transition-colors relative group">
                  Dashboard
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracotta-500 group-hover:w-full transition-all duration-300" />
                </Link>
              )}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* ... Keep Search and Cart Buttons the same ... */}

              {/* UPDATED: Toggle between Sign In and Log Out */}
              {isLoggedIn ? (
                <button
                  onClick={async () => {
                    setIsLoggedIn(false); // Optimistically update the UI instantly
                    await logout();       // Then fire the server action
                  }}
                  className="hidden md:block px-5 py-2 bg-stone-200 text-bark text-sm font-500 rounded-full hover:bg-stone-300 transition-colors"
                >
                  Log Out
                </button>
              ) : (
                <Link
                  href="/auth/login"
                  className="hidden md:block px-5 py-2 bg-bark text-cream-50 text-sm font-500 rounded-full hover:bg-terracotta-600 transition-colors"
                >
                  Sign In
                </Link>
              )}

              <button onClick={() => setIsMobileOpen(true)} className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-cream-100 transition-colors">
                <Menu className="w-5 h-5 text-bark" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 bg-cream-50">
          <div className="flex flex-col h-full px-6 py-8">
            <div className="flex items-center justify-between mb-12">
              <span className="font-display text-xl font-600 text-bark">Menu</span>
              <button onClick={() => setIsMobileOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-cream-100">
                <X className="w-5 h-5 text-bark" />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsMobileOpen(false)} className="font-display text-4xl font-500 text-bark hover:text-terracotta-500 transition-colors">
                  {link.label}
                </Link>
              ))}
              
              {/* NEW: Mobile Dashboard Link */}
              {isLoggedIn && (
                 <Link href="/artisans/dashboard" onClick={() => setIsMobileOpen(false)} className="font-display text-4xl font-500 text-terracotta-500 hover:text-terracotta-600 transition-colors">
                 Dashboard
               </Link>
              )}
            </div>
            
            <div className="mt-auto">
              {/* UPDATED: Mobile Toggle between Sign In and Log Out */}
              {isLoggedIn ? (
                <button 
                   onClick={async () => {
                     setIsLoggedIn(false); // Optimistically update the UI instantly
                     await logout();       // Then fire the server action
                   }} 
                   className="w-full block text-center px-8 py-4 bg-stone-200 text-bark text-base font-500 rounded-full hover:bg-stone-300 transition-colors"
                 >
                   Log Out
                 </button>
              ) : (
                <Link href="/auth/login" className="block text-center px-8 py-4 bg-bark text-cream-50 text-base font-500 rounded-full hover:bg-terracotta-600 transition-colors">
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}