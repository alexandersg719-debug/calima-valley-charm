import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import windsurf from "@/assets/windsurf.jpg.asset.json";
import kitesurf from "@/assets/kitesurf-real.jpg.asset.json";
import esqui from "@/assets/esqui-nautico.jpg.asset.json";
import lancha from "@/assets/lago-calima.jpg.asset.json";

export const Route = createFileRoute("/actividades-acuaticas")({
  head: () => ({ meta: [
    { title: "Actividades acuáticas en el Lago Calima" },
    { name: "description", content: "Windsurf, kitesurf, esquí náutico y paseos en lancha en el Lago Calima." },
    { property: "og:title", content: "Actividades acuáticas en el Lago Calima" },
    { property: "og:description", content: "Descubre cuatro formas de disfrutar las aguas y los vientos del Lago Calima." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: ActivitiesPage,
});

function ActivitiesPage() {
  return <CategoryPage eyebrow="El agua" title="Actividades acuáticas" intro="Los vientos constantes y el paisaje del Lago Calima crean un escenario privilegiado para vivir el agua con calma o adrenalina." tone="lake" items={[
    { title: "Windsurf", description: "Una experiencia emocionante para recorrer el Lago Calima impulsado por sus famosos vientos.", image: windsurf.url, alt: "Deportista practicando windsurf en el Lago Calima", credit: "Live Valle del Cauca" },
    { title: "Kitesurf", description: "Perfecto para disfrutar los aires y las aguas del Lago Calima.", image: kitesurf.url, alt: "Kitesurf en las aguas del Lago Calima", credit: "Live Valle del Cauca" },
    { title: "Esquí náutico", description: "Explora la adrenalina y vive una experiencia llena de velocidad sobre el lago.", image: esqui.url, alt: "Actividad náutica en el Lago Calima", credit: "Live Valle del Cauca" },
    { title: "Paseo en lancha tradicional", description: "Una forma auténtica y tranquila de recorrer nuestras aguas y contemplar las montañas.", image: lancha.url, alt: "Vista amplia del Lago Calima, escenario de paseos en lancha", credit: "Jhoanna1206 · Wikimedia Commons · CC BY-SA 4.0" },
  ]} />;
}