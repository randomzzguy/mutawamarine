"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Ship, Eye } from "lucide-react"
import { vessels, type VesselSpec } from "@/lib/vessel-data"
import { VesselModal } from "./vessel-modal"
import Image from "next/image"

const vesselCategories = [
  { label: "Offshore Support", count: 12, color: "bg-primary" },
  { label: "Diving Support", count: 3, color: "bg-accent" },
  { label: "Utility Vessels", count: 8, color: "bg-primary/70" },
  { label: "Supply / Tug", count: 3, color: "bg-accent/70" },
  { label: "Fast Crew", count: 1, color: "bg-primary/50" },
]

export function Fleet() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [selectedVessel, setSelectedVessel] = useState<VesselSpec | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 380
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      })
      setTimeout(checkScroll, 400)
    }
  }

  const openVesselModal = (vessel: VesselSpec) => {
    console.log("[v0] Opening modal for vessel:", vessel.shipName)
    setSelectedVessel(vessel)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedVessel(null), 300)
  }

  return (
    <>
      <section id="fleet" className="py-24 lg:py-32 bg-gradient-to-b from-card to-background" ref={ref}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <Ship className="w-4 h-4" />
                <span>Our Fleet</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                <span className="text-gradient-ocean">27 Vessels</span>{" "}
                Ready for Deployment
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl">
                Click on any vessel to view detailed specifications including classification, displacement, and technical data.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="p-3 rounded-xl bg-card border border-border hover:border-primary hover:bg-primary/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="p-3 rounded-xl bg-card border border-border hover:border-primary hover:bg-primary/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Vessel categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {vesselCategories.map((cat) => (
              <div 
                key={cat.label}
                className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border"
              >
                <div className={`w-2 h-2 rounded-full ${cat.color}`} />
                <span className="text-sm text-foreground font-medium">{cat.count}</span>
                <span className="text-sm text-muted-foreground">{cat.label}</span>
              </div>
            ))}
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
            <motion.button
              key={vessel.shipName}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * Math.min(i, 10) }}
              className="flex-shrink-0 w-[320px] md:w-[360px] group cursor-pointer text-left"
              onClick={() => openVesselModal(vessel)}
              type="button"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-lg shadow-primary/5">
                <Image
                  src={`/vessels/${vessel.slug}.jpg`}
                  alt={vessel.shipName}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* View button */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <div>
                    <p className="text-white font-semibold">{vessel.shipName}</p>
                    <p className="text-white/70 text-sm">{vessel.type}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="px-1">
                <h3 className="text-lg font-semibold text-foreground mb-1">{vessel.shipName}</h3>
                <p className="text-sm text-muted-foreground">{vessel.type}</p>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Vessel Modal */}
      {console.log("[v0] Modal state - isOpen:", isModalOpen, "selectedVessel:", selectedVessel?.shipName)}
      <VesselModal
        vessel={selectedVessel}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  )
}
