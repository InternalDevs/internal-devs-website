"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Brain, Zap, Database, Bot, LineChart } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[oklch(0.65_0.20_240/0.15)] to-[oklch(0.60_0.25_300/0.15)] rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-[oklch(0.60_0.25_300/0.12)] to-[oklch(0.65_0.20_240/0.12)] rounded-full blur-3xl animate-pulse-glow animation-delay-200" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[oklch(0.65_0.20_240/0.08)] to-[oklch(0.60_0.25_300/0.08)] rounded-full blur-3xl animate-float" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
        
        {/* Floating tech icons */}
        <div className="absolute top-[20%] left-[10%] animate-float opacity-20">
          <Brain className="w-12 h-12 text-[oklch(0.65_0.20_240)]" />
        </div>
        <div className="absolute top-[30%] right-[15%] animate-float-delayed opacity-20">
          <Database className="w-10 h-10 text-[oklch(0.60_0.25_300)]" />
        </div>
        <div className="absolute bottom-[25%] left-[15%] animate-float-delayed opacity-20">
          <Bot className="w-14 h-14 text-[oklch(0.60_0.25_300)]" />
        </div>
        <div className="absolute bottom-[35%] right-[10%] animate-float opacity-20">
          <LineChart className="w-10 h-10 text-[oklch(0.65_0.20_240)]" />
        </div>

        {/* Orbiting elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]">
          <div className="absolute inset-0 animate-orbit">
            <div className="w-3 h-3 bg-gradient-to-r from-[oklch(0.65_0.20_240)] to-[oklch(0.60_0.25_300)] rounded-full shadow-lg shadow-[oklch(0.65_0.20_240/0.3)]" />
          </div>
          <div className="absolute inset-0 animate-orbit-reverse">
            <div className="w-2 h-2 bg-gradient-to-r from-[oklch(0.60_0.25_300)] to-[oklch(0.65_0.20_240)] rounded-full shadow-lg shadow-[oklch(0.60_0.25_300/0.3)]" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Animated Badge */}
          <div className="opacity-0 animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium bg-gradient-to-r from-[oklch(0.65_0.20_240/0.1)] to-[oklch(0.60_0.25_300/0.1)] text-foreground rounded-full border border-[oklch(0.65_0.20_240/0.2)] backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[oklch(0.60_0.25_300)]" />
            <span className="bg-gradient-to-r from-[oklch(0.65_0.20_240)] to-[oklch(0.60_0.25_300)] bg-clip-text text-transparent font-semibold">
              AI Consulting & Engineering
            </span>
            <span className="w-2 h-2 bg-gradient-to-r from-[oklch(0.65_0.20_240)] to-[oklch(0.60_0.25_300)] rounded-full animate-pulse" />
          </div>

          {/* Animated Headline */}
          <h1 className="opacity-0 animate-fade-in-up animation-delay-200 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground text-balance leading-[1.1]">
            <span className="block">Transform Your Data Into</span>
            <span className="block mt-2 bg-gradient-to-r from-[oklch(0.65_0.20_240)] via-[oklch(0.55_0.22_270)] to-[oklch(0.60_0.25_300)] bg-clip-text text-transparent animate-gradient-shift">
              Intelligent Systems
            </span>
          </h1>

          {/* Animated Subheadline */}
          <p className="opacity-0 animate-fade-in-up animation-delay-400 mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            We design and implement AI systems that analyze business data and automate critical processes for enterprises worldwide.
          </p>

          {/* Animated CTA Buttons */}
          <div className="opacity-0 animate-fade-in-up animation-delay-600 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="w-full sm:w-auto text-base px-8 py-6 bg-gradient-to-r from-[oklch(0.65_0.20_240)] to-[oklch(0.60_0.25_300)] hover:opacity-90 transition-all duration-300 border-0 shadow-lg shadow-[oklch(0.60_0.25_300/0.25)] hover:shadow-xl hover:shadow-[oklch(0.60_0.25_300/0.35)] hover:scale-[1.02]"
            >
              <Link href="#contact">
                <Zap className="mr-2 w-4 h-4" />
                Schedule a Discovery Call
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto text-base px-8 py-6 border-[oklch(0.65_0.20_240/0.3)] hover:bg-gradient-to-r hover:from-[oklch(0.65_0.20_240/0.1)] hover:to-[oklch(0.60_0.25_300/0.1)] hover:border-[oklch(0.65_0.20_240/0.5)] transition-all duration-300"
            >
              <Link href="#services">
                Explore Solutions
              </Link>
            </Button>
          </div>

          {/* Animated Stats */}
          <div className="opacity-0 animate-fade-in-up animation-delay-800 mt-16 pt-16 border-t border-border/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "150+", label: "AI Projects Delivered" },
                { value: "40M+", label: "Data Points Processed" },
                { value: "95%", label: "Client Retention" },
                { value: "24/7", label: "System Uptime" },
              ].map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="text-center group cursor-default"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[oklch(0.65_0.20_240)] to-[oklch(0.60_0.25_300)] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust indicators with animated icons */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-muted-foreground/60">
            {[
              { icon: Brain, label: "AI-Powered" },
              { icon: Database, label: "Data-Driven" },
              { icon: Bot, label: "Automated" },
              { icon: LineChart, label: "Scalable" },
            ].map((item, index) => (
              <div 
                key={item.label} 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 hover:bg-gradient-to-r hover:from-[oklch(0.65_0.20_240/0.1)] hover:to-[oklch(0.60_0.25_300/0.1)] transition-all duration-300 cursor-default"
                style={{ animationDelay: `${1 + index * 0.1}s` }}
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in-up animation-delay-800">
        <span className="text-xs text-muted-foreground/60 uppercase tracking-wider">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-[oklch(0.65_0.20_240/0.3)] rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gradient-to-b from-[oklch(0.65_0.20_240)] to-[oklch(0.60_0.25_300)] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
