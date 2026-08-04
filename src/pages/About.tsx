import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Layers, TrendingUp, Sparkles, Building2 } from 'lucide-react'
import { Container } from '../components/container'
import { Section, SectionHeader } from '../components/section'
import { Seo } from '../components/seo'
import { CTA } from '../components/cta'
import { useLang } from '../lib/i18n'

interface Value {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  es: { title: string; description: string }
  en: { title: string; description: string }
}

const values: Value[] = [
  {
    icon: Layers,
    es: { title: 'Modular', description: 'Cada módulo tiene un propósito y funciona por sí solo: citas, equipo, caja, ganancias y reportes — todos conectados por APIs.' },
    en: { title: 'Modular', description: 'Every module has a purpose and works on its own: appointments, staff, cashier, earnings and reports — all connected through APIs.' },
  },
  {
    icon: TrendingUp,
    es: { title: 'Escalable', description: 'Desde una barbería de un solo local hasta una franquicia de varias sucursales, la plataforma se adapta al tamaño y ritmo de cada negocio.' },
    en: { title: 'Scalable', description: 'From a single-location barbershop to a multi-branch franchise, the platform adapts to the size and pace of every business.' },
  },
  {
    icon: Building2,
    es: { title: 'Multinegocio', description: 'Cada negocio tiene su propio espacio aislado — empleados, servicios, comisiones y datos — dentro de una sola plataforma.' },
    en: { title: 'Multi-business', description: 'Every business has its own isolated space — staff, services, commissions and data — within a single platform.' },
  },
  {
    icon: Sparkles,
    es: { title: 'Belleza funcional', description: 'El software debe sentirse humano: moderno, intuitivo y útil desde el primer clic.' },
    en: { title: 'Functional beauty', description: 'Software should feel human: modern, intuitive and useful from the first click.' },
  },
]

interface TimelineItem {
  es: { phase: string; status: string; event: string }
  en: { phase: string; status: string; event: string }
}

const timeline: TimelineItem[] = [
  {
    es: { phase: 'MVP Modular', status: 'En producción', event: 'Módulos core en producción sobre Django + Angular: citas, empleados, clientes, servicios, caja, ganancias y reportes.' },
    en: { phase: 'Modular MVP', status: 'In production', event: 'Core modules in production on Django + Angular: appointments, staff, clients, services, cashier, earnings and reports.' },
  },
  {
    es: { phase: 'Earnings AI', status: 'En desarrollo', event: 'Predicción de ganancias y carga laboral con machine learning ligero, refrescada automáticamente vía Celery.' },
    en: { phase: 'Earnings AI', status: 'In development', event: 'Profit and workload forecasting with lightweight machine learning, refreshed automatically via Celery.' },
  },
  {
    es: { phase: 'Portal de clientes', status: 'Planeado', event: 'Una app PWA para que los clientes finales reserven citas, revisen servicios y construyan lealtad.' },
    en: { phase: 'Client portal', status: 'Planned', event: 'A PWA app for end customers to book appointments, browse services and build loyalty.' },
  },
  {
    es: { phase: 'Pagos', status: 'Planeado', event: 'Stripe, MercadoPago y PayPal para suscripciones y pagos dentro de la app.' },
    en: { phase: 'Payments', status: 'Planned', event: 'Stripe, MercadoPago and PayPal for subscriptions and in-app payments.' },
  },
  {
    es: { phase: 'App móvil', status: 'En diseño', event: 'Acceso completo con soporte offline para el equipo del salón.' },
    en: { phase: 'Mobile app', status: 'In design', event: 'Full access with offline support for the salon team.' },
  },
]

