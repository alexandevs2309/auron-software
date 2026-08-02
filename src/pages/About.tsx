import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Layers, TrendingUp, Sparkles, Building2 } from 'lucide-react'
import { Container } from '../components/container'
import { Section, SectionHeader } from '../components/section'
import { Seo } from '../components/seo'
import { CTA } from '../components/cta'

const values = [
  { icon: Layers, title: 'Modular', description: 'Cada módulo tiene un propósito y funciona por sí solo: citas, equipo, caja, ganancias y reportes — todos conectados por APIs.' },
  { icon: TrendingUp, title: 'Escalable', description: 'Desde una barbería de un solo local hasta una franquicia de varias sucursales, la plataforma se adapta al tamaño y ritmo de cada negocio.' },
  { icon: Building2, title: 'Multinegocio', description: 'Cada negocio tiene su propio espacio aislado — empleados, servicios, comisiones y datos — dentro de una sola plataforma.' },
  { icon: Sparkles, title: 'Belleza funcional', description: 'El software debe sentirse humano: moderno, intuitivo y útil desde el primer clic.' },
]

const timeline = [
  { phase: 'MVP Modular', status: 'En producción', event: 'Módulos core en producción sobre Django + Angular: citas, empleados, clientes, servicios, caja, ganancias y reportes.' },
  { phase: 'Earnings AI', status: 'En desarrollo', event: 'Predicción de ganancias y carga laboral con machine learning ligero, refrescada automáticamente vía Celery.' },
  { phase: 'Portal de clientes', status: 'Planeado', event: 'Una app PWA para que los clientes finales reserven citas, revisen servicios y construyan lealtad.' },
  { phase: 'Pagos', status: 'Planeado', event: 'Stripe, MercadoPago y PayPal para suscripciones y pagos dentro de la app.' },
  { phase: 'App móvil', status: 'En diseño', event: 'Acceso completo con soporte offline para el equipo del salón.' },
]

export function AboutPage() {
  return (
    <>
      <Seo
        title="Nosotros — Auron Software, hecho en República Dominicana"
        description="Auron Software construye la plataforma que hace funcionar negocios reales: salones de belleza, barberías y restaurantes. Conoce nuestra historia, valores y roadmap."
        path="/about"
      />
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'var(--auron-gradient-1)' }} />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[var(--auron-text)] leading-[1.05]">Nosotros</h1>
            <p className="mt-6 text-lg md:text-xl max-w-xl text-[var(--auron-text-secondary)]" style={{ lineHeight: 1.7 }}>
              Construimos la plataforma que hace funcionar negocios reales — salones de belleza, barberías, centros de estética y restaurantes.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--auron-text)]">Hecho para negocios reales</h2>
            <div className="mt-6 space-y-4">
              <p className="text-base text-[var(--auron-text-secondary)] leading-relaxed">
                Auron nació con una idea simple: darle a los negocios de belleza un software tan bueno
                como el que usan las grandes empresas. Hoy, Auron Suite es una plataforma SaaS multinegocio —
                cada salón, barbería o centro de estética tiene su propio espacio de trabajo con citas,
                equipo, comisiones, caja y ganancias.
              </p>
              <p className="text-base text-[var(--auron-text-secondary)] leading-relaxed">
                No es un panel de reportes. Es el cerebro operativo del negocio: el equipo registra su
                trabajo, la caja convierte cada venta en una ganancia por período de pago, e inteligencia
                artificial ligera predice los ingresos futuros.
              </p>
              <p className="text-base text-[var(--auron-text-secondary)] leading-relaxed">
                Construimos para el largo plazo — un producto honesto a la vez, siempre pensando en las
                personas que dirigen el negocio.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <ValueCard key={v.title} value={v} index={i} />
            ))}
          </div>
        </div>
      </Section>

      <TimelineSection />
      <CTA />
    </>
  )
}

function ValueCard({ value, index }: { value: typeof values[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-5 md:p-6 rounded-2xl border border-[var(--auron-card-border)] bg-[var(--auron-card-bg)]"
    >
      <value.icon className="w-5 h-5 mb-3" style={{ color: 'var(--auron-accent-text)' }} />
      <h3 className="text-base font-semibold text-[var(--auron-text)] mb-1">{value.title}</h3>
      <p className="text-sm text-[var(--auron-text-secondary)] leading-relaxed">{value.description}</p>
    </motion.div>
  )
}

function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <Section id="timeline">
      <SectionHeader label="Roadmap" title="Lo que es real" description="Lo que ya está en producción, lo que estamos construyendo y lo que viene — sin humo ni espejos." />
      <div ref={ref} className="relative max-w-3xl mx-auto">
        <div className="absolute left-[19px] top-0 bottom-0 w-px" style={{ background: 'var(--auron-border)' }} />
        <div className="space-y-10">
          {timeline.map((item, i) => (
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
