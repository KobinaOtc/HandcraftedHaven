// Types
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  artisan: string;
  artisanId: string;
  location: string;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  tags: string[];
  isFeatured?: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  materials: string[];
  customizable: boolean;
  stock: number;
}

export interface Artisan {
  id: string;
  name: string;
  specialty: string;
  location: string;
  avatar: string;
  coverImage: string;
  bio: string;
  rating: number;
  totalSales: number;
  totalProducts: number;
  joinedYear: number;
  badges: string[];
  featured: boolean;
  instagram?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  image: string;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  productName: string;
}

// Data
export const categories: Category[] = [
  {
    id: "pottery",
    name: "Pottery & Ceramics",
    icon: "🏺",
    count: 342,
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=80",
    description: "Hand-thrown bowls, mugs, and sculptural pieces",
  },
  {
    id: "textiles",
    name: "Textiles & Weaving",
    icon: "🧵",
    count: 218,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    description: "Woven tapestries, macramé, and handwoven fabrics",
  },
  {
    id: "jewelry",
    name: "Jewelry",
    icon: "💍",
    count: 487,
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
    description: "Unique handcrafted rings, necklaces, and earrings",
  },
  {
    id: "woodwork",
    name: "Woodwork",
    icon: "🪵",
    count: 156,
    image:
      "https://images.unsplash.com/photo-1550159930-40066082a4fc?w=400&q=80",
    description: "Sculpted furniture, bowls, and decorative carvings",
  },
  {
    id: "candles",
    name: "Candles & Soaps",
    icon: "🕯️",
    count: 293,
    image:
      "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=400&q=80",
    description: "Artisan-poured candles and handmade soaps",
  },
  {
    id: "art",
    name: "Fine Art & Prints",
    icon: "🎨",
    count: 374,
    image:
      "https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=400&q=80",
    description: "Original paintings, prints, and mixed media",
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Rustic Terracotta Bowl Set",
    price: 68,
    originalPrice: 85,
    category: "pottery",
    artisan: "Elena Vasquez",
    artisanId: "a1",
    location: "Oaxaca, Mexico",
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
    rating: 4.9,
    reviews: 124,
    description:
      "A set of three hand-thrown terracotta bowls, each fired with a unique ash glaze that creates unpredictable patterns. Perfect for serving or display.",
    tags: ["kitchen", "rustic", "terracotta"],
    isFeatured: true,
    isBestseller: true,
    materials: ["terracotta clay", "ash glaze"],
    customizable: false,
    stock: 8,
  },
  {
    id: "2",
    name: "Linen Macramé Wall Hanging",
    price: 145,
    category: "textiles",
    artisan: "Fiona Hartwell",
    artisanId: "a2",
    location: "Cornwall, UK",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    rating: 4.8,
    reviews: 87,
    description:
      "Handknotted from 100% natural linen, this large-format macramé wall hanging brings warmth and texture to any space.",
    tags: ["home decor", "boho", "wall art"],
    isFeatured: true,
    isNew: true,
    materials: ["natural linen", "driftwood"],
    customizable: true,
    stock: 3,
  },
  {
    id: "3",
    name: "Hammered Brass Earrings",
    price: 38,
    category: "jewelry",
    artisan: "Amara Diallo",
    artisanId: "a3",
    location: "Dakar, Senegal",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
    rating: 5.0,
    reviews: 203,
    description:
      "Individually hammered from recycled brass sheet, each pair carries unique textures that catch the light beautifully.",
    tags: ["jewelry", "brass", "sustainable"],
    isFeatured: true,
    isBestseller: true,
    materials: ["recycled brass"],
    customizable: false,
    stock: 15,
  },
  {
    id: "4",
    name: "Live-Edge Oak Serving Board",
    price: 89,
    category: "woodwork",
    artisan: "Jonas Müller",
    artisanId: "a4",
    location: "Bavaria, Germany",
    image:
      "https://images.unsplash.com/photo-1550159930-40066082a4fc?w=600&q=80",
    rating: 4.7,
    reviews: 56,
    description:
      "Cut from a single piece of sustainably sourced oak, preserving the natural edge. Finished with food-safe walnut oil.",
    tags: ["kitchen", "serving", "oak"],
    materials: ["reclaimed oak", "walnut oil"],
    customizable: true,
    stock: 5,
  },
  {
    id: "5",
    name: "Wildflower Beeswax Candle",
    price: 28,
    category: "candles",
    artisan: "Sage & Bloom Studio",
    artisanId: "a5",
    location: "Vermont, USA",
    image:
      "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=600&q=80",
    rating: 4.9,
    reviews: 312,
    description:
      "Poured with 100% pure beeswax and scented with a custom blend of wildflower essences. Burns for 45+ hours.",
    tags: ["candles", "beeswax", "natural"],
    isBestseller: true,
    isNew: false,
    materials: ["pure beeswax", "cotton wick", "essential oils"],
    customizable: false,
    stock: 24,
  },
  {
    id: "6",
    name: "Indigo-Dyed Throw Pillow",
    price: 72,
    category: "textiles",
    artisan: "Mia Nakamura",
    artisanId: "a6",
    location: "Kyoto, Japan",
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&q=80",
    rating: 4.8,
    reviews: 44,
    description:
      "Hand-dyed using traditional Japanese shibori techniques with natural indigo. Each piece is one-of-a-kind.",
    tags: ["home decor", "shibori", "indigo"],
    isNew: true,
    materials: ["organic cotton", "natural indigo"],
    customizable: false,
    stock: 6,
  },
  {
    id: "7",
    name: "Carved Soapstone Pendant",
    price: 54,
    category: "jewelry",
    artisan: "Amara Diallo",
    artisanId: "a3",
    location: "Dakar, Senegal",
    image:
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80",
    rating: 4.6,
    reviews: 31,
    description:
      "Hand-carved soapstone pendant on a sterling silver chain. Each stone has unique veining and color variation.",
    tags: ["jewelry", "soapstone", "artisan"],
    materials: ["soapstone", "sterling silver"],
    customizable: true,
    stock: 9,
  },
  {
    id: "8",
    name: "Stoneware Pour-Over Set",
    price: 112,
    category: "pottery",
    artisan: "Elena Vasquez",
    artisanId: "a1",
    location: "Oaxaca, Mexico",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    rating: 4.9,
    reviews: 78,
    description:
      "A pour-over dripper and matching mug, wheel-thrown and glazed with a salt-fired reduction finish. For the discerning coffee lover.",
    tags: ["coffee", "pottery", "kitchen"],
    isFeatured: true,
    materials: ["stoneware", "salt glaze"],
    customizable: false,
    stock: 4,
  },
];

