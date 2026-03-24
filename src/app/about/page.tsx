import type { Metadata } from 'next'
import { ShieldCheck } from 'lucide-react'
import { COMPANY, TEAM } from '@/lib/constants'
import TeamCard from '@/components/TeamCard'
import ProcessSteps from '@/components/ProcessSteps'
import CTABanner from '@/components/CTABanner'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'About Us \u2014 Family-Owned HVAC Experts Since 1998',
  description: `Learn about Best HVAC \u2014 a family-owned HVAC company serving the Greater Toronto Area since ${COMPANY.founded}. Licensed, insured, and committed to your comfort.`,
}

const certifications = [
  'TSSA Licensed',
  'HRAI Member',
  'WSIB Insured',
  'ESA Certified',
]

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-primary-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-3xl lg:text-5xl text-white mb-4">
            About Best HVAC
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Family-owned and operated since {COMPANY.founded}. Your comfort is
            our business.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading font-bold text-3xl text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-left">
                <p>
                  Best HVAC was founded in {COMPANY.founded} by Robert Thompson,
                  a journeyman HVAC technician with a simple belief: homeowners
                  deserve honest, reliable service at fair prices. What started
                  as a one-man operation working out of a pickup truck has grown
                  into one of the GTA&apos;s most trusted HVAC companies.
                </p>
                <p>
                  Over the past{' '}
                  {new Date().getFullYear() - COMPANY.founded} years, we&apos;ve
                  helped thousands of families across the Greater Toronto Area
                  stay comfortable in their homes. From emergency furnace repairs
                  on the coldest winter nights to complete air conditioning
                  installations for sweltering summers, we&apos;ve seen it all
                  &mdash; and fixed it all.
                </p>
                <p>
                  Today, Best HVAC is still family-owned and operated. Our team
                  of certified technicians carries forward the same values that
                  built this company: integrity, expertise, and a genuine
                  commitment to customer satisfaction. Every job we take on, from
                  a simple tune-up to a full system replacement, receives our
                  full attention and care.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-primary mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our skilled and friendly team is the backbone of Best HVAC. Each
              member brings expertise and dedication to every job.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {TEAM.map((member, index) => (
              <AnimateOnScroll key={member.name} delay={index * 100}>
                <TeamCard {...member} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-primary mb-4">
              Certifications &amp; Licenses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We maintain the highest standards of professional certification and
              licensing in the HVAC industry.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="bg-gray-light rounded-xl p-6 text-center border border-gray-200"
                >
                  <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-3" />
                  <p className="font-heading font-semibold text-sm text-primary">
                    {cert}
                  </p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <ProcessSteps />
      <CTABanner />
    </>
  )
}
