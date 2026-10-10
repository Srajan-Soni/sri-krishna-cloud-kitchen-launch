import { ArrowUpRight, Clock } from "lucide-react";
import type { MenuItem } from "@/data/menu";
import { Button } from "@/components/ui/button";
import { useOrderDialog } from "./order-dialog";

export function FoodCard({ item }: { item: MenuItem }) {
  const { openOrderDialog } = useOrderDialog();
  const price = item.price ? `₹${item.price}` : item.variants?.map((variant) => (variant.price ? `${variant.name} ₹${variant.price}` : variant.name)).join(" · ") ?? "Price to be confirmed";
  return <article className="group grid h-full grid-rows-[auto_1fr] overflow-hidden rounded-sm border border-border bg-card">
    <div className="aspect-[4/3] overflow-hidden bg-muted"><img src={item.image} alt={`${item.name}, homemade vegetarian food`} width={1024} height={768} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div>
    <div className="flex min-h-64 flex-col p-5"><p className="eyebrow">{item.category}</p><h3 className="mt-2 font-display text-2xl font-medium text-primary">{item.name}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>{item.availability && <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground"><Clock className="size-3.5" />{item.availability}</p>}<div className="mt-auto pt-5"><p className="mb-3 text-sm font-semibold text-primary">{price}</p><Button className="h-11 w-full justify-between rounded-sm" onClick={() => openOrderDialog(item)}>Order <ArrowUpRight /></Button></div></div>
  </article>;
}
