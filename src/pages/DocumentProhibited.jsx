import React from "react";
import DocumentPageLayout from "../components/documents/DocumentPageLayout";

export default function DocumentProhibited() {
  return (
    <DocumentPageLayout
      title="Prohibited Cargo Policy"
      subtitle="Categories of restricted and prohibited materials we do not transport or trade."
      pdfUrl={`${import.meta.env.BASE_URL}assets/documents/ProhibitedCargoPolicy.pdf`}
    />
  );
}