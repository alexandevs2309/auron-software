import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Building2, UtensilsCrossed, Hotel, HeartPulse } from 'lucide-react'
import { Container } from '../components/container'
import { Section, SectionHeader } from '../components/section'
import { Button } from '../components/button'
import { ProductMockup } from '../components/product-mockup'
import { Seo } from '../components/seo'
import { CTA } from '../components/cta'

const products = [
  {
    id: 'suite',
    icon: Building2,
    name: 'Auron Suite',
    tagline: 'Gestión para belleza y bienestar',
    description: 'Plataforma completa de gestión para salones de belleza, barberías, spas y centros de bienestar. Agendamiento, inventario, equipo y cumplimiento fiscal DGII e-CF nativo.',
    features: [
      'Agendamiento de citas con sincronización de calendario',
      'Perfiles de clientes con historial y preferencias',
      'Gestión de inventario y productos',
      'Horarios de personal y comisiones',
      'Registro de ventas (POS)',
      'Analíticas de ventas y reportes',
    ],
    gradient: 'linear-gradient(135deg, #1A56DB, #123F9E)',
    mockupEyebrow: 'Panel de operaciones',
  },
  {
    id: 'restaurant',
    icon: UtensilsCrossed,
    name: 'Auron Restaurant OS',
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
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    mockupEyebrow: 'Panel de cocina',
  },
  {
    id: 'hospitality',
    icon: Hotel,
    name: 'Auron Hospitality',
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
    gradient: 'linear-gradient(135deg, #D97706, #9A5B0A)',
    mockupEyebrow: 'Panel de reservas',
  },
  {
    id: 'health',
    icon: HeartPulse,
    name: 'Auron Health',
    tagline: 'Plataforma de salud',
    description: 'Plataforma para clínicas, hospitales y organizaciones de salud. Expedientes electrónicos, agendamiento y facturación clínica.',
    features: [
      'Expediente clínico electrónico',
      'Agendamiento y admisión de pacientes',
      'Facturación y reclamos a seguros',
      'Telemedicina y atención remota',
      'Integración con laboratorio y farmacia',
      'Reportes y analíticas',
    ],
    gradient: 'linear-gradient(135deg, #f43f5e, #e11d48)',
    mockupEyebrow: 'Panel clínico',
  },
]

export function ProductsPage() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const jsonLd = products.map((p) => ({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: p.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: p.description,
    url: `https://auronsoftware.do/products#${p.id}`,
    publisher: {
      '@type': 'Organization',
      name: 'Auron Software',
      url: 'https://auronsoftware.do',
    },
  }))

  return (
    <>
      <Seo
        title="Productos — Auron Suite, Restaurant OS, Health y Hospitality"
        description="Conoce los productos de Auron Software: plataformas de gestión para belleza y bienestar, restaurantes, salud y hotelería, construidas sobre un núcleo compartido con facturación DGII e-CF."
        path="/products"
        jsonLd={jsonLd}
      />
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'var(--auron-gradient-1)' }} />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[var(--auron-text)] leading-[1.05]">
              Nuestros Productos
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-xl text-[var(--auron-text-secondary)]" style={{ lineHeight: 1.7 }}>
              Cada producto del ecosistema Auron se construye sobre una plataforma compartida — unificada, segura y diseñada para escalar.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <div ref={ref} className="space-y-16 md:space-y-24">
          {products.map((p, i) => (
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
                  {p.tagline}
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--auron-text)]">{p.name}</h2>
                <p className="mt-4 text-base text-[var(--auron-text-secondary)] leading-relaxed">{p.description}</p>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-[var(--auron-text-secondary)]">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--auron-accent-text)' }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button variant="primary" size="md" as="a" href="/contact">
                    Agendar demo <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div style={i % 2 === 1 ? { order: 1 } : undefined}>
                <ProductMockup gradient={p.gradient} title={p.name} eyebrow={p.mockupEyebrow} />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <section className="py-16 md:py-24 bg-[var(--auron-bg-secondary)] border-y border-[var(--auron-border-light)]">
        <Container className="text-center">
          <SectionHeader
            label="Ecosistema"
            title="Una base común"
            description="Todos los productos Auron comparten las mismas decisiones de ingeniería: seguridad, calidad y consistencia en la experiencia."
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
