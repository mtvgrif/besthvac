import Link from 'next/link'
import { Phone, Mail, MapPin, Flame, Snowflake } from 'lucide-react'
import { COMPANY, NAV_LINKS, SERVICES, SERVICE_AREAS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-7 h-7">
                <Snowflake className="w-7 h-7 text-blue-300 absolute -left-0.5 -top-0.5 opacity-60" />
                <Flame className="w-6 h-6 text-accent absolute left-1 top-1" />
              </div>
              <span className="font-heading font-bold text-xl">
                {COMPANY.name}
              </span>
            </Link>
            <p className="text-gray-300 text-sm mb-4">{COMPANY.description}</p>
            <div className="space-y-2 text-sm text-gray-300">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                {COMPANY.email}
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                {COMPANY.address.full}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="hover:text-accent transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Service Areas
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-300">
              {SERVICE_AREAS.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights
            reserved. Licensed &amp; Insured.
          </p>
          <div className="flex gap-4">
            {['Facebook', 'Instagram', 'Google'].map((social) => (
              <a
                key={social}
                href="#"
                className="hover:text-accent transition-colors"
                aria-label={social}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
