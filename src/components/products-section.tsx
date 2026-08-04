import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Building2, UtensilsCrossed, Hotel, HeartPulse, ShoppingBag, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Section, SectionHeader } from './section'
import { Button } from './button'
import { SpotlightCard } from './spotlight-card'
import { cn } from '@/lib/utils'
import { getProductHref, isProductExternal } from '@/config/products'
import { useLang, type Lang } from '@/lib/i18n'

interface Localized {
  description: string
  features: string[]
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
      description: 'Plataforma de gestión para negocios de belleza y bienestar. Agendamiento, inventario, equipo y cumplimiento fiscal DGII e-CF nativo.',
      features: ['Agendamiento de citas', 'Gestión de clientes', 'Control de inventario', 'Facturación DGII e-CF', 'Analíticas de ventas', 'Historial clínico estético'],
    },
    en: {
      description: 'Management platform for beauty and wellness businesses. Scheduling, inventory, team and native DGII e-CF fiscal compliance.',
      features: ['Appointment scheduling', 'Client management', 'Inventory control', 'DGII e-CF invoicing', 'Sales analytics', 'Aesthetic clinical history'],
    },
    gradient: 'linear-gradient(135deg, #1A56DB, #123F9E)',
  },
  {
    id: 'restaurant',
    icon: UtensilsCrossed,
    name: 'Restaurant Edition',
    es: {
      description: 'Sistema operativo para restaurantes. POS local-first que funciona sin internet, cocina (KDS), delivery y gestión de mesas.',
      features: ['POS local-first (sin internet)', 'Kitchen Display System', 'Integración delivery', 'Gestión de mesas', 'Control de menú y recetas', 'Inventario y proveedores'],
    },
    en: {
      description: 'Operating system for restaurants. Local-first POS that works offline, kitchen (KDS), delivery and table management.',
      features: ['Local-first POS (offline)', 'Kitchen Display System', 'Delivery integration', 'Table management', 'Menu and recipe control', 'Inventory and suppliers'],
    },
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
  },
  {
    id: 'hospitality',
    icon: Hotel,
    name: 'Hospitality Edition',
    es: {
      description: 'Plataforma de operaciones hoteleras. Reservas, housekeeping y experiencia del huésped integradas en un solo sistema.',
      features: ['Motor de reservas', 'Gestión de housekeeping', 'Portal del huésped', 'Integración channel manager', 'Analíticas de ingresos', 'Business intelligence'],
    },
    en: {
      description: 'Hotel operations platform. Reservations, housekeeping and guest experience integrated in a single system.',
      features: ['Reservation engine', 'Housekeeping management', 'Guest portal', 'Channel manager integration', 'Revenue analytics', 'Business intelligence'],
    },
    gradient: 'linear-gradient(135deg, #D97706, #9A5B0A)',
  },
  {
    id: 'health',
    icon: HeartPulse,
    name: 'Medical Edition',
    es: {
      description: 'Plataforma de gestión para salud. Expedientes electrónicos, agendamiento y facturación clínica.',
      features: ['Expediente clínico electrónico', 'Agendamiento de pacientes', 'Facturación y seguros', 'Telemedicina', 'Integración farmacia/lab', 'Cumplimiento regulatorio'],
    },
    en: {
      description: 'Management platform for healthcare. Electronic records, scheduling and clinical billing.',
      features: ['Electronic medical record', 'Patient scheduling', 'Billing and insurance', 'Telemedicine', 'Pharmacy/lab integration', 'Regulatory compliance'],
    },
    gradient: 'linear-gradient(135deg, #f43f5e, #e11d48)',
  },
  {
    id: 'retail',
    icon: ShoppingBag,
    name: 'Retail Edition',
    es: {
      description: 'Plataforma de gestión para comercios y tiendas. POS, inventario, clientes y reportes en un solo sistema.',
      features: ['Punto de venta (POS)', 'Gestión de inventario', 'Perfiles de clientes', 'Facturación DGII e-CF', 'Reportes de ventas', 'Gestión de proveedores'],
    },
    en: {
      description: 'Management platform for shops and stores. POS, inventory, customers and reports in a single system.',
      features: ['Point of sale (POS)', 'Inventory management', 'Customer profiles', 'DGII e-CF invoicing', 'Sales reports', 'Supplier management'],
    },
    gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
  },
]

