import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import SaleBanner from "@/components/sale-banner"
import ProductGrid from "@/components/product-grid"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/LanguageContext"

export default function HomePage() {
  const { t } = useLanguage()
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SaleBanner />

      {/* Hero Section - Home Lifestyle */}
      <section className="relative h-screen">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Home Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-center mb-8 tracking-wider">LIVE WELL</h1>
          <Link href="#products">
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-black px-8 py-3 text-sm tracking-wider"
            >
              {t('common.exploreHome')}
            </Button>
          </Link>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center space-x-8 text-sm font-medium">
            <Link href="#new-in" className="hover:text-gray-600 border-b-2 border-black pb-2">
              {t('category.newIn')}
            </Link>
            <Link href="#decor" className="hover:text-gray-600 pb-2">
              DECOR
            </Link>
            <Link href="#textiles" className="hover:text-gray-600 pb-2">
              TEXTILES
            </Link>
            <Link href="#lighting" className="hover:text-gray-600 pb-2">
              LIGHTING
            </Link>
            <Link href="#furniture" className="hover:text-gray-600 pb-2">
              FURNITURE
            </Link>
            <Link href="#sale" className="hover:text-gray-600 pb-2 text-red-600">
              {t('common.sale')}
            </Link>
          </nav>
        </div>
      </section>

      {/* Featured Categories - Now with 4 categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            <Link href="/home/decor" className="group">
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Home Decor"
                  width={400}
                  height={600}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-xl font-light">DECOR</h3>
                  <p className="text-sm opacity-90">Transform spaces</p>
                </div>
              </div>
            </Link>
            <Link href="/home/textiles" className="group">
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Home Textiles"
                  width={400}
                  height={600}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-xl font-light">TEXTILES</h3>
                  <p className="text-sm opacity-90">Comfort & style</p>
                </div>
              </div>
            </Link>
            <Link href="/home/lighting" className="group">
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Home Lighting"
                  width={400}
                  height={600}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-xl font-light">LIGHTING</h3>
                  <p className="text-sm opacity-90">Set the mood</p>
                </div>
              </div>
            </Link>
            <Link href="/home/furniture" className="group">
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Home Furniture"
                  width={400}
                  height={600}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-xl font-light">FURNITURE</h3>
                  <p className="text-sm opacity-90">Essential pieces</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-light">NEW IN HOME</h2>
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

      {/* Lifestyle Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-12">AZAARIA LIFESTYLE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="relative overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Living Room Inspiration"
                width={600}
                height={600}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-light mb-2">LIVING SPACES</h3>
                <p className="text-sm opacity-90 mb-4">Create your sanctuary</p>
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-black"
                >
                  {t('common.shopNow')}
                </Button>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Bedroom Inspiration"
                width={600}
                height={600}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-light mb-2">BEDROOM</h3>
                <p className="text-sm opacity-90 mb-4">Rest in style</p>
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-black"
                >
                  {t('common.shopNow')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
