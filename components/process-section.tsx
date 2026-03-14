"use client"

import { Search, PenTool, Rocket, RefreshCw, ArrowRight } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description: "We analyze your data, systems and processes to understand your unique challenges and opportunities.",
    details: ["Data audit", "Process mapping", "Opportunity assessment"]
  },
  {
    number: "02",
    icon: PenTool,
    title: "AI System Design",
    description: "We design the architecture and integration plan tailored to your specific business requirements.",
    details: ["Solution architecture", "Integration planning", "ROI projection"]
  },
  {
    number: "03",
    icon: Rocket,
    title: "Implementation",
    description: "We build and deploy the AI system with rigorous testing and seamless integration.",
    details: ["Agile development", "Quality assurance", "Gradual deployment"]
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Continuous Optimization",
    description: "We monitor and improve the system to ensure optimal performance and ROI.",
    details: ["Performance monitoring", "Iterative improvements", "24/7 support"]
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-gradient-to-b from-background via-secondary/30 to-background relative section-divider overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#4FACFE]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#C56CF0]/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4FACFE] to-[#C56CF0]" />
              <span className="text-sm font-medium text-foreground">Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Our Approach
            </h2>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">
              A structured methodology refined over <span className="text-foreground font-semibold">10+ years</span> to deliver AI systems that create measurable business impact.
            </p>
          </div>
        </ScrollReveal>

        {/* Process steps - Desktop Timeline */}
        <div className="mt-20 hidden lg:block">
          {/* Connection line */}
          <div className="relative h-1 bg-gradient-to-r from-[#4FACFE] via-[#7C6DFB] to-[#C56CF0] rounded-full mb-16 opacity-30" />
          
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={0.15 * (index + 1)}>
                <div className="relative group">
                  {/* Connector dot */}
                  <div className="absolute -top-[4.25rem] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-[#4FACFE] via-[#7C6DFB] to-[#C56CF0] shadow-lg shadow-[#7C6DFB]/30" />
                  
                  {/* Step card */}
                  <div className="relative bg-card p-8 rounded-2xl border border-border h-full hover:border-[#7C6DFB]/30 hover:shadow-xl hover:shadow-[#7C6DFB]/5 transition-all duration-500 hover:-translate-y-2">
                    {/* Step number badge */}
                    <div className="absolute -top-4 left-8">
                      <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-bold bg-gradient-to-r from-[#4FACFE] via-[#7C6DFB] to-[#C56CF0] text-white rounded-full">
                        Step {step.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="mt-4 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-7 h-7 text-foreground" />
                    </div>

                    {/* Content */}
                    <h3 className="mt-5 text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details list */}
                    <div className="mt-5 pt-5 border-t border-border space-y-2">
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <ArrowRight className="w-3 h-3 text-[#7C6DFB]" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Process steps - Mobile/Tablet */}
        <div className="mt-16 lg:hidden space-y-6">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={0.1 * (index + 1)}>
              <div className="relative">
                {/* Vertical line connector */}
                {index < steps.length - 1 && (
                  <div className="absolute left-7 top-20 bottom-0 w-0.5 bg-gradient-to-b from-[#7C6DFB]/50 to-transparent" />
                )}
                
                <div className="flex gap-6">
                  {/* Step number */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#4FACFE] via-[#7C6DFB] to-[#C56CF0] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[#7C6DFB]/20">
                    {step.number}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className="w-5 h-5 text-[#7C6DFB]" />
                      <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {step.details.map((detail, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
