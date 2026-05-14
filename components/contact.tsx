"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowUpRight, MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contact" className="py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
              Contact Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
              <span className="text-balance">
                Let&apos;s discuss your <span className="italic">project</span>
              </span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-md">
              Ready to partner with industry experts? Reach out to discuss 
              your offshore requirements and how we can support your operations.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium mb-1">Head Office</p>
                  <p className="text-sm text-muted-foreground">
                    Mussafah Industrial Area<br />
                    Abu Dhabi, United Arab Emirates
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium mb-1">Phone</p>
                  <a href="tel:971-2-5552800" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    +971-2-5552800
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <a href="mailto:info@mutawamarine.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    info@mutawamarine.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium mb-1">Working Hours</p>
                  <p className="text-sm text-muted-foreground">
                    Sunday - Thursday: 8:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-transparent border border-border focus:border-foreground outline-none transition-colors text-sm"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-transparent border border-border focus:border-foreground outline-none transition-colors text-sm"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm mb-2">Company</label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-transparent border border-border focus:border-foreground outline-none transition-colors text-sm"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-transparent border border-border focus:border-foreground outline-none transition-colors text-sm resize-none"
                  placeholder="Tell us about your project requirements..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2 group"
              >
                Send Message
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
