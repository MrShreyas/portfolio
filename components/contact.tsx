"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import emailjs from '@emailjs/browser';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setIsSuccess(false)
    setIsError(false)

    emailjs
      .send('service_4p98hgx', 'template_zdhkgvj', values, {
        publicKey: '0zxFCcxTKeLVEDG4T',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitting(false)
          setIsSuccess(true)
          form.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    
  }

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const contactInfo = [
    {
      icon: <Mail className="h-10 w-10 text-primary" />,
      title: "Email",
      value: "katalkarshreyas@gmail.com",
      link: "mailto:katalkarshreyas@gmail.com",
    },
    {
      icon: <Phone className="h-10 w-10 text-primary" />,
      title: "Phone",
      value: "+91 8010702003",
      link: "tel:+918010702003",
    },
    {
      icon: <MapPin className="h-10 w-10 text-primary" />,
      title: "Location",
      value: "Pune, India",
      link: "https://maps.app.goo.gl/ExMBmNhPjh4NepuU8",
    },
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-10 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-6" />
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Have an exciting project or opportunity? I'd love to hear from you. Drop me a message and let's create something amazing together!
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {contactInfo.map((item, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300" />
                <Card className="h-full border-slate-700/50 bg-slate-800/80 shadow-xl hover:border-cyan-500/50 transition-all relative z-10">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <motion.div
                      className="text-cyan-400 mb-4"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">
                      {item.value}
                    </p>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="border-slate-700/50 bg-slate-800/80 shadow-2xl">
            <CardContent className="p-8">
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/20 text-green-300 border border-green-500/50 rounded-lg flex items-center gap-2"
                >
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                  <span>Your message has been sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {isError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-500/20 text-red-300 border border-red-500/50 rounded-lg flex items-center gap-2"
                >
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  <span>There was an error sending your message. Please try again.</span>
                </motion.div>
              )}

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300 text-sm font-semibold">Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              {...field}
                              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500 focus-visible:ring-cyan-500"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300 text-sm font-semibold">Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="your@email.com"
                              {...field}
                              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500 focus-visible:ring-cyan-500"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300 text-sm font-semibold">Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="What's this about?"
                            {...field}
                            className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500 focus-visible:ring-cyan-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300 text-sm font-semibold">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project or opportunity..."
                            className="min-h-[150px] bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500 focus-visible:ring-cyan-500 resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/50 text-white font-semibold py-3 rounded-lg transition-all"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Send className="h-5 w-5" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
