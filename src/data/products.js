// Catálogo de ejemplo. Reemplazá estos datos por tus productos reales.

export const categories = [
  {
    id: 'ropa',
    name: 'Ropa',
    icon: 'shirt',
    headline: 'Ropa que te queda',
    description: 'Remeras, camisas, pantalones, abrigos y vestidos.',
    tone: ['#2f3e56', '#6b8fbf'],
  },
  {
    id: 'calzado',
    name: 'Calzado',
    icon: 'footprints',
    headline: 'Paso a paso',
    description: 'Zapatillas, botines, mocasines y sandalias.',
    tone: ['#7c2d12', '#f59e0b'],
  },
  {
    id: 'accesorios',
    name: 'Accesorios',
    icon: 'bag',
    headline: 'El detalle que falta',
    description: 'Mochilas, relojes, cinturones, gorras y más.',
    tone: ['#134e4a', '#2dd4bf'],
  },
  {
    id: 'general',
    name: 'General',
    icon: 'package',
    headline: 'Para el día a día',
    description: 'Artículos del hogar, cuidado personal y tecnología.',
    tone: ['#312e81', '#818cf8'],
  },
]

export const products = [
  // ── Ropa ──────────────────────────────────────────────
  { id: 'p01', name: 'Camisa Oxford Clásica', category: 'ropa', price: 34.99, tone: ['#2f3e56', '#5b7ea6'], badge: 'Nuevo' },
  { id: 'p02', name: 'Jean Recto Premium', category: 'ropa', price: 49.9, tone: ['#1f2937', '#4b5563'] },
  { id: 'p03', name: 'Buzo Oversize Urban', category: 'ropa', price: 42.5, oldPrice: 59.9, tone: ['#7c2d12', '#ea580c'] },
  { id: 'p04', name: 'Vestido Midi Floral', category: 'ropa', price: 38.9, tone: ['#831843', '#f472b6'] },

  // ── Calzado ───────────────────────────────────────────
  { id: 'p05', name: 'Sneakers Retro Runner', category: 'calzado', price: 79.9, oldPrice: 99.9, tone: ['#111827', '#6b7280'], badge: 'Top ventas' },
  { id: 'p06', name: 'Botín Chelsea de Cuero', category: 'calzado', price: 94.5, tone: ['#3f2d16', '#a1703f'] },
  { id: 'p07', name: 'Sandalia Sport Velcro', category: 'calzado', price: 32.9, tone: ['#0c4a6e', '#38bdf8'] },
  { id: 'p08', name: 'Mocasín Clásico', category: 'calzado', price: 68, tone: ['#1c1917', '#78716c'] },

  // ── Accesorios ────────────────────────────────────────
  { id: 'p09', name: 'Mochila Urbana 20L', category: 'accesorios', price: 45.9, tone: ['#134e4a', '#2dd4bf'] },
  { id: 'p10', name: 'Reloj Minimal Acero', category: 'accesorios', price: 59, oldPrice: 74, tone: ['#111827', '#9ca3af'] },
  { id: 'p11', name: 'Cinturón de Cuero', category: 'accesorios', price: 24.9, tone: ['#451a03', '#b45309'] },
  { id: 'p12', name: 'Gorra Trucker Bordada', category: 'accesorios', price: 19.9, tone: ['#312e81', '#818cf8'], badge: 'Nuevo' },

  // ── General ───────────────────────────────────────────
  { id: 'p13', name: 'Set de Botellas Térmicas', category: 'general', price: 36.5, tone: ['#064e3b', '#34d399'] },
  { id: 'p14', name: 'Lámpara LED de Escritorio', category: 'general', price: 41.9, tone: ['#1e1b4b', '#8b5cf6'] },
  { id: 'p15', name: 'Kit de Cuidado Personal', category: 'general', price: 28, oldPrice: 35, tone: ['#4a044e', '#e879f9'] },
  { id: 'p16', name: 'Organizador Multiusos', category: 'general', price: 15.9, tone: ['#334155', '#94a3b8'] },
]

export const categoryName = (id) =>
  categories.find((c) => c.id === id)?.name ?? 'General'

export const formatPrice = (value) => `$${value.toFixed(2)}`

export const discountPercent = (product) =>
  product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0
