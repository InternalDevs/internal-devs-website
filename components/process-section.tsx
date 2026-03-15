"use client"

import { Search, PenTool, Rocket, RefreshCw, ArrowRight, Sparkles } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { useLanguage } from "@/lib/i18n"

export function ProcessSection() {
  const { t } = useLanguage()

  const steps = [
    {
      number: "01",
      icon: Search,
      titleKey: "approach.step1.title",
      descriptionKey: "approach.step1.description",
      gradient: "from-[#4FACFE] to-[#00D9FF]"
    },
    {
      number: "02",
      icon: PenTool,
      titleKey: "approach.step2.title",
      descriptionKey: "approach.step2.description",
      gradient: "from-[#7C6DFB] to-[#A78BFA]"
    },
    {
      number: "03",
      icon: Rocket,
      titleKey: "approach.step3.title",
      descriptionKey: "approach.step3.description",
      gradient: "from-[#C56CF0] to-[#F472B6]"
    },
    {
      number: "04",
      icon: RefreshCw,
      titleKey: "approach.step4.title",
      descriptionKey: "approach.step4.description",
      gradient: "from-[#4FACFE] to-[#C56CF0]"
    },
  ]

  return (
    <section id="approach" className="py-28 lg:py-40 bg-[#0a0a12] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#4FACFE]/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#C56CF0]/8 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#7C6DFB]/5 rounded-full blur-[200px]" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <Sparkles className="w-4 h-4 text-[#C56CF0]" />
              <span className="text-sm font-medium text-white/80">{t("approach.badge")}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              {t("approach.title")}
            </h2>
            <p className="mt-8 text-xl lg:text-2xl text-white/60 leading-relaxed">
              {t("approach.description")}
            </p>
          </div>
        </ScrollReveal>

        {/* Process steps - Desktop */}
        <div className="mt-24 hidden lg:block">
          {/* Main connection line */}
          <div className="relative mb-20">
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-[#4FACFE] via-[#7C6DFB] to-[#C56CF0] rounded-full" />
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-[#4FACFE] via-[#7C6DFB] to-[#C56CF0] rounded-full blur-lg opacity-50" />
            
            {/* Step indicators on line */}
            <div className="flex justify-between relative">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center shadow-lg shadow-[#7C6DFB]/30`}>
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={0.15 * (index + 1)}>
                <div className="relative group h-full">
                  {/* Step card */}
                  <div className="relative bg-white/[0.03] backdrop-blur-sm p-8 rounded-3xl border border-white/10 h-full hover:border-white/20 hover:bg-white/[0.05] transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#7C6DFB]/10">
                    {/* Step number badge */}
                    <div className="absolute -top-5 left-8">
                      <span className={`inline-flex items-center justify-center px-4 py-2 text-sm font-bold bg-gradient-to-r ${step.gradient} text-white rounded-full shadow-lg`}>
                        Step {step.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`mt-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="mt-6 text-2xl font-bold text-white">
                      {t(step.titleKey)}
                    </h3>
                    <p className="mt-4 text-white/60 leading-relaxed">
                      {t(step.descriptionKey)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Process steps - Mobile/Tablet */}
        <div className="mt-20 lg:hidden space-y-8">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={0.1 * (index + 1)}>
              <div className="relative">
                {/* Vertical line connector */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-[#7C6DFB]/50 to-transparent" />
                )}
                
                <div className="flex gap-6">
                  {/* Step number */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-xl shadow-xl shadow-[#7C6DFB]/30`}>
                    {step.number}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className="w-5 h-5 text-[#7C6DFB]" />
                      <h3 className="text-xl font-bold text-white">{t(step.titleKey)}</h3>
                    </div>
                    <p className="text-white/60 leading-relaxed">
                      {t(step.descriptionKey)}
                    </p>
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
