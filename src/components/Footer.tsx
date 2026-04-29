'use client'

import styles from './Footer.module.css'

export function Footer() {
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || ''

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.coin}>💰</span>
              <span className={styles.title}>PAY DAY</span>
            </div>
            <p className={styles.tagline}>
              Meowth's masterplan finally worked.<br/>
              That's right! 😼
            </p>
          </div>

          <div className={styles.links}>
            <h4>The Paperwork</h4>
            <a 
              href={`https://etherscan.io/token/${contractAddress}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contract on Etherscan
            </a>
            <a 
              href={`https://dexscreener.com/ethereum/${contractAddress}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chart on DexScreener
            </a>
          </div>

          <div className={styles.links}>
            <h4>Run With The Crew</h4>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              X / Twitter
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
          </div>
        </div>

        <div className={styles.disclaimer}>
          <h5>For The Lawyers</h5>
          <p>
            This ain't financial advice, homie. $PAYDAY is a memecoin built on a meme. 
            Don't put money in you can't afford to lose at the casino. 
            The site shows on-chain data — what you do with it is on you.
          </p>
          <p className={styles.build}>
            Built with 💰 by mysterious sources
          </p>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 Nobody Official - Just a buncha fools having fun</p>
          <p className={styles.powered}>Powered by Mysterious Sources</p>
        </div>
      </div>
    </footer>
  )
}
