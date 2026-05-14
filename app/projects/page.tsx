"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { 
  ArrowLeft, 
  Ship, 
  Building2, 
  Calendar, 
  Search, 
  Filter,
  ChevronDown,
  Anchor,
  CheckCircle2,
  Clock,
  X
} from "lucide-react"
import { currentProjects, completedProjects, getAllClients, type Project } from "@/lib/projects-data"

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<"current" | "completed">("current")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedClient, setSelectedClient] = useState<string | null>(null)
  const [selectedDecade, setSelectedDecade] = useState<string | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  const clients = useMemo(() => getAllClients(), [])
  
  const decades = useMemo(() => {
    const uniqueDecades = new Set<string>()
    completedProjects.forEach(p => {
      if (p.year) {
        const decade = Math.floor(p.year / 10) * 10
        uniqueDecades.add(`${decade}s`)
      }
    })
    return Array.from(uniqueDecades).sort().reverse()
  }, [])

  const filteredProjects = useMemo(() => {
    const projects = activeTab === "current" ? currentProjects : completedProjects
    
    return projects.filter(project => {
      const matchesSearch = searchQuery === "" || 
        project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.activity.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (project.vessel?.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesClient = !selectedClient || project.client === selectedClient
      
      const matchesDecade = !selectedDecade || (
        project.year && 
        Math.floor(project.year / 10) * 10 === parseInt(selectedDecade)
      )
      
      return matchesSearch && matchesClient && matchesDecade
    })
  }, [activeTab, searchQuery, selectedClient, selectedDecade])

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedClient(null)
    setSelectedDecade(null)
  }

  const hasActiveFilters = searchQuery || selectedClient || selectedDecade

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center gap-2">
              <Anchor className="w-6 h-6 text-primary" />
              <span className="font-semibold text-foreground">Al Mutawa Marine</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="absolute bottom-0 left-0 w-full opacity-5" viewBox="0 0 1440 320">
            <path fill="currentColor" className="text-primary" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Ship className="w-4 h-4" />
              Our Track Record
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Projects & Operations
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Over 45 years of successful offshore operations, vessel charters, and diving services 
              for the oil & gas industry across the Arabian Gulf region.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
          >
            {[
              { value: currentProjects.length, label: "Active Projects" },
              { value: completedProjects.length + "+", label: "Completed Projects" },
              { value: "30+", label: "Years of Records" },
              { value: "15+", label: "Major Clients" },
            ].map((stat, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="flex gap-2 p-1 bg-muted rounded-xl">
              <button
                onClick={() => { setActiveTab("current"); clearFilters() }}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === "current"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Clock className="w-4 h-4" />
                Current ({currentProjects.length})
              </button>
              <button
                onClick={() => { setActiveTab("completed"); clearFilters() }}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === "completed"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                Completed ({completedProjects.length})
              </button>
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                showFilters || hasActiveFilters
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
              }`}
            >
              <Filter className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <span className="w-2 h-2 rounded-full bg-primary" />
              )}
            </button>
          </div>

          {/* Filters Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="bg-card rounded-2xl border border-border p-6 mb-8">
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Search */}
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Search
                      </label>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="text"
                          placeholder="Search by client, vessel, or activity..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                      </div>
                    </div>

                    {/* Client Filter */}
                    <div className="md:w-64">
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Client
                      </label>
                      <div className="relative">
                        <select
                          value={selectedClient || ""}
                          onChange={(e) => setSelectedClient(e.target.value || null)}
                          className="w-full appearance-none px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all pr-10"
                        >
                          <option value="">All Clients</option>
                          {clients.map(client => (
                            <option key={client} value={client}>{client}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>

                    {/* Decade Filter (only for completed) */}
                    {activeTab === "completed" && (
                      <div className="md:w-48">
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                          Decade
                        </label>
                        <div className="relative">
                          <select
                            value={selectedDecade || ""}
                            onChange={(e) => setSelectedDecade(e.target.value || null)}
                            className="w-full appearance-none px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all pr-10"
                          >
                            <option value="">All Time</option>
                            {decades.map(decade => (
                              <option key={decade} value={decade.replace("s", "")}>{decade}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                        </div>
                      </div>
                    )}
                  </div>

                  {hasActiveFilters && (
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
                      <span className="text-sm text-muted-foreground">Active filters:</span>
                      {searchQuery && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                          &quot;{searchQuery}&quot;
                          <button onClick={() => setSearchQuery("")} className="hover:text-primary/70">
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      )}
                      {selectedClient && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                          {selectedClient}
                          <button onClick={() => setSelectedClient(null)} className="hover:text-primary/70">
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      )}
                      {selectedDecade && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                          {selectedDecade}s
                          <button onClick={() => setSelectedDecade(null)} className="hover:text-primary/70">
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      )}
                      <button
                        onClick={clearFilters}
                        className="text-sm text-muted-foreground hover:text-foreground ml-auto"
                      >
                        Clear all
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredProjects.length}</span> projects
            </p>
          </div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <Ship className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-lg text-muted-foreground">No projects found matching your criteria.</p>
              <button
                onClick={clearFilters}
                className="mt-4 text-primary hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Join our growing list of satisfied clients. Contact us to discuss your offshore requirements.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-colors"
          >
            Get in Touch
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Al Mutawa Marine Works LLC. All rights reserved.
            </p>
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
    >
      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
        {/* Status Badge */}
        <div className="flex items-center gap-3 lg:w-48 flex-shrink-0">
          <div className={`w-3 h-3 rounded-full ${
            project.status === "current" ? "bg-green-500 animate-pulse" : "bg-muted-foreground"
          }`} />
          <span className={`text-sm font-medium ${
            project.status === "current" ? "text-green-600 dark:text-green-400" : "text-muted-foreground"
          }`}>
            {project.status === "current" ? "Active" : project.period || "Completed"}
          </span>
        </div>

        {/* Client */}
        <div className="lg:w-56 flex-shrink-0">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-primary" />
            <span className="font-semibold text-foreground">{project.client}</span>
          </div>
        </div>

        {/* Vessel */}
        {project.vessel && (
          <div className="lg:w-40 flex-shrink-0">
            <div className="flex items-center gap-2">
              <Ship className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">{project.vessel}</span>
            </div>
          </div>
        )}

        {/* Activity */}
        <div className="flex-1 min-w-0">
          <p className="text-muted-foreground group-hover:text-foreground transition-colors line-clamp-2">
            {project.activity}
          </p>
        </div>

        {/* Year Badge (for completed) */}
        {project.year && (
          <div className="flex-shrink-0">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">
              <Calendar className="w-3 h-3" />
              {project.year}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  )
}
