import React from "react";
import DocumentPageLayout from "../components/documents/DocumentPageLayout";

export default function DocumentAudit2023() {
  return (
    <DocumentPageLayout
      title="2022-2023 Audit Report"
      subtitle="Audited Financial Statements — Period ended 31 December 2023"
      pdfUrl={`${import.meta.env.BASE_URL}assets/documents/HK_Audit_2023.pdf`}
    />
  );
}