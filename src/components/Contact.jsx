import { useState } from 'react'
import { brand, contactInfo, waLink } from '../data/social.js'
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, ArrowRightIcon } from './Icons.jsx'
import { SocialIcons } from './SocialLinks.jsx'
import { SectionHead } from './SectionHead.jsx'

const icons = { phone: PhoneIcon, email: MailIcon, address: MapPinIcon, hours: ClockIcon }

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    setErrors((err) => ({ ...err, [field]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (form.name.trim().length < 2) next.name = 'Ingresá tu nombre.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      next.email = 'Ingresá un e-mail válido.'
    if (form.message.trim().length < 10) next.message = 'Contanos un poco más (mínimo 10 caracteres).'
    return next
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return

    const text = `Hola, soy ${form.name.trim()} (${form.email.trim()}).\n\n${form.message.trim()}`
    window.open(waLink(text), '_blank', 'noopener,noreferrer')
    setSent(true)
    setForm(initialForm)
  }

  return (
    <section className="section section--soft" id="contacto">
      <div className="container">
        <SectionHead
          eyebrow="Contacto"
          title="Hablemos"
          text="Completá el formulario o escribinos directo. Respondemos de lunes a sábado."
        />

        <div className="contact">
          <div className="contact__info">
            <h3>Datos de la tienda</h3>

            <ul className="contact__list">
              {contactInfo.map(({ id, label, value, href }) => {
                const Icon = icons[id]
                const content = (
                  <>
                    <span className="contact__icon">
                      <Icon size={18} />
                    </span>
                    <span>
                      <small>{label}</small>
                      <strong>{value}</strong>
                    </span>
                  </>
                )
                return (
                  <li key={id}>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                        {content}
                      </a>
                    ) : (
                      <div>{content}</div>
                    )}
                  </li>
                )
              })}
            </ul>

            <div className="contact__social">
              <span>También encontranos en</span>
              <SocialIcons />
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <h3>Escribinos</h3>

            <div className="field">
              <label htmlFor="name">Nombre y apellido</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="María González"
                value={form.name}
                onChange={update('name')}
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name ? <em className="field__error">{errors.name}</em> : null}
            </div>

            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="maria@correo.com"
                value={form.email}
                onChange={update('email')}
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email ? <em className="field__error">{errors.email}</em> : null}
            </div>

            <div className="field">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Hola, quiero consultar por talle y disponibilidad…"
                value={form.message}
                onChange={update('message')}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message ? <em className="field__error">{errors.message}</em> : null}
            </div>

            <button className="btn btn--primary btn--block" type="submit">
              Enviar por WhatsApp <ArrowRightIcon size={17} />
            </button>

            <p className="contact__note">
              Se abrirá WhatsApp con tu mensaje listo para enviar a {brand.phone}.
            </p>

            {sent ? (
              <p className="contact__success" role="status">
                ¡Listo! Revisá la pestaña de WhatsApp que se abrió para confirmar el envío.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}
