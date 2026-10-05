import { brand, waLink } from '../data/social.js'
import { ArrowRightIcon, TruckIcon, ShieldIcon, RefreshIcon, ShirtIcon, FootprintsIcon, BagIcon, PackageIcon } from './Icons.jsx'

const tiles = [
  { label: 'Ropa', note: 'Nueva temporada', Icon: ShirtIcon, tone: ['#2f3e56', '#6b8fbf'] },
  { label: 'Calzado', note: 'Hasta 30% off', Icon: FootprintsIcon, tone: ['#7c2d12', '#f59e0b'] },
  { label: 'Accesorios', note: 'Los imprescindibles', Icon: BagIcon, tone: ['#134e4a', '#2dd4bf'] },
  { label: 'General', note: 'Para tu día a día', Icon: PackageIcon, tone: ['#312e81', '#818cf8'] },
]

const stats = [
  { value: `${new Date().getFullYear() - brand.founded}+`, label: 'años de trayectoria' },
  { value: '12k', label: 'clientes felices' },
  { value: '4.9', label: 'valoración promedio' },
]

const perks = [
  { Icon: TruckIcon, label: 'Envío a todo el país' },
  { Icon: ShieldIcon, label: 'Compra 100% segura' },
  { Icon: RefreshIcon, label: 'Cambios sin cargo' },
]

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="eyebrow eyebrow--light">
            <span className="eyebrow__dot" /> Tienda multimarca · desde {brand.founded}
          </span>

          <h1 className="hero__title">
            Todo tu estilo, <span>en un solo lugar.</span>
          </h1>

          <p className="hero__lead">
            Ropa, calzado, accesorios y artículos en general. Elegí lo que te gusta, consultanos por
            WhatsApp y recibilo en tu casa.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#catalogo">
              Ver catálogo <ArrowRightIcon size={18} />
            </a>
            <a
              className="btn btn--ghost-light"
              href={waLink('¡Hola! Vengo de la web y quiero consultar por sus productos.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              Escribinos por WhatsApp
            </a>
          </div>

          <dl className="hero__stats">
            {stats.map((s) => (
              <div key={s.label}>
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__visual">
          <div className="hero__grid">
            {tiles.map(({ label, note, Icon, tone }) => (
              <a
                key={label}
                className="hero__tile"
                href="#categorias"
                style={{ backgroundImage: `linear-gradient(145deg, ${tone[0]}, ${tone[1]})` }}
              >
                <span className="hero__tile-icon">
                  <Icon size={26} />
                </span>
                <span className="hero__tile-text">
                  <strong>{label}</strong>
                  <small>{note}</small>
                </span>
              </a>
            ))}
          </div>

          <span className="hero__chip">
            <TruckIcon size={16} /> Envío gratis en compras seleccionadas
          </span>
        </div>
      </div>

      <div className="hero__perks">
        <ul className="container hero__perks-inner">
          {perks.map(({ Icon, label }) => (
            <li key={label}>
              <Icon size={18} /> {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
