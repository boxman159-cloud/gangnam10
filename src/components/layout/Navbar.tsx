'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { localizedPath } from '@/lib/i18n'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'
import ContactButtons from '@/components/ui/ContactButtons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t, lang } = useLanguage()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navLinks = [
    { href: localizedPath(lang, '/#venues'), label: t('nav.venues') },
    { href: localizedPath(lang, '/#guide'), label: t('nav.guide') },
    { href: localizedPath(lang, '/#faq'), label: t('nav.faq') },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-800/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          {/* Logo */}
          <Link href={localizedPath(lang, '/')} className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-pink to-neon-purple flex items-center justify-center">
              <span className="text-white font-black text-sm">G10</span>
            </div>
            <span className="text-white font-black text-xl tracking-tight">
              강남<span className="text-gradient">하이퍼블릭</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-neon-pink transition-colors duration-200 font-medium text-sm tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <ContactButtons size="sm" />
            <Link href={localizedPath(lang, '/#quick-booking')} className="btn-primary text-sm py-2 px-4">
              {t('nav.quickBook')}
            </Link>
          </div>

          {/* Mobile right */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              className="text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="메뉴 열기"
            >
              <div className="w-6 h-0.5 bg-white mb-1.5" />
              <div className="w-6 h-0.5 bg-white mb-1.5" />
              <div className="w-6 h-0.5 bg-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-dark-800/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-300 hover:text-white py-2 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Link href={localizedPath(lang, '/#quick-booking')} className="btn-primary text-center text-sm" onClick={() => setMobileOpen(false)}>
                {t('nav.quickBook')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
