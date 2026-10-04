import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HeadContent, Link, Outlet, Scripts, createRootRouteWithContext, useRouter, type ErrorComponentProps } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Button } from "@/components/ui/button";
import { MobileBottomBar, SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { OrderDialogProvider } from "@/components/site/order-dialog";

function NotFoundComponent() { return <main className="grid min-h-[70vh] place-items-center px-5"><div className="text-center"><p className="eyebrow">404</p><h1 className="mt-3 font-display text-5xl text-primary">This page is not on the menu.</h1><Button asChild className="mt-7 rounded-sm"><Link to="/">Return home</Link></Button></div></main>; }
function ErrorComponent({ error, reset }: ErrorComponentProps) { console.error(error); const router = useRouter(); useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]); return <main className="grid min-h-[70vh] place-items-center px-5"><div className="text-center"><h1 className="font-display text-4xl text-primary">This page didn’t load</h1><p className="mt-3 text-muted-foreground">Please try again in a moment.</p><Button className="mt-7 rounded-sm" onClick={() => { router.invalidate(); reset(); }}>Try again</Button></div></main>; }

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({ meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { name: "theme-color", content: "#f8f4e9" }], links: [{ rel: "stylesheet", href: appCss }, { rel: "preconnect", href: "https://fonts.googleapis.com" }, { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }, { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Serif+Display&display=swap" }, { rel: "icon", type: "image/png", href: "/favicon.png" }] }),
  shellComponent: RootShell, component: RootComponent, notFoundComponent: NotFoundComponent, errorComponent: ErrorComponent,
});
function RootShell({ children }: { children: ReactNode }) { return <html lang="en"><head><HeadContent /></head><body>{children}<Scripts /></body></html>; }
function RootComponent() { const { queryClient } = Route.useRouteContext(); return <QueryClientProvider client={queryClient}><OrderDialogProvider><a href="#main-content" className="skip-link">Skip to content</a><SiteHeader /><Outlet /><SiteFooter /><MobileBottomBar /></OrderDialogProvider></QueryClientProvider>; }
