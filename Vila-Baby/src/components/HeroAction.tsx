import type { HeroActionProps } from '../types'

function HeroAction({ href, children, variant = 'primary' }: HeroActionProps) {
  if (variant === 'secondary') {
    return (
      <a className="hero-secondary-cta" href={href}>
        {children}
      </a>
    )
  }

  return (
    <a className="whatsapp-cta hero-primary-cta" href={href}>
      <i aria-hidden="true" className="fa-brands fa-whatsapp whatsapp-cta-icon" />
      {children}
    </a>
  )
}

export default HeroAction
