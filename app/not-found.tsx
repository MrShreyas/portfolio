"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-950 text-neutral-50 px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-8xl md:text-9xl font-mono font-light tracking-tighter mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-medium mb-4">
          Page Not Found
        </h2>
        <p className="text-neutral-400 mb-8">
          The page you are looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link href="/">
          <Button className="h-12 px-8 rounded-full bg-gradient-to-br from-[oklch(0.541_0.281_293.009)] to-[oklch(0.627_0.265_303.9)] gap-2 hover:opacity-90">
            <ArrowLeft className="size-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
