import { Code2, LineChart, Settings, Target, CheckCircle2 } from "lucide-react"

const reasons = [
  {
    icon: Code2,
    title: "AI Engineering Expertise",
    description: "Deep technical knowledge in machine learning, data engineering, and AI system architecture.",
  },
  {
    icon: LineChart,
    title: "Deep Business Data Understanding",
    description: "We understand how businesses generate and use data to drive strategic decisions.",
  },
  {
    icon: Settings,
    title: "Custom Systems Built for Each Company",
    description: "No off-the-shelf solutions. Every system is tailored to your unique requirements.",
  },
  {
    icon: Target,
    title: "Focus on Measurable Business Impact",
    description: "We measure success by the tangible results our AI systems deliver for your business.",
  },
]

export function WhySection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Content */}
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-wider">Why Us</p>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Why InternalDevs
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We combine deep AI engineering expertise with a thorough understanding of business operations to deliver systems that create real value.
            </p>

            {/* Reasons list */}
            <div className="mt-10 space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{reason.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Visual */}
          <div className="relative">
            <div className="bg-primary rounded-2xl p-8 lg:p-12 text-primary-foreground">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold">Our Commitment</h3>
                  <p className="mt-4 text-primary-foreground/80 leading-relaxed">
                    Every AI system we build is designed with scalability, maintainability, and measurable business outcomes in mind.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    "Production-ready AI systems",
                    "Clear documentation & training",
                    "Ongoing support & optimization",
                    "Transparent project communication",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="text-primary-foreground/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
