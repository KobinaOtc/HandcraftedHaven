import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/data";

export default function CategoriesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-body text-xs font-600 text-terracotta-500 uppercase tracking-widest mb-3">
            Explore
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-bark">
            Shop by Category
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              href={`/marketplace?category=${cat.id}`}
              className={`group relative rounded-2xl overflow-hidden bg-cream-100 hover-lift cursor-pointer animate-fade-up delay-${(i + 1) * 100}`}
            >
              {/* Image */}
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bark/70 via-bark/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="text-2xl block mb-1">{cat.icon}</span>
                <p className="font-body text-xs font-600 text-white leading-tight">
                  {cat.name.split(" ")[0]}
                </p>
                <p className="font-body text-xs text-cream-200/70">
                  {cat.count}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
