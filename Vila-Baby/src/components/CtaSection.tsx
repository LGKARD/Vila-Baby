import WhatsAppButton from './WhatsAppButton'
import type { CtaSectionProps } from '../types'

function CtaSection({ title, description, whatsappHref, whatsappLabel }: CtaSectionProps) {
  return (
    <section className="cta-section" aria-labelledby="cta-section-title">
      <div className="cta-section-inner">
        <div className="cta-copy">
          <h2 id="cta-section-title">{title}</h2>
          <p className="cta-description">{description}</p>
        </div>

        <WhatsAppButton href={whatsappHref} className="cta-whatsapp-cta">
          {whatsappLabel}
        </WhatsAppButton>
      </div>
    </section>
  )
}

export default CtaSection
