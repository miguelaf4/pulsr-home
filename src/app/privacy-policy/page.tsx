"use client";

import { useState } from "react";
import Link from "next/link";

type Lang = "en" | "es";

const LAST_UPDATED = "May 15, 2026";
const LAST_UPDATED_ES = "15 de mayo de 2026";

export default function PrivacyPolicyPage() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <div className="min-h-screen bg-void text-text">
      {/* Header */}
      <header className="border-b border-border bg-dark/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto flex max-w-[900px] items-center justify-between px-6 py-4">
          <Link href="/" className="group flex items-center gap-3">
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
                fontFamily="var(--font-satoshi), Satoshi, sans-serif"
                fontWeight="800"
                fontSize="28"
                fill="#F5F5FA"
                letterSpacing="3"
              >
                PULSR
              </text>
            </svg>
          </Link>

          {/* Language toggle */}
          <div className="flex items-center gap-1 rounded-full border border-border bg-surface p-1">
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-3 py-1 font-mono text-xs tracking-wider transition-all ${
                lang === "en"
                  ? "bg-magenta text-white"
                  : "text-muted hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("es")}
              className={`rounded-full px-3 py-1 font-mono text-xs tracking-wider transition-all ${
                lang === "es"
                  ? "bg-magenta text-white"
                  : "text-muted hover:text-white"
              }`}
            >
              ES
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-[900px] px-6 py-16 lg:py-24">
        {lang === "en" ? <EnglishPolicy /> : <SpanishPolicy />}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-dark px-6 py-10">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="font-mono text-[11px] tracking-[0.1em] text-border">
            &copy; 2026 PULSR
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ─── Shared components ─── */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 mb-4 font-[family-name:var(--font-satoshi)] text-xl font-bold text-white tracking-wide">
      {children}
    </h2>
  );
}

function SubSection({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-8 mb-3 font-[family-name:var(--font-satoshi)] text-base font-semibold text-light tracking-wide">
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 font-[family-name:var(--font-satoshi)] text-[15px] leading-relaxed text-text">
      {children}
    </p>
  );
}

function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mb-4 ml-5 list-disc space-y-2 font-[family-name:var(--font-satoshi)] text-[15px] leading-relaxed text-text">
      {children}
    </ul>
  );
}

/* ─── English Version ─── */

