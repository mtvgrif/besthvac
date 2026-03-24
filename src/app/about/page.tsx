import type { Metadata } from 'next'
import Image from 'next/image'
import { ShieldCheck } from 'lucide-react'
import { COMPANY, TEAM } from '@/lib/constants'
import TeamCard from '@/components/TeamCard'
import ProcessSteps from '@/components/ProcessSteps'
import CTABanner from '@/components/CTABanner'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'About Best Technical Inc. | Licensed HVAC Contractors, Toronto',
  description: `Learn about Best Technical Inc. \u2014 professional HVAC services for residential and commercial properties across the GTA since ${COMPANY.founded}. Licensed Gas Technician.`,
}

const certifications = [
  'TSSA Licensed',
  'Licensed Gas Technician',
  'WSIB Insured',
  'ESA Certified',
]

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-dark py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo-stacked-dark.png"
              alt="Best Technical Inc."
              width={280}
              height={280}
              className="h-40 w-auto"
            />
          </div>
          <h1 className="font-display text-3xl lg:text-5xl text-gold mb-4">
            About Best Technical Inc.
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {COMPANY.tagline} since {COMPANY.founded}. {COMPANY.subTagline}.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl text-charcoal mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-left">
                <p>
                  Best Technical Inc. was founded in {COMPANY.founded} by a
                  Licensed Gas Technician with a straightforward philosophy:
                  deliver the best quality work at the best price, on time, every
                  time. What started as a hands-on operation has grown into one
                  of the GTA&apos;s most trusted HVAC companies.
                </p>
                <p>
                  Over the past{' '}
                  {new Date().getFullYear() - COMPANY.founded} years, we&apos;ve
                  served thousands of residential and commercial properties across
                  the Greater Toronto Area. From furnace wiring and ductwork
                  installations on active construction sites to emergency repairs
                  on the coldest winter nights, our team does the real work
                  &mdash; on-site, hands-on, every day.
                </p>
                <p>
                  Today, Best Technical Inc. remains a tight-knit team of
                  Licensed Gas Technicians who take pride in their craft. Our
                  crew shows up in Best Technical branded gear, ready to work.
                  You won&apos;t find us behind a desk &mdash; you&apos;ll find
                  us running copper lines, wiring control boards, and making sure
                  every system we touch runs perfectly. That&apos;s how
                  we&apos;ve built our reputation: one installation at a time.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="font-display text-3xl text-gold mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A hands-on crew of Licensed Gas Technicians. Real techs doing real
              work across the GTA &mdash; residential and commercial.
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
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="font-display text-3xl text-charcoal mb-4">
              Certifications &amp; Licenses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We maintain the highest standards of professional certification and
              licensing in the HVAC industry.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {certifications.map((cert, i) => (
                <div
                  key={cert}
                  className="bg-gray-light rounded-xl p-6 text-center border border-gray-200"
                >
                  <ShieldCheck
                    className={`w-10 h-10 mx-auto mb-3 ${
                      i % 2 === 0 ? 'text-cyan' : 'text-gold'
                    }`}
                  />
                  <p className="font-display text-sm text-charcoal">
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
