import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Contact | PULSR",
  description:
    "Get in touch with the PULSR team. Support, billing, and general inquiries.",
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-[family-name:var(--font-satoshi)] text-xl font-semibold tracking-tight text-white">
      {children}
    </h2>
  );
}

export default function ContactPage() {
  return (
    <LegalLayout title="Contact" lastUpdated="May 27, 2026">
      <section className="space-y-4">
        <H2>Get in touch</H2>
        <p>
          The fastest way to reach us is by email. We read every message and
          aim to respond within 1&ndash;2 business days.
        </p>
        <div className="rounded-lg border border-border bg-surface p-6">
          <p className="font-[family-name:var(--font-satoshi)] text-sm uppercase tracking-widest text-muted">
            Email
          </p>
          <p className="mt-1 font-[family-name:var(--font-satoshi)] text-lg text-white">
            <a
              href="mailto:miguel@pulsr.live"
              className="text-magenta hover:text-magenta-hover underline underline-offset-2"
            >
              miguel@pulsr.live
            </a>
          </p>
          <p className="mt-3 font-[family-name:var(--font-satoshi)] text-sm text-text/80">
            We aim to respond within 1–2 business days.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <H2>What to include</H2>
        <p>To help us respond faster, please include:</p>
        <ul className="list-disc space-y-2 pl-6 text-text/80">
          <li>
            <strong className="text-white">For support questions:</strong> the
            email on your PULSR account, what you were trying to do, and a
            screenshot or short description of what went wrong.
          </li>
          <li>
            <strong className="text-white">For billing questions:</strong> the
            email on your PULSR account and the date of the charge. Note that
            payments are processed by our payment processor and may appear on
            your statement under the processor&apos;s name.
          </li>
          <li>
            <strong className="text-white">For refund requests:</strong> see our{" "}
            <Link
              href="/refunds"
              className="text-magenta hover:text-magenta-hover underline underline-offset-2"
            >
              Refund Policy
            </Link>{" "}
            for what is covered.
          </li>
          <li>
            <strong className="text-white">For privacy / data requests:</strong>{" "}
            mention the right you want to exercise (access, deletion, export,
            etc.) per our{" "}
            <Link
              href="/privacy"
              className="text-magenta hover:text-magenta-hover underline underline-offset-2"
            >
              Privacy Policy
            </Link>
            .
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <H2>Account help</H2>
        <p>
          For account settings, subscription management, or password resets, log
          in to your dashboard at{" "}
          <a
            href="https://app.pulsr.live"
            className="text-magenta hover:text-magenta-hover underline underline-offset-2"
          >
            app.pulsr.live
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  );
}
