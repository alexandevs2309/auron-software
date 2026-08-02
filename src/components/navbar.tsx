import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Container } from './container'
import { Button } from './button'
import { useTheme } from '@/lib/theme'

const links = [
  { label: 'Productos', href: '/products' },
  { label: 'Servicios', href: '/services' },
  { label: 'Nosotros', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  const themeButton = (
    <button
      onClick={toggleTheme}
      className="auron-focus-ring cursor-pointer p-2.5 rounded-xl text-[var(--auron-text-secondary)] hover:text-[var(--auron-text)] hover:bg-[var(--auron-bg-secondary)] transition-colors duration-200"
      aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="block"
      >
        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </motion.span>
    </button>
  )

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[var(--auron-nav-bg)] backdrop-blur-xl border-b border-[var(--auron-border-light)] shadow-sm'
          : 'bg-[var(--auron-nav-bg)] backdrop-blur-xl border-b border-transparent',
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-[var(--auron-accent)] flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-semibold text-lg tracking-tight text-[var(--auron-text)]">AURON Suite</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'auron-focus-ring cursor-pointer px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
                  pathname === link.href
                    ? 'text-[var(--auron-accent-text)] bg-[var(--auron-accent)]/5'
                    : 'text-[var(--auron-text-secondary)] hover:text-[var(--auron-text)] hover:bg-[var(--auron-bg-secondary)]',
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {themeButton}
            <Button variant="secondary" size="sm" as="a" href="/products">
              Editions
            </Button>
            <Button variant="primary" size="sm" as="a" href="https://app.auronsuite.com" target="_blank" rel="noopener noreferrer">Iniciar sesión</Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="auron-focus-ring cursor-pointer md:hidden p-2 rounded-lg text-[var(--auron-text-secondary)] hover:text-[var(--auron-text)]"
            aria-label="Abrir o cerrar menú"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden border-t border-[var(--auron-border-light)] bg-[var(--auron-bg)] overflow-hidden"
          >
            <Container className="py-6">
              <div className="flex flex-col gap-1">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      'auron-focus-ring cursor-pointer px-4 py-3 text-sm font-medium rounded-lg transition-colors',
                      pathname === link.href
                        ? 'text-[var(--auron-accent-text)] bg-[var(--auron-accent)]/5'
                        : 'text-[var(--auron-text-secondary)] hover:text-[var(--auron-text)]',
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-[var(--auron-border-light)]">
                {themeButton}
                <Button variant="secondary" size="md" as="a" href="/products" className="w-full">
                  Editions
                </Button>
                <Button variant="primary" size="md" as="a" href="https://app.auronsuite.com" target="_blank" rel="noopener noreferrer" className="w-full">Iniciar sesión</Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
