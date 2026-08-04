import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowRight, Sparkles } from 'lucide-react'
import { Container } from '../components/container'
import { Section, SectionHeader } from '../components/section'
import { Button } from '../components/button'
import { Seo } from '../components/seo'
import { CTA } from '../components/cta'
import { useLang, type Lang } from '../lib/i18n'
import { cn } from '@/lib/utils'

interface LocalizedPlan {
  tagline: string
  price: string
  per: string
  description: string
  features: string[]
  cta: string
}

interface Plan {
  id: string
  name: string
  es: LocalizedPlan
  en: LocalizedPlan
  featured?: boolean
}

const plans: Plan[] = [
  {
    id: 'essential',
    name: 'Essential',
    es: {
      tagline: 'Para empezar',
      price: 'Por cotizar',
      per: 'plan mensual',
      description: 'Una sola sucursal, lo esencial para operar: citas, caja, clientes y facturación electrónica.',
      features: [
        'Agendamiento de citas',
        'Punto de venta (POS)',
        'Clientes e historial',
        'Facturación DGII e-CF',
        'Soporte por correo',
      ],
      cta: 'Solicitar cotización',
    },
    en: {
      tagline: 'To get started',
      price: 'Quote on request',
      per: 'monthly plan',
      description: 'A single branch, the essentials to operate: appointments, cashier, clients and e-invoicing.',
      features: [
        'Appointment scheduling',
        'Point of sale (POS)',
        'Clients and history',
        'DGII e-CF invoicing',
        'Email support',
      ],
      cta: 'Request a quote',
    },
  },
  {
    id: 'professional',
    name: 'Professional',
    featured: true,
    es: {
      tagline: 'Para negocios en crecimiento',
      price: 'Por cotizar',
      per: 'plan mensual',
      description: 'Varias sucursales, inventario, equipo y comisiones, con analíticas y reportes avanzados.',
      features: [
        'Todo lo de Essential',
        'Múltiples sucursales',
        'Inventario y proveedores',
        'Equipo, horarios y comisiones',
        'Reportes y analíticas avanzadas',
        'IA predictiva de ganancias',
      ],
      cta: 'Solicitar cotización',
    },
    en: {
      tagline: 'For growing businesses',
      price: 'Quote on request',
      per: 'monthly plan',
      description: 'Multiple branches, inventory, staff and commissions, with advanced analytics and reports.',
      features: [
        'Everything in Essential',
        'Multiple branches',
        'Inventory and suppliers',
        'Staff, schedules and commissions',
        'Advanced reports and analytics',
        'Predictive profit AI',
      ],
      cta: 'Request a quote',
    },
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    es: {
      tagline: 'Para cadenas y franquicias',
      price: 'A la medida',
      per: 'contrato anual',
      description: 'Despliegue dedicado, integraciones a la medida, SLA de uptime y acompañamiento continuo.',
      features: [
        'Todo lo de Professional',
        'Despliegue dedicado',
        'Integraciones a la medida',
        'SLA de uptime',
        'Gerente de cuenta',
        'Capacitación en sitio',
      ],
      cta: 'Hablar con ventas',
    },
    en: {
      tagline: 'For chains and franchises',
      price: 'Custom',
      per: 'annual contract',
      description: 'Dedicated deployment, custom integrations, uptime SLA and ongoing support.',
      features: [
        'Everything in Professional',
        'Dedicated deployment',
        'Custom integrations',
        'Uptime SLA',
        'Account manager',
        'On-site training',
      ],
      cta: 'Talk to sales',
    },
  },
]

interface Edition {
  id: string
  name: string
  status: 'live' | 'development' | 'planned'
}

const editions: Edition[] = [
  { id: 'beauty', name: 'Beauty Edition', status: 'live' },
  { id: 'restaurant', name: 'Restaurant Edition', status: 'development' },
  { id: 'hospitality', name: 'Hospitality Edition', status: 'development' },
  { id: 'health', name: 'Medical Edition', status: 'planned' },
  { id: 'retail', name: 'Retail Edition', status: 'planned' },
]

const statusLabel: Record<Edition['status'], Record<Lang, string>> = {
  live: { es: 'En operación', en: 'Live' },
  development: { es: 'En desarrollo', en: 'In development' },
  planned: { es: 'Planeada', en: 'Planned' },
}

const statusColor: Record<Edition['status'], string> = {
  live: 'var(--auron-accent)',
  development: 'var(--auron-badge-dev)',
  planned: 'var(--auron-badge-planned)',
}

