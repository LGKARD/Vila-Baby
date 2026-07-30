import ProgramCard from './ProgramCard'
import type { ProgramsSectionProps } from '../types'

function ProgramsSection({
  title,
  schoolName,
  description,
  imageSrc,
  imageAlt,
  programsHeading,
  programsHeadingIconClassName,
  programs,
}: ProgramsSectionProps) {
  return (
    <section className="programs-section" id="escola" aria-labelledby="programs-section-title">
      <div className="programs-section-inner">
        <div className="programs-hero">
          <div className="programs-copy">
            <p className="programs-kicker">{title}</p>
            <h2 id="programs-section-title">
              <span>{schoolName}</span>
            </h2>
            <p className="programs-description">{description}</p>
            <a className="programs-button" href="#contato">
              Conheça nossa escola
            </a>
          </div>

          <div className="programs-image">
            <img src={imageSrc} alt={imageAlt} />
          </div>
        </div>

        <div className="programs-heading">
          <h3>
            {programsHeading} <i aria-hidden="true" className={programsHeadingIconClassName} />
          </h3>
        </div>

        <div className="programs-grid">
          {programs.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgramsSection