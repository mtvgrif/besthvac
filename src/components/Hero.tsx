import Link from 'next/link'
import Image from 'next/image'
import { Phone } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

export default function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center bg-dark">
      {/* Diagonal stripe pattern overlay */}
      <div className="absolute inset-0 diagonal-stripes" />
      {/* Subtle radial gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at 30% 50%, rgba(0,180,216,0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(242,194,24,0.1) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center">
        <div className="flex justify-center mb-8">
          <Image
            src="/logo-icon-512.png"
            alt="Best Technical Inc."
            width={100}
            height={100}
            className="h-24 w-24 lg:h-28 lg:w-28"
          />
        </div>
        <h1 className="font-display leading-none mb-4">
          <span className="block text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-gold">
            BEST
          </span>
          <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-cyan mt-1">
            TECHNICAL INC.
          </span>
        </h1>
        <p className="font-display text-xl sm:text-2xl text-white mb-3">
          Toronto&apos;s Most Trusted HVAC Experts
        </p>
        <p className="text-lg sm:text-xl text-gray-400 mb-4">
          24/7 Emergency Service &bull; {COMPANY.credential} &bull; Free
          Estimates
        </p>
        <p className="text-cyan font-semibold text-lg mb-10">
          {COMPANY.subTagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={COMPANY.phoneHref}
            className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border-2 border-cyan text-cyan hover:bg-cyan hover:text-dark font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
