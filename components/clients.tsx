"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Handshake } from "lucide-react"

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
    <section className="py-20 bg-secondary/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <Handshake className="w-4 h-4" />
            <span>Trusted Partners</span>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground">
            Serving Industry Leaders Since 1978
          </h3>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="flex items-center justify-center h-24 px-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              <span className="text-lg md:text-xl font-bold tracking-wider text-muted-foreground hover:text-primary transition-colors">
                {client.logo}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
