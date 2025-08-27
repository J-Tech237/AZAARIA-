"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'fr'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
      setLanguageState(savedLanguage)
      if (typeof document !== 'undefined') {
        document.documentElement.lang = savedLanguage
      }
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
    }
  }

  const t = (key: string): string => {
    const translations = {
      en: {
        // Navigation
        'nav.women': 'WOMEN',
        'nav.men': 'MEN',
        'nav.home': 'HOME',
        'nav.search': 'SEARCH',
        'nav.login': 'LOG IN',
        'nav.wishlist': 'WISHLIST',
        'nav.bag': 'BAG',

        // Sale banner
        'sale.upTo': 'SALE UP TO 70% OFF',

        // Hero Section
        'hero.title': 'Designed in',
        'hero.subtitle': 'Barcelona',
        'hero.since': 'since 1984',

        // Category Section
        'category.newIn': 'NEW IN',
        'category.stayUpdated': 'Stay up to date',
        'category.newsletter': 'Subscribe to our newsletter and get 10% off your first order',
        'category.emailPlaceholder': 'Enter your email',
        'category.subscribe': 'SUBSCRIBE',
        'category.womenSubtitle': 'New Collection',
        'category.menSubtitle': 'Essential Pieces',

        // Common headings/navigation on subpages
        'common.newNow': 'NEW NOW',
        'common.discoverMore': 'DISCOVER MORE',
        'common.exploreHome': 'EXPLORE HOME',
        'common.shopNow': 'SHOP NOW',
        'common.viewAll': 'VIEW ALL',
        'common.sale': 'SALE',
        'common.clothing': 'CLOTHING',
        'common.shoes': 'SHOES',
        'common.bags': 'BAGS',
        'common.accessories': 'ACCESSORIES',

        // Footer
        'footer.locale': 'CAMEROON - ENGLISH →',
        'footer.help': 'HELP',
        'footer.myPurchases': 'MY PURCHASES',
        'footer.returns': 'RETURNS',
        'footer.sizeGuide': 'SIZE GUIDE',
        'footer.contact': 'CONTACT',
        'footer.company': 'COMPANY',
        'footer.workFor': 'WORK FOR AZAARIA',
        'footer.press': 'PRESS',
        'footer.aboutUs': 'ABOUT US',
        'footer.careers': 'CAREERS',
        'footer.outlet': 'AZAARIA OUTLET',
        'footer.siteMap': 'SITE MAP',
        'footer.giftCards': 'GIFT CARDS',
        'footer.newsletter': 'NEWSLETTER',
        'footer.responsibility': 'RESPONSIBILITY',
        'footer.stores': 'STORES',
        'footer.sustainability': 'SUSTAINABILITY',
        'footer.community': 'COMMUNITY',
        'footer.rights': '© 2024 AZAARIA All rights reserved',
        'footer.privacy': 'PRIVACY POLICY AND COOKIES',
        'footer.terms': 'TERMS AND CONDITIONS',
        'footer.ethics': 'ETHICS CHANNEL',

        // Auth / Login
        'auth.login': 'LOG IN',
        'auth.createAccount': 'CREATE ACCOUNT',
        'auth.welcomeBack': 'Welcome back to Azaaria',
        'auth.joinBenefits': 'Join Azaaria and enjoy exclusive benefits',
        'auth.email': 'Email',
        'auth.password': 'Password',
        'auth.confirmPassword': 'Confirm Password',
        'auth.noAccount': "Don't have an account? Create one",
        'auth.haveAccount': 'Already have an account? Log in',
        'auth.forgotPassword': 'Forgot your password?',

        // Product labels
        'product.new': 'NEW',
        'product.sale': 'SALE',

        // Bag
        'bag.title': 'SHOPPING BAG',
        'bag.empty': 'Your bag is empty',
        'bag.continue': 'CONTINUE SHOPPING',
        'bag.orderSummary': 'ORDER SUMMARY',
        'bag.subtotal': 'Subtotal',
        'bag.shipping': 'Shipping',
        'bag.free': 'FREE',
        'bag.freeShippingNote': 'Free shipping on orders over 30,000 FCFA!',
        'bag.total': 'Total',
        'bag.checkout': 'CHECKOUT',

        // Wishlist
        'wishlist.emptyTitle': 'YOUR WISHLIST IS EMPTY',
        'wishlist.emptySubtitle': 'Ready to browse our collections and discover the astounding trends of the moment?',
        'wishlist.shopWomen': 'SHOP WOMEN',
        'wishlist.shopMen': 'SHOP MEN',
        'wishlist.title': 'WISHLIST',
        'wishlist.clearAll': 'CLEAR ALL',
        'wishlist.addToBag': 'ADD TO BAG',
        'wishlist.outOfStock': 'OUT OF STOCK',
        'wishlist.continueShopping': 'CONTINUE SHOPPING',

        // Common
        'common.search': 'Search products...',
        'common.loading': 'Loading...',
        'common.error': 'Error',
        'common.success': 'Success',
      },
      fr: {
        // Navigation
        'nav.women': 'FEMMES',
        'nav.men': 'HOMMES',
        'nav.home': 'MAISON',
        'nav.search': 'RECHERCHER',
        'nav.login': 'SE CONNECTER',
        'nav.wishlist': 'LISTE DE SOUHAITS',
        'nav.bag': 'SAC',

        // Sale banner
        'sale.upTo': 'SOLDES JUSQU\'À -70%',

        // Hero Section
        'hero.title': 'Conçu à',
        'hero.subtitle': 'Barcelone',
        'hero.since': 'depuis 1984',

        // Category Section
        'category.newIn': 'NOUVEAUTÉS',
        'category.stayUpdated': 'Restez à jour',
        'category.newsletter': 'Abonnez-vous à notre newsletter et obtenez 10% de réduction sur votre première commande',
        'category.emailPlaceholder': 'Entrez votre email',
        'category.subscribe': 'S\'ABONNER',
        'category.womenSubtitle': 'Nouvelle collection',
        'category.menSubtitle': 'Pièces essentielles',

        // Common headings/navigation on subpages
        'common.newNow': 'NOUVEAU MAINTENANT',
        'common.discoverMore': 'DÉCOUVRIR PLUS',
        'common.exploreHome': 'EXPLORER MAISON',
        'common.shopNow': 'ACHETER MAINTENANT',
        'common.viewAll': 'VOIR TOUT',
        'common.sale': 'SOLDES',
        'common.clothing': 'VÊTEMENTS',
        'common.shoes': 'CHAUSSURES',
        'common.bags': 'SACS',
        'common.accessories': 'ACCESSOIRES',

        // Footer
        'footer.locale': 'CAMEROUN - FRANÇAIS →',
        'footer.help': 'AIDE',
        'footer.myPurchases': 'MES ACHATS',
        'footer.returns': 'RETOURS',
        'footer.sizeGuide': 'GUIDE DES TAILLES',
        'footer.contact': 'CONTACT',
        'footer.company': 'ENTREPRISE',
        'footer.workFor': 'TRAVAILLER CHEZ AZAARIA',
        'footer.press': 'PRESSE',
        'footer.aboutUs': 'À PROPOS',
        'footer.careers': 'CARRIÈRES',
        'footer.outlet': 'AZAARIA OUTLET',
        'footer.siteMap': 'PLAN DU SITE',
        'footer.giftCards': 'CARTES CADEAUX',
        'footer.newsletter': 'NEWSLETTER',
        'footer.responsibility': 'RESPONSABILITÉ',
        'footer.stores': 'MAGASINS',
        'footer.sustainability': 'DURABILITÉ',
        'footer.community': 'COMMUNAUTÉ',
        'footer.rights': '© 2024 AZAARIA Tous droits réservés',
        'footer.privacy': 'CONFIDENTIALITÉ ET COOKIES',
        'footer.terms': 'TERMES ET CONDITIONS',
        'footer.ethics': 'CANAL D\'ÉTHIQUE',

        // Auth / Login
        'auth.login': 'SE CONNECTER',
        'auth.createAccount': 'CRÉER UN COMPTE',
        'auth.welcomeBack': 'Bon retour sur Azaaria',
        'auth.joinBenefits': 'Rejoignez Azaaria et profitez d\'avantages exclusifs',
        'auth.email': 'Email',
        'auth.password': 'Mot de passe',
        'auth.confirmPassword': 'Confirmez le mot de passe',
        'auth.noAccount': "Vous n\'avez pas de compte ? Créez-en un",
        'auth.haveAccount': 'Vous avez déjà un compte ? Connectez-vous',
        'auth.forgotPassword': 'Mot de passe oublié ?',

        // Product labels
        'product.new': 'NOUVEAU',
        'product.sale': 'SOLDES',

        // Bag
        'bag.title': 'PANIER',
        'bag.empty': 'Votre panier est vide',
        'bag.continue': 'POURSUIVRE MES ACHATS',
        'bag.orderSummary': 'RÉCAPITULATIF',
        'bag.subtotal': 'Sous-total',
        'bag.shipping': 'Livraison',
        'bag.free': 'GRATUIT',
        'bag.freeShippingNote': 'Livraison offerte dès 30 000 FCFA !',
        'bag.total': 'Total',
        'bag.checkout': 'PAIEMENT',

        // Wishlist
        'wishlist.emptyTitle': 'VOTRE LISTE DE SOUHAITS EST VIDE',
        'wishlist.emptySubtitle': 'Prêt à parcourir nos collections et découvrir les tendances du moment ?',
        'wishlist.shopWomen': 'BOUTIQUE FEMME',
        'wishlist.shopMen': 'BOUTIQUE HOMME',
        'wishlist.title': 'LISTE DE SOUHAITS',
        'wishlist.clearAll': 'TOUT SUPPRIMER',
        'wishlist.addToBag': 'AJOUTER AU PANIER',
        'wishlist.outOfStock': 'RUPTURE DE STOCK',
        'wishlist.continueShopping': 'POURSUIVRE MES ACHATS',

        // Common
        'common.search': 'Rechercher des produits...',
        'common.loading': 'Chargement...',
        'common.error': 'Erreur',
        'common.success': 'Succès',
      }
    }

    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 