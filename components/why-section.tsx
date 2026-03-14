"use client"

import { Code2, LineChart, Settings, Target, CheckCircle2, Shield, Users, Zap } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const reasons = [
  {
    icon: Code2,
    title: "AI Engineering Expertise",
    description: "Deep technical knowledge in machine learning, data engineering, and AI system architecture.",
    highlight: "10+ years"
  },
  {
    icon: LineChart,
    title: "Deep Business Data Understanding",
    description: "We understand how businesses generate and use data to drive strategic decisions.",
    highlight: "50+ projects"
  },
  {
    icon: Settings,
    title: "Custom Systems Built for Each Company",
    description: "No off-the-shelf solutions. Every system is tailored to your unique requirements.",
    highlight: "100% custom"
  },
  {
    icon: Target,
    title: "Focus on Measurable Business Impact",
    description: "We measure success by the tangible results our AI systems deliver for your business.",
    highlight: "ROI driven"
  },
]

const commitments = [
  { icon: Shield, text: "Production-ready AI systems" },
  { icon: Users, text: "Clear documentation & training" },
  { icon: Zap, text: "Ongoing support & optimization" },
  { icon: CheckCircle2, text: "Transparent project communication" },
]

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "85%", label: "Client Retention" },
]

export function WhySection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/20 relative section-divider overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#7C6DFB]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#4FACFE]/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4FACFE] to-[#C56CF0]" />
              <span className="text-sm font-medium text-foreground">Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Why InternalDevs
            </h2>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">
              We combine deep AI engineering expertise with a thorough understanding of business operations to deliver systems that create real value.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats bar */}
        <ScrollReveal delay={0.1}>
          <div className="mb-16 p-6 rounded-2xl bg-gradient-to-r from-[#0a0a12] via-[#0f0f1a] to-[#0a0a12] border border-white/5">
            <div className="grid grid-cols-3 divide-x divide-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-4">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#4FACFE] via-[#7C6DFB] to-[#C56CF0] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column - Reasons */}
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <ScrollReveal key={index} variant="left" delay={0.1 * (index + 1)}>
                <div className="group relative p-6 rounded-2xl bg-card border border-border hover:border-[#7C6DFB]/30 hover:shadow-xl hover:shadow-[#7C6DFB]/5 transition-all duration-500">
                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <reason.icon className="w-7 h-7 text-foreground" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{reason.title}</h3>
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gradient-to-r from-[#4FACFE]/10 to-[#C56CF0]/10 text-[#7C6DFB] border border-[#7C6DFB]/20">
                          {reason.highlight}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Right column - Commitment card */}
          <ScrollReveal variant="right" delay={0.2}>
            <div className="relative h-full">
              <div className="sticky top-24 bg-gradient-to-br from-[#0a0a12] via-[#0f0f1a] to-[#0a0a12] rounded-2xl p-8 lg:p-10 text-white border border-white/5 overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#4FACFE]/20 to-transparent rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#C56CF0]/20 to-transparent rounded-full blur-2xl" />
                
                <div className="relative z-10 space-y-8">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                      Our Commitment
                    </h3>
                    <p className="mt-4 text-white/70 leading-relaxed">
                      Every AI system we build is designed with scalability, maintainability, and measurable business outcomes in mind.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {commitments.map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 group">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#4FACFE]/20 to-[#C56CF0]/20 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-[#4FACFE] group-hover:text-[#C56CF0] transition-colors duration-300" />
                        </div>
                        <span className="text-white/80 group-hover:text-white transition-colors duration-300 font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Trust badge */}
                  <div className="pt-6 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4FACFE] to-[#C56CF0] border-2 border-[#0a0a12] flex items-center justify-center text-xs font-bold text-white">
                            {String.fromCharCode(64 + i)}
                          </div>
                        ))}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">Trusted by industry leaders</div>
                        <div className="text-xs text-white/50">Join 50+ satisfied clients</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#7C6DFB]/30 rounded-full blur-2xl animate-pulse-glow" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#4FACFE]/20 rounded-full blur-2xl animate-pulse-glow animation-delay-200" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
