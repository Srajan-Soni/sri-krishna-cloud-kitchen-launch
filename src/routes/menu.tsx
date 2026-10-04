import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FoodCard } from "@/components/site/food-card";
import { PageHero } from "@/components/site/page-hero";
import { MENU_CATEGORIES, menuItems, type MenuCategory } from "@/data/menu";
import { Button } from "@/components/ui/button";

const title = "Vegetarian Menu | Sri Krishna Cloud Kitchen, Jabalpur";
const description = "Browse breakfast, roti combos, homestyle curries, khichdi and vrat food from Sri Krishna Cloud Kitchen in Garha, Jabalpur.";
export const Route = createFileRoute("/menu")({ head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: MenuPage });
type Filter = "All" | MenuCategory;
function MenuPage() { const [filter, setFilter] = useState<Filter>("All"); const visible = filter === "All" ? menuItems : menuItems.filter((item) => item.category === filter); return <main id="main-content"><PageHero eyebrow="Our menu" title="Homestyle favourites for every kind of day."><p>Fresh vegetarian food prepared with familiar flavours and plenty of care. Prices shown are the current owner-supplied prices.</p></PageHero><section className="site-container py-12 lg:py-20"><div className="scrollbar-none -mx-5 flex gap-2 overflow-x-auto px-5 pb-3 sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label="Filter menu by category">{MENU_CATEGORIES.map((category) => <Button key={category} variant={filter === category ? "default" : "outline"} className="h-10 shrink-0 rounded-full px-5" onClick={() => setFilter(category)} aria-pressed={filter === category}>{category}</Button>)}</div><p className="mt-5 text-sm text-muted-foreground" aria-live="polite">Showing {visible.length} items</p><div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{visible.map((item) => <FoodCard key={item.id} item={item} />)}</div></section></main>; }
