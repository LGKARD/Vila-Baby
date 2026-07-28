import BrandLogo from './BrandLogo'
import NavLink from './NavLink'
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

      <a className="whatsapp-cta" href="#contato">
        <i aria-hidden="true" className="fa-brands fa-whatsapp whatsapp-cta-icon" />
        Falar no WhatsApp
      </a>
    </header>
  )
}

export default NavBar
