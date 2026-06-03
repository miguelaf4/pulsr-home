import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Pricing | PULSR",
  description:
    "PULSR pricing — free tier and Pro at $12.99/month or $129.99/year. All 10 overlay types and 34 visual themes on both tiers.",
};

const FEATURES: { label: string; free: string | boolean; pro: string | boolean }[] = [
  { label: "All 10 overlay types", free: true, pro: true },
  { label: "All 34 visual themes", free: true, pro: true },
  { label: "All 28 conversion-focused templates", free: true, pro: true },
  { label: "Custom colors, fonts, and animations", free: true, pro: true },
  { label: "Active overlays at once", free: "1", pro: "Unlimited" },
  { label: "Scenes (compose multiple overlays at one URL)", free: false, pro: true },
  { label: "Brand settings (global font + color defaults)", free: false, pro: true },
  { label: "Automation triggers (time, random, scheduled)", free: "Manual only", pro: "All modes" },
  { label: "Media library", free: true, pro: true },
  { label: "Edit live, OBS updates in ~2 seconds", free: true, pro: true },
  { label: "“Powered by PULSR” watermark", free: "Yes", pro: "Removed" },
  { label: "Support", free: "Community", pro: "Email" },
];

function Check() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 text-cyan">
      <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Dash() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 text-text/40">
      <path d="M5 10h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function Cell({ value }: { value: string | boolean }) {
  if (value === true) return <Check />;
  if (value === false) return <Dash />;
  return <span className="font-[family-name:var(--font-satoshi)] text-sm text-white">{value}</span>;
}

const PRICING_LD = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "PULSR — Live Shopping Overlays",
  description:
    "On-screen overlay graphics for live shopping streams. Free tier with all 10 overlay types and 34 themes. Pro tier adds scenes, brand defaults, automation, and removes the watermark.",
  url: "https://pulsr.live/pricing",
  image: "https://pulsr.live/opengraph-image",
  brand: { "@type": "Brand", name: "PULSR" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "0",
    highPrice: "129.99",
    offerCount: 3,
    offers: [
      {
        "@type": "Offer",
        name: "Free",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://app.pulsr.live",
      },
      {
        "@type": "Offer",
        name: "Pro (monthly)",
        price: "12.99",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://app.pulsr.live",
      },
      {
        "@type": "Offer",
        name: "Pro (annual)",
        price: "129.99",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://app.pulsr.live",
      },
    ],
  },
};

