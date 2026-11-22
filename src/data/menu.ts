import pohaImage from "@/assets/poha.jpg";
import appeImage from "@/assets/appe.jpg";
import paneerImage from "@/assets/paneer.jpg";
import heroImage from "@/assets/hero-food.jpg";
import parathaImage from "@/assets/paratha.jpg";
import maggiImage from "@/assets/maggi.jpg";
import pooriImage from "@/assets/poori-sabzi.jpg";
import friedRiceImage from "@/assets/fried-rice.jpg";
import alooTamatarImage from "@/assets/food items/aloo tamatar.png";
import butterRotiImage from "@/assets/food items/butter_roti.png";
import matarPaneerImage from "@/assets/food items/matar paneer.jpg";
import plainRotiImage from "@/assets/food items/plain_roti.png";
import sevTamatarImage from "@/assets/food items/sev tamatar.png";

export type MenuCategory = "Breakfast" | "Roti & Combos" | "Paratha" | "Maggi" | "Main Course" | "Khichdi" | "Poori & Sabzi" | "Rice & Fried Rice" | "Vrat / Fasting";
export type OrderPlatform = "zomato" | "swiggy";
export type MenuVariant = { name: string; price?: number };
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

export const MENU_CATEGORIES = ["All", "Breakfast", "Roti & Combos", "Paratha", "Maggi", "Main Course", "Khichdi", "Poori & Sabzi", "Rice & Fried Rice", "Vrat / Fasting"] as const;

