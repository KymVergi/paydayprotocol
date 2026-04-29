'use client'

import { usePrivy } from '@privy-io/react-auth'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './ClaimDashboard.module.css'

export function ClaimDashboard() {
  const { ready, authenticated, user } = usePrivy()
  const [claimable, setClaimable] = useState('0.0000')
  const [totalClaimed, setTotalClaimed] = useState('0.0000')
  const [balance, setBalance] = useState('0')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (authenticated && user?.wallet?.address) {
      fetchUserData()
    }
  }, [authenticated, user])

  async function fetchUserData() {
    if (!user?.wallet?.address) return
    
    try {
      const address = user.wallet.address
      
      // Fetch pending reflection
      const pendingResponse = await fetch('https://rpc.ankr.com/eth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'eth_call',
          params: [{
            to: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
            data: `0x61db2446${address.slice(2).padStart(64, '0')}` // pendingReflection(address)
          }, 'latest'],
          id: 1
        })
      })
      
      const pendingData = await pendingResponse.json()
      if (pendingData.result) {
        const pending = parseInt(pendingData.result, 16) / 1e18
        setClaimable(pending.toFixed(4))
      }

      // Fetch claimed reflection
      const claimedResponse = await fetch('https://rpc.ankr.com/eth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'eth_call',
          params: [{
            to: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
            data: `0x2d0af94e${address.slice(2).padStart(64, '0')}` // claimedReflection(address)
          }, 'latest'],
          id: 1
        })
      })
      
      const claimedData = await claimedResponse.json()
      if (claimedData.result) {
        const claimed = parseInt(claimedData.result, 16) / 1e18
        setTotalClaimed(claimed.toFixed(4))
      }

      // Fetch token balance
      const balanceResponse = await fetch('https://rpc.ankr.com/eth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'eth_call',
          params: [{
            to: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
            data: `0x70a08231${address.slice(2).padStart(64, '0')}` // balanceOf(address)
          }, 'latest'],
          id: 1
        })
      })
      
      const balanceData = await balanceResponse.json()
      if (balanceData.result) {
        const bal = parseInt(balanceData.result, 16) / 1e18
        setBalance(bal.toFixed(2))
      }
      
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }

  async function handleClaim() {
    if (!user?.wallet?.address) return
    
    setLoading(true)
    try {
      // Call claimReflection() function
      const tx = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
          from: user.wallet.address,
          to: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
          data: '0x70b7b80c' // claimReflection()
        }]
      })
      
      console.log('Transaction hash:', tx)
      
      // Wait a bit and refresh data
      setTimeout(() => {
        fetchUserData()
        setLoading(false)
      }, 3000)
      
    } catch (error) {
      console.error('Error claiming:', error)
      setLoading(false)
    }
  }

  if (!ready) {
    return (
      <section className={styles.claim} id="claim">
        <div className={styles.container}>
          <div className={styles.loading}>Loading...</div>
        </div>
      </section>
    )
  }

  if (!authenticated) {
    return (
      <section className={styles.claim} id="claim">
        <div className={styles.container}>
          <div className={styles.connectCard}>
            <h2 className={styles.connectTitle}>
              Check Ya <span className={styles.gold}>Source of Income</span>
            </h2>
            <p className={styles.connectText}>
              Connect your wallet to see your claimable ETH reflections
            </p>
            {/* Opción 1: Emojis (default) */}
            {/* <div className={styles.meowthPlaceholder}>🐱💰</div> */}
            {/* Opción 2: Usa tu imagen */}
            <Image src="/assets/meowth-empty.png" alt="Meowth" width={200} height={200} /> 
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.claim} id="claim">
      <div className={styles.container}>
        <h2 className={styles.title}>
          Your <span className={styles.gold}>Pay Day</span> Dashboard
        </h2>

        <div className={styles.dashboard}>
          <div className={styles.mainCard}>
            <div className={styles.cardHeader}>
              <h3>Claimable Income</h3>
              <span className={styles.ethBadge}>Ξ ETH</span>
            </div>
            
            <div className={styles.amount}>
              {claimable}
            </div>
            
            <p className={styles.hint}>
              ETH reflected to holders since your last claim
            </p>
            
            <button 
              onClick={handleClaim} 
              disabled={loading || parseFloat(claimable) === 0}
              className={styles.claimBtn}
            >
              {loading ? (
                <>
                  <span className={styles.spinner}></span>
                  Claiming...
                </>
              ) : (
                <>
                  💰 Claim ETH Now
                </>
              )}
            </button>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.statCard}>
              {/* Opción 1: Emoji (default) */}
              <div className={styles.statIcon}>💼</div>
              {/* Opción 2: Tu imagen personalizada */}
              {/* <Image src="/assets/icon-bag.png" alt="Bag" width={60} height={60} className={styles.statIcon} /> */}
              
              <div className={styles.statValue}>{balance}</div>
              <div className={styles.statLabel}>Your $PAYDAY Bag</div>
            </div>

            <div className={styles.statCard}>
              {/* Opción 1: Emoji (default) */}
              <div className={styles.statIcon}>📈</div>
              {/* Opción 2: Tu imagen personalizada */}
              {/* <Image src="/assets/icon-chart.png" alt="Chart" width={60} height={60} className={styles.statIcon} /> */}
              
              <div className={styles.statValue}>{totalClaimed}</div>
              <div className={styles.statLabel}>Total Claimed Ever</div>
            </div>
          </div>
        </div>

        <div className={styles.infoBox}>
          <p>
            💡 <strong>Pro tip:</strong> More holding = bigger slice. No staking, no locking. 
            Hold the coin, watch the meter go up, hit claim when you want the ETH.
          </p>
        </div>
      </div>
    </section>
  )
}