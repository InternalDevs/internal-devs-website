"use client"

import { Database, FileSpreadsheet, TrendingDown } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useLanguage } from "@/lib/i18n"

export function ProblemSection() {
  const { ref: contentRef, isRevealed: contentRevealed } = useScrollReveal<HTMLDivElement>()
  const { ref: cardsRef, isRevealed: cardsRevealed } = useScrollReveal<HTMLDivElement>()
  const { t } = useLanguage()

  const problems = [
    { icon: Database, titleKey: "problem.disconnected.title", descKey: "problem.disconnected.description" },
    { icon: FileSpreadsheet, titleKey: "problem.manual.title", descKey: "problem.manual.description" },
    { icon: TrendingDown, titleKey: "problem.missed.title", descKey: "problem.missed.description" }
  ]

  return (
    <section className="relative py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-[#7C6DFB]/30 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div 
          ref={contentRef}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <div className={`transition-all duration-700 ${
            contentRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-tight">
              {t("problem.title")}
            </h2>
          </div>

          <div className={`space-y-6 transition-all duration-700 delay-200 ${
            contentRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              {t("problem.description1")}
            </p>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              <span className="text-primary-foreground font-semibold">InternalDevs</span> {t("problem.description2")}
            </p>
          </div>
        </div>

        <div ref={cardsRef} className="mt-16 pt-16 border-t border-primary-foreground/10">
          <div className="grid sm:grid-cols-3 gap-8">
            {problems.map((item, index) => (
              <div 
                key={item.titleKey}
                className={`flex items-start gap-4 transition-all duration-500 ${
                  cardsRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: cardsRevealed ? `${index * 150}ms` : '0ms' }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground">{t(item.titleKey)}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/70">{t(item.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
