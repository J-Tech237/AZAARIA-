"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import WishlistButton from "./wishlist-button"
import { useLanguage } from "@/contexts/LanguageContext"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  isNew?: boolean
  isSale?: boolean
}

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([])
  const { t } = useLanguage()

  useEffect(() => {
    // Mock data - in real app, fetch from Supabase
    const mockProducts: Product[] = [
      {
        id: 1,
        name: "Structured blazer",
        price: 47995,
        originalPrice: 59995,
        image: "/placeholder.svg?height=400&width=300",
        category: "women",
        isSale: true,
      },
      {
        id: 2,
        name: "Cotton t-shirt",
        price: 11995,
        image: "/placeholder.svg?height=400&width=300",
        category: "women",
        isNew: true,
      },
      {
        id: 3,
        name: "Denim jacket",
        price: 35995,
        image: "/placeholder.svg?height=400&width=300",
        category: "men",
      },
      {
        id: 4,
        name: "Floral dress",
        price: 29995,
        image: "/placeholder.svg?height=400&width=300",
        category: "women",
        isNew: true,
      },
      {
        id: 5,
        name: "Casual shirt",
        price: 23995,
        image: "/placeholder.svg?height=400&width=300",
        category: "men",
      },
      {
        id: 6,
        name: "Leather boots",
        price: 53995,
        originalPrice: 65995,
        image: "/placeholder.svg?height=400&width=300",
        category: "women",
        isSale: true,
      },
    ]
    setProducts(mockProducts)
  }, [])

  const formatPrice = (price: number) => {
    return `${price.toLocaleString()} FCFA`
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="group">
          <div className="relative overflow-hidden mb-3">
            <Link href={`/product/${product.id}`}>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={400}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <WishlistButton productId={product.id} className="absolute top-2 right-2" />
            {product.isNew && <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1">{t('product.new')}</span>}
            {product.isSale && (
              <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1">{t('product.sale')}</span>
            )}
          </div>
          <div className="space-y-1">
            <Link href={`/product/${product.id}`}>
              <h3 className="text-sm font-medium hover:text-gray-600">{product.name}</h3>
            </Link>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