function CardBody({ p, lang }: { p: Product; lang: Lang }) {
  const c = p[lang]
  const href = getProductHref(p.id)
  const external = isProductExternal(p.id)
  const openLabel = lang === 'es' ? 'Abrir' : 'Open'
  return (
    <>
      <div className="flex items-start gap-4 mb-5">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: p.gradient }}>
          <p.icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="text-xl font-semibold text-[var(--auron-text)]">{p.name}</h3>
          </div>
          <p className="mt-1 text-sm text-[var(--auron-text-secondary)] leading-relaxed">{c.description}</p>
        </div>
      </div>
      <ul className="space-y-2 mb-6">
        {c.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm text-[var(--auron-text-secondary)]">
            <Check className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--auron-accent-text)' }} />
            {f}
          </li>
        ))}
      </ul>
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="auron-focus-ring inline-flex items-center gap-1.5 text-sm font-medium"
          style={{ color: 'var(--auron-accent-text)' }}
        >
          {openLabel} {p.name} <ArrowRight className="w-3.5 h-3.5" />
        </a>
      ) : (
        <Link
          to={href}
          className="auron-focus-ring inline-flex items-center gap-1.5 text-sm font-medium"
          style={{ color: 'var(--auron-accent-text)' }}
        >
          {openLabel} {p.name} <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      )}
    </>
  )
}

function FeaturedCardBody({ p, lang }: { p: Product; lang: Lang }) {
  const c = p[lang]
  const href = getProductHref(p.id)
  const external = isProductExternal(p.id)
  const openLabel = lang === 'es' ? 'Abrir' : 'Open'
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start h-full">
      <div className="lg:flex-1 lg:min-w-0">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0" style={{ background: p.gradient }}>
            <p.icon className="w-7 h-7 text-white" />
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="text-2xl font-semibold text-[var(--auron-text)]">{p.name}</h3>
          </div>
        </div>
        <p className="text-sm text-[var(--auron-text-secondary)] leading-relaxed mb-6 lg:max-w-md">{c.description}</p>
        {external ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="auron-focus-ring inline-flex items-center gap-1.5 text-sm font-medium"
            style={{ color: 'var(--auron-accent-text)' }}
          >
            {openLabel} {p.name} <ArrowRight className="w-3.5 h-3.5" />
          </a>
        ) : (
          <Link
            to={href}
            className="auron-focus-ring inline-flex items-center gap-1.5 text-sm font-medium"
            style={{ color: 'var(--auron-accent-text)' }}
          >
            {openLabel} {p.name} <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
      <ul className="grid sm:grid-cols-2 gap-2.5 lg:w-[45%] shrink-0">
        {c.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm text-[var(--auron-text-secondary)]">
            <Check className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--auron-accent-text)' }} />
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
  const { lang } = useLang()

  const render = (p: Product, i: number, featured: boolean) => (
    <motion.div
      key={p.id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(featured && 'lg:col-span-2')}
    >
      <SpotlightCard className="h-full p-6 md:p-8">
        {featured ? <FeaturedCardBody p={p} lang={lang} /> : <CardBody p={p} lang={lang} />}
      </SpotlightCard>
    </motion.div>
  )

  return (
    <Section id="products">
      <SectionHeader
        label={lang === 'es' ? 'Plataforma' : 'Platform'}
        title={lang === 'es' ? 'Una Edition para cada rubro' : 'An Edition for every business'}
        description={lang === 'es'
          ? 'Cada Edition de AURON Suite se construye sobre un núcleo compartido: autenticación, facturación DGII e-CF nativa y operación local sin internet.'
          : 'Each AURON Suite Edition is built on a shared core: authentication, native DGII e-CF invoicing and local offline operation.'}
      />
      <div ref={ref} className="grid gap-6 md:gap-8 lg:grid-cols-3">
        {render(products[0], 0, true)}
        {render(products[1], 1, false)}
        {render(products[2], 2, false)}
        {render(products[3], 3, false)}
        {render(products[4], 4, false)}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <Button variant="secondary" size="md" as="a" href="/products">
          {lang === 'es' ? 'Ver todas las Editions' : 'See all Editions'} <ArrowRight className="w-4 h-4" />
        </Button>
      </motion.div>
    </Section>
  )
}
