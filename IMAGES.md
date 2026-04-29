# 🖼️ GUÍA COMPLETA DE IMÁGENES

## 📍 Dónde va cada imagen

### 1️⃣ MEOWTH HERO (Imagen Principal)
**Archivo:** `/public/assets/meowth-hero.png`  
**Ubicación:** Hero section (derecha)  
**Tamaño recomendado:** 600x600px - 1200x1200px  
**Formato:** PNG con fondo transparente  
**Contenido:** Meowth feliz, rodeado de monedas doradas, pose victoriosa

**Dónde se usa:**
```tsx
// src/components/Hero.tsx - línea ~62
<Image
  src="/assets/meowth-hero.png"
  alt="Meowth with coins"
  width={600}
  height={600}
/>
```

### 2️⃣ MEOWTH FACE (Sticky Sidebar)
**Archivo:** `/public/assets/meowth-face.png`  
**Ubicación:** Sidebar izquierdo (FIJO en scroll)  
**Tamaño recomendado:** 120x120px - 200x200px  
**Formato:** PNG con fondo transparente  
**Contenido:** Solo la cara/cabeza de Meowth, moneda dorada visible

**Dónde se usa:**
```tsx
// src/components/Hero.tsx - línea ~18
<Image
  src="/assets/meowth-face.png"
  alt="Meowth Face"
  width={120}
  height={120}
  className={styles.meowthFace}
  priority
/>
```

**Comportamiento:**
- Se queda FIJO mientras haces scroll
- Posicionado a la izquierda
- Efecto float sutil
- Hover: escala un poco más grande

### 3️⃣ HERO BACKGROUND (Opcional)
**Archivo:** `/public/assets/hero-background.png`  
**Ubicación:** Fondo de toda la sección Hero  
**Tamaño recomendado:** 1920x1080px (Full HD)  
**Formato:** JPG (más ligero) o PNG  
**Contenido:** Pattern sutil de monedas, colores pastel crema/beige

**Dónde se configura:**
```css
/* src/components/Hero.module.css - línea ~11 */
.hero {
  background-image: url('/assets/hero-background.png');
  background-size: cover;
  background-position: center;
}
```

**Si no lo usas:**
Deja el gradiente por default (crema a beige pastel)

---

## 🎨 IMÁGENES OPCIONALES (Mejoran UX)

### 4️⃣ Íconos de Features
**Archivos:**
- `/public/assets/icon-lockup.png` - No Lockup (candado abierto)
- `/public/assets/icon-gas.png` - Gas Saver (bomba de gasolina)
- `/public/assets/icon-diamond.png` - Diamond Hands (diamante)
- `/public/assets/icon-ultrasound.png` - Ultra Sound ETH (murciélago + bocina)

**Tamaño:** 60x60px - 100x100px  
**Formato:** PNG transparente o SVG

**Cómo usarlos:**
```tsx
// src/components/HowItWorks.tsx
// Reemplaza esto:
<div className={styles.featureIcon}>💎</div>

// Con esto:
<Image src="/assets/icon-diamond.png" alt="Diamond" width={60} height={60} />
```

### 5️⃣ Steps Illustrations
**Archivos:**
- `/public/assets/step-1.png` - Someone trades
- `/public/assets/step-2.png` - Converts to ETH
- `/public/assets/step-3.png` - You claim

**Tamaño:** 100x100px  
**Formato:** PNG transparente

**Cómo usarlos:**
```tsx
// src/components/HowItWorks.tsx - dentro de cada step
<Image src="/assets/step-1.png" alt="Trade" width={100} height={100} />
```

### 6️⃣ Meowth Quote
**Archivo:** `/public/assets/meowth-quote.png`  
**Tamaño:** 80x80px  
**Contenido:** Meowth hablando/pensativo

**Cómo usarlo:**
```tsx
// src/components/HowItWorks.tsx
<Image src="/assets/meowth-quote.png" alt="Meowth" width={80} height={80} />
```

---

## 🚀 QUICK START - Mínimo Viable

Para tener el sitio funcional solo necesitas **2 imágenes**:

1. ✅ `meowth-hero.png` - Imagen principal
2. ✅ `meowth-face.png` - Cara para sticky sidebar

El resto usa emojis como fallback y funciona perfectamente.

---

## 🎯 RECOMENDACIONES DE DISEÑO

### Meowth Hero
**Debe incluir:**
- Meowth parado en dos patas
- Expresión feliz/victoriosa
- Monedas doradas alrededor (6-10 monedas)
- Moneda en la frente visible
- Bigotes negros
- Cola enroscada

