"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, ShieldCheck, FileCheck, Medal } from "lucide-react"

const certifications = [
  {
    icon: ShieldCheck,
    title: "IMCA Member",
    description: "International Marine Contractors Association certified member",
  },
  {
    icon: Award,
    title: "ISO 9001:2015",
    description: "Quality Management System certification",
  },
  {
    icon: FileCheck,
    title: "ISO 14001:2015",
    description: "Environmental Management System certification",
  },
  {
    icon: Medal,
    title: "OHSAS 18001",
    description: "Occupational Health and Safety certification",
  },
]

export function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certificates" className="py-24 border-t border-border" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
            Quality & Compliance
          </span>
          <h2 className="text-3xl md:text-4xl font-light">
            Industry Certifications
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="p-6 border border-border hover:border-foreground/30 transition-colors group"
            >
              <cert.icon className="w-8 h-8 mb-4 text-muted-foreground group-hover:text-accent transition-colors" />
              <h3 className="font-medium mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
