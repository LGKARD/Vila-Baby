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

export type WhatsAppButtonProps = {
  href: string
  children: ReactNode
  className?: string
}

export type CtaSectionProps = {
  title: string
  description: string
  whatsappHref: string
  whatsappLabel: string
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

export type ValueCard = {
  iconClassName: string
  title: string
  description: string
  accentClassName: string
}

export type ValuesSectionProps = {
  title?: string
  items: ValueCard[]
}

export type ValueCardProps = ValueCard

export type ProgramCardData = {
  imageSrc: string
  imageAlt: string
  title: string
  subtitle: string
  description: string
  themeClassName: string
}

export type ProgramsSectionProps = {
  title: string
  schoolName: string
  description: string
  imageSrc: string
  imageAlt: string
  programsHeading: string
  programsHeadingIconClassName: string
  programs: ProgramCardData[]
}

export type ProgramCardProps = ProgramCardData

export type GalleryImage = {
  src: string
  alt: string
}

export type GallerySectionProps = {
  eyebrow?: string
  title: string
  images: GalleryImage[]
}

export type FooterLinkItem = {
  href: string
  label: string
}

export type FooterColumn = {
  title: string
  links: FooterLinkItem[]
}

export type FooterContactItem = {
  iconClassName: string
  lines: string[]
}

export type FooterSocialLink = {
  href: string
  label: string
  iconClassName: string
  className?: string
}

export type FooterProps = {
  logoSrc: string
  logoAlt: string
  columns: FooterColumn[]
  contactTitle: string
  contactItems: FooterContactItem[]
  socialLinks: FooterSocialLink[]
  copyrightText: string
}