**Colores:**
- Cuerpo: Crema (#F5E6D3)
- Orejas: Negro
- Monedas: Dorado (#FFD700)
- Ojos: Negros grandes

**Estilo:**
- Anime (estilo Pokemon original)
- O cartoon moderno
- O semi-realista cute

### Meowth Face
**Solo necesitas:**
- Cabeza + orejas
- Ojos grandes mirando al frente
- Moneda dorada en frente (IMPORTANTE)
- Bigotes
- Expresión amigable

**Recorte:**
Circular funciona mejor para sticky sidebar

---

## 📐 TEMPLATES & SIZES

### Hero Image (600x600px)
```
┌─────────────────┐
│                 │
│      🐱        │  ← Meowth centrado
│    💰 💰       │  ← Monedas alrededor
│  💰     💰     │
│    💰 💰       │
│                 │
└─────────────────┘
```

### Face Image (120x120px)
```
┌────────┐
│  👂👂  │  ← Orejas negras
│  ●  ●  │  ← Ojos
│   🪙    │  ← Moneda frente
│  ===   │  ← Bigotes
└────────┘
```

---

## 🛠️ HERRAMIENTAS RECOMENDADAS

### Para crear las imágenes:
- **Midjourney** - "cute meowth pokemon throwing gold coins, transparent background"
- **DALL-E** - Similar prompt
- **Stable Diffusion** - Con modelo anime
- **Photoshop** - Manual design
- **Procreate** - iPad illustration

### Para optimizar:
- **TinyPNG** - Comprimir sin perder calidad
- **Squoosh** - Google's image optimizer
- **Remove.bg** - Quitar fondos automáticamente

### Para convertir a PNG:
- **CloudConvert** - Online converter
- **Photoshop** - Save for Web
- **GIMP** - Free alternative

---

## ✨ TIPS PRO

### 1. Fondos Transparentes
```bash
# Verifica que sea PNG con alpha channel
file meowth-hero.png
# Debe decir: PNG image data, ..., with alpha
```

### 2. Optimización
```bash
# Antes de subir, optimiza con TinyPNG
# Reduce 60-80% del tamaño sin pérdida visible
```

### 3. Naming Convention
```
✅ meowth-hero.png
✅ meowth-face.png
❌ Meowth Hero.png
❌ meowth_hero.PNG
```

### 4. Fallback Strategy
Si no tienes imágenes custom:
- Hero usa emoji grande 🐱
- Face usa emoji más chico 😼
- Features usan emojis: 💎 🔓 ⛽ 🦇

---

## 🔄 ACTUALIZAR IMÁGENES

### Cambiar Meowth Hero:
1. Reemplaza `/public/assets/meowth-hero.png`
2. Hard refresh (Ctrl + Shift + R)
3. Listo

### Cambiar tamaños:
```tsx
// src/components/Hero.tsx
<Image
  src="/assets/meowth-hero.png"
  width={800}  // ← Cambia aquí
  height={800} // ← Y aquí
/>
```

### Agregar más imágenes decorativas:
```tsx
<Image
  src="/assets/coin-pile.png"
  alt="Coins"
  width={200}
  height={150}
  className={styles.decoration}
/>
```

---

## 🎨 EJEMPLOS DE PROMPTS

### Para Midjourney/DALL-E:

**Meowth Hero:**
```
cute meowth pokemon character standing upright, throwing golden coins 
in the air, happy expression, anime style, transparent background, 
high quality, gold coins floating around, victory pose
```

**Meowth Face:**
```
meowth pokemon face closeup, cute expression, gold coin on forehead 
visible, black ears, transparent background, anime style, 
simple clean design
```

**Background:**
```
subtle pattern of gold coins on cream beige background, 
pastel colors, soft texture, minimal design, 
not too busy, coins semi-transparent
```

---

## ❓ FAQ

**P: ¿Puedo usar JPG en vez de PNG?**  
R: Para Meowth sí necesitas PNG (transparencia). Para backgrounds puedes usar JPG.

**P: ¿Qué pasa si no pongo las imágenes?**  
R: El sitio usa emojis como fallback. Funciona pero se ve menos profesional.

**P: ¿Puedo usar GIFs animados?**  
R: Sí, pero pesarán más. Mejor usar PNG estático + CSS animations.

**P: ¿Tamaño máximo de archivo?**  
R: Hero: < 500KB, Face: < 100KB, Backgrounds: < 1MB

**P: ¿Funcionan SVG?**  
R: Sí, pero Next.js Image requiere width/height. Mejor para íconos simples.

---

💡 **PROTIP:** Empieza con las 2 imágenes esenciales (hero + face), 
luego agrega las opcionales una por una para mejorar progresivamente.
