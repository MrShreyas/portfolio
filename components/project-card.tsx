import React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GlassCard } from "./glass-card";
import { GradientText } from "./gradient-text";
import { Project } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <GlassCard 
      className="group relative flex flex-col gap-4 p-6 transition-all hover:border-[oklch(0.541_0.281_293.009/0.4)] hover:shadow-[0_0_40px_oklch(0.541_0.281_293.009/0.15)]"
      gradient
    >
      {/* Background Decor */}
      <div 
        className="absolute -right-20 -top-20 size-64 blur-3xl opacity-20 rounded-full transition-opacity group-hover:opacity-40"
        style={{ backgroundColor: "oklch(0.541 0.281 293.009)" }}
      />
      
      {/* Top Header */}
      <div className="flex justify-between items-start z-10">
        <div className="flex items-center gap-2">
          <div className="size-2 animate-pulse rounded-full bg-[oklch(0.696_0.17_162.48)] shadow-[0_0_8px_oklch(0.696_0.17_162.48)]" />
          <span className="font-mono uppercase text-[#9f9fa9] text-[10px] tracking-wider">
            {project.status || project.category}
          </span>
        </div>
        <a 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="size-9 backdrop-blur-md rounded-lg border border-white/10 flex justify-center items-center bg-zinc-800/50 text-[#9f9fa9] hover:text-white transition-colors"
        >
          <ExternalLink className="size-4" />
        </a>
      </div>

      {/* Preview Area */}
      <div className="relative rounded-xl border border-white/10 aspect-video overflow-hidden bg-zinc-950">
         {/* Mock Browser Header */}
         <div className="flex px-4 py-2 items-center gap-1.5 border-b border-white/5 bg-white/5">
            <div className="size-2 rounded-full bg-red-500/50" />
            <div className="size-2 rounded-full bg-yellow-500/50" />
            <div className="size-2 rounded-full bg-green-500/50" />
            <div className="ml-4 flex-1 h-4 rounded bg-white/5 text-[10px] text-[#9f9fa9] flex items-center px-2 font-mono truncate">
              {project.link.replace('https://', '')}
            </div>
         </div>
         {project.image ? (
           <img 
             src={project.image} 
             alt={project.title} 
             className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500"
           />
         ) : (
           <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-950">
              <span className="text-zinc-800 font-mono text-4xl font-bold">PROJECT</span>
           </div>
         )}
         <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 z-10">
        <h3 className="font-semibold text-xl text-neutral-50">{project.title}</h3>
        <p className="text-sm text-[#9f9fa9] leading-relaxed line-clamp-2">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map(tag => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="rounded-full bg-white/5 border-white/10 text-[10px] font-normal px-2 py-0"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Footer Link */}
      <div className="mt-auto pt-4 border-t border-white/5 z-10">
        <a 
          href={project.link}
          className="inline-flex items-center gap-2 text-sm font-medium text-[oklch(0.696_0.17_162.48)] hover:underline transition-all"
        >
          View Case Study
          <ArrowRight className="size-4" />
        </a>
      </div>
    </GlassCard>
  );
}
