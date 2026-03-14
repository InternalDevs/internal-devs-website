"use client"

import { ShoppingCart, Truck, Database } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const industries = [
  {
    icon: ShoppingCart,
    title: "Ecommerce & Global Sellers",
    description: "Companies selling on platforms like:",
    platforms: ["Amazon", "Mercado Libre", "Shopify"],
    solutions: ["Sales Intelligence", "Inventory Forecasting", "Competitor Monitoring"],
  },
  {
    icon: Truck,
    title: "Supply Chain & Logistics",
    description: "Solutions for:",
    platforms: ["Logistics Operators", "Distributors", "Warehouse Operations"],
    solutions: ["Delay Prediction", "Inventory Planning", "Operational Analytics"],
  },
  {
    icon: Database,
    title: "Data-Driven Companies",
    description: "Companies with large datasets from:",
    platforms: ["CRM Systems", "ERP Systems", "Operational Databases"],
    solutions: ["AI Business Intelligence", "Enterprise AI Copilots", "Predictive Analytics"],
  },
]

export function IndustriesSection() {
  return (
    <section id="industries" className="py-24 lg:py-32 bg-secondary/50 relative section-divider">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-medium text-accent uppercase tracking-wider">Industries</p>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Industries We Work With
            </h2>
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
                  {industry.title}
                </h3>

                {/* Description & Platforms */}
                <p className="mt-3 text-muted-foreground">
                  {industry.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {industry.platforms.map((platform, i) => (
                    <span
                      key={i}
                      className="inline-flex px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {platform}
                    </span>
                  ))}
                </div>

                {/* Solutions */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Solutions</p>
                  <ul className="space-y-2">
                    {industry.solutions.map((solution, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
