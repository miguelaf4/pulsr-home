import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getPageBySlug,
  generateStaticParams as getStaticParams,
} from "@/lib/pages";

export { getStaticParams as generateStaticParams };

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) return {};
  return { title: page.title, description: page.description };
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) notFound();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <span className="mb-4 font-mono text-xs tracking-[0.2em] uppercase text-muted">
        /{page.slug}
      </span>
      <h1 className="font-[family-name:var(--font-syne)] text-4xl font-extrabold text-white sm:text-5xl">
        {page.title}
      </h1>
      <p className="mt-4 max-w-lg text-center text-muted">{page.description}</p>
    </main>
  );
}
