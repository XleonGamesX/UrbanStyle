# UrbanStyle · Sitio empresarial

Landing page profesional para la venta de **ropa, calzado, accesorios y artículos en general**,
con redireccionamiento a **WhatsApp, Facebook e Instagram**.

Hecho con **React + Vite**. Sin dependencias adicionales de UI: todos los iconos son SVG inline.

---

## Arrancar

```bash
npm install
npm run dev      # entorno de desarrollo  → http://localhost:5173
npm run build    # generación de producción en ./dist
npm run preview  # sirve el build          → http://localhost:4173
```

## Estructura

```
src/
├── main.jsx               Punto de entrada
├── App.jsx                Composición de secciones
├── index.css              Tokens de diseño + todos los estilos
├── data/
│   ├── social.js          Marca, contacto y enlaces a redes  ← editar acá
│   └── products.js        Categorías y productos             ← editar acá
└── components/
    ├── Navbar.jsx         Navegación fija + redes
    ├── Hero.jsx           Portada con CTA
    ├── CategoryGrid.jsx   Ropa · Calzado · Accesorios · General
    ├── Catalog.jsx        Grid filtrable
    ├── ProductCard.jsx    Tarjeta de producto
    ├── Offers.jsx         Ofertas con contador regresivo
    ├── About.jsx          Sobre nosotros
    ├── SocialLinks.jsx    Redes destacadas + botón flotante
    ├── Contact.jsx        Formulario que envía por WhatsApp
    ├── Footer.jsx
    ├── SectionHead.jsx    Encabezado reutilizable de sección
    └── Icons.jsx          Todos los iconos SVG
```

## Personalización

### 1. Datos de la marca y redes sociales → `src/data/social.js`

```js
export const brand = {
  name: 'UrbanStyle',
  phone: '+54 9 11 5555-1234',
  whatsappNumber: '5491155551234',   // solo números, con código de país
  email: 'hola@urbanstyle.com',
  address: 'Av. Principal 1234, Ciudad',
  hours: 'Lun a Sáb · 10:00 a 20:00',
  founded: 2016,
}

export const socialLinks = [
  { id: 'instagram', url: 'https://www.instagram.com/tu-usuario', ... },
  { id: 'facebook',  url: 'https://www.facebook.com/tu-pagina',   ... },
  { id: 'whatsapp',  url: waLink('...'),                          ... },
]
```

También hay un enlace directo a WhatsApp en `src/components/Navbar.jsx` (clase `.nav__cta`).

### 2. Productos → `src/data/products.js`

```js
{
  id: 'p01',
  name: 'Camisa Oxford Clásica',
  category: 'ropa',                 // ropa | calzado | accesorios | general
  price: 34.99,
  oldPrice: 49.99,                  // opcional → muestra badge de descuento
  badge: 'Nuevo',                   // opcional
  tone: ['#2f3e56', '#5b7ea6'],     // degradado de la imagen
}
```

### 3. Colores y tipografía → `src/index.css`

Buscá el bloque `:root`. Las variables principales:

| Variable       | Uso                          |
| -------------- | ---------------------------- |
| `--accent`     | Color de acento (botones)    |
| `--accent-text`| Acento sobre fondo claro     |
| `--ink`        | Fondo oscuro (hero, footer)  |
| `--bg-soft`    | Fondo de secciones alternas  |
| `--wa`         | Verde de WhatsApp            |

### 4. Imágenes reales

Hoy cada producto muestra un degradado con la inicial. Para usar fotos, reemplazá el bloque
`.card__media` en `src/components/ProductCard.jsx` por un `<img>`:

```jsx
<div className="card__media">
  <img src={product.image} alt={product.name} loading="lazy" />
</div>
```

y agregá la carpeta en `public/img/`.

## Publicar

- **Netlify / Vercel**: carpeta de build `dist`, comando `npm run build`.
- **GitHub Pages**: el `base: './'` de `vite.config.js` ya permite publicar en
  `https://usuario.github.io/repositorio/`.
- **Directo desde el disco**: `npm run build` y abrir `dist/index.html`.
