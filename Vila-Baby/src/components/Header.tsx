import NavBar from './NavBar'
import type { HeaderProps, NavItem } from '../types'
const navItems: NavItem[] = [
  { href: '#proposta', label: 'Proposta Pedagógica' },
  { href: '#escola', label: 'A Escola' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contato', label: 'Contato' },
]

function Header({ logoSrc, logoAlt }: HeaderProps) {
  return <NavBar logoSrc={logoSrc} logoAlt={logoAlt} items={navItems} />
}

export default Header
