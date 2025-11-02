import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://defca.app'),
  title: {
    default: 'DEFCA - Detecte Enfermedades del Avellano con IA en Segundos',
    template: '%s | DEFCA',
  },
  description: 'Detecte enfermedades del avellano en segundos con inteligencia artificial. Tome una foto, obtenga diagnóstico instantáneo con IA, mapee la salud de su huerto y reciba recomendaciones de tratamiento. Sistema offline-first diseñado para el campo chileno.',
  keywords: [
    'DEFCA',
    'detección enfermedades avellano',
    'IA agricultura',
    'inteligencia artificial cultivos',
    'fitosanitario avellano',
    'diagnóstico IA enfermedades plantas',
    'agricultura de precisión Chile',
    'sanidad vegetal',
    'manejo integrado plagas',
    'monitoreo fitosanitario',
    'avellano europeo Chile',
    'detección enfermedades foliares',
    'tizón avellano',
    'análisis foliar IA',
    'asistente IA agrónomo',
    'mapeo salud huerto',
    'sistema offline agricultura',
    'aplicación móvil agricultura',
    'tecnología agrícola Chile',
  ],
  authors: [
    { name: 'José Sepúlveda', url: 'https://www.linkedin.com/in/josesepulvedapino/' },
    { name: 'Luis Soto', url: 'https://www.linkedin.com/in/luis-eduardo-soto-guti%C3%A9rrez-99a53a256/' },
  ],
  creator: 'José Sepúlveda & Luis Soto',
  publisher: 'DEFCA',
  applicationName: 'DEFCA',
  category: 'Agricultura',
  classification: 'Agricultura de Precisión, Tecnología Agrícola, Fitosanidad',
  openGraph: {
    title: 'DEFCA - Detecte Enfermedades del Avellano con IA en Segundos',
    description: 'Sistema inteligente de detección de enfermedades en avellanos con IA. Diagnóstico instantáneo, mapeo de salud del huerto y recomendaciones de tratamiento. Funciona sin conexión en el campo.',
    url: 'https://defca.app',
    siteName: 'DEFCA',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'DEFCA - Sistema de Detección de Enfermedades con IA para Avellanos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DEFCA - Detecte Enfermedades del Avellano con IA en Segundos',
    description: 'Diagnóstico instantáneo de enfermedades en avellanos con IA. Tome una foto, obtenga resultados en segundos y mapee la salud de su huerto.',
    images: ['/logo.jpg'],
    creator: '@defca_app',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://defca.app',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/logo.jpg', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/logo.jpg', sizes: '180x180', type: 'image/jpeg' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-CL">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#10b981" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="DEFCA" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'DEFCA',
              url: 'https://defca.app',
              logo: 'https://defca.app/logo.jpg',
              description: 'Sistema inteligente de detección de enfermedades en avellanos con IA',
              foundingDate: '2024',
              founders: [
                {
                  '@type': 'Person',
                  name: 'José Sepúlveda',
                  jobTitle: 'Co-founder & Software Engineer',
                  url: 'https://www.linkedin.com/in/josesepulvedapino/',
                },
                {
                  '@type': 'Person',
                  name: 'Luis Soto',
                  jobTitle: 'Co-founder & Software Engineer',
                  url: 'https://www.linkedin.com/in/luis-eduardo-soto-guti%C3%A9rrez-99a53a256/',
                },
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+56926873545',
                contactType: 'Customer Service',
                areaServed: 'CL',
                availableLanguage: 'Spanish',
              },
              sameAs: [
                'https://www.linkedin.com/in/josesepulvedapino/',
                'https://www.linkedin.com/in/luis-eduardo-soto-guti%C3%A9rrez-99a53a256/',
              ],
            }),
          }}
        />
        
        {/* Structured Data - SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'DEFCA',
              applicationCategory: 'BusinessApplication',
              applicationSubCategory: 'Agriculture',
              operatingSystem: 'Android, iOS',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'CLP',
              },
              description: 'Detecte enfermedades del avellano con inteligencia artificial en segundos. Sistema offline-first con diagnóstico instantáneo, mapeo de salud y recomendaciones de tratamiento.',
              featureList: [
                'Detección de enfermedades con IA',
                'Diagnóstico instantáneo',
                'Mapeo de salud del huerto',
                'Recomendaciones de tratamiento',
                'Funcionamiento offline',
                'Análisis de reportes',
                'Asistente IA agrónomo',
              ],
              screenshot: 'https://defca.app/logo.jpg',
            }),
          }}
        />
        
        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'DEFCA',
              url: 'https://defca.app',
              description: 'Sistema de detección de enfermedades del avellano con inteligencia artificial',
              inLanguage: 'es-CL',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://defca.app/?s={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
