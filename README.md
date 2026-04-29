# PAY DAY PROTOCOL 💰🐱

Meowth used Pay Day! ETH reflections hit all holders! That's right!

## 🎮 Overview

Pay Day Protocol es una aplicación Next.js 15 para el token $PAYDAY - un token de reflexión temático de Meowth en Ethereum que distribuye ETH a todos los holders.

### Features

- 🔐 **Wallet Connection** via Privy (email, social, o wallet)
- 💰 **Real-time Reflection Tracking** - ve tu ETH claimable
- 📊 **Live Stats** desde DexScreener API
- ⛓️ **Contract Integration** via Ankr RPC
- 🎨 **Meowth Pastel Theme** - cream, gold, y Pokemon vibes
- 🖼️ **Custom Images** - total flexibilidad para agregar tus imágenes
- 📌 **Sticky Meowth Face** - se queda fijo mientras haces scroll
- 📱 **Fully Responsive** - mobile-first design

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm o yarn
- Privy App ID
- Supabase Project (opcional)
- Ankr API Key
- **Tus imágenes de Meowth** (ver instrucciones abajo)

### Installation

1. **Clone and Install**
```bash
cd payday-protocol
npm install
```

2. **Environment Setup**

Copia `.env.example` a `.env.local`:
```bash
cp .env.example .env.local
```

Llena tus environment variables:
```env
NEXT_PUBLIC_PRIVY_APP_ID=your_privy_app_id
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
NEXT_PUBLIC_ANKR_API_KEY=your_ankr_key
NEXT_PUBLIC_CONTRACT_ADDRESS=0xe5e066480a0b579432d55af4080f84f33b50cd0a
NEXT_PUBLIC_CHAIN_ID=1
```

3. **Agregar Tus Imágenes** ⚠️ IMPORTANTE

Coloca tus imágenes en `/public/assets/`:

**Requeridas:**
- `meowth-hero.png` - Imagen principal de Meowth (600x600px recomendado)
- `meowth-face.png` - Media cara para sidebar sticky (120x120px)

**Opcionales:**
- `hero-background.png` - Background del hero section
- `icon-*.png` - Íconos personalizados para features
- `step-*.png` - Ilustraciones para los pasos

Ver `/public/assets/README.md` para guía completa de imágenes.

4. **Run Development Server**
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## 🖼️ Sistema de Imágenes

### Sticky Meowth Face
La cara de Meowth se queda **fija en el lado izquierdo** mientras haces scroll:
- Usa `/public/assets/meowth-face.png`
- Tamaño: 120x120px
- Fondo transparente
- Solo la cara/cabeza de Meowth

### Hero Meowth
Imagen principal del hero:
- Usa `/public/assets/meowth-hero.png`
- Tamaño: 600x600px o mayor
- Meowth feliz con monedas
- Fondo transparente

### Background Images
Puedes agregar backgrounds en cualquier sección:
```css
/* En Hero.module.css */
.hero {
  background-image: url('/assets/hero-background.png');
}

/* En HowItWorks.module.css */
.section {
  background-image: url('/assets/how-background.png');
}
```

### Íconos Personalizados
Reemplaza emojis con tus propias imágenes:

```tsx
// ANTES (emoji)
<div className={styles.featureIcon}>💎</div>

// DESPUÉS (tu imagen)
<Image 
  src="/assets/icon-diamond.png" 
  alt="Diamond Hands" 
  width={60} 
  height={60} 
/>
```

## 📦 Project Structure

```
payday-protocol/
├── public/
│   ├── assets/
│   │   ├── README.md              ← Guía de imágenes
│   │   ├── meowth-hero.png        ← AGREGA AQUÍ
│   │   ├── meowth-face.png        ← AGREGA AQUÍ
│   │   ├── hero-background.png    ← Opcional
│   │   └── icon-*.png             ← Íconos opcionales
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── globals.css            ← Colores Meowth
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── providers.tsx
│   └── components/
│       ├── Navbar.tsx             ← Nav + wallet connect
│       ├── Hero.tsx               ← Hero con sticky Meowth
│       ├── Stats.tsx              ← Stats desde APIs
│       ├── ClaimDashboard.tsx     ← Dashboard principal
│       ├── HowItWorks.tsx         ← Explainer con images
│       ├── Footer.tsx
│       └── FloatingCoins.tsx
└── README.md
```

