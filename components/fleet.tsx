"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"

const vessels = [
  { name: "MUTAWA 17", type: "Offshore Support Vessel", image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=800&auto=format&fit=crop" },
  { name: "MUTAWA 313", type: "Diving Support Vessel", image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=800&auto=format&fit=crop" },
  { name: "MUTAWA 309", type: "Safety Standby Vessel", image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=800&auto=format&fit=crop" },
  { name: "KHALFAN", type: "Supply Vessel", image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=800&auto=format&fit=crop" },
  { name: "FAISAL 1", type: "Anchor Handling Tug", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop" },
  { name: "MUTAWA 101", type: "Utility Vessel", image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=800&auto=format&fit=crop" },
  { name: "MUTAWA 202", type: "Diving Support Vessel", image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=800&auto=format&fit=crop" },
  { name: "MUTAWA 301", type: "Offshore Support Vessel", image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=800&auto=format&fit=crop" },
  { name: "MUTAWA 401", type: "Jack-up Barge", image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=800&auto=format&fit=crop" },
  { name: "MUTAWA 402", type: "Jack-up Barge", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop" },
]

export function Fleet() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      })
      setTimeout(checkScroll, 400)
    }
  }

  return (
    <section id="fleet" className="py-32 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
              Our Fleet
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              <span className="text-balance">
                27 <span className="italic">vessels</span> ready
                <br className="hidden md:block" /> for deployment
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed hidden md:block">
              Owns & operates a diverse fleet of offshore support vessels and jack-up barges.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="p-3 border border-border hover:border-foreground disabled:opacity-30 disabled:hover:border-border transition-colors"
                aria-label="Scroll left"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="p-3 border border-border hover:border-foreground disabled:opacity-30 disabled:hover:border-border transition-colors"
                aria-label="Scroll right"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Horizontal scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-6 pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {vessels.map((vessel, i) => (
          <motion.div
            key={vessel.name}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            className="flex-shrink-0 w-[300px] md:w-[350px] group cursor-pointer"
          >
            <div className="aspect-[4/3] overflow-hidden mb-4 relative">
              <img
                src={vessel.image}
                alt={vessel.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="p-2 bg-foreground text-background">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
            <h3 className="text-lg font-medium mb-1">{vessel.name}</h3>
            <p className="text-sm text-muted-foreground">{vessel.type}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-8 pt-8 border-t border-border"
        >
          {[
            { label: "Diving Support Vessels", count: "8" },
            { label: "Safety Standby Vessels", count: "6" },
            { label: "Supply Vessels", count: "5" },
            { label: "Anchor Handling Tugs", count: "4" },
            { label: "Jack-up Barges", count: "2" },
            { label: "Utility Vessels", count: "2" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-2xl font-light">{item.count}</p>
              <p className="text-xs text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
