import { Link } from 'react-router-dom'
import { Container } from './container'
import { PRODUCT_CONFIG } from '@/config/products'

interface FooterLink {
  label: string
  href: string
  external?: boolean
}

const productLinks = PRODUCT_CONFIG.map((p) => ({
  label: p.label,
  href: p.href,
  external: p.external,
}))

const footerLinks: Record<string, FooterLink[]> = {
  Ediciones: productLinks,
  Servicios: [
    { label: 'Desarrollo a la medida', href: '/services#custom' },
    { label: 'Inteligencia Artificial', href: '/services#ai' },
    { label: 'Soluciones Cloud', href: '/services#cloud' },
    { label: 'Automatización', href: '/services#automation' },
  ],
  Compañía: [
    { label: 'Nosotros', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contacto', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacidad', href: '/privacy' },
    { label: 'Términos', href: '/terms' },
    { label: 'Seguridad', href: '/security' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--auron-border-light)] bg-[var(--auron-bg-secondary)]">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 group mb-4">
              <div className="w-7 h-7 rounded-lg bg-[var(--auron-accent)] flex items-center justify-center">
                <span className="text-white font-bold text-xs">A</span>
              </div>
              <span className="font-semibold text-base text-[var(--auron-text)]">AURON Suite</span>
            </Link>
            <p className="text-sm text-[var(--auron-text-secondary)] leading-relaxed max-w-xs">
              Plataformas de gestión para negocios de servicio en República Dominicana. Facturación electrónica
              DGII e-CF nativa y operación local sin depender de internet.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-[var(--auron-text)] mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="auron-focus-ring text-sm text-[var(--auron-text-secondary)] hover:text-[var(--auron-accent-text)] transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.href} className="auron-focus-ring text-sm text-[var(--auron-text-secondary)] hover:text-[var(--auron-accent-text)] transition-colors">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-[var(--auron-border-light)] text-center">
          <p className="text-xs text-[var(--auron-text-tertiary)]">
            Facturación electrónica e-CF integrada con la DGII · Operación local sin dependencia de internet
          </p>
        </div>
        <div className="mt-8 pt-8 border-t border-[var(--auron-border-light)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--auron-text-tertiary)]">&copy; {new Date().getFullYear()} Auron Software EIRL. Todos los derechos reservados.</p>
          <p className="text-xs text-[var(--auron-text-tertiary)]">Hecho en República Dominicana</p>
        </div>
      </Container>
    </footer>
  )
}
