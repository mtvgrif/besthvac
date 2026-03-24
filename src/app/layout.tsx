import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Montserrat } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { COMPANY } from '@/lib/constants'
import './globals.css'

const eurostile = localFont({
  src: '../../public/fonts/EurostileExtendedBlack.ttf',
  variable: '--font-eurostile',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} | ${COMPANY.tagline}`,
    template: `%s | ${COMPANY.name}`,
  },
  description: COMPANY.description,
  metadataBase: new URL(`https://${COMPANY.domain}`),
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: COMPANY.name,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${eurostile.variable} ${montserrat.variable}`}>
      <body className="font-body">
        <Header />
        <main className="pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
