"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [filter, setFilter] = useState("all")

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const projects = [
    {
      title: "Google Docs Clone",
      description:
        "A full-featured Google Docs Clone with document editing, realtime editing, user authentication, and responsive UI.",
      image: "/docs_clone.png?height=600&width=800",
      tags: ["Next", "Clerk", "Convex", "Tailwind", "TypeScript"],
      category: "fullstack",
      github: "https://github.com/MrShreyas/docs-clone",
      demo: "https://docs-clone-ten.vercel.app/",
    },
    {
      title: "Task Management App",
      description:
        "Developed a full-stack Todo Management System with user authentication, task management to create, update, delete, and filter tasks efficiently",
      image: "/todo_app.png?height=600&width=800",
      tags: ["React.js", "JavaScript", "Express", "Tailwind", "MongoDB"],
      category: "fullstack",
      github: "https://github.com/MrShreyas/todo-frontend",
      demo: "https://build-todo-app.netlify.app/dashboard",
    },
    {
      title: "Smart IVR System Using Asterisk IP-PBX and Rasa NLU",
      description: "Developed a University final year project for creating a virtual assistant over cellular network.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Rasa NLU", "Asterisk IP PBX", "Python", "MySQL", "AWS"],
      category: "networking",
      github: "https://github.com/babuaditya/ivrsystem",
      demo: "#",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading mx-auto text-white">My Projects</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Here are some of the projects I've worked on. Each project represents different skills and technologies I've
            mastered.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={
                filter === "all"
                  ? "bg-primary hover:bg-accent text-white rounded-full"
                  : "text-white border-white hover:text-secondary-900 hover:bg-white rounded-full"
              }
            >
              All
            </Button>
            <Button
              variant={filter === "frontend" ? "default" : "outline"}
              onClick={() => setFilter("frontend")}
              className={
                filter === "frontend"
                  ? "bg-primary hover:bg-accent text-white rounded-full"
                  : "text-white border-white hover:text-secondary-900 hover:bg-white rounded-full"
              }
            >
              Frontend
            </Button>
            <Button
              variant={filter === "backend" ? "default" : "outline"}
              onClick={() => setFilter("backend")}
              className={
                filter === "backend"
                  ? "bg-primary hover:bg-accent text-white rounded-full"
                  : "text-white border-white hover:text-secondary-900 hover:bg-white rounded-full"
              }
            >
              Backend
            </Button>
            <Button
              variant={filter === "fullstack" ? "default" : "outline"}
              onClick={() => setFilter("fullstack")}
              className={
                filter === "fullstack"
                  ? "bg-primary hover:bg-accent text-white rounded-full"
                  : "text-white border-white hover:text-secondary-900 hover:bg-white rounded-full"
              }
            >
              Fullstack
            </Button>
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden h-full card-hover border-none shadow bg-white text-secondary-900">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-secondary-900">{project.title}</h3>
                  <p className="text-secondary-900/70 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-secondary-200 text-white hover:bg-primary hover:text-white hover:border-primary"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4  " />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="bg-primary hover:bg-accent text-white">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
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
