import React from "react";

// Stylized SVG thumbnails so we don't depend on external images.
type ThumbProps = {
  variant:
    | "coding"
    | "design"
    | "ai"
    | "business"
    | "math"
    | "physics"
    | "language"
    | "productivity";
  className?: string;
  rounded?: string;
  children?: React.ReactNode;
};

const PALETTES: Record<ThumbProps["variant"], { from: string; via: string; to: string; icon: React.ReactNode; label: string }> = {
  coding: {
    from: "#1e3a8a",
    via: "#3b82f6",
    to: "#0ea5e9",
    label: "</>",
    icon: (
      <text x="50%" y="58%" textAnchor="middle" fontSize="56" fontFamily="JetBrains Mono" fontWeight="700" fill="rgba(255,255,255,0.92)">
        {"</>"}
      </text>
    ),
  },
  design: {
    from: "#7c3aed",
    via: "#ec4899",
    to: "#f59e0b",
    label: "◐",
    icon: (
      <g>
        <circle cx="40%" cy="50%" r="28" fill="rgba(255,255,255,0.9)" />
        <circle cx="60%" cy="50%" r="28" fill="rgba(255,255,255,0.45)" />
      </g>
    ),
  },
  ai: {
    from: "#0f172a",
    via: "#4f46e5",
    to: "#06b6d4",
    label: "AI",
    icon: (
      <g>
        <circle cx="50%" cy="50%" r="34" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
        <circle cx="50%" cy="50%" r="22" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="2" />
        <circle cx="50%" cy="50%" r="6" fill="white" />
      </g>
    ),
  },
  business: {
    from: "#064e3b",
    via: "#059669",
    to: "#84cc16",
    label: "$",
    icon: (
      <g>
        <rect x="30%" y="55%" width="14" height="22" fill="rgba(255,255,255,0.9)" rx="2" />
        <rect x="45%" y="42%" width="14" height="35" fill="rgba(255,255,255,0.95)" rx="2" />
        <rect x="60%" y="30%" width="14" height="47" fill="white" rx="2" />
      </g>
    ),
  },
  math: {
    from: "#831843",
    via: "#be123c",
    to: "#f97316",
    label: "∑",
    icon: (
      <text x="50%" y="62%" textAnchor="middle" fontSize="72" fontWeight="600" fill="rgba(255,255,255,0.95)">
        ∑
      </text>
    ),
  },
  physics: {
    from: "#0c4a6e",
    via: "#0891b2",
    to: "#10b981",
    label: "⚛",
    icon: (
      <g transform="translate(0,4)">
        <ellipse cx="50%" cy="50%" rx="42" ry="16" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="2" />
        <ellipse cx="50%" cy="50%" rx="42" ry="16" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="2" transform="rotate(60 90 60)" />
        <ellipse cx="50%" cy="50%" rx="42" ry="16" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="2" transform="rotate(120 90 60)" />
        <circle cx="50%" cy="50%" r="5" fill="white" />
      </g>
    ),
  },
  language: {
    from: "#312e81",
    via: "#6366f1",
    to: "#a78bfa",
    label: "文A",
    icon: (
      <text x="50%" y="60%" textAnchor="middle" fontSize="44" fontWeight="700" fill="rgba(255,255,255,0.95)">
        文 / A
      </text>
    ),
  },
  productivity: {
    from: "#7c2d12",
    via: "#ea580c",
    to: "#facc15",
    label: "✓",
    icon: (
      <g>
        <rect x="32%" y="32%" width="50" height="50" rx="8" fill="none" stroke="white" strokeWidth="3" />
        <path d="M58 60 L70 72 L92 50" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    ),
  },
};

export function Thumb({ variant, className = "", rounded = "rounded-xl", children }: ThumbProps) {
  const p = PALETTES[variant];
  return (
    <div
      className={`relative overflow-hidden ${rounded} ${className}`}
      style={{
        background: `linear-gradient(135deg, ${p.from} 0%, ${p.via} 55%, ${p.to} 100%)`,
      }}
    >
      <svg viewBox="0 0 180 120" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full opacity-90">
        {/* abstract grain */}
        <defs>
          <radialGradient id={`g-${variant}`} cx="20%" cy="20%" r="80%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
        </defs>
        <rect width="180" height="120" fill={`url(#g-${variant})`} />
        {p.icon}
      </svg>
      {children}
    </div>
  );
}
