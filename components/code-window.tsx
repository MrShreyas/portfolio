import React from "react";
import { GlassCard } from "./glass-card";

interface CodeWindowProps {
  filename: string;
  data: Record<string, any>;
}

export function CodeWindow({ filename, data }: CodeWindowProps) {
  return (
    <GlassCard className="p-1 rounded-3xl" gradient>
      <div className="bg-zinc-950 rounded-[22px] overflow-hidden">
        {/* Header */}
        <div className="flex px-4 py-3 items-center gap-2 border-b border-white/10">
          <span className="size-3 rounded-full bg-[oklch(0.704_0.191_22.216)]" />
          <span className="size-3 rounded-full bg-[oklch(0.769_0.188_70.08)]" />
          <span className="size-3 rounded-full bg-[oklch(0.696_0.17_162.48)]" />
          <span className="font-mono text-[#9f9fa9] text-xs ml-3">
            {filename}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 font-mono text-[13px] leading-relaxed">
          <div className="flex gap-4">
            <span className="select-none text-[#9f9fa9] w-4 text-right">1</span>
            <span className="text-neutral-50">
              <span className="text-[oklch(0.627_0.265_303.9)]">const</span>{" "}
              <span className="text-[oklch(0.696_0.17_162.48)]">developer</span> = {"{"}
            </span>
          </div>
          {Object.entries(data).map(([key, value], idx) => (
            <div key={key} className="flex gap-4">
              <span className="select-none text-[#9f9fa9] w-4 text-right">{idx + 2}</span>
              <span className="pl-4 text-neutral-50">
                <span className="text-[oklch(0.769_0.188_70.08)]">{key}</span>:{" "}
                <span className="text-[oklch(0.645_0.246_16.439)]">
                  {typeof value === "string" ? `'${value}'` : JSON.stringify(value)}
                </span>
                ,
              </span>
            </div>
          ))}
          <div className="flex gap-4">
            <span className="select-none text-[#9f9fa9] w-4 text-right">
              {Object.keys(data).length + 2}
            </span>
            <span className="text-neutral-50">{"}"};</span>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
