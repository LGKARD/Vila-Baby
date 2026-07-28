import type { HeroBadgeProps } from '../types'

function HeroBadge({ icon, children }: HeroBadgeProps) {
  return (
    <li className="hero-badge">
      <span aria-hidden="true" className="hero-badge-icon">
        {icon}
      </span>
      {children}
    </li>
  )
}

export default HeroBadge