## 🎨 Design System

### Color Palette
- **Cream**: `#F5E6D3` - Meowth's body
- **Gold**: `#FFD700` - Primary accent
- **Gold Dark**: `#DAA520` - Hover states
- **Brown**: `#8B7355` - Text
- **Black**: `#2C2416` - Primary text
- **Team Rocket Red**: `#FF6B6B` - Badges
- **ETH Purple**: `#8B7FD9` - Ethereum

### Typography
- Headings: System font (900 weight)
- Body: System font (regular)
- Monospace: Numbers/addresses

## 🔧 API Integrations

### DexScreener
Fetches market cap, price, volume
```
https://api.dexscreener.com/latest/dex/tokens/{address}
```

### Ankr RPC
Contract reads via `eth_call`:
- `totalReflected()` - 0x3732e214
- `pendingReflection(address)` - 0x61db2446
- `claimedReflection(address)` - 0x2d0af94e
- `balanceOf(address)` - 0x70a08231
- `claimReflection()` - 0x70b7b80c

### Privy
Wallet connection (email, social, Web3 wallets)

## 🎯 Componentes Clave

### Hero Component
- Sticky Meowth face (fixed on scroll)
- Main Meowth hero image
- Background image support
- Animated floating coins
- CTA buttons

### ClaimDashboard
- Claimable ETH (real-time)
- Total claimed history
- Token balance
- Claim button

### HowItWorks
- 3 pasos explicados
- Feature cards con íconos
- Meowth quote section
- Soporte para imágenes custom

## 🚢 Deployment

### Vercel (Recomendado)

1. Push a GitHub
2. Import to Vercel
3. Add environment variables
4. **¡NO OLVIDES subir tus imágenes a `/public/assets/`!**
5. Deploy

```bash
npm run build  # Test local
```

## 🐛 Troubleshooting

### "Image not found"
- Verifica que las imágenes estén en `/public/assets/`
- Nombres correctos: `meowth-hero.png`, `meowth-face.png`
- Restart dev server después de agregar imágenes

### "Privy App ID not found"
- Asegura que `.env.local` exista
- Check `NEXT_PUBLIC_PRIVY_APP_ID`
- Restart dev server

### Sticky Meowth no aparece
- Verifica `/public/assets/meowth-face.png` existe
- Check console para errores
- En mobile se esconde automáticamente

## 📚 Guías

### Agregar Más Imágenes

1. **Background en cualquier sección:**
```css
.yourSection {
  background-image: url('/assets/your-image.png');
  background-size: cover;
  background-position: center;
}
```

2. **Ícono personalizado:**
```tsx
<Image 
  src="/assets/your-icon.png" 
  alt="Description" 
  width={60} 
  height={60} 
/>
```

3. **Hero background:**
Ya está configurado en `Hero.module.css`:
```css
.hero {
  background-image: url('/assets/hero-background.png');
}
```

### Reemplazar Emojis

Busca en los componentes:
```tsx
// Busca esto:
<div className={styles.icon}>🐱</div>

// Reemplaza con:
<Image src="/assets/meowth.png" alt="Meowth" width={80} height={80} />
```

## 🎮 Pokemon Lore

Inspirado en:
- **Meowth** - Pokemon obsesionado con dinero
- **Pay Day** - Ataque que lanza monedas
- **Team Rocket** - Jesse, James, Meowth
- **"That's right!"** - Catchphrase icónico

## ⚠️ Disclaimer

Memecoin para entretenimiento. No es consejo financiero.
DYOR. No inviertas lo que no puedes perder.

## 📄 License

MIT - Haz lo que quieras con el código.

---

Built with 💰 by mysterious sources.

**"Prepare for trouble, make it double... the reflections!"** 😼
