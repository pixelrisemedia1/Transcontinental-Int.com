import React from "react";
import DocumentPageLayout from "../components/documents/DocumentPageLayout";

export default function DocumentSanctions() {
  return (
    <DocumentPageLayout
      title="Sanctions Compliance Policy"
      subtitle="Adherence to international sanctions regimes and trade restrictions."
      pdfUrl={`${import.meta.env.BASE_URL}assets/documents/SanctionsCompliancePolicy.pdf`}
    />
  );
}