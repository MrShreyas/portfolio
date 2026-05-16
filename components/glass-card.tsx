import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
  blur?: "sm" | "md" | "lg" | "xl" | "2xl";
}

export function GlassCard({ 
  children, 
  className, 
  gradient = false,
  blur = "xl"
}: GlassCardProps) {
  const blurClasses = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl",
    "2xl": "backdrop-blur-2xl",
  };

  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 overflow-hidden",
        blurClasses[blur],
        gradient && "bg-gradient-to-br from-white/5 to-white/[0.02]",
        !gradient && "bg-zinc-900/50",
        className
      )}
      style={{
        backgroundColor: !gradient ? "oklch(0.21 0.006 285.885 / 0.5)" : undefined,
      }}
    >
      {children}
    </div>
  );
}
