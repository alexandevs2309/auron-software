import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Building2, UtensilsCrossed, Hotel, HeartPulse, ShoppingBag } from 'lucide-react'
import { Container } from '../components/container'
import { Section, SectionHeader } from '../components/section'
import { Button } from '../components/button'
import { ProductMockup } from '../components/product-mockup'
import { Seo } from '../components/seo'
import { CTA } from '../components/cta'
import { getProductConfig, getProductHref, isProductExternal } from '@/config/products'
import { useLang } from '../lib/i18n'

interface Localized {
  tagline: string
  description: string
  features: string[]
  mockupEyebrow: string
}

interface Product {
  id: string
  icon: React.ComponentType<{ className?: string }>
  name: string
  es: Localized
  en: Localized
  gradient: string
}

const products: Product[] = [
  {
    id: 'beauty',
    icon: Building2,
    name: 'Beauty Edition',
    es: {
      tagline: 'Salones, barberías y spas',
      description: 'Plataforma completa de gestión para salones de belleza, barberías, spas y centros de bienestar. Agendamiento, inventario, equipo y cumplimiento fiscal DGII e-CF nativo.',
      features: [
        'Agendamiento de citas con sincronización de calendario',
        'Perfiles de clientes con historial y preferencias',
        'Gestión de inventario y productos',
        'Horarios de personal y comisiones',
        'Registro de ventas (POS)',
        'Analíticas de ventas y reportes',
      ],
      mockupEyebrow: 'Panel de operaciones',
    },
    en: {
      tagline: 'Salons, barbershops and spas',
      description: 'Complete management platform for beauty salons, barbershops, spas and wellness centers. Scheduling, inventory, team and native DGII e-CF fiscal compliance.',
      features: [
        'Appointment scheduling with calendar sync',
        'Customer profiles with history and preferences',
        'Inventory and product management',
        'Staff schedules and commissions',
        'Sales register (POS)',
        'Sales analytics and reports',
      ],
      mockupEyebrow: 'Operations dashboard',
    },
    gradient: 'linear-gradient(135deg, #1A56DB, #123F9E)',
  },
  {
    id: 'restaurant',
    icon: UtensilsCrossed,
    name: 'Restaurant Edition',
    es: {
      tagline: 'Operaciones para restaurantes',
      description: 'Sistema operativo integral para restaurantes, construido para la velocidad y la confiabilidad. POS local-first que funciona sin internet.',
      features: [
        'POS local-first (funciona sin internet)',
        'Sistema de cocina (KDS)',
        'Orden en línea e integración de delivery',
        'Gestión de mesas y reservas',
        'Menú y gestión de recetas',
        'Inventario y proveedores',
      ],
      mockupEyebrow: 'Panel de cocina',
    },
    en: {
      tagline: 'Restaurant operations',
      description: 'Complete operating system for restaurants, built for speed and reliability. Local-first POS that works without internet.',
      features: [
        'Local-first POS (works offline)',
        'Kitchen Display System (KDS)',
        'Online ordering and delivery integration',
        'Table and reservation management',
        'Menu and recipe management',
        'Inventory and suppliers',
      ],
      mockupEyebrow: 'Kitchen dashboard',
    },
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
  },
  {
    id: 'hospitality',
    icon: Hotel,
    name: 'Hospitality Edition',
    es: {
      tagline: 'Gestión hotelera',
      description: 'Plataforma de gestión para hoteles, resorts y alquileres vacacionales. Reservas, housekeeping y experiencia del huésped en un solo sistema.',
      features: [
        'Motor de reservas',
        'Gestión de housekeeping',
        'Portal de comunicación con el huésped',
        'Integración con channel manager',
        'Gestión de ingresos y tarifas',
        'Analíticas y business intelligence',
      ],
      mockupEyebrow: 'Panel de reservas',
    },
    en: {
      tagline: 'Hotel management',
      description: 'Management platform for hotels, resorts and vacation rentals. Reservations, housekeeping and guest experience in a single system.',
      features: [
        'Reservation engine',
        'Housekeeping management',
        'Guest communication portal',
        'Channel manager integration',
        'Revenue and rate management',
        'Analytics and business intelligence',
      ],
      mockupEyebrow: 'Reservations dashboard',
    },
    gradient: 'linear-gradient(135deg, #D97706, #9A5B0A)',
  },
  {
    id: 'health',
    icon: HeartPulse,
    name: 'Medical Edition',
    es: {
      tagline: 'Clínicas y salud',
      description: 'Plataforma para clínicas, hospitales y organizaciones de salud. Expedientes electrónicos, agendamiento y facturación clínica.',
      features: [
        'Expediente clínico electrónico',
        'Agendamiento y admisión de pacientes',
        'Facturación y reclamos a seguros',
        'Telemedicina y atención remota',
        'Integración con laboratorio y farmacia',
        'Reportes y analíticas',
      ],
      mockupEyebrow: 'Panel clínico',
    },
    en: {
      tagline: 'Clinics and healthcare',
      description: 'Platform for clinics, hospitals and healthcare organizations. Electronic records, scheduling and clinical billing.',
      features: [
        'Electronic medical record',
        'Patient scheduling and admission',
        'Billing and insurance claims',
        'Telemedicine and remote care',
        'Laboratory and pharmacy integration',
        'Reports and analytics',
      ],
      mockupEyebrow: 'Clinical dashboard',
    },
    gradient: 'linear-gradient(135deg, #f43f5e, #e11d48)',
  },
  {
    id: 'retail',
    icon: ShoppingBag,
    name: 'Retail Edition',
    es: {
      tagline: 'Comercios y tiendas',
      description: 'Plataforma de gestión para comercios y tiendas. POS, inventario, clientes y reportes en un solo sistema.',
      features: [
        'Punto de venta (POS)',
        'Gestión de inventario',
        'Perfiles de clientes',
        'Facturación DGII e-CF',
        'Reportes de ventas',
        'Gestión de proveedores',
      ],
      mockupEyebrow: 'Panel de ventas',
    },
    en: {
      tagline: 'Shops and stores',
      description: 'Management platform for shops and stores. POS, inventory, customers and reports in a single system.',
      features: [
        'Point of sale (POS)',
        'Inventory management',
        'Customer profiles',
        'DGII e-CF invoicing',
        'Sales reports',
        'Supplier management',
      ],
      mockupEyebrow: 'Sales dashboard',
    },
    gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
  },
]

