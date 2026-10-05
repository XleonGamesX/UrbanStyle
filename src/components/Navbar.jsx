import { useEffect, useState } from 'react'
import { brand } from '../data/social.js'
import { MenuIcon, CloseIcon, InstagramIcon, FacebookIcon, WhatsAppIcon } from './Icons.jsx'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#categorias', label: 'Categorías' },
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#ofertas', label: 'Ofertas' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
]

const socials = [
  { id: 'instagram', label: 'Instagram', Icon: InstagramIcon, url: 'https://www.instagram.com/urbanstyle' },
  { id: 'facebook', label: 'Facebook', Icon: FacebookIcon, url: 'https://www.facebook.com/urbanstyle' },
  { id: 'whatsapp', label: 'WhatsApp', Icon: WhatsAppIcon, url: 'https://wa.me/5491155551234' },
]

export function Logo({ light = false }) {
  return (
    <a className={`brand ${light ? 'brand--light' : ''}`} href="#inicio" aria-label={`${brand.name} — inicio`}>
      <span className="brand__mark" aria-hidden="true">U</span>
      <span className="brand__text">
        <strong>{brand.name}</strong>
        <small>{brand.tagline}</small>
      </span>
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Logo />

        <nav className={`nav__menu ${open ? 'is-open' : ''}`} aria-label="Navegación principal">
          <ul className="nav__links">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav__mobile-socials">
            {socials.map(({ id, label, Icon, url }) => (
              <a key={id} href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon size={18} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </nav>

        <div className="nav__actions">
          <div className="nav__socials">
            {socials.map(({ id, label, Icon, url }) => (
              <a key={id} href={url} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                <Icon size={17} />
              </a>
            ))}
          </div>

          <a
            className="btn btn--primary btn--sm nav__cta"
            href="https://wa.me/5491155551234"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar
          </a>

          <button
            className="nav__toggle"
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </div>
    </header>
  )
}
