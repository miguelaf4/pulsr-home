import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Terms of Service | PULSR",
  description:
    "Terms of Service for PULSR Overlays — animated overlay widgets for TikTok Shop live streams.",
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-[family-name:var(--font-satoshi)] text-xl font-semibold tracking-tight text-white">
      {children}
    </h2>
  );
}

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="May 20, 2026">
      {/* 1. Introduction */}
      <section className="space-y-4">
        <H2>1. Introduction</H2>
        <p>
          PULSR is operated by{" "}
          <span className="text-white">Miguel Arrañaga F.</span>, a sole
          proprietorship based in Mexico (&quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;). PULSR provides a web-based platform that lets live
          commerce sellers create on-screen overlay graphics — product cards,
          countdown timers, code drops, sales tickers, trust badges, and other
          point-of-sale-style visuals — for use during live shopping broadcasts
          on TikTok Shop, OBS Studio, TikTok LIVE Studio, and other live
          streaming software.
        </p>
        <p>
          By creating an account or using PULSR (accessible at{" "}
          <span className="text-white">pulsr.live</span>), you agree to be bound
          by these Terms of Service. If you do not agree to these terms, do not
          use the service.
        </p>
      </section>

      {/* 2. The Service */}
      <section className="space-y-4">
        <H2>2. The Service</H2>
        <p>
          PULSR is a software-as-a-service (SaaS) platform. You create and
          customize overlay widgets through our dashboard, receive a browser
          source URL, and add that URL to your live streaming software. PULSR
          renders and delivers real-time widget overlays for your live streams.
        </p>
        <p>
          We do not sell physical products. We do not provide downloadable
          software. The service is delivered entirely through your web browser
          and via browser source URLs.
        </p>
      </section>

      {/* 3. Account Registration */}
      <section className="space-y-4">
        <H2>3. Account Registration</H2>
        <p>
          To use PULSR, you must create an account with a valid email address.
          You are responsible for maintaining the security of your account
          credentials and for all activity that occurs under your account. You
          agree to provide accurate and complete information during registration
          and to keep it up to date.
        </p>
        <p>
          You must be at least 18 years old to use PULSR. By creating an
          account, you confirm that you meet this requirement.
        </p>
      </section>

      {/* 4. Acceptable Use */}
      <section className="space-y-4">
        <H2>4. Acceptable Use</H2>
        <p>You agree not to:</p>
        <ul className="list-disc space-y-2 pl-6 text-text/80">
          <li>
            Use PULSR for any unlawful purpose or in violation of any applicable
            laws or regulations.
          </li>
          <li>
            Use the service in a manner that violates the terms of service of
            third-party platforms, including but not limited to TikTok, TikTok
            Shop, OBS Studio, or any other streaming platform.
          </li>
          <li>
            Resell, sublicense, or redistribute PULSR or access to the service
            to third parties.
          </li>
          <li>
            Attempt to reverse-engineer, decompile, or extract the source code
            of the service.
          </li>
          <li>
            Use automated tools (bots, scrapers) to access or interact with the
            service except through our official API, if provided.
          </li>
          <li>
            Interfere with or disrupt the service, servers, or networks
            connected to the service.
          </li>
          <li>
            Use PULSR to display content that is defamatory, obscene, fraudulent,
            or otherwise harmful.
          </li>
        </ul>
      </section>

      {/* 5. Intellectual Property */}
      <section className="space-y-4">
        <H2>5. Intellectual Property</H2>
        <p>
          <strong className="text-white">Our property:</strong> PULSR, its
          software, branding, design, documentation, and all related
          intellectual property are owned by us. These Terms do not grant you any
          rights to our trademarks, logos, or brand assets.
        </p>
        <p>
          <strong className="text-white">Your content:</strong> You retain
          ownership of the configurations, text, images, product data, and other
          content you input into PULSR. By using the service, you grant us a
          limited license to process and display your content solely for the
          purpose of delivering the service.
        </p>
      </section>

      {/* 6. Subscription & Billing */}
      <section className="space-y-4">
        <H2>6. Subscription &amp; Billing</H2>
        <p>
          PULSR offers a free tier with limited features and a Pro tier
          available on monthly ($12.99 USD/month) or annual ($129.99 USD/year)
          billing. The Pro subscription is billed on a recurring basis at the
          selected interval.
        </p>
        <p>
          New Pro subscribers may be offered a 5-day free trial. A valid payment
          method is required to start the trial. If you do not cancel before the
          trial ends, the subscription converts automatically and your payment
          method is charged for the first billing period.
        </p>
        {/* TODO(paddle): when switching to Paddle, name them here and add the required
            line: "Our order process is conducted by our online reseller Paddle.com". */}
        <p>
          Payments are processed by our third-party payment processor, which
          may act as the Merchant of Record for your purchase. The processor
          handles payment processing, invoicing, tax collection, and chargeback
          management on our behalf. Charges on your statement may appear under
          the processor&apos;s name rather than PULSR.
        </p>
        <p>
          Your subscription automatically renews each billing period until you
          cancel through your account settings or by contacting support. You can
          cancel at any time. After cancellation, you retain access to Pro
          features until the end of your current billing period. See our{" "}
          <Link href="/refunds" className="text-magenta hover:text-magenta-hover underline underline-offset-2">
            Refund Policy
          </Link>{" "}
          for details on refunds.
        </p>
      </section>

      {/* 7. Service Availability */}
      <section className="space-y-4">
        <H2>7. Service Availability</H2>
        <p>
          We strive to keep PULSR available and performing well, but we do not
          guarantee uninterrupted or error-free operation. The service is
          provided on a best-effort basis. We may perform maintenance, updates,
          or changes that temporarily affect availability.
        </p>
        <p>
          We do not offer a formal service-level agreement (SLA) at this time.
          We are not liable for any downtime, data loss, or missed live stream
          events caused by service interruptions.
        </p>
      </section>

      {/* 8. Limitation of Liability */}
      <section className="space-y-4">
        <H2>8. Limitation of Liability</H2>
        <p>
          To the maximum extent permitted by applicable law, PULSR and its
          operator shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages arising out of or related to your
          use of the service, including but not limited to lost profits, lost
          revenue, lost sales, lost data, or business interruption.
        </p>
        <p>
          Our total aggregate liability for any claim related to the service is
          limited to the amount you paid us in the twelve (12) months preceding
          the claim.
        </p>
        <p>
          The service is provided &quot;as is&quot; and &quot;as available,&quot;
          without warranties of any kind, whether express or implied, including
          but not limited to implied warranties of merchantability, fitness for a
          particular purpose, and non-infringement.
        </p>
      </section>

      {/* 9. Termination */}
      <section className="space-y-4">
        <H2>9. Termination</H2>
        <p>
          <strong className="text-white">By you:</strong> You may cancel your
          account at any time through your account settings or by contacting us
          at{" "}
          <a
            href="mailto:miguel@pulsr.live"
            className="text-magenta hover:text-magenta-hover underline underline-offset-2"
          >
            miguel@pulsr.live
          </a>
          . Cancellation takes effect at the end of your current billing period.
        </p>
        <p>
          <strong className="text-white">By us:</strong> We reserve the right to
          suspend or terminate your account if you violate these Terms, engage in
          abusive behavior, or if continued service is no longer feasible. If we
          terminate your account without cause, we will provide a pro-rata refund
          of any prepaid fees.
        </p>
        <p>
          Upon termination, your right to use the service ceases immediately. We
          may delete your account data after a reasonable retention period (see
          our{" "}
          <Link href="/privacy" className="text-magenta hover:text-magenta-hover underline underline-offset-2">
            Privacy Policy
          </Link>
          ).
        </p>
      </section>

      {/* 10. Changes to Terms */}
      <section className="space-y-4">
        <H2>10. Changes to These Terms</H2>
        <p>
          We may update these Terms from time to time. When we do, we will
          update the &quot;Last updated&quot; date at the top of this page and
          notify you via email or an in-app notification. Your continued use of
          PULSR after changes are posted constitutes your acceptance of the
          revised Terms.
        </p>
      </section>

      {/* 11. Governing Law */}
      <section className="space-y-4">
        <H2>11. Governing Law</H2>
        <p>
          These Terms are governed by and construed in accordance with the laws
          of Mexico. Any disputes arising from or related to these Terms or the
          service shall be resolved in the competent courts of Mexico.
        </p>
      </section>

      {/* 12. Contact */}
      <section className="space-y-4">
        <H2>12. Contact</H2>
        <p>
          If you have questions about these Terms, contact us at{" "}
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
