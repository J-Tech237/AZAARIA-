"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WishlistButtonProps {
  productId: number
  className?: string
}

export default function WishlistButton({ productId, className = "" }: WishlistButtonProps) {
  const [isInWishlist, setIsInWishlist] = useState(false)

  useEffect(() => {
    // Check if item is in wishlist on component mount
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
    setIsInWishlist(savedWishlist.includes(productId))
  }, [productId])

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")

    if (isInWishlist) {
      // Remove from wishlist
      const updatedWishlist = savedWishlist.filter((id: number) => id !== productId)
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
      setIsInWishlist(false)
    } else {
      // Add to wishlist
      savedWishlist.push(productId)
      localStorage.setItem("wishlist", JSON.stringify(savedWishlist))
      setIsInWishlist(true)
    }
  }

  return (
    <Button variant="ghost" size="sm" className={`bg-white/80 hover:bg-white ${className}`} onClick={toggleWishlist}>
      <Heart className={`h-4 w-4 ${isInWishlist ? "fill-red-500 text-red-500" : ""}`} />
    </Button>
  )
}
