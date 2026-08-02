import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, BrainCircuit, Cloud, Cog, GitBranch, HeadphonesIcon } from 'lucide-react'
import { Section, SectionHeader } from './section'
import { SpotlightCard } from './spotlight-card'

const services = [
  {
    icon: Code2,
    title: 'Desarrollo a la medida',
    description: 'Aplicaciones web y SaaS a medida con Django, React y PostgreSQL, listas para escalar con tu negocio.',
  },
  {
    icon: BrainCircuit,
    title: 'Inteligencia Artificial',
    description: 'Analítica predictiva para tu operación: proyección de ganancias, ventas y carga laboral con modelos ligeros.',
  },
  {
    icon: Cloud,
    title: 'Soluciones Cloud',
    description: 'Despliegue contenedorizado con Docker y AWS. Migración, monitoreo y servicios gestionados.',
  },
  {
    icon: Cog,
    title: 'Automatización',
    description: 'Reportes, notificaciones y recordatorios automáticos que eliminan tareas manuales del día a día.',
  },
  {
    icon: GitBranch,
    title: 'Integración de Sistemas',
    description: 'Conecta tu software con APIs: facturación DGII e-CF, pasarelas de pago y sincronización de datos.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Consultoría',
    description: 'Asesoría técnica para digitalizar tu operación y elegir la arquitectura correcta.',
  },
]

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <Section id="services">
      <SectionHeader
        label="Servicios"
        title="Más allá de nuestros productos"
        description="Ayudamos a negocios que necesitan más que un producto: software a la medida, IA, automatización e integración."
      />
      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="h-full"
          >
            <SpotlightCard className="h-full p-6 md:p-8">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: 'var(--auron-gradient-accent-subtle)' }}>
                <s.icon className="w-5.5 h-5.5" style={{ color: 'var(--auron-accent-text)' }} />
              </div>
              <h3 className="text-lg font-semibold text-[var(--auron-text)] mb-2">{s.title}</h3>
              <p className="text-sm text-[var(--auron-text-secondary)] leading-relaxed">{s.description}</p>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
