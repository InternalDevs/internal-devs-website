import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { ServicesSection } from "@/components/services-section"
import { IndustriesSection } from "@/components/industries-section"
import { ProcessSection } from "@/components/process-section"
import { SolutionsSection } from "@/components/solutions-section"
import { WhySection } from "@/components/why-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <IndustriesSection />
      <ProcessSection />
      <SolutionsSection />
      <WhySection />
      <CtaSection />
      <Footer />
    </main>
  )
}
