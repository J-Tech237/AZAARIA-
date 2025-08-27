"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"

export default function SaleBanner() {
  const { t } = useLanguage()
  return (
    <div className="bg-red-600 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-6 text-sm font-medium">
          <span className="font-bold">{t('sale.upTo')}</span>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/women/sale" className="hover:underline">
              {t('nav.women')}
            </Link>
            <Link href="/men/sale" className="hover:underline">
              {t('nav.men')}
            </Link>
            <Link href="/home/sale" className="hover:underline">
              {t('nav.home')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
