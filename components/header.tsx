"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import NavigationSidebar from "./navigation-sidebar"
import LanguageSwitcher from "./language-switcher"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
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
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Navigation - flex-1 for equal spacing */}
          <div className="flex-1">
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => openSidebar("women")} className="text-sm font-medium hover:text-gray-600">
                {t('nav.women')}
              </button>
              <button onClick={() => openSidebar("men")} className="text-sm font-medium hover:text-gray-600">
                {t('nav.men')}
              </button>
              <button onClick={() => openSidebar("home")} className="text-sm font-medium hover:text-gray-600">
                {t('nav.home')}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Centered Logo */}
          <div className="flex-1 flex justify-center">
            <Link href="/" className="text-2xl font-bold tracking-wider">
              AZAARIA
            </Link>
          </div>

          {/* Right Actions - flex-1 for equal spacing */}
          <div className="flex-1 flex items-center justify-end space-x-4">
            <Button variant="ghost" size="sm" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search className="h-5 w-5" />
              <span className="hidden sm:inline ml-2 text-sm">{t('nav.search')}</span>
            </Button>
            <Link href="/login">
              <Button variant="ghost" size="sm">
                <User className="h-5 w-5" />
                <span className="hidden sm:inline ml-2 text-sm">{t('nav.login')}</span>
              </Button>
            </Link>
            <Link href="/wishlist">
              <Button variant="ghost" size="sm">
                <Heart className="h-5 w-5" />
                <span className="hidden sm:inline ml-2 text-sm">{t('nav.wishlist')}</span>
              </Button>
            </Link>
            <Link href="/bag">
              <Button variant="ghost" size="sm">
                <ShoppingBag className="h-5 w-5" />
                <span className="hidden sm:inline ml-2 text-sm">{t('nav.bag')}</span>
              </Button>
            </Link>
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => openSidebar("women")} className="text-sm font-medium text-left">
                {t('nav.women')}
              </button>
              <button onClick={() => openSidebar("men")} className="text-sm font-medium text-left">
                {t('nav.men')}
              </button>
              <button onClick={() => openSidebar("home")} className="text-sm font-medium text-left">
                {t('nav.home')}
              </button>
            </nav>
          </div>
        )}

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="border-t border-gray-200 py-4">
            <Input type="search" placeholder={t('common.search')} className="w-full" autoFocus />
          </div>
        )}
      </div>

      {/* Navigation Sidebar */}
      <NavigationSidebar isOpen={sidebarOpen} onClose={closeSidebar} category={selectedCategory} />
    </header>
  )
}
