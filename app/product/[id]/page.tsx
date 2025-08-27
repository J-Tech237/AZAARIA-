"use client"

import { useState, useEffect } from "react"
import { use } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Heart, Share2, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "@/components/header"
import SaleBanner from "@/components/sale-banner"
import Footer from "@/components/footer"
import { useCart } from "@/contexts/CartContext"
import { toast } from "sonner"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  images: string[]
  description: string
  sizes: string[]
  colors: string[]
  category: string
}

const formatPrice = (price: number) => {
  return `${price.toLocaleString()} FCFA`
}

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const { addToCart } = useCart()
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    // Mock product data - in real app, fetch from Supabase
    const mockProduct: Product = {
      id: Number.parseInt(resolvedParams.id),
      name: "Structured blazer",
      price: 47995,
      originalPrice: 59995,
      images: [
        "/placeholder.svg?height=600&width=400",
        "/placeholder.svg?height=600&width=400",
        "/placeholder.svg?height=600&width=400",
        "/placeholder.svg?height=600&width=400",
      ],
      description:
        "Structured blazer with lapel collar and long sleeves. Front button fastening. Two front flap pockets. Interior pocket detail. Back vent at hem.",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Black", "Navy", "Beige"],
      category: "women",
    }
    setProduct(mockProduct)
  }, [resolvedParams.id])

  const handleAddToBag = () => {
    if (!product) return
    
    if (!selectedSize) {
      toast.error("Please select a size")
      return
    }
    
    if (!selectedColor) {
      toast.error("Please select a color")
      return
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor,
    })

    toast.success("Added to bag!")
  }

  const handleBuyNow = () => {
    if (!product) return
    
    if (!selectedSize) {
      toast.error("Please select a size")
      return
    }
    
    if (!selectedColor) {
      toast.error("Please select a color")
      return
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor,
    })

    toast.success("Added to bag!")
    router.push('/bag')
  }

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SaleBanner />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-[3/4] overflow-hidden">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-[3/4] overflow-hidden border-2 ${
                    selectedImage === index ? "border-black" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    width={150}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-light mb-2">{product.name}</h1>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-semibold">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">COLOR</label>
                <Select value={selectedColor} onValueChange={setSelectedColor}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select color" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.colors.map((color) => (
                      <SelectItem key={color} value={color}>
                        {color}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">SIZE</label>
                <div className="grid grid-cols-5 gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      onClick={() => setSelectedSize(size)}
                      className="h-12"
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">QUANTITY</label>
                <div className="flex items-center space-x-3">
                  <Button variant="outline" size="sm" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button variant="outline" size="sm" onClick={() => setQuantity(quantity + 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button className="w-full bg-black text-white hover:bg-gray-800 h-12" onClick={handleAddToBag}>ADD TO BAG</Button>
              <Button className="w-full bg-white text-black border-2 border-black hover:bg-gray-100 h-12" onClick={handleBuyNow}>
                BUY NOW
              </Button>
              <div className="flex space-x-3">
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Heart className="h-4 w-4 mr-2" />
                  WISHLIST
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Share2 className="h-4 w-4 mr-2" />
                  SHARE
                </Button>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-medium mb-2">DESCRIPTION</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <div className="space-y-4 text-sm">
              <details className="border-t pt-4">
                <summary className="font-medium cursor-pointer">COMPOSITION AND CARE</summary>
                <div className="mt-2 text-gray-600">
                  <p>Outer shell: 68% polyester, 30% viscose, 2% elastane</p>
                  <p>Lining: 100% polyester</p>
                  <p>Machine wash at 30°C</p>
                </div>
              </details>
              <details className="border-t pt-4">
                <summary className="font-medium cursor-pointer">SHIPPING & RETURNS</summary>
                <div className="mt-2 text-gray-600">
                  <p>Free shipping on orders over $50</p>
                  <p>Free returns within 30 days</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}


// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import { Heart, Share2, Minus, Plus } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import Header from "@/components/header"
// import SaleBanner from "@/components/sale-banner"
// import Footer from "@/components/footer"
// import Link from "next/link"

// interface Product {
//   id: number
//   name: string
//   price: number
//   originalPrice?: number
//   images: string[]
//   description: string
//   sizes: string[]
//   colors: string[]
//   category: string
// }

// const formatPrice = (price: number) => {
//   return `${price.toLocaleString()} FCFA`
// }

// export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
//   const [product, setProduct] = useState<Product | null>(null)
//   const [selectedImage, setSelectedImage] = useState(0)
//   const [selectedSize, setSelectedSize] = useState("")
//   const [selectedColor, setSelectedColor] = useState("")
//   const [quantity, setQuantity] = useState(1)

//   useEffect(() => {
//     // Mock product data based on ID - in real app, fetch from Supabase
//     const productId = Number.parseInt(params.id)

//     const mockProducts: { [key: number]: Product } = {
//       1: {
//         id: 1,
//         name: "Structured blazer",
//         price: 47995,
//         originalPrice: 59995,
//         images: [
//           "/placeholder.svg?height=600&width=400&text=Blazer+Front",
//           "/placeholder.svg?height=600&width=400&text=Blazer+Back",
//           "/placeholder.svg?height=600&width=400&text=Blazer+Side",
//           "/placeholder.svg?height=600&width=400&text=Blazer+Detail",
//         ],
//         description:
//           "Structured blazer with lapel collar and long sleeves. Front button fastening. Two front flap pockets. Interior pocket detail. Back vent at hem.",
//         sizes: ["XS", "S", "M", "L", "XL"],
//         colors: ["Black", "Navy", "Beige"],
//         category: "women",
//       },
//       2: {
//         id: 2,
//         name: "Cotton t-shirt",
//         price: 11995,
//         images: [
//           "/placeholder.svg?height=600&width=400&text=T-shirt+Front",
//           "/placeholder.svg?height=600&width=400&text=T-shirt+Back",
//           "/placeholder.svg?height=600&width=400&text=T-shirt+Side",
//           "/placeholder.svg?height=600&width=400&text=T-shirt+Detail",
//         ],
//         description:
//           "Basic cotton t-shirt with round neckline and short sleeves. Soft cotton fabric for everyday comfort. Perfect for layering or wearing alone.",
//         sizes: ["XS", "S", "M", "L", "XL"],
//         colors: ["White", "Black", "Gray", "Navy"],
//         category: "women",
//       },
//       3: {
//         id: 3,
//         name: "Denim jacket",
//         price: 35995,
//         images: [
//           "/placeholder.svg?height=600&width=400&text=Denim+Jacket+Front",
//           "/placeholder.svg?height=600&width=400&text=Denim+Jacket+Back",
//           "/placeholder.svg?height=600&width=400&text=Denim+Jacket+Open",
//           "/placeholder.svg?height=600&width=400&text=Denim+Detail",
//         ],
//         description:
//           "Classic denim jacket with button fastening and chest pockets. Vintage wash finish. Perfect for layering over dresses or casual outfits.",
//         sizes: ["S", "M", "L", "XL"],
//         colors: ["Light Blue", "Dark Blue", "Black"],
//         category: "men",
//       },
//       4: {
//         id: 4,
//         name: "Floral dress",
//         price: 29995,
//         images: [
//           "/placeholder.svg?height=600&width=400&text=Floral+Dress+Front",
//           "/placeholder.svg?height=600&width=400&text=Floral+Dress+Back",
//           "/placeholder.svg?height=600&width=400&text=Floral+Dress+Side",
//           "/placeholder.svg?height=600&width=400&text=Floral+Pattern",
//         ],
//         description:
//           "Midi dress with floral print and short sleeves. Flowing silhouette with elastic waist. Perfect for summer occasions and casual outings.",
//         sizes: ["XS", "S", "M", "L"],
//         colors: ["Floral Blue", "Floral Pink", "Floral Green"],
//         category: "women",
//       },
//       5: {
//         id: 5,
//         name: "Casual shirt",
//         price: 23995,
//         images: [
//           "/placeholder.svg?height=600&width=400&text=Casual+Shirt+Front",
//           "/placeholder.svg?height=600&width=400&text=Casual+Shirt+Back",
//           "/placeholder.svg?height=600&width=400&text=Casual+Shirt+Folded",
//           "/placeholder.svg?height=600&width=400&text=Shirt+Detail",
//         ],
//         description:
//           "Cotton casual shirt with button-down collar. Relaxed fit perfect for weekend wear. Can be dressed up or down for various occasions.",
//         sizes: ["S", "M", "L", "XL", "XXL"],
//         colors: ["White", "Light Blue", "Khaki", "Gray"],
//         category: "men",
//       },
//       6: {
//         id: 6,
//         name: "Leather boots",
//         price: 53995,
//         originalPrice: 65995,
//         images: [
//           "/placeholder.svg?height=600&width=400&text=Leather+Boots+Side",
//           "/placeholder.svg?height=600&width=400&text=Leather+Boots+Front",
//           "/placeholder.svg?height=600&width=400&text=Leather+Boots+Back",
//           "/placeholder.svg?height=600&width=400&text=Boot+Sole",
//         ],
//         description:
//           "Premium leather boots with comfortable sole. Ankle height with side zip closure. Durable construction perfect for everyday wear.",
//         sizes: ["36", "37", "38", "39", "40", "41"],
//         colors: ["Brown", "Black", "Tan"],
//         category: "women",
//       },
//     }

//     const selectedProduct = mockProducts[productId]

//     if (selectedProduct) {
//       setProduct(selectedProduct)
//     } else {
//       // Handle product not found - you could redirect or show error
//       setProduct(null)
//     }
//   }, [params.id])

//   const addToBag = () => {
//     if (!selectedSize || !selectedColor) {
//       alert("Please select size and color before adding to bag")
//       return
//     }

//     const cartItem = {
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       image: product.images[0],
//       size: selectedSize,
//       color: selectedColor,
//       quantity: quantity,
//     }

//     // Get existing cart from localStorage
//     const existingCart = JSON.parse(localStorage.getItem("cart") || "[]")

//     // Check if item with same id, size, and color already exists
//     const existingItemIndex = existingCart.findIndex(
//       (item: any) => item.id === cartItem.id && item.size === cartItem.size && item.color === cartItem.color,
//     )

//     if (existingItemIndex > -1) {
//       // Update quantity if item exists
//       existingCart[existingItemIndex].quantity += cartItem.quantity
//     } else {
//       // Add new item to cart
//       existingCart.push(cartItem)
//     }

//     // Save to localStorage
//     localStorage.setItem("cart", JSON.stringify(existingCart))

//     // Show success message
//     alert(`${product.name} added to bag!`)
//   }

//   if (!product) {
//     return (
//       <div className="min-h-screen bg-white">
//         <Header />
//         <SaleBanner />
//         <div className="container mx-auto px-4 py-16 text-center">
//           <h1 className="text-2xl font-light mb-4">Product Not Found</h1>
//           <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
//           <Link href="/">
//             <Button className="bg-black text-white hover:bg-gray-800">BACK TO HOME</Button>
//           </Link>
//         </div>
//         <Footer />
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />
//       <SaleBanner />

//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Product Images */}
//           <div className="space-y-4">
//             <div className="aspect-[3/4] overflow-hidden">
//               <Image
//                 src={product.images[selectedImage] || "/placeholder.svg"}
//                 alt={product.name}
//                 width={600}
//                 height={800}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="grid grid-cols-4 gap-2">
//               {product.images.map((image, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setSelectedImage(index)}
//                   className={`aspect-[3/4] overflow-hidden border-2 ${
//                     selectedImage === index ? "border-black" : "border-gray-200"
//                   }`}
//                 >
//                   <Image
//                     src={image || "/placeholder.svg"}
//                     alt={`${product.name} ${index + 1}`}
//                     width={150}
//                     height={200}
//                     className="w-full h-full object-cover"
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Product Details */}
//           <div className="space-y-6">
//             <div>
//               <h1 className="text-2xl font-light mb-2">{product.name}</h1>
//               <div className="flex items-center space-x-2 mb-4">
//                 <span className="text-xl font-semibold">{formatPrice(product.price)}</span>
//                 {product.originalPrice && (
//                   <span className="text-lg text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
//                 )}
//               </div>
//             </div>

