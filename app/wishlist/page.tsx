"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Heart, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import SaleBanner from "@/components/sale-banner"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/LanguageContext"

interface WishlistItem {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  isAvailable: boolean
}

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([])
  const { t } = useLanguage()

  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id))
  }

  const formatPrice = (price: number) => {
    return `${price.toLocaleString()} FCFA`
  }

  const EmptyWishlist = () => (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="mb-8">
        <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h1 className="text-xl font-medium mb-4">{t('wishlist.emptyTitle')}</h1>
        <p className="text-gray-600 max-w-md">
          {t('wishlist.emptySubtitle')}
        </p>
      </div>
      <div className="flex gap-4">
        <Link href="/women">
          <Button className="bg-black text-white hover:bg-gray-800">{t('wishlist.shopWomen')}</Button>
        </Link>
        <Link href="/men">
          <Button variant="outline" className="bg-transparent">
            {t('wishlist.shopMen')}
          </Button>
        </Link>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SaleBanner />

      <div className="container mx-auto px-4 py-8">
        {wishlistItems.length === 0 ? (
          <EmptyWishlist />)
 : (
          <>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-light">{t('wishlist.title')} ({wishlistItems.length})</h1>
              <Button variant="outline" className="bg-transparent" onClick={() => setWishlistItems([])}>
                {t('wishlist.clearAll')}
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {wishlistItems.map((item) => (
                <div key={item.id} className="group relative">
                  <div className="relative overflow-hidden mb-3">
                    <Link href={`/product/${item.id}`}>
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={300}
                        height={400}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>

                    {/* Remove from wishlist button */}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>

                    {/* Add to bag button - appears on hover */}
                    <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        className="w-full bg-black text-white hover:bg-gray-800 text-sm"
                        disabled={!item.isAvailable}
                      >
                        {item.isAvailable ? (
                          <>
                            <ShoppingBag className="h-4 w-4 mr-2" />
                            {t('wishlist.addToBag')}
                          </>
                        ) : (
                          t('wishlist.outOfStock')
                        )}
                      </Button>
                    </div>

                    {!item.isAvailable && (
                      <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-600">{t('wishlist.outOfStock')}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-1">
                    <Link href={`/product/${item.id}`}>
                      <h3 className="text-sm font-medium hover:text-gray-600">{item.name}</h3>
                    </Link>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-semibold">{formatPrice(item.price)}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{formatPrice(item.originalPrice)}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Continue Shopping */}
            <div className="text-center mt-12">
              <h2 className="text-xl font-light mb-4">{t('wishlist.continueShopping')}</h2>
              <div className="flex justify-center gap-4">
                <Link href="/women">
                  <Button variant="outline" className="bg-transparent">
                    {t('nav.women')}
                  </Button>
                </Link>
                <Link href="/men">
                  <Button variant="outline" className="bg-transparent">
                    {t('nav.men')}
                  </Button>
                </Link>
                <Link href="/home">
                  <Button variant="outline" className="bg-transparent">
                    {t('nav.home')}
                  </Button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
