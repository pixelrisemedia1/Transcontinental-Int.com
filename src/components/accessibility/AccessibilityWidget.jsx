import React, { useState, useEffect } from "react";
import { Eye, X, RotateCcw } from "lucide-react";

const DEFAULTS = {
  fontSize: 100,
  fontFamily: "default",
  bold: false,
  italic: false,
  underlineLinks: false,
  lineHeight: 1,
  letterSpacing: 0,
  wordSpacing: 0,
  highContrast: false,
  invertColors: false,
  darkMode: false,
  colorBlind: "none",
  grayscale: false,
  saturation: 100,
  highlightLinks: false,
  highlightFocus: false,
  readingMask: false,
  readingGuide: false,
  bigCursor: false,
  hideImages: false,
  stopAnimations: false,
  dyslexiaFont: false,
  textAlign: "default",
  muted: false,
  zoom: 100,
  pageStructure: false,
};

const FONT_FAMILIES = ["default", "Arial", "Georgia", "Verdana", "Tahoma", "Comic Sans MS", "Courier New"];
const COLOR_BLIND_MODES = [
  { value: "none", label: "None" },
  { value: "protanopia", label: "Protanopia" },
  { value: "deuteranopia", label: "Deuteranopia" },
  { value: "tritanopia", label: "Tritanopia" },
  { value: "achromatopsia", label: "Achromatopsia" },
];

const COLOR_BLIND_FILTERS = {
  none: "",
  protanopia: "url(#protanopia)",
  deuteranopia: "url(#deuteranopia)",
  tritanopia: "url(#tritanopia)",
  achromatopsia: "grayscale(100%)",
};