export function PricingPage() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLang()
  const [edition, setEdition] = useState<Edition>(editions[0])

  const selectedEdition = edition

  const title = lang === 'es' ? 'Planes y ediciones' : 'Plans and editions'
  const intro = lang === 'es'
    ? 'Los planes aplican por edición. Elige tu negocio, mira la estructura de cada plan y te enviaremos una cotización según tu operación.'
    : 'Plans apply per edition. Choose your business, review the plan structure and we will send you a quote based on your operation.'
  const structureNote = lang === 'es'
    ? 'Cada edición usa la misma estructura de planes: Essential, Professional y Enterprise. Los precios se cotizan según tu operación.'
    : 'Every edition uses the same plan structure: Essential, Professional and Enterprise. Prices are quoted based on your operation.'

  const subjectPrefix = lang === 'es' ? 'Consulta de producto' : 'Product inquiry'

  return (
    <>
      <Seo
        title={lang === 'es' ? 'Planes — AURON Suite | Auron Software' : 'Plans — AURON Suite | Auron Software'}
        description={intro}
        path="/pricing"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'OfferCatalog',
          name: lang === 'es' ? 'Planes de AURON Suite' : 'AURON Suite plans',
          url: 'https://auronsuite.com/pricing',
          provider: { '@type': 'Organization', name: 'Auron Software EIRL', url: 'https://auronsuite.com' },
          itemListElement: [
            ...editions.map((ed) => ({
              '@type': 'Product',
              name: ed.name,
              category: ed.id,
              offers: plans.map((p) => ({
                '@type': 'Offer',
                name: p.name,
                description: p[lang].description,
                availability: ed.status === 'live' ? 'https://schema.org/InStock' : 'https://schema.org/PreOrder',
                url: 'https://auronsuite.com/pricing',
              })),
            })),
          ],
        }}
      />
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'var(--auron-gradient-1)' }} />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[var(--auron-text)] leading-[1.05]">
              {title}
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-xl text-[var(--auron-text-secondary)]" style={{ lineHeight: 1.7 }}>
              {intro}
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="mb-12">
          <div className="text-center mb-6">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--auron-accent-text)' }}>
              {lang === 'es' ? 'Elige tu edición' : 'Choose your edition'}
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {editions.map((ed) => (
              <button
                key={ed.id}
                onClick={() => setEdition(ed)}
                className={cn(
                  'auron-focus-ring cursor-pointer inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors duration-200',
                  selectedEdition.id === ed.id
                    ? 'border-[var(--auron-accent)] text-[var(--auron-text)] bg-[var(--auron-card-bg)] shadow-md'
                    : 'border-[var(--auron-border-light)] text-[var(--auron-text-secondary)] bg-[var(--auron-bg-secondary)] hover:text-[var(--auron-text)]',
                )}
                aria-pressed={selectedEdition.id === ed.id}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: statusColor[ed.status] }} />
                {ed.name}
              </button>
            ))}
          </div>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, i) => {
            const c = plan[lang]
            const ctaHref = `/contact?subject=${encodeURIComponent(`${subjectPrefix} — ${selectedEdition.name} · ${plan.name}`)}`
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn(
                  'relative rounded-2xl border bg-[var(--auron-card-bg)] p-8 flex flex-col',
                  plan.featured
                    ? 'border-[var(--auron-accent)] shadow-lg'
                    : 'border-[var(--auron-card-border)]',
                )}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full text-white" style={{ background: 'var(--auron-accent)' }}>
                    <Sparkles className="w-3 h-3" />
                    {lang === 'es' ? 'Más popular' : 'Most popular'}
                  </span>
                )}
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-semibold tracking-tight text-[var(--auron-text)]">{plan.name}</h2>
                  <span className="text-xs font-medium" style={{ color: 'var(--auron-text-tertiary)' }}>{c.tagline}</span>
                </div>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-[var(--auron-text)]">{c.price}</div>
                  <div className="text-xs" style={{ color: 'var(--auron-text-tertiary)' }}>{c.per}</div>
                </div>
                <p className="text-sm text-[var(--auron-text-secondary)] leading-relaxed mb-6">{c.description}</p>
                <ul className="space-y-2.5 mb-8">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--auron-text-secondary)]">
                      <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--auron-accent-text)' }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button variant={plan.featured ? 'primary' : 'secondary'} size="md" as="a" href={ctaHref} className="w-full">
                    {c.cta} <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>

        <p className="text-center text-sm text-[var(--auron-text-secondary)] mt-8 max-w-2xl mx-auto">
          {structureNote}
        </p>

        <div className="max-w-3xl mx-auto mt-16">
          <SectionHeader
            label={lang === 'es' ? 'Disponibilidad' : 'Availability'}
            title={lang === 'es' ? 'Estado de las ediciones' : 'Edition status'}
            description={lang === 'es'
              ? 'Cada edición se cotiza cuando su plan está listo para tu operación. Este es el estado real de cada una.'
              : 'Each edition is quoted when its plan is ready for your operation. This is the real status of each one.'}
          />
          <div className="grid sm:grid-cols-2 gap-3 mt-8">
            {editions.map((ed) => (
              <div key={ed.id} className="flex items-center justify-between gap-4 rounded-xl border border-[var(--auron-card-border)] bg-[var(--auron-card-bg)] px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: statusColor[ed.status] }} />
                  <span className="text-sm font-medium text-[var(--auron-text)]">{ed.name}</span>
                </div>
                <span className="text-xs font-semibold" style={{ color: statusColor[ed.status] }}>{statusLabel[ed.status][lang]}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTA />
    </>
  )
}
