import { brand } from '../data/social.js'
import { SectionHead } from './SectionHead.jsx'
import { UsersIcon, AwardIcon, PackageIcon, TruckIcon, CheckIcon } from './Icons.jsx'

const stats = [
  { Icon: UsersIcon, value: '12.000+', label: 'clientes atendidos' },
  { Icon: PackageIcon, value: '1.500+', label: 'productos publicados' },
  { Icon: TruckIcon, value: '98%', label: 'entregas a tiempo' },
  { Icon: AwardIcon, value: `${new Date().getFullYear() - brand.founded}`, label: 'años de experiencia' },
]

const bullets = [
  'Selección propia de marcas nacionales e importadas.',
  'Atención personalizada por WhatsApp, sin demoras.',
  'Cambios y devoluciones sin cargo dentro de los 30 días.',
  'Envíos a todo el país con seguimiento.',
]

export default function About() {
  return (
    <section className="section" id="nosotros">
      <div className="container about">
        <div className="about__media">
          <div className="about__panel about__panel--main">
            <strong>Desde {brand.founded}</strong>
            <span>Vendiendo estilo y confianza</span>
          </div>
          <div className="about__panel about__panel--secondary">
            <em>4.9</em>
            <span>
              <b>★★★★★</b>
              Valoración promedio de nuestros clientes
            </span>
          </div>
        </div>

        <div className="about__copy">
          <SectionHead
            align="left"
            eyebrow="Sobre nosotros"
            title={`Somos ${brand.name}, tu tienda de confianza`}
          />

          <p>
            Nacimos como un local de barrio y hoy somos un equipo que trabaja todos los días para
            acercarte ropa, calzado, accesorios y artículos en general al mejor precio. Curamos cada
            producto a mano: si está en el catálogo, es porque lo probaríamos nosotros.
          </p>

          <ul className="about__list">
            {bullets.map((b) => (
              <li key={b}>
                <span className="about__check">
                  <CheckIcon size={14} />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <dl className="about__stats">
            {stats.map(({ Icon, value, label }) => (
              <div key={label}>
                <dt>
                  <Icon size={18} /> <strong>{value}</strong>
                </dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
