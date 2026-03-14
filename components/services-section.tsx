import { BarChart3, Cog, Brain, ArrowUpRight } from "lucide-react"

const services = [
  {
    icon: BarChart3,
    title: "AI Data Intelligence",
    description: "Systems that analyze company data and generate insights.",
    examples: ["Sales Analytics", "Customer Analytics", "Operational Analytics"],
  },
  {
    icon: Cog,
    title: "AI Workflow Automation",
    description: "Automation of business processes using AI.",
    examples: ["Automated Reporting", "Operational Workflows", "Data Pipelines"],
  },
  {
    icon: Brain,
    title: "Predictive Business Systems",
    description: "AI models that predict future outcomes.",
    examples: ["Sales Forecasting", "Demand Prediction", "Inventory Forecasting"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent uppercase tracking-wider">Our Services</p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            AI Systems We Build
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Custom AI solutions designed to transform your business operations and unlock the value of your data.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card border border-border rounded-2xl hover:border-foreground/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-semibold text-foreground flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Examples */}
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Examples</p>
                <ul className="space-y-2">
                  {service.examples.map((example, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
