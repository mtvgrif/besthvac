import {
  Phone,
  FileText,
  Wrench,
  ThumbsUp,
  type LucideIcon,
} from 'lucide-react'
import { PROCESS_STEPS } from '@/lib/constants'
import AnimateOnScroll from './AnimateOnScroll'

const icons: LucideIcon[] = [Phone, FileText, Wrench, ThumbsUp]

export default function ProcessSteps() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal mb-4">
            Our Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Getting your HVAC system serviced is easy. Here&apos;s how it works.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200" />

          {PROCESS_STEPS.map((step, index) => {
            const Icon = icons[index]
            const isCyan = index % 2 === 0
            return (
              <AnimateOnScroll key={step.step} delay={index * 150}>
                <div className="text-center relative">
                  <div
                    className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 ${
                      isCyan ? 'bg-cyan/10' : 'bg-gold/10'
                    }`}
                  >
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center ${
                        isCyan ? 'bg-cyan' : 'bg-gold'
                      }`}
                    >
                      <Icon
                        className={`w-7 h-7 ${isCyan ? 'text-white' : 'text-dark'}`}
                      />
                    </div>
                  </div>
                  <span className="inline-block bg-dark text-gold text-xs font-bold px-2.5 py-1 rounded-full mb-3">
                    Step {step.step}
                  </span>
                  <h3 className="font-display text-lg text-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
