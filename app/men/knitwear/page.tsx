import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import SaleBanner from "@/components/sale-banner"
import ProductGrid from "@/components/product-grid"
import Footer from "@/components/footer"

export default function MenKnitwearPage() {
  const knitwearCategories = [
    {
      title: "SWEATERS",
      subtitle: "Warm essentials",
      image: "/placeholder.svg?height=600&width=400",
      href: "/men/knitwear/sweaters",
    },
    {
      title: "CARDIGANS",
      subtitle: "Layering pieces",
      image: "/placeholder.svg?height=600&width=400",
      href: "/men/knitwear/cardigans",
    },
    {
      title: "PULLOVERS",
      subtitle: "Easy comfort",
      image: "/placeholder.svg?height=600&width=400",
      href: "/men/knitwear/pullovers",
    },
    {
      title: "TURTLENECKS",
      subtitle: "Refined warmth",
      image: "/placeholder.svg?height=600&width=400",
      href: "/men/knitwear/turtlenecks",
    },
    {
      title: "V-NECKS",
      subtitle: "Classic style",
      image: "/placeholder.svg?height=600&width=400",
      href: "/men/knitwear/v-necks",
    },
    {
      title: "CREW NECKS",
      subtitle: "Timeless cut",
      image: "/placeholder.svg?height=600&width=400",
      href: "/men/knitwear/crew-necks",
    },
    {
      title: "CASHMERE",
      subtitle: "Luxury comfort",
      image: "/placeholder.svg?height=600&width=400",
      href: "/men/knitwear/cashmere",
    },
    {
      title: "WOOL KNITS",
      subtitle: "Natural warmth",
      image: "/placeholder.svg?height=600&width=400",
      href: "/men/knitwear/wool",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SaleBanner />

      <section className="relative h-screen">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Men's Knitwear Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-center mb-8 tracking-wider">KNITWEAR</h1>
          <Link href="#products">
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-black px-8 py-3 text-sm tracking-wider"
            >
              COZY ESSENTIALS
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-black">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/men" className="hover:text-black">
              Men
            </Link>
            <span className="mx-2">/</span>
            <span className="text-black">Knitwear</span>
          </nav>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center space-x-8 text-sm font-medium overflow-x-auto">
            <Link href="/men/suits" className="hover:text-gray-600 pb-2 whitespace-nowrap">
              SUITS
            </Link>
            <Link href="/men/shirts" className="hover:text-gray-600 pb-2 whitespace-nowrap">
              SHIRTS
            </Link>
            <Link href="/men/casual" className="hover:text-gray-600 pb-2 whitespace-nowrap">
              CASUAL
            </Link>
            <Link href="/men/denim" className="hover:text-gray-600 pb-2 whitespace-nowrap">
              DENIM
            </Link>
            <Link href="/men/knitwear" className="hover:text-gray-600 border-b-2 border-black pb-2 whitespace-nowrap">
              KNITWEAR
            </Link>
            <Link href="/men/outerwear" className="hover:text-gray-600 pb-2 whitespace-nowrap">
              OUTERWEAR
            </Link>
            <Link href="/men/shoes" className="hover:text-gray-600 pb-2 whitespace-nowrap">
              SHOES
            </Link>
            <Link href="/men/accessories" className="hover:text-gray-600 pb-2 whitespace-nowrap">
              ACCESSORIES
            </Link>
            <Link href="/men/sportswear" className="hover:text-gray-600 pb-2 whitespace-nowrap">
              SPORTSWEAR
            </Link>
            <Link href="/men/underwear" className="hover:text-gray-600 pb-2 whitespace-nowrap">
              UNDERWEAR
            </Link>
          </nav>
        </div>
      </section>

      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center space-x-6 text-xs font-medium overflow-x-auto">
            <Link href="#new-in" className="hover:text-gray-600 text-black whitespace-nowrap">
              NEW IN
            </Link>
            <Link href="#sweaters" className="hover:text-gray-600 pb-1 whitespace-nowrap">
              SWEATERS
            </Link>
            <Link href="#cardigans" className="hover:text-gray-600 pb-1 whitespace-nowrap">
              CARDIGANS
            </Link>
            <Link href="#pullovers" className="hover:text-gray-600 pb-1 whitespace-nowrap">
              PULLOVERS
            </Link>
            <Link href="#turtlenecks" className="hover:text-gray-600 pb-1 whitespace-nowrap">
              TURTLENECKS
            </Link>
            <Link href="#cashmere" className="hover:text-gray-600 pb-1 whitespace-nowrap">
              CASHMERE
            </Link>
            <Link href="#sale" className="hover:text-gray-600 pb-1 text-red-600 whitespace-nowrap">
              SALE
            </Link>
          </nav>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {knitwearCategories.map((category) => (
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

      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-light">KNITWEAR COLLECTION</h2>
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
