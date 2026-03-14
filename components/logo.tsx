export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4FACFE" />
          <stop offset="50%" stopColor="#7C6DFB" />
          <stop offset="100%" stopColor="#C56CF0" />
        </linearGradient>
        <linearGradient id="logoGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C56CF0" />
          <stop offset="50%" stopColor="#7C6DFB" />
          <stop offset="100%" stopColor="#4FACFE" />
        </linearGradient>
      </defs>
      
      {/* Letter "i" - stylized dot */}
      <rect
        x="22"
        y="18"
        width="12"
        height="12"
        rx="3"
        fill="url(#logoGradient)"
        transform="rotate(-10 28 24)"
      />
      
      {/* Combined "id" letterform - flowing shape */}
      <path
        d="M28 38 
           C28 38, 28 75, 28 75
           C28 82, 35 88, 48 88
           C65 88, 72 75, 72 58
           C72 42, 62 32, 48 32
           C42 32, 38 34, 35 37
           L35 38
           C35 38, 35 75, 35 75"
        stroke="url(#logoGradient)"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Highlight accent on the curve */}
      <path
        d="M55 40 
           C65 45, 68 55, 66 65
           C64 72, 58 78, 50 80"
        stroke="url(#logoGradient2)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  )
}

export function LogoWithText({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Logo className="w-10 h-10" />
      <span className="font-semibold text-lg tracking-tight text-white">
        internal devs
      </span>
    </div>
  )
}
