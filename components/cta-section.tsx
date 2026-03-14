import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-sm font-medium bg-primary-foreground/10 text-primary-foreground rounded-full">
            <span className="w-2 h-2 bg-accent rounded-full" />
            Ready to Transform Your Business
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-tight">
            Start your AI transformation
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Book a discovery call to explore how AI can automate your business processes and unlock the value of your data.
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="text-base px-8 py-6"
            >
              <Link href="mailto:contact@internaldevs.com">
                Schedule a Discovery Call
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Trust text */}
          <p className="mt-8 text-sm text-primary-foreground/60">
            Free consultation • No commitment required
          </p>
        </div>
      </div>
    </section>
  )
}
