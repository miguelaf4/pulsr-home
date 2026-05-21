import Link from "next/link";

const PulsrLogo = () => (
  <svg viewBox="0 0 220 36" fill="none" className="h-6 w-auto">
    <path
      d="M0 18 Q5 18 7 9 Q9 0 12 18 Q14 36 17 18 Q19 5 21 18 Q23 28 26 18 L28 18"
      stroke="#FF2D6B"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    <text
      x="38"
      y="26"
      fontFamily="var(--font-syne), Syne, sans-serif"
      fontWeight="800"
      fontSize="28"
      fill="#F5F5FA"
      letterSpacing="3"
    >
      PULSR
    </text>
  </svg>
);

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
      {/* Header */}
      <header className="border-b border-border bg-dark/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto flex max-w-[900px] items-center justify-between px-6 py-4">
          <Link href="/" className="group flex items-center gap-3">
            <PulsrLogo />
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="/terms"
              className="font-[family-name:var(--font-outfit)] text-xs text-muted transition-colors hover:text-white"
            >
              Terms
            </Link>
            <Link
              href="/refunds"
              className="font-[family-name:var(--font-outfit)] text-xs text-muted transition-colors hover:text-white"
            >
              Refunds
            </Link>
            <Link
              href="/privacy"
              className="font-[family-name:var(--font-outfit)] text-xs text-muted transition-colors hover:text-white"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-[900px] px-6 py-16 lg:py-24">
        <h1 className="font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight text-white lg:text-4xl">
          {title}
        </h1>
        <p className="mt-3 font-mono text-xs tracking-wider text-muted">
          Last updated: {lastUpdated}
        </p>

        <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-text/90">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-dark px-6 py-10">
        <div className="mx-auto flex max-w-[900px] flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <Link href="/" className="group">
            <PulsrLogo />
          </Link>
          <nav className="flex items-center gap-5">
            <Link
              href="/terms"
              className="font-[family-name:var(--font-outfit)] text-xs text-muted transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
            <Link
              href="/refunds"
              className="font-[family-name:var(--font-outfit)] text-xs text-muted transition-colors hover:text-white"
            >
              Refund Policy
            </Link>
            <Link
              href="/privacy"
              className="font-[family-name:var(--font-outfit)] text-xs text-muted transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
        <p className="mt-6 text-center font-mono text-[11px] tracking-[0.1em] text-border">
          &copy; 2026 PULSR
        </p>
      </footer>
    </div>
  );
}
