import type { ProgramCardProps } from '../types'

function ProgramCard({ imageSrc, imageAlt, title, subtitle, description, themeClassName }: ProgramCardProps) {
  return (
    <article className={`program-card ${themeClassName}`}>
      <div className="program-card-visual">
        <img src={imageSrc} alt={imageAlt} />
      </div>

      <div className="program-card-copy">
        <h3 className="program-card-title">{title}</h3>
        <p className="program-card-subtitle">{subtitle}</p>
        <p className="program-card-description">{description}</p>
      </div>
    </article>
  )
}

export default ProgramCard