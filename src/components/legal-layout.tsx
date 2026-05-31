import SiteNav from "./site-nav";
import SiteFooter from "./site-footer";

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-void text-text">
      <SiteNav variant="solid" />

      {/* Spacer to clear the fixed nav */}
      <div className="h-[72px]" />

      <main className="mx-auto max-w-[900px] px-6 py-16 lg:py-24">
        <h1 className="font-[family-name:var(--font-satoshi)] text-3xl font-bold tracking-tight text-white lg:text-4xl">
          {title}
        </h1>
        <p className="mt-3 font-mono text-xs tracking-wider text-muted">
          Last updated: {lastUpdated}
        </p>

        <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-text/90">
          {children}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
