import { socialLinks, waLink, brand } from '../data/social.js'
import { socialIcons, ArrowRightIcon, InstagramIcon, FacebookIcon, WhatsAppIcon } from './Icons.jsx'
import { SectionHead } from './SectionHead.jsx'

/** Bloque de redes destacadas: cada tarjeta abre el perfil en una pestaña nueva. */
export default function SocialLinks() {
  return (
    <section className="section" id="redes">
      <div className="container">
        <SectionHead
          eyebrow="Redes sociales"
          title="Seguinos donde estés"
          text="Publicamos novedades, promociones y looks de la semana. Tocá una tarjeta para visitar nuestro perfil."
        />

        <div className="social-grid">
          {socialLinks.map((s) => {
            const Icon = socialIcons[s.id]
            return (
              <a
                key={s.id}
                className={`social-card social-card--${s.id}`}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar ${s.name} de ${brand.name}`}
              >
                <span className="social-card__icon">
                  <Icon size={26} />
                </span>
                <strong>{s.name}</strong>
                <span className="social-card__handle">{s.handle}</span>
                <small>{s.blurb}</small>
                <span className="social-card__cta">
                  Ir al perfil <ArrowRightIcon size={15} />
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/** Botón flotante de WhatsApp visible en toda la página. */
export function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={waLink('¡Hola! Vengo de la web de ' + brand.name + ' y quiero hacer una consulta.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      title="WhatsApp"
    >
      <WhatsAppIcon size={26} />
      <span className="wa-float__label">¿Consultas?</span>
    </a>
  )
}

/** fila compacta de íconos sociales, reutilizable en varias secciones. */
export function SocialIcons({ className = '' }) {
  const map = { instagram: InstagramIcon, facebook: FacebookIcon, whatsapp: WhatsAppIcon }
  return (
    <ul className={`social-icons ${className}`}>
      {socialLinks.map((s) => {
        const Icon = map[s.id]
        return (
          <li key={s.id}>
            <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name} title={s.name}>
              <Icon size={18} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
