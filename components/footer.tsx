"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Anchor, ArrowRight, Linkedin, Twitter, Facebook } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Marine Services", href: "#services" },
    { label: "Diving Operations", href: "#services" },
    { label: "Workshop Facilities", href: "#services" },
    { label: "Vessel Charter", href: "#fleet" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Fleet", href: "#fleet" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
  ],
  resources: [
    { label: "Careers", href: "#careers" },
    { label: "News", href: "#news" },
    { label: "Contact", href: "#contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-card">
      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-r from-primary to-accent rounded-3xl p-10 lg:p-14 overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="waves" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10 Q5 0, 10 10 T20 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#waves)" />
            </svg>
          </div>
          
          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                Ready to Partner With Us?
              </h3>
              <p className="text-white/80 max-w-md">
                Let&apos;s discuss how our 45+ years of expertise can support your offshore operations.
              </p>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 hover:shadow-xl transition-all duration-300 group"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-t border-border">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <Anchor className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-foreground">Al Mutawa</p>
                <p className="text-xs text-muted-foreground tracking-widest uppercase">Marine Works L.L.C.</p>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm mb-6">
              A wholly owned National Company registered under the laws of Abu Dhabi, 
              providing specialized technical services to the offshore oil industry since 1978.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
                { icon: Facebook, label: "Facebook" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-5">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-5">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Al Mutawa Marine Works L.L.C. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/policies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Company Policies
            </Link>
            <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Project History
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
