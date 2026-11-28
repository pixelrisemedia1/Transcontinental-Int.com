import React from "react";
import DocumentPageLayout from "../components/documents/DocumentPageLayout";

export default function TermsConditions() {
  return (
    <DocumentPageLayout
      title="Terms & Conditions"
      subtitle="Please read these terms carefully before using our services."
    >
      <h3>1. Acceptance of Terms</h3>
      <p>By accessing or using the website and services of TransContinental Group International Limited ("TransContinental", "we", "us", "our"), you agree to be bound by these Terms and Conditions. If you do not agree, please discontinue use of our website and services immediately.</p>

      <h3>2. Services</h3>
      <p>TransContinental provides international freight forwarding, logistics management, customs clearance, warehousing, and commodity trading services. All services are subject to availability and acceptance by TransContinental at its sole discretion. We reserve the right to refuse any shipment or transaction without obligation to state a reason.</p>

      <h3>3. Quotations and Pricing</h3>
      <p>All quotations are indicative only and subject to change based on actual cargo specifications, market rates, fuel surcharges, currency fluctuations, and applicable government fees. A binding quote is only issued in writing and confirmed by an authorized representative. TransContinental is not liable for changes in costs after a quotation is issued due to circumstances beyond our control.</p>

      <h3>4. Client Obligations</h3>
      <p>Clients must ensure that:</p>
      <ul>
        <li>All cargo descriptions, weights, dimensions, and documentation are accurate and complete.</li>
        <li>All goods comply with applicable import/export laws, trade sanctions, and licensing requirements of the origin and destination countries.</li>
        <li>Prohibited or restricted items are not tendered for shipment without prior written consent and proper authorization.</li>
        <li>All necessary permits, certificates, and customs documentation are provided in a timely manner.</li>
      </ul>
      <p>The client bears full legal responsibility for any misrepresentation of cargo or non-compliance with applicable laws.</p>

      <h3>5. Liability Limitations</h3>
      <p>TransContinental's liability for loss, damage, or delay to cargo is limited to the lower of the actual value or the applicable limits under international conventions (e.g., Hague-Visby Rules for sea, Warsaw/Montreal Convention for air, CMR for road). TransContinental shall not be liable for indirect, consequential, or special damages. We strongly recommend clients obtain appropriate cargo insurance for all shipments.</p>

      <h3>6. Force Majeure</h3>
      <p>TransContinental shall not be held liable for failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, war, terrorism, port closures, strikes, government restrictions, pandemics, or carrier delays.</p>

      <h3>7. Payment Terms</h3>
      <p>Payment is due in accordance with the terms set out in the applicable invoice or service agreement. Late payments may attract interest and may result in suspension of services. All amounts are exclusive of applicable taxes unless stated otherwise.</p>

      <h3>8. Intellectual Property</h3>
      <p>All content on this website, including text, images, logos, and design elements, is the exclusive property of TransContinental Group International Limited and is protected by applicable intellectual property laws. No content may be reproduced, distributed, or used without prior written permission.</p>

      <h3>9. Privacy and Data</h3>
      <p>The collection and use of personal data is governed by our <a href="/PrivacyPolicy" className="text-cyan-600 hover:underline">Privacy Policy</a> and <a href="/CookiesPolicy" className="text-cyan-600 hover:underline">Cookies Policy</a>, which form part of these Terms and Conditions.</p>

      <h3>10. Governing Law and Jurisdiction</h3>
      <p>These Terms and Conditions are governed by the laws of the Hong Kong Special Administrative Region. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of Hong Kong SAR. TransContinental reserves the right to seek injunctive or other equitable relief in any competent jurisdiction.</p>

      <h3>11. Amendments</h3>
      <p>TransContinental reserves the right to amend these Terms and Conditions at any time. Continued use of our website or services following any changes constitutes acceptance of the revised terms. We recommend reviewing this page periodically.</p>

      <h3>12. Contact</h3>
      <p>For any questions relating to these Terms and Conditions, please contact us:</p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:tcl@transcontinental-int.com" className="text-cyan-600 hover:underline">tcl@transcontinental-int.com</a></li>
        <li><strong>Phone (HK):</strong> +852 5140 1536</li>
        <li><strong>Address:</strong> Room 1006, 10/F, Po Yip Building, 23 Hing Yip Street, Kwun Tong, Kowloon, Hong Kong</li>
      </ul>
    </DocumentPageLayout>
  );
}