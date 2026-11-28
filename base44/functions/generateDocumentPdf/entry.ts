import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';
import { jsPDF } from 'npm:jspdf@4.0.0';

const DOCUMENTS = {
  aml: {
    title: "Anti-Money Laundering (AML) Policy",
    company: "TransContinental Group International Limited",
    sections: [
      {
        heading: "Policy Statement",
        body: "TransContinental Group International is committed to preventing the use of its services for money laundering or terrorist financing. We maintain robust controls and monitoring procedures to detect and report suspicious activities."
      },
      {
        heading: "Customer Due Diligence (CDD)",
        body: "We perform thorough Know-Your-Customer (KYC) checks on all new clients and counterparties. Enhanced due diligence is applied for high-risk customers, politically exposed persons (PEPs), and transactions from high-risk jurisdictions."
      },
      {
        heading: "Transaction Monitoring",
        body: "All transactions are monitored for unusual patterns. Large, complex, or unusual transactions are subject to additional scrutiny and may be reported to the relevant financial intelligence unit as required by law."
      },
      {
        heading: "Record Keeping",
        body: "We maintain detailed records of all transactions and customer identification documents for a minimum of five years in accordance with applicable AML regulations."
      },
      {
        heading: "Training",
        body: "All relevant staff receive regular AML training to ensure awareness of their obligations and the ability to recognize and report suspicious activities."
      }
    ]
  },
  compliance: {
    title: "Compliance Policy",
    company: "TransContinental Group International Limited",
    sections: [
      {
        heading: "Scope",
        body: "This Compliance Policy applies to all employees, agents, contractors, and third-party representatives acting on behalf of TransContinental Group International Limited across all jurisdictions where we operate."
      },
      {
        heading: "Core Principles",
        body: "Integrity: We conduct all business with honesty and transparency.\nLegal Compliance: We adhere to all applicable local, national, and international laws.\nEthical Conduct: We maintain the highest ethical standards in all business relationships.\nDue Diligence: We conduct thorough due diligence on all counterparties and transactions."
      },
      {
        heading: "Regulatory Framework",
        body: "Our compliance framework covers customs and trade regulations, export control laws, anti-corruption legislation (including FCPA and UK Bribery Act), data protection requirements, and environmental regulations pertaining to logistics and commodity trading."
      },
      {
        heading: "Reporting",
        body: "All employees and partners are encouraged to report compliance concerns through our internal reporting channels. Whistleblower protection is guaranteed for all good-faith reports."
      }
    ]
  },
  prohibited: {
    title: "Prohibited Cargo Policy",
    company: "TransContinental Group International Limited",
    sections: [
      {
        heading: "Absolutely Prohibited Cargo",
        body: "The following cargo categories are strictly prohibited under all circumstances:\n• Weapons of mass destruction, biological or chemical agents\n• Illegal narcotics, controlled substances, and precursor chemicals\n• Counterfeit goods, pirated materials, and trademark-infringing products\n• Endangered species and products derived from protected wildlife (CITES violations)\n• Human remains (without proper documentation and authorization)\n• Pornographic or obscene materials prohibited in the destination country\n• Cargo subject to international embargoes or comprehensive sanctions"
      },
      {
        heading: "Restricted Cargo (Requires Special Authorization)",
        body: "The following require additional documentation, permits, or prior approval before acceptance:\n• Hazardous materials (IATA/IMDG classified — DG regulations apply)\n• Firearms, ammunition, and related components\n• Dual-use goods subject to export control regulations\n• Pharmaceuticals, medical devices, and biological samples\n• Currency, precious metals, and high-value items\n• Foodstuffs and perishables (subject to phytosanitary requirements)\n• Items requiring CITES permits (timber, wildlife products)"
      },
      {
        heading: "Compliance",
        body: "Any attempt to ship prohibited cargo will result in immediate refusal and may be reported to the relevant authorities. Clients found misrepresenting cargo descriptions will be permanently blacklisted."
      }
    ]
  },
  risk: {
    title: "Risk Assessment Policy",
    company: "TransContinental Group International Limited",
    sections: [
      {
        heading: "Risk Management Framework",
        body: "Our risk assessment policy is based on the internationally recognized ISO 31000 risk management standard. It provides a systematic approach to identifying risks, assessing their likelihood and impact, and implementing appropriate controls."
      },
      {
        heading: "Risk Categories",
        body: "Operational Risk: Supply chain disruptions, cargo damage, transit delays, and equipment failure.\nCompliance Risk: Regulatory changes, customs violations, and trade restriction non-compliance.\nFinancial Risk: Currency exposure, credit risk, counterparty default, and market volatility.\nReputational Risk: Third-party conduct, public perception, and media exposure.\nGeopolitical Risk: Political instability, sanctions changes, and trade war impacts on routes.\nCyber Risk: Data breaches, system outages, and information security threats."
      },
      {
        heading: "Assessment Process",
        body: "Each identified risk is assessed on a 5x5 matrix evaluating probability (1–5) and impact (1–5). Risks scoring above 15 are classified as high-priority and require immediate mitigation plans with designated owners and review timelines."
      },
      {
        heading: "Review Cycle",
        body: "The risk register is reviewed quarterly and updated following any significant business change, regulatory update, or operational incident. An annual comprehensive review is conducted by senior management."
      }
    ]
  },
  sanctions: {
    title: "Sanctions Compliance Policy",
    company: "TransContinental Group International Limited",
    sections: [
      {
        heading: "Applicable Sanctions Regimes",
        body: "We monitor and comply with sanctions imposed by:\n• United Nations Security Council (UNSC)\n• European Union (EU)\n• United States Office of Foreign Assets Control (OFAC)\n• United Kingdom Office of Financial Sanctions Implementation (OFSI)\n• Hong Kong HKMA and relevant authorities"
      },
      {
        heading: "Screening Procedures",
        body: "All clients, counterparties, vessels, aircraft, and goods are screened against current sanctions lists prior to engagement. Screening is conducted using automated compliance tools and is updated in real-time as sanctions lists change."
      },
      {
        heading: "Prohibited Transactions",
        body: "TransContinental will not engage in any transaction, directly or indirectly, that involves:\n• Sanctioned individuals, entities, or governments\n• Vessels or aircraft on international watchlists\n• Goods subject to specific trade embargoes or restrictions\n• Financial flows to or from prohibited jurisdictions"
      },
      {
        heading: "Reporting & Escalation",
        body: "Any potential sanctions match identified during screening is immediately escalated to the Compliance Officer for review. Confirmed matches are reported to the appropriate regulatory authorities as required by law. All such transactions are declined and documented."
      },
      {
        heading: "Record Retention",
        body: "Screening records and compliance decisions are retained for a minimum of seven years."
      }
    ]
  },
  audit2023: {
    title: "2023 Audit Report",
    company: "TransContinental Group International Limited",
    sections: [
      {
        heading: "Scope of Audit",
        body: "The 2023 audit covered all major business units including freight forwarding, commodity trading, and warehousing operations. Our auditors assessed financial accuracy, regulatory compliance, and adherence to internal controls."
      },
      {
        heading: "Key Findings",
        body: "The audit confirmed that TransContinental operates in full compliance with international trade regulations and internal governance policies. No material weaknesses were identified in financial reporting or operational procedures."
      },
      {
        heading: "Conclusion",
        body: "TransContinental Group International received a clean audit opinion for the 2023–2024 period, reflecting our commitment to transparency, accountability, and operational excellence."
      }
    ]
  },
  audit2024: {
    title: "2024 Audit Report",
    company: "TransContinental Group International Limited",
    sections: [
      {
        heading: "Scope of Audit",
        body: "The 2024 audit covered all major business units including freight forwarding, commodity trading, and warehousing operations, with expanded coverage of sustainability and ESG metrics."
      },
      {
        heading: "Key Findings",
        body: "The audit confirmed that TransContinental continues to operate in full compliance with international trade regulations and internal governance policies. Our ESG reporting was independently verified for the first time."
      },
      {
        heading: "Conclusion",
        body: "TransContinental Group International received a clean audit opinion for the 2024–2025 period, continuing our track record of transparency, accountability, and operational excellence."
      }
    ]
  },
  privacy: {
    title: "Privacy Policy",
    company: "TransContinental Group International Limited",
    sections: [
      {
        heading: "Introduction",
        body: "TransContinental Group International Limited ('we', 'us', 'our') is committed to protecting your personal data and privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services."
      },
      {
        heading: "Information We Collect",
        body: "We may collect: personal identification information (name, email, phone number, company), usage data (IP address, browser type, pages visited), and business transaction data necessary to provide our logistics and trading services."
      },
      {
        heading: "How We Use Your Information",
        body: "We use your information to: provide and manage logistics and trading services, process quote requests and transactions, communicate with you about your shipments, improve our website and services, and comply with legal obligations."
      },
      {
        heading: "Data Retention",
        body: "We retain personal data only as long as necessary for the purposes stated in this policy, or as required by applicable law. Business transaction records are typically retained for seven years."
      },
      {
        heading: "Your Rights",
        body: "Under applicable data protection laws, you have the right to: access your personal data, correct inaccurate data, request erasure of your data, object to processing, and data portability. Contact us at tcl@transcontinental-int.com to exercise these rights."
      },
      {
        heading: "Contact",
        body: "For privacy-related inquiries: tcl@transcontinental-int.com\n1006, 10th Floor, Hing Yip Commercial Centre\n272-284 Des Voeux Road Central, Hong Kong"
      }
    ]
  },
  cookies: {
    title: "Cookies Policy",
    company: "TransContinental Group International Limited",
    sections: [
      {
        heading: "What Are Cookies",
        body: "Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site."
      },
      {
        heading: "Types of Cookies We Use",
        body: "Essential Cookies: Required for the website to function properly. These cannot be disabled.\nAnalytics Cookies: Help us understand how visitors interact with our website (e.g., Google Analytics).\nPreference Cookies: Remember your settings and preferences for future visits.\nMarketing Cookies: Used to deliver relevant advertisements (only with your consent)."
      },
      {
        heading: "Managing Cookies",
        body: "You can control and/or delete cookies through your browser settings. Disabling certain cookies may affect your experience on our website. You can use our cookie consent banner to manage your preferences."
      },
      {
        heading: "Contact",
        body: "For cookie-related inquiries: tcl@transcontinental-int.com"
      }
    ]
  }
};

