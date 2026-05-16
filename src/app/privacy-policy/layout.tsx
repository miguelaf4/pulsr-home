import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | PULSR",
  description:
    "Privacy Policy for PULSR — how we collect, use, and protect your commerce data including orders, products, and customer information.",
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
