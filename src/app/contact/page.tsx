import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { COMPANY } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Contact Us \u2014 Get a Free HVAC Estimate',
  description: `Contact Best HVAC for a free estimate on heating, cooling, and ventilation services in Toronto. Call ${COMPANY.phone} or fill out our online form.`,
}

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-primary-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-3xl lg:text-5xl text-white mb-4">
            Contact Us
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Ready for a free estimate? Fill out the form below or give us a
            call. We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <AnimateOnScroll className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8">
                <h2 className="font-heading font-bold text-2xl text-primary mb-6">
                  Get a Free Quote
                </h2>
                <ContactForm />
              </div>
            </AnimateOnScroll>

            {/* Sidebar */}
            <AnimateOnScroll delay={200}>
              <div className="space-y-6">
                {/* Contact Info */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h3 className="font-heading font-semibold text-lg text-primary mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <a
                      href={COMPANY.phoneHref}
                      className="flex items-start gap-3 text-gray-600 hover:text-accent transition-colors"
                    >
                      <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">
                          {COMPANY.phone}
                        </p>
                        <p className="text-sm">24/7 Emergency Line</p>
                      </div>
                    </a>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="flex items-start gap-3 text-gray-600 hover:text-accent transition-colors"
                    >
                      <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">
                          {COMPANY.email}
                        </p>
                        <p className="text-sm">Response within 1 hour</p>
                      </div>
                    </a>
                    <div className="flex items-start gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">
                          {COMPANY.address.street}
                        </p>
                        <p className="text-sm">
                          {COMPANY.address.city}, {COMPANY.address.province}{' '}
                          {COMPANY.address.postal}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h3 className="font-heading font-semibold text-lg text-primary mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-accent" />
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    {COMPANY.hours.map((h) => (
                      <div key={h.days} className="flex justify-between">
                        <span className="text-gray-600">{h.days}</span>
                        <span className="font-medium text-gray-800">
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-gray-200 rounded-2xl overflow-hidden h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-10 h-10 mx-auto mb-2 opacity-50" />
                    <p className="text-sm font-medium">Google Maps</p>
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
