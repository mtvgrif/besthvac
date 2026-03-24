import { MapPin } from 'lucide-react'
import { SERVICE_AREAS } from '@/lib/constants'
import AnimateOnScroll from './AnimateOnScroll'

export default function ServiceAreas() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-10">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-4">
            Serving the Greater Toronto Area
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We proudly provide HVAC services across Toronto and the surrounding
            communities. No matter where you are in the GTA, we&apos;re just a
            phone call away.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {SERVICE_AREAS.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-1.5 bg-primary/5 text-primary px-4 py-2 rounded-full text-sm font-medium"
              >
                <MapPin className="w-3.5 h-3.5" />
                {area}
              </span>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