function applyPrefs(prefs) {
  const root = document.documentElement;
  const body = document.body;

  // Font size
  root.style.fontSize = prefs.fontSize !== 100 ? `${prefs.fontSize}%` : "";

  // Font family
  if (prefs.dyslexiaFont) {
    body.style.fontFamily = "'Comic Sans MS', sans-serif";
  } else if (prefs.fontFamily !== "default") {
    body.style.fontFamily = `'${prefs.fontFamily}', sans-serif`;
  } else {
    body.style.fontFamily = "";
  }

  // Text styles
  body.style.fontWeight = prefs.bold ? "bold" : "";
  body.style.fontStyle = prefs.italic ? "italic" : "";
  body.style.lineHeight = prefs.lineHeight !== 1 ? String(1.5 + prefs.lineHeight * 0.5) : "";
  body.style.letterSpacing = prefs.letterSpacing !== 0 ? `${prefs.letterSpacing}px` : "";
  body.style.wordSpacing = prefs.wordSpacing !== 0 ? `${prefs.wordSpacing}px` : "";
  body.style.textAlign = prefs.textAlign !== "default" ? prefs.textAlign : "";

  // Zoom
  body.style.zoom = prefs.zoom !== 100 ? `${prefs.zoom}%` : "";

  // Filters
  const filters = [];
  if (prefs.grayscale) filters.push("grayscale(100%)");
  if (prefs.invertColors) filters.push("invert(100%)");
  if (prefs.saturation !== 100) filters.push(`saturate(${prefs.saturation}%)`);
  if (prefs.colorBlind !== "none" && COLOR_BLIND_FILTERS[prefs.colorBlind] && !COLOR_BLIND_FILTERS[prefs.colorBlind].startsWith("url")) {
    filters.push(COLOR_BLIND_FILTERS[prefs.colorBlind]);
  }
  body.style.filter = filters.length ? filters.join(" ") : "";

  // Classes
  const classes = ["high-contrast-mode", "dark-mode-a11y", "highlight-links-mode", "highlight-focus-mode", "big-cursor-mode", "hide-images-mode", "stop-animations-mode", "underline-links-mode"];
  classes.forEach(c => body.classList.remove(c));
  if (prefs.highContrast) body.classList.add("high-contrast-mode");
  if (prefs.darkMode) body.classList.add("dark-mode-a11y");
  if (prefs.highlightLinks) body.classList.add("highlight-links-mode");
  if (prefs.highlightFocus) body.classList.add("highlight-focus-mode");
  if (prefs.bigCursor) body.classList.add("big-cursor-mode");
  if (prefs.hideImages) body.classList.add("hide-images-mode");
  if (prefs.stopAnimations) body.classList.add("stop-animations-mode");
  if (prefs.underlineLinks) body.classList.add("underline-links-mode");
}

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [prefs, setPrefs] = useState(() => {
    try {
      const saved = localStorage.getItem("a11y_prefs_v2");
      return saved ? { ...DEFAULTS, ...JSON.parse(saved) } : { ...DEFAULTS };
    } catch { return { ...DEFAULTS }; }
  });

  useEffect(() => {
    applyPrefs(prefs);
    localStorage.setItem("a11y_prefs_v2", JSON.stringify(prefs));
  }, [prefs]);

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener("openAccessibility", handler);
    return () => window.removeEventListener("openAccessibility", handler);
  }, []);

  const set = (key, val) => setPrefs(p => ({ ...p, [key]: val }));
  const toggle = (key) => setPrefs(p => ({ ...p, [key]: !p[key] }));
  const reset = () => setPrefs({ ...DEFAULTS });

  const ToggleBtn = ({ label, active, onClick, color = "#06b6d4" }) => (
    <button
      onClick={onClick}
      style={{
        padding: "7px 10px", borderRadius: "8px", fontSize: "11px", fontWeight: "600",
        cursor: "pointer", border: `1.5px solid ${active ? color : "#e2e8f0"}`,
        background: active ? `${color}18` : "white",
        color: active ? color : "#64748b",
        transition: "all 0.15s", textAlign: "left", lineHeight: 1.3,
      }}
    >
      {label}
    </button>
  );

  const SliderRow = ({ label, value, min, max, step = 1, onChange, display }) => (
    <div style={{ marginBottom: "10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
        <span style={{ fontSize: "11px", color: "#64748b", fontWeight: "600" }}>{label}</span>
        <span style={{ fontSize: "11px", color: "#0ea5e9", fontWeight: "700" }}>{display || value}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        style={{ width: "100%", accentColor: "#06b6d4", cursor: "pointer" }}
      />
    </div>
  );

  return (
    <>
      <style>{`
        .high-contrast-mode { background: #000 !important; color: #fff !important; }
        .high-contrast-mode * { background-color: #000 !important; color: #fff !important; border-color: #fff !important; }
        .dark-mode-a11y { filter: invert(1) hue-rotate(180deg); }
        .dark-mode-a11y img, .dark-mode-a11y video { filter: invert(1) hue-rotate(180deg); }
        .highlight-links-mode a { background: #ffff00 !important; color: #000 !important; text-decoration: underline !important; padding: 0 2px; }
        .highlight-focus-mode *:focus { outline: 3px solid #ff6600 !important; outline-offset: 3px !important; }
        .big-cursor-mode, .big-cursor-mode * { cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M4 0l16 12-7 1-4 9z'/%3E%3C/svg%3E") 0 0, auto !important; }
        .hide-images-mode img { visibility: hidden !important; }
        .stop-animations-mode *, .stop-animations-mode *::before, .stop-animations-mode *::after { animation: none !important; transition: none !important; }
        .underline-links-mode a { text-decoration: underline !important; }
        .a11y-panel::-webkit-scrollbar { width: 4px; }
        .a11y-panel::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
      `}</style>

      {/* SVG filters for color blindness */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id="protanopia"><feColorMatrix type="matrix" values="0.567,0.433,0,0,0 0.558,0.442,0,0,0 0,0.242,0.758,0,0 0,0,0,1,0"/></filter>
          <filter id="deuteranopia"><feColorMatrix type="matrix" values="0.625,0.375,0,0,0 0.7,0.3,0,0,0 0,0.3,0.7,0,0 0,0,0,1,0"/></filter>
          <filter id="tritanopia"><feColorMatrix type="matrix" values="0.95,0.05,0,0,0 0,0.433,0.567,0,0 0,0.475,0.525,0,0 0,0,0,1,0"/></filter>
        </defs>
      </svg>

      {/* Eye button — top right */}
      <button
        onClick={() => setIsOpen(v => !v)}
        aria-label="Accessibility settings"
        style={{
          position: "fixed", top: "140px", right: "0px", zIndex: 99998,
          width: "42px", height: "42px",
          background: isOpen ? "#0f172a" : "linear-gradient(135deg,#0ea5e9,#06b6d4)",
          border: "none", borderRadius: "10px 0 0 10px",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", boxShadow: "-2px 2px 12px rgba(6,182,212,0.35)",
          transition: "background 0.2s",
        }}
      >
        <Eye style={{ width: "20px", height: "20px", color: "white" }} />
      </button>

      {/* Panel */}
      {isOpen && (
        <div
          className="a11y-panel"
          style={{
            position: "fixed", top: "140px", right: "42px", zIndex: 99997,
            width: "300px", maxHeight: "calc(100vh - 170px)",
            background: "white", borderRadius: "14px 0 0 14px",
            boxShadow: "-8px 4px 40px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.06)",
            overflowY: "auto", display: "flex", flexDirection: "column",
          }}
        >
          {/* Header */}
          <div style={{ background: "linear-gradient(135deg,#0f172a,#1e3a5f)", padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0, borderRadius: "14px 0 0 0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Eye style={{ width: "16px", height: "16px", color: "#22d3ee" }} />
              <span style={{ color: "white", fontSize: "14px", fontWeight: "700" }}>Accessibility</span>
            </div>
            <div style={{ display: "flex", gap: "6px" }}>
              <button onClick={reset} title="Reset all" style={{ background: "rgba(255,255,255,0.1)", border: "none", cursor: "pointer", padding: "5px", borderRadius: "6px", display: "flex", color: "#94a3b8" }}>
                <RotateCcw style={{ width: "13px", height: "13px" }} />
              </button>
              <button onClick={() => setIsOpen(false)} style={{ background: "rgba(255,255,255,0.1)", border: "none", cursor: "pointer", padding: "5px", borderRadius: "6px", display: "flex", color: "#94a3b8" }}>
                <X style={{ width: "13px", height: "13px" }} />
              </button>
            </div>
          </div>

          <div style={{ padding: "14px 14px", display: "flex", flexDirection: "column", gap: "16px" }}>

            {/* Text Size & Zoom */}
            <div>
              <p style={{ fontSize: "10px", fontWeight: "800", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>Text & Display</p>
              <SliderRow label="Font Size" value={prefs.fontSize} min={75} max={175} step={5} onChange={v => set("fontSize", v)} display={`${prefs.fontSize}%`} />
              <SliderRow label="Zoom" value={prefs.zoom} min={75} max={150} step={5} onChange={v => set("zoom", v)} display={`${prefs.zoom}%`} />
              <SliderRow label="Line Height" value={prefs.lineHeight} min={0} max={4} step={1} onChange={v => set("lineHeight", v)} display={["Default","1.5×","2×","2.5×","3×"][prefs.lineHeight]} />
              <SliderRow label="Letter Spacing" value={prefs.letterSpacing} min={0} max={5} step={1} onChange={v => set("letterSpacing", v)} display={prefs.letterSpacing === 0 ? "Default" : `+${prefs.letterSpacing}px`} />
              <SliderRow label="Word Spacing" value={prefs.wordSpacing} min={0} max={10} step={1} onChange={v => set("wordSpacing", v)} display={prefs.wordSpacing === 0 ? "Default" : `+${prefs.wordSpacing}px`} />
            </div>

            {/* Font Family */}
            <div>
              <p style={{ fontSize: "10px", fontWeight: "800", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>Font Family</p>
              <select
                value={prefs.dyslexiaFont ? "dyslexia" : prefs.fontFamily}
                onChange={e => {
                  if (e.target.value === "dyslexia") { set("dyslexiaFont", true); set("fontFamily", "default"); }
                  else { set("dyslexiaFont", false); set("fontFamily", e.target.value); }
                }}
                style={{ width: "100%", padding: "7px 10px", borderRadius: "8px", border: "1.5px solid #e2e8f0", fontSize: "12px", color: "#1e293b", background: "white", cursor: "pointer" }}
              >
                <option value="default">Default</option>
                {FONT_FAMILIES.filter(f => f !== "default").map(f => <option key={f} value={f}>{f}</option>)}
                <option value="dyslexia">Dyslexia Friendly</option>
              </select>
            </div>

            {/* Text Alignment */}
            <div>
              <p style={{ fontSize: "10px", fontWeight: "800", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>Text Alignment</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "5px" }}>
                {["default","left","center","right"].map(a => (
                  <button key={a} onClick={() => set("textAlign", a)}
                    style={{ padding: "6px", borderRadius: "7px", fontSize: "11px", fontWeight: "600", cursor: "pointer",
                      border: `1.5px solid ${prefs.textAlign === a ? "#06b6d4" : "#e2e8f0"}`,
                      background: prefs.textAlign === a ? "#06b6d418" : "white",
                      color: prefs.textAlign === a ? "#06b6d4" : "#64748b" }}>
                    {a === "default" ? "Auto" : a.charAt(0).toUpperCase() + a.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Text Styles */}
            <div>
              <p style={{ fontSize: "10px", fontWeight: "800", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>Text Style</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                <ToggleBtn label="Bold Text" active={prefs.bold} onClick={() => toggle("bold")} />
                <ToggleBtn label="Italic Text" active={prefs.italic} onClick={() => toggle("italic")} />
                <ToggleBtn label="Underline Links" active={prefs.underlineLinks} onClick={() => toggle("underlineLinks")} />
                <ToggleBtn label="Highlight Links" active={prefs.highlightLinks} onClick={() => toggle("highlightLinks")} color="#f59e0b" />
              </div>
            </div>

            {/* Color & Contrast */}
            <div>
              <p style={{ fontSize: "10px", fontWeight: "800", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>Color & Contrast</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginBottom: "8px" }}>
                <ToggleBtn label="High Contrast" active={prefs.highContrast} onClick={() => toggle("highContrast")} color="#6366f1" />
                <ToggleBtn label="Dark Mode" active={prefs.darkMode} onClick={() => toggle("darkMode")} color="#8b5cf6" />
                <ToggleBtn label="Invert Colors" active={prefs.invertColors} onClick={() => toggle("invertColors")} color="#ec4899" />
                <ToggleBtn label="Grayscale" active={prefs.grayscale} onClick={() => toggle("grayscale")} color="#64748b" />
              </div>
              <SliderRow label="Saturation" value={prefs.saturation} min={0} max={200} step={10} onChange={v => set("saturation", v)} display={`${prefs.saturation}%`} />
            </div>

            {/* Color Blind Mode */}
            <div>
              <p style={{ fontSize: "10px", fontWeight: "800", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>Color Blind Mode</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                {COLOR_BLIND_MODES.map(m => (
                  <button key={m.value} onClick={() => set("colorBlind", m.value)}
                    style={{ padding: "7px 10px", borderRadius: "8px", fontSize: "11px", fontWeight: "600", cursor: "pointer", textAlign: "left",
                      border: `1.5px solid ${prefs.colorBlind === m.value ? "#06b6d4" : "#e2e8f0"}`,
                      background: prefs.colorBlind === m.value ? "#06b6d418" : "white",
                      color: prefs.colorBlind === m.value ? "#06b6d4" : "#64748b" }}>
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation & Interaction */}
            <div>
              <p style={{ fontSize: "10px", fontWeight: "800", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>Navigation & Interaction</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                <ToggleBtn label="Big Cursor" active={prefs.bigCursor} onClick={() => toggle("bigCursor")} color="#f97316" />
                <ToggleBtn label="Focus Highlight" active={prefs.highlightFocus} onClick={() => toggle("highlightFocus")} color="#f97316" />
                <ToggleBtn label="Stop Animations" active={prefs.stopAnimations} onClick={() => toggle("stopAnimations")} color="#64748b" />
                <ToggleBtn label="Hide Images" active={prefs.hideImages} onClick={() => toggle("hideImages")} color="#64748b" />
              </div>
            </div>

          </div>

          {/* Footer */}
          <div style={{ padding: "10px 14px 14px", borderTop: "1px solid #f1f5f9", marginTop: "auto", flexShrink: 0 }}>
            <button onClick={reset} style={{ width: "100%", padding: "8px", borderRadius: "8px", fontSize: "12px", fontWeight: "600", cursor: "pointer", border: "1.5px solid #e2e8f0", background: "white", color: "#64748b", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
              <RotateCcw style={{ width: "12px", height: "12px" }} /> Reset All Settings
            </button>
          </div>
        </div>
      )}
    </>
  );
}