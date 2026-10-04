import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu } from "lucide-react";
import logoAsset from "@/assets/sri-krishna-logo.png.asset.json";
import { NAV_LINKS } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useOrderDialog } from "./order-dialog";

export function SiteHeader() {
  const { openOrderDialog } = useOrderDialog();
  return <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
    <div className="site-container grid h-[76px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:h-[88px]">
      <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Sri Krishna Cloud Kitchen home">
        <img src={logoAsset.url} alt="" width={666} height={375} className="size-12 shrink-0 object-contain lg:size-14" />
        <span className="min-w-0"><strong className="block truncate font-display text-xl font-medium text-primary lg:text-2xl">Sri Krishna</strong><span className="block text-[9px] uppercase tracking-[0.18em] text-muted-foreground">Cloud Kitchen</span></span>
      </Link>
      <div className="hidden items-center gap-9 lg:flex">
        <nav aria-label="Primary navigation" className="flex items-center gap-8">
          {NAV_LINKS.map((item) => <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className="border-b border-transparent py-2 text-sm text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "border-gold text-primary" }}>{item.label}</Link>)}
        </nav>
        <Button onClick={() => openOrderDialog()} className="h-11 rounded-sm px-5">Order now <ArrowUpRight /></Button>
      </div>
      <Sheet>
        <SheetTrigger asChild><Button variant="ghost" size="icon" className="size-11 lg:hidden" aria-label="Open menu"><Menu /></Button></SheetTrigger>
        <SheetContent className="w-[86%] border-border bg-background p-7">
          <SheetHeader className="text-left"><SheetTitle className="font-display text-2xl">Sri Krishna</SheetTitle><SheetDescription>Fresh • Homemade • Vegetarian</SheetDescription></SheetHeader>
          <nav className="mt-10 grid gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((item) => <SheetClose asChild key={item.to}><Link to={item.to} activeOptions={{ exact: item.to === "/" }} className="border-b border-border py-4 font-display text-2xl text-primary">{item.label}</Link></SheetClose>)}
          </nav>
          <Button className="mt-8 h-12 w-full rounded-sm" onClick={() => openOrderDialog()}>Order now <ArrowUpRight /></Button>
        </SheetContent>
      </Sheet>
    </div>
  </header>;
}
