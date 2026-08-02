import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Building2, UtensilsCrossed, Hotel, HeartPulse, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Section, SectionHeader } from './section'
import { Button } from './button'
import { SpotlightCard } from './spotlight-card'
import { cn } from '@/lib/utils'

type ProductStatus = 'live' | 'dev' | 'planned'

interface Product {
  id: string
  icon: React.ComponentType<{ className?: string }>
  name: string
  status: ProductStatus
  description: string
  features: string[]
  gradient: string
}

const products: Product[] = [
  {
    id: 'suite',
    icon: Building2,
    name: 'Auron Suite',
    status: 'live',
    description: 'Plataforma de gestión para negocios de belleza y bienestar. Agendamiento, inventario, equipo y cumplimiento fiscal DGII e-CF nativo.',
    features: ['Agendamiento de citas', 'Gestión de clientes', 'Control de inventario', 'Facturación DGII e-CF', 'Analíticas de ventas', 'Historial clínico estético'],
    gradient: 'linear-gradient(135deg, #1A56DB, #123F9E)',
  },
  {
    id: 'restaurant',
    icon: UtensilsCrossed,
    name: 'Auron Restaurant OS',
    status: 'dev',
    description: 'Sistema operativo para restaurantes. POS local-first que funciona sin internet, cocina (KDS), delivery y gestión de mesas.',
    features: ['POS local-first (sin internet)', 'Kitchen Display System', 'Integración delivery', 'Gestión de mesas', 'Control de menú y recetas', 'Inventario y proveedores'],
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
  },
  {
    id: 'hospitality',
    icon: Hotel,
    name: 'Auron Hospitality',
    status: 'dev',
    description: 'Plataforma de operaciones hoteleras. Reservas, housekeeping y experiencia del huésped integradas en un solo sistema.',
    features: ['Motor de reservas', 'Gestión de housekeeping', 'Portal del huésped', 'Integración channel manager', 'Analíticas de ingresos', 'Business intelligence'],
    gradient: 'linear-gradient(135deg, #D97706, #9A5B0A)',
  },
  {
    id: 'health',
    icon: HeartPulse,
    name: 'Auron Health',
    status: 'live',
    description: 'Plataforma de gestión para salud. Expedientes electrónicos, agendamiento y facturación clínica.',
    features: ['Expediente clínico electrónico', 'Agendamiento de pacientes', 'Facturación y seguros', 'Telemedicina', 'Integración farmacia/lab', 'Cumplimiento regulatorio'],
    gradient: 'linear-gradient(135deg, #f43f5e, #e11d48)',
  },
]

const statusConfig: Record<ProductStatus, { label: string; className: string }> = {
  live: { label: 'En operación', className: 'bg-[var(--auron-accent)] text-white border-transparent' },
  dev: { label: 'En desarrollo', className: 'bg-[var(--auron-gold)]/10 text-[var(--auron-badge-dev)] border-[var(--auron-badge-dev)]/20' },
  planned: { label: 'Planeado', className: 'bg-[var(--auron-badge-planned)]/10 text-[var(--auron-badge-planned)] border-[var(--auron-badge-planned)]/20' },
}

function StatusBadge({ status }: { status: ProductStatus }) {
  const cfg = statusConfig[status]
  return (
    <span className={cn(
      'inline-block text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full border',
      'transition-transform duration-200 hover:scale-105 cursor-default',
      cfg.className,
    )}>
      {cfg.label}
    </span>
  )
}

function CardBody({ p }: { p: Product }) {
  return (
    <>
      <div className="flex items-start gap-4 mb-5">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: p.gradient }}>
          <p.icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="text-xl font-semibold text-[var(--auron-text)]">{p.name}</h3>
            <StatusBadge status={p.status} />
          </div>
          <p className="mt-1 text-sm text-[var(--auron-text-secondary)] leading-relaxed">{p.description}</p>
        </div>
      </div>
      <ul className="space-y-2 mb-6">
        {p.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm text-[var(--auron-text-secondary)]">
            <Sparkles className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--auron-accent-text)' }} />
            {f}
          </li>
        ))}
      </ul>
      <Link to={`/products#${p.id}`} className="auron-focus-ring inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: 'var(--auron-accent-text)' }}>
        Más información <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </>
  )
}

function FeaturedCardBody({ p }: { p: Product }) {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start h-full">
      <div className="lg:flex-1 lg:min-w-0">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0" style={{ background: p.gradient, boxShadow: '0 0 24px var(--auron-accent-glow)' }}>
            <p.icon className="w-7 h-7 text-white" />
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="text-2xl font-semibold text-[var(--auron-text)]">{p.name}</h3>
            <StatusBadge status={p.status} />
          </div>
        </div>
        <p className="text-sm text-[var(--auron-text-secondary)] leading-relaxed mb-6 lg:max-w-md">{p.description}</p>
        <Link to={`/products#${p.id}`} className="auron-focus-ring inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: 'var(--auron-accent-text)' }}>
          Más información <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
      <ul className="grid sm:grid-cols-2 gap-2.5 lg:w-[45%] shrink-0">
        {p.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm text-[var(--auron-text-secondary)]">
            <Sparkles className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--auron-accent-text)' }} />
            {f}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ProductsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const render = (p: Product, i: number, featured: boolean) => (
    <motion.div
      key={p.id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(featured && 'lg:col-span-2')}
    >
      <SpotlightCard className="h-full p-6 md:p-8">
        {featured ? <FeaturedCardBody p={p} /> : <CardBody p={p} />}
      </SpotlightCard>
    </motion.div>
  )

  return (
    <Section id="products">
      <SectionHeader
        label="Productos"
        title="Construido para cada rubro"
        description="Cada producto del ecosistema Auron comparte una base común: confiabilidad, seguridad y una experiencia de usuario de clase mundial."
      />
      <div ref={ref} className="grid gap-6 md:gap-8 lg:grid-cols-3">
        {render(products[0], 0, true)}
        {render(products[1], 1, false)}
        {render(products[2], 2, false)}
        {render(products[3], 3, true)}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <Button variant="secondary" size="md" as="a" href="/products">
          Ver todos los productos <ArrowRight className="w-4 h-4" />
        </Button>
      </motion.div>
    </Section>
  )
}
