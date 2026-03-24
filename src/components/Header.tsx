'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X } from 'lucide-react'
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
          ? 'bg-dark/95 backdrop-blur-md shadow-lg'
          : 'bg-dark shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-icon-256.png"
              alt="Best Technical Inc."
              width={40}
              height={40}
              className="h-9 w-9 lg:h-10 lg:w-10"
            />
            <span className="hidden sm:inline font-display text-xl tracking-wide text-white">
              BEST TECHNICAL INC.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-gold ${
                  pathname === link.href ? 'text-gold' : 'text-white'
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
              className="flex items-center gap-2 text-gold font-semibold"
            >
              <Phone className="w-4 h-4" />
              {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              className="bg-gold hover:bg-gold-dark text-dark font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-1 text-gold font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">{COMPANY.phone}</span>
            </a>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 text-white"
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
        <div className="lg:hidden bg-dark border-t border-white/10 mobile-nav-enter">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 px-2 rounded-lg font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-gold bg-gold/10'
                    : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block bg-gold text-dark text-center font-semibold px-5 py-3 rounded-lg mt-3"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
