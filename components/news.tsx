"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const news = [
  {
    title: "Subsea inspection and maintenance of vessels and drilling rigs",
    excerpt: "Our team successfully completed comprehensive underwater inspection services using state-of-the-art equipment.",
    date: "June 18, 2024",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "New vessel addition to our offshore fleet",
    excerpt: "Al Mutawa Marine Works expands its fleet with the acquisition of a new diving support vessel.",
    date: "May 10, 2024",
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "IMCA certification renewal completed",
    excerpt: "Successfully renewed our International Marine Contractors Association membership and certifications.",
    date: "April 22, 2024",
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=800&auto=format&fit=crop",
  },
]

export function News() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="news" className="py-32 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
              Latest News
            </span>
            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              <span className="text-balance">
                Industry <span className="italic">insights</span>
              </span>
            </h2>
          </div>
          <Link
            href="#news"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors group"
          >
            View all news
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/2] overflow-hidden mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="text-xs text-muted-foreground">{item.date}</span>
              <h3 className="text-lg font-light mt-2 mb-3 group-hover:text-accent transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
