"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  variant?: "up" | "left" | "right" | "scale" | "stagger"
  delay?: number
  threshold?: number
}

export function ScrollReveal({
  children,
  className,
  variant = "up",
  delay = 0,
  threshold = 0.1,
}: ScrollRevealProps) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>(threshold)

  const variantClasses = {
    up: "scroll-reveal",
    left: "scroll-reveal-left",
    right: "scroll-reveal-right",
    scale: "scroll-reveal-scale",
    stagger: "stagger-children",
  }

  return (
    <div
      ref={ref}
      className={cn(
        variantClasses[variant],
        isRevealed && "revealed",
        className
      )}
      style={{ animationDelay: delay ? `${delay}s` : undefined }}
    >
      {children}
    </div>
  )
}
