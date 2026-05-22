"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowRight, Anchor, Waves, Wrench, ChevronRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "marine",
    icon: Anchor,
    title: "Marine Services",
    shortDesc: "Full fleet of offshore support vessels",
    description: "Owns and charters different types of offshore support vessels including Diving Support Vessels, Safety Standby Vessels, Supply Vessels, Anchor Handling Tugs, and Utility/Offshore Support vessels.",
    image: "/images/marine-services.jpg",
    features: ["Diving Support Vessels", "Safety Standby Vessels", "Supply Vessels", "Anchor Handling Tugs"],
    color: "from-primary to-primary/80"
  },
  {
    id: "diving",
    icon: Waves,
    title: "Diving Operations",
    shortDesc: "IMCA certified professional diving",
    description: "Al Mutawa Marine Works has membership of International Marine Contractors Association (IMCA) and carries out all diving operations in compliance with IMCA Guidelines for safe and efficient underwater work.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop",
    features: ["IMCA Certified", "Surface Supplied Diving", "Underwater Inspection", "Subsea Maintenance"],
    color: "from-accent to-accent/80"
  },
  {
    id: "workshop",
    icon: Wrench,
    title: "Workshop Facilities",
    shortDesc: "State-of-the-art maintenance hub",
    description: "Comprehensive workshop facilities providing specialized technical services and maintenance support for the offshore oil industry with state-of-the-art equipment and skilled technicians.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    features: ["Vessel Maintenance", "Equipment Repair", "Fabrication Services", "Technical Support"],
    color: "from-primary to-accent"
  }
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeService, setActiveService] = useState(services[0])

  return (
    <section id="services" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Anchor className="w-4 h-4" />
            <span>What We Offer</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-foreground">
            Comprehensive{" "}
            <span className="text-gradient-ocean">Offshore Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Delivering excellence across marine operations, diving services, 
            and technical facilities for the oil & gas sector.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => (
            <motion.button
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setActiveService(service)}
              className={`group relative text-left p-8 rounded-2xl transition-all duration-300 overflow-hidden ${
                activeService.id === service.id
                  ? "bg-card shadow-xl shadow-primary/10 ring-2 ring-primary/20"
                  : "bg-card/50 hover:bg-card hover:shadow-lg"
              }`}
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transition-opacity ${
                activeService.id === service.id ? "opacity-100" : "opacity-0 group-hover:opacity-50"
              }`} />
              
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                activeService.id === service.id 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary text-primary"
              }`}>
                <service.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.shortDesc}</p>
              
              <div className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                activeService.id === service.id ? "text-primary" : "text-muted-foreground"
              }`}>
                <span>View details</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${
                  activeService.id === service.id ? "translate-x-1" : ""
                }`} />
              </div>
            </motion.button>
          ))}
        </div>

        {/* Active service detail */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 bg-card rounded-3xl overflow-hidden shadow-xl shadow-primary/5"
        >
          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
            <motion.img
              key={activeService.id}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              src={activeService.image}
              alt={activeService.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-card/50 via-transparent to-transparent lg:hidden" />
          </div>
          
          {/* Content */}
          <motion.div
            key={activeService.id + "-content"}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="p-8 lg:p-12 flex flex-col justify-center"
          >
            <div className={`inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4 bg-gradient-to-r ${activeService.color} text-white`}>
              <activeService.icon className="w-3.5 h-3.5" />
              <span>{activeService.title}</span>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              {activeService.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {activeService.description}
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {activeService.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
            
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 w-fit px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors group"
            >
              Request Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
