import { SERVICES } from '@/lib/constants'
import ServiceCard from './ServiceCard'
import AnimateOnScroll from './AnimateOnScroll'

export default function ServicesOverview() {
  return (
    <section className="py-16 lg:py-24 bg-dark diagonal-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gold mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive heating and cooling services for residential and
            commercial properties across the GTA.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <AnimateOnScroll key={service.id} delay={index * 100}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.shortDescription}
                id={service.id}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
