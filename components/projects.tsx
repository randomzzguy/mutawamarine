"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "ADNOC Offshore Platform Support",
    category: "Current Project",
    year: "2024",
    description: "Comprehensive vessel support and diving operations for offshore platform maintenance.",
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Subsea Pipeline Inspection",
    category: "Current Project", 
    year: "2024",
    description: "Underwater inspection and maintenance of subsea pipelines using IMCA-certified diving teams.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Drilling Rig Support Operations",
    category: "Completed",
    year: "2023",
    description: "24/7 safety standby and supply vessel support for offshore drilling operations.",
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=1200&auto=format&fit=crop",
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
            Projects
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-2xl">
              <span className="text-balance">
                Delivering <span className="italic">excellence</span> across the Gulf
              </span>
            </h2>
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors group"
            >
              View all projects
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden mb-6 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className={`text-xs tracking-wider uppercase px-3 py-1 ${
                    project.category === "Current Project" 
                      ? "bg-accent text-accent-foreground" 
                      : "bg-foreground/10 text-foreground backdrop-blur-sm"
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-light mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground flex-shrink-0">{project.year}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
