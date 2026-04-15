import HeroSection from "@/components/sections/HeroSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import FeaturedArtisans from "@/components/sections/FeaturedArtisans";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <FeaturedArtisans />

      {/* Values Band */}
      <section className="py-16 bg-white border-y border-cream-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: "🌿",
                title: "Sustainably Made",
                desc: "Natural & recycled materials",
              },
              {
                icon: "🤝",
                title: "Fair Trade",
                desc: "Artisans earn fair prices",
              },
              {
                icon: "🚚",
                title: "Free Shipping",
                desc: "On orders over $75",
              },
              {
                icon: "♻️",
                title: "Eco Packaging",
                desc: "100% recyclable packaging",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center gap-3">
                <span className="text-3xl">{item.icon}</span>
                <p className="font-display text-sm font-600 text-bark">
                  {item.title}
                </p>
                <p className="font-body text-xs text-stone-mid">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}
