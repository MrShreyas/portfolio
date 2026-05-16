import React from "react";
import { GradientText } from "./gradient-text";

interface SectionHeaderProps {
  number?: string;
  title: string;
  subtitle?: string;
  highlight?: string;
}

export function SectionHeader({ number, title, subtitle, highlight }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-4 mb-12">
      {number && (
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs tracking-widest text-[#9f9fa9]">
            // {number} — {title.toUpperCase()}
          </span>
          <div 
            className="max-w-32 flex-1 h-px" 
            style={{ 
              background: "linear-gradient(90deg, oklch(0.541 0.281 293.009), transparent)" 
            }} 
          />
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-50">
        {subtitle || title}
        {highlight && (
          <>
            {" "}
            <GradientText>{highlight}</GradientText>
          </>
        )}
      </h2>
    </div>
  );
}
