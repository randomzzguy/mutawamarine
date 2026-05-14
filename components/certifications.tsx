"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useCallback, useEffect } from "react"
import { BadgeCheck, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import Image from "next/image"

const certifications = [
  {
    title: "ISO 9001:2015",
    issuer: "Bureau Veritas",
    description: "Quality Management System",
    certNo: "AB003811",
    expires: "23 October 2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ISO-9001-2015-i6mnlUtnN1ifqbGhWXrXwD5dFOv5Dm.webp",
    accent: "#c8102e",
  },
  {
    title: "ISO 14001:2015",
    issuer: "Bureau Veritas",
    description: "Environmental Management System",
    certNo: "AB003813",
    expires: "23 October 2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ISO-14001-2015-INBokH2CO1vx4ospdCf7iEt99cF9yz.webp",
    accent: "#c8102e",
  },
  {
    title: "ISO 45001:2018",
    issuer: "Bureau Veritas",
    description: "Occupational Health & Safety",
    certNo: "AB003812",
    expires: "23 October 2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ISO-45001-2018-Y70XY6VTq7qbeUuvL0HQfjax1lELYN.webp",
    accent: "#c8102e",
  },
  {
    title: "IMCA Member 2024",
    issuer: "International Marine Contractors Association",
    description: "Contractor Membership — Diving, Middle East & India",
    certNo: "—",
    expires: "31 December 2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imca-2024-1-KWMU2X91je9rWuDvJjBkRStAA9yI7l.jpg",
    accent: "#0057a8",
  },
  {
    title: "OSHAD-SF Approval",
    issuer: "Abu Dhabi Public Health Centre",
    description: "Occupational Safety & Health Framework",
    certNo: "OSHAD-SF/GD-19/TR-10/010721",
    expires: "02 July 2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OSHAD-DOT-A1l9zHBFUsv3Im9Ml6DShy95uzGYwg.webp",
    accent: "#00703c",
  },
  {
    title: "OSHAD-SF Approval",
    issuer: "Dept. of Municipalities & Transport",
    description: "Occupational Safety & Health Management System",
    certNo: "OSHAD-SF/GD-19/TR-10/010721",
    expires: "02 July 2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-2-Ximd8dcxwQPnrUKSbo09HGnjbxKqPX.jpg",
    accent: "#00703c",
  },
]

export function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), [])
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const prev = useCallback(() => {
    setLightboxIndex(i => (i === null ? null : (i - 1 + certifications.length) % certifications.length))
  }, [])

  const next = useCallback(() => {
    setLightboxIndex(i => (i === null ? null : (i + 1) % certifications.length))
  }, [])

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [lightboxIndex, closeLightbox, prev, next])

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [lightboxIndex])

  return (
    <section id="certifications" className="py-24 bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <BadgeCheck className="w-4 h-4" />
            <span>Quality & Compliance</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Industry <span className="text-gradient-ocean">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Maintaining the highest standards of quality, safety, and environmental responsibility across all operations.
          </p>
        </motion.div>

        {/* Certificate cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.button
              key={`${cert.title}-${i}`}
              type="button"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              onClick={() => openLightbox(i)}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden text-left cursor-pointer
                         hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8
                         transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={`View ${cert.title} certificate`}
            >
              {/* Accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: cert.accent }}
              />

              {/* Certificate preview */}
              <div className="relative h-52 overflow-hidden bg-muted">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center
                                  scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">{cert.issuer}</p>
                <h3 className="text-base font-semibold text-foreground mb-1">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-3">
                  <span>Valid until {cert.expires}</span>
                  <span className="text-primary font-medium group-hover:underline">View certificate</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={closeLightbox}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            {/* Panel */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
              className="relative z-10 flex flex-col md:flex-row bg-card rounded-2xl overflow-hidden shadow-2xl
                         w-full max-w-4xl max-h-[90vh]"
              onClick={e => e.stopPropagation()}
            >
              {/* Image side */}
              <div className="relative w-full md:w-1/2 min-h-[280px] md:min-h-full bg-muted flex-shrink-0">
                <Image
                  src={certifications[lightboxIndex].image}
                  alt={certifications[lightboxIndex].title}
                  fill
                  className="object-contain object-center p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Info side */}
              <div className="flex flex-col p-6 md:p-8 overflow-y-auto">
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
                  {certifications[lightboxIndex].issuer}
                </p>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {certifications[lightboxIndex].title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {certifications[lightboxIndex].description}
                </p>

                <div className="space-y-3 mt-auto">
                  {certifications[lightboxIndex].certNo !== "—" && (
                    <div className="flex items-start justify-between gap-4 py-3 border-t border-border">
                      <span className="text-sm text-muted-foreground">Certificate No.</span>
                      <span className="text-sm font-medium text-foreground text-right">{certifications[lightboxIndex].certNo}</span>
                    </div>
                  )}
                  <div className="flex items-start justify-between gap-4 py-3 border-t border-border">
                    <span className="text-sm text-muted-foreground">Valid Until</span>
                    <span className="text-sm font-medium text-foreground">{certifications[lightboxIndex].expires}</span>
                  </div>
                </div>

                {/* Navigation counter */}
                <div className="flex items-center justify-between mt-8 pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">{lightboxIndex + 1} / {certifications.length}</span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={prev}
                      className="w-9 h-9 rounded-full border border-border flex items-center justify-center
                                 hover:bg-primary hover:border-primary hover:text-primary-foreground
                                 text-foreground transition-colors duration-200"
                      aria-label="Previous certificate"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      className="w-9 h-9 rounded-full border border-border flex items-center justify-center
                                 hover:bg-primary hover:border-primary hover:text-primary-foreground
                                 text-foreground transition-colors duration-200"
                      aria-label="Next certificate"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Close button */}
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm
                           border border-border flex items-center justify-center text-foreground
                           hover:bg-destructive hover:border-destructive hover:text-destructive-foreground
                           transition-colors duration-200"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Arrow buttons (desktop outside panel) */}
            <button
              type="button"
              onClick={e => { e.stopPropagation(); prev() }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex
                         w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20
                         items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={e => { e.stopPropagation(); next() }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex
                         w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20
                         items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
