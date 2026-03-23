export interface PageConfig {
  slug: string;
  title: string;
  description: string;
}

export const pages: PageConfig[] = [
  {
    slug: "test-page",
    title: "Test Page",
    description: "A test page to verify the dynamic routing system works correctly.",
  },
  {
    slug: "marcas",
    title: "Para Marcas — PULSR",
    description:
      "Producimos live shopping que convierte. Estudio profesional en CDMX, hosts capacitados, operación completa para TikTok Shop.",
  },
  {
    slug: "hosts",
    title: "Para Hosts — PULSR",
    description:
      "Únete al roster de hosts de PULSR. Capacitación, estudio profesional y las mejores marcas de México.",
  },
];

export function getPageBySlug(slug: string): PageConfig | undefined {
  return pages.find((p) => p.slug === slug);
}

export function generateStaticParams() {
  return pages.map((page) => ({ slug: page.slug }));
}
