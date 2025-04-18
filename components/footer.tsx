"use client"

import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-secondary-900 py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Shreyas Katalkar</h3>
            <p className="text-white/70">Fullstack Web Developer</p>
          </div>

          <div className="flex space-x-4 mb-6 md:mb-0">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full text-white border-white hover:bg-primary hover:text-white hover:border-primary"
              onClick={() => window.open("https://github.com/MrShreyas", "_blank")}
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full text-white border-white hover:bg-primary hover:text-white hover:border-primary"
              onClick={() => window.open("https://www.linkedin.com/in/shreyas-katalkar-062283208/", "_blank")}
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="rounded-full text-white border-white hover:bg-primary hover:text-white hover:border-primary"
              onClick={() => window.location.href = "mailto:katalkarshreyas@gmail.com"}
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>

          <div className="text-center md:text-right">
            <p className="text-white/70">© {new Date().getFullYear()} Shreyas Katalkar. All rights reserved.</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-white/50 text-sm">Designed and built with Next.js, Tailwind CSS, and shadcn/ui</p>
        </div>
      </div>
    </footer>
  )
}
