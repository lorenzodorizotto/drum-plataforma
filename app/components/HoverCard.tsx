"use client";
import { useState } from "react";

export default function HoverCard({
  children,
  style,
  href,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  href?: string;
}) {
  const [hovered, setHovered] = useState(false);

  const baseStyle: React.CSSProperties = {
    ...style,
    borderColor: hovered ? "#D85A30" : "#E0DDD8",
    boxShadow: hovered ? "0 2px 12px rgba(216,90,48,0.08)" : "none",
    transition: "border-color 0.15s, box-shadow 0.15s",
    cursor: "pointer",
  };

  return (
    <div
      style={baseStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
}
