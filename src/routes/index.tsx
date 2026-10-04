import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Heart, Leaf, MapPin, ShieldCheck, Soup } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";
import { menuItems } from "@/data/menu";
import { Button } from "@/components/ui/button";
import { FoodCard } from "@/components/site/food-card";
import { useOrderDialog } from "@/components/site/order-dialog";

const title = "Sri Krishna Cloud Kitchen | Homemade Vegetarian Food in Garha, Jabalpur";
const description = "Sri Krishna Cloud Kitchen in Garha, Jabalpur — fresh, homemade and delicious vegetarian food. Explore our menu and order on Zomato or Swiggy.";
export const Route = createFileRoute("/")({ head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: HomePage });

const features = [
  { icon: Soup, title: "Fresh & Homemade", text: "Made with care using a homestyle approach." },
  { icon: Leaf, title: "Pure Vegetarian", text: "Delicious vegetarian food for everyday meals." },
  { icon: ShieldCheck, title: "Hygienic", text: "Prepared and packed with care." },
  { icon: Heart, title: "Made With Love", text: "Every order is prepared with your happiness in mind." },
];
function HomePage() {
  const { openOrderDialog } = useOrderDialog();
  const popular = menuItems.filter((item) => ["poha", "appe", "matar-paneer"].includes(item.id));
  return <main id="main-content">
    <section className="site-container grid min-h-[calc(100svh-76px)] items-center gap-10 py-10 lg:min-h-[720px] lg:grid-cols-[1.05fr_.95fr] lg:py-14">
      <div className="relative z-10"><p className="eyebrow">Sri Krishna Cloud Kitchen</p><h1 className="mt-5 max-w-3xl font-display text-5xl font-medium leading-[.98] text-primary sm:text-6xl lg:text-[5.2rem]">Homemade Vegetarian Food, Made With Love</h1><p className="mt-6 flex items-center gap-2 text-base font-medium text-primary"><Leaf className="size-4 text-peacock" />Fresh • Homemade • Hygienic</p><p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="size-4" />गढ़ा, जबलपुर</p><div className="mt-8 flex flex-wrap gap-3"><Button className="h-12 rounded-sm px-5" onClick={() => openOrderDialog()}>Order now <ArrowUpRight /></Button><Button asChild variant="outline" className="h-12 rounded-sm px-5"><Link to="/menu">Explore menu <ArrowRight /></Link></Button></div></div>
      <div className="relative overflow-hidden rounded-tl-[5rem] rounded-br-[2rem] bg-muted"><img src={heroImage} alt="Homestyle vegetarian spread with paneer, khichdi, jeera aloo and rotis" width={1536} height={1280} fetchPriority="high" className="aspect-[1.08] h-full w-full object-cover" /><div className="absolute inset-x-0 bottom-0 flex justify-between bg-background/88 px-4 py-3 text-[10px] uppercase text-primary backdrop-blur"><span>Simple ingredients. Homestyle flavours.</span><span className="font-semibold">Pure vegetarian</span></div></div>
    </section>
    <section className="border-y border-border py-16"><div className="site-container"><p className="eyebrow">Everyday food, thoughtfully made</p><h2 className="section-title">Why Choose Us</h2><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{features.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-sm border border-border p-6"><Icon className="size-6 text-peacock" /><h3 className="mt-6 font-display text-2xl text-primary">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div></div></section>
    <section className="py-16 lg:py-24"><div className="site-container"><p className="eyebrow">Find your next favourite</p><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><h2 className="section-title">Popular Menu</h2><p className="mt-3 text-muted-foreground">From a light breakfast to comforting curries, explore our homestyle vegetarian menu.</p></div><Button asChild variant="outline" className="w-fit rounded-sm"><Link to="/menu">View complete menu <ArrowRight /></Link></Button></div><div className="mt-8 grid gap-5 md:grid-cols-3">{popular.map((item) => <FoodCard key={item.id} item={item} />)}</div></div></section>
    <section className="bg-secondary/65 py-16 lg:py-20"><div className="site-container grid items-center gap-10 lg:grid-cols-[1.2fr_.8fr]"><div><p className="eyebrow">Our journey</p><h2 className="section-title max-w-3xl">From a Small Kitchen to a Growing Family</h2><p className="mt-5 max-w-2xl leading-7 text-muted-foreground">Sri Krishna Cloud Kitchen started with a simple idea — to serve fresh, homestyle vegetarian food with love and care. Every order and every kind word helps us grow.</p><Button asChild variant="outline" className="mt-7 rounded-sm"><Link to="/about">More about us <ArrowRight /></Link></Button></div><div className="border-l border-gold pl-7"><p className="font-display text-3xl text-primary">Good food, close to home.</p><p className="mt-3 text-sm text-muted-foreground">Prepared in Garha and delivered across nearby Jabalpur.</p></div></div></section>
  </main>;
}
