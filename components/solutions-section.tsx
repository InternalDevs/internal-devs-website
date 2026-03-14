import { TrendingUp, Package, Bot, FileText, Activity, ArrowUpRight } from "lucide-react"

const solutions = [
  {
    icon: TrendingUp,
    title: "Sales Intelligence Systems",
    description: "Real-time analytics and insights to optimize sales performance and identify growth opportunities.",
  },
  {
    icon: Package,
    title: "Inventory Forecasting AI",
    description: "Predictive models that optimize inventory levels and reduce stockouts and overstock situations.",
  },
  {
    icon: Bot,
    title: "Enterprise AI Copilots",
    description: "Intelligent assistants that help employees make better decisions with company data.",
  },
  {
    icon: FileText,
    title: "Document Intelligence",
    description: "AI-powered document processing that extracts insights and automates data entry.",
  },
  {
    icon: Activity,
    title: "Operational Analytics",
    description: "Real-time monitoring and analysis of business operations for continuous improvement.",
  },
]

export function SolutionsSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent uppercase tracking-wider">Solutions</p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Example AI Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Production-ready AI systems we&apos;ve built for enterprises across industries.
          </p>
        </div>

        {/* Solutions grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative p-6 bg-card border border-border rounded-xl hover:border-foreground/20 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
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
