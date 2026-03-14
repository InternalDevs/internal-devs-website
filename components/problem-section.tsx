"use client"

import { Database, FileSpreadsheet, TrendingDown } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function ProblemSection() {
  const { ref: contentRef, isRevealed: contentRevealed } = useScrollReveal<HTMLDivElement>()
  const { ref: cardsRef, isRevealed: cardsRevealed } = useScrollReveal<HTMLDivElement>()

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
              Most companies have data but don&apos;t know how to use it.
            </h2>
          </div>

          <div className={`space-y-6 transition-all duration-700 delay-200 ${
            contentRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Companies generate massive amounts of data through CRMs, ERPs, marketplaces and operational systems. 
              However, many organizations still rely on manual spreadsheets and disconnected tools to make decisions.
            </p>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              <span className="text-primary-foreground font-semibold">InternalDevs</span> helps companies transform their data into intelligent systems that generate insights and automate processes.
            </p>
          </div>
        </div>

        <div ref={cardsRef} className="mt-16 pt-16 border-t border-primary-foreground/10">
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: Database, title: "Disconnected Data", description: "Data siloed across multiple systems without integration" },
              { icon: FileSpreadsheet, title: "Manual Processes", description: "Hours spent on spreadsheets and repetitive tasks" },
              { icon: TrendingDown, title: "Missed Opportunities", description: "Unable to identify patterns and predict outcomes" }
            ].map((item, index) => (
              <div 
                key={item.title}
                className={`flex items-start gap-4 transition-all duration-500 ${
                  cardsRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: cardsRevealed ? `${index * 150}ms` : '0ms' }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
