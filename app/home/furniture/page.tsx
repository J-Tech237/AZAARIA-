import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import SaleBanner from "@/components/sale-banner"
import ProductGrid from "@/components/product-grid"
import Footer from "@/components/footer"

export default function FurniturePage() {
  const furnitureCategories = [
    {
      title: "SOFAS",
      subtitle: "Comfort seating",
      image: "/placeholder.svg?height=600&width=400",
      href: "/home/furniture/sofas",
    },
    {
      title: "CHAIRS",
      subtitle: "Stylish seating",
      image: "/placeholder.svg?height=600&width=400",
      href: "/home/furniture/chairs",
    },
    {
      title: "TABLES",
      subtitle: "Functional beauty",
      image: "/placeholder.svg?height=600&width=400",
      href: "/home/furniture/tables",
    },
    {
      title: "BEDS",
      subtitle: "Restful retreat",
      image: "/placeholder.svg?height=600&width=400",
      href: "/home/furniture/beds",
    },
    {
      title: "STORAGE",
      subtitle: "Organized living",
      image: "/placeholder.svg?height=600&width=400",
      href: "/home/furniture/storage",
    },
    {
      title: "DESKS",
      subtitle: "Work in style",
      image: "/placeholder.svg?height=600&width=400",
      href: "/home/furniture/desks",
    },
    {
      title: "SHELVING",
      subtitle: "Display & store",
      image: "/placeholder.svg?height=600&width=400",
      href: "/home/furniture/shelving",
    },
    {
      title: "OUTDOOR",
      subtitle: "Garden living",
      image: "/placeholder.svg?height=600&width=400",
      href: "/home/furniture/outdoor",
    },
    {
      title: "WARDROBES",
      subtitle: "Organized closets",
      image: "/placeholder.svg?height=600&width=400",
      href: "/home/furniture/wardrobes",
    },
    {
      title: "SIDEBOARDS",
      subtitle: "Elegant storage",
      image: "/placeholder.svg?height=600&width=400",
      href: "/home/furniture/sideboards",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SaleBanner />

      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Home Furniture Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-center mb-8 tracking-wider">FURNITURE</h1>
          <Link href="#products">
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-black px-8 py-3 text-sm tracking-wider"
            >
              ESSENTIAL PIECES
            </Button>
          </Link>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-black">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/home" className="hover:text-black">
              Home & Living
            </Link>
            <span className="mx-2">/</span>
            <span className="text-black">Furniture</span>
          </nav>
        </div>
      </section>

      {/* Main Sub-Category Navigation */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center space-x-8 text-sm font-medium overflow-x-auto">
            <Link href="/home/decor" className="hover:text-gray-600 pb-2 whitespace-nowrap">
              DECOR
            </Link>
            <Link href="/home/textiles" className="hover:text-gray-600 pb-2 whitespace-nowrap">
              TEXTILES
            </Link>
            <Link href="/home/lighting" className="hover:text-gray-600 pb-2 whitespace-nowrap">
              LIGHTING
            </Link>
            <Link href="/home/furniture" className="hover:text-gray-600 border-b-2 border-black pb-2 whitespace-nowrap">
              FURNITURE
            </Link>
          </nav>
        </div>
      </section>

      {/* Furniture-Specific Navigation */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center space-x-6 text-xs font-medium overflow-x-auto">
            <Link href="#new-in" className="hover:text-gray-600 text-black whitespace-nowrap">
              NEW IN
            </Link>
            <Link href="#sofas" className="hover:text-gray-600 pb-1 whitespace-nowrap">
              SOFAS
            </Link>
            <Link href="#chairs" className="hover:text-gray-600 pb-1 whitespace-nowrap">
              CHAIRS
            </Link>
            <Link href="#tables" className="hover:text-gray-600 pb-1 whitespace-nowrap">
              TABLES
            </Link>
            <Link href="#beds" className="hover:text-gray-600 pb-1 whitespace-nowrap">
              BEDS
            </Link>
            <Link href="#storage" className="hover:text-gray-600 pb-1 whitespace-nowrap">
              STORAGE
            </Link>
            <Link href="#sale" className="hover:text-gray-600 pb-1 text-red-600 whitespace-nowrap">
              SALE
            </Link>
          </nav>
        </div>
      </section>

      {/* Featured Categories - 10 Seamless Images */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-0">
            {furnitureCategories.map((category) => (
              <Link key={category.title} href={category.href} className="group">
                <div className="relative overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    width={400}
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
            <h2 className="text-2xl font-light">FURNITURE COLLECTION</h2>
            <div className="flex items-center space-x-4">
              <select className="border border-gray-300 px-3 py-2 text-sm bg-white">
                <option>Sort by: Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>
          <ProductGrid />
        </div>
      </section>

      <Footer />
    </div>
  )
}
