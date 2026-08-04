import { Link } from 'react-router-dom'
import { Container } from './container'
import { PRODUCT_CONFIG } from '@/config/products'
import { useLang } from '@/lib/i18n'

interface FooterLink {
  key: string
  href: string
  external?: boolean
}

const productLinks = PRODUCT_CONFIG.map((p) => ({
  key: p.label,
  href: p.href,
  external: p.external,
}))

export function Footer() {
  const { t } = useLang()

  const footerLinks: Record<string, FooterLink[]> = {
    [t('footer.editions')]: productLinks,
    [t('footer.services')]: [
      { key: 'footer.custom', href: '/services#custom' },
      { key: 'footer.ai', href: '/services#ai' },
      { key: 'footer.cloud', href: '/services#cloud' },
      { key: 'footer.automation', href: '/services#automation' },
    ],
    [t('footer.company')]: [
      { key: 'footer.about', href: '/about' },
      { key: 'footer.blog', href: '/blog' },
      { key: 'footer.contact', href: '/contact' },
    ],
    [t('footer.legal')]: [
      { key: 'footer.privacy', href: '/privacy' },
      { key: 'footer.terms', href: '/terms' },
      { key: 'footer.security', href: '/security' },
    ],
  }

  const resolveLabel = (key: string) => t(key)

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
              {t('footer.tagline')}
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-[var(--auron-text)] mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.key}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="auron-focus-ring text-sm text-[var(--auron-text-secondary)] hover:text-[var(--auron-accent-text)] transition-colors"
                      >
                        {link.key.startsWith('footer.') ? resolveLabel(link.key) : link.key}
                      </a>
                    ) : (
                      <Link to={link.href} className="auron-focus-ring text-sm text-[var(--auron-text-secondary)] hover:text-[var(--auron-accent-text)] transition-colors">
                        {link.key.startsWith('footer.') ? resolveLabel(link.key) : link.key}
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
            {t('footer.footnote')}
          </p>
        </div>
        <div className="mt-8 pt-8 border-t border-[var(--auron-border-light)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--auron-text-tertiary)]">&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
          <p className="text-xs text-[var(--auron-text-tertiary)]">{t('footer.madeIn')}</p>
        </div>
      </Container>
    </footer>
  )
}
