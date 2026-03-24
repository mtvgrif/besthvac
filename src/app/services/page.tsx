import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Flame,
  Snowflake,
  Wind,
  Droplets,
  Leaf,
  AlertTriangle,
  type LucideIcon,
} from 'lucide-react'
import { SERVICES, COMPANY } from '@/lib/constants'
import FAQ from '@/components/FAQ'
import CTABanner from '@/components/CTABanner'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'HVAC Services | Furnace, AC, Duct Cleaning \u2014 Best Technical Inc.',
  description: `Best Technical Inc. offers professional HVAC services in Toronto: furnace repair, AC installation, duct cleaning, water heaters, indoor air quality, and 24/7 emergency service. Licensed Gas Technician. Call ${COMPANY.phone}.`,
}

const iconMap: Record<string, LucideIcon> = {
  Flame,
  Snowflake,
  Wind,
  Droplets,
  Leaf,
  AlertTriangle,
}

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-dark py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-3xl lg:text-5xl text-gold mb-4">
            Our Services
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Professional heating and cooling solutions for residential and
            commercial properties. Licensed Gas Technicians on every job.
          </p>
        </div>
      </section>

      {/* Individual Services */}
      {SERVICES.map((service, index) => {
        const Icon = iconMap[service.icon] || Flame
        const isEven = index % 2 === 0
        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-16 lg:py-20 ${isEven ? 'bg-white' : 'bg-gray-light'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimateOnScroll>
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-cyan" />
                    </div>
                    <h2 className="font-display text-2xl lg:text-3xl text-charcoal">
                      {service.title}
                    </h2>
                  </div>

                  <div className="grid lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-3 space-y-4">
                      {service.description.map((para, i) => (
                        <p key={i} className="text-gray-600 leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </div>
                    <div className="lg:col-span-2">
                      <div className="bg-dark rounded-xl p-6">
                        <h3 className="font-display text-gold mb-4">
                          What&apos;s Included
                        </h3>
                        <ul className="space-y-2">
                          {service.includes.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-gray-300"
                            >
                              <span className="text-cyan mt-0.5 font-bold">
                                &#10003;
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/contact"
                          className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-6 py-3 rounded-lg mt-6 transition-colors text-sm"
                        >
                          Request This Service
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </section>
        )
      })}

      <FAQ />
      <CTABanner />
    </>
  )
}
