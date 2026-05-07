"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"
import { Download, ArrowRight } from "lucide-react"

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const infoItems = [
    { label: "Location", value: "Pune, India" },
    { label: "Email", value: "katalkarshreyas@gmail.com" },
    { label: "Experience", value: "Fresher / Open" },
    { label: "Focus", value: "Full-Stack Web Dev" },
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Image Section */}
          <motion.div variants={imageVariants} className="relative">
            <div className="relative h-[450px] rounded-xl overflow-hidden shadow-2xl">
              {/* Glow effect behind image */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />
              <Image
                src="/profile.jpg?height=800&width=600"
                alt="Shreyas Katalkar"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg p-4 shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <p className="text-white font-bold text-sm">Full-Stack Developer</p>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-slate-300 text-lg leading-relaxed">
                I&apos;m a passionate <span className="text-cyan-400 font-semibold">Fullstack Developer</span> with a B.Tech in Computer Science & Engineering, dedicated to building dynamic, responsive, and user-friendly web applications. I specialize in <span className="text-blue-400 font-semibold">React.js, Next.js, TypeScript</span>, and modern backend technologies.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                My experience spans from developing a smart IVR system with voice assistance using Asterisk and Rasa, to building RESTful APIs with .NET, and crafting modern UIs with React. I'm passionate about clean code, performance optimization, and creating seamless user experiences.
              </p>
            </motion.div>

            {/* Info Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-6"
            >
              {infoItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
                >
                  <p className="text-slate-400 text-sm font-medium mb-1">{item.label}</p>
                  <p className="text-white font-semibold">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("/Shreyas_Katalkar.pdf", "_blank")}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                <Download className="h-5 w-5" />
                Resume
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 px-8 py-3 border border-cyan-500/50 rounded-lg font-semibold text-white hover:bg-cyan-500/10 transition-all"
              >
                View Projects
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

  return (
    <section id="about" className="py-20 bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl teal-border">
            <Image src="/profile.jpg?height=800&width=600" alt="John Doe" fill className="object-cover" />
          </div>

          <div>
            <h2 className="section-heading text-white">About Me</h2>
            <p className="text-white/80 mb-4">
              Hello! I’m a passionate React Developer with a B.Tech in Computer Science and Engineering, dedicated 
              to building dynamic, responsive, and user-friendly web applications. I specialize in React.js, 
              Tailwind CSS, and JavaScript, with hands-on experience in API integration using Axios and state 
              management through React Query.
            </p>
            <p className="text-white/80 mb-6">
            My work includes developing a smart IVR system with a voice assistant using Asterisk and Rasa for my 
            final year project. I’ve also completed two impactful internships—at Signal ATM, where I built RESTful 
            APIs using .NET, and at Bizworkz Consultancy, where I focused on modern UI development and frontend 
            optimization. 
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h3 className="font-semibold mb-2 text-primary">Location</h3>
                <p className="text-white/70">Pune, Maharashtra, India</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary">Email</h3>
                <p className="text-white/70">katalkarshreyas@gmail.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary">Experience</h3>
                <p className="text-white/70">Fresher</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary">Availability</h3>
                <p className="text-white/70">Open to Opportunities</p>
              </div>
            </div>

            <Button 
              className="bg-primary hover:bg-accent text-white" 
              onClick={()=>{window.open('/Shreyas_Katalkar.pdf', '_blank')}}
            >
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
