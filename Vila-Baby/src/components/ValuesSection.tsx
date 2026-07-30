import ValueCard from './ValueCard'
import type { ValuesSectionProps } from '../types'

function ValuesSection({ items }: ValuesSectionProps) {
  return (
    <section className="values-section" id="proposta" aria-labelledby="values-section-title">
      <div className="values-section-inner">
        <h2 id="values-section-title" className="sr-only">
          Cuidado que acolhe, estimula e protege.
        </h2>

        <div className="values-grid">
          {items.map((item) => (
            <ValueCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValuesSection