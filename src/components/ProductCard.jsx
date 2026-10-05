import { categoryName, formatPrice, discountPercent } from '../data/products.js'
import { waLink } from '../data/social.js'

export default function ProductCard({ product }) {
  const [toneA, toneB] = product.tone
  const discount = discountPercent(product)

  const message = `¡Hola! Me interesa el producto "${product.name}" (${formatPrice(
    product.price,
  )}). ¿Sigue disponible?`

  return (
    <article className="card">
      <div
        className="card__media"
        style={{ backgroundImage: `linear-gradient(150deg, ${toneA} 0%, ${toneB} 100%)` }}
      >
        {product.badge ? <span className="card__badge">{product.badge}</span> : null}
        {discount > 0 ? <span className="card__discount">-{discount}%</span> : null}

        <span className="card__watermark" aria-hidden="true">
          {product.name.charAt(0)}
        </span>
      </div>

      <div className="card__body">
        <span className="card__category">{categoryName(product.category)}</span>
        <h3 className="card__title">{product.name}</h3>

        <div className="card__price">
          <strong>{formatPrice(product.price)}</strong>
          {product.oldPrice ? <del>{formatPrice(product.oldPrice)}</del> : null}
        </div>

        <a
          className="btn btn--soft card__cta"
          href={waLink(message)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Consultar por WhatsApp
        </a>
      </div>
    </article>
  )
}
