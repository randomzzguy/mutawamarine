"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X, Phone, Mail, Award } from "lucide-react"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "Projects", href: "#projects" },
  { label: "News", href: "#news" },
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
          isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        {/* Top bar */}
        <div className={`border-b border-border/50 transition-all duration-300 ${isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"}`}>
          <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-6">
              <a href="tel:971-2-5552800" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="w-3 h-3" />
                <span>+971-2-5552800</span>
              </a>
              <a href="mailto:info@mutawamarine.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="w-3 h-3" />
                <span>info@mutawamarine.com</span>
              </a>
            </div>
            <Link href="#certificates" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Award className="w-3 h-3" />
              <span>Certificates & Awards</span>
            </Link>
          </div>
        </div>

        {/* Main nav */}
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">M</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold tracking-wide">AL MUTAWA</p>
              <p className="text-[10px] text-muted-foreground tracking-widest uppercase">Marine Works</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Get in Touch
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 hover:bg-secondary transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
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
            className="fixed inset-0 z-50 bg-background"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">M</span>
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-wide">AL MUTAWA</p>
                  <p className="text-[10px] text-muted-foreground tracking-widest uppercase">Marine Works</p>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-secondary transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
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
                    className="block py-4 text-2xl font-light border-b border-border hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border">
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <a href="tel:971-2-5552800" className="hover:text-foreground transition-colors">+971-2-5552800</a>
                <a href="mailto:info@mutawamarine.com" className="hover:text-foreground transition-colors">info@mutawamarine.com</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
