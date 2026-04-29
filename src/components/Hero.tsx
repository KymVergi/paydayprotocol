'use client'

import Image from 'next/image'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero}>
      {/* Sticky Meowth - PEGADO ABAJO */}
      <div className={styles.stickyMeowth}>
        <Image
          src="/assets/meowth-bottom.png"
          alt="Meowth"
          width={400}
          height={400}
          className={styles.meowthFace}
          priority
        />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>MEOWTH'S MASTERPLAN</span>
          </div>
          
          <h1 className={styles.title}>
            PAY DAY<br/>
            <span className={styles.subtitle}>PROTOCOL</span>
          </h1>
          
          <p className={styles.tagline}>
            Meowth used Pay Day!<br/>
            <span className={styles.highlight}>ETH reflections</span> hit all holders!
          </p>
          
          <p className={styles.description}>
            Every trade triggers Pay Day. Coins fly everywhere. <br/>
            You hold $PAYDAY, you earn ETH. <br/>
            <strong>That's right! 😼</strong>
          </p>
          
          <div className={styles.ctas}>
            <a href="#claim" className={styles.primaryBtn}>
              <span>Claim $PAYDAY Now</span>
              <span className={styles.arrow}>→</span>
            </a>
            
            <a 
              href={`https://etherscan.io/token/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              View Contract
            </a>
          </div>
          
          <div className={styles.catchphrase}>
            "Prepare for trouble, make it double... <br/>
            <span className={styles.gold}>the reflections!</span>"
          </div>
        </div>
        
        {/* Main Meowth Image */}
        <div className={styles.meowthContainer}>
          <Image
            src="/assets/meowth-hero.png"
            alt="Meowth with coins"
            width={600}
            height={600}
            className={styles.meowthHero}
            priority
          />
          
          {/* Floating coins decorativos */}
          <div className={styles.coins}>
            <span className={styles.coinFloat} style={{animationDelay: '0s'}}>💰</span>
            <span className={styles.coinFloat} style={{animationDelay: '0.5s'}}>💰</span>
            <span className={styles.coinFloat} style={{animationDelay: '1s'}}>💰</span>
            <span className={styles.coinFloat} style={{animationDelay: '1.5s'}}>💰</span>
            <span className={styles.coinFloat} style={{animationDelay: '2s'}}>💰</span>
          </div>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <span>↓</span>
        <span>See Your Reflections</span>
      </div>
    </section>
  )
}