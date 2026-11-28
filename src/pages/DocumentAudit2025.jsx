import React from "react";
import DocumentPageLayout from "../components/documents/DocumentPageLayout";

export default function DocumentAudit2025() {
  return (
    <DocumentPageLayout
      title="2025 Audit Report"
      subtitle="Director's Report and Financial Statements — Year ended 31 December 2025"
      pdfUrl={`${import.meta.env.BASE_URL}assets/documents/HK_Audit_2025.pdf`}
    />
  );
}