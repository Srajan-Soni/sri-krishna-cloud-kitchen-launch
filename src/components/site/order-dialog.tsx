import { createContext, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { ExternalLink, ShoppingBag, X } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { Button } from "@/components/ui/button";

type OrderDialogContextValue = { openOrderDialog: (itemName?: string) => void };
const OrderDialogContext = createContext<OrderDialogContextValue | undefined>(undefined);

export function OrderDialogProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [itemName, setItemName] = useState<string>();
  const panelRef = useRef<HTMLDivElement>(null);
  const value = useMemo(() => ({ openOrderDialog: (name?: string) => { setItemName(name); setOpen(true); } }), []);

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

  return (
    <OrderDialogContext.Provider value={value}>
      {children}
      {open && <div className="fixed inset-0 z-50 grid place-items-center bg-foreground/70 p-4" onMouseDown={(event) => { if (event.currentTarget === event.target) setOpen(false); }}>
        <div ref={panelRef} role="dialog" aria-modal="true" aria-labelledby="order-dialog-title" aria-describedby="order-dialog-description" tabIndex={-1} className="relative w-full max-w-md rounded-sm border border-border bg-background p-7 shadow-2xl outline-none">
          <Button variant="ghost" size="icon" className="absolute right-3 top-3" onClick={() => setOpen(false)} aria-label="Close order options"><X /></Button>
          <div className="text-left">
            <div className="mb-3 flex size-11 items-center justify-center rounded-full bg-secondary text-primary"><ShoppingBag aria-hidden="true" /></div>
            <h2 id="order-dialog-title" className="font-display text-3xl font-medium text-primary">Choose where to order</h2>
            <p id="order-dialog-description" className="mt-2 text-sm leading-6 text-muted-foreground">{itemName ? `Order ${itemName} from our delivery partner.` : "Continue to our restaurant page on a delivery partner."}</p>
          </div>
          <div className="grid gap-3 pt-2">
            <OrderDestination label="Order on Zomato" url={SITE_CONFIG.zomatoUrl} />
            <OrderDestination label="Order on Swiggy" url={SITE_CONFIG.swiggyUrl} />
          </div>
          {!SITE_CONFIG.zomatoUrl && !SITE_CONFIG.swiggyUrl && <p className="text-xs leading-5 text-muted-foreground">Online ordering links are being added. Please call us to order in the meantime.</p>}
        </div>
      </div>}
    </OrderDialogContext.Provider>
  );
}

function OrderDestination({ label, url }: { label: string; url: string }) {
  return url ? <Button asChild size="lg" className="h-12 justify-between rounded-sm"><a href={url} target="_blank" rel="noopener noreferrer">{label}<ExternalLink aria-hidden="true" /></a></Button> : <Button size="lg" className="h-12 justify-between rounded-sm" disabled>{label}<span className="text-xs font-normal">Coming soon</span></Button>;
}

export function useOrderDialog() {
  const context = useContext(OrderDialogContext);
  if (!context) throw new Error("useOrderDialog must be used within OrderDialogProvider");
  return context;
}
