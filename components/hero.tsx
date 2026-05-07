"use client"

import { useState, useEffect } from "react"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Hero() {
  const [scrolled, setScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const titleVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Navigation */}
      <motion.div
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
          scrolled ? "bg-slate-950/90 backdrop-blur-md shadow-lg" : "bg-transparent",
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            SK
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/70 hover:text-white transition-colors nav-link text-sm font-medium"
                whileHover={{ color: "#00d4ff" }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="sm"
              className="text-white border border-cyan-500/50 hover:bg-cyan-500/10 hover:border-cyan-400"
              onClick={() => window.open("/Shreyas_Katalkar.pdf", "_blank")}
            >
              Resume
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="max-w-4xl mx-auto text-white relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Floating elements behind text */}
        <motion.div
          className="absolute -top-20 -left-32 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        />

        <motion.h1
          className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent"
          variants={titleVariants}
        >
          Shreyas Katalkar
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-5xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300"
          variants={itemVariants}
        >
          Fullstack Developer & Engineer
        </motion.h2>

        <motion.p
          className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          variants={itemVariants}
        >
          Building exceptional digital experiences with modern web technologies. I craft responsive, accessible, and performant applications that drive real impact.
        </motion.p>

        {/* Social icons */}
        <motion.div
          className="flex justify-center space-x-6 mb-16"
          variants={itemVariants}
        >
          {[
            { icon: Github, label: "GitHub", link: "https://github.com/MrShreyas" },
            { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/shreyas-katalkar-062283208/" },
            { icon: Mail, label: "Email", link: "mailto:katalkarshreyas@gmail.com" },
          ].map(({ icon: Icon, label, link }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full w-12 h-12 border border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 text-cyan-400 hover:text-cyan-300 transition-all"
                onClick={() => window.open(link, "_blank")}
                title={label}
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{label}</span>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <motion.button
            onClick={scrollToAbout}
            className="relative px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore My Work
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <ArrowDown className="h-5 w-5" />
              </motion.span>
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-cyan-400 rounded-full mt-2"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
