"use client";

import React from "react";
import { ArrowRight, MapPin, Briefcase, Atom, Triangle, FileType, Wind, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "./navbar";
import { CodeWindow } from "./code-window";
import { GlassCard } from "./glass-card";
import { GradientText } from "./gradient-text";
import { HERO_DATA } from "@/lib/data";

const TECH_ICONS = [
  { icon: Atom, label: "React", color: "oklch(0.696 0.17 162.48)" },
  { icon: Triangle, label: "Next.js", color: "oklch(0.985 0 0)" },
  { icon: FileType, label: "TypeScript", color: "oklch(0.488 0.243 264.376)" },
  { icon: Wind, label: "Tailwind", color: "oklch(0.696 0.17 162.48)" },
  { icon: Server, label: "Node.js", color: "oklch(0.769 0.188 70.08)" },
];

export function Hero() {
  return (
    <div className="relative bg-zinc-950 text-neutral-50 w-full min-h-screen overflow-hidden font-inter">
      {/* Background Gradients */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(600px circle at 15% 10%, oklch(0.541 0.281 293.009 / 0.25), transparent 50%), radial-gradient(500px circle at 85% 30%, oklch(0.627 0.265 303.9 / 0.18), transparent 55%), radial-gradient(700px circle at 50% 90%, oklch(0.488 0.243 264.376 / 0.15), transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none opacity-5 absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.985 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.985 0 0) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <Navbar />

      <main className="relative z-10 px-6 md:px-12 py-12 max-w-7xl mx-auto">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="inline-flex backdrop-blur-xl rounded-full text-[#9f9fa9] text-xs border border-white/10 px-4 py-1.5 self-start items-center gap-2 bg-zinc-900/50">
              <span className="size-2 rounded-full bg-[oklch(0.696_0.17_162.48)] shadow-[0_0_12px_oklch(0.696_0.17_162.48)]" />
              {HERO_DATA.status}
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-mono text-[#9f9fa9] text-sm">{`<hello world="true" />`}</p>
              <h1 className="font-bold text-5xl md:text-7xl tracking-tight leading-tight">
                {HERO_DATA.name}{" "}
                <GradientText>{HERO_DATA.surname}</GradientText>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-[#9f9fa9] flex items-center">
                {HERO_DATA.role}
                <span className="inline-block w-2 h-8 ml-2 bg-[oklch(0.541_0.281_293.009)]" />
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-relaxed text-[#9f9fa9]">
              {HERO_DATA.description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button className="rounded-full px-8 h-12 gap-2 bg-gradient-to-br from-[oklch(0.541_0.281_293.009)] to-[oklch(0.627_0.265_303.9)] hover:opacity-90">
                Explore My Work
                <ArrowRight className="size-4" />
              </Button>
              <Button variant="outline" className="rounded-full px-8 h-12 border-white/10 bg-zinc-900/50 backdrop-blur-xl">
                GitHub
              </Button>
              <Button variant="outline" className="rounded-full px-8 h-12 border-white/10 bg-zinc-900/50 backdrop-blur-xl">
                LinkedIn
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {HERO_DATA.stats.map((stat) => (
                <GlassCard key={stat.label} className="p-4" blur="xl">
                  <GradientText className="text-2xl font-bold">{stat.value}</GradientText>
                  <div className="text-[#9f9fa9] text-xs mt-1 uppercase tracking-wider">{stat.label}</div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <CodeWindow 
              filename={HERO_DATA.codeSnippet.filename} 
              data={HERO_DATA.codeSnippet.content} 
            />

            <div className="grid grid-cols-2 gap-4">
              <GlassCard className="p-4 flex items-center gap-4">
                <div className="size-10 rounded-xl bg-[oklch(0.541_0.281_293.009)/0.2] flex items-center justify-center">
                  <MapPin className="size-5 text-[#7f22fe]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#9f9fa9] text-xs">Based in</span>
                  <span className="font-medium text-sm">{HERO_DATA.location}</span>
                </div>
              </GlassCard>
              <GlassCard className="p-4 flex items-center gap-4">
                <div className="size-10 rounded-xl bg-[oklch(0.696_0.17_162.48)/0.2] flex items-center justify-center">
                  <Briefcase className="size-5 text-[oklch(0.696_0.17_162.48)]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#9f9fa9] text-xs">Status</span>
                  <span className="font-medium text-sm">Open to work</span>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Tech Stack Bar */}
        <section className="mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="flex flex-col gap-2">
              <span className="font-mono uppercase text-[#7f22fe] text-xs tracking-widest">// tech stack</span>
              <h3 className="font-bold text-3xl">Tools I work with</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {TECH_ICONS.map((tech) => (
              <GlassCard key={tech.label} className="p-6 flex flex-col items-center gap-3 hover:border-white/20 transition-colors group">
                <tech.icon className="size-8 transition-transform group-hover:scale-110" style={{ color: tech.color }} />
                <span className="font-medium text-xs text-[#9f9fa9]">{tech.label}</span>
              </GlassCard>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
