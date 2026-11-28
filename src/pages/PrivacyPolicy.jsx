import React from "react";
import DocumentPageLayout from "../components/documents/DocumentPageLayout";

export default function PrivacyPolicy() {
  return (
    <DocumentPageLayout
      title="Privacy Policy"
      subtitle="How TransContinental Group International collects, uses, and protects your personal data."
      description="Last updated: February 2026. This Privacy Policy explains how TransContinental Group International Limited ('we', 'us', 'our') collects, uses, discloses, and safeguards your information when you use our website and services."
      url="https://drive.google.com/file/d/1-oCVkCJYdkE5LqRt_INhA0lKilEHjIKP/view?usp=drive_link"
    >
      <h3>1. Information We Collect</h3>
      <p>We may collect the following categories of personal information:</p>
      <ul>
        <li><strong>Contact Information:</strong> Name, email address, phone number, company name, and postal address when you submit enquiries or quote requests.</li>
        <li><strong>Account Information:</strong> Username, password, and profile details if you create an account on our platform.</li>
        <li><strong>Shipment Information:</strong> Origin, destination, cargo descriptions, weight, dimensions, and other logistics data provided for quote or booking purposes.</li>
        <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on pages, and other analytics data collected automatically through cookies and similar technologies.</li>
        <li><strong>Communications:</strong> Records of correspondence when you contact us by email, phone, or through our website.</li>
      </ul>

      <h3>2. How We Use Your Information</h3>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide, operate, and maintain our services and website</li>
        <li>Process and respond to quote requests, bookings, and enquiries</li>
        <li>Send transactional communications including order confirmations and service updates</li>
        <li>Send marketing communications where you have provided consent</li>
        <li>Comply with legal obligations including customs, trade, and financial regulations</li>
        <li>Improve our website, services, and user experience through analytics</li>
        <li>Detect and prevent fraud, security breaches, and other harmful activities</li>
      </ul>

      <h3>3. Legal Basis for Processing (GDPR)</h3>
      <p>For users in the European Economic Area, our legal bases for processing personal data include:</p>
      <ul>
        <li><strong>Contract:</strong> Processing necessary to perform a contract with you or take pre-contractual steps</li>
        <li><strong>Legal Obligation:</strong> Processing required to comply with applicable laws and regulations</li>
        <li><strong>Legitimate Interests:</strong> Processing for our legitimate business interests where not overridden by your rights</li>
        <li><strong>Consent:</strong> Where you have given explicit consent for specific processing activities</li>
      </ul>

      <h3>4. Data Sharing and Disclosure</h3>
      <p>We may share your personal information with:</p>
      <ul>
        <li><strong>Service Partners:</strong> Carriers, port agents, customs brokers, and other logistics partners necessary to provide our services</li>
        <li><strong>Technology Providers:</strong> IT service providers, cloud hosting companies, and analytics platforms operating under data processing agreements</li>
        <li><strong>Regulatory Authorities:</strong> Government agencies, customs authorities, and law enforcement when required by law</li>
        <li><strong>Professional Advisors:</strong> Legal, financial, and insurance advisors bound by confidentiality obligations</li>
      </ul>
      <p>We do not sell your personal information to third parties for marketing purposes.</p>

      <h3>5. International Data Transfers</h3>
      <p>Given the global nature of our logistics operations, your personal data may be transferred to and processed in countries outside your country of residence. Where we transfer data internationally, we ensure appropriate safeguards are in place including Standard Contractual Clauses or equivalent mechanisms recognized under applicable data protection law.</p>

      <h3>6. Data Retention</h3>
      <p>We retain personal data for as long as necessary to provide our services and comply with legal obligations. Shipment and transaction records are typically retained for 7 years to meet customs, tax, and trade compliance requirements. You may request deletion of your personal data subject to our legal retention obligations.</p>

      <h3>7. Your Rights</h3>
      <p>Depending on your location, you may have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Correct inaccurate or incomplete personal data</li>
        <li>Request deletion of your personal data</li>
        <li>Object to or restrict certain processing activities</li>
        <li>Data portability — receive your data in a structured, machine-readable format</li>
        <li>Withdraw consent where processing is based on consent</li>
        <li>Lodge a complaint with the relevant data protection authority</li>
      </ul>
      <p>To exercise any of these rights, please contact us at <a href="mailto:tcl@transcontinental-int.com" className="text-cyan-600 hover:underline">tcl@transcontinental-int.com</a>.</p>

      <h3>8. Security</h3>
      <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of internet transmission or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

      <h3>9. Cookies</h3>
      <p>We use cookies and similar tracking technologies to enhance your experience on our website. Please see our <a href="/CookiesPolicy" className="text-cyan-600 hover:underline">Cookies Policy</a> for detailed information about how we use cookies and how you can manage your preferences.</p>

      <h3>10. Contact Us</h3>
      <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:tcl@transcontinental-int.com" className="text-cyan-600 hover:underline">tcl@transcontinental-int.com</a></li>
        <li><strong>Phone (HK):</strong> +852 5140 1536</li>
        <li><strong>Phone (USA):</strong> +1 917-930-5172</li>
        <li><strong>Address:</strong> Room 1006, 10/F, Po Yip Building, 23 Hing Yip Street, Kwun Tong, Kowloon, Hong Kong</li>
      </ul>
    </DocumentPageLayout>
  );
}