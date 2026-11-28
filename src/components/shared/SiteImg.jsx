/**
 * SiteImg — renders images with a fallback URL.
 * Usage: <SiteImg imageKey="sea_freight_1" fallback="https://..." alt="..." className="..." />
 */
import React, { useState } from "react";

export default function SiteImg({ imageKey, alt = "", className = "", fallback = "" }) {
  const [broken, setBroken] = useState(false);

  if (broken || !fallback) return null;

  return (
    <img
      src={fallback}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setBroken(true)}
    />
  );
}