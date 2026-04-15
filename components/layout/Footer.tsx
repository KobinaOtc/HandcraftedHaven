import Link from "next/link";
import { Leaf, Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bark text-cream-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 bg-terracotta-500 rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-cream-50" strokeWidth={1.5} />
              </div>
              <span className="font-display text-xl text-cream-50">
                Handcrafted <span className="italic text-terracotta-300">Haven</span>
              </span>
            </div>
            <p className="font-body text-sm leading-relaxed text-cream-200/70 max-w-sm mb-8">
              A marketplace where artisans and makers share their craft with the
              world. Every purchase supports independent creators and sustainable
              making.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-cream-200/20 rounded-full flex items-center justify-center hover:border-terracotta-400 hover:text-terracotta-400 transition-colors"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm font-600 text-cream-50 uppercase tracking-widest mb-6">
              Shop
            </h4>
            <ul className="space-y-3">
              {[
                ["All Products", "/marketplace"],
                ["Pottery", "/marketplace?category=pottery"],
                ["Jewelry", "/marketplace?category=jewelry"],
                ["Textiles", "/marketplace?category=textiles"],
                ["Woodwork", "/marketplace?category=woodwork"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-body text-sm text-cream-200/70 hover:text-terracotta-300 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-600 text-cream-50 uppercase tracking-widest mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                ["Our Story", "/about"],
                ["Artisans", "/artisans"],
                ["Sustainability", "/about#sustainability"],
                ["Sell with Us", "/sell"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-body text-sm text-cream-200/70 hover:text-terracotta-300 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cream-200/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-cream-200/40">
            © 2024 Handcrafted Haven. Made with care.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                className="font-body text-xs text-cream-200/40 hover:text-cream-200/70 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
