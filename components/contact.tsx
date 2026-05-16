"use client";

import React from "react";
import { Mail, MapPin, Github, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { GlassCard } from "./glass-card";
import { SectionHeader } from "./section-header";
import { ContactForm } from "./contact-form";
import { SOCIAL_LINKS } from "@/lib/data";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <div id="contact" className="relative bg-zinc-950 text-neutral-50 w-full min-h-screen py-24 px-6 md:px-12">
      {/* Background Decor */}
      <div className="absolute bottom-[-100px] right-[-100px] size-[600px] rounded-full bg-[radial-gradient(circle,oklch(0.541_0.281_293.009/0.15),transparent_70%)] blur-[80px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <SectionHeader 
              number="04" 
              title="Get in Touch" 
              subtitle="Let's build something" 
              highlight="extraordinary" 
            />
            
            <p className="text-[#9f9fa9] text-lg leading-relaxed max-w-md">
              Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="flex flex-col gap-6 mt-4">
              <div className="flex items-center gap-4 group">
                <div className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[oklch(0.541_0.281_293.009/0.5)] transition-all">
                  <Mail className="size-5 text-[oklch(0.541_0.281_293.009)]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#9f9fa9] uppercase tracking-wider">Email</span>
                  <a href="mailto:hello@shreyas.dev" className="text-neutral-50 hover:text-[oklch(0.541_0.281_293.009)] transition-colors">hello@shreyas.dev</a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[oklch(0.541_0.281_293.009/0.5)] transition-all">
                  <MapPin className="size-5 text-[oklch(0.541_0.281_293.009)]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#9f9fa9] uppercase tracking-wider">Location</span>
                  <span className="text-neutral-50">Pune, Maharashtra, India</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-8">
              <span className="text-xs text-[#9f9fa9] uppercase tracking-wider font-mono">Follow me</span>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <a 
                    key={link.platform}
                    href={link.url}
                    className="size-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#9f9fa9] hover:text-white hover:border-white/20 transition-all hover:-translate-y-1"
                  >
                    <link.icon className="size-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <GlassCard className="p-8 md:p-12" gradient>
               <ContactForm />
            </GlassCard>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
