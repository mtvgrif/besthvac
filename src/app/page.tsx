import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import ServicesOverview from '@/components/ServicesOverview'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import ServiceAreas from '@/components/ServiceAreas'
import CTABanner from '@/components/CTABanner'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: `${COMPANY.name} | Toronto HVAC Services \u2014 Heating, Cooling & Repairs`,
  description: `${COMPANY.description} Call ${COMPANY.phone} for 24/7 emergency service.`,
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <ServiceAreas />
      <CTABanner />

      {/* Schema.org LocalBusiness JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HVACBusiness',
            '@id': `https://${COMPANY.domain}`,
            name: COMPANY.name,
            description: COMPANY.description,
            url: `https://${COMPANY.domain}`,
            telephone: COMPANY.phone,
            email: COMPANY.email,
            address: {
              '@type': 'PostalAddress',
              streetAddress: COMPANY.address.street,
              addressLocality: COMPANY.address.city,
              addressRegion: COMPANY.address.province,
              postalCode: COMPANY.address.postal,
              addressCountry: 'CA',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 43.6532,
              longitude: -79.3832,
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                ],
                opens: '07:00',
                closes: '20:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '08:00',
                closes: '17:00',
              },
            ],
            areaServed: {
              '@type': 'GeoCircle',
              geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 43.6532,
                longitude: -79.3832,
              },
              geoRadius: '50000',
            },
            priceRange: '$$',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '312',
            },
          }),
        }}
      />
    </>
  )
}
