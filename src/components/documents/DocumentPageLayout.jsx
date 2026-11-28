import React from "react";
import PageHero from "../shared/PageHero";
import { ArrowLeft, FileText, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

function getGDriveId(url) {
  if (!url) return null;
  const m = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return m ? m[1] : null;
}

export default function DocumentPageLayout({ title, subtitle, pdfUrl, children }) {
  const fileId = getGDriveId(pdfUrl);
  const embedUrl = fileId ? `https://drive.google.com/file/d/${fileId}/preview` : pdfUrl;
  const downloadUrl = fileId ? `https://drive.google.com/uc?export=download&id=${fileId}` : pdfUrl;
  const openUrl = pdfUrl;

  return (
    <div>
      <PageHero
        title={title}
        subtitle={subtitle}
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80"
      />
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <Link to={createPageUrl("Documents")} className="flex items-center gap-2 text-cyan-600 hover:text-cyan-500 text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to All Documents
            </Link>
            {pdfUrl && (
              <div className="flex gap-3 flex-wrap">
                <a
                  href={openUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#111827] hover:bg-gray-800 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                >
                  <FileText className="w-4 h-4" /> Open PDF
                </a>
                <a
                  href={downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                >
                  <Download className="w-4 h-4" /> Download PDF
                </a>
              </div>
            )}
          </div>

          {/* Document header bar */}
          <div className="flex items-center gap-3 bg-[#111827] text-white rounded-2xl px-6 py-5 mb-8">
            <FileText className="w-8 h-8 text-cyan-400 flex-shrink-0" />
            <div>
              <p className="font-semibold">{title}</p>
              <p className="text-xs text-gray-400 mt-0.5">Official TransContinental Document</p>
            </div>
          </div>

          {/* PDF Viewer */}
          {embedUrl && (
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm" style={{ height: "80vh" }}>
              <iframe
                src={embedUrl}
                title={title}
                width="100%"
                height="100%"
                allow="autoplay"
                style={{ border: "none" }}
              />
            </div>
          )}

          {/* Text Content (shown when no PDF) */}
          {!embedUrl && children && (
            <div className="prose prose-slate max-w-none text-gray-700 space-y-4">
              {children}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}