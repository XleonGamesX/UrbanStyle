import { categories, products } from '../data/products.js'
import { categoryIcons, ArrowRightIcon } from './Icons.jsx'
import { SectionHead } from './SectionHead.jsx'

export default function CategoryGrid({ onSelect }) {
  return (
    <section className="section" id="categorias">
      <div className="container">
        <SectionHead
          eyebrow="Categorías"
          title="Encontrá lo que buscás"
          text="Cuatro mundos, una misma tienda. Tocá una categoría para filtrar el catálogo."
        />

        <div className="cat-grid">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat.icon]
            const count = products.filter((p) => p.category === cat.id).length

            return (
              <button
                key={cat.id}
                type="button"
                className="cat-card"
                onClick={() => onSelect(cat.id)}
                aria-label={`Ver ${cat.name} en el catálogo`}
              >
                <span
                  className="cat-card__icon"
                  style={{ backgroundImage: `linear-gradient(145deg, ${cat.tone[0]}, ${cat.tone[1]})` }}
                >
                  <Icon size={26} />
                </span>

                <span className="cat-card__body">
                  <strong>{cat.name}</strong>
                  <small>{cat.description}</small>
                </span>

                <span className="cat-card__foot">
                  <em>{count} productos</em>
                  <span className="cat-card__arrow">
                    <ArrowRightIcon size={17} />
                  </span>
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
