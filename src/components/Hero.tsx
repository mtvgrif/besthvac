import Link from 'next/link'
import { Phone } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

export default function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center bg-gradient-to-br from-primary via-primary-light to-primary">
      {/* Decorative dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center">
        <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 leading-tight">
          {COMPANY.tagline}
        </h1>
        <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          {COMPANY.subTagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={COMPANY.phoneHref}
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
