import type { BrandLogoProps } from '../types'

const sizeClassMap = {
  sm: 'brand-logo--sm',
  md: 'brand-logo--md',
  lg: 'brand-logo--lg',
} as const

function BrandLogo({ href = '#inicio', src, alt, size = 'md' }: BrandLogoProps) {
  const logo = <img className={`brand-logo ${sizeClassMap[size]}`} src={src} alt={alt} />

  if (!href) {
    return logo
  }

  return (
    <a className="brand-logo-link" href={href} aria-label="Voltar ao início">
      {logo}
    </a>
  )
}

export default BrandLogo
