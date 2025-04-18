"use client"

import { useState, useEffect } from "react"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Hero() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-teal">
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
          scrolled ? "bg-secondary-900/90 backdrop-blur-md shadow-sm" : "bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-white">SK</div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-white/80 hover:text-white transition-colors nav-link">
              About
            </a>
            <a href="#skills" className="text-white/80 hover:text-white transition-colors nav-link">
              Skills
            </a>
            <a href="#projects" className="text-white/80 hover:text-white transition-colors nav-link">
              Projects
            </a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors nav-link">
              Contact
            </a>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="text-white border-white hover:bg-white hover:text-primary hover:border-white"
            onClick={() => window.open("/Shreyas_Katalkar.pdf", "_blank")}
          >
            Resume
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-white">
        <h1 className="text-4xl md:text-7xl font-bold mb-4">
          <span className="text-white">Shreyas Katalkar</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-white/90">Fullstack Web Developer</h2>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          I build exceptional digital experiences with modern web technologies. Focused on creating responsive,
          accessible, and performant applications.
        </p>

        <div className="flex justify-center space-x-4 mb-12">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full text-white border-white hover:bg-white hover:text-primary hover:border-white"
            onClick={() => window.open("https://github.com/MrShreyas", "_blank")}
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full text-white border-white hover:bg-white hover:text-primary hover:border-white"
            onClick={() => window.open("https://www.linkedin.com/in/shreyas-katalkar-062283208/", "_blank")}
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
          
        </div>

        <Button
          onClick={scrollToAbout}
          variant="default"
          size="lg"
          className="animate-bounce bg-white text-primary hover:bg-white/90 hover:text-primary"
        >
          <ArrowDown className="mr-2 h-4 w-4" />
          Explore My Work
        </Button>
      </div>
    </section>
  )
}
