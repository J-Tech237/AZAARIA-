"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import SaleBanner from "@/components/sale-banner"
import ProductGrid from "@/components/product-grid"
import CategorySection from "@/components/category-section"
import Footer from "@/components/footer"
import NavigationSidebar from "@/components/navigation-sidebar"
import { useLanguage } from "@/contexts/LanguageContext"

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<"women" | "men" | "home" | null>(null)
  const { t } = useLanguage()

  const openSidebar = (category: "women" | "men" | "home") => {
    setSelectedCategory(category)
    setSidebarOpen(true)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
    setSelectedCategory(null)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SaleBanner />

      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Azaaria Hero Image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-center mb-8">
            {t('hero.title')} <em className="italic">{t('hero.subtitle')}</em>
            <br />
            {t('hero.since')}
          </h1>
          <div className="flex gap-4 mt-8">
            <Button
              variant="outline"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-black"
              onClick={() => openSidebar("women")}
            >
              {t('nav.women')}
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-black"
              onClick={() => openSidebar("men")}
            >
              {t('nav.men')}
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-black"
              onClick={() => openSidebar("home")}
            >
              {t('nav.home')}
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation Sidebar */}
      <NavigationSidebar isOpen={sidebarOpen} onClose={closeSidebar} category={selectedCategory} />

      {/* Category Sections */}
      <CategorySection />

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-12">{t('category.newIn')}</h2>
          <ProductGrid />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-light mb-4">{t('category.stayUpdated')}</h2>
          <p className="text-gray-600 mb-8">{t('category.newsletter')}</p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder={t('category.emailPlaceholder')}
              className="flex-1 px-4 py-2 border border-gray-300 focus:outline-none focus:border-black"
            />
            <Button className="bg-black text-white hover:bg-gray-800">{t('category.subscribe')}</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
