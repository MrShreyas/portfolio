"use client";

import React from "react";
import { GitCommitHorizontal, MapPin, Briefcase } from "lucide-react";
import { GlassCard } from "./glass-card";
import { GradientText } from "./gradient-text";
import { SectionHeader } from "./section-header";
import { Badge } from "@/components/ui/badge";
import { TIMELINE_DATA, STATS_DATA } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function About() {
  return (
    <div id="about"  className="relative bg-zinc-950 text-neutral-50 w-full min-h-screen py-24 px-6 md:px-12">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,oklch(0.541_0.281_293.009/0.2),transparent_40%),radial-gradient(circle_at_85%_30%,oklch(0.627_0.265_303.9/0.15),transparent_45%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(oklch(0.985_0_0/0.02)_1px,transparent_1px),linear-gradient(90deg,oklch(0.985_0_0/0.02)_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <SectionHeader 
          number="01" 
          title="About Me" 
          subtitle="Crafting" 
          highlight="digital experiences" 
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Profile Card */}
          <div className="lg:col-span-5">
            <GlassCard className="p-8 flex flex-col items-center text-center gap-6" gradient>
              <div className="relative">
                <div className="absolute inset-0 blur-xl opacity-60 rounded-full bg-gradient-to-br from-[oklch(0.541_0.281_293.009)] to-[oklch(0.627_0.265_303.9)]" />
                <div className="relative rounded-full p-1 bg-gradient-to-br from-[oklch(0.541_0.281_293.009)] to-[oklch(0.627_0.265_303.9)]">
                  <div className="rounded-full p-1 bg-zinc-950">
                    <img
                      src="/profile.jpg"
                      alt="Shreyas Katalkar"
                      className="size-32 scale object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="absolute -right-1 -bottom-1 size-6 rounded-full border-4 border-zinc-900 bg-[oklch(0.696_0.17_162.48)] flex items-center justify-center">
                  <div className="size-2 animate-pulse rounded-full bg-white" />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-2xl">Shreyas Katalkar</h3>
                <p className="font-mono text-sm text-[oklch(0.627_0.265_303.9)]">{`<Fullstack Web Developer />`}</p>
              </div>

              <p className="text-[#9f9fa9] text-sm leading-relaxed max-w-sm">
                Passionate developer turning ideas into pixel-perfect, performant web experiences. Always learning, always shipping.
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="rounded-full px-3 py-1 gap-1.5 border-white/10 bg-white/5">
                  <MapPin className="size-3 text-[oklch(0.627_0.265_303.9)]" />
                  <span className="font-normal text-xs">Hyderabad, IN</span>
                </Badge>
                <Badge variant="outline" className="rounded-full px-3 py-1 gap-1.5 border-[oklch(0.696_0.17_162.48)/0.3] bg-[oklch(0.696_0.17_162.48)/0.1] text-[oklch(0.696_0.17_162.48)]">
                  <div className="size-1.5 animate-pulse rounded-full bg-[oklch(0.696_0.17_162.48)]" />
                  <span className="font-normal text-xs">Available</span>
                </Badge>
              </div>
            </GlassCard>
          </div>

          {/* Journey Timeline */}
          <div className="lg:col-span-7">
            <GlassCard className="p-8 h-full" gradient>
              <div className="flex items-center gap-2 mb-2">
                <GitCommitHorizontal className="size-4 text-[oklch(0.627_0.265_303.9)]" />
                <span className="font-mono text-xs tracking-wider text-[#9f9fa9]">JOURNEY.LOG</span>
              </div>
              <h3 className="font-semibold text-lg mb-8">My timeline so far</h3>

              <div className="relative pl-2">
                <div className="absolute left-2 inset-y-2 w-px bg-gradient-to-b from-[oklch(0.541_0.281_293.009)] via-[oklch(0.627_0.265_303.9)] to-transparent" />
                
                <div className="flex flex-col gap-8">
                  {TIMELINE_DATA.map((item, idx) => (
                    <div key={idx} className="relative pl-10">
                      <div 
                        className={cn(
                          "absolute left-0 top-1.5 size-4 rounded-full flex items-center justify-center -translate-x-1/2",
                          item.isCurrent ? "bg-[oklch(0.541_0.281_293.009)] shadow-[0_0_16px_oklch(0.541_0.281_293.009)]" : "bg-zinc-800 border border-white/10"
                        )}
                      >
                        <div className={cn("size-1.5 rounded-full", item.isCurrent ? "bg-white" : "bg-[#9f9fa9]")} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs bg-white/5 text-[oklch(0.627_0.265_303.9)] px-2 py-0.5 rounded">
                            {item.year}
                          </span>
                          {item.isCurrent && (
                            <Badge variant="outline" className="text-[10px] h-5 border-[oklch(0.696_0.17_162.48)/0.3] text-[oklch(0.696_0.17_162.48)]">
                              Current
                            </Badge>
                          )}
                        </div>
                        <h4 className="font-semibold text-neutral-50">{item.title}</h4>
                        <p className="text-sm text-[#9f9fa9] leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {STATS_DATA.map((stat, idx) => (
            <GlassCard key={idx} className="p-6 flex flex-col gap-3 group hover:border-white/20 transition-colors">
              <div className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <stat.icon className="size-5" style={{ color: stat.color }} />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <GradientText className="text-3xl font-bold">{stat.value}</GradientText>
                </div>
                <span className="text-xs text-[#9f9fa9] uppercase tracking-wider">{stat.label}</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
