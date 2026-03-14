"use client"

import { TrendingUp, Package, Bot, FileText, Activity, ArrowUpRight, ShoppingCart } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const solutions = [
  {
    icon: ShoppingCart,
    title: "E-commerce AI Optimization",
    description: "AI-powered tools for marketplace sellers: automated title optimization, SEO-enhanced descriptions, competitor analysis, and multi-language listing generation for Amazon, MercadoLibre, Shopify and more.",
    highlight: true,
  },
  {
    icon: TrendingUp,
    title: "Sales Intelligence Systems",
    description: "Real-time analytics and insights to optimize sales performance and identify growth opportunities across all your channels.",
  },
  {
    icon: Package,
    title: "Inventory Forecasting AI",
    description: "Predictive models that optimize inventory levels and reduce stockouts and overstock situations using historical data.",
  },
  {
    icon: Bot,
    title: "Enterprise AI Copilots",
    description: "Intelligent assistants that help employees make better decisions with company data and automate repetitive tasks.",
  },
  {
    icon: FileText,
    title: "Document Intelligence",
    description: "AI-powered document processing that extracts insights and automates data entry from invoices, contracts and more.",
  },
  {
    icon: Activity,
    title: "Operational Analytics",
    description: "Real-time monitoring and analysis of business operations for continuous improvement and cost optimization.",
  },
]

export function SolutionsSection() {
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal<HTMLDivElement>()
  const { ref: gridRef, isRevealed: gridRevealed } = useScrollReveal<HTMLDivElement>()

  return (
    <section className="relative py-24 lg:py-32 bg-secondary/30 overflow-hidden">
      {/* Decorative gradient line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-[#7C6DFB]/50 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`max-w-2xl transition-all duration-700 ${
            headerRevealed 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-sm font-medium text-[#7C6DFB] uppercase tracking-wider">Solutions</p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Example AI Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Production-ready AI systems we&apos;ve built for enterprises across industries.
          </p>
        </div>

        {/* Solutions grid */}
        <div 
          ref={gridRef}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`group relative p-6 bg-card border rounded-xl transition-all duration-500 ${
                solution.highlight 
                  ? 'border-[#7C6DFB]/30 shadow-lg shadow-[#7C6DFB]/5' 
                  : 'border-border hover:border-foreground/20'
              } hover:shadow-md ${
                gridRevealed 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: gridRevealed ? `${index * 100}ms` : '0ms'
              }}
            >
              {solution.highlight && (
                <div className="absolute -top-3 left-6 px-3 py-1 text-xs font-medium bg-gradient-to-r from-[#4FACFE] via-[#7C6DFB] to-[#C56CF0] text-white rounded-full">
                  Featured
                </div>
              )}
              
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                  solution.highlight 
                    ? 'bg-gradient-to-br from-[#4FACFE]/20 to-[#C56CF0]/20 text-[#7C6DFB]' 
                    : 'bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground'
                }`}>
                  <solution.icon className="w-5 h-5" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    {solution.title}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
