import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'DEFCA - Sistema de Gestión Fitosanitaria para Avellanos',
  description: 'Sistema inteligente de gestión fitosanitaria que detecta enfermedades foliares en avellanos con IA. Diagnóstico rápido, confiable y diseñado para el campo chileno. Desarrollado por José Sepúlveda y Luis Soto.',
  keywords: [
    'DEFCA',
    'detección de enfermedades',
    'avellano',
    'fitosanitario',
    'agricultura',
    'IA',
    'inteligencia artificial',
    'Chile',
    'cultivos',
    'sanidad vegetal',
    'agricultura de precisión',
  ],
  authors: [
    { name: 'José Sepúlveda', url: 'https://www.linkedin.com/in/josesepulvedapino/' },
    { name: 'Luis Soto', url: 'https://www.linkedin.com/in/luis-eduardo-soto-guti%C3%A9rrez-99a53a256/' },
  ],
  creator: 'José Sepúlveda & Luis Soto',
  publisher: 'DEFCA',
  openGraph: {
    title: 'DEFCA - Sistema de Gestión Fitosanitaria para Avellanos',
    description: 'Sistema de gestión fitosanitaria con IA para detectar enfermedades foliares en avellanos. Diseñado para el campo chileno.',
    url: 'https://defca.app',
    siteName: 'DEFCA',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DEFCA - Detector Fitosanitario',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DEFCA - Sistema de Gestión Fitosanitaria para Avellanos',
    description: 'Sistema de gestión fitosanitaria con IA para detectar enfermedades foliares en avellanos. Diseñado para el campo.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-de-verificacion-google',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#10b981" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
