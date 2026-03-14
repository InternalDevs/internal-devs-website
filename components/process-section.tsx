import { Search, PenTool, Rocket, RefreshCw } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description: "We analyze your data, systems and processes to understand your unique challenges and opportunities.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "AI System Design",
    description: "We design the architecture and integration plan tailored to your specific business requirements.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Implementation",
    description: "We build and deploy the AI system with rigorous testing and seamless integration.",
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Continuous Optimization",
    description: "We monitor and improve the system to ensure optimal performance and ROI.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium text-accent uppercase tracking-wider">Process</p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Our Approach
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            A structured methodology to deliver AI systems that create measurable business impact.
          </p>
        </div>

        {/* Process steps */}
        <div className="mt-16 relative">
          {/* Connection line - desktop only */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step card */}
                <div className="relative bg-card p-6 rounded-2xl border border-border h-full">
                  {/* Step number */}
                  <div className="absolute -top-4 left-6">
                    <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-bold bg-primary text-primary-foreground rounded-full">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mt-4 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
