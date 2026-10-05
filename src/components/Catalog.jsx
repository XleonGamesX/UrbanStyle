import { categories, products } from '../data/products.js'
import ProductCard from './ProductCard.jsx'
import { SectionHead } from './SectionHead.jsx'

const filters = [{ id: 'all', name: 'Todo' }, ...categories.map(({ id, name }) => ({ id, name }))]

export default function Catalog({ active, onChange }) {
  const visible = active === 'all' ? products : products.filter((p) => p.category === active)

  return (
    <section className="section section--soft" id="catalogo">
      <div className="container">
        <SectionHead
          eyebrow="Catálogo"
          title="Nuestros productos"
          text="Filtrá por categoría y consultá disponibilidad al instante por WhatsApp."
        />

        <div className="filters" role="tablist" aria-label="Filtrar por categoría">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={active === f.id}
              className={`filter-btn ${active === f.id ? 'is-active' : ''}`}
              onClick={() => onChange(f.id)}
            >
              {f.name}
            </button>
          ))}
        </div>

        <p className="catalog__count" aria-live="polite">
          {visible.length} {visible.length === 1 ? 'producto' : 'productos'}
        </p>

        <div className="grid">
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
