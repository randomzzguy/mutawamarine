"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const clients = [
  { name: "ADNOC Offshore", logo: "ADNOC" },
  { name: "ADOC", logo: "ADOC" },
  { name: "NPCC", logo: "NPCC" },
  { name: "Total", logo: "TOTAL" },
  { name: "BP", logo: "BP" },
  { name: "Shell", logo: "SHELL" },
  { name: "CNOOC", logo: "CNOOC" },
  { name: "Petrofac", logo: "PETROFAC" },
]

export function Clients() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 border-y border-border" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
            Trusted By Industry Leaders
          </span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="flex items-center justify-center h-20 px-6 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-xl md:text-2xl font-light tracking-wider">
                {client.logo}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
