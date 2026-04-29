'use client'

import styles from './FloatingCoins.module.css'

export function FloatingCoins() {
  // Posiciones fijas predefinidas
  const coins = [
    { left: 10, delay: 0, duration: 15 },
    { left: 20, delay: 1, duration: 18 },
    { left: 30, delay: 2, duration: 12 },
    { left: 40, delay: 0.5, duration: 16 },
    { left: 50, delay: 1.5, duration: 14 },
    { left: 60, delay: 2.5, duration: 17 },
    { left: 70, delay: 3, duration: 13 },
    { left: 80, delay: 3.5, duration: 19 },
    { left: 90, delay: 4, duration: 15 },
    { left: 15, delay: 4.5, duration: 16 },
    { left: 25, delay: 0.8, duration: 14 },
    { left: 35, delay: 1.8, duration: 18 },
    { left: 65, delay: 2.8, duration: 12 },
    { left: 75, delay: 3.8, duration: 17 },
    { left: 85, delay: 4.8, duration: 13 },
  ]

  return (
    <div className={styles.container}>
      {coins.map((coin, i) => (
        <div
          key={i}
          className={styles.coin}
          style={{
            left: `${coin.left}%`,
            animationDelay: `${coin.delay}s`,
            animationDuration: `${coin.duration}s`,
          }}
        >
          💰
        </div>
      ))}
    </div>
  )
}