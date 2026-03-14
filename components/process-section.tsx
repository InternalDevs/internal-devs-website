"use client"

import { Search, PenTool, Rocket, RefreshCw } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

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
    <section id="process" className="py-24 lg:py-32 bg-background relative section-divider">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-medium text-accent uppercase tracking-wider">Process</p>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Our Approach
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              A structured methodology to deliver AI systems that create measurable business impact.
            </p>
          </div>
        </ScrollReveal>

        {/* Process steps */}
        <div className="mt-16 relative">
          {/* Connection line - desktop only */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={0.15 * (index + 1)}>
                <div className="relative h-full">
                  {/* Step card */}
                  <div className="relative bg-card p-6 rounded-2xl border border-border h-full hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                    {/* Step number */}
                    <div className="absolute -top-4 left-6">
                      <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-bold bg-gradient-to-r from-[#4FACFE] via-[#7C6DFB] to-[#C56CF0] text-white rounded-full">
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
