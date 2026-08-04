import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowRight, Sparkles } from 'lucide-react'
import { Container } from '../components/container'
import { Section, SectionHeader } from '../components/section'
import { Button } from '../components/button'
import { Seo } from '../components/seo'
import { CTA } from '../components/cta'
import { useLang } from '../lib/i18n'
import { cn } from '@/lib/utils'

interface Plan {
  id: string
  name: string
  es: { tagline: string; price: string; per: string; description: string; features: string[]; cta: string }
  en: { tagline: string; price: string; per: string; description: string; features: string[]; cta: string }
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

export function PricingPage() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const { lang, t } = useLang()

  const title = lang === 'es' ? 'Planes y ediciones' : 'Plans and editions'
  const intro = lang === 'es'
    ? 'Cada negocio tiene su ritmo. Elige la edición y el plan que acompañan a la tuya, y te enviaremos una cotización según tu operación.'
    : 'Every business has its own pace. Choose the edition and plan that fit yours, and we will send you a quote based on your operation.'
  const note = lang === 'es'
    ? 'Beauty Edition ya está en operación. Restaurant y Hospitality están en desarrollo, y Health y Retail están planeadas.'
    : 'Beauty Edition is already live. Restaurant and Hospitality are in development, and Health and Retail are planned.'

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
          itemListElement: plans.map((p) => ({
            '@type': 'Offer',
            name: p.name,
            description: p[lang].description,
            category: p.id,
            url: 'https://auronsuite.com/pricing',
          })),
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
        <div ref={ref} className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, i) => {
            const c = plan[lang]
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
                  <Button variant={plan.featured ? 'primary' : 'secondary'} size="md" as="a" href="/contact?subject=Consulta%20de%20producto" className="w-full">
                    {c.cta} <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <SectionHeader
            label={lang === 'es' ? 'Disponibilidad' : 'Availability'}
            title={lang === 'es' ? 'Ediciones y estado' : 'Editions and status'}
            description={note}
          />
        </div>
      </Section>

      <CTA />
    </>
  )
}
