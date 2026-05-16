import React from "react";
import { Atom, Triangle, Braces, Server, Wind, Database, GitBranch } from "lucide-react";
export function SkillOrbit() {

  return (
    <div className="relative rounded-2xl border border-white/10 p-6 h-[420px] overflow-hidden bg-zinc-900/50 backdrop-blur-xl">
      {/* Orbital Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-dashed border-white/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[270px] h-[270px] rounded-full border border-dashed border-white/15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] rounded-full border border-dashed border-white/20" />

      {/* Center Stack */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px] rounded-full bg-gradient-to-br from-[oklch(0.541_0.281_293.009)] to-[oklch(0.627_0.265_303.9)] shadow-[0_0_60px_oklch(0.541_0.281_293.009/0.7)] flex items-center justify-center">
        <span className="font-mono font-bold text-violet-50 text-xs tracking-widest">STACK</span>
      </div>

      {/* Floating Icons - Simplified positioning with absolute values for accuracy */}
      <OrbitIcon Icon={Atom} color="oklch(0.696 0.17 162.48)" top="calc(50% - 100px)" left="calc(50% - 100px)" />
      <OrbitIcon Icon={Triangle} color="white" top="calc(50% + 80px)" left="calc(50% + 100px)" />
      <OrbitIcon Icon={Braces} color="oklch(0.488 0.243 264.376)" top="calc(50% - 140px)" left="calc(50% + 40px)" />
      <OrbitIcon Icon={Server} color="oklch(0.769 0.188 70.08)" top="calc(50% + 40px)" left="calc(50% - 140px)" />
      <OrbitIcon Icon={Wind} color="oklch(0.696 0.17 162.48)" top="calc(50% - 40px)" left="calc(50% + 150px)" />
      <OrbitIcon Icon={Database} color="oklch(0.696 0.17 162.48)" top="calc(50% + 160px)" left="calc(50% - 60px)" />
      <OrbitIcon Icon={GitBranch} color="oklch(0.645 0.246 16.439)" top="calc(50% + 100px)" left="calc(50% + 160px)" />
      
      <div className="absolute bottom-4 left-4 flex items-center gap-2">
        <div className="size-1.5 rounded-full bg-[oklch(0.696_0.17_162.48)] shadow-[0_0_8px_oklch(0.696_0.17_162.48)]" />
        <span className="font-mono text-xs text-[#9f9fa9]">orbit.live</span>
      </div>
    </div>
  );
}

function OrbitIcon({ Icon, color, top, left }: any) {
  return (
    <div
      className="absolute size-11 rounded-full bg-zinc-900/80 border border-white/15 backdrop-blur-md flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-110 cursor-pointer"
      style={{ top, left }}
    >
      <Icon className="size-5" style={{ color }} />
    </div>
  );
}
