"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
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
