import type { NavLinkProps } from '../types'

function NavLink({ href, children }: NavLinkProps) {
  return <a className="nav-link" href={href}>{children}</a>
}

export default NavLink
