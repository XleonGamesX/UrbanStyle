// Información de la marca y enlaces a redes sociales.
// Cambiá estos valores para apuntar a tus perfiles reales.

export const brand = {
  name: 'UrbanStyle',
  tagline: 'Ropa · Calzado · Accesorios',
  description:
    'Tienda multimarca de ropa, calzado, accesorios y artículos en general.',
  phone: '+54 9 11 5555-1234',
  whatsappNumber: '5491155551234',
  email: 'hola@urbanstyle.com',
  address: 'Av. Principal 1234, Ciudad',
  hours: 'Lun a Sáb · 10:00 a 20:00',
  founded: 2016,
}

export const whatsappBase = `https://wa.me/${brand.whatsappNumber}`

/** Devuelve un enlace de WhatsApp con el mensaje precargado. */
export function waLink(message) {
  return `${whatsappBase}?text=${encodeURIComponent(message)}`
}

export const socialLinks = [
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@urbanstyle',
    url: 'https://www.instagram.com/urbanstyle',
    blurb: 'Novedades y looks de cada semana.',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    handle: '/urbanstyle',
    url: 'https://www.facebook.com/urbanstyle',
    blurb: 'Promociones, eventos y atención al cliente.',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    handle: brand.phone,
    url: waLink(brand.description + ' ¡Hola! Quiero consultar por sus productos.'),
    blurb: 'Respuesta inmediata de lunes a sábado.',
  },
]

export const contactInfo = [
  { id: 'phone', label: 'Teléfono / WhatsApp', value: brand.phone, href: whatsappBase },
  { id: 'email', label: 'E-mail', value: brand.email, href: `mailto:${brand.email}` },
  { id: 'address', label: 'Dirección', value: brand.address, href: null },
  { id: 'hours', label: 'Horario', value: brand.hours, href: null },
]
