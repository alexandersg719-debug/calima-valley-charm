import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site-shell";
import hero from "@/assets/lago-calima.jpg.asset.json";
import water from "@/assets/windsurf.jpg.asset.json";
import food from "@/assets/platos-tipicos.jpg.asset.json";
import places from "@/assets/parque.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Calima El Darién — Cultura, naturaleza y sabores" },
      { name: "description", content: "Descubre la riqueza cultural, turística y gastronómica de Calima El Darién y el Lago Calima." },
      { property: "og:title", content: "Calima El Darién — Cultura, naturaleza y sabores" },
      { property: "og:description", content: "Una guía visual de actividades acuáticas, gastronomía y lugares para visitar en Calima El Darién." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const categories = [
  { to: "/actividades-acuaticas", eyebrow: "Agua", title: "Actividades acuáticas", copy: "Vive el viento, la velocidad y la calma del Lago Calima.", image: water.url, tone: "bg-lake-soft/30 text-lake" },
  { to: "/restaurantes", eyebrow: "Mesa", title: "Restaurantes", copy: "Sabores del Valle servidos con tradición y paisajes inolvidables.", image: food.url, tone: "bg-terracotta-soft/25 text-primary" },
  { to: "/lugares-para-visitar", eyebrow: "Tierra", title: "Lugares para visitar", copy: "Parques, miradores y memoria ancestral para recorrer sin prisa.", image: places.url, tone: "bg-leaf-soft/30 text-leaf" },
] as const;

function HomePage() {
  return (
    <SiteShell>
      <main>
        <section className="mx-auto max-w-6xl px-5 pt-8 sm:px-8">
          <div className="clay relative overflow-hidden rounded-2xl bg-lake">
            <img src={hero.url} alt="Vista del Lago Calima rodeado de montañas verdes" width={1600} height={900} className="kenburns absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-foreground/45" />
            <div className="relative flex min-h-[440px] flex-col justify-end p-7 sm:min-h-[520px] sm:p-12">
              <span className="clay-sm mb-4 w-fit rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground">Portal cultural</span>
              <h1 className="max-w-[20ch] font-display text-4xl font-semibold leading-tight text-primary-foreground sm:text-6xl">El lago que respira la memoria del Valle</h1>
              <p className="mt-4 max-w-[48ch] text-base leading-relaxed text-primary-foreground/90 sm:text-lg">Este sitio busca mostrar la riqueza cultural, turística y gastronómica de nuestro pueblo.</p>
              <p className="mt-5 text-xs text-primary-foreground/75">Fotografía: Jhoanna1206 · Wikimedia Commons · CC BY-SA 4.0</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">Presentación</span>
              <h2 className="mt-3 max-w-[22ch] font-display text-3xl font-semibold leading-tight sm:text-4xl">Cultura viva a orilla del agua</h2>
              <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-muted-foreground sm:text-lg">Nuestro pueblo es un rincón lleno de historia, cultura y naturaleza. Aquí encontrarás tradiciones vivas, paisajes únicos y experiencias que te conectan con la esencia de nuestra tierra.</p>
              <Button asChild className="mt-8"><a href="#descubre">Explorar categorías <span aria-hidden="true">→</span></a></Button>
            </div>
            <div className="grid grid-cols-2 gap-4 md:col-span-5">
              <div className="clay-sm clay-in rounded-lg bg-leaf-soft/45 p-5"><span className="font-display text-3xl font-semibold text-leaf">3</span><p className="mt-1 text-sm text-muted-foreground">Categorías para explorar</p></div>
              <div className="clay-sm clay-in rounded-lg bg-terracotta-soft/35 p-5"><span className="font-display text-3xl font-semibold text-primary">12</span><p className="mt-1 text-sm text-muted-foreground">Experiencias visuales</p></div>
              <div className="clay-sm clay-in col-span-2 rounded-lg bg-lake-soft/35 p-5"><p className="text-sm leading-relaxed text-muted-foreground">Tradiciones, sabores y paisajes que hacen única a esta tierra vallecaucana.</p></div>
            </div>
          </div>
        </section>

        <section id="descubre" className="mx-auto max-w-6xl scroll-mt-8 px-5 pb-12 sm:px-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-lake">Descubre</span>
          <h2 className="mt-2 font-display text-3xl font-semibold leading-tight sm:text-4xl">Tres maneras de vivir el Darién</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {categories.map((category) => (
              <Link key={category.to} to={category.to} className={`clay-sm group block overflow-hidden rounded-lg p-3 transition-transform hover:-translate-y-1 ${category.tone}`}>
                <div className="overflow-hidden rounded-md"><img src={category.image} alt={category.title} loading="lazy" width={800} height={800} className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
                <div className="px-2 pb-2 pt-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">{category.eyebrow}</span>
                  <h3 className="mt-1 font-display text-2xl font-semibold text-foreground">{category.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{category.copy}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold">Explorar <span className="transition-transform group-hover:translate-x-1">→</span></span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}