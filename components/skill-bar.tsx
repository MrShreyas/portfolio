import React from "react";
import { GradientText } from "./gradient-text";

interface SkillBarProps {
  name: string;
  level: number;
}

export function SkillBar({ name, level }: SkillBarProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-[#9f9fa9] w-24">{name}</span>
      <div className="rounded-full flex-1 h-2 overflow-hidden bg-white/10">
        <div
          className="h-full rounded-full shadow-[0_0_8px_oklch(0.541_0.281_293.009/0.6)] bg-gradient-to-r from-[oklch(0.541_0.281_293.009)] to-[oklch(0.627_0.265_303.9)]"
          style={{ width: `${level}%` }}
        />
      </div>
      <span className="font-mono text-right text-xs text-[#9f9fa9] w-10">
        {level}%
      </span>
    </div>
  );
}