function buildPdf(doc) {
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const addPageIfNeeded = (needed) => {
    if (y + needed > pageHeight - margin) {
      pdf.addPage();
      y = margin;
    }
  };

  // Header bar
  pdf.setFillColor(17, 24, 39);
  pdf.rect(0, 0, pageWidth, 28, 'F');

  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(255, 255, 255);
  pdf.text('TRANSCONTINENTAL GROUP INTERNATIONAL', margin, 12);

  pdf.setFontSize(9);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(156, 163, 175);
  pdf.text('1006, 10/F Hing Yip Commercial Centre, 272-284 Des Voeux Road Central, Hong Kong', margin, 20);
  pdf.text('tcl@transcontinental-int.com  |  +852 5140 1536', margin, 26);

  y = 40;

  // Document title
  pdf.setFontSize(20);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(17, 24, 39);
  const titleLines = pdf.splitTextToSize(doc.title, contentWidth);
  pdf.text(titleLines, margin, y);
  y += titleLines.length * 9 + 4;

  // Date
  pdf.setFontSize(9);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(107, 114, 128);
  pdf.text(`Issued: ${new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}`, margin, y);
  y += 6;

  // Divider
  pdf.setDrawColor(6, 182, 212);
  pdf.setLineWidth(0.8);
  pdf.line(margin, y, pageWidth - margin, y);
  y += 10;

  // Sections
  for (const section of doc.sections) {
    addPageIfNeeded(20);

    // Section heading
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(17, 24, 39);
    pdf.text(section.heading, margin, y);
    y += 7;

    // Section body
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(55, 65, 81);
    const lines = pdf.splitTextToSize(section.body, contentWidth);
    for (const line of lines) {
      addPageIfNeeded(6);
      pdf.text(line, margin, y);
      y += 5.5;
    }
    y += 6;
  }

  // Footer on each page
  const totalPages = pdf.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    pdf.setPage(i);
    pdf.setFillColor(243, 244, 246);
    pdf.rect(0, pageHeight - 14, pageWidth, 14, 'F');
    pdf.setFontSize(8);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(107, 114, 128);
    pdf.text(`${doc.company}  —  Confidential Document`, margin, pageHeight - 5);
    pdf.text(`Page ${i} of ${totalPages}`, pageWidth - margin, pageHeight - 5, { align: 'right' });
  }

  return pdf.output('arraybuffer');
}

Deno.serve(async (req) => {
  try {
    const { docId } = await req.json();

    if (!docId || !DOCUMENTS[docId]) {
      return Response.json({ error: 'Invalid document ID' }, { status: 400 });
    }

    const pdfBytes = buildPdf(DOCUMENTS[docId]);

    return new Response(pdfBytes, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="${docId}.pdf"`,
        'Access-Control-Allow-Origin': '*',
      }
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});