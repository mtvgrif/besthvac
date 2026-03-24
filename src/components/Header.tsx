'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X, Flame, Snowflake } from 'lucide-react'
import { COMPANY, NAV_LINKS } from '@/lib/constants'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <Snowflake className="w-8 h-8 text-primary absolute -left-0.5 -top-0.5 opacity-60" />
              <Flame className="w-7 h-7 text-accent absolute left-1 top-1" />
            </div>
            <span className="font-heading font-bold text-xl text-primary">
              {COMPANY.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-accent ${
                  pathname === link.href ? 'text-accent' : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-2 text-primary font-semibold"
            >
              <Phone className="w-4 h-4" />
              {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-1 text-primary font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">{COMPANY.phone}</span>
            </a>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 text-gray-700"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white border-t mobile-nav-enter">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 px-2 rounded-lg font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-accent bg-accent/5'
                    : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block bg-accent text-white text-center font-semibold px-5 py-3 rounded-lg mt-3"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
