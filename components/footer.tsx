"use client"

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    { icon: Github, label: "GitHub", link: "https://github.com/MrShreyas" },
    { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/shreyas-katalkar-062283208/" },
    { icon: Mail, label: "Email", link: "mailto:katalkarshreyas@gmail.com" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="bg-gradient-to-b from-slate-950 to-black text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              SK
            </div>
            <div>
              <p className="text-white font-semibold text-lg">Shreyas Katalkar</p>
              <p className="text-slate-400">Fullstack Developer & Engineer</p>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Building exceptional digital experiences with modern technologies. Always learning, always improving.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <div className="space-y-2">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-bold text-white">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, label, link }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="icon"
                    className="rounded-full w-10 h-10 bg-slate-800 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/50 text-cyan-400 hover:text-cyan-300 transition-all"
                    onClick={() => window.open(link, "_blank")}
                    title={label}
                  >
                    <Icon className="h-5 w-5" />
                  </Button>
                </motion.div>
              ))}
            </div>
            <p className="text-slate-400 text-sm">Let's connect and build something amazing!</p>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8" />

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <p className="text-slate-400 text-sm flex items-center justify-center md:justify-start gap-2">
              © {new Date().getFullYear()} Shreyas Katalkar. Crafted with{" "}
              <Heart className="h-4 w-4 text-red-500 inline" /> and passion.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-slate-500 text-xs text-center space-y-1">
            <p>Built with Next.js, Tailwind CSS, Framer Motion & shadcn/ui</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="p-2 rounded-full bg-slate-800 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500 text-cyan-400 hover:text-cyan-300 transition-all"
              title="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
