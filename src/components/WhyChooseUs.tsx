import {
  Award,
  ShieldCheck,
  Clock,
  ThumbsUp,
  type LucideIcon,
} from 'lucide-react'
import { WHY_CHOOSE_US } from '@/lib/constants'
import AnimateOnScroll from './AnimateOnScroll'

const iconMap: Record<string, LucideIcon> = {
  Award,
  ShieldCheck,
  Clock,
  ThumbsUp,
}

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal mb-4">
            Why Choose Best Technical?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Residential and commercial HVAC you can count on. Here&apos;s why
            property owners across the GTA trust us.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon] || Award
            const isCyan = index % 2 === 0
            return (
              <AnimateOnScroll key={item.title} delay={index * 100}>
                <div className="text-center">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      isCyan ? 'bg-cyan/10' : 'bg-gold/10'
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 ${isCyan ? 'text-cyan' : 'text-gold'}`}
                    />
                  </div>
                  <h3 className="font-display text-lg text-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
