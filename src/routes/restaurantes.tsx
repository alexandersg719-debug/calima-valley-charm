import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import platos from "@/assets/platos-tipicos.jpg.asset.json";
import vista from "@/assets/restaurante-panoramico.jpg";
import chef from "@/assets/chef-local.jpg";
import mercado from "@/assets/mercado-local.jpg";

export const Route = createFileRoute("/restaurantes")({
  head: () => ({ meta: [
    { title: "Restaurantes y sabores de Calima El Darién" },
    { name: "description", content: "Conoce los sabores tradicionales, restaurantes y cocina local de Calima El Darién." },
    { property: "og:title", content: "Restaurantes y sabores de Calima El Darién" },
    { property: "og:description", content: "Una mirada a la cocina tradicional y contemporánea alrededor del Lago Calima." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: RestaurantsPage,
});

function RestaurantsPage() {
  return <CategoryPage eyebrow="La mesa" title="Restaurantes" intro="La cocina local reúne productos frescos, recetas familiares y mesas donde el paisaje también hace parte de la experiencia." tone="terracotta" items={[
    { title: "Plato típico servido en mesa rústica", description: "Sabores tradicionales que cuentan historias.", image: platos.url, alt: "Plato de pescado preparado en Calima El Darién", credit: "Live Valle del Cauca" },
    { title: "Restaurante con vista panorámica", description: "Comida acompañada de paisajes únicos.", image: vista, alt: "Restaurante rústico con vista panorámica al Lago Calima" },
    { title: "Chef preparando un plato gourmet", description: "Innovación y creatividad en la cocina.", image: chef, alt: "Chef preparando un plato con ingredientes locales" },
    { title: "Mercado local con puestos de comida", description: "Ambiente vibrante lleno de aromas y colores.", image: mercado, alt: "Mercado local con frutas, alimentos y puestos de comida" },
  ]} />;
}