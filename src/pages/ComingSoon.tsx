import { ArrowLeft, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../components/container'
import { Seo } from '../components/seo'

export function ComingSoonPage() {
  return (
    <>
      <Seo title="Próximamente — AURON Suite" description="Esta Edition está en camino." path="/coming-soon" noindex />
      <section className="min-h-screen flex items-center" style={{ background: 'var(--auron-gradient-1)' }}>
        <Container>
          <div className="max-w-lg mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-[var(--auron-accent)]/10 flex items-center justify-center mx-auto mb-8">
              <Clock className="w-8 h-8" style={{ color: 'var(--auron-accent-text)' }} />
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--auron-text)]">
              En construcción
            </h1>
            <p className="mt-4 text-lg text-[var(--auron-text-secondary)]" style={{ lineHeight: 1.7 }}>
              Esta Edition de AURON Suite está en desarrollo. Pronto estará disponible.
            </p>
            <Link
              to="/products"
              className="auron-focus-ring inline-flex items-center gap-2 mt-10 text-sm font-medium"
              style={{ color: 'var(--auron-accent-text)' }}
            >
              <ArrowLeft className="w-4 h-4" /> Ver todas las Editions
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
