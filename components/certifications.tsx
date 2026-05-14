"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, ShieldCheck, FileCheck, Medal, BadgeCheck } from "lucide-react"

const certifications = [
  {
    icon: ShieldCheck,
    title: "IMCA Member",
    description: "International Marine Contractors Association certified member since 1992",
    color: "from-primary to-primary/80"
  },
  {
    icon: Award,
    title: "ISO 9001:2015",
    description: "Quality Management System certification for operational excellence",
    color: "from-accent to-accent/80"
  },
  {
    icon: FileCheck,
    title: "ISO 14001:2015",
    description: "Environmental Management System ensuring sustainable operations",
    color: "from-primary to-accent"
  },
  {
    icon: Medal,
    title: "OHSAS 18001",
    description: "Occupational Health and Safety management certification",
    color: "from-accent to-primary"
  },
]

export function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="py-24 bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <BadgeCheck className="w-4 h-4" />
            <span>Quality & Compliance</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Industry <span className="text-gradient-ocean">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Maintaining the highest standards of quality, safety, and environmental responsibility
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="relative bg-card p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all group overflow-hidden"
            >
              {/* Top gradient */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <cert.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