function EnglishPolicy() {
  return (
    <article>
      <p className="mb-2 font-mono text-xs tracking-widest uppercase text-magenta">
        Privacy Policy
      </p>
      <h1 className="mb-4 font-[family-name:var(--font-satoshi)] text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mb-10 font-mono text-xs text-muted">
        Last updated: {LAST_UPDATED}
      </p>

      <P>
        PULSR (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates as an ecommerce application developer and live commerce service provider. This Privacy Policy describes how we collect, use, disclose, and protect information obtained through our applications, integrations, and services (collectively, the &ldquo;Services&rdquo;) that interact with commerce platforms on behalf of our merchant partners.
      </P>
      <P>
        By using our Services or providing us with access to your commerce data, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with the practices described herein, please discontinue use of our Services immediately.
      </P>

      <SectionTitle>1. Scope of This Policy</SectionTitle>
      <P>
        This Privacy Policy applies to all commerce data we access, collect, or process through our integrations with ecommerce platforms including, but not limited to, Shopify, TikTok Shop, and other marketplace or commerce APIs. Specifically, this policy covers data related to:
      </P>
      <UL>
        <li><strong>Order Data</strong> &mdash; Information related to transactions, including order identifiers, line items, quantities, prices, order status, fulfillment details, shipping addresses, and billing information.</li>
        <li><strong>Product Data</strong> &mdash; Information about products listed on a merchant&rsquo;s store, including titles, descriptions, images, pricing, inventory levels, variants, SKUs, and product categories.</li>
        <li><strong>Customer Data</strong> &mdash; Information about end customers, including names, email addresses, phone numbers, shipping and billing addresses, purchase history, and customer identifiers assigned by the commerce platform.</li>
      </UL>

      <SectionTitle>2. Information We Collect</SectionTitle>

      <SubSection>2.1 Commerce Data from Platform Integrations</SubSection>
      <P>
        When a merchant authorizes our application, we receive access to certain commerce data through platform APIs. The specific data we access depends on the permissions granted during the authorization process and may include order data, product data, and customer data as described above.
      </P>

      <SubSection>2.2 How We Collect Information</SubSection>
      <P>
        We collect commerce data exclusively through authorized API integrations with ecommerce platforms. We access this data only after a merchant explicitly grants permission through the platform&rsquo;s standard OAuth authorization flow or equivalent authentication mechanism.
      </P>

      <SectionTitle>3. How We Use Commerce Data</SectionTitle>
      <P>We use the commerce data we collect strictly for the following purposes:</P>
      <UL>
        <li><strong>Service Delivery</strong> &mdash; To provide, operate, and maintain the features and functionality of our Services as agreed upon with our merchant partners.</li>
        <li><strong>Order Management</strong> &mdash; To facilitate order processing, fulfillment tracking, and post-sale support on behalf of merchants.</li>
        <li><strong>Product Operations</strong> &mdash; To synchronize product listings, manage inventory data, and ensure accurate product information across integrated platforms.</li>
        <li><strong>Customer Communication</strong> &mdash; To enable merchants to manage customer relationships, including transactional communications directly related to orders placed through the merchant&rsquo;s store.</li>
        <li><strong>Analytics and Reporting</strong> &mdash; To generate aggregated, non-personally-identifiable reports and analytics that help merchants understand their sales performance and customer trends.</li>
        <li><strong>Compliance and Legal Obligations</strong> &mdash; To comply with applicable laws, regulations, legal processes, or enforceable governmental requests.</li>
      </UL>
      <P>
        We do not sell, rent, or lease commerce data &mdash; including customer personal information &mdash; to third parties. We do not use customer data for purposes unrelated to the services we provide to the authorizing merchant.
      </P>

      <SectionTitle>4. Data Sharing and Disclosure</SectionTitle>
      <P>We may share commerce data only under the following circumstances:</P>
      <UL>
        <li><strong>With the Authorizing Merchant</strong> &mdash; Commerce data belongs to the merchant who authorized our access. We provide merchants full visibility into the data we process on their behalf.</li>
        <li><strong>Service Providers</strong> &mdash; We may share data with trusted third-party service providers who assist us in operating our Services (e.g., cloud hosting, infrastructure), subject to strict contractual obligations of confidentiality and data protection.</li>
        <li><strong>Legal Requirements</strong> &mdash; We may disclose data when required to do so by law, court order, subpoena, or other legal process, or when we believe in good faith that disclosure is necessary to protect our rights, your safety, or the safety of others.</li>
        <li><strong>Business Transfers</strong> &mdash; In the event of a merger, acquisition, or sale of all or a portion of our assets, commerce data may be transferred as part of that transaction, subject to the same privacy protections described in this policy.</li>
      </UL>

      <SectionTitle>5. Data Retention</SectionTitle>
      <P>
        We retain commerce data only for as long as reasonably necessary to fulfill the purposes for which it was collected, to comply with our legal obligations, to resolve disputes, and to enforce our agreements. When a merchant revokes access to our application or terminates their relationship with us, we will delete or anonymize their commerce data within thirty (30) calendar days, unless retention is required by law.
      </P>

      <SectionTitle>6. Data Security</SectionTitle>
      <P>
        We implement industry-standard technical and organizational security measures designed to protect commerce data against unauthorized access, alteration, disclosure, or destruction. These measures include, but are not limited to:
      </P>
      <UL>
        <li>Encryption of data in transit using TLS 1.2 or higher.</li>
        <li>Encryption of data at rest using AES-256 or equivalent standards.</li>
        <li>Access controls based on the principle of least privilege.</li>
        <li>Regular security assessments and vulnerability testing.</li>
        <li>Audit logging of data access and processing activities.</li>
      </UL>
      <P>
        While we strive to protect your data, no method of transmission or storage is 100% secure. We cannot guarantee absolute security of any information processed through our Services.
      </P>

      <SectionTitle>7. Your Rights Under United States Law</SectionTitle>
      <P>
        Depending on your state of residence, you may have specific rights regarding the personal information we process. We are committed to complying with all applicable U.S. privacy laws, including but not limited to:
      </P>

      <SubSection>7.1 California Consumer Privacy Act (CCPA / CPRA)</SubSection>
      <P>
        If you are a California resident, you have the right to:
      </P>
      <UL>
        <li>Know what personal information we collect, use, and disclose about you.</li>
        <li>Request deletion of your personal information, subject to certain exceptions.</li>
        <li>Opt out of the sale or sharing of your personal information. We do not sell personal information.</li>
        <li>Non-discrimination for exercising your privacy rights.</li>
        <li>Correct inaccurate personal information we maintain about you.</li>
      </UL>

      <SubSection>7.2 Other U.S. State Privacy Laws</SubSection>
      <P>
        We also recognize and comply with privacy rights afforded by other state laws, including those of Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), Utah (UCPA), Texas (TDPSA), Oregon (OCPA), and other states with active consumer privacy legislation. Residents of these states may exercise comparable rights to access, delete, and correct their personal data, and to opt out of targeted advertising or profiling, where applicable.
      </P>

      <SectionTitle>8. Your Rights Under Mexican Law</SectionTitle>

      <SubSection>8.1 Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP)</SubSection>
      <P>
        If you are located in Mexico, your personal data is protected under the Ley Federal de Protecci&oacute;n de Datos Personales en Posesi&oacute;n de los Particulares (LFPDPPP) and its Regulations. Under this law, you have the following ARCO rights:
      </P>
      <UL>
        <li><strong>Access (Acceso)</strong> &mdash; You have the right to know what personal data we hold about you and the conditions and terms under which it is being used.</li>
        <li><strong>Rectification (Rectificaci&oacute;n)</strong> &mdash; You have the right to request the correction of your personal data if it is inaccurate, incomplete, or outdated.</li>
        <li><strong>Cancellation (Cancelaci&oacute;n)</strong> &mdash; You have the right to request the deletion of your personal data when you consider it is not being used in accordance with the principles and obligations set forth in the law.</li>
        <li><strong>Opposition (Oposici&oacute;n)</strong> &mdash; You have the right to oppose the processing of your personal data for specific purposes.</li>
      </UL>
      <P>
        To exercise your ARCO rights, please submit a request to the contact information provided in Section 12 of this policy. We will respond to your request within twenty (20) business days from the date we receive it, as required by the LFPDPPP.
      </P>

      <SubSection>8.2 Consent and Data Transfers</SubSection>
      <P>
        In accordance with the LFPDPPP, we obtain consent for the processing of personal data through the authorization granted by the merchant at the time of app installation. For international transfers of personal data originating in Mexico, we ensure that adequate protections are in place as required by applicable law, including contractual clauses that guarantee a comparable level of data protection.
      </P>

      <SectionTitle>9. International Data Transfers</SectionTitle>
      <P>
        Commerce data processed through our Services may be transferred to and stored in servers located in the United States or other jurisdictions. When data originating in Mexico is transferred internationally, we comply with the requirements of the LFPDPPP regarding international data transfers. For all transfers, we implement appropriate safeguards to ensure that your data receives a level of protection consistent with this Privacy Policy and applicable law.
      </P>

      <SectionTitle>10. Third-Party Platforms</SectionTitle>
      <P>
        Our Services integrate with third-party ecommerce platforms that have their own privacy policies and data practices. This Privacy Policy governs only the data we collect and process through our applications. We encourage you to review the privacy policies of any third-party platforms you use in conjunction with our Services.
      </P>

      <SectionTitle>11. Changes to This Privacy Policy</SectionTitle>
      <P>
        We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. When we make material changes, we will update the &ldquo;Last updated&rdquo; date at the top of this page and, where required by law, provide additional notice. Your continued use of our Services after the posting of changes constitutes your acceptance of such changes.
      </P>

      <SectionTitle>12. Contact Us</SectionTitle>
      <P>
        If you have questions about this Privacy Policy, wish to exercise your privacy rights, or need to submit an ARCO rights request under Mexican law, please contact us at:
      </P>
      <div className="rounded-lg border border-border bg-surface p-6 font-[family-name:var(--font-satoshi)] text-[15px] leading-relaxed">
        <p className="font-semibold text-white">PULSR</p>
        <p className="mt-1 text-text">Email: miguel@pulsr.live</p>
        <p className="text-text">Website: https://pulsr.live</p>
      </div>
    </article>
  );
}

