import { Link } from 'react-router-dom'
import { Container } from './container'

interface FooterLink {
  label: string
  href: string
  external?: boolean
}

const footerLinks: Record<string, FooterLink[]> = {
  Ediciones: [
    { label: 'Beauty Edition', href: 'https://app.auronsuite.com', external: true },
    { label: 'Restaurant Edition', href: '/products#restaurant' },
    { label: 'Hospitality Edition', href: '/products#hospitality' },
    { label: 'Medical Edition', href: '/products#health' },
    { label: 'Retail Edition', href: '/products#retail' },
  ],
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
              Software empresarial para negocios modernos. Construyendo el futuro de la tecnología de negocio.
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
        <div className="mt-16 pt-8 border-t border-[var(--auron-border-light)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--auron-text-tertiary)]">&copy; {new Date().getFullYear()} Auron Suite EIRL. Todos los derechos reservados.</p>
        </div>
      </Container>
    </footer>
  )
}
