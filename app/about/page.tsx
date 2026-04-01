import Image from "next/image";
import Link from "next/link";
import { Leaf, Heart, Globe, Users, Instagram, Twitter, Linkedin } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Learn about Handcrafted Haven's mission to connect artisans with conscious consumers.",
};

const team = [
  {
    name: "Ogorchukwu Lourentta Okuku",
    role: "Co-Founder & Creative Director",
    bio: "Lourentta's eye for artisan aesthetics shapes every corner of Handcrafted Haven — from our brand palette to the way we tell each maker's story.",
    avatar: "L",
    color: "bg-terracotta-100 text-terracotta-600",
    socials: { instagram: "#", linkedin: "#" },
  },
  {
    name: "Freedom Mukanza",
    role: "Co-Founder & Head of Community",
    bio: "Freedom built our artisan onboarding programme from the ground up and personally welcomes every new maker who joins our growing community.",
    avatar: "F",
    color: "bg-forest-100 text-forest-600",
    socials: { instagram: "#", twitter: "#" },
  },
  {
    name: "Kobina Adjoku Otchere",
    role: "Lead Engineer",
    bio: "Kobina architects the platform that keeps Handcrafted Haven fast, reliable, and delightful — so artisans can focus on crafting, not on technology.",
    avatar: "K",
    color: "bg-cream-200 text-bark",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Oluwaseyi Oyindasola Makinde",
    role: "Head of Marketplace & Growth",
    bio: "Seyi connects the right products with the right buyers, leading our merchandising strategy and the partnerships that help artisans reach new audiences.",
    avatar: "S",
    color: "bg-terracotta-50 text-terracotta-500",
    socials: { instagram: "#", linkedin: "#" },
  },
  {
    name: "Natnael Gashaw Endashaw",
    role: "Head of Product & UX",
    bio: "Natnael leads the product experience at Handcrafted Haven, ensuring every interaction — from browsing to checkout — feels intuitive, beautiful, and human.",
    avatar: "N",
    color: "bg-forest-50 text-forest-700",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Enoch Oluwafemi Bolarinwa",
    role: "Brand & Marketing Lead",
    bio: "Enoch shapes how the world sees Handcrafted Haven — crafting campaigns that celebrate makers, build trust with buyers, and grow the brand with intention.",
    avatar: "E",
    color: "bg-cream-100 text-terracotta-700",
    socials: { instagram: "#", linkedin: "#" },
  },
];

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

      {/* Team */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <p className="font-body text-xs font-600 text-terracotta-500 uppercase tracking-widest mb-3">
              The People Behind the Platform
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-700 text-bark leading-tight mb-4">
              Meet Our Team
            </h2>
            <p className="font-accent text-lg text-stone-mid max-w-lg mx-auto leading-relaxed">
              We&rsquo;re a small, passionate crew united by a belief that
              handmade things deserve a beautiful home on the internet.
            </p>
          </div>

          {/* Cards — 3 columns for 6 members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map(({ name, role, bio, avatar, color, socials }) => (
              <div
                key={name}
                className="bg-cream-50 rounded-2xl border border-cream-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col group"
              >
                {/* Avatar area */}
                <div className="relative h-40 bg-cream-100 flex items-center justify-center">
                  <div className="pointer-events-none absolute inset-0 bg-grain-texture opacity-30" />
                  <div
                    className={`relative z-10 w-20 h-20 rounded-full flex items-center justify-center text-3xl font-display font-semibold shadow-md ${color}`}
                  >
                    {avatar}
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col flex-1 p-6 gap-3">
                  <div>
                    <h3 className="font-display text-xl text-bark leading-tight">
                      {name}
                    </h3>
                    <p className="text-xs font-semibold tracking-widest uppercase text-terracotta-500 mt-0.5 font-body">
                      {role}
                    </p>
                  </div>
                  <p className="text-sm text-stone-mid font-body leading-relaxed flex-1">
                    {bio}
                  </p>

                  {/* Socials */}
                  <div className="flex items-center gap-2 pt-2 border-t border-cream-200">
                    {socials.instagram && (
                      <a
                        href={socials.instagram}
                        aria-label={`${name} on Instagram`}
                        className="w-8 h-8 rounded-lg bg-white hover:bg-terracotta-50 flex items-center justify-center transition-colors group/icon"
                      >
                        <Instagram
                          className="w-3.5 h-3.5 text-stone-mid group-hover/icon:text-terracotta-500 transition-colors"
                          strokeWidth={1.75}
                        />
                      </a>
                    )}
                    {socials.twitter && (
                      <a
                        href={socials.twitter}
                        aria-label={`${name} on Twitter`}
                        className="w-8 h-8 rounded-lg bg-white hover:bg-terracotta-50 flex items-center justify-center transition-colors group/icon"
                      >
                        <Twitter
                          className="w-3.5 h-3.5 text-stone-mid group-hover/icon:text-terracotta-500 transition-colors"
                          strokeWidth={1.75}
                        />
                      </a>
                    )}
                    {socials.linkedin && (
                      <a
                        href={socials.linkedin}
                        aria-label={`${name} on LinkedIn`}
                        className="w-8 h-8 rounded-lg bg-white hover:bg-terracotta-50 flex items-center justify-center transition-colors group/icon"
                      >
                        <Linkedin
                          className="w-3.5 h-3.5 text-stone-mid group-hover/icon:text-terracotta-500 transition-colors"
                          strokeWidth={1.75}
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-stone-mid font-body mt-10">
            Want to join us?{" "}
            <a
              href="mailto:hello@handcraftedhaven.com"
              className="text-terracotta-500 hover:text-terracotta-600 underline underline-offset-4 transition-colors"
            >
              We&rsquo;d love to hear from you.
            </a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-bark text-cream-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-700 mb-5">
            Join our community
          </h2>
          <p className="font-body text-base text-cream-200/70 mb-10 leading-relaxed">
            Whether you&rsquo;re a maker or a lover of beautiful things, there&rsquo;s a
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