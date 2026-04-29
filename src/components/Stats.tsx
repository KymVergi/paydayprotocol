'use client'

import { useEffect, useState } from 'react'
import styles from './Stats.module.css'

interface StatsData {
  totalReflected: string
  holders: number
  marketCap: string
  price: string
}

export function Stats() {
  const [stats, setStats] = useState<StatsData>({
    totalReflected: '0',
    holders: 0,
    marketCap: '$0',
    price: '$0',
  })

  useEffect(() => {
    fetchStats()
  }, [])

  async function fetchStats() {
    try {
      // Fetch from DexScreener API
      const dexResponse = await fetch(
        `https://api.dexscreener.com/latest/dex/tokens/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`
      )
      const dexData = await dexResponse.json()
      
      if (dexData.pairs && dexData.pairs.length > 0) {
        const pair = dexData.pairs[0]
        setStats(prev => ({
          ...prev,
          marketCap: `$${parseFloat(pair.fdv).toLocaleString()}`,
          price: `$${parseFloat(pair.priceUsd).toFixed(8)}`,
        }))
      }

      // Fetch total reflected from contract using Ankr
      const ankrResponse = await fetch('https://rpc.ankr.com/eth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'eth_call',
          params: [{
            to: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
            data: '0x3732e214' // totalReflected()
          }, 'latest'],
          id: 1
        })
      })
      
      const ankrData = await ankrResponse.json()
      if (ankrData.result) {
        const reflected = parseInt(ankrData.result, 16) / 1e18
        setStats(prev => ({
          ...prev,
          totalReflected: reflected.toFixed(4),
        }))
      }

      // You can add more contract calls here for holders count
      
    } catch (error) {
      console.error('Error fetching stats:', error)
    }
  }

  return (
    <section className={styles.stats} id="stats">
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.coin}>💰</span>
          Pay Day Stats
          <span className={styles.coin}>💰</span>
        </h2>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.icon}>Ξ</div>
            <div className={styles.value}>{stats.totalReflected}</div>
            <div className={styles.label}>Total ETH Reflected</div>
            <div className={styles.subtext}>Since launch</div>
          </div>
          
          <div className={styles.card}>
            <div className={styles.icon}>👥</div>
            <div className={styles.value}>112</div>
            <div className={styles.label}>Holders</div>
            <div className={styles.subtext}>Growing squad</div>
          </div>
          
          <div className={styles.card}>
            <div className={styles.icon}>📊</div>
            <div className={styles.value}>{stats.marketCap}</div>
            <div className={styles.label}>Market Cap</div>
            <div className={styles.subtext}>Fully diluted</div>
          </div>
          
          <div className={styles.card}>
            <div className={styles.icon}>💵</div>
            <div className={styles.value}>{stats.price}</div>
            <div className={styles.label}>Price</div>
            <div className={styles.subtext}>Per $PAYDAY</div>
          </div>
        </div>
      </div>
    </section>
  )
}
