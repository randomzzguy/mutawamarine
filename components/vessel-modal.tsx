"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Ship, Anchor, Calendar, MapPin, Gauge, Flag } from "lucide-react"
import type { VesselSpec } from "@/lib/vessel-data"
import Image from "next/image"

interface VesselModalProps {
  vessel: VesselSpec | null
  isOpen: boolean
  onClose: () => void
}

export function VesselModal({ vessel, isOpen, onClose }: VesselModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Generate image paths for the vessel (we'll have multiple images per vessel)
  const getVesselImages = (slug: string) => {
    return [`/vessels/${slug}.jpg`]
  }

  const images = vessel ? getVesselImages(vessel.slug) : []

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    setCurrentImageIndex(0)
  }, [vessel])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (!vessel) return null

  const specs = [
    { label: "Year Built", value: vessel.yearBuilt, icon: Calendar },
    { label: "Classification", value: vessel.classification, icon: Ship },
    { label: "Port of Registry", value: vessel.portOfRegistry, icon: MapPin },
    { label: "Call Sign", value: vessel.callSign, icon: Anchor },
    { label: "Flag", value: vessel.flag, icon: Flag },
    { label: "Speed", value: vessel.speed, icon: Gauge },
    { label: "Place Built", value: vessel.placeBuilt, icon: MapPin },
    { label: "GRT / NRT / DWT", value: vessel.grtNrtDwt, icon: Ship },
    { label: "Light Displacement", value: vessel.lightDisplacement !== "-" ? `${vessel.lightDisplacement} T` : "-", icon: Anchor },
    { label: "Max Displacement", value: vessel.maxDisplacement !== "-" ? `${vessel.maxDisplacement} T` : "-", icon: Anchor },
    { label: "Operational Displacement", value: vessel.operationalDisplacement !== "-" ? `${vessel.operationalDisplacement} T` : "-", icon: Anchor },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-card rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto max-h-[90vh]">
              {/* Image Gallery Section */}
              <div className="relative h-64 sm:h-80 md:h-96 bg-muted">
                <Image
                  src={images[currentImageIndex]}
                  alt={vessel.shipName}
                  fill
                  className="object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                
                {/* Image Navigation - only show if multiple images */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    
                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? "bg-white" : "bg-white/50"
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}

                {/* Vessel Name Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-block px-3 py-1 mb-2 text-xs font-medium tracking-wider uppercase bg-primary text-primary-foreground rounded">
                    {vessel.type}
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    {vessel.shipName}
                  </h2>
                </div>
              </div>

              {/* Specifications Section */}
              <div className="p-6 md:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Ship className="w-5 h-5 text-primary" />
                  Vessel Specifications
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {specs.map((spec, index) => (
                    <motion.div
                      key={spec.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="p-4 bg-muted/50 rounded-lg border border-border/50"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <spec.icon className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          {spec.label}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-foreground">
                        {spec.value || "-"}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Enquiry Button */}
                <div className="mt-8 flex justify-center">
                  <a
                    href="#contact"
                    onClick={onClose}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Anchor className="w-4 h-4" />
                    Enquire About This Vessel
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