export default function PricingPage() {
  return (
    <LegalLayout title="Pricing" lastUpdated="May 27, 2026">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRICING_LD) }}
      />
      <section className="space-y-4">
        <p className="font-[family-name:var(--font-satoshi)] text-lg leading-relaxed text-white sm:text-xl">
          Every overlay, every theme, every template &mdash; on both plans.
        </p>
        <p className="text-text/80">
          Start on Free and run a single overlay forever. Move to Pro the day
          you want to stack multiple overlays into one scene, automate the
          repetitive stuff, and lose the watermark.
        </p>
      </section>

      {/* Plans */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Free */}
        <div className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0c0c14] p-8 transition-all duration-300 hover:border-white/[0.1]">
          <div
            className="pointer-events-none absolute inset-0 opacity-60 blur-[40px] transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(ellipse at 30% 40%, rgba(0,212,204,0.18) 0%, transparent 70%)",
            }}
          />
          <div className="relative">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-cyan">
              Free
            </p>
            <h3 className="mt-2 font-[family-name:var(--font-satoshi)] text-3xl font-extrabold text-white">
              $0
            </h3>
            <p className="mt-1 font-[family-name:var(--font-satoshi)] text-sm text-text/70">
              Forever free
            </p>
            <ul className="mt-6 space-y-3 text-[15px] text-text/90">
              <li className="flex gap-2"><Check /> All 10 overlay types and 34 themes</li>
              <li className="flex gap-2"><Check /> All 28 templates</li>
              <li className="flex gap-2"><Check /> 1 active overlay at a time</li>
              <li className="flex gap-2"><Check /> Live editing (OBS update in ~2s)</li>
              <li className="flex gap-2"><Check /> Media library</li>
              <li className="flex gap-2"><Dash /> &ldquo;Powered by PULSR&rdquo; watermark shown</li>
            </ul>
            <a
              href="https://app.pulsr.live"
              className="mt-8 inline-flex w-full items-center justify-center rounded-lg border border-white/15 bg-transparent px-6 py-3 font-[family-name:var(--font-satoshi)] text-sm font-semibold text-white transition-all duration-200 hover:border-cyan/40 hover:text-cyan"
            >
              Start free
            </a>
          </div>
        </div>

        {/* Pro */}
        <div className="group relative overflow-hidden rounded-2xl border border-primary/40 bg-[#0c0c14] p-8 shadow-[0_0_40px_rgba(155,133,245,0.12)] transition-all duration-300 hover:border-primary/60">
          <div
            className="pointer-events-none absolute inset-0 opacity-70 blur-[40px] transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(ellipse at 70% 30%, rgba(139,26,255,0.22) 0%, rgba(255,45,107,0.12) 50%, transparent 75%)",
            }}
          />
          <div className="btn-primary absolute -top-3 right-6 z-10 rounded-full px-3 py-1 font-mono text-[10px] font-semibold tracking-wider uppercase">
            Most popular
          </div>
          <div className="relative">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-primary">
              Pro
            </p>
            <div className="mt-2 flex items-baseline gap-2">
              <h3 className="font-[family-name:var(--font-satoshi)] text-3xl font-extrabold text-white">
                $12.99
              </h3>
              <span className="font-[family-name:var(--font-satoshi)] text-sm text-text/70">/ month</span>
            </div>
            <p className="mt-1 font-[family-name:var(--font-satoshi)] text-sm text-text/70">
              or $129.99/year (save ~17%)
            </p>
            <ul className="mt-6 space-y-3 text-[15px] text-text/90">
              <li className="flex gap-2"><Check /> Everything in Free</li>
              <li className="flex gap-2"><Check /> Unlimited active overlays</li>
              <li className="flex gap-2"><Check /> Scenes — multiple overlays at one URL</li>
              <li className="flex gap-2"><Check /> Brand settings (global font + color)</li>
              <li className="flex gap-2"><Check /> Automation triggers (time, random, scheduled)</li>
              <li className="flex gap-2"><Check /> Watermark removed</li>
              <li className="flex gap-2"><Check /> Email support</li>
            </ul>
            <a
              href="https://app.pulsr.live"
              className="btn-primary mt-8 inline-flex w-full items-center justify-center rounded-lg px-6 py-3 font-[family-name:var(--font-satoshi)] text-sm font-semibold"
            >
              Start 5-day free trial
            </a>
            <p className="mt-3 text-center font-mono text-[11px] text-text/60">
              Payment method required. Trial available on the monthly plan
              only — cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Compare matrix */}
      <section className="space-y-4">
        <h2 className="font-[family-name:var(--font-satoshi)] text-xl font-semibold tracking-tight text-white">
          Compare plans
        </h2>
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-left">
            <thead className="bg-surface/40">
              <tr>
                <th className="px-5 py-3 font-[family-name:var(--font-satoshi)] text-[13px] font-semibold text-white">Feature</th>
                <th className="px-5 py-3 font-[family-name:var(--font-satoshi)] text-[13px] font-semibold text-white">Free</th>
                <th className="px-5 py-3 font-[family-name:var(--font-satoshi)] text-[13px] font-semibold text-white">Pro</th>
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((row) => (
                <tr key={row.label} className="border-t border-border/60">
                  <td className="px-5 py-3 font-[family-name:var(--font-satoshi)] text-[14px] text-text/90">
                    {row.label}
                  </td>
                  <td className="px-5 py-3"><Cell value={row.free} /></td>
                  <td className="px-5 py-3"><Cell value={row.pro} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Billing */}
      <section className="space-y-4">
        <h2 className="font-[family-name:var(--font-satoshi)] text-xl font-semibold tracking-tight text-white">
          Billing &amp; cancellation
        </h2>
        <ul className="list-disc space-y-2 pl-6 text-text/80">
          <li>
            Pro plans are billed monthly ($12.99 USD) or annually ($129.99 USD).
            All prices are in USD.
          </li>
          <li>
            A 5-day free trial is available on first signup to the Pro monthly
            plan. The trial is not offered on the annual plan. A valid payment
            method is required to start the trial.
          </li>
          <li>
            14-day money-back guarantee on the first paid Pro charge. See the{" "}
            <Link href="/refunds" className="text-magenta hover:text-magenta-hover underline underline-offset-2">
              Refund Policy
            </Link>{" "}
            for full details.
          </li>
          <li>
            Cancel anytime from your account settings. Pro features stay active
            until the end of the current billing period.
          </li>
          {/* TODO(paddle): link out to Paddle and name them as MoR when switching. */}
          <li>
            Payments are processed by our third-party payment processor, which
            may act as the Merchant of Record. Charges may appear on your
            statement under the processor&apos;s name.
          </li>
        </ul>
      </section>

      {/* FAQ-ish */}
      <section className="space-y-4">
        <h2 className="font-[family-name:var(--font-satoshi)] text-xl font-semibold tracking-tight text-white">
          Common questions
        </h2>

        <div className="space-y-3">
          <h3 className="font-[family-name:var(--font-satoshi)] text-base font-semibold text-light">
            Do I need a credit card to use the free tier?
          </h3>
          <p>
            No. The free tier is forever free with no payment information
            required. A payment method is only needed to start the 5-day Pro
            monthly trial or to subscribe directly to Pro.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-[family-name:var(--font-satoshi)] text-base font-semibold text-light">
            Can I change plans later?
          </h3>
          <p>
            Yes. You can upgrade to Pro or cancel from your account settings at
            any time. Cancellations take effect at the end of the current
            billing period.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-[family-name:var(--font-satoshi)] text-base font-semibold text-light">
            What payment methods do you accept?
          </h3>
          <p>
            All major credit and debit cards. Regional payment methods may be
            available depending on your country.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-[family-name:var(--font-satoshi)] text-base font-semibold text-light">
            Where can I see the full feature list?
          </h3>
          <p>
            Every plan includes the full overlay catalog. Visit the{" "}
            <Link href="/" className="text-magenta hover:text-magenta-hover underline underline-offset-2">
              homepage
            </Link>{" "}
            for the complete widget and feature breakdown.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-[family-name:var(--font-satoshi)] text-xl font-semibold tracking-tight text-white">
          Ready to start?
        </h2>
        <p>
          Create a free account in under a minute. No credit card required for
          the free tier.
        </p>
        <a
          href="https://app.pulsr.live"
          className="btn-primary inline-flex items-center justify-center rounded-lg px-7 py-3 font-[family-name:var(--font-satoshi)] text-sm font-semibold"
        >
          Go to app.pulsr.live
        </a>
      </section>
    </LegalLayout>
  );
}
