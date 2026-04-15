import Image from "next/image";
import Link from "next/link";
import { Leaf, Heart, Globe, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Learn about Handcrafted Haven's mission to connect artisans with conscious consumers.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-cream-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-terracotta-100/60 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="font-body text-xs font-600 text-terracotta-500 uppercase tracking-widest mb-4">
            Our Story
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-700 text-bark leading-tight mb-6">
            Built on craft, community,{" "}
            <em className="font-400 italic text-terracotta-500">and care</em>
          </h1>
          <p className="font-body text-lg text-stone-mid leading-relaxed">
            Handcrafted Haven was born from a simple belief: the objects we
            surround ourselves with should have stories. We created this
            platform so that the hands behind those stories could thrive.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden h-96">
                <Image
                  src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=700&q=80"
                  alt="Artisan at work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-terracotta-500 rounded-2xl p-5 shadow-xl">
                <p className="font-display text-3xl font-700 text-white">
                  2,400+
                </p>
                <p className="font-body text-xs text-terracotta-100">
                  artisans supported
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="font-display text-4xl font-700 text-bark">
                Our Mission
              </h2>
              <p className="font-body text-base text-stone-mid leading-relaxed">
                We believe in the power of handmade. Every item on Handcrafted
                Haven was made by a real person, using skills passed down through
                generations or developed through years of dedicated practice.
              </p>
              <p className="font-body text-base text-stone-mid leading-relaxed">
                Our mission is to create a fairer, more human marketplace — one
                where artisans earn what their work is truly worth, and buyers
                can connect meaningfully with the people who make things.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                {[
                  "Fair pricing",
                  "Direct support",
                  "Sustainable materials",
                  "Community-first",
                ].map((val) => (
                  <span
                    key={val}
                    className="px-4 py-2 bg-cream-100 text-bark text-sm font-500 rounded-full"
                  >
                    ✓ {val}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream-50" id="sustainability">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl font-700 text-bark">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Leaf,
                title: "Sustainability",
                color: "bg-forest-50 text-forest-600 border-forest-200",
                desc: "We prioritize natural, recycled, and responsibly sourced materials. Every purchase is a vote for a more sustainable world.",
              },
              {
                icon: Heart,
                title: "Community",
                color: "bg-terracotta-50 text-terracotta-600 border-terracotta-200",
                desc: "Handcrafted Haven is a community of makers and appreciators. We foster genuine connections between artisans and customers.",
              },
              {
                icon: Globe,
                title: "Global Craft",
                color: "bg-cream-100 text-bark border-cream-300",
                desc: "We celebrate the rich diversity of craft traditions from around the world, giving global artisans a platform to reach international audiences.",
              },
              {
                icon: Users,
                title: "Fair Trade",
                color: "bg-forest-50 text-forest-600 border-forest-200",
                desc: "Artisans keep the majority of what they earn. We believe in fair compensation for skilled, creative work.",
              },
            ].map(({ icon: Icon, title, color, desc }) => (
              <div
                key={title}
                className={`p-6 rounded-3xl border ${color} flex flex-col gap-4`}
              >
                <div className="w-12 h-12 rounded-2xl bg-current/10 flex items-center justify-center">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-600">{title}</h3>
                <p className="font-body text-sm leading-relaxed opacity-80">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-bark text-cream-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-700 mb-5">
            Join our community
          </h2>
          <p className="font-body text-base text-cream-200/70 mb-10 leading-relaxed">
            Whether you're a maker or a lover of beautiful things, there's a
            place for you at Handcrafted Haven.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/marketplace"
              className="px-8 py-4 bg-terracotta-500 text-white font-500 rounded-full hover:bg-terracotta-600 transition-colors"
            >
              Shop Now
            </Link>
            <Link
              href="/sell"
              className="px-8 py-4 border border-cream-200/30 text-cream-50 font-500 rounded-full hover:border-cream-200/60 hover:bg-cream-50/5 transition-colors"
            >
              Start Selling
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
