"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Target, Users, Building2, Lightbulb, Shield, Clock } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const { t } = useLanguage()

  const slides = [
    {
      id: "main",
      badge: t("hero.slide1.badge"),
      title: t("hero.slide1.title"),
      titleHighlight: t("hero.slide1.highlight"),
      description: t("hero.slide1.description"),
      stats: [
        { value: "10+", label: t("stats.years") },
        { value: "50+", label: t("stats.solutions") },
        { value: "85%", label: t("stats.retention") },
        { value: "24/7", label: t("stats.monitoring") },
      ],
      cta: { text: t("hero.slide1.cta"), href: "https://calendly.com/carlosid/30min" },
      secondary: { text: t("hero.slide1.secondary"), href: "#services" },
    },
    {
      id: "approach",
      badge: t("hero.slide2.badge"),
      title: t("hero.slide2.title"),
      titleHighlight: t("hero.slide2.highlight"),
      description: t("hero.slide2.description"),
      features: [
        { icon: Target, text: t("feature.discovery") },
        { icon: Lightbulb, text: t("feature.design") },
        { icon: Zap, text: t("feature.development") },
        { icon: Shield, text: t("feature.support") },
      ],
      cta: { text: t("hero.slide2.cta"), href: "#approach" },
      secondary: { text: t("hero.slide2.secondary"), href: "#solutions" },
    },
    {
      id: "why-us",
      badge: t("hero.slide3.badge"),
      title: t("hero.slide3.title"),
      titleHighlight: t("hero.slide3.highlight"),
      description: t("hero.slide3.description"),
      features: [
        { icon: Clock, text: t("feature.experience") },
        { icon: Users, text: t("feature.team") },
        { icon: Shield, text: t("feature.partnership") },
        { icon: Zap, text: t("feature.results") },
      ],
      cta: { text: t("hero.slide3.cta"), href: "#contact" },
      secondary: { text: t("hero.slide3.secondary"), href: "#about" },
    },
    {
      id: "industries",
      badge: t("hero.slide4.badge"),
      title: t("hero.slide4.title"),
      titleHighlight: t("hero.slide4.highlight"),
      description: t("hero.slide4.description"),
      features: [
        { icon: Building2, text: t("feature.ecommerce") },
        { icon: Building2, text: t("feature.manufacturing") },
        { icon: Building2, text: t("feature.healthcare") },
        { icon: Building2, text: t("feature.financial") },
      ],
      cta: { text: t("hero.slide4.cta"), href: "#industries" },
      secondary: { text: t("hero.slide4.secondary"), href: "#solutions" },
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setIsAnimating(false)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  const slide = slides[currentSlide]

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

        {/* Floating particles */}
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
        <div className={`mx-auto max-w-4xl text-center transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium bg-white/5 text-white/90 rounded-full border border-white/10 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#C56CF0]" />
            <span className="bg-gradient-to-r from-[#4FACFE] via-[#7C6DFB] to-[#C56CF0] bg-clip-text text-transparent font-semibold">
              {slide.badge}
            </span>
            <span className="w-2 h-2 bg-gradient-to-r from-[#4FACFE] to-[#C56CF0] rounded-full animate-pulse" />
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white text-balance leading-[1.1]">
            <span className="block">{slide.title}</span>
            <span className="block mt-2 bg-gradient-to-r from-[#4FACFE] via-[#7C6DFB] to-[#C56CF0] bg-clip-text text-transparent animate-gradient-shift">
              {slide.titleHighlight}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto text-balance leading-relaxed">
            {slide.description}
          </p>

          {/* Stats or Features */}
          <div className="mt-12">
            {slide.stats ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {slide.stats.map((stat) => (
                  <div key={stat.label} className="text-center group cursor-default">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#4FACFE] via-[#7C6DFB] to-[#C56CF0] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-white/50">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            ) : slide.features ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {slide.features.map((feature) => (
                  <div 
                    key={feature.text}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#4FACFE]/20 to-[#C56CF0]/20 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-[#7C6DFB]" />
                    </div>
                    <span className="text-sm text-white/70 text-center">{feature.text}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="w-full sm:w-auto text-base px-8 py-6 bg-gradient-to-r from-[#4FACFE] via-[#7C6DFB] to-[#C56CF0] hover:opacity-90 transition-all duration-300 border-0 text-white shadow-lg shadow-[#7C6DFB]/30 hover:shadow-xl hover:shadow-[#7C6DFB]/40 hover:scale-[1.02]"
            >
              <Link href={slide.cta.href} {...(slide.cta.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                <Zap className="mr-2 w-4 h-4" />
                {slide.cta.text}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto text-base px-8 py-6 bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              <Link href={slide.secondary.href}>
                {slide.secondary.text}
              </Link>
            </Button>
          </div>

          {/* Slide indicators */}
          <div className="mt-12 flex items-center justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true)
                  setTimeout(() => {
                    setCurrentSlide(index)
                    setIsAnimating(false)
                  }, 300)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'w-8 bg-gradient-to-r from-[#4FACFE] to-[#C56CF0]' 
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {[
              { key: "trust.ai", label: t("trust.ai") },
              { key: "trust.data", label: t("trust.data") },
              { key: "trust.automated", label: t("trust.automated") },
              { key: "trust.scalable", label: t("trust.scalable") },
            ].map((item) => (
              <div 
                key={item.key} 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white/80 transition-all duration-300 cursor-default text-sm"
              >
                <span className="w-1.5 h-1.5 bg-gradient-to-r from-[#4FACFE] to-[#C56CF0] rounded-full" />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute z-10 bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-white/40 uppercase tracking-wider">{t("scroll.explore")}</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gradient-to-b from-[#4FACFE] to-[#C56CF0] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
