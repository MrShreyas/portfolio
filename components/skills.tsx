"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Layout, Server, Terminal, Smartphone, Figma } from "lucide-react"

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const skills = [
    {
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces",
      icon: <Layout className="h-10 w-10 text-primary" />,
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "Backend Development",
      description: "Building robust and scalable server-side applications",
      icon: <Server className="h-10 w-10 text-primary" />,
      technologies: ["Node.js", "Express", "Python", "Django", " ASP Dot Net", "C#"],
    },
    {
      title: "Database Management",
      description: "Designing and optimizing database structures",
      icon: <Database className="h-10 w-10 text-primary" />,
      technologies: ["MongoDB", "MySQL", "Sql Server Management Studio" ],
    },
    {
      title: "API Development",
      description: "Creating RESTful and GraphQL APIs",
      icon: <Globe className="h-10 w-10 text-primary" />,
      technologies: ["REST", "Swagger", "Postman"],
    },
    {
      title: "Mobile Development",
      description: "Building cross-platform mobile applications",
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      technologies: ["React Native",  "Expo"],
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing interfaces",
      icon: <Figma className="h-10 w-10 text-primary" />,
      technologies: ["Figma",  "Wireframing"],
    },
    {
      title: "Version Control",
      description: "Managing code versions and collaborating with teams",
      icon: <Code className="h-10 w-10 text-primary" />,
      technologies: ["Git", "GitHub",],
    },
  ]
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-32 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-10 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">My Skills & Expertise</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-6" />
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            I've mastered a diverse tech stack to build scalable, performant, and user-centric applications. Here's what I specialize in.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="relative h-full group">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300" />

                <Card className="h-full border-slate-700/50 bg-slate-800/80 shadow-xl hover:border-cyan-500/50 transition-all duration-300 relative z-10">
                  <CardContent className="pt-8 pb-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <motion.div
                        className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-cyan-400">{skill.icon}</div>
                      </motion.div>

                      <h3 className="text-xl font-bold text-white">{skill.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{skill.description}</p>

                      <div className="flex flex-wrap justify-center gap-2 pt-2">
                        {skill.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 py-1.5 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-semibold border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/30 transition-all"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
