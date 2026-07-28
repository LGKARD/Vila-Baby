import type { ReactNode } from 'react'

export type BrandLogoSize = 'sm' | 'md' | 'lg'

export type BrandLogoProps = {
  href?: string
  src: string
  alt: string
  size?: BrandLogoSize
}

export type NavLinkProps = {
  href: string
  children: string
}

export type NavItem = {
  href: string
  label: string
}

export type NavBarProps = {
  logoSrc: string
  logoAlt: string
  items: NavItem[]
}

export type HeaderProps = {
  logoSrc: string
  logoAlt: string
}

export type HeroActionVariant = 'primary' | 'secondary'

export type HeroActionProps = {
  href: string
  children: ReactNode
  variant?: HeroActionVariant
}

export type HeroBadgeProps = {
  icon: ReactNode
  children: ReactNode
}

export type HeroProps = {
  title: string
  eyebrow: string
  description: string
  imageSrc: string
  imageAlt: string
}
