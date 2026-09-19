import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/actividades-acuaticas", label: "Actividades" },
  { to: "/restaurantes", label: "Restaurantes" },
  { to: "/lugares-para-visitar", label: "Lugares" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="mx-auto max-w-6xl px-5 pt-5 sm:px-8 sm:pt-7">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="clay-sm clay-in grid size-10 place-items-center rounded-full bg-primary font-display text-lg text-primary-foreground">C</span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold">Calima El Darién</span>
              <span className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Valle del Cauca</span>
            </span>
          </Link>

          <nav className="clay-sm hidden items-center gap-1 rounded-full bg-secondary/70 p-1.5 md:flex" aria-label="Navegación principal">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${pathname === link.to ? "clay-sm bg-background text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Button variant="leaf" asChild className="hidden sm:inline-flex">
            <Link to="/lugares-para-visitar">Planifica tu visita</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Cerrar menú" : "Abrir menú"}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
        {open && (
          <nav className="clay-sm mt-4 grid gap-1 rounded-lg bg-secondary p-2 md:hidden" aria-label="Navegación móvil">
            {links.map((link) => (
              <Link key={link.to} to={link.to} className="rounded-md px-4 py-3 text-sm font-medium hover:bg-background" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
      {children}
      <footer className="mt-12 border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="font-display text-base font-semibold">Calima El Darién · Valle del Cauca</p>
          <p className="text-sm text-muted-foreground">Un portal cultural hecho para compartir la esencia del Darién.</p>
        </div>
      </footer>
    </div>
  );
}