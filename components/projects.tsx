"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Calendar, MapPin, Briefcase } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "ADNOC Offshore Platform Support",
    category: "Current Project",
    year: "2024",
    location: "Abu Dhabi",
    description: "Comprehensive vessel support and diving operations for offshore platform maintenance.",
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Subsea Pipeline Inspection",
    category: "Current Project", 
    year: "2024",
    location: "UAE Waters",
    description: "Underwater inspection and maintenance of subsea pipelines using IMCA-certified diving teams.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Drilling Rig Support Operations",
    category: "Completed",
    year: "2023",
    location: "Arabian Gulf",
    description: "24/7 safety standby and supply vessel support for offshore drilling operations.",
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=1200&auto=format&fit=crop",
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              <span>Our Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              Delivering{" "}
              <span className="text-gradient-ocean">Excellence</span>{" "}
              Across the Gulf
            </h2>
          </div>
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-xl text-foreground font-medium hover:bg-secondary transition-colors group"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group cursor-pointer bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-medium tracking-wide uppercase px-3 py-1.5 rounded-full ${
                    project.category === "Current Project" 
                      ? "bg-accent text-accent-foreground" 
                      : "bg-card/90 backdrop-blur text-foreground"
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {project.year}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {project.location}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
