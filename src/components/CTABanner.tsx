import { Phone } from 'lucide-react'
import Link from 'next/link'
import { COMPANY } from '@/lib/constants'

export default function CTABanner() {
  return (
    <section className="bg-accent py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-2xl lg:text-3xl text-white mb-4">
          Need Emergency HVAC Service?
        </h2>
        <p className="text-white/90 mb-8 max-w-xl mx-auto">
          Our team is available 24/7 for emergency repairs across the GTA.
          Don&apos;t suffer through the heat or cold &mdash; call us now.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={COMPANY.phoneHref}
            className="inline-flex items-center justify-center gap-2 bg-white text-accent hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            {COMPANY.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-accent font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
