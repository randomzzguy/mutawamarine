"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowUpRight, Compass, Shield, Award } from "lucide-react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 lg:py-32 bg-card relative overflow-hidden" ref={ref}>
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main image */}
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                <img
                  src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=2044&auto=format&fit=crop"
                  alt="Offshore vessel operations"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating year badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary to-accent p-8 rounded-2xl shadow-xl"
              >
                <p className="text-5xl font-bold text-primary-foreground">1978</p>
                <p className="text-sm text-primary-foreground/80 mt-1">Est. Abu Dhabi</p>
              </motion.div>

              {/* Decorative element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-2xl" />
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Compass className="w-4 h-4" />
              <span>Our Story</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-foreground">
              <span className="text-balance">
                A Legacy of{" "}
                <span className="text-gradient-ocean">Excellence</span>{" "}
                in Offshore Operations
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Al Mutawa Marine Works L.L.C. is a wholly owned National Company 
                registered under the laws of Abu Dhabi, formed in 1978 with a mission 
                to provide highly specialized technical services to the offshore oil industry.
              </p>
              <p>
                In over four decades, the Company has grown to become a specialized provider 
                offering a wide range of services to the offshore Oil & Gas industry, 
                and other industries across the region.
              </p>
            </div>

            {/* Key points */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: Shield, label: "ISO Certified Operations" },
                { icon: Award, label: "IMCA Member Since 1992" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-secondary rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors group"
            >
              Learn More About Us
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
