"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import SaleBanner from "@/components/sale-banner"
import ProductGrid from "@/components/product-grid"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/LanguageContext"

export default function WomenPage() {
  const { t } = useLanguage()
  const womenCategories = [
    {
      title: "DRESSES",
      subtitle: "Elegant styles",
      image: "/placeholder.svg?height=600&width=300",
      href: "/women/dresses",
    },
    {
      title: "TOPS",
      subtitle: "Essential pieces",
      image: "/placeholder.svg?height=600&width=300",
      href: "/women/tops",
    },
    {
      title: "BLAZERS",
      subtitle: "Professional chic",
      image: "/placeholder.svg?height=600&width=300",
      href: "/women/blazers",
    },
    {
      title: "KNITWEAR",
      subtitle: "Cozy comfort",
      image: "/placeholder.svg?height=600&width=300",
      href: "/women/knitwear",
    },
    {
      title: "TROUSERS",
      subtitle: "Perfect fit",
      image: "/placeholder.svg?height=600&width=300",
      href: "/women/trousers",
    },
    {
      title: "SKIRTS",
      subtitle: "Feminine flair",
      image: "/placeholder.svg?height=600&width=300",
      href: "/women/skirts",
    },
    {
      title: "OUTERWEAR",
      subtitle: "Layer in style",
      image: "/placeholder.svg?height=600&width=300",
      href: "/women/outerwear",
    },
    {
      title: "SHOES",
      subtitle: "Step in style",
      image: "/placeholder.svg?height=600&width=300",
      href: "/women/shoes",
    },
    {
      title: "BAGS",
      subtitle: "Carry elegance",
      image: "/placeholder.svg?height=600&width=300",
      href: "/women/bags",
    },
    {
      title: "ACCESSORIES",
      subtitle: "Perfect details",
      image: "/placeholder.svg?height=600&width=300",
      href: "/women/accessories",
    },
    {
      title: "LINGERIE",
      subtitle: "Intimate comfort",
      image: "/placeholder.svg?height=600&width=300",
      href: "/women/lingerie",
    },
    {
      title: "SWIMWEAR",
      subtitle: "Beach ready",
      image: "/placeholder.svg?height=600&width=300",
      href: "/women/swimwear",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SaleBanner />

      {/* Hero Section - Matching Mango Women's Page */}
      <section className="relative h-screen">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Women's New Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-center mb-8 tracking-wider">{t('common.newNow')}</h1>
          <Link href="#products">
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-black px-8 py-3 text-sm tracking-wider"
            >
              {t('common.discoverMore')}
            </Button>
          </Link>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center space-x-8 text-sm font-medium overflow-x-auto">
            <Link href="#new-in" className="hover:text-gray-600 border-b-2 border-black pb-2 whitespace-nowrap">
              {t('category.newIn')}
            </Link>
            <Link href="#clothing" className="hover:text-gray-600 pb-2 whitespace-nowrap">
              {t('common.clothing')}
            </Link>
            <Link href="#shoes" className="hover:text-gray-600 pb-2 whitespace-nowrap">
              {t('common.shoes')}
            </Link>
            <Link href="#bags" className="hover:text-gray-600 pb-2 whitespace-nowrap">
              {t('common.bags')}
            </Link>
            <Link href="#accessories" className="hover:text-gray-600 pb-2 whitespace-nowrap">
              {t('common.accessories')}
            </Link>
            <Link href="#sale" className="hover:text-gray-600 pb-2 text-red-600 whitespace-nowrap">
              {t('common.sale')}
            </Link>
          </nav>
        </div>
      </section>

      {/* Featured Categories - 12 Seamless Images */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0">
            {womenCategories.map((category) => (
              <Link key={category.title} href={category.href} className="group">
                <div className="relative overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    width={300}
                    height={600}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-lg font-light">{category.title}</h3>
                    <p className="text-xs opacity-90">{category.subtitle}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-light">{t('category.newIn')}</h2>
            <div className="flex items-center space-x-4">
              <select className="border border-gray-300 px-3 py-2 text-sm bg-white">
                <option>Sort by: Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Most Popular</option>
              </select>
              <div className="flex items-center space-x-2 text-sm">
                <button className="p-2 border border-gray-300 bg-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V4z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <ProductGrid />
        </div>
      </section>

      <Footer />
    </div>
  )
}
