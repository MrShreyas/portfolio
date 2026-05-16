"use client";

import React, { useState } from "react";
import { ProjectCard } from "./project-card";
import { SectionHeader } from "./section-header";
import { PROJECTS_DATA } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const CATEGORIES = ["All", "Web", "Mobile", "Open Source"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  return (
    <div id="projects" className="relative bg-zinc-950 text-neutral-50 w-full min-h-screen py-24 px-6 md:px-12 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,oklch(0.541_0.281_293.009/0.15),transparent_40%),radial-gradient(circle_at_85%_30%,oklch(0.627_0.265_303.9/0.12),transparent_45%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(oklch(0.985_0_0/0.02)_1px,transparent_1px),linear-gradient(90deg,oklch(0.985_0_0/0.02)_1px,transparent_1px)] bg-[length:48px_48px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
          <SectionHeader 
            number="03" 
            title="Selected Work" 
            subtitle="Projects that tell a" 
            highlight="story" 
          />

          {/* Category Filter */}
          <div className="backdrop-blur-xl rounded-full border border-white/10 flex p-1 items-center gap-1 bg-zinc-900/60">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === category
                    ? "bg-gradient-to-br from-[oklch(0.541_0.281_293.009)] to-[oklch(0.627_0.265_303.9)] text-white shadow-lg"
                    : "text-[#9f9fa9] hover:text-white"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
