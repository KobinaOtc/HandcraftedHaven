import { Instagram, Twitter, Linkedin } from "lucide-react";

const team = [
  {
    name: "Lourentta",
    role: "Co-Founder & Creative Director",
    bio: "Lourentta's eye for artisan aesthetics shapes every corner of Handcrafted Haven — from our brand palette to the way we tell each maker's story.",
    avatar: "L",
    color: "bg-terracotta-100 text-terracotta-600",
    socials: { instagram: "#", linkedin: "#" },
  },
  {
    name: "Freedom",
    role: "Co-Founder & Head of Community",
    bio: "Freedom built our artisan onboarding programme from the ground up and personally welcomes every new maker who joins our growing community.",
    avatar: "F",
    color: "bg-forest-100 text-forest-600",
    socials: { instagram: "#", twitter: "#" },
  },
  {
    name: "Kobina",
    role: "Lead Engineer",
    bio: "Kobina architects the platform that keeps Handcrafted Haven fast, reliable, and delightful — so artisans can focus on crafting, not on technology.",
    avatar: "K",
    color: "bg-cream-200 text-bark",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Seyi",
    role: "Head of Marketplace & Growth",
    bio: "Seyi connects the right products with the right buyers, leading our merchandising strategy and the partnerships that help our artisans reach new audiences.",
    avatar: "S",
    color: "bg-terracotta-50 text-terracotta-500",
    socials: { instagram: "#", linkedin: "#" },
  },
];

export default function TeamSection() {
  return (
    <section className="bg-cream-50 py-24 px-6 font-body">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block mb-3 text-xs font-semibold tracking-[0.25em] uppercase text-terracotta-500 font-body">
            The People Behind the Platform
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-bark leading-tight mb-4">
            Meet Our Team
          </h2>
          <p className="font-accent text-lg text-stone-mid max-w-lg mx-auto leading-relaxed">
            We&rsquo;re a small, passionate crew united by a belief that handmade
            things deserve a beautiful home on the internet.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map(({ name, role, bio, avatar, color, socials }) => (
            <div
              key={name}
              className="bg-white rounded-2xl border border-cream-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group flex flex-col"
            >
              {/* Avatar area */}
              <div className="relative h-40 bg-cream-100 flex items-center justify-center">
                {/* Subtle grain */}
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
                <div className="flex items-center gap-2 pt-2 border-t border-cream-100">
                  {socials.instagram && (
                    <a
                      href={socials.instagram}
                      aria-label={`${name} on Instagram`}
                      className="w-8 h-8 rounded-lg bg-cream-50 hover:bg-terracotta-50 flex items-center justify-center transition-colors group/icon"
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
                      className="w-8 h-8 rounded-lg bg-cream-50 hover:bg-terracotta-50 flex items-center justify-center transition-colors group/icon"
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
                      className="w-8 h-8 rounded-lg bg-cream-50 hover:bg-terracotta-50 flex items-center justify-center transition-colors group/icon"
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

        {/* Footer note */}
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
  );
}