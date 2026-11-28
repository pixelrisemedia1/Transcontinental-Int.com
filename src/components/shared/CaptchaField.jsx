import React, { useState, useCallback, useRef } from "react";
import { ShieldCheck, RefreshCw } from "lucide-react";

const TRACK_WIDTH = 260;
const THUMB_SIZE = 44;
const TARGET = TRACK_WIDTH - THUMB_SIZE; // must slide all the way to the right

export default function CaptchaField({ onVerify }) {
  const [pos, setPos] = useState(0);
  const [verified, setVerified] = useState(false);
  const [dragging, setDragging] = useState(false);
  const startXRef = useRef(null);
  const startPosRef = useRef(0);

  const reset = useCallback(() => {
    setPos(0);
    setVerified(false);
    setDragging(false);
    onVerify(false);
  }, [onVerify]);

  // ── Pointer events (works on mobile + desktop) ──────────────────────────
  const onPointerDown = (e) => {
    if (verified) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    startXRef.current = e.clientX;
    startPosRef.current = pos;
  };

  const onPointerMove = (e) => {
    if (!dragging || verified) return;
    const delta = e.clientX - startXRef.current;
    const newPos = Math.min(TARGET, Math.max(0, startPosRef.current + delta));
    setPos(newPos);
    if (newPos >= TARGET - 4) {
      setPos(TARGET);
      setVerified(true);
      onVerify(true);
    }
  };

  const onPointerUp = (e) => {
    if (!dragging) return;
    setDragging(false);
    if (!verified) {
      // snap back
      setPos(0);
    }
  };

  const pct = pos / TARGET;

  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className={`w-4 h-4 ${verified ? "text-green-500" : "text-gray-400"}`} />
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Verification
          </span>
        </div>
        {verified ? (
          <span className="text-xs font-medium text-green-600 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
            ✓ Verified
          </span>
        ) : (
          <button
            type="button"
            onClick={reset}
            className="p-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
            title="Reset"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Slider track */}
      <div
        style={{ width: TRACK_WIDTH, height: THUMB_SIZE, position: "relative", userSelect: "none" }}
        className="rounded-full border border-gray-200 bg-white shadow-inner overflow-hidden mx-auto"
      >
        {/* Fill */}
        <div
          style={{
            position: "absolute", left: 0, top: 0, bottom: 0,
            width: pos + THUMB_SIZE / 2,
            background: verified
              ? "linear-gradient(90deg,#22c55e,#16a34a)"
              : "linear-gradient(90deg,#06b6d4,#0ea5e9)",
            transition: dragging ? "none" : "width 0.3s ease",
            borderRadius: "inherit",
          }}
        />

        {/* Label */}
        <div
          style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              fontSize: "12px", fontWeight: 600, letterSpacing: "0.04em",
              color: pct > 0.4 ? "white" : "#94a3b8",
              transition: "color 0.2s",
            }}
          >
            {verified ? "Access granted" : "Slide to verify →"}
          </span>
        </div>

        {/* Thumb */}
        <div
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          style={{
            position: "absolute",
            left: pos,
            top: 0,
            width: THUMB_SIZE,
            height: THUMB_SIZE,
            background: verified ? "#16a34a" : "white",
            borderRadius: "50%",
            boxShadow: dragging
              ? "0 4px 16px rgba(6,182,212,0.4)"
              : "0 2px 8px rgba(0,0,0,0.15)",
            cursor: verified ? "default" : "grab",
            display: "flex", alignItems: "center", justifyContent: "center",
            border: verified ? "none" : "2px solid #e2e8f0",
            transition: dragging ? "none" : "left 0.3s ease, background 0.3s ease, box-shadow 0.2s",
            zIndex: 2,
            touchAction: "none",
          }}
        >
          {verified ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          )}
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-2 text-center">Drag the slider to the right to continue</p>
    </div>
  );
}