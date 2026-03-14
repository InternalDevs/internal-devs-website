"use client"

import { Code2, LineChart, Settings, Target, CheckCircle2, Award, Users, Zap, ArrowRight } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const reasons = [
  {
    icon: Code2,
    title: "AI Engineering Expertise",
    description: "Deep technical knowledge in machine learning, data engineering, and AI system architecture.",
    gradient: "from-[#4FACFE] to-[#00D9FF]"
  },
  {
    icon: LineChart,
    title: "Deep Business Data Understanding",
    description: "We understand how businesses generate and use data to drive strategic decisions.",
    gradient: "from-[#7C6DFB] to-[#A78BFA]"
  },
  {
    icon: Settings,
    title: "Custom Systems Built for Each Company",
    description: "No off-the-shelf solutions. Every system is tailored to your unique requirements.",
    gradient: "from-[#C56CF0] to-[#F472B6]"
  },
  {
    icon: Target,
    title: "Focus on Measurable Business Impact",
    description: "We measure success by the tangible results our AI systems deliver for your business.",
    gradient: "from-[#4FACFE] to-[#C56CF0]"
  },
]

const achievements = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Users, value: "85%", label: "Client Retention" },
  { icon: Zap, value: "50+", label: "AI Projects" },
]

const commitments = [
  "Production-ready AI systems",
  "Clear documentation & training",
  "Ongoing support & optimization",
  "Transparent project communication",
  "Scalable architecture design",
  "Data security & compliance",
]

export function WhySection() {
  return (
    <section className="py-28 lg:py-40 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-[#4FACFE]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-[#C56CF0]/5 rounded-full blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8">
              <Award className="w-4 h-4 text-[#C56CF0]" />
              <span className="text-sm font-medium text-foreground">Why Choose Us</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Why <span className="bg-gradient-to-r from-[#4FACFE] via-[#7C6DFB] to-[#C56CF0] bg-clip-text text-transparent">InternalDevs</span>
            </h2>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
              We combine deep AI engineering expertise with a thorough understanding of business operations to deliver systems that create real value.
            </p>
          </div>
        </ScrollReveal>

        {/* Achievement stats */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-3 gap-6 lg:gap-12 mb-20">
            {achievements.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-[#4FACFE]/10 via-[#7C6DFB]/10 to-[#C56CF0]/10 border border-primary/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 lg:w-10 lg:h-10 text-[#7C6DFB]" />
                </div>
                <div className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-[#4FACFE] via-[#7C6DFB] to-[#C56CF0] bg-clip-text text-transparent">
                  {item.value}
                </div>
                <div className="mt-2 text-sm lg:text-base text-muted-foreground">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column - Reasons */}
          <ScrollReveal variant="left">
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div 
                  key={index} 
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-[#7C6DFB]/30 hover:shadow-xl hover:shadow-[#7C6DFB]/5 transition-all duration-500 hover:-translate-x-2"
                >
                  <div className="flex items-start gap-5">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <reason.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-[#7C6DFB] transition-colors duration-300">
                        {reason.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right column - Commitment card */}
          <ScrollReveal variant="right" delay={0.2}>
            <div className="relative lg:sticky lg:top-24">
              {/* Main card */}
              <div className="bg-gradient-to-br from-[#0a0a12] via-[#0f0f1a] to-[#0a0a12] rounded-3xl p-10 lg:p-14 text-white overflow-hidden relative">
                {/* Background pattern */}
                <div 
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                  }}
                />
                
                {/* Gradient orbs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C6DFB]/20 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#4FACFE]/20 rounded-full blur-[60px]" />

                <div className="relative z-10 space-y-10">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 mb-6">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4FACFE] to-[#C56CF0]" />
                      <span className="text-xs font-medium text-white/70">Our Promise</span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold">Our Commitment</h3>
                    <p className="mt-6 text-lg text-white/60 leading-relaxed">
                      Every AI system we build is designed with scalability, maintainability, and measurable business outcomes in mind.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {commitments.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 group">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#4FACFE] to-[#C56CF0] flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white/70 group-hover:text-white transition-colors duration-300">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-8 border-t border-white/10">
                    <a 
                      href="#contact" 
                      className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#C56CF0] transition-colors duration-300 group"
                    >
                      Start your AI journey with us
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#7C6DFB]/30 rounded-full blur-3xl animate-pulse-glow" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#4FACFE]/20 rounded-full blur-3xl animate-pulse-glow animation-delay-200" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