/* ─── Spanish Version ─── */

function SpanishPolicy() {
  return (
    <article>
      <p className="mb-2 font-mono text-xs tracking-widest uppercase text-magenta">
        Aviso de Privacidad
      </p>
      <h1 className="mb-4 font-[family-name:var(--font-satoshi)] text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
        Aviso de Privacidad
      </h1>
      <p className="mb-10 font-mono text-xs text-muted">
        &Uacute;ltima actualizaci&oacute;n: {LAST_UPDATED_ES}
      </p>

      <P>
        PULSR (&ldquo;nosotros&rdquo;, &ldquo;nuestro&rdquo; o &ldquo;la empresa&rdquo;) opera como desarrollador de aplicaciones de comercio electr&oacute;nico y proveedor de servicios de live commerce. El presente Aviso de Privacidad describe c&oacute;mo recopilamos, utilizamos, divulgamos y protegemos la informaci&oacute;n obtenida a trav&eacute;s de nuestras aplicaciones, integraciones y servicios (en conjunto, los &ldquo;Servicios&rdquo;) que interact&uacute;an con plataformas de comercio en nombre de nuestros socios comerciales.
      </P>
      <P>
        Al utilizar nuestros Servicios o proporcionarnos acceso a sus datos comerciales, usted reconoce que ha le&iacute;do y comprendido el presente Aviso de Privacidad. Si no est&aacute; de acuerdo con las pr&aacute;cticas descritas en este documento, le solicitamos que deje de utilizar nuestros Servicios de inmediato.
      </P>

      <SectionTitle>1. Alcance del Presente Aviso</SectionTitle>
      <P>
        Este Aviso de Privacidad aplica a todos los datos comerciales a los que accedemos, recopilamos o procesamos a trav&eacute;s de nuestras integraciones con plataformas de comercio electr&oacute;nico, incluyendo, pero sin limitarse a, Shopify, TikTok Shop y otras APIs de marketplaces o comercio. Espec&iacute;ficamente, este aviso cubre datos relacionados con:
      </P>
      <UL>
        <li><strong>Datos de Pedidos</strong> &mdash; Informaci&oacute;n relacionada con transacciones, incluyendo identificadores de pedido, art&iacute;culos, cantidades, precios, estado del pedido, detalles de cumplimiento, direcciones de env&iacute;o e informaci&oacute;n de facturaci&oacute;n.</li>
        <li><strong>Datos de Productos</strong> &mdash; Informaci&oacute;n sobre los productos listados en la tienda de un comerciante, incluyendo t&iacute;tulos, descripciones, im&aacute;genes, precios, niveles de inventario, variantes, SKUs y categor&iacute;as de productos.</li>
        <li><strong>Datos de Clientes</strong> &mdash; Informaci&oacute;n sobre los clientes finales, incluyendo nombres, direcciones de correo electr&oacute;nico, n&uacute;meros telef&oacute;nicos, direcciones de env&iacute;o y facturaci&oacute;n, historial de compras e identificadores de cliente asignados por la plataforma de comercio.</li>
      </UL>

      <SectionTitle>2. Informaci&oacute;n que Recopilamos</SectionTitle>

      <SubSection>2.1 Datos Comerciales de Integraciones con Plataformas</SubSection>
      <P>
        Cuando un comerciante autoriza nuestra aplicaci&oacute;n, recibimos acceso a ciertos datos comerciales a trav&eacute;s de las APIs de la plataforma. Los datos espec&iacute;ficos a los que accedemos dependen de los permisos otorgados durante el proceso de autorizaci&oacute;n y pueden incluir datos de pedidos, datos de productos y datos de clientes seg&uacute;n lo descrito anteriormente.
      </P>

      <SubSection>2.2 C&oacute;mo Recopilamos la Informaci&oacute;n</SubSection>
      <P>
        Recopilamos datos comerciales exclusivamente a trav&eacute;s de integraciones autorizadas con APIs de plataformas de comercio electr&oacute;nico. Solo accedemos a estos datos despu&eacute;s de que un comerciante otorga expl&iacute;citamente su permiso mediante el flujo est&aacute;ndar de autorizaci&oacute;n OAuth de la plataforma o un mecanismo de autenticaci&oacute;n equivalente.
      </P>

      <SectionTitle>3. C&oacute;mo Utilizamos los Datos Comerciales</SectionTitle>
      <P>Utilizamos los datos comerciales que recopilamos estrictamente para los siguientes fines:</P>
      <UL>
        <li><strong>Prestaci&oacute;n de Servicios</strong> &mdash; Para proporcionar, operar y mantener las caracter&iacute;sticas y funcionalidades de nuestros Servicios seg&uacute;n lo acordado con nuestros socios comerciales.</li>
        <li><strong>Gesti&oacute;n de Pedidos</strong> &mdash; Para facilitar el procesamiento de pedidos, el seguimiento de cumplimiento y el soporte postventa en nombre de los comerciantes.</li>
        <li><strong>Operaciones de Productos</strong> &mdash; Para sincronizar listados de productos, gestionar datos de inventario y asegurar la precisi&oacute;n de la informaci&oacute;n de productos en las plataformas integradas.</li>
        <li><strong>Comunicaci&oacute;n con Clientes</strong> &mdash; Para permitir a los comerciantes gestionar las relaciones con sus clientes, incluyendo comunicaciones transaccionales directamente relacionadas con pedidos realizados en la tienda del comerciante.</li>
        <li><strong>An&aacute;lisis e Informes</strong> &mdash; Para generar reportes y an&aacute;lisis agregados y no identificables personalmente que ayuden a los comerciantes a comprender su rendimiento de ventas y tendencias de clientes.</li>
        <li><strong>Cumplimiento y Obligaciones Legales</strong> &mdash; Para cumplir con las leyes, regulaciones, procesos legales o solicitudes gubernamentales aplicables.</li>
      </UL>
      <P>
        No vendemos, rentamos ni cedemos datos comerciales &mdash; incluyendo informaci&oacute;n personal de clientes &mdash; a terceros. No utilizamos datos de clientes para fines no relacionados con los servicios que proporcionamos al comerciante autorizante.
      </P>

      <SectionTitle>4. Compartici&oacute;n y Divulgaci&oacute;n de Datos</SectionTitle>
      <P>Podemos compartir datos comerciales &uacute;nicamente en las siguientes circunstancias:</P>
      <UL>
        <li><strong>Con el Comerciante Autorizante</strong> &mdash; Los datos comerciales pertenecen al comerciante que autoriz&oacute; nuestro acceso. Proporcionamos a los comerciantes visibilidad completa de los datos que procesamos en su nombre.</li>
        <li><strong>Proveedores de Servicios</strong> &mdash; Podemos compartir datos con proveedores de servicios terceros de confianza que nos asisten en la operaci&oacute;n de nuestros Servicios (por ejemplo, alojamiento en la nube, infraestructura), sujeto a obligaciones contractuales estrictas de confidencialidad y protecci&oacute;n de datos.</li>
        <li><strong>Requisitos Legales</strong> &mdash; Podemos divulgar datos cuando la ley, una orden judicial, un citatorio u otro proceso legal as&iacute; lo requiera, o cuando consideremos de buena fe que la divulgaci&oacute;n es necesaria para proteger nuestros derechos, su seguridad o la seguridad de terceros.</li>
        <li><strong>Transferencias Comerciales</strong> &mdash; En caso de una fusi&oacute;n, adquisici&oacute;n o venta de la totalidad o parte de nuestros activos, los datos comerciales podr&aacute;n ser transferidos como parte de dicha transacci&oacute;n, sujetos a las mismas protecciones de privacidad descritas en este aviso.</li>
      </UL>

      <SectionTitle>5. Retenci&oacute;n de Datos</SectionTitle>
      <P>
        Retenemos los datos comerciales &uacute;nicamente durante el tiempo razonablemente necesario para cumplir con los fines para los que fueron recopilados, cumplir con nuestras obligaciones legales, resolver disputas y hacer cumplir nuestros acuerdos. Cuando un comerciante revoca el acceso a nuestra aplicaci&oacute;n o termina su relaci&oacute;n con nosotros, eliminaremos o anonimizaremos sus datos comerciales dentro de treinta (30) d&iacute;as calendario, salvo que la retenci&oacute;n sea requerida por ley.
      </P>

      <SectionTitle>6. Seguridad de los Datos</SectionTitle>
      <P>
        Implementamos medidas de seguridad t&eacute;cnicas y organizativas conforme a los est&aacute;ndares de la industria, dise&ntilde;adas para proteger los datos comerciales contra el acceso no autorizado, alteraci&oacute;n, divulgaci&oacute;n o destrucci&oacute;n. Estas medidas incluyen, pero no se limitan a:
      </P>
      <UL>
        <li>Cifrado de datos en tr&aacute;nsito mediante TLS 1.2 o superior.</li>
        <li>Cifrado de datos en reposo mediante AES-256 o est&aacute;ndares equivalentes.</li>
        <li>Controles de acceso basados en el principio de menor privilegio.</li>
        <li>Evaluaciones de seguridad peri&oacute;dicas y pruebas de vulnerabilidad.</li>
        <li>Registro de auditor&iacute;a de actividades de acceso y procesamiento de datos.</li>
      </UL>
      <P>
        Si bien nos esforzamos por proteger sus datos, ning&uacute;n m&eacute;todo de transmisi&oacute;n o almacenamiento es 100% seguro. No podemos garantizar la seguridad absoluta de la informaci&oacute;n procesada a trav&eacute;s de nuestros Servicios.
      </P>

      <SectionTitle>7. Sus Derechos Bajo la Legislaci&oacute;n de Estados Unidos</SectionTitle>
      <P>
        Dependiendo de su estado de residencia, usted puede tener derechos espec&iacute;ficos respecto a la informaci&oacute;n personal que procesamos. Nos comprometemos a cumplir con todas las leyes de privacidad aplicables en Estados Unidos, incluyendo, pero sin limitarse a:
      </P>

      <SubSection>7.1 Ley de Privacidad del Consumidor de California (CCPA / CPRA)</SubSection>
      <P>
        Si usted es residente de California, tiene derecho a:
      </P>
      <UL>
        <li>Conocer qu&eacute; informaci&oacute;n personal recopilamos, usamos y divulgamos sobre usted.</li>
        <li>Solicitar la eliminaci&oacute;n de su informaci&oacute;n personal, sujeto a ciertas excepciones.</li>
        <li>Optar por no participar en la venta o compartici&oacute;n de su informaci&oacute;n personal. No vendemos informaci&oacute;n personal.</li>
        <li>No ser discriminado por ejercer sus derechos de privacidad.</li>
        <li>Corregir informaci&oacute;n personal inexacta que mantengamos sobre usted.</li>
      </UL>

      <SubSection>7.2 Otras Leyes Estatales de Privacidad en EE.UU.</SubSection>
      <P>
        Tambi&eacute;n reconocemos y cumplimos con los derechos de privacidad otorgados por otras leyes estatales, incluyendo las de Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), Utah (UCPA), Texas (TDPSA), Oregon (OCPA) y otros estados con legislaci&oacute;n de privacidad del consumidor vigente. Los residentes de estos estados pueden ejercer derechos comparables para acceder, eliminar y corregir sus datos personales, y para optar por no participar en publicidad dirigida o perfilamiento, seg&uacute;n corresponda.
      </P>

      <SectionTitle>8. Sus Derechos Bajo la Legislaci&oacute;n Mexicana</SectionTitle>

      <SubSection>8.1 Ley Federal de Protecci&oacute;n de Datos Personales en Posesi&oacute;n de los Particulares (LFPDPPP)</SubSection>
      <P>
        Si usted se encuentra en M&eacute;xico, sus datos personales est&aacute;n protegidos por la Ley Federal de Protecci&oacute;n de Datos Personales en Posesi&oacute;n de los Particulares (LFPDPPP) y su Reglamento. Bajo esta ley, usted tiene los siguientes derechos ARCO:
      </P>
      <UL>
        <li><strong>Acceso</strong> &mdash; Tiene derecho a conocer qu&eacute; datos personales tenemos sobre usted y las condiciones y t&eacute;rminos bajo los cuales se est&aacute;n utilizando.</li>
        <li><strong>Rectificaci&oacute;n</strong> &mdash; Tiene derecho a solicitar la correcci&oacute;n de sus datos personales si son inexactos, incompletos o est&aacute;n desactualizados.</li>
        <li><strong>Cancelaci&oacute;n</strong> &mdash; Tiene derecho a solicitar la eliminaci&oacute;n de sus datos personales cuando considere que no est&aacute;n siendo utilizados conforme a los principios y obligaciones establecidos en la ley.</li>
        <li><strong>Oposici&oacute;n</strong> &mdash; Tiene derecho a oponerse al tratamiento de sus datos personales para fines espec&iacute;ficos.</li>
      </UL>
      <P>
        Para ejercer sus derechos ARCO, favor de enviar una solicitud a la informaci&oacute;n de contacto proporcionada en la Secci&oacute;n 12 de este aviso. Responderemos a su solicitud dentro de veinte (20) d&iacute;as h&aacute;biles a partir de la fecha de recepci&oacute;n, conforme lo establece la LFPDPPP.
      </P>

      <SubSection>8.2 Consentimiento y Transferencias de Datos</SubSection>
      <P>
        De conformidad con la LFPDPPP, obtenemos el consentimiento para el tratamiento de datos personales a trav&eacute;s de la autorizaci&oacute;n otorgada por el comerciante al momento de la instalaci&oacute;n de la aplicaci&oacute;n. Para las transferencias internacionales de datos personales originados en M&eacute;xico, nos aseguramos de que existan protecciones adecuadas conforme a la ley aplicable, incluyendo cl&aacute;usulas contractuales que garanticen un nivel comparable de protecci&oacute;n de datos.
      </P>

      <SectionTitle>9. Transferencias Internacionales de Datos</SectionTitle>
      <P>
        Los datos comerciales procesados a trav&eacute;s de nuestros Servicios pueden ser transferidos y almacenados en servidores ubicados en Estados Unidos u otras jurisdicciones. Cuando los datos originados en M&eacute;xico se transfieren internacionalmente, cumplimos con los requisitos de la LFPDPPP respecto a transferencias internacionales de datos. Para todas las transferencias, implementamos las salvaguardas apropiadas para asegurar que sus datos reciban un nivel de protecci&oacute;n consistente con este Aviso de Privacidad y la legislaci&oacute;n aplicable.
      </P>

      <SectionTitle>10. Plataformas de Terceros</SectionTitle>
      <P>
        Nuestros Servicios se integran con plataformas de comercio electr&oacute;nico de terceros que cuentan con sus propias pol&iacute;ticas de privacidad y pr&aacute;cticas de datos. El presente Aviso de Privacidad rige &uacute;nicamente los datos que recopilamos y procesamos a trav&eacute;s de nuestras aplicaciones. Le recomendamos revisar las pol&iacute;ticas de privacidad de cualquier plataforma de terceros que utilice en conjunto con nuestros Servicios.
      </P>

      <SectionTitle>11. Cambios a Este Aviso de Privacidad</SectionTitle>
      <P>
        Podemos actualizar este Aviso de Privacidad peri&oacute;dicamente para reflejar cambios en nuestras pr&aacute;cticas, tecnolog&iacute;as, requisitos legales u otros factores. Cuando realicemos cambios sustanciales, actualizaremos la fecha de &ldquo;&Uacute;ltima actualizaci&oacute;n&rdquo; en la parte superior de esta p&aacute;gina y, cuando la ley lo requiera, proporcionaremos un aviso adicional. El uso continuado de nuestros Servicios despu&eacute;s de la publicaci&oacute;n de los cambios constituye su aceptaci&oacute;n de los mismos.
      </P>

      <SectionTitle>12. Contacto</SectionTitle>
      <P>
        Si tiene preguntas sobre este Aviso de Privacidad, desea ejercer sus derechos de privacidad o necesita presentar una solicitud de derechos ARCO conforme a la legislaci&oacute;n mexicana, puede contactarnos en:
      </P>
      <div className="rounded-lg border border-border bg-surface p-6 font-[family-name:var(--font-satoshi)] text-[15px] leading-relaxed">
        <p className="font-semibold text-white">PULSR</p>
        <p className="mt-1 text-text">Correo electr&oacute;nico: miguel@pulsr.live</p>
        <p className="text-text">Sitio web: https://pulsr.live</p>
      </div>
    </article>
  );
}
