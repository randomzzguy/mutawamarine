"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Anchor, ArrowLeft, Upload, CheckCircle2, Briefcase,
  Users, Globe, Award, ChevronDown, X, FileText
} from "lucide-react"

const positions = [
  "Business Development Manager",
  "Business and Public Relations Officer",
  "Supervisor",
  "Accountant",
  "Master",
  "Chief Mate",
  "Chief Engineer",
  "2nd Mate",
  "2nd Eng",
  "3rd Eng",
  "Senior DPO",
  "Junior DPO",
  "Bosun",
  "Crane Operator",
  "AB",
  "Oiler",
  "DPO",
  "Diving Supervisor",
  "Maintenance Diver",
  "Inspection Diver",
  "Report Coordinator (3.4u)",
]

const perks = [
  { icon: Globe, title: "Offshore Experience", description: "Work across the Arabian Gulf on world-class projects for top-tier oil & gas clients." },
  { icon: Award, title: "IMCA Certified Operations", description: "Be part of a team operating to the highest international marine standards." },
  { icon: Users, title: "Multinational Team", description: "Join a diverse crew of 500+ professionals from across the globe." },
  { icon: Briefcase, title: "Career Growth", description: "45+ years of history means deep expertise and structured career development paths." },
]

type FormState = {
  position: string
  experience: string
  qualification: string
  name: string
  mobile: string
  email: string
  remark: string
  resume: File | null
}

const emptyForm: FormState = {
  position: "",
  experience: "",
  qualification: "",
  name: "",
  mobile: "",
  email: "",
  remark: "",
  resume: null,
}

