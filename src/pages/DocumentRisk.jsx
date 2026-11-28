import React from "react";
import DocumentPageLayout from "../components/documents/DocumentPageLayout";

export default function DocumentRisk() {
  return (
    <DocumentPageLayout
      title="Risk Assessment Policy"
      subtitle="Our comprehensive framework for identifying, assessing, and mitigating operational risks."
      pdfUrl={`${import.meta.env.BASE_URL}assets/documents/RiskAssessmentPolicy.pdf`}
    />
  );
}