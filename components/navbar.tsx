"use client";

import React from "react";
import { Home, User, Code, Zap, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", icon: Home, href: "#home", active: true },
  { label: "About", icon: User, href: "#about" },
  { label: "Projects", icon: Code, href: "#projects" },
  { label: "Skills", icon: Zap, href: "#skills" },
  { label: "Contact", icon: Mail, href: "#contact" },
];

export function Navbar() {
  return (
    <header className="relative z-50 flex px-6 md:px-12 py-6 justify-between items-center">
      <div className="flex items-center gap-2">
        <div
          className="size-9 font-bold rounded-xl text-violet-50 flex justify-center items-center bg-gradient-to-br from-[oklch(0.541_0.281_293.009)] to-[oklch(0.627_0.265_303.9)]"
        >
          SK
        </div>
        <span className="font-semibold tracking-tight text-neutral-50">
          shreyas
          <span className="text-[#7f22fe]">.dev</span>
        </span>
      </div>

      <nav className="hidden md:flex backdrop-blur-xl rounded-full border border-white/10 p-1.5 gap-1 bg-zinc-900/50">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={cn(
              "relative rounded-full text-sm flex px-4 py-2 items-center gap-2 transition-all",
              item.active 
                ? "bg-zinc-800 text-neutral-50 shadow-sm" 
                : "text-[#9f9fa9] hover:text-neutral-50 hover:bg-white/5"
            )}
          >
            <item.icon className={cn("size-4", item.active && "text-[#7f22fe]")} />
            <span>{item.label}</span>
            {item.active && (
              <span
                className="absolute -bottom-px left-1/2 -translate-x-1/2 w-6 h-px bg-[oklch(0.541_0.281_293.009)]"
              />
            )}
          </a>
        ))}
      </nav>

      <Button
        className="rounded-full text-violet-50 px-5 gap-2 bg-gradient-to-br from-[oklch(0.541_0.281_293.009)] to-[oklch(0.627_0.265_303.9)] hover:opacity-90 transition-opacity"
      >
        <Download className="size-4" />
        Resume
      </Button>
    </header>
  );
}
