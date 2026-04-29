'use client'

import { Hero } from '@/components/Hero'
import { ClaimDashboard } from '@/components/ClaimDashboard'
import { HowItWorks } from '@/components/HowItWorks'
import { Stats } from '@/components/Stats'
import { Footer } from '@/components/Footer'
import { FloatingCoins } from '@/components/FloatingCoins'
import { Navbar } from '@/components/Navbar'

export default function Home() {
  return (
    <main>
      <FloatingCoins />
      <Navbar />
      <Hero />
      <Stats />
      <ClaimDashboard />
      <HowItWorks />
      <Footer />
    </main>
  )
}
