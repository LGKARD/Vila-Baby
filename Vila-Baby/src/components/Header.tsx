import NavBar from './NavBar'
import type { HeaderProps, NavItem } from '../types'
const navItems: NavItem[] = [
  { href: '#inicio', label: 'Início' },
  { href: '#escola', label: 'A Escola' },
  { href: '#bercario', label: 'Berçário' },
  { href: '#maternal', label: 'Maternal' },
  { href: '#proposta', label: 'Proposta Pedagógica' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contato', label: 'Contato' },
]

function Header({ logoSrc, logoAlt }: HeaderProps) {
  return <NavBar logoSrc={logoSrc} logoAlt={logoAlt} items={navItems} />
}

export default Header
