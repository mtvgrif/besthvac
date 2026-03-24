import { Phone } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

export default function CTABanner() {
  return (
    <section className="bg-gold py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-2xl lg:text-3xl text-dark mb-4">
          Need Emergency HVAC Service?
        </h2>
        <a
          href={COMPANY.phoneHref}
          className="inline-flex items-center justify-center gap-3 text-dark font-bold text-2xl lg:text-4xl hover:opacity-80 transition-opacity"
        >
          <Phone className="w-7 h-7 lg:w-9 lg:h-9" />
          Call {COMPANY.phone}
        </a>
      </div>
    </section>
  )
}
