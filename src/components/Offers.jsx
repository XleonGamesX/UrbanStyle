import { useEffect, useMemo, useState } from 'react'
import { products, formatPrice, discountPercent } from '../data/products.js'
import { brand } from '../data/social.js'
import { SparklesIcon, ArrowRightIcon } from './Icons.jsx'
import { SectionHead } from './SectionHead.jsx'

/** Próximo domingo a las 23:59 como fecha límite de la promoción. */
function nextDeadline() {
  const now = new Date()
  const d = new Date(now)
  d.setDate(now.getDate() + ((7 - now.getDay()) % 7))
  d.setHours(23, 59, 59, 999)
  return d > now ? d : new Date(d.getTime() + 7 * 24 * 60 * 60 * 1000)
}

function useCountdown(target) {
  const [left, setLeft] = useState(() => Math.max(0, target - Date.now()))

  useEffect(() => {
    const id = setInterval(() => setLeft(Math.max(0, target - Date.now())), 1000)
    return () => clearInterval(id)
  }, [target])

  const total = Math.floor(left / 1000)
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
    finished: left <= 0,
  }
}

const pad = (n) => String(n).padStart(2, '0')

export default function Offers() {
  const deadline = useMemo(nextDeadline, [])
  const { days, hours, minutes, seconds, finished } = useCountdown(deadline)

  const deals = products.filter((p) => p.oldPrice).slice(0, 4)

  return (
    <section className="section section--dark" id="ofertas">
      <div className="container">
        <SectionHead
          light
          eyebrow="Ofertas de la semana"
          title="Precios que no vuelven"
          text="Descuentos por tiempo limitado en una selección de productos del catálogo."
        />

        <div className="offer-banner">
          <div className="offer-banner__copy">
            <span className="offer-banner__tag">
              <SparklesIcon size={15} /> Promoción activa
            </span>
            <h3>Hasta 25% de descuento en artículos seleccionados</h3>
            <p>
              Aplica en tienda online y por WhatsApp. Stock limitado hasta agotar existencias.
            </p>
          </div>

          <div className="offer-banner__timer">
            {finished ? (
              <p className="offer-banner__done">¡Esta promoción terminó! Volvé la próxima semana.</p>
            ) : (
              <>
                <span className="offer-banner__label">Termina en</span>
                <div className="countdown">
                  {days > 0 ? (
                    <div className="countdown__unit">
                      <strong>{days}</strong>
                      <small>días</small>
                    </div>
                  ) : null}
                  <div className="countdown__unit">
                    <strong>{pad(hours)}</strong>
                    <small>hs</small>
                  </div>
                  <div className="countdown__unit">
                    <strong>{pad(minutes)}</strong>
                    <small>min</small>
                  </div>
                  <div className="countdown__unit">
                    <strong>{pad(seconds)}</strong>
                    <small>seg</small>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="grid">
          {deals.map((product) => {
            const [a, b] = product.tone
            return (
              <article key={product.id} className="card card--dark">
                <div
                  className="card__media"
                  style={{ backgroundImage: `linear-gradient(150deg, ${a} 0%, ${b} 100%)` }}
                >
                  <span className="card__discount">-{discountPercent(product)}%</span>
                  <span className="card__watermark" aria-hidden="true">
                    {product.name.charAt(0)}
                  </span>
                </div>
                <div className="card__body">
                  <span className="card__category">Oferta</span>
                  <h3 className="card__title">{product.name}</h3>
                  <div className="card__price">
                    <strong>{formatPrice(product.price)}</strong>
                    <del>{formatPrice(product.oldPrice)}</del>
                  </div>
                  <a
                    className="btn btn--primary card__cta"
                    href={`https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(
                      `¡Hola! Quiero aprovechar la oferta de "${product.name}" a ${formatPrice(
                        product.price,
                      )}.`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Aprovechar oferta <ArrowRightIcon size={16} />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
