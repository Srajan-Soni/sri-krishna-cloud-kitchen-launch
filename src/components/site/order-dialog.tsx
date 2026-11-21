import { createContext, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { ExternalLink, Phone, ShoppingBag, Utensils, X } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { MENU_ORDER_LINKS, type MenuItem } from "@/data/menu";
import { Button } from "@/components/ui/button";

type OrderDialogContextValue = { openOrderDialog: (item?: MenuItem) => void };
const OrderDialogContext = createContext<OrderDialogContextValue | undefined>(undefined);

function resolveOrderUrl(platform: "zomato" | "swiggy", item?: MenuItem): string {
  // 1. If dish-specific direct URL exists, use it
  if (item && MENU_ORDER_LINKS[item.id]?.[platform]) {
    return MENU_ORDER_LINKS[item.id]![platform]!;
  }

  // 2. Dish-specific search query on food aggregators for instant ordering
  if (item) {
    const query = encodeURIComponent(`Sri Krishna Cloud Kitchen ${item.name}`);
    if (platform === "zomato") {
      return `https://www.zomato.com/jabalpur/restaurants?q=${query}`;
    }
    return `https://www.swiggy.com/city/jabalpur?search_query=${query}`;
  }

  // 3. General restaurant page or search URL
  if (platform === "zomato") {
    return SITE_CONFIG.zomatoUrl || "https://www.zomato.com/jabalpur/restaurants?q=Sri+Krishna+Cloud+Kitchen";
  }
  return SITE_CONFIG.swiggyUrl || "https://www.swiggy.com/city/jabalpur?search_query=Sri+Krishna+Cloud+Kitchen";
}

export function OrderDialogProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState<MenuItem>();
  const panelRef = useRef<HTMLDivElement>(null);
  const value = useMemo(() => ({ openOrderDialog: (nextItem?: MenuItem) => { setItem(nextItem); setOpen(true); } }), []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : undefined;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [open]);

  const zomatoUrl = resolveOrderUrl("zomato", item);
  const swiggyUrl = resolveOrderUrl("swiggy", item);
  const primaryPhone = SITE_CONFIG.phones[0] || "8103560228";

  return (
    <OrderDialogContext.Provider value={value}>
      {children}
      {open && <div className="fixed inset-0 z-50 grid place-items-center bg-foreground/70 p-4 backdrop-blur-xs transition-opacity" onMouseDown={(event) => { if (event.currentTarget === event.target) setOpen(false); }}>
        <div ref={panelRef} role="dialog" aria-modal="true" aria-labelledby="order-dialog-title" aria-describedby="order-dialog-description" tabIndex={-1} className="relative w-full max-w-md rounded-md border border-border bg-background p-6 shadow-2xl outline-none sm:p-7">
          <Button variant="ghost" size="icon" className="absolute right-3 top-3 text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)} aria-label="Close order options"><X className="size-5" /></Button>

          <div className="text-left">
            <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-secondary text-primary">
              {item ? <Utensils className="size-6 text-peacock" /> : <ShoppingBag className="size-6 text-peacock" />}
            </div>
            <h2 id="order-dialog-title" className="font-display text-2xl font-medium text-primary sm:text-3xl">
              {item ? `Order ${item.name}` : "Order Online"}
            </h2>
            <p id="order-dialog-description" className="mt-1.5 text-sm leading-6 text-muted-foreground">
              {item
                ? `Choose your preferred delivery partner to order ${item.name} fresh from Sri Krishna Cloud Kitchen.`
                : "Choose your preferred delivery platform or call us directly."}
            </p>

            {item && (
              <div className="mt-4 flex items-center justify-between rounded-sm border border-border bg-secondary/50 p-3">
                <div className="flex items-center gap-3">
                  {item.image && (
                    <img src={item.image} alt={item.name} className="size-12 rounded-xs object-cover" />
                  )}
                  <div>
                    <span className="font-medium text-primary">{item.name}</span>
                    <span className="block text-xs text-muted-foreground">{item.category}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-display text-base font-semibold text-primary">
                    {item.price ? `₹${item.price}` : item.variants?.[0]?.price ? `From ₹${item.variants[0].price}` : "Homestyle"}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 grid gap-3">
            <a
              href={zomatoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-between rounded-sm bg-[#E23744] px-5 font-medium text-white shadow-xs transition-opacity hover:opacity-95"
            >
              <span>Order on Zomato</span>
              <ExternalLink className="size-4 opacity-80" aria-hidden="true" />
            </a>

            <a
              href={swiggyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-between rounded-sm bg-[#FC8019] px-5 font-medium text-white shadow-xs transition-opacity hover:opacity-95"
            >
              <span>Order on Swiggy</span>
              <ExternalLink className="size-4 opacity-80" aria-hidden="true" />
            </a>

            <div className="relative my-2 text-center text-xs uppercase tracking-wider text-muted-foreground after:absolute after:inset-y-1/2 after:left-0 after:w-[38%] after:border-t after:border-border before:absolute before:inset-y-1/2 before:right-0 before:w-[38%] before:border-t before:border-border">
              <span>Or Direct Call</span>
            </div>

            <Button asChild variant="outline" className="h-11 w-full justify-center gap-2 rounded-sm border-border font-medium">
              <a href={`tel:${primaryPhone}`}>
                <Phone className="size-4 text-peacock" />
                Call Kitchen ({primaryPhone})
              </a>
            </Button>
          </div>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            Freshly prepared in Garha, Jabalpur • Pure Vegetarian
          </p>
        </div>
      </div>}
    </OrderDialogContext.Provider>
  );
}

export function useOrderDialog() {
  const context = useContext(OrderDialogContext);
  if (!context) throw new Error("useOrderDialog must be used within OrderDialogProvider");
  return context;
}
