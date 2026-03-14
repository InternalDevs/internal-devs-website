import { Database, FileSpreadsheet, TrendingDown } from "lucide-react"

export function ProblemSection() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Main content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-tight">
              Most companies have data but don&apos;t know how to use it.
            </h2>
          </div>

          {/* Right column - Description */}
          <div className="space-y-6">
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Companies generate massive amounts of data through CRMs, ERPs, marketplaces and operational systems. 
              However, many organizations still rely on manual spreadsheets and disconnected tools to make decisions.
            </p>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              <span className="text-primary-foreground font-semibold">InternalDevs</span> helps companies transform their data into intelligent systems that generate insights and automate processes.
            </p>
          </div>
        </div>

        {/* Visual indicators */}
        <div className="mt-16 pt-16 border-t border-primary-foreground/10">
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <Database className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-foreground">Disconnected Data</h3>
                <p className="mt-1 text-sm text-primary-foreground/70">Data siloed across multiple systems without integration</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <FileSpreadsheet className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-foreground">Manual Processes</h3>
                <p className="mt-1 text-sm text-primary-foreground/70">Hours spent on spreadsheets and repetitive tasks</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <TrendingDown className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-foreground">Missed Opportunities</h3>
                <p className="mt-1 text-sm text-primary-foreground/70">Unable to identify patterns and predict outcomes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
