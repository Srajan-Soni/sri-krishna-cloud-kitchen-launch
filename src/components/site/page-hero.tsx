import type { ReactNode } from "react";
export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <section className="border-b border-border bg-secondary/55"><div className="site-container py-16 sm:py-20 lg:py-24"><p className="eyebrow">{eyebrow}</p><h1 className="mt-4 max-w-4xl font-display text-5xl font-medium leading-[1.02] text-primary sm:text-6xl lg:text-7xl">{title}</h1><div className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{children}</div></div></section>;
}
