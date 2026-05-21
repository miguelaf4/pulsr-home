import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy | PULSR",
  description:
    "Privacy Policy for PULSR Overlays — how we collect, use, and protect your data.",
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-[family-name:var(--font-satoshi)] text-xl font-semibold tracking-tight text-white">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-[family-name:var(--font-satoshi)] text-base font-semibold text-light">
      {children}
    </h3>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="May 20, 2026">
      {/* Introduction */}
      <section className="space-y-4">
        <H2>1. Introduction</H2>
        <p>
          PULSR (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) provides
          animated overlay widgets for live commerce streamers. This Privacy
          Policy explains how we collect, use, store, and protect your personal
          information when you use our service at{" "}
          <span className="text-white">pulsr.live</span>.
        </p>
        <p>
          By using PULSR, you agree to the practices described in this policy.
          If you do not agree, please do not use the service.
        </p>
      </section>

      {/* Data We Collect */}
      <section className="space-y-6">
        <H2>2. Data We Collect</H2>

        <div className="space-y-3">
          <H3>Account Data</H3>
          <p>
            When you create an account, we collect your email address and name.
            Passwords are stored as cryptographic hashes — we never store your
            password in plain text. Authentication is managed through our
            database and authentication provider.
          </p>
        </div>

        <div className="space-y-3">
          <H3>Configuration Data</H3>
          <p>
            We store the widget configurations, themes, product entries, saved
            lists, and other content you create within PULSR. This data is
            necessary to deliver the service.
          </p>
        </div>

        <div className="space-y-3">
          <H3>Usage Data</H3>
          <p>
            We collect information about how you use PULSR, including which
            widgets are active, when they are triggered, page views, and feature
            usage. This data helps us provide support and improve the service.
          </p>
        </div>

        <div className="space-y-3">
          <H3>Payment Data</H3>
          <p>
            Payment processing is handled entirely by our third-party payment
            processor. We do not collect, store, or have access to your credit
            card numbers or full payment details. Our payment processor provides
            us with basic transaction information (subscription status, billing
            dates) necessary to manage your account.
          </p>
        </div>

        <div className="space-y-3">
          <H3>TikTok Shop Data</H3>
          <p>
            When you paste a TikTok Shop URL to auto-populate product
            information, we fetch and store the product data you import
            (product names, prices, images, descriptions). This data is used
            solely to render your overlay widgets.
          </p>
        </div>
      </section>

      {/* How We Use Your Data */}
      <section className="space-y-4">
        <H2>3. How We Use Your Data</H2>
        <p>We use the information we collect to:</p>
        <ul className="list-disc space-y-2 pl-6 text-text/80">
          <li>
            <strong className="text-white">Provide the service:</strong> Render
            overlay widgets, sync real-time updates, and deliver browser source
            URLs for your streams.
          </li>
          <li>
            <strong className="text-white">Customer support:</strong> Respond to
            your questions, troubleshoot issues, and assist with account
            management.
          </li>
          <li>
            <strong className="text-white">Service improvement:</strong> Analyze
            usage patterns and performance data to improve features, fix bugs,
            and optimize the platform.
          </li>
          <li>
            <strong className="text-white">Billing:</strong> Manage your
            subscription status and coordinate with our payment processor for
            billing.
          </li>
          <li>
            <strong className="text-white">Communications:</strong> Send you
            service-related notifications (account updates, security alerts,
            billing confirmations). We may also send product updates and tips —
            you can opt out of marketing emails at any time.
          </li>
        </ul>
      </section>

      {/* Third-Party Services */}
      <section className="space-y-6">
        <H2>4. Third-Party Services</H2>
        <p>
          We share data with the following third-party services, only to the
          extent necessary to operate PULSR:
        </p>

        <div className="space-y-3">
          <H3>Payment Processor</H3>
          <p>
            Our third-party payment processor receives your billing information
            to process subscription payments, handle invoicing, and manage tax
            obligations. Refer to the processor&apos;s own privacy policy for
            details on how they handle your payment data.
          </p>
        </div>

        <div className="space-y-3">
          <H3>Database &amp; Authentication Provider</H3>
          <p>
            Your account data, configurations, and application data are stored
            on our hosted database and authentication infrastructure.
          </p>
        </div>

        <div className="space-y-3">
          <H3>Hosting Provider</H3>
          <p>
            Our web hosting and content delivery provider serves the PULSR web
            application and may process basic request-level data (IP addresses,
            user agents) as part of standard web hosting operations.
          </p>
        </div>

        <div className="space-y-3">
          <H3>Analytics</H3>
          <p>
            We use an analytics service to collect anonymized, aggregated usage
            metrics (page views, performance data). This data does not include
            personally identifiable information.
          </p>
        </div>

        <p>
          We do not sell your personal data to any third party. We do not share
          your data with advertisers.
        </p>
      </section>

      {/* Cookies & Tracking */}
      <section className="space-y-4">
        <H2>5. Cookies &amp; Tracking</H2>
        <p>PULSR uses cookies for the following purposes:</p>
        <ul className="list-disc space-y-2 pl-6 text-text/80">
          <li>
            <strong className="text-white">Authentication:</strong> Session
            cookies to keep you logged in.
          </li>
          <li>
            <strong className="text-white">Preferences:</strong> Storing your
            dashboard settings and preferences.
          </li>
          <li>
            <strong className="text-white">Analytics:</strong> Our analytics
            service collects anonymized performance and usage metrics.
          </li>
        </ul>
        <p>
          We do not use third-party advertising cookies. We do not participate in
          ad networks or cross-site tracking.
        </p>
      </section>

      {/* Data Retention */}
      <section className="space-y-4">
        <H2>6. Data Retention</H2>
        <p>
          We retain your account data and configurations for as long as your
          account is active. When you delete your account:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text/80">
          <li>
            Your personal data and widget configurations are deleted within 30
            days of account closure.
          </li>
          <li>
            Anonymized, aggregated analytics data may be retained indefinitely
            as it cannot be linked back to you.
          </li>
          <li>
            We may retain certain records (billing history, support
            correspondence) for up to 12 months after account deletion as
            required for legal and accounting purposes.
          </li>
        </ul>
      </section>

      {/* Data Security */}
      <section className="space-y-4">
        <H2>7. Data Security</H2>
        <p>
          We take reasonable measures to protect your data, including:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text/80">
          <li>Encrypted data transmission (TLS/HTTPS) for all connections.</li>
          <li>Encrypted data storage at rest via our infrastructure providers.</li>
          <li>Password hashing — we never store passwords in plain text.</li>
          <li>Access controls limiting who can access production systems.</li>
        </ul>
        <p>
          No system is perfectly secure. While we work to protect your data, we
          cannot guarantee absolute security. If we become aware of a data
          breach affecting your personal information, we will notify you
          promptly.
        </p>
      </section>

      {/* Your Rights */}
      <section className="space-y-6">
        <H2>8. Your Rights</H2>
        <p>
          Depending on your location, you may have the following rights
          regarding your personal data:
        </p>

        <div className="space-y-3">
          <H3>All Users</H3>
          <ul className="list-disc space-y-2 pl-6 text-text/80">
            <li>
              <strong className="text-white">Access:</strong> View the personal
              data we hold about you through your account settings.
            </li>
            <li>
              <strong className="text-white">Correction:</strong> Update or
              correct inaccurate data through your account settings.
            </li>
            <li>
              <strong className="text-white">Deletion:</strong> Delete your
              account and associated data through your account settings or by
              emailing us.
            </li>
            <li>
              <strong className="text-white">Data export:</strong> Request a
              copy of your data by contacting{" "}
              <a
                href="mailto:miguel@pulsr.live"
                className="text-magenta hover:text-magenta-hover underline underline-offset-2"
              >
                miguel@pulsr.live
              </a>
              .
            </li>
            <li>
              <strong className="text-white">Opt-out:</strong> Unsubscribe from
              marketing communications at any time.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <H3>European Union Users (GDPR)</H3>
          <p>
            If you are located in the EU/EEA, you have additional rights under
            the General Data Protection Regulation, including the right to data
            portability, the right to restrict processing, and the right to
            object to processing. Our legal basis for processing your data is
            contractual necessity (providing the service you signed up for) and
            legitimate interest (service improvement and security).
          </p>
        </div>

        <div className="space-y-3">
          <H3>California Users (CCPA)</H3>
          <p>
            If you are a California resident, you have the right to know what
            personal information we collect, request its deletion, and opt out of
            its sale. We do not sell personal information. You can exercise your
            rights by contacting us at{" "}
            <a
              href="mailto:miguel@pulsr.live"
              className="text-magenta hover:text-magenta-hover underline underline-offset-2"
            >
              miguel@pulsr.live
            </a>
            .
          </p>
        </div>

        <div className="space-y-3">
          <H3>Mexican Users (LFPDPPP)</H3>
          <p>
            If you are located in Mexico, you have ARCO rights (Access,
            Rectification, Cancellation, and Opposition) under the Ley Federal
            de Protecci&oacute;n de Datos Personales en Posesi&oacute;n de los
            Particulares. To exercise these rights, contact us at{" "}
            <a
              href="mailto:miguel@pulsr.live"
              className="text-magenta hover:text-magenta-hover underline underline-offset-2"
            >
              miguel@pulsr.live
            </a>
            . We will respond within 20 business days as required by law.
          </p>
        </div>
      </section>

      {/* Children */}
      <section className="space-y-4">
        <H2>9. Children&apos;s Privacy</H2>
        <p>
          PULSR is not intended for users under 18 years of age. We do not
          knowingly collect personal information from children. If we learn that
          we have collected data from a user under 18, we will delete their
          account and associated data promptly.
        </p>
      </section>

      {/* International Data Transfers */}
      <section className="space-y-4">
        <H2>10. International Data Transfers</H2>
        <p>
          PULSR is operated from Mexico. Your data may be processed and stored
          in locations outside your country of residence, including the United
          States (where our infrastructure providers operate). By using PULSR,
          you consent to the transfer of your data to these locations. We ensure
          that appropriate safeguards are in place to protect your data in
          accordance with applicable privacy laws.
        </p>
      </section>

      {/* Changes */}
      <section className="space-y-4">
        <H2>11. Changes to This Policy</H2>
        <p>
          We may update this Privacy Policy from time to time. When we make
          material changes, we will update the &quot;Last updated&quot; date at
          the top and notify you via email or an in-app notification. Your
          continued use of PULSR after changes are posted constitutes your
          acceptance of the revised policy.
        </p>
      </section>

      {/* Contact */}
      <section className="space-y-4">
        <H2>12. Contact</H2>
        <p>
          If you have questions or concerns about this Privacy Policy or how we
          handle your data, contact us at:
        </p>
        <ul className="list-none space-y-1 pl-0 text-text/80">
          <li>
            Email:{" "}
            <a
              href="mailto:miguel@pulsr.live"
              className="text-magenta hover:text-magenta-hover underline underline-offset-2"
            >
              miguel@pulsr.live
            </a>
          </li>
        </ul>
        <p>
          This email also handles data protection and privacy-specific
          inquiries.
        </p>
      </section>

      {/* Related */}
      <section className="space-y-4">
        <H2>Related Policies</H2>
        <p>
          <Link href="/terms" className="text-magenta hover:text-magenta-hover underline underline-offset-2">
            Terms of Service
          </Link>
          {" "}&middot;{" "}
          <Link href="/refunds" className="text-magenta hover:text-magenta-hover underline underline-offset-2">
            Refund Policy
          </Link>
        </p>
      </section>
    </LegalLayout>
  );
}