export function ProductsPage() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { lang } = useLang()

  const jsonLd = products.map((p) => {
    const cfg = getProductConfig(p.id)
    return {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: p.name,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description: p[lang].description,
      url: cfg?.external ? cfg.href : `https://auronsuite.com/products#${p.id}`,
      publisher: {
        '@type': 'Organization',
        name: 'AURON Suite',
        url: 'https://auronsuite.com',
      },
      offers: {
        '@type': 'Offer',
        availability: cfg?.status === 'live' ? 'https://schema.org/InStock' : 'https://schema.org/PreOrder',
      },
    }
  })

  return (
    <>
      <Seo
        title="Editions — Beauty, Restaurant, Hospitality, Medical y Retail | AURON Suite"
        description={lang === 'es'
          ? 'Conoce las Editions de AURON Suite: Beauty Edition (en operación), Restaurant y Hospitality (en desarrollo), Medical y Retail (planeadas). Todas comparten un núcleo unificado con facturación DGII e-CF nativa.'
          : 'Meet the AURON Suite Editions: Beauty Edition (live), Restaurant and Hospitality (in development), Medical and Retail (planned). All share a unified core with native DGII e-CF invoicing.'}
        path="/products"
        jsonLd={jsonLd}
      />
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'var(--auron-gradient-1)' }} />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[var(--auron-text)] leading-[1.05]">
              {lang === 'es' ? 'Nuestras Editions' : 'Our Editions'}
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-xl text-[var(--auron-text-secondary)]" style={{ lineHeight: 1.7 }}>
              {lang === 'es'
                ? 'Cada Edition de AURON Suite se construye sobre una plataforma compartida — unificada, segura y diseñada para escalar.'
                : 'Each AURON Suite Edition is built on a shared platform — unified, secure and designed to scale.'}
              <br />
              <span className="font-medium" style={{ color: 'var(--auron-accent-text)' }}>
                {lang === 'es' ? 'Beauty Edition ya está en operación.' : 'Beauty Edition is already live.'}
              </span>{' '}
              {lang === 'es'
                ? 'Restaurant y Hospitality Editions están en desarrollo; Health y Retail están planeadas.'
                : 'Restaurant and Hospitality Editions are in development; Health and Retail are planned.'}
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <div ref={ref} className="space-y-16 md:space-y-24">
          {products.map((p, i) => {
            const c = p[lang]
            return (
              <motion.div
                key={p.id}
                id={p.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                <div style={i % 2 === 1 ? { order: 2 } : undefined}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: p.gradient }}>
                    <p.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--auron-accent-text)' }}>
                    {c.tagline}
                  </span>
                  <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--auron-text)] flex items-center gap-3 flex-wrap">
                    {p.name}
                  </h2>
                  <p className="mt-4 text-base text-[var(--auron-text-secondary)] leading-relaxed">{c.description}</p>
                  <ul className="mt-6 space-y-3">
                    {c.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-[var(--auron-text-secondary)]">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--auron-accent-text)' }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    {isProductExternal(p.id) ? (
                      <Button
                        variant="primary"
                        size="md"
                        as="a"
                        href={getProductHref(p.id)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {lang === 'es' ? 'Abrir' : 'Open'} {p.name} <ArrowRight className="w-4 h-4" />
                      </Button>
                    ) : (
                      <Button variant="secondary" size="md" as="a" href="/contact">
                        {lang === 'es' ? 'Solicitar información' : 'Request information'} <ArrowRight className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
                <div style={i % 2 === 1 ? { order: 1 } : undefined}>
                  <ProductMockup gradient={p.gradient} title={p.name} eyebrow={c.mockupEyebrow} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </Section>

      <section className="py-16 md:py-24 bg-[var(--auron-bg-secondary)] border-y border-[var(--auron-border-light)]">
        <Container className="text-center">
          <SectionHeader
            label={lang === 'es' ? 'Plataforma' : 'Platform'}
            title={lang === 'es' ? 'Un núcleo compartido' : 'A shared core'}
            description={lang === 'es'
              ? 'Todas las Editions de AURON Suite comparten las mismas decisiones de ingeniería: seguridad, calidad y consistencia en la experiencia.'
              : 'All AURON Suite Editions share the same engineering decisions: security, quality and consistency in the experience.'}
          />
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {['Django + DRF', 'PostgreSQL', 'React / Angular', 'Docker', 'API REST'].map((f) => (
              <span key={f} className="px-4 py-2 rounded-full border border-[var(--auron-border)] bg-[var(--auron-card-bg)] text-sm text-[var(--auron-text-secondary)]">
                {f}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  )
}
