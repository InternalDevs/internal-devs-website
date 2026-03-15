"use client"

import { BarChart3, Cog, Brain, Layers, ArrowUpRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useLanguage } from "@/lib/i18n"

export function ServicesSection() {
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal<HTMLDivElement>()
  const { ref: gridRef, isRevealed: gridRevealed } = useScrollReveal<HTMLDivElement>()
  const { t } = useLanguage()

  const services = [
    {
      icon: BarChart3,
      titleKey: "services.intelligence.title",
      descriptionKey: "services.intelligence.description",
    },
    {
      icon: Cog,
      titleKey: "services.automation.title",
      descriptionKey: "services.automation.description",
    },
    {
      icon: Layers,
      titleKey: "services.integration.title",
      descriptionKey: "services.integration.description",
    },
    {
      icon: Brain,
      titleKey: "services.custom.title",
      descriptionKey: "services.custom.description",
    },
  ]

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-[#7C6DFB]/50 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`max-w-2xl transition-all duration-700 ${
            headerRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-sm font-medium text-[#7C6DFB] uppercase tracking-wider">{t("services.badge")}</p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            {t("services.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {t("services.description")}
          </p>
        </div>

        <div ref={gridRef} className="mt-16 grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-card border border-border rounded-2xl hover:border-[#7C6DFB]/30 hover:shadow-lg hover:shadow-[#7C6DFB]/5 transition-all duration-500 ${
                gridRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: gridRevealed ? `${index * 150}ms` : '0ms' }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4FACFE]/10 to-[#C56CF0]/10 flex items-center justify-center group-hover:from-[#4FACFE]/20 group-hover:to-[#C56CF0]/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-[#7C6DFB]" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-foreground flex items-center gap-2">
                {t(service.titleKey)}
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-[#7C6DFB]" />
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {t(service.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
