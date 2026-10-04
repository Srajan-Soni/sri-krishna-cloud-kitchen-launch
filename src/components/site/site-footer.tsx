import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import logoAsset from "@/assets/sri-krishna-mark.png.asset.json";
import { NAV_LINKS, SITE_CONFIG } from "@/config/site";
import { Button } from "@/components/ui/button";
import { useOrderDialog } from "./order-dialog";

export function SiteFooter() {
  const { openOrderDialog } = useOrderDialog();
  return <footer className="border-t border-border bg-footer pb-24 pt-14 text-footer-foreground lg:pb-8 lg:pt-16">
    <div className="site-container grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_.7fr_.8fr_1fr]">
      <div><div className="flex items-center gap-3"><img src={logoAsset.url} alt="Sri Krishna Cloud Kitchen logo" width={666} height={375} loading="lazy" className="size-14 object-contain" /><div><p className="font-display text-2xl">Sri Krishna</p><p className="text-[10px] uppercase tracking-[0.18em] text-footer-muted">Cloud Kitchen</p></div></div><p className="mt-5 max-w-xs text-sm leading-6 text-footer-muted">Fresh, homemade vegetarian food, thoughtfully prepared in Garha, Jabalpur.</p></div>
      <div><h2 className="eyebrow text-gold-light">Discover</h2><nav className="mt-4 grid gap-3">{NAV_LINKS.map((item) => <Link key={item.to} to={item.to} className="text-sm text-footer-muted hover:text-footer-foreground">{item.label}</Link>)}</nav></div>
      <div><h2 className="eyebrow text-gold-light">Order</h2><div className="mt-4 grid gap-3"><button onClick={() => openOrderDialog()} className="w-fit cursor-pointer text-sm text-footer-muted hover:text-footer-foreground">Zomato</button><button onClick={() => openOrderDialog()} className="w-fit cursor-pointer text-sm text-footer-muted hover:text-footer-foreground">Swiggy</button></div></div>
      <div><h2 className="eyebrow text-gold-light">Contact</h2><div className="mt-4 grid gap-3 text-sm text-footer-muted">{SITE_CONFIG.phones.map((phone) => <a key={phone} href={`tel:${phone}`} className="hover:text-footer-foreground">{phone}</a>)}<a href={SITE_CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 break-all hover:text-footer-foreground"><Instagram className="size-4 shrink-0" />{SITE_CONFIG.instagramHandle}</a></div></div>
    </div>
    <div className="site-container mt-12 border-t border-footer-line pt-5 text-xs text-footer-muted"><p>© 2026 Sri Krishna Cloud Kitchen. All rights reserved.</p></div>
  </footer>;
}

export function MobileBottomBar() {
  const { openOrderDialog } = useOrderDialog();
  return <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-background p-2 shadow-[0_-8px_24px_color-mix(in_oklab,var(--foreground)_10%,transparent)] lg:hidden"><Button asChild variant="outline" className="h-12 rounded-sm"><Link to="/menu">Menu</Link></Button><Button className="h-12 rounded-sm" onClick={() => openOrderDialog()}>Order now</Button></div>;
}
