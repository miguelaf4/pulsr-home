import Link from "next/link";
import PulsrLogo from "@/components/pulsr-logo";

interface SiteFooterProps {
  /** When true, the footer sits inside a section with its own background (no top border). */
  inline?: boolean;
}

export default function SiteFooter({ inline = false }: SiteFooterProps) {
  return (
    <footer
      className={`px-6 py-14 lg:px-20 ${
        inline ? "" : "border-t border-border/60 bg-void"
      }`}
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 flex flex-col gap-3 md:col-span-1">
            <Link href="/" aria-label="pulsr — home" className="inline-flex">
              <PulsrLogo size={20} />
            </Link>
            <p className="max-w-[220px] font-[family-name:var(--font-satoshi)] text-[13px] leading-relaxed text-text/70">
              On-screen overlay graphics for live shopping streams.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-text/40">
              Product
            </p>
            <Link href="/#widgets" className="font-[family-name:var(--font-satoshi)] text-[13px] text-text transition-colors hover:text-white">
              Overlays
            </Link>
            <Link href="/#features" className="font-[family-name:var(--font-satoshi)] text-[13px] text-text transition-colors hover:text-white">
              Features
            </Link>
            <Link href="/pricing" className="font-[family-name:var(--font-satoshi)] text-[13px] text-text transition-colors hover:text-white">
              Pricing
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-text/40">
              Company
            </p>
            <Link href="/contact" className="font-[family-name:var(--font-satoshi)] text-[13px] text-text transition-colors hover:text-white">
              Contact
            </Link>
            <a
              href="https://app.pulsr.live"
              className="font-[family-name:var(--font-satoshi)] text-[13px] text-text transition-colors hover:text-white"
            >
              Log in
            </a>
            <a
              href="https://app.pulsr.live"
              className="font-[family-name:var(--font-satoshi)] text-[13px] text-text transition-colors hover:text-white"
            >
              Start free
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-text/40">
              Legal
            </p>
            <Link href="/terms" className="font-[family-name:var(--font-satoshi)] text-[13px] text-text transition-colors hover:text-white">
              Terms of Service
            </Link>
            <Link href="/refunds" className="font-[family-name:var(--font-satoshi)] text-[13px] text-text transition-colors hover:text-white">
              Refund Policy
            </Link>
            <Link href="/privacy" className="font-[family-name:var(--font-satoshi)] text-[13px] text-text transition-colors hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-border/40 pt-6 text-center">
          <p className="font-mono text-[11px] tracking-[0.1em] text-text/60">
            © 2026 pulsr
          </p>
        </div>
      </div>
    </footer>
  );
}
