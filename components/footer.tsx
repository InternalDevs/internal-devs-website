import Link from "next/link"
import { Linkedin, Mail, MapPin } from "lucide-react"
import { Logo } from "./logo"

const footerLinks = {
  about: [
    { label: "Company", href: "#" },
  ],
  solutions: [
    { label: "AI Data Intelligence", href: "#services" },
    { label: "AI Workflow Automation", href: "#services" },
    { label: "Predictive Systems", href: "#services" },
  ],
  industries: [
    { label: "Ecommerce", href: "#industries" },
    { label: "Supply Chain", href: "#industries" },
    { label: "Data-Driven Companies", href: "#industries" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Logo className="w-10 h-10" />
              <span className="font-semibold text-lg text-foreground">internal devs</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              AI consulting and engineering firm building intelligent systems that automate business processes and analyze company data.
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-3">
              <a 
                href="mailto:info@internaldevs.com" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@internaldevs.com
              </a>
              <a 
                href="https://linkedin.com/company/internaldevs" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Beaverton, OR 97008
              </div>
            </div>
          </div>

          {/* About links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">About</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Solutions</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Industries</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} InternalDevs. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