export function AboutPage() {
  const { lang } = useLang()

  return (
    <>
      <Seo
        title="Nosotros — AURON Suite, la plataforma de Auron Software"
        description={lang === 'es'
          ? 'AURON Suite es la plataforma que agrupa Beauty Edition, Restaurant OS, Health y Hospitality. Conoce nuestra historia, valores y roadmap. Hecho en República Dominicana.'
          : 'AURON Suite is the platform that groups Beauty Edition, Restaurant OS, Health and Hospitality. Learn about our story, values and roadmap. Made in the Dominican Republic.'}
        path="/about"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Auron Software EIRL',
          alternateName: 'AURON Suite',
          url: 'https://auronsuite.com',
          logo: 'https://auronsuite.com/favicon.svg',
          email: 'ventas@auronsuite.com',
          foundingLocation: { '@type': 'Country', name: 'Dominican Republic' },
          address: { '@type': 'PostalAddress', addressCountry: 'DO' },
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'sales',
            email: 'ventas@auronsuite.com',
            availableLanguage: ['es', 'en'],
          },
          sameAs: [],
        }}
      />
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'var(--auron-gradient-1)' }} />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[var(--auron-text)] leading-[1.05]">AURON Suite</h1>
            <p className="mt-6 text-lg md:text-xl max-w-xl text-[var(--auron-text-secondary)]" style={{ lineHeight: 1.7 }}>
              {lang === 'es'
                ? 'La plataforma que agrupa Beauty Edition, Restaurant OS, Health y Hospitality. Hecha en República Dominicana para negocios de servicio en todo el mundo.'
                : 'The platform that groups Beauty Edition, Restaurant OS, Health and Hospitality. Made in the Dominican Republic for service businesses worldwide.'}
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--auron-text)]">
              {lang === 'es' ? 'Hecho para negocios reales' : 'Built for real businesses'}
            </h2>
            <div className="mt-6 space-y-4">
              <p className="text-base text-[var(--auron-text-secondary)] leading-relaxed">
                {lang === 'es'
                  ? <>Auron Software nació con una idea simple: darle a los negocios de belleza un software tan bueno como el que usan las grandes empresas. Hoy, <strong>AURON Suite</strong> es la plataforma que agrupa <strong>Beauty Edition</strong> (en operación), <strong>Restaurant OS</strong>, <strong>Health</strong> y <strong>Hospitality</strong> (en desarrollo).</>
                  : <>Auron Software was born from a simple idea: give beauty businesses software as good as the one big companies use. Today, <strong>AURON Suite</strong> is the platform that groups <strong>Beauty Edition</strong> (live), <strong>Restaurant OS</strong>, <strong>Health</strong> and <strong>Hospitality</strong> (in development).</>}
              </p>
              <p className="text-base text-[var(--auron-text-secondary)] leading-relaxed">
                {lang === 'es'
                  ? 'Cada Edition tiene su propio espacio aislado — empleados, servicios, comisiones, caja y ganancias — todo sobre un núcleo compartido: autenticación, APIs, facturación DGII e-CF y seguridad.'
                  : 'Each Edition has its own isolated space — staff, services, commissions, cashier and earnings — all on a shared core: authentication, APIs, DGII e-CF invoicing and security.'}
              </p>
              <p className="text-base text-[var(--auron-text-secondary)] leading-relaxed">
                {lang === 'es'
                  ? 'No es un panel de reportes. Es el cerebro operativo del negocio: el equipo registra su trabajo, la caja convierte cada venta en una ganancia por período de pago, e inteligencia artificial ligera predice los ingresos futuros.'
                  : 'It is not a reporting dashboard. It is the operational brain of the business: the team logs its work, the cashier turns every sale into earnings per pay period, and lightweight AI predicts future revenue.'}
              </p>
              <p className="text-base text-[var(--auron-text-secondary)] leading-relaxed">
                {lang === 'es'
                  ? 'Construimos para el largo plazo — una Edition a la vez, siempre pensando en las personas que dirigen el negocio.'
                  : 'We build for the long term — one Edition at a time, always thinking about the people who run the business.'}
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <ValueCard key={v.es.title} value={v} index={i} />
            ))}
          </div>
        </div>
      </Section>

      <TimelineSection />
      <CTA />
    </>
  )
}

function ValueCard({ value, index }: { value: Value; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const { lang } = useLang()
  const c = value[lang]
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-5 md:p-6 rounded-2xl border border-[var(--auron-card-border)] bg-[var(--auron-card-bg)]"
    >
      <value.icon className="w-5 h-5 mb-3" style={{ color: 'var(--auron-accent-text)' }} />
      <h3 className="text-base font-semibold text-[var(--auron-text)] mb-1">{c.title}</h3>
      <p className="text-sm text-[var(--auron-text-secondary)] leading-relaxed">{c.description}</p>
    </motion.div>
  )
}

function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLang()
  const items = timeline.map((t) => t[lang])

  return (
    <Section id="timeline">
      <SectionHeader
        label="Roadmap"
        title={lang === 'es' ? 'Lo que es real' : 'What is real'}
        description={lang === 'es'
          ? 'Lo que ya está en producción, lo que estamos construyendo y lo que viene — sin humo ni espejos.'
          : 'What is already in production, what we are building and what comes next — no smoke and mirrors.'}
      />
      <div ref={ref} className="relative max-w-3xl mx-auto">
        <div className="absolute left-[19px] top-0 bottom-0 w-px" style={{ background: 'var(--auron-border)' }} />
        <div className="space-y-10">
          {items.map((item, i) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-14"
            >
              <div className="absolute left-[11px] top-1.5 w-[17px] h-[17px] rounded-full border-2 bg-[var(--auron-bg)]" style={{ borderColor: 'var(--auron-accent)' }} />
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <div className="text-sm font-semibold" style={{ color: 'var(--auron-accent-text)' }}>{item.phase}</div>
                <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full border border-[var(--auron-card-border)] bg-[var(--auron-card-bg)] text-[var(--auron-text-secondary)]">{item.status}</span>
              </div>
              <p className="text-sm text-[var(--auron-text-secondary)] leading-relaxed">{item.event}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
