"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Video layer */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-[#0a0a12]/60" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-[#4FACFE] rounded-full blur-[150px] opacity-20 animate-pulse-glow" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[#C56CF0] rounded-full blur-[150px] opacity-20 animate-pulse-glow animation-delay-200" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#7C6DFB] rounded-full blur-[180px] opacity-15 animate-float" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Floating particles - deterministic positions to avoid hydration mismatch */}
        <div className="absolute inset-0 overflow-hidden">
          {[
            { left: 10, top: 15, delay: 0, duration: 6 },
            { left: 25, top: 80, delay: 1.2, duration: 7 },
            { left: 45, top: 30, delay: 2.5, duration: 5.5 },
            { left: 70, top: 60, delay: 0.8, duration: 8 },
            { left: 85, top: 20, delay: 3.1, duration: 6.5 },
            { left: 15, top: 55, delay: 1.8, duration: 7.5 },
            { left: 55, top: 85, delay: 4.2, duration: 5 },
            { left: 90, top: 45, delay: 2.1, duration: 9 },
            { left: 35, top: 10, delay: 0.5, duration: 6.8 },
            { left: 65, top: 75, delay: 3.5, duration: 7.2 },
            { left: 5, top: 40, delay: 1.5, duration: 8.5 },
            { left: 80, top: 90, delay: 2.8, duration: 5.8 },
          ].map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`
              }}
            />
          ))}
        </div>

        {/* Orbiting rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-spin-slow-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full animate-spin-slow" />

        {/* Glowing orbs on orbit */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]">
          <div className="absolute inset-0 animate-orbit">
            <div className="w-3 h-3 bg-gradient-to-r from-[#4FACFE] to-[#7C6DFB] rounded-full shadow-lg shadow-[#4FACFE]/50" />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
          <div className="absolute inset-0 animate-orbit-reverse">
            <div className="w-2 h-2 bg-gradient-to-r from-[#C56CF0] to-[#7C6DFB] rounded-full shadow-lg shadow-[#C56CF0]/50" />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32 pt-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Animated Badge */}
          <div className="opacity-0 animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium bg-white/5 text-white/90 rounded-full border border-white/10 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#C56CF0]" />
            <span className="bg-gradient-to-r from-[#4FACFE] via-[#7C6DFB] to-[#C56CF0] bg-clip-text text-transparent font-semibold">
              AI Consulting & Engineering
            </span>
            <span className="w-2 h-2 bg-gradient-to-r from-[#4FACFE] to-[#C56CF0] rounded-full animate-pulse" />
          </div>

          {/* Animated Headline */}
          <h1 className="opacity-0 animate-fade-in-up animation-delay-200 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white text-balance leading-[1.1]">
            <span className="block">Transform Your Data Into</span>
            <span className="block mt-2 bg-gradient-to-r from-[#4FACFE] via-[#7C6DFB] to-[#C56CF0] bg-clip-text text-transparent animate-gradient-shift">
              Intelligent Systems
            </span>
          </h1>

          {/* Animated Subheadline */}
          <p className="opacity-0 animate-fade-in-up animation-delay-400 mt-6 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto text-balance leading-relaxed">
            We design and implement AI systems that analyze business data and automate critical processes for enterprises worldwide.
          </p>

          {/* Animated CTA Buttons */}
          <div className="opacity-0 animate-fade-in-up animation-delay-600 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="w-full sm:w-auto text-base px-8 py-6 bg-gradient-to-r from-[#4FACFE] via-[#7C6DFB] to-[#C56CF0] hover:opacity-90 transition-all duration-300 border-0 text-white shadow-lg shadow-[#7C6DFB]/30 hover:shadow-xl hover:shadow-[#7C6DFB]/40 hover:scale-[1.02]"
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
              className="w-full sm:w-auto text-base px-8 py-6 bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              <Link href="#services">
                Explore Solutions
              </Link>
            </Button>
          </div>

          {/* Animated Stats */}
          <div className="opacity-0 animate-fade-in-up animation-delay-800 mt-16 pt-16 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "10+", label: "Years in the Market" },
                { value: "50+", label: "Solutions Delivered" },
                { value: "85%", label: "Client Retention" },
                { value: "24/7", label: "Active Monitoring" },
              ].map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="text-center group cursor-default"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#4FACFE] via-[#7C6DFB] to-[#C56CF0] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-white/50">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust indicators */}
          <div className="opacity-0 animate-fade-in-up animation-delay-800 mt-12 flex flex-wrap items-center justify-center gap-4">
            {["AI-Powered", "Data-Driven", "Automated", "Scalable"].map((item, index) => (
              <div 
                key={item} 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white/80 transition-all duration-300 cursor-default text-sm"
                style={{ animationDelay: `${1 + index * 0.1}s` }}
              >
                <span className="w-1.5 h-1.5 bg-gradient-to-r from-[#4FACFE] to-[#C56CF0] rounded-full" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Scroll indicator */}
      <div className="absolute z-10 bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in-up animation-delay-800">
        <span className="text-xs text-white/40 uppercase tracking-wider">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gradient-to-b from-[#4FACFE] to-[#C56CF0] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
