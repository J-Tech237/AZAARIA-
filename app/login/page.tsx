"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/LanguageContext"

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Auth:", { email, password, isLogin })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-light mb-2">{isLogin ? t('auth.login') : t('auth.createAccount')}</h1>
            <p className="text-gray-600">{isLogin ? t('auth.welcomeBack') : t('auth.joinBenefits')}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">{t('auth.email')}</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div>
              <Label htmlFor="password">{t('auth.password')}</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {!isLogin && (
              <div>
                <Label htmlFor="confirmPassword">{t('auth.confirmPassword')}</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            )}

            <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
              {isLogin ? t('auth.login') : t('auth.createAccount')}
            </Button>
          </form>

          <div className="text-center mt-6">
            <button onClick={() => setIsLogin(!isLogin)} className="text-sm text-gray-600 hover:underline">
              {isLogin ? t('auth.noAccount') : t('auth.haveAccount')}
            </button>
          </div>

          {isLogin && (
            <div className="text-center mt-4">
              <Link href="/forgot-password" className="text-sm text-gray-600 hover:underline">
                {t('auth.forgotPassword')}
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}
