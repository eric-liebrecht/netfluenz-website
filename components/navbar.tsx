"use client"

import { Menu, X, Zap } from "lucide-react"
import { useState } from "react"

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-[0_0_16px_rgba(147,51,234,0.6)]">
              <Zap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-serif font-bold text-lg text-foreground tracking-tight">
              Netfluenz
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#pricing"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Log in
            </a>
            <a
              href="#cta"
              className="px-4 py-2 rounded-full text-sm font-medium text-primary-foreground bg-primary hover:opacity-90 transition-all shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_30px_rgba(147,51,234,0.6)]"
            >
              Get Started Free
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <a href="#pricing" className="text-base text-muted-foreground py-2">
              Log in
            </a>
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="px-5 py-3 rounded-full text-sm font-medium text-center text-primary-foreground bg-primary shadow-[0_0_20px_rgba(147,51,234,0.4)]"
            >
              Get Started Free
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
