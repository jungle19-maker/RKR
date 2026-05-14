import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';

import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});
const outfit = Outfit({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const BASE_URL = 'https://www.rkrglobalpath.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'RKR Global Path HR & Manpower | Trusted Global Recruitment Partner',
    template: '%s | RKR Global Path HR & Manpower',
  },
  description:
    'RKR Global Path HR & Manpower is an MEA-approved, Government of India licensed overseas manpower recruitment agency. Connecting skilled Indian professionals with trusted international employers across Gulf, Middle East, Asia & Europe.',
  keywords: [
    'RKR Global Path',
    'overseas recruitment India',
    'manpower agency India',
    'MEA approved recruitment',
    'overseas jobs India',
    'gulf recruitment agency',
    'international manpower consultancy',
    'HR manpower solutions',
    'overseas staffing India',
    'global workforce recruitment',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BASE_URL,
    siteName: 'RKR Global Path HR & Manpower',
    title: 'RKR Global Path HR & Manpower | Trusted Global Recruitment Partner',
    description:
      'Connecting Talent with Opportunity. MEA Registered | 100% Legal Recruitment | Global Placements.',
    images: [
      {
        url: '/images/hero_city_buildings.png',
        width: 1200,
        height: 630,
        alt: 'RKR Global Path HR & Manpower — Global Recruitment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RKR Global Path HR & Manpower | Global Recruitment Partner',
    description:
      'MEA approved overseas recruitment agency. Connecting Talent with Opportunity worldwide.',
    images: ['/images/hero_city_buildings.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'RKR Global Path HR & Manpower',
  alternateName: 'RKR Global Path',
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.jpeg`,
  description:
    'MEA approved overseas manpower recruitment agency connecting skilled Indian professionals with international employers across Gulf, Middle East, Asia and Europe. Connecting Talent with Opportunity.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Deoria Sadar R.S Deoria',
    addressLocality: 'Deoria',
    addressRegion: 'Uttar Pradesh',
    postalCode: '274001',
    addressCountry: 'IN',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-91123456789',
      contactType: 'customer service',
      availableLanguage: ['Hindi', 'English'],
    },
  ],
  email: 'newrkrmanpowerconsultant@gmail.com',
  foundingDate: '2014',
  numberOfEmployees: '10-50',
  sameAs: [
    'https://www.facebook.com/rkrglobalpath',
    'https://www.linkedin.com/company/rkrglobalpath',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${plusJakarta.variable} ${outfit.variable} font-sans antialiased bg-[#F5F5F5] text-[#333333]`}
      >
        {children}
      </body>
    </html>
  );
}
