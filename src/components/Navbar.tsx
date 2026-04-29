'use client'

import { usePrivy } from '@privy-io/react-auth'
import Image from 'next/image'
import styles from './Navbar.module.css'

export function Navbar() {
  const { ready, authenticated, login, logout, user } = usePrivy()

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          {/* Logo como imagen */}
          <Image
            src="/assets/logo.png"
            alt="Pay Day Protocol"
            width={50}
            height={50}
            className={styles.logoImage}
            priority
          />
          <span className={styles.title}>PAY DAY</span>
        </div>

        <div className={styles.nav}>
          <a href="#stats" className={styles.link}>Stats</a>
          <a href="#claim" className={styles.link}>Claim</a>
          <a href="#how" className={styles.link}>How It Works</a>
          
          {ready && !authenticated && (
            <button onClick={login} className={styles.connectBtn}>
              Connect Wallet
            </button>
          )}
          
          {authenticated && user?.wallet?.address && (
            <button onClick={logout} className={styles.walletBtn}>
              {formatAddress(user.wallet.address)}
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}