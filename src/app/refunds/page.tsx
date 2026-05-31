import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Refund Policy | PULSR",
  description:
    "Refund and cancellation policy for PULSR overlay graphics subscriptions.",
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-[family-name:var(--font-satoshi)] text-xl font-semibold tracking-tight text-white">
      {children}
    </h2>
  );
}

export default function RefundPolicyPage() {
  return (
    <LegalLayout title="Refund Policy" lastUpdated="May 27, 2026">
      {/* Overview */}
      <section className="space-y-4">
        <H2>Overview</H2>
        {/* TODO(paddle): name Paddle as MoR here when switching to them. */}
        <p>
          PULSR is a subscription-based service that provides on-screen overlay
          graphics for live shopping streams. We offer a free tier and a Pro
          tier at $12.99 USD/month or $129.99 USD/year. Payments are processed
          by our third-party payment processor, which may act as the Merchant
          of Record for your purchase.
        </p>
      </section>

      {/* Free Trial */}
      <section className="space-y-4">
        <H2>Free Trial</H2>
        <p>
          New Pro subscribers may be offered a 5-day free trial. A valid payment
          method is required to start the trial. You can cancel at any time
          during the trial through your account settings and you will not be
          charged. If you do not cancel before the trial ends, the subscription
          converts automatically and your payment method is charged for the
          first billing period.
        </p>
      </section>

      {/* 14-Day Money-Back Guarantee */}
      <section className="space-y-4">
        <H2>14-Day Money-Back Guarantee</H2>
        <p>
          We offer a 14-day money-back guarantee on the first paid Pro
          subscription charge. If you are not satisfied with PULSR, you can
          request a full refund of that first charge within 14 days of the
          billing date. To request a refund within this window, contact us at{" "}
          <a
            href="mailto:miguel@pulsr.live"
            className="text-magenta hover:text-magenta-hover underline underline-offset-2"
          >
            miguel@pulsr.live
          </a>{" "}
          from your account email and we will process the refund through our
          payment processor within a reasonable timeframe.
        </p>
        <p>
          The 14-day money-back guarantee applies only to the first paid charge
          of a Pro subscription. Renewal charges and subsequent billing periods
          are not covered by this guarantee.
        </p>
      </section>

      {/* Cancellation */}
      <section className="space-y-4">
        <H2>Cancellation</H2>
        <p>
          You can cancel your Pro subscription at any time through your account
          settings. When you cancel:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text/80">
          <li>No further charges will be made to your payment method.</li>
          <li>
            You will retain access to Pro features until the end of your current
            billing period.
          </li>
          <li>
            After the billing period ends, your account will revert to the free
            tier.
          </li>
        </ul>
        <p>
          There is no cancellation fee. You are not required to provide a reason
          for cancelling.
        </p>
      </section>

      {/* Refunds Outside the Guarantee Window */}
      <section className="space-y-4">
        <H2>Refunds Outside the 14-Day Window</H2>
        <p>
          After the 14-day money-back window has passed, we do not provide
          refunds for partial billing periods. Cancelling stops future renewals
          but does not refund the current billing period.
        </p>
        <p>
          We will still review refund requests on a case-by-case basis for
          exceptional circumstances, including:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text/80">
          <li>
            <strong className="text-white">Billing errors:</strong> You were
            charged incorrectly or charged after cancelling.
          </li>
          <li>
            <strong className="text-white">Duplicate charges:</strong> You were
            charged more than once for the same billing period.
          </li>
          <li>
            <strong className="text-white">Serious service issues:</strong> A
            significant bug or outage prevented you from using the service for a
            substantial portion of your billing period.
          </li>
        </ul>
        <p>
          To request a refund, email us at{" "}
          <a
            href="mailto:miguel@pulsr.live"
            className="text-magenta hover:text-magenta-hover underline underline-offset-2"
          >
            miguel@pulsr.live
          </a>{" "}
          with your account email and a description of the issue. We aim to
          respond within 3 business days.
        </p>
      </section>

      {/* Free Tier */}
      <section className="space-y-4">
        <H2>Free Tier Users</H2>
        <p>
          The free tier of PULSR does not involve any charges. There is nothing
          to refund. If you are using the free tier and experience issues,
          contact us and we will do our best to help.
        </p>
      </section>

      {/* Payment Processor */}
      <section className="space-y-4">
        <H2>Payment Processing</H2>
        {/* TODO(paddle): name Paddle here when switching. */}
        <p>
          All billing is handled by our third-party payment processor, which
          may act as the Merchant of Record for your purchase. The processor
          manages payment processing, invoicing, tax collection, and refund
          execution on our behalf. Charges on your bank statement may appear
          under the processor&apos;s name rather than PULSR.
        </p>
        <p>
          If you have a billing dispute, please contact us first at{" "}
          <a
            href="mailto:miguel@pulsr.live"
            className="text-magenta hover:text-magenta-hover underline underline-offset-2"
          >
            miguel@pulsr.live
          </a>
          . We can often resolve issues faster than going through your bank or
          payment provider.
        </p>
      </section>

      {/* Related Policies */}
      <section className="space-y-4">
        <H2>Related Policies</H2>
        <p>
          This Refund Policy is part of our{" "}
          <Link href="/terms" className="text-magenta hover:text-magenta-hover underline underline-offset-2">
            Terms of Service
          </Link>
          . For information about how we handle your data, see our{" "}
          <Link href="/privacy" className="text-magenta hover:text-magenta-hover underline underline-offset-2">
            Privacy Policy
          </Link>
          .
        </p>
      </section>

      {/* Contact */}
      <section className="space-y-4">
        <H2>Contact</H2>
        <p>
          Questions about this policy? Reach us at{" "}
          <a
            href="mailto:miguel@pulsr.live"
            className="text-magenta hover:text-magenta-hover underline underline-offset-2"
          >
            miguel@pulsr.live
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  );
}
