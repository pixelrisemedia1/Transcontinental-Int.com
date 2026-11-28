import React from "react";
import TopBar from "./components/layout/TopBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CookieConsent from "./components/layout/CookieConsent";
import ChatWidget from "./components/chat/ChatWidget";
import AccessibilityWidget from "./components/accessibility/AccessibilityWidget";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <style>{`
        img { -webkit-user-drag: none; user-select: none; pointer-events: none; }
        a img, button img { pointer-events: auto; }
        img[data-broken] { display: none !important; }
      `}</style>
      <script dangerouslySetInnerHTML={{ __html: `
        document.addEventListener('error', function(e) {
          if (e.target && e.target.tagName === 'IMG') {
            e.target.setAttribute('data-broken', 'true');
          }
        }, true);
      `}} />
      <TopBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieConsent />
      <ChatWidget />
      <AccessibilityWidget />
    </div>
  );
}