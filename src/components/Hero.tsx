import Link from 'next/link'
import Image from 'next/image'
import { Phone } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

export default function Hero() {
  return (
    <section className="relative h-[100svh] max-h-[900px] min-h-[600px] flex items-center bg-dark overflow-hidden">
      {/* Background photo */}
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        style={{ objectPosition: 'center 40%' }}
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/80" />
      {/* Diagonal stripe pattern overlay */}
      <div className="absolute inset-0 diagonal-stripes opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center">
        <div className="flex justify-center mb-8">
          <Image
            src="/logo-icon-512.png"
            alt="Best Technical Inc."
            width={200}
            height={200}
            className="h-40 w-40 lg:h-52 lg:w-52"
          />
        </div>
        <h1 className="font-display leading-none mb-4">
          <span className="block text-7xl sm:text-8xl lg:text-[10rem] xl:text-[12rem] text-gold tracking-wider">
            BEST
          </span>
          <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-cyan tracking-wider mt-1">
            TECHNICAL INC.
          </span>
        </h1>
        <p className="font-body text-xl sm:text-2xl text-white mb-3">
          Toronto&apos;s Most Trusted HVAC Experts
        </p>
        <p className="text-lg sm:text-xl text-gray-400 mb-4">
          24/7 Emergency Service &bull; {COMPANY.credential} &bull; Free
          Estimates
        </p>
        <p className="text-cyan font-semibold text-lg mb-10">
          {COMPANY.subTagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={COMPANY.phoneHref}
            className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border-2 border-cyan text-cyan hover:bg-cyan hover:text-dark font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
