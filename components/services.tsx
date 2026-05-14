"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowUpRight, Anchor, Waves, Wrench } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "marine",
    icon: Anchor,
    title: "Marine Services",
    description: "Owns and charters different types of offshore support vessels including Diving Support Vessels, Safety Standby Vessels, Supply Vessels, Anchor Handling Tugs, and Utility/Offshore Support vessels.",
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=2070&auto=format&fit=crop",
    features: ["Diving Support Vessels", "Safety Standby Vessels", "Supply Vessels", "Anchor Handling Tugs"]
  },
  {
    id: "diving",
    icon: Waves,
    title: "Diving Operations",
    description: "Al Mutawa Marine Works has membership of International Marine Contractors Association (IMCA) and carries out all diving operations in compliance with IMCA Guidelines.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop",
    features: ["IMCA Certified", "Surface Supplied Diving", "Underwater Inspection", "Subsea Maintenance"]
  },
  {
    id: "workshop",
    icon: Wrench,
    title: "Workshop Facilities",
    description: "Comprehensive workshop facilities providing specialized technical services and maintenance support for the offshore oil industry with state-of-the-art equipment.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    features: ["Vessel Maintenance", "Equipment Repair", "Fabrication Services", "Technical Support"]
  }
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeService, setActiveService] = useState(services[0])

  return (
    <section id="services" className="py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
            Our Services
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-2xl">
              <span className="text-balance">
                Comprehensive <span className="italic">offshore</span> solutions
              </span>
            </h2>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Delivering excellence across marine operations, diving services, 
              and technical facilities for the oil & gas sector.
            </p>
          </div>
        </motion.div>

        {/* Services tabs */}
        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-12 lg:gap-16">
          {/* Service list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-2"
          >
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service)}
                className={`w-full text-left p-6 border transition-all duration-300 group ${
                  activeService.id === service.id
                    ? "border-foreground bg-foreground/5"
                    : "border-border hover:border-foreground/50"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <service.icon className={`w-6 h-6 transition-colors ${
                    activeService.id === service.id ? "text-accent" : "text-muted-foreground"
                  }`} />
                  <ArrowUpRight className={`w-5 h-5 transition-all ${
                    activeService.id === service.id 
                      ? "opacity-100 translate-x-0 -translate-y-0" 
                      : "opacity-0 -translate-x-2 translate-y-2"
                  }`} />
                </div>
                <h3 className="text-xl font-light mb-2">{service.title}</h3>
                <p className={`text-sm transition-colors ${
                  activeService.id === service.id ? "text-muted-foreground" : "text-muted-foreground/70"
                }`}>
                  {service.features.join(" • ")}
                </p>
              </button>
            ))}
          </motion.div>

          {/* Active service detail */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <motion.img
                key={activeService.id}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            
            <motion.div
              key={activeService.id + "-content"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-8"
            >
              <h3 className="text-2xl font-light mb-4">{activeService.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {activeService.description}
              </p>
              <Link
                href={`#${activeService.id}`}
                className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors group"
              >
                Learn more
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