export const menuItems: MenuItem[] = [
  { id: "poha", name: "Poha", slug: "poha", category: "Breakfast", description: "Fresh homemade poha with peanuts and Indian spices.", image: pohaImage, price: 39, available: true, availability: "8 AM – 12 PM", tags: ["Breakfast", "Popular"], featured: true },
  { id: "upma", name: "Upma", slug: "upma", category: "Breakfast", description: "Wholesome homemade upma prepared with vegetables and aromatic spices.", image: heroImage, price: 49, available: true, availability: "8 AM – 12 PM", tags: ["Breakfast"], featured: true },
  { id: "appe", name: "Appe", slug: "appe", category: "Breakfast", description: "Soft and crispy appe served with chutney.", image: appeImage, price: 59, available: true, availability: "8 AM – 12 PM", tags: ["Breakfast", "Popular"], featured: true },

  { id: "plain-roti", name: "Plain Roti", slug: "plain-roti", category: "Roti & Combos", description: "Fresh, soft tawa roti made for a wholesome everyday meal.", image: plainRotiImage, price: 8, available: true, tags: ["Roti"], featured: false },
  { id: "butter-roti", name: "Butter Tawa Roti", slug: "butter-tawa-roti", category: "Roti & Combos", description: "Soft tawa roti finished with a touch of butter.", image: butterRotiImage, price: 10, available: true, tags: ["Roti"], featured: false },

  { id: "aloo-paratha", name: "Aloo Paratha", slug: "aloo-paratha", category: "Paratha", description: "Soft whole wheat paratha stuffed with spiced mashed potatoes, served with curd and pickle.", image: parathaImage, available: true, tags: ["Paratha", "Popular"], featured: true },
  { id: "aloo-pyaaz-paratha", name: "Aloo Pyaaz Paratha", slug: "aloo-pyaaz-paratha", category: "Paratha", description: "Classic stuffed paratha with a spiced potato and onion filling, cooked on the tawa.", image: parathaImage, available: true, tags: ["Paratha"], featured: false },
  { id: "plain-paratha-aloo-sabzi", name: "Plain Paratha with Aloo Sabzi", slug: "plain-paratha-aloo-sabzi", category: "Paratha", description: "Flaky plain paratha paired with comforting homestyle aloo sabzi.", image: parathaImage, available: true, tags: ["Paratha", "Combo"], featured: false },
  { id: "paneer-paratha", name: "Paneer Paratha", slug: "paneer-paratha", category: "Paratha", description: "Whole wheat paratha stuffed with a soft, spiced paneer filling.", image: parathaImage, available: true, tags: ["Paratha"], featured: false },

  { id: "plain-maggi", name: "Plain Maggi", slug: "plain-maggi", category: "Maggi", description: "Simple, nostalgic masala noodles made just the way you like them.", image: maggiImage, available: true, tags: ["Maggi"], featured: false },
  { id: "veg-maggi", name: "Veg Maggi", slug: "veg-maggi", category: "Maggi", description: "Masala noodles tossed with fresh vegetables and homestyle spices.", image: maggiImage, available: true, tags: ["Maggi", "Popular"], featured: true },
  { id: "cheese-maggi", name: "Cheese Maggi (Serves 1)", slug: "cheese-maggi", category: "Maggi", description: "Creamy masala noodles loaded with melted cheese. Perfectly portioned for one.", image: maggiImage, available: true, tags: ["Maggi", "Cheese"], featured: false },
  { id: "cheese-corn-maggi", name: "Cheese Corn Veg Maggi", slug: "cheese-corn-veg-maggi", category: "Maggi", description: "Veg masala noodles with sweet corn and a generous cheese topping.", image: maggiImage, available: true, tags: ["Maggi", "Cheese"], featured: false },
  { id: "desi-tadka-maggi", name: "Desi Tadka Maggi", slug: "desi-tadka-maggi", category: "Maggi", description: "Masala noodles finished with a homestyle ghee tadka of cumin and spices.", image: maggiImage, available: true, tags: ["Maggi"], featured: false },
  { id: "spicy-korean-maggi", name: "Spicy Korean Maggi", slug: "spicy-korean-maggi", category: "Maggi", description: "Fiery Korean-style noodles with a spicy, saucy kick.", image: maggiImage, available: true, tags: ["Maggi", "Spicy"], featured: false },
  { id: "schezwan-paneer-maggi", name: "Schezwan Cheese Paneer Maggi", slug: "schezwan-cheese-paneer-maggi", category: "Maggi", description: "Bold schezwan noodles with soft paneer cubes and melted cheese.", image: maggiImage, available: true, tags: ["Maggi", "Spicy", "Cheese"], featured: false },
  { id: "viral-cheesy-maggi", name: "Viral Cheesy Maggi", slug: "viral-cheesy-maggi", category: "Maggi", description: "The internet-famous extra-cheesy maggie, made fresh in our kitchen.", image: maggiImage, available: true, tags: ["Maggi", "Cheese", "Trending"], featured: false },

  { id: "sev-tamatar", name: "Sev Tamatar", slug: "sev-tamatar", category: "Main Course", description: "Tangy tomato gravy with crispy sev and desi spices.", image: sevTamatarImage, available: true, tags: ["Homestyle", "Popular"], featured: true },
  { id: "jeera-aloo", name: "Jeera Aloo", slug: "jeera-aloo", category: "Main Course", description: "Homestyle potatoes tempered with cumin and Indian spices.", image: heroImage, available: true, tags: ["Homestyle"], featured: true },
  { id: "aloo-tamatar", name: "Aloo Tamatar Gravy", slug: "aloo-tamatar-gravy", category: "Main Course", description: "Comforting potato and tomato curry prepared with flavorful Indian spices.", image: alooTamatarImage, available: true, tags: ["Comfort food"], featured: true },
  { id: "matar-paneer", name: "Matar Paneer", slug: "matar-paneer", category: "Main Course", description: "Soft paneer and green peas cooked in a rich, flavorful tomato gravy.", image: matarPaneerImage, available: true, tags: ["Paneer", "Popular"], featured: true },
  { id: "butter-paneer", name: "Butter Paneer Masala", slug: "butter-paneer-masala", category: "Main Course", description: "Soft paneer cooked in a creamy, buttery tomato masala with rich Indian flavours.", image: paneerImage, available: true, tags: ["Paneer", "Popular"], featured: true },

  { id: "masala-khichdi", name: "Homestyle Masala Khichdi", slug: "homestyle-masala-khichdi", category: "Khichdi", description: "Comforting, gently spiced khichdi made in a homestyle tadka.", image: heroImage, variants: [{ name: "Half", price: 69 }, { name: "Full", price: 119 }], available: true, tags: ["Comfort food"], featured: true },

  { id: "poori-sabzi", name: "Poori Sabzi (5 Poori)", slug: "poori-sabzi", category: "Poori & Sabzi", description: "Five golden puffed pooris served with warm homestyle aloo sabzi.", image: pooriImage, available: true, tags: ["Popular", "Combo"], featured: true },

  { id: "veg-fried-rice", name: "Veg Fried Rice", slug: "veg-fried-rice", category: "Rice & Fried Rice", description: "Wok-tossed rice with crunchy vegetables and classic desi-Chinese flavour.", image: friedRiceImage, variants: [{ name: "Half" }, { name: "Full" }], available: true, tags: ["Rice"], featured: false },
  { id: "special-veg-fried-rice", name: "Special Veg Fried Rice", slug: "special-veg-fried-rice", category: "Rice & Fried Rice", description: "Our special fried rice with extra veggies and a richer, spicier toss.", image: friedRiceImage, variants: [{ name: "Half" }, { name: "Full" }], available: true, tags: ["Rice", "Special"], featured: false },

  { id: "sabudana-khichdi", name: "Sabudana Khichdi", slug: "sabudana-khichdi", category: "Vrat / Fasting", description: "A light falahari favourite prepared with sabudana, peanuts and mild spices.", image: pohaImage, available: true, tags: ["Vrat"], featured: false },
  { id: "singhada-poori", name: "Singhada Atta Poori + Aloo Sabji", slug: "singhada-poori-aloo-sabji", category: "Vrat / Fasting", description: "Fasting-friendly singhada flour pooris served with comforting aloo sabji.", image: heroImage, available: true, tags: ["Vrat"], featured: false },
  { id: "falahari-plate", name: "Falahari Plate", slug: "falahari-plate", category: "Vrat / Fasting", description: "A balanced selection of freshly prepared fasting favourites.", image: heroImage, available: true, tags: ["Vrat"], featured: false },
  { id: "sabudana-vada", name: "Sabudana Vada", slug: "sabudana-vada", category: "Vrat / Fasting", description: "Crisp outside, soft inside sabudana vada with a homestyle touch.", image: appeImage, available: true, tags: ["Vrat"], featured: false },
];

export const MENU_ORDER_LINKS: Partial<Record<MenuItem["id"], Partial<Record<OrderPlatform, string>>>> = {};
