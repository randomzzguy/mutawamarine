"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Handshake } from "lucide-react"
import Image from "next/image"

const clients = [
  {
    name: "ADNOC Offshore",
    logo: "/logos/adnoc.png",
    description: "Abu Dhabi National Oil Company",
  },
  {
    name: "ADOC",
    logo: "/logos/adoc.png",
    description: "Abu Dhabi Oil Company",
  },
  {
    name: "NPCC",
    logo: "/logos/npcc.png",
    description: "National Petroleum Construction Co.",
  },
  {
    name: "TotalEnergies",
    logo: "/logos/total.png",
    description: "TotalEnergies SE",
  },
  {
    name: "BP",
    logo: "/logos/bp.png",
    description: "British Petroleum",
  },
  {
    name: "Shell",
    logo: "/logos/shell.png",
    description: "Shell International",
  },
  {
    name: "CNOOC",
    logo: "/logos/cnooc.png",
    description: "China National Offshore Oil Corp.",
  },
  {
    name: "Petrofac",
    logo: "/logos/petrofac.png",
    description: "Petrofac Limited",
  },
]

export function Clients() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-secondary/40" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <Handshake className="w-4 h-4" />
            <span>Trusted Partners</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Serving Industry Leaders Since 1978
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Trusted by the world&apos;s leading oil &amp; gas operators and construction companies across the Arabian Gulf.
          </p>
        </motion.div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.07 * i, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group relative flex flex-col items-center justify-center gap-3 h-36 px-6 bg-card rounded-2xl border border-border cursor-default
                         shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:border-primary/25 transition-shadow duration-300"
            >
              {/* Subtle top accent line that appears on hover */}
              <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-primary/60 to-accent/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Logo */}
              <div className="relative w-28 h-14 flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-400 opacity-70 group-hover:opacity-100"
                  sizes="112px"
                />
              </div>

              {/* Name — fades in on hover */}
              <p className="text-xs font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center leading-tight">
                {client.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
