"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import SaleBanner from "@/components/sale-banner"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/LanguageContext"

interface CartItem {
  id: number
  name: string
  price: number
  image: string
  size: string
  color: string
  quantity: number
}

export default function BagPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const { t } = useLanguage()

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]")
    setCartItems(savedCart)
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }, [cartItems])

  const formatPrice = (price: number) => {
    return `${price.toLocaleString()} FCFA`
  }

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id))
    } else {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 30000 ? 0 : 3595
  const total = subtotal + shipping

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SaleBanner />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-light mb-8">{t('bag.title')} ({cartItems.length})</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 mb-4">{t('bag.empty')}</p>
            <Link href="/women">
              <Button>{t('bag.continue')}</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 border-b pb-6">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={120}
                    height={160}
                    className="object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{item.name}</h3>
                      <Button variant="ghost" size="sm" onClick={() => removeItem(item.id)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Size: {item.size} | Color: {item.color}
                    </p>
                    <p className="font-semibold mb-4">{formatPrice(item.price)}</p>
                    <div className="flex items-center space-x-3">
                      <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 p-6 h-fit">
              <h2 className="font-semibold mb-4">{t('bag.orderSummary')}</h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>{t('bag.subtotal')}</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('bag.shipping')}</span>
                  <span>{shipping === 0 ? t('bag.free') : formatPrice(shipping)}</span>
                </div>
                {shipping === 0 && <p className="text-sm text-green-600">{t('bag.freeShippingNote')}</p>}
              </div>
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between font-semibold text-lg">
                  <span>{t('bag.total')}</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
              <Button className="w-full bg-black text-white hover:bg-gray-800 mb-4">{t('bag.checkout')}</Button>
              <Button variant="outline" className="w-full bg-transparent">
                {t('bag.continue')}
              </Button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}
