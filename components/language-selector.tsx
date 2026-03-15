"use client"

import { useLanguage, languageNames, type Language } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useState, useEffect } from "react"

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Show a placeholder during SSR to avoid hydration mismatch
  if (!mounted) {
    return (
      <Button 
        variant="ghost" 
        size="sm" 
        className="gap-2 text-white/70 hover:text-white hover:bg-white/10"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">English</span>
        <span className="sm:hidden">EN</span>
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="gap-2 text-white/70 hover:text-white hover:bg-white/10"
        >
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline">{languageNames[language]}</span>
          <span className="sm:hidden">{language.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-[#0a0a12] border-white/10 min-w-[140px]"
      >
        {(Object.keys(languageNames) as Language[]).map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`cursor-pointer text-white/70 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white ${
              language === lang ? "bg-white/5 text-white" : ""
            }`}
          >
            <span className="mr-2 text-lg">
              {lang === "en" ? "US" : lang === "es" ? "ES" : "CN"}
            </span>
            {languageNames[lang]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
