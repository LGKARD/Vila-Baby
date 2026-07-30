import type { ValueCardProps } from '../types'

function ValueCard({ iconClassName, title, description, accentClassName }: ValueCardProps) {
  return (
    <article className={`value-card ${accentClassName}`}>
      <span aria-hidden="true" className="value-card-icon">
        <i className={iconClassName} />
      </span>

      <h3 className="value-card-title">{title}</h3>
      <p className="value-card-description">{description}</p>
    </article>
  )
}

export default ValueCard