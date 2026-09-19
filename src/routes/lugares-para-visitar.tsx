import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import parque from "@/assets/parque.jpg.asset.json";
import mirador from "@/assets/mirador.jpg.asset.json";
import museo from "@/assets/museo.jpg.asset.json";
import sendero from "@/assets/sendero.jpg.asset.json";

export const Route = createFileRoute("/lugares-para-visitar")({
  head: () => ({ meta: [
    { title: "Lugares para visitar en Calima El Darién" },
    { name: "description", content: "Visita el Parque Los Fundadores, miradores, el Museo Arqueológico Calima y senderos naturales." },
    { property: "og:title", content: "Lugares para visitar en Calima El Darién" },
    { property: "og:description", content: "Historia, naturaleza y paisajes esenciales de Calima El Darién." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: PlacesPage,
});

function PlacesPage() {
  return <CategoryPage eyebrow="La tierra" title="Lugares para visitar" intro="El Darién se descubre entre espacios de encuentro, panorámicas del lago, memoria prehispánica y caminos rodeados de biodiversidad." tone="leaf" items={[
    { title: "Parque Principal Los Fundadores", description: "El corazón histórico del pueblo, con un ambiente tranquilo y lleno de naturaleza.", image: parque.url, alt: "Parque Principal Los Fundadores en Calima El Darién", credit: "Live Valle del Cauca" },
    { title: "Mirador con vista al valle", description: "Un lugar perfecto para contemplar la naturaleza y la inmensidad del lago.", image: mirador.url, alt: "Vista panorámica del Lago Calima desde el mirador", credit: "Live Valle del Cauca" },
    { title: "Museo Arqueológico Calima", description: "Descubre la historia y las tradiciones de las sociedades que habitaron nuestra región.", image: museo.url, alt: "Fachada del Museo Arqueológico Calima", credit: "Live Valle del Cauca" },
    { title: "Sendero ecológico", description: "Camina entre paisajes naturales y biodiversidad.", image: sendero.url, alt: "Cascada y paisaje natural de Calima El Darién", credit: "Live Valle del Cauca" },
  ]} />;
}