# 🏺 Handcrafted Haven

A full-featured artisan marketplace built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

---

## ✨ Features

- **Homepage** — Hero section, category grid, featured products, featured artisans, testimonials, newsletter
- **Marketplace** — Filterable product grid with search, category, price, and sort controls
- **Product Detail** — Full product page with image, reviews, quantity selector, add-to-cart
- **Artisan Profiles** — Individual artisan pages with bio, stats, and their collection
- **Cart** — Full cart page with quantity management and order summary
- **Cart Drawer** — Slide-in cart accessible from any page
- **About Page** — Company story, mission, and values
- **Responsive** — Fully mobile-first responsive design

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
handcrafted-haven/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Root layout (Navbar, Footer, CartProvider)
│   ├── page.tsx              # Home page
│   ├── marketplace/
│   │   ├── page.tsx          # Product listing page
│   │   └── [id]/page.tsx     # Product detail page
│   ├── artisans/
│   │   ├── page.tsx          # Artisan listing page
│   │   └── [id]/page.tsx     # Artisan profile page
│   ├── cart/page.tsx         # Cart page
│   └── about/page.tsx        # About page
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Sticky navbar with mobile menu
│   │   ├── Footer.tsx        # Footer with links
│   │   └── CartDrawer.tsx    # Slide-in cart drawer
│   ├── sections/
│   │   ├── HeroSection.tsx   # Homepage hero
│   │   ├── CategoriesSection.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── FeaturedArtisans.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── NewsletterSection.tsx
│   └── ui/
│       ├── ProductCard.tsx   # Reusable product card
│       └── ArtisanCard.tsx   # Reusable artisan card
│
├── lib/
│   ├── data.ts               # Mock data + TypeScript types
│   ├── cart-context.tsx      # React cart context (add/remove/update)
│   └── utils.ts              # Utility functions
│
├── styles/
│   └── globals.css           # Global styles + Google Fonts import
│
├── tailwind.config.js        # Custom colors, fonts, animations
├── next.config.js            # Image domains
└── tsconfig.json
```

---

## 🎨 Design System

**Color Palette:**
- `cream` — warm background tones
- `terracotta` — primary accent (CTA buttons, highlights)
- `forest` — secondary accent (badges, eco elements)
- `bark` — primary dark text and backgrounds
- `stone` — muted text tones

**Typography:**
- `font-display` → Playfair Display (headings)
- `font-body` → DM Sans (body text)
- `font-accent` → Cormorant Garamond (quotes, pullouts)

---

## 🔌 Next Steps / Extensions

- Add authentication (NextAuth.js or Clerk)
- Connect to a database (Prisma + PostgreSQL or Supabase)
- Add Stripe payments for checkout
- Build artisan dashboard for managing listings
- Add review and rating system
- Add wishlist functionality
- Implement real search with Algolia or Typesense
- Add image upload for artisans (Cloudinary or Vercel Blob)

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | React framework with App Router |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Lucide React | Icon library |
| React Context | Cart state management |

---

Built with ❤️ for artisans everywhere.
