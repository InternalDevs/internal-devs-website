"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Abstract Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-sm font-medium bg-primary/5 text-foreground rounded-full border border-border">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            AI Consulting & Engineering
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground text-balance leading-[1.1]">
            AI Automation & Data Intelligence for Enterprises
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            We design and implement AI systems that analyze business data and automate critical processes.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto text-base px-8 py-6">
              <Link href="#contact">
                Schedule a Discovery Call
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base px-8 py-6">
              <Link href="#services">
                Explore Solutions
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-16 border-t border-border">
            <p className="text-sm text-muted-foreground mb-6">Trusted by data-driven companies</p>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-50">
              {["Enterprise", "Global", "Scalable", "Secure", "Custom"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-muted rounded-md" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
