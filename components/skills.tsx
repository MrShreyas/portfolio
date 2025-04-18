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
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading text-secondary mx-auto">My Skills</h2>
          <p className="text-secondary-900/70 max-w-2xl mx-auto">
            I've worked with a variety of technologies and frameworks throughout my career. Here are some of the key
            areas I specialize in.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full card-hover border-none shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">{skill.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-secondary-900">{skill.title}</h3>
                    <p className="text-secondary-900/70 mb-4">{skill.description}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
