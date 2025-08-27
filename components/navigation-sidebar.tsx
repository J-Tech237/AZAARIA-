"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"

interface NavigationSidebarProps {
  isOpen: boolean
  onClose: () => void
  category: "women" | "men" | "home" | null
}

export default function NavigationSidebar({ isOpen, onClose, category }: NavigationSidebarProps) {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const { t } = useLanguage()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const navigationData = {
    women: {
      title: "WOMEN",
      mainLink: "/women",
      categories: [
        {
          name: "CLOTHING",
          items: [
            { name: "Dresses", href: "/women/dresses" },
            { name: "Tops", href: "/women/tops" },
            { name: "Blazers", href: "/women/blazers" },
            { name: "Knitwear", href: "/women/knitwear" },
            { name: "Trousers", href: "/women/trousers" },
            { name: "Skirts", href: "/women/skirts" },
            { name: "Outerwear", href: "/women/outerwear" },
            { name: "Lingerie", href: "/women/lingerie" },
            { name: "Swimwear", href: "/women/swimwear" },
          ],
        },
        {
          name: "SHOES",
          items: [
            { name: "Heels", href: "/women/shoes/heels" },
            { name: "Flats", href: "/women/shoes/flats" },
            { name: "Boots", href: "/women/shoes/boots" },
            { name: "Sneakers", href: "/women/shoes/sneakers" },
            { name: "Sandals", href: "/women/shoes/sandals" },
          ],
        },
        {
          name: "BAGS",
          items: [
            { name: "Handbags", href: "/women/bags/handbags" },
            { name: "Shoulder Bags", href: "/women/bags/shoulder" },
            { name: "Crossbody", href: "/women/bags/crossbody" },
            { name: "Clutches", href: "/women/bags/clutches" },
            { name: "Backpacks", href: "/women/bags/backpacks" },
          ],
        },
        {
          name: "ACCESSORIES",
          items: [
            { name: "Jewelry", href: "/women/accessories/jewelry" },
            { name: "Scarves", href: "/women/accessories/scarves" },
            { name: "Belts", href: "/women/accessories/belts" },
            { name: "Hats", href: "/women/accessories/hats" },
            { name: "Sunglasses", href: "/women/accessories/sunglasses" },
          ],
        },
      ],
    },
    men: {
      title: "MEN",
      mainLink: "/men",
      categories: [
        {
          name: "CLOTHING",
          items: [
            { name: "Suits", href: "/men/suits" },
            { name: "Shirts", href: "/men/shirts" },
            { name: "Casual", href: "/men/casual" },
            { name: "Denim", href: "/men/denim" },
            { name: "Knitwear", href: "/men/knitwear" },
            { name: "Outerwear", href: "/men/outerwear" },
            { name: "Sportswear", href: "/men/sportswear" },
            { name: "Underwear", href: "/men/underwear" },
          ],
        },
        {
          name: "SHOES",
          items: [
            { name: "Dress Shoes", href: "/men/shoes/dress" },
            { name: "Sneakers", href: "/men/shoes/sneakers" },
            { name: "Boots", href: "/men/shoes/boots" },
            { name: "Loafers", href: "/men/shoes/loafers" },
            { name: "Athletic", href: "/men/shoes/athletic" },
          ],
        },
        {
          name: "ACCESSORIES",
          items: [
            { name: "Watches", href: "/men/accessories/watches" },
            { name: "Belts", href: "/men/accessories/belts" },
            { name: "Ties", href: "/men/accessories/ties" },
            { name: "Wallets", href: "/men/accessories/wallets" },
            { name: "Sunglasses", href: "/men/accessories/sunglasses" },
          ],
        },
      ],
    },
    home: {
      title: "HOME",
      mainLink: "/home",
      categories: [
        {
          name: "DECOR",
          items: [
            { name: "Wall Art", href: "/home/decor/wall-art" },
            { name: "Mirrors", href: "/home/decor/mirrors" },
            { name: "Vases", href: "/home/decor/vases" },
            { name: "Candles", href: "/home/decor/candles" },
            { name: "Plants", href: "/home/decor/plants" },
          ],
        },
        {
          name: "TEXTILES",
          items: [
            { name: "Bedding", href: "/home/textiles/bedding" },
            { name: "Cushions", href: "/home/textiles/cushions" },
            { name: "Throws", href: "/home/textiles/throws" },
            { name: "Curtains", href: "/home/textiles/curtains" },
            { name: "Rugs", href: "/home/textiles/rugs" },
          ],
        },
        {
          name: "LIGHTING",
          items: [
            { name: "Ceiling Lights", href: "/home/lighting/ceiling-lights" },
            { name: "Table Lamps", href: "/home/lighting/table-lamps" },
            { name: "Floor Lamps", href: "/home/lighting/floor-lamps" },
            { name: "Chandeliers", href: "/home/lighting/chandeliers" },
          ],
        },
        {
          name: "FURNITURE",
          items: [
            { name: "Sofas", href: "/home/furniture/sofas" },
            { name: "Chairs", href: "/home/furniture/chairs" },
            { name: "Tables", href: "/home/furniture/tables" },
            { name: "Beds", href: "/home/furniture/beds" },
            { name: "Storage", href: "/home/furniture/storage" },
          ],
        },
      ],
    },
  }

  if (!isOpen || !category) return null

  const currentNav = navigationData[category]
  const currentTitle = category === 'women' ? t('nav.women') : category === 'men' ? t('nav.men') : t('nav.home')

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-xl overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-light">{currentTitle}</h2>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Main Category Link */}
          <div className="mb-8">
            <Link
              href={currentNav.mainLink}
              onClick={onClose}
              className="block text-lg font-medium hover:text-gray-600 border-b border-gray-200 pb-4"
            >
              {t('common.viewAll')} {currentTitle}
            </Link>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            {currentNav.categories.map((categoryGroup) => (
              <div key={categoryGroup.name}>
                <button
                  onClick={() => setActiveSubmenu(activeSubmenu === categoryGroup.name ? null : categoryGroup.name)}
                  className="flex justify-between items-center w-full text-left font-medium text-sm py-2 hover:text-gray-600"
                >
                  {categoryGroup.name}
                  <span
                    className={`transform transition-transform ${
                      activeSubmenu === categoryGroup.name ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {/* Submenu */}
                {activeSubmenu === categoryGroup.name && (
                  <div className="ml-4 mt-2 space-y-2">
                    {categoryGroup.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={onClose}
                        className="block text-sm text-gray-600 hover:text-black py-1"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Sale Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link href={`${currentNav.mainLink}/sale`} onClick={onClose} className="block text-red-600 font-medium hover:text-red-700">
              {t('common.sale')}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
