"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export function ContactForm() {
  return (
    <form className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs font-mono text-[#9f9fa9] uppercase tracking-wider">Name</label>
          <Input 
            id="name" 
            placeholder="John Doe" 
            className="bg-white/5 border-white/10 rounded-xl h-12 focus:border-[oklch(0.541_0.281_293.009)] transition-all"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs font-mono text-[#9f9fa9] uppercase tracking-wider">Email</label>
          <Input 
            id="email" 
            type="email" 
            placeholder="john@example.com" 
            className="bg-white/5 border-white/10 rounded-xl h-12 focus:border-[oklch(0.541_0.281_293.009)] transition-all"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-xs font-mono text-[#9f9fa9] uppercase tracking-wider">Subject</label>
        <Input 
          id="subject" 
          placeholder="Project Inquiry" 
          className="bg-white/5 border-white/10 rounded-xl h-12 focus:border-[oklch(0.541_0.281_293.009)] transition-all"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs font-mono text-[#9f9fa9] uppercase tracking-wider">Message</label>
        <Textarea 
          id="message" 
          placeholder="Tell me about your project..." 
          className="bg-white/5 border-white/10 rounded-2xl min-h-[150px] focus:border-[oklch(0.541_0.281_293.009)] transition-all"
        />
      </div>
      <Button className="h-12 rounded-full bg-gradient-to-br from-[oklch(0.541_0.281_293.009)] to-[oklch(0.627_0.265_303.9)] gap-2 hover:opacity-90">
        <Send className="size-4" />
        Send Message
      </Button>
    </form>
  );
}
