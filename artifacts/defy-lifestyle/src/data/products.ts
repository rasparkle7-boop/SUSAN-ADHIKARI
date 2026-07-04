export interface ProductColor {
  label: string;
  hex: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  basePrice: number;
  colors: ProductColor[];
  sizes: string[];
  isNew?: boolean;
  isSale?: boolean;
  salePrice?: number;
  description: string;
}

export const SIZES = ["M", "L", "XL", "2XL"];

export const ALL_PRODUCTS: Product[] = [
  {
    id: "shirt-blue",
    name: "Classic Defy Shirt",
    category: "Shirts",
    basePrice: 2499,
    description: "Premium cotton woven shirt with structured collar. A wardrobe staple.",
    sizes: SIZES,
    isNew: true,
    colors: [
      { label: "Blue", hex: "#3B5998", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80&fit=crop" },
      { label: "Black", hex: "#1a1a1a", image: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=800&q=80&fit=crop" },
      { label: "White", hex: "#f5f5f5", image: "https://images.unsplash.com/photo-1603251578711-3290ca1a0187?w=800&q=80&fit=crop" },
    ],
  },
  {
    id: "knit-brown",
    name: "Knitted Short Sleeve Top",
    category: "Knitted",
    basePrice: 1799,
    description: "Textured knit short-sleeve top. Relaxed fit for everyday wear.",
    sizes: SIZES,
    colors: [
      { label: "Brown", hex: "#7B5E4A", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80&fit=crop" },
      { label: "Black", hex: "#1a1a1a", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80&fit=crop" },
      { label: "Cream", hex: "#F5F0E8", image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&q=80&fit=crop" },
      { label: "White", hex: "#ffffff", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80&fit=crop" },
    ],
  },
  {
    id: "drop-shoulder-gray",
    name: "Drop Shoulder Cotton Tee",
    category: "T-Shirts",
    basePrice: 1299,
    description: "Oversized drop-shoulder cut in 100% cotton. Streetwear silhouette, all-day comfort.",
    sizes: SIZES,
    isNew: true,
    colors: [
      { label: "Gray", hex: "#888888", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80&fit=crop" },
      { label: "Navy Blue", hex: "#1B2A4A", image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80&fit=crop" },
      { label: "White", hex: "#f5f5f5", image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80&fit=crop" },
      { label: "Blue", hex: "#4A7FC1", image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&q=80&fit=crop" },
      { label: "Khaki", hex: "#C3B091", image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800&q=80&fit=crop" },
    ],
  },
  {
    id: "double-pocket-black",
    name: "Double Pocket Tee",
    category: "T-Shirts",
    basePrice: 1499,
    description: "Functional double chest pocket tee. Utility-inspired workwear aesthetic.",
    sizes: SIZES,
    colors: [
      { label: "Black", hex: "#1a1a1a", image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80&fit=crop" },
      { label: "Navy Blue", hex: "#1B2A4A", image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=800&q=80&fit=crop" },
      { label: "Yellowish Brown", hex: "#A8852A", image: "https://images.unsplash.com/photo-1608228088998-57828365d486?w=800&q=80&fit=crop" },
    ],
  },
  {
    id: "balloon-pants-white",
    name: "Balloon Fit Pants",
    category: "Pants",
    basePrice: 3499,
    description: "Voluminous balloon silhouette with tapered ankle. Statement streetwear bottom.",
    sizes: SIZES,
    isNew: true,
    colors: [
      { label: "White", hex: "#f5f5f5", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80&fit=crop" },
      { label: "Black", hex: "#1a1a1a", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80&fit=crop" },
    ],
  },
  {
    id: "summer-tee-black",
    name: "Summer Plain Tee",
    category: "T-Shirts",
    basePrice: 999,
    description: "Lightweight summer tee. Clean, minimal, and effortlessly cool.",
    sizes: SIZES,
    isSale: true,
    salePrice: 799,
    colors: [
      { label: "Black", hex: "#1a1a1a", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80&fit=crop" },
      { label: "Brown", hex: "#7B5E4A", image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&q=80&fit=crop" },
      { label: "Cream", hex: "#F5F0E8", image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=800&q=80&fit=crop" },
      { label: "Blue", hex: "#4A7FC1", image: "https://images.unsplash.com/photo-1503341338985-95231f6bba62?w=800&q=80&fit=crop" },
    ],
  },
  {
    id: "jeans-classic-blue",
    name: "Classic Straight Jeans",
    category: "Jeans",
    basePrice: 3999,
    description: "Classic straight-leg denim in mid-wash blue. The foundational denim.",
    sizes: SIZES,
    colors: [
      { label: "Classic Blue", hex: "#3B6EA8", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80&fit=crop" },
    ],
  },
  {
    id: "jeans-dark-wash",
    name: "Dark Wash Slim Jeans",
    category: "Jeans",
    basePrice: 4299,
    description: "Premium dark indigo slim denim. Versatile for street or smart casual.",
    sizes: SIZES,
    isNew: true,
    colors: [
      { label: "Dark Indigo", hex: "#1A2A4A", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80&fit=crop" },
    ],
  },
  {
    id: "jeans-light-wash",
    name: "Light Wash Baggy Jeans",
    category: "Jeans",
    basePrice: 4499,
    description: "90s-inspired light-wash baggy denim. Relaxed, roomy, retro.",
    sizes: SIZES,
    colors: [
      { label: "Light Wash", hex: "#9BB7D4", image: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=800&q=80&fit=crop" },
    ],
  },
  {
    id: "jeans-distressed",
    name: "Distressed Denim",
    category: "Jeans",
    basePrice: 4799,
    description: "Hand-distressed jeans with authentic worn-in details. Raw edge finish.",
    sizes: SIZES,
    isSale: true,
    salePrice: 3999,
    colors: [
      { label: "Distressed Blue", hex: "#5B8DB8", image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&q=80&fit=crop" },
    ],
  },
  {
    id: "jeans-black-denim",
    name: "Black Denim Straight",
    category: "Jeans",
    basePrice: 4299,
    description: "All-black denim for the monochrome look. Sharp, clean, powerful.",
    sizes: SIZES,
    colors: [
      { label: "Black Denim", hex: "#1a1a1a", image: "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800&q=80&fit=crop" },
    ],
  },
];

export const CATEGORIES = ["All", ...Array.from(new Set(ALL_PRODUCTS.map((p) => p.category)))];
