import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Al Mutawa Marine Works L.L.C | Specialized Offshore Services',
  description: 'Pioneers in offshore oil & gas industry since 1978. Specialized technical marine services, diving operations, and vessel support across the Gulf region. Abu Dhabi, UAE.',
  keywords: ['offshore services', 'marine services', 'diving operations', 'Abu Dhabi', 'UAE', 'oil and gas', 'vessel charter'],
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#1e293b' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
