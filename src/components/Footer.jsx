import { brand, socialLinks } from '../data/social.js'
import { categories } from '../data/products.js'
import { Logo } from './Navbar.jsx'
import { socialIcons } from './Icons.jsx'

const year = new Date().getFullYear()

const columns = [
  {
    title: 'Categorías',
    items: categories.map((c) => ({ label: c.name, href: '#catalogo' })),
  },
  {
    title: 'Empresa',
    items: [
      { label: 'Sobre nosotros', href: '#nosotros' },
      { label: 'Ofertas', href: '#ofertas' },
      { label: 'Redes sociales', href: '#redes' },
      { label: 'Contacto', href: '#contacto' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p>{brand.description}</p>
          <ul className="footer__social">
            {socialLinks.map((s) => {
              const Icon = socialIcons[s.id]
              return (
                <li key={s.id}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name} title={s.name}>
                    <Icon size={18} />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        {columns.map((col) => (
          <nav key={col.title} className="footer__col" aria-label={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.items.map((item, i) => (
                <li key={`${item.label}-${i}`}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="footer__col">
          <h4>Contacto</h4>
          <ul>
            <li>
              <a href={`https://wa.me/${brand.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                {brand.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${brand.email}`}>{brand.email}</a>
            </li>
            <li>{brand.address}</li>
            <li>{brand.hours}</li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <small>
          © {year} {brand.name}. Todos los derechos reservados.
        </small>
        <small>Diseño y desarrollo · Sitio institucional</small>
      </div>
    </footer>
  )
}
