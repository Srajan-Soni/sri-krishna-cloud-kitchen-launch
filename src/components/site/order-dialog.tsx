import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { ExternalLink, ShoppingBag } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type OrderDialogContextValue = { openOrderDialog: (itemName?: string) => void };
const OrderDialogContext = createContext<OrderDialogContextValue | undefined>(undefined);

export function OrderDialogProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [itemName, setItemName] = useState<string>();
  const value = useMemo(() => ({ openOrderDialog: (name?: string) => { setItemName(name); setOpen(true); } }), []);
  return (
    <OrderDialogContext.Provider value={value}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[calc(100%-2rem)] rounded-sm border-border bg-background p-7 sm:max-w-md">
          <DialogHeader className="text-left">
            <div className="mb-3 flex size-11 items-center justify-center rounded-full bg-secondary text-primary"><ShoppingBag aria-hidden="true" /></div>
            <DialogTitle className="font-display text-3xl font-medium">Choose where to order</DialogTitle>
            <DialogDescription className="leading-6">{itemName ? `Order ${itemName} from our delivery partner.` : "Continue to our restaurant page on a delivery partner."}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-3 pt-2">
            <OrderDestination label="Order on Zomato" url={SITE_CONFIG.zomatoUrl} />
            <OrderDestination label="Order on Swiggy" url={SITE_CONFIG.swiggyUrl} />
          </div>
          {!SITE_CONFIG.zomatoUrl && !SITE_CONFIG.swiggyUrl && <p className="text-xs leading-5 text-muted-foreground">Online ordering links are being added. Please call us to order in the meantime.</p>}
        </DialogContent>
      </Dialog>
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
