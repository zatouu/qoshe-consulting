import type { Metadata } from "next";
import AuditPageClient from "@/components/AuditPageClient";

export const metadata: Metadata = {
  title: "Audit gratuit QHSE — QOSHE Consulting",
  description:
    "Réalisez un autodiagnostic QHSE gratuit en quelques minutes. Évaluez votre conformité QHSE et obtenez des recommandations personnalisées.",
};

export default function AuditPage() {
  return <AuditPageClient />;
}
