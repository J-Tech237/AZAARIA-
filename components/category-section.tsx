"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"

export default function CategorySection() {
  const { t } = useLanguage()
  const categories = [
    {
      title: t('nav.women'),
      subtitle: t('category.womenSubtitle'),
      image: "/placeholder.svg?height=600&width=400",
      href: "/women",
    },
    {
      title: t('nav.men'),
      subtitle: t('category.menSubtitle'),
      image: "/placeholder.svg?height=600&width=400",
      href: "/men",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {categories.map((category) => (
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
                  <h3 className="text-2xl font-light">{category.title}</h3>
                  <p className="text-sm opacity-90">{category.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
