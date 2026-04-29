import type { Metadata } from 'next'
import { Fredoka, Baloo_2 } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const fredoka = Fredoka({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fredoka',
  display: 'swap'
})

const baloo = Baloo_2({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-baloo',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Pay Day Protocol',
  description: 'Meowth used Pay Day! Earn ETH reflections on every trade. That\'s right!',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fredoka.variable} ${baloo.variable}`}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}