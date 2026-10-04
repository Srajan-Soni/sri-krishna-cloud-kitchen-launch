import pohaImage from "@/assets/poha.jpg";
import appeImage from "@/assets/appe.jpg";
import paneerImage from "@/assets/paneer.jpg";
import heroImage from "@/assets/hero-food.jpg";

export type MenuCategory = "Breakfast" | "Roti & Combos" | "Main Course" | "Khichdi" | "Vrat / Fasting";
export type MenuVariant = { name: string; price: number };
export type MenuItem = {
  id: string;
  name: string;
  slug: string;
  category: MenuCategory;
  description: string;
  image: string;
  price?: number;
  variants?: MenuVariant[];
  available: boolean;
  availability?: string;
  tags: string[];
  featured: boolean;
};

export const MENU_CATEGORIES = ["All", "Breakfast", "Roti & Combos", "Main Course", "Khichdi", "Vrat / Fasting"] as const;

export const menuItems: MenuItem[] = [
  { id: "poha", name: "Poha", slug: "poha", category: "Breakfast", description: "Fresh homemade poha with peanuts and Indian spices.", image: pohaImage, price: 39, available: true, availability: "8 AM – 12 PM", tags: ["Breakfast", "Popular"], featured: true },
  { id: "upma", name: "Upma", slug: "upma", category: "Breakfast", description: "Wholesome homemade upma prepared with vegetables and aromatic spices.", image: heroImage, price: 49, available: true, availability: "8 AM – 12 PM", tags: ["Breakfast"], featured: true },
  { id: "appe", name: "Appe", slug: "appe", category: "Breakfast", description: "Soft and crispy appe served with chutney.", image: appeImage, price: 59, available: true, availability: "8 AM – 12 PM", tags: ["Breakfast", "Popular"], featured: true },
  { id: "plain-roti", name: "Plain Roti", slug: "plain-roti", category: "Roti & Combos", description: "Fresh, soft tawa roti made for a wholesome everyday meal.", image: heroImage, price: 8, available: true, tags: ["Roti"], featured: false },
  { id: "butter-roti", name: "Butter Tawa Roti", slug: "butter-tawa-roti", category: "Roti & Combos", description: "Soft tawa roti finished with a touch of butter.", image: heroImage, price: 10, available: true, tags: ["Roti"], featured: false },
  { id: "roti-aloo-combo", name: "4 Roti + Aloo Gravy Combo", slug: "4-roti-aloo-gravy-combo", category: "Roti & Combos", description: "Ghar jaisi soft rotis paired with flavorful desi aloo gravy — simple, satisfying aur bilkul desi!", image: heroImage, available: true, tags: ["Combo", "Popular"], featured: true },
  { id: "sev-tamatar", name: "Sev Tamatar", slug: "sev-tamatar", category: "Main Course", description: "Tangy tomato gravy with crispy sev and desi spices.", image: paneerImage, available: true, tags: ["Homestyle"], featured: true },
  { id: "jeera-aloo", name: "Jeera Aloo", slug: "jeera-aloo", category: "Main Course", description: "Homestyle potatoes tempered with cumin and Indian spices.", image: heroImage, available: true, tags: ["Homestyle"], featured: true },
  { id: "aloo-tamatar", name: "Aloo Tamatar Gravy", slug: "aloo-tamatar-gravy", category: "Main Course", description: "Comforting potato and tomato curry prepared with flavorful Indian spices.", image: heroImage, available: true, tags: ["Comfort food"], featured: true },
  { id: "matar-paneer", name: "Matar Paneer", slug: "matar-paneer", category: "Main Course", description: "Soft paneer and green peas cooked in a rich, flavorful tomato gravy.", image: paneerImage, available: true, tags: ["Paneer", "Popular"], featured: true },
  { id: "butter-paneer", name: "Butter Paneer Masala", slug: "butter-paneer-masala", category: "Main Course", description: "Soft paneer cooked in a creamy, buttery tomato masala with rich Indian flavours.", image: heroImage, available: true, tags: ["Paneer", "Popular"], featured: true },
  { id: "masala-khichdi", name: "Homestyle Masala Khichdi", slug: "homestyle-masala-khichdi", category: "Khichdi", description: "Comforting, gently spiced khichdi made in a homestyle tadka.", image: heroImage, variants: [{ name: "Half", price: 69 }, { name: "Full", price: 119 }], available: true, tags: ["Comfort food"], featured: true },
  { id: "sabudana-khichdi", name: "Sabudana Khichdi", slug: "sabudana-khichdi", category: "Vrat / Fasting", description: "A light falahari favourite prepared with sabudana, peanuts and mild spices.", image: pohaImage, available: true, tags: ["Vrat"], featured: false },
  { id: "singhada-poori", name: "Singhada Atta Poori + Aloo Sabji", slug: "singhada-poori-aloo-sabji", category: "Vrat / Fasting", description: "Fasting-friendly singhada flour pooris served with comforting aloo sabji.", image: heroImage, available: true, tags: ["Vrat"], featured: false },
  { id: "falahari-plate", name: "Falahari Plate", slug: "falahari-plate", category: "Vrat / Fasting", description: "A balanced selection of freshly prepared fasting favourites.", image: heroImage, available: true, tags: ["Vrat"], featured: false },
  { id: "sabudana-vada", name: "Sabudana Vada", slug: "sabudana-vada", category: "Vrat / Fasting", description: "Crisp outside, soft inside sabudana vada with a homestyle touch.", image: appeImage, available: true, tags: ["Vrat"], featured: false },
];
