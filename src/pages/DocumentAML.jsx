import React from "react";
import DocumentPageLayout from "../components/documents/DocumentPageLayout";

export default function DocumentAML() {
  return (
    <DocumentPageLayout
      title="AML Policy"
      subtitle="Anti-Money Laundering Compliance Policy"
      pdfUrl={`${import.meta.env.BASE_URL}assets/documents/AMLPolicy.pdf`}
    />
  );
}