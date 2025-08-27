"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en')
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 hover:bg-gray-100"
      title={language === 'en' ? 'Switch to French' : 'Passer en anglais'}
    >
      <Languages className="h-4 w-4" />
      <span className="hidden sm:inline text-sm font-medium">
        {language === 'en' ? 'EN' : 'FR'}
      </span>
    </Button>
  )
} 