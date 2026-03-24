import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react'
import { COMPANY } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Contact Best Technical Inc. | Free HVAC Estimates Toronto',
  description: `Contact Best Technical Inc. for a free estimate on heating and cooling services in Toronto. Residential & commercial. Call ${COMPANY.phone} or fill out our online form.`,
}

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-dark py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-3xl lg:text-5xl text-gold mb-4">
            Contact Us
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready for a free estimate? Residential or commercial &mdash; fill
            out the form below or give us a call.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <AnimateOnScroll className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 lg:p-8">
                <h2 className="font-display text-2xl text-charcoal mb-6">
                  Get a Free Quote
                </h2>
                <ContactForm />
              </div>
            </AnimateOnScroll>

            {/* Sidebar */}
            <AnimateOnScroll delay={200}>
              <div className="space-y-6">
                {/* Contact Info */}
                <div className="bg-dark rounded-2xl p-6">
                  <h3 className="font-display text-lg text-gold mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <a
                      href={COMPANY.phoneHref}
                      className="flex items-start gap-3 text-gray-400 hover:text-gold transition-colors"
                    >
                      <Phone className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gold">
                          {COMPANY.phone}
                        </p>
                        <p className="text-sm">24/7 Emergency Line</p>
                      </div>
                    </a>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="flex items-start gap-3 text-gray-400 hover:text-gold transition-colors"
                    >
                      <Mail className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-white">
                          {COMPANY.email}
                        </p>
                        <p className="text-sm">Response within 1 hour</p>
                      </div>
                    </a>
                    <div className="flex items-start gap-3 text-gray-400">
                      <MapPin className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-white">
                          {COMPANY.address.full}
                        </p>
                      </div>
                    </div>
                    <a
                      href={COMPANY.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-gray-400 hover:text-gold transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-white">
                          {COMPANY.instagram}
                        </p>
                        <p className="text-sm">Follow us on Instagram</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-dark rounded-2xl p-6">
                  <h3 className="font-display text-lg text-gold mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-cyan" />
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    {COMPANY.hours.map((h) => (
                      <div key={h.days} className="flex justify-between">
                        <span className="text-gray-400">{h.days}</span>
                        <span className="font-medium text-white">
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-dark-light rounded-2xl overflow-hidden h-64 flex items-center justify-center border border-white/10">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-10 h-10 mx-auto mb-2 text-cyan/30" />
                    <p className="text-sm font-medium text-gray-400">
                      Google Maps
                    </p>
                    <p className="text-xs">{COMPANY.address.full}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  )
}
