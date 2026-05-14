"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
              <span className="text-balance">
                A legacy of{" "}
                <span className="italic">excellence</span> in offshore operations
              </span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
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
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium hover:text-accent transition-colors group"
            >
              Learn more about our story
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative">
              <img
                src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=2044&auto=format&fit=crop"
                alt="Offshore vessel operations"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-8 -left-8 bg-background p-6 max-w-xs border border-border"
            >
              <p className="text-4xl font-light mb-2">1978</p>
              <p className="text-sm text-muted-foreground">
                Established in Abu Dhabi with a vision to serve the offshore industry
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
