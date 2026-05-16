"use client";

import React from "react";
import { SkillOrbit } from "./skill-orbit";
import { SkillBar } from "./skill-bar";
import { GlassCard } from "./glass-card";
import { SectionHeader } from "./section-header";
import { SKILLS_DATA } from "@/lib/data";

export function Skills() {
  return (
    <div className="relative bg-zinc-950 text-neutral-50 w-full min-h-screen overflow-hidden py-24 px-6 md:px-12">
      {/* Background Decor */}
      <div className="absolute top-[-200px] left-[-100px] size-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.541_0.281_293.009/0.25),transparent_70%)] blur-[60px] pointer-events-none" />
      <div className="absolute top-[300px] right-[-150px] size-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.627_0.265_303.9/0.22),transparent_70%)] blur-[70px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(oklch(1_0_0/0.04)_1px,transparent_1px),linear-gradient(90deg,oklch(1_0_0/0.04)_1px,transparent_1px)] bg-[length:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader 
          number="03" 
          title="Skills & Expertise" 
          subtitle="Tools, languages &" 
          highlight="superpowers" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Orbit Visual */}
          <div className="lg:col-span-5">
            <SkillOrbit />
          </div>

          {/* Right Column: Skill Groups */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {SKILLS_DATA.map((category) => (
              <GlassCard key={category.title} className="p-5" gradient>
                <div className="flex mb-4 items-center gap-2">
                  <category.icon className="size-4 text-[oklch(0.627_0.265_303.9)]" />
                  <span className="font-mono text-xs tracking-wider uppercase">{category.title}</span>
                </div>
                <div className="flex flex-col gap-4">
                  {category.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
