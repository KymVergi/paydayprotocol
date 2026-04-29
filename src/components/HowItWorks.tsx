'use client'

import Image from 'next/image'
import styles from './HowItWorks.module.css'

export function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles.container}>
        <h2 className={styles.title}>
          Where's the <span className={styles.gold}>Income</span> Coming From?
        </h2>
        
        <p className={styles.subtitle}>
          Look — don't ask too many questions. That's the whole bit.
        </p>

        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            {/* Puedes agregar imagen opcional aquí */}
            {/* <Image src="/assets/step-1.png" alt="Step 1" width={100} height={100} /> */}
            <h3 className={styles.stepTitle}>Someone Trades $PAYDAY</h3>
            <p className={styles.stepText}>
              Every time someone buys or sells $PAYDAY, a slice of the trade gets 
              stuck on the side and sent back to people holding the bag.
            </p>
          </div>

          <div className={styles.arrow}>→</div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            {/* <Image src="/assets/step-2.png" alt="Step 2" width={100} height={100} /> */}
            <h3 className={styles.stepTitle}>It Converts to ETH</h3>
            <p className={styles.stepText}>
              That slice automatically converts to ETH. No manual swapping, 
              no extra steps. Just pure Ethereum accumulating.
            </p>
          </div>

          <div className={styles.arrow}>→</div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            {/* <Image src="/assets/step-3.png" alt="Step 3" width={100} height={100} /> */}
            <h3 className={styles.stepTitle}>You Claim When Ready</h3>
            <p className={styles.stepText}>
              Your reflections stack up. Claim whenever you want. 
              No lockup, no staking, no weird permits. Just ETH.
            </p>
          </div>
        </div>

        <div className={styles.features}>
          <div className={styles.feature}>
            {/* Opción 1: Emoji (default) */}
            <div className={styles.featureIcon}>🔓</div>
            {/* Opción 2: Imagen personalizada */}
            {/* <Image src="/assets/icon-lockup.png" alt="No Lockup" width={60} height={60} /> */}
            <h4>No Lockup</h4>
            <p>Hold the coin, claim anytime</p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>⛽</div>
            {/* <Image src="/assets/icon-gas.png" alt="Gas Saver" width={60} height={60} /> */}
            <div className={styles.featureBadge}>GAS SAVER</div>
            <h4>Reflections Auto-Stack</h4>
            <p>No need to claim every second</p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>💎</div>
            {/* <Image src="/assets/icon-diamond.png" alt="Diamond Hands" width={60} height={60} /> */}
            <h4>Diamond Hands Win</h4>
            <p>More holding = bigger slice forever</p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>🦇</div>
            {/* <Image src="/assets/icon-ultrasound.png" alt="Ultra Sound" width={60} height={60} /> */}
            <h4>Ultra Sound ETH</h4>
            <p>Earn deflationary Ethereum</p>
          </div>
        </div>

        <div className={styles.meowthQuote}>
          <div className={styles.quoteIcon}>
            {/* Opción: Usar imagen de Meowth */}
            <Image src="/assets/meowth-quote.png" alt="Meowth" width={80} height={80} /> 
            
          </div>
          <blockquote>
            "Prepare for trouble, Vitalik said make it double.<br/>
            So now every trade makes ETH reflections bubble!"
          </blockquote>
          <cite>— Meowth, Chief Reflection Officer</cite>
        </div>
      </div>
    </section>
  )
}
