# 📁 Assets Directory Structure

Coloca todas tus imágenes en la carpeta `/public/assets/`

## 🖼️ Imágenes Requeridas

### Hero Section
```
/public/assets/meowth-hero.png          - Imagen principal de Meowth (recomendado 600x600px)
/public/assets/meowth-face.png          - Media cara de Meowth para sticky sidebar (120x120px)
/public/assets/hero-background.png      - Background opcional del hero (1920x1080px)
```

### Icons & Features (Opcionales)
```
/public/assets/icon-lockup.png          - Ícono "No Lockup"
/public/assets/icon-gas.png             - Ícono "Gas Saver"
/public/assets/icon-diamond.png         - Ícono "Diamond Hands"
/public/assets/icon-ultrasound.png      - Ícono "Ultra Sound ETH"
```

### Steps (Opcionales)
```
/public/assets/step-1.png               - Ilustración paso 1
/public/assets/step-2.png               - Ilustración paso 2
/public/assets/step-3.png               - Ilustración paso 3
```

### Other
```
/public/assets/meowth-quote.png         - Meowth para la quote section
/public/assets/logo.png                 - Logo para navbar/footer
/public/favicon.ico                     - Favicon del sitio
```

## 🎨 Recomendaciones de Diseño

### Formatos
- **PNG** con transparencia para personajes e íconos
- **JPG** para backgrounds
- **SVG** para logos e íconos simples (mejor calidad)

### Tamaños
- **Hero images**: 600x600px - 1200x1200px
- **Icons**: 60x60px - 100x100px
- **Backgrounds**: 1920x1080px (Full HD)
- **Sticky face**: 120x120px - 200x200px

### Optimización
- Comprime las imágenes antes de subir
- Usa herramientas como TinyPNG o Squoosh
- PNG-8 para íconos simples
- PNG-24 para imágenes con muchos colores
- JPG calidad 80-90% para backgrounds

## 🔄 Cómo Usar las Imágenes

### En Hero Component
```tsx
// Imagen principal de Meowth
<Image
  src="/assets/meowth-hero.png"
  alt="Meowth"
  width={600}
  height={600}
/>

// Media cara sticky
<Image
  src="/assets/meowth-face.png"
  alt="Meowth Face"
  width={120}
  height={120}
/>
```

### En Features
```tsx
// Reemplaza el emoji con imagen
<Image 
  src="/assets/icon-diamond.png" 
  alt="Diamond Hands" 
  width={60} 
  height={60} 
/>
```

### Background en CSS
```css
.hero {
  background-image: url('/assets/hero-background.png');
  background-size: cover;
  background-position: center;
}
```

## 📝 Placeholder Fallback

Si no tienes una imagen todavía, el sitio usa:
- Emojis como placeholder (🐱, 💰, 💎, etc.)
- Colores sólidos para backgrounds
- Gradientes para efectos visuales

## ✨ Tips para Meowth Images

### Meowth Hero
- Debe verse feliz/victorioso
- Rodeado de monedas doradas
- Fondo transparente
- Alta resolución
- Pose icónica de Pay Day

### Meowth Face (Sticky)
- Solo la cara/cabeza
- Expresión amigable
- Moneda dorada visible en la frente
- Fondo transparente
- Recorte circular funciona mejor

### Background
- Tono crema/beige pastel
- Pattern de monedas sutiles
- No muy saturado (debe leerse el texto encima)
- Puede incluir elementos Team Rocket

## 🚀 Next.js Image Optimization

Next.js automáticamente optimiza todas las imágenes en `/public/assets/`:
- Lazy loading
- Responsive sizes
- WebP conversion
- Blur placeholder

No necesitas hacer nada extra - solo pon las imágenes en `/public/assets/`!
