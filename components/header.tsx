"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/lib/i18n"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  const navLinks = [
    { href: "#services", label: t("nav.solutions") },
    { href: "#industries", label: t("nav.industries") },
    { href: "#approach", label: t("nav.approach") },
    { href: "#contact", label: t("nav.contact") },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a12] border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Logo className="w-10 h-10 transition-transform duration-300 group-hover:scale-105" />
            <span className="font-semibold text-lg tracking-tight text-white">
              internal devs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Language Selector & CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSelector />
            <Button asChild className="bg-gradient-to-r from-[#4FACFE] via-[#7C6DFB] to-[#C56CF0] hover:opacity-90 transition-opacity border-0 text-white">
              <Link href="#contact">{t("nav.cta")}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSelector />
            <button
              className="p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-2 bg-gradient-to-r from-[#4FACFE] via-[#7C6DFB] to-[#C56CF0] hover:opacity-90 transition-opacity border-0 text-white">
                <Link href="#contact">{t("nav.cta")}</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