//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium mb-2">COLOR</label>
//                 <Select value={selectedColor} onValueChange={setSelectedColor}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select color" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {product.colors.map((color) => (
//                       <SelectItem key={color} value={color}>
//                         {color}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">SIZE</label>
//                 <div className="grid grid-cols-5 gap-2">
//                   {product.sizes.map((size) => (
//                     <Button
//                       key={size}
//                       variant={selectedSize === size ? "default" : "outline"}
//                       onClick={() => setSelectedSize(size)}
//                       className="h-12"
//                     >
//                       {size}
//                     </Button>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">QUANTITY</label>
//                 <div className="flex items-center space-x-3">
//                   <Button variant="outline" size="sm" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
//                     <Minus className="h-4 w-4" />
//                   </Button>
//                   <span className="w-12 text-center">{quantity}</span>
//                   <Button variant="outline" size="sm" onClick={() => setQuantity(quantity + 1)}>
//                     <Plus className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-3">
//               <Button className="w-full bg-black text-white hover:bg-gray-800 h-12" onClick={addToBag}>
//                 ADD TO BAG
//               </Button>
//               <div className="flex space-x-3">
//                 <Button variant="outline" className="flex-1 bg-transparent">
//                   <Heart className="h-4 w-4 mr-2" />
//                   WISHLIST
//                 </Button>
//                 <Button variant="outline" className="flex-1 bg-transparent">
//                   <Share2 className="h-4 w-4 mr-2" />
//                   SHARE
//                 </Button>
//               </div>
//             </div>

//             <div className="border-t pt-6">
//               <h3 className="font-medium mb-2">DESCRIPTION</h3>
//               <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
//             </div>

//             <div className="space-y-4 text-sm">
//               <details className="border-t pt-4">
//                 <summary className="font-medium cursor-pointer">COMPOSITION AND CARE</summary>
//                 <div className="mt-2 text-gray-600">
//                   <p>Outer shell: 68% polyester, 30% viscose, 2% elastane</p>
//                   <p>Lining: 100% polyester</p>
//                   <p>Machine wash at 30°C</p>
//                 </div>
//               </details>
//               <details className="border-t pt-4">
//                 <summary className="font-medium cursor-pointer">SHIPPING & RETURNS</summary>
//                 <div className="mt-2 text-gray-600">
//                   <p>Free shipping on orders over $50</p>
//                   <p>Free returns within 30 days</p>
//                 </div>
//               </details>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   )
// }
