"use client"

import { useState, useEffect } from "react"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

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
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-slate-950 pt-20">
      {/* Navigation */}
      <motion.div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 ${
          scrolled ? "bg-slate-950/95 shadow-lg" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            SK
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/70 hover:text-cyan-400 transition-colors text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </div>
          <Button
            size="sm"
            className="text-white border border-cyan-500/50 hover:bg-cyan-500/10 hover:border-cyan-400 bg-transparent"
            onClick={() => window.open("/Shreyas_Katalkar.pdf", "_blank")}
          >
            Resume
          </Button>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="max-w-4xl mx-auto text-white relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Shreyas Katalkar
        </h1>

        <h2 className="text-2xl md:text-5xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
          Fullstack Developer & Engineer
        </h2>

        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Building exceptional digital experiences with modern web technologies. I craft responsive, accessible, and performant applications that drive real impact.
        </p>

        {/* Social Icons */}
        <motion.div className="flex justify-center space-x-6 mb-16">
          {[
            { icon: Github, label: "GitHub", link: "https://github.com/MrShreyas" },
            { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/shreyas-katalkar-062283208/" },
            { icon: Mail, label: "Email", link: "mailto:katalkarshreyas@gmail.com" },
          ].map(({ icon: Icon, label, link }) => (
            <motion.button
              key={label}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(link, "_blank")}
              className="p-3 rounded-full w-12 h-12 border border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 text-cyan-400 hover:text-cyan-300 transition-all flex items-center justify-center"
              title={label}
            >
              <Icon className="h-5 w-5" />
            </motion.button>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          onClick={scrollToAbout}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2 mx-auto"
        >
          Explore My Work
          <motion.span animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
            <ArrowDown className="h-5 w-5" />
          </motion.span>
        </motion.button>
      </motion.div>
    </section>
  )
}
