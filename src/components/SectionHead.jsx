export function SectionHead({ eyebrow, title, text, align = 'center', light = false }) {
  return (
    <header className={`section-head section-head--${align} ${light ? 'section-head--light' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {text ? <p className="section-text">{text}</p> : null}
    </header>
  )
}

export default SectionHead
