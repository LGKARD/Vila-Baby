import type { WhatsAppButtonProps } from '../types'

function WhatsAppButton({ href, children, className }: WhatsAppButtonProps) {
  return (
    <a className={`whatsapp-cta${className ? ` ${className}` : ''}`} href={href}>
      <i aria-hidden="true" className="fa-brands fa-whatsapp whatsapp-cta-icon" />
      {children}
    </a>
  )
}

export default WhatsAppButton