export const artisans: Artisan[] = [
  {
    id: "a1",
    name: "Elena Vasquez",
    specialty: "Pottery & Ceramics",
    location: "Oaxaca, Mexico",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
    bio: "Third-generation ceramicist from Oaxaca. I create work that celebrates the ancient traditions of Mexican pottery while embracing contemporary forms. Each piece is hand-thrown on a kick wheel and fired in a wood-burning kiln.",
    rating: 4.9,
    totalSales: 1847,
    totalProducts: 34,
    joinedYear: 2019,
    badges: ["Top Seller", "Eco-Friendly", "Custom Orders"],
    featured: true,
  },
  {
    id: "a2",
    name: "Fiona Hartwell",
    specialty: "Textiles & Macramé",
    location: "Cornwall, UK",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    bio: "Textile artist and macramé weaver based on the Cornish coast. My work is inspired by the textures of the sea — ropes, nets, and the interplay of light on water. I source natural, undyed fibers wherever possible.",
    rating: 4.8,
    totalSales: 923,
    totalProducts: 18,
    joinedYear: 2021,
    badges: ["Rising Star", "Natural Materials", "Custom Orders"],
    featured: true,
  },
  {
    id: "a3",
    name: "Amara Diallo",
    specialty: "Jewelry & Metalwork",
    location: "Dakar, Senegal",
    avatar:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    bio: "Jeweler working with recycled metals and ethically sourced stones. My pieces blend West African goldsmithing traditions with modern minimalist aesthetics. Every item is made by hand in my Dakar workshop.",
    rating: 4.95,
    totalSales: 3201,
    totalProducts: 52,
    joinedYear: 2018,
    badges: ["Top Seller", "Eco-Friendly", "5-Star Rated"],
    featured: true,
  },
  {
    id: "a4",
    name: "Jonas Müller",
    specialty: "Woodwork & Carving",
    location: "Bavaria, Germany",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1550159930-40066082a4fc?w=800&q=80",
    bio: "Woodworker and furniture maker using sustainably sourced timber from Bavarian forests. I believe in letting the natural beauty of wood guide the form. Each piece celebrates the grain, knots, and character of the material.",
    rating: 4.7,
    totalSales: 612,
    totalProducts: 22,
    joinedYear: 2020,
    badges: ["Sustainable", "Custom Orders", "Handmade"],
    featured: false,
  },
];

export const testimonials: Review[] = [
  {
    id: "r1",
    author: "Sophie L.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    rating: 5,
    date: "March 2024",
    text: "I ordered the terracotta bowl set as a housewarming gift and it arrived beautifully packaged with a handwritten note. The quality is extraordinary — these are clearly made with real love and expertise.",
    productName: "Rustic Terracotta Bowl Set",
  },
  {
    id: "r2",
    author: "Marcus T.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    date: "February 2024",
    text: "Handcrafted Haven is how online shopping should feel. Each artisan's story adds so much meaning. My macramé wall hanging is a genuine conversation piece in our home.",
    productName: "Linen Macramé Wall Hanging",
  },
  {
    id: "r3",
    author: "Priya M.",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80",
    rating: 5,
    date: "January 2024",
    text: "The brass earrings from Amara are absolutely stunning. You can feel the craftsmanship — no two pairs are identical. Fast shipping, sustainable packaging, and a beautiful product.",
    productName: "Hammered Brass Earrings",
  },
];
