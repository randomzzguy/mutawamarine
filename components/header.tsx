"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X, Phone, Mail, Waves } from "lucide-react"
import Image from "next/image"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-card/95 backdrop-blur-lg shadow-lg shadow-primary/5" 
            : "bg-transparent"
        }`}
      >
        {/* Top bar with wave pattern */}
        <div className={`bg-primary text-primary-foreground transition-all duration-300 overflow-hidden ${
          isScrolled ? "h-0 opacity-0" : "h-auto opacity-100"
        }`}>
          <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between text-sm">
            <div className="flex items-center gap-8">
              <a href="tel:+97126228283" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone className="w-4 h-4" />
                <span>+971 2 622 8283</span>
              </a>
              <a href="mailto:info@mutawamarine.com" className="hidden sm:flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Mail className="w-4 h-4" />
                <span>info@mutawamarine.com</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Waves className="w-4 h-4" />
              <span className="hidden sm:inline">Abu Dhabi, UAE</span>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logos/mutawa.png"
                alt="Al Mutawa Marine Works"
                fill
                className="object-contain"
                sizes="56px"
                priority
              />
            </div>
            <div>
              <p className="text-base font-bold tracking-tight text-foreground">Al Mutawa</p>
              <p className="text-[11px] text-muted-foreground tracking-widest uppercase">Marine Works L.L.C</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-3/4 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="#contact"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              Inquire
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2.5 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-card"
          >
            {/* Ocean gradient header */}
            <div className="bg-gradient-to-r from-primary to-accent p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 bg-white/20 backdrop-blur rounded-lg p-1">
                    <Image
                      src="/logos/mutawa.png"
                      alt="Al Mutawa Marine Works"
                      fill
                      className="object-contain p-1"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Al Mutawa</p>
                    <p className="text-[10px] text-white/70 tracking-widest uppercase">Marine Works</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
            
            <nav className="p-6 space-y-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between py-4 px-4 text-lg font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
                  >
                    {item.label}
                    <Waves className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100" />
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border bg-secondary/50">
              <div className="flex flex-col gap-3 text-sm">
                <a href="tel:+97126228283" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                  +971 2 622 8283
                </a>
                <a href="mailto:info@mutawamarine.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                  info@mutawamarine.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
