import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types
export interface Product {
  id: number
  name: string
  description: string
  price: number
  original_price?: number
  category_id: number
  sku: string
  is_active: boolean
  is_featured: boolean
  created_at: string
  updated_at: string
}

export interface ProductImage {
  id: number
  product_id: number
  image_url: string
  alt_text: string
  sort_order: number
}

export interface ProductVariant {
  id: number
  product_id: number
  size: string
  color: string
  stock_quantity: number
  sku: string
}

export interface Category {
  id: number
  name: string
  slug: string
  parent_id?: number
}
