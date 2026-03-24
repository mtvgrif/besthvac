import { MapPin } from 'lucide-react'
import { SERVICE_AREAS } from '@/lib/constants'
import AnimateOnScroll from './AnimateOnScroll'

export default function ServiceAreas() {
  return (
    <section className="py-16 lg:py-24 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-10">
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal mb-4">
            Serving the Greater Toronto Area
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Residential and commercial HVAC services across Toronto and the
            surrounding communities. We&apos;re just a phone call away.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {SERVICE_AREAS.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-1.5 bg-dark/5 text-charcoal border border-dark/10 px-4 py-2 rounded-full text-sm font-medium"
              >
                <MapPin className="w-3.5 h-3.5 text-cyan" />
                {area}
              </span>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
