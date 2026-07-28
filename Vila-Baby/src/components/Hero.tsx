import HeroAction from './HeroAction'
import HeroBadge from './HeroBadge'
import type { HeroProps } from '../types'

function Hero({ title, eyebrow, description, imageSrc, imageAlt }: HeroProps) {
  return (
    <main className="hero-section" aria-label="Apresentação da escola">
      <section className="hero-copy">
        <p className="hero-kicker">{eyebrow}</p>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <p className="hero-description">{description}</p>

        <div className="hero-actions">
          <HeroAction href="#contato">Falar no WhatsApp</HeroAction>
          <HeroAction href="#escola" variant="secondary">
            Saiba mais
          </HeroAction>
        </div>

        <ul className="hero-badges" aria-label="Diferenciais da escola">
          <HeroBadge icon={<i className="fa-solid fa-shield-halved" />}>
            Ambiente Seguro
          </HeroBadge>
          <HeroBadge icon={<i className="fa-solid fa-award" />}>
            Profissionais Qualificadas
          </HeroBadge>
          <HeroBadge icon={<i className="fa-solid fa-apple-whole" />}>
            Alimentação Balanceada
          </HeroBadge>
        </ul>
      </section>

      <section className="hero-visual" aria-label="Foto do bebê sorrindo">
        <img src={imageSrc} alt={imageAlt} />
      </section>
    </main>
  )
}

export default Hero
