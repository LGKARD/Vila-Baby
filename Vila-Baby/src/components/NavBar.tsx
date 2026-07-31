import BrandLogo from './BrandLogo'
import NavLink from './NavLink'
import WhatsAppButton from './WhatsAppButton'
import type { NavBarProps } from '../types'

function NavBar({ logoSrc, logoAlt, items }: NavBarProps) {
  return (
    <header className="top-header" id="inicio">
      <BrandLogo src={logoSrc} alt={logoAlt} />

      <nav className="main-nav" aria-label="Navegação principal">
        {items.map((item) => (
          <NavLink key={item.href} href={item.href}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <WhatsAppButton href="#contato">Falar no WhatsApp</WhatsAppButton>
    </header>
  )
}

export default NavBar
