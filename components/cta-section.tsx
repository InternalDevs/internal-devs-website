"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { useLanguage } from "@/lib/i18n"

export function CtaSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#0a0a12] text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-[#4FACFE]/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-[#C56CF0]/10 rounded-full blur-3xl animate-pulse-glow animation-delay-200" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C6DFB]/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-tight">
              {t("cta.title")}
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              {t("cta.description")}
            </p>

            {/* CTA Button */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="text-base px-8 py-6 bg-gradient-to-r from-[#4FACFE] via-[#7C6DFB] to-[#C56CF0] hover:opacity-90 text-white border-0 shadow-lg shadow-[#7C6DFB]/30 hover:shadow-xl hover:shadow-[#7C6DFB]/40 hover:scale-[1.02] transition-all duration-300"
              >
                <Link href="https://calendly.com/carlosid/30min" target="_blank" rel="noopener noreferrer">
                  {t("cta.button")}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="text-base px-8 py-6 bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                <Link href="#services">
                  {t("cta.secondary")}
                </Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
