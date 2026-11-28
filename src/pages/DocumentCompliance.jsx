import React from "react";
import DocumentPageLayout from "../components/documents/DocumentPageLayout";

export default function DocumentCompliance() {
  return (
    <DocumentPageLayout
      title="Compliance Policy"
      subtitle="International trade laws, regulations, and ethical business standards."
      pdfUrl=""
    >
      <h3>Scope</h3>
      <p>This Compliance Policy applies to all employees, agents, contractors, and third-party representatives acting on behalf of TransContinental Group International Limited across all jurisdictions where we operate.</p>
      <h3>Core Principles</h3>
      <ul>
        <li><strong>Integrity:</strong> We conduct all business with honesty and transparency.</li>
        <li><strong>Legal Compliance:</strong> We adhere to all applicable local, national, and international laws.</li>
        <li><strong>Ethical Conduct:</strong> We maintain the highest ethical standards in all business relationships.</li>
        <li><strong>Due Diligence:</strong> We conduct thorough due diligence on all counterparties and transactions.</li>
      </ul>
      <h3>Regulatory Framework</h3>
      <p>Our compliance framework covers customs and trade regulations, export control laws, anti-corruption legislation (including FCPA and UK Bribery Act), data protection requirements, and environmental regulations pertaining to logistics and commodity trading.</p>
      <h3>Reporting</h3>
      <p>All employees and partners are encouraged to report compliance concerns through our internal reporting channels. Whistleblower protection is guaranteed for all good-faith reports.</p>
    </DocumentPageLayout>
  );
}