import { ArrowLeft, SearchX } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../components/container'
import { Seo } from '../components/seo'
import { useLang } from '../lib/i18n'

export function NotFoundPage() {
  const { lang } = useLang()
  return (
    <>
      <Seo
        title={lang === 'es' ? 'Página no encontrada | Auron Software' : 'Page not found | Auron Software'}
        description={lang === 'es'
          ? 'La página que buscas no existe o fue movida.'
          : 'The page you are looking for does not exist or has been moved.'}
        path="/404"
        noindex
      />
      <section className="min-h-screen flex items-center" style={{ background: 'var(--auron-gradient-1)' }}>
        <Container>
          <div className="max-w-lg mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-[var(--auron-accent)]/10 flex items-center justify-center mx-auto mb-8">
              <SearchX className="w-8 h-8" style={{ color: 'var(--auron-accent-text)' }} />
            </div>
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--auron-accent-text)' }}>
              404
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--auron-text)]">
              {lang === 'es' ? 'Página no encontrada' : 'Page not found'}
            </h1>
            <p className="mt-4 text-lg text-[var(--auron-text-secondary)]" style={{ lineHeight: 1.7 }}>
              {lang === 'es'
                ? 'La página que buscas no existe o fue movida. Vuelve al inicio para seguir explorando Auron Software.'
                : 'The page you are looking for does not exist or has been moved. Go back home to keep exploring Auron Software.'}
            </p>
            <Link
              to="/"
              className="auron-focus-ring inline-flex items-center gap-2 mt-10 text-sm font-medium"
              style={{ color: 'var(--auron-accent-text)' }}
            >
              <ArrowLeft className="w-4 h-4" /> {lang === 'es' ? 'Volver al inicio' : 'Back to home'}
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
