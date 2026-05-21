import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Refund Policy | PULSR",
  description:
    "Refund and cancellation policy for PULSR Overlays subscriptions.",
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold tracking-tight text-white">
      {children}
    </h2>
  );
}

export default function RefundPolicyPage() {
  return (
    <LegalLayout title="Refund Policy" lastUpdated="May 20, 2026">
      {/* Overview */}
      <section className="space-y-4">
        <H2>Overview</H2>
        <p>
          PULSR is a subscription-based service offering animated overlay widgets
          for live commerce streamers. We offer a free tier and a Pro tier at
          $10/month (USD), billed monthly. All payments are processed by our
          third-party payment processor, which handles billing operations on our
          behalf.
        </p>
      </section>

      {/* Subscription Cancellation */}
      <section className="space-y-4">
        <H2>Subscription Cancellation</H2>
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

      {/* Refund Policy */}
      <section className="space-y-4">
        <H2>Refunds</H2>
        <p>
          Subscription fees are non-refundable by default. Because PULSR is a
          digital service with immediate access upon payment, we consider each
          billing cycle final once it has been charged.
        </p>
        <p>
          However, we will consider refund requests on a case-by-case basis for
          exceptional circumstances, including:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text/80">
          <li>
            <strong className="text-white">Billing errors:</strong> You were
            charged incorrectly or charged after cancelling.
          </li>
          <li>
            <strong className="text-white">Serious service issues:</strong> A
            significant bug or outage prevented you from using the service for a
            substantial portion of your billing period.
          </li>
          <li>
            <strong className="text-white">Duplicate charges:</strong> You were
            charged more than once for the same billing period.
          </li>
        </ul>
        <p>
          To request a refund, email us at{" "}
          <a
            href="mailto:support@pulsr.live"
            className="text-magenta hover:text-magenta-hover underline underline-offset-2"
          >
            support@pulsr.live
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
        <p>
          All billing is handled by our third-party payment processor, which
          manages payment processing, invoicing, tax collection, and billing
          operations on our behalf. Charges on your bank statement may appear
          under the payment processor&apos;s name rather than PULSR.
        </p>
        <p>
          If you have a billing dispute, please contact us first at{" "}
          <a
            href="mailto:support@pulsr.live"
            className="text-magenta hover:text-magenta-hover underline underline-offset-2"
          >
            support@pulsr.live
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
            href="mailto:support@pulsr.live"
            className="text-magenta hover:text-magenta-hover underline underline-offset-2"
          >
            support@pulsr.live
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  );
}
