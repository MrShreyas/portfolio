"use client";

import React, { useState, useEffect } from "react";
import { Home, User, Code, Zap, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", icon: Home, href: "#home" },
  { label: "About", icon: User, href: "#about" },
  { label: "Skills", icon: Zap, href: "#skills" },
  { label: "Projects", icon: Code, href: "#projects" },
  { label: "Contact", icon: Mail, href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold to trigger active state earlier
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setActiveSection(targetId);
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-4 flex justify-between items-center",
        isScrolled ? "bg-zinc-950/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent"
      )}
    >
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2"
      >
        <div
          className="size-8 font-bold rounded-lg text-violet-50 flex justify-center items-center bg-gradient-to-br from-[oklch(0.541_0.281_293.009)] to-[oklch(0.627_0.265_303.9)]"
        >
          SK
        </div>
        <span className="font-semibold tracking-tight text-neutral-50 hidden sm:inline-block">
          shreyas
          <span className="text-[#7f22fe]">.dev</span>
        </span>
      </motion.div>

      <motion.nav 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex backdrop-blur-xl rounded-full border border-white/10 p-1 gap-1 bg-zinc-900/40 relative"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.href.substring(1);
          return (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={cn(
                "relative rounded-full text-xs flex px-3 py-2 md:px-4 items-center gap-2 transition-colors duration-300",
                isActive ? "text-neutral-50" : "text-[#9f9fa9] hover:text-neutral-50"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-zinc-800 rounded-full -z-10 shadow-sm"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <item.icon className={cn("size-3.5 md:size-4 transition-colors", isActive && "text-[#7f22fe]")} />
              <span className="hidden md:inline-block">{item.label}</span>
              {isActive && (
                <motion.span
                  layoutId="activeNavLine"
                  className="absolute -bottom-px left-1/2 -translate-x-1/2 w-4 h-px bg-[oklch(0.541_0.281_293.009)]"
                />
              )}
            </a>
          );
        })}
      </motion.nav>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Button
          className="rounded-full text-violet-50 px-4 md:px-5 h-9 md:h-10 text-xs md:text-sm gap-2 bg-gradient-to-br from-[oklch(0.541_0.281_293.009)] to-[oklch(0.627_0.265_303.9)] hover:opacity-90 transition-opacity"
        >
          <Download className="size-3.5 md:size-4" />
          <span className="hidden sm:inline-block">Resume</span>
        </Button>
      </motion.div>
    </header>
  );
}
