import { ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site-shell";

export type GalleryItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
  credit?: string;
};

type CategoryPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  tone: "lake" | "terracotta" | "leaf";
  items: GalleryItem[];
};

const toneClasses = {
  lake: "text-lake bg-lake-soft/25",
  terracotta: "text-primary bg-terracotta-soft/20",
  leaf: "text-leaf bg-leaf-soft/25",
};

export function CategoryPage({ eyebrow, title, intro, tone, items }: CategoryPageProps) {
  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-5 pb-12 pt-12 sm:px-8 sm:pt-16">
        <Button variant="ghost" asChild className="-ml-3 mb-8">
          <Link to="/"><ArrowLeft /> Volver al inicio</Link>
        </Button>
        <header className="max-w-3xl">
          <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${toneClasses[tone]}`}>{eyebrow}</span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
        </header>

        <section className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2" aria-label={`Galería de ${title}`}>
          {items.map((item, index) => (
            <article key={item.title} className="group">
              <div className="clay-sm overflow-hidden rounded-lg bg-secondary">
                <img src={item.image} alt={item.alt} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="pt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">0{index + 1}</p>
                <h2 className="mt-2 font-display text-2xl font-semibold">{item.title}</h2>
                <p className="mt-2 max-w-lg leading-relaxed text-muted-foreground">{item.description}</p>
                {item.credit && <p className="mt-3 text-xs text-muted-foreground/80">Fotografía: {item.credit}</p>}
              </div>
            </article>
          ))}
        </section>
      </main>
    </SiteShell>
  );
}