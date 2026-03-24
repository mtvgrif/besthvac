import { Phone } from 'lucide-react'
import Link from 'next/link'
import { COMPANY } from '@/lib/constants'

export default function CTABanner() {
  return (
    <section className="bg-dark py-12 lg:py-16 relative overflow-hidden">
      {/* Diagonal stripe accent */}
      <div className="absolute inset-0 diagonal-stripes" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-2xl lg:text-3xl text-gold mb-4">
          Need Emergency HVAC Service?
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Our Licensed Gas Technicians are available 24/7 for residential and
          commercial emergencies across the GTA.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={COMPANY.phoneHref}
            className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            {COMPANY.phone}
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
