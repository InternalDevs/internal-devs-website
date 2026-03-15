"use client"

import { ShoppingCart, Truck, Database } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { useLanguage } from "@/lib/i18n"

export function IndustriesSection() {
  const { t } = useLanguage()

  const industries = [
    {
      icon: ShoppingCart,
      titleKey: "feature.ecommerce",
      platformKeys: ["industries.platform.amazon", "industries.platform.mercadolibre", "industries.platform.shopify"],
    },
    {
      icon: Truck,
      titleKey: "feature.manufacturing",
      platformKeys: ["industries.platform.logistics", "industries.platform.distributors", "industries.platform.warehouse"],
    },
    {
      icon: Database,
      titleKey: "feature.financial",
      platformKeys: ["industries.platform.crm", "industries.platform.erp", "industries.platform.databases"],
    },
  ]

  return (
    <section id="industries" className="py-24 lg:py-32 bg-secondary/50 relative section-divider">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-medium text-accent uppercase tracking-wider">{t("industries.badge")}</p>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {t("industries.title")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {t("industries.description")}
            </p>
          </div>
        </ScrollReveal>

        {/* Industries grid */}
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <ScrollReveal key={index} delay={0.15 * (index + 1)}>
              <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-500 hover:-translate-y-1 h-full">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                  <industry.icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {t(industry.titleKey)}
                </h3>

                {/* Platforms */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {industry.platformKeys.map((platformKey, i) => (
                    <span
                      key={i}
                      className="inline-flex px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {t(platformKey)}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
