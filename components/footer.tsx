"use client";

import React from "react";
import { SOCIAL_LINKS } from "@/lib/data";
import { scrollToSection } from "@/utils/scrollUtils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-[#9f9fa9] py-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <div className="flex items-center gap-2">
            <div className="size-6 font-bold rounded-lg text-violet-50 flex justify-center items-center bg-gradient-to-br from-[oklch(0.541_0.281_293.009)] to-[oklch(0.627_0.265_303.9)] text-[10px]">
              SK
            </div>
            <span className="font-semibold tracking-tight text-neutral-50 text-sm">
              shreyas<span className="text-[#7f22fe]">.dev</span>
            </span>
          </div>
          <p className="text-xs">© {currentYear} Shreyas Katalkar. All rights reserved.</p>
        </div>

        <nav className="flex gap-8 text-xs font-mono uppercase tracking-widest">
          <a onClick={(e)=>scrollToSection(e,"#home")} className="cursor-pointer hover:text-white transition-colors">Home</a>
          <a onClick={(e)=>scrollToSection(e,"#about")} className="cursor-pointer hover:text-white transition-colors">About</a>
          <a onClick={(e)=>scrollToSection(e,"#projects")} className="cursor-pointer hover:text-white transition-colors">Projects</a>
          <a onClick={(e)=>scrollToSection(e,"#skills")} className="cursor-pointer hover:text-white transition-colors">Skills</a>
        </nav>

        <div className="flex gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a 
              key={link.platform}
              onClick={() => window.open(link.url, "_blank")}
              className="size-8 cursor-pointer rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label={link.platform}
            >
              <link.icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 text-center">
         <p className="text-[10px] opacity-30 font-mono">
           BUILT WITH NEXT.JS · TAILWIND CSS · FRAMER MOTION · SHADCN/UI
         </p>
      </div>
    </footer>
  );
}