export default function CareersPage() {
  const [form, setForm] = useState<FormState>(emptyForm)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [positionOpen, setPositionOpen] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const set = (field: keyof FormState, value: string | File | null) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  const validate = () => {
    const e: typeof errors = {}
    if (!form.position)    e.position    = "Please select a position."
    if (!form.experience)  e.experience  = "Required."
    if (!form.qualification) e.qualification = "Required."
    if (!form.name)        e.name        = "Required."
    if (!form.mobile)      e.mobile      = "Required."
    if (!form.email)       e.email       = "Required."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email."
    if (!form.resume)      e.resume      = "Please attach your CV / resume."
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setSubmitted(true)
  }

  const inputBase =
    "w-full px-4 py-3 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200"
  const errorBorder = "border-red-400"
  const normalBorder = "border-border"

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="w-9 h-9 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <Anchor className="w-4 h-4 text-white" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-foreground leading-none">Al Mutawa</p>
              <p className="text-[10px] text-muted-foreground tracking-widest uppercase">Marine Works L.L.C.</p>
            </div>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-28">
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-16 opacity-10">
          <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 32C240 0 480 64 720 32C960 0 1200 64 1440 32V64H0V32Z" fill="currentColor" className="text-primary" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              We&apos;re Hiring
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5 text-balance">
              Build Your Career at Sea
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join a team of 500+ marine professionals supporting the offshore oil &amp; gas industry 
              across the Arabian Gulf. 45+ years of excellence — and growing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl shadow-primary/5"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3">Application Submitted!</h2>
              <p className="text-muted-foreground max-w-sm mx-auto mb-8">
                Thank you, {form.name}. We&apos;ll review your application for the <strong>{form.position}</strong> position and be in touch soon.
              </p>
              <button
                onClick={() => { setForm(emptyForm); setSubmitted(false) }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Submit Another Application
              </button>
            </motion.div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Apply Now</h2>
                <p className="text-muted-foreground">Fill in your details and attach your CV. All fields marked are required.</p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Row 1 */}
                <div className="grid sm:grid-cols-3 gap-4">
                  {/* Position dropdown */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setPositionOpen((o) => !o)}
                      className={`${inputBase} ${errors.position ? errorBorder : normalBorder} flex items-center justify-between text-left ${!form.position ? "text-muted-foreground" : "text-foreground"}`}
                    >
                      <span className="truncate">{form.position || "Position Applied For"}</span>
                      <ChevronDown className={`w-4 h-4 flex-shrink-0 ml-2 transition-transform duration-200 ${positionOpen ? "rotate-180" : ""}`} />
                    </button>
                    {positionOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute z-50 mt-1 w-full max-h-60 overflow-y-auto bg-card border border-border rounded-xl shadow-xl shadow-foreground/10 py-1"
                      >
                        {positions.map((pos) => (
                          <li key={pos}>
                            <button
                              type="button"
                              onClick={() => { set("position", pos); setPositionOpen(false); setErrors(p => ({ ...p, position: undefined })) }}
                              className={`w-full text-left px-4 py-2.5 text-sm hover:bg-primary/10 hover:text-primary transition-colors ${form.position === pos ? "bg-primary/10 text-primary font-medium" : "text-foreground"}`}
                            >
                              {pos}
                            </button>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                    {errors.position && <p className="mt-1 text-xs text-red-500">{errors.position}</p>}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Years of Experience"
                      value={form.experience}
                      onChange={(e) => { set("experience", e.target.value); setErrors(p => ({ ...p, experience: undefined })) }}
                      className={`${inputBase} ${errors.experience ? errorBorder : normalBorder}`}
                    />
                    {errors.experience && <p className="mt-1 text-xs text-red-500">{errors.experience}</p>}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Qualification"
                      value={form.qualification}
                      onChange={(e) => { set("qualification", e.target.value); setErrors(p => ({ ...p, qualification: undefined })) }}
                      className={`${inputBase} ${errors.qualification ? errorBorder : normalBorder}`}
                    />
                    {errors.qualification && <p className="mt-1 text-xs text-red-500">{errors.qualification}</p>}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={(e) => { set("name", e.target.value); setErrors(p => ({ ...p, name: undefined })) }}
                      className={`${inputBase} ${errors.name ? errorBorder : normalBorder}`}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Mobile No."
                      value={form.mobile}
                      onChange={(e) => { set("mobile", e.target.value); setErrors(p => ({ ...p, mobile: undefined })) }}
                      className={`${inputBase} ${errors.mobile ? errorBorder : normalBorder}`}
                    />
                    {errors.mobile && <p className="mt-1 text-xs text-red-500">{errors.mobile}</p>}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={(e) => { set("email", e.target.value); setErrors(p => ({ ...p, email: undefined })) }}
                      className={`${inputBase} ${errors.email ? errorBorder : normalBorder}`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>
                </div>

                {/* Remark */}
                <div>
                  <textarea
                    placeholder="Remark (optional)"
                    rows={4}
                    value={form.remark}
                    onChange={(e) => set("remark", e.target.value)}
                    className={`${inputBase} ${normalBorder} resize-none`}
                  />
                </div>

                {/* Resume upload */}
                <div>
                  <input
                    ref={fileRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0] ?? null
                      set("resume", file)
                      setErrors(p => ({ ...p, resume: undefined }))
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => fileRef.current?.click()}
                    className={`inline-flex items-center gap-3 px-5 py-3 rounded-xl border-2 border-dashed transition-all duration-200 group hover:border-primary hover:bg-primary/5 ${errors.resume ? "border-red-400" : "border-border"}`}
                  >
                    <Upload className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                      {form.resume ? (
                        <span className="flex items-center gap-2 text-foreground">
                          <FileText className="w-4 h-4 text-primary" />
                          {form.resume.name}
                        </span>
                      ) : (
                        "Upload Resume / CV  (.pdf, .doc, .docx)"
                      )}
                    </span>
                    {form.resume && (
                      <span
                        role="button"
                        tabIndex={0}
                        onClick={(e) => { e.stopPropagation(); set("resume", null) }}
                        onKeyDown={(e) => e.key === "Enter" && set("resume", null)}
                        className="ml-1 text-muted-foreground hover:text-red-500 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </span>
                    )}
                  </button>
                  {errors.resume && <p className="mt-1 text-xs text-red-500">{errors.resume}</p>}
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.99] transition-all duration-200"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </>
          )}
        </motion.div>
      </section>

      {/* Footer strip */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Al Mutawa Marine Works L.L.C. All rights reserved.
          </p>
          <Link href="/policies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Company Policies
          </Link>
        </div>
      </div>
    </div>
  )
}
