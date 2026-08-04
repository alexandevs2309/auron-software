import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, BrainCircuit, Cloud, Cog, GitBranch, HeadphonesIcon } from 'lucide-react'
import { Section, SectionHeader } from './section'
import { SpotlightCard } from './spotlight-card'
import { useLang } from '@/lib/i18n'

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { lang } = useLang()

  const services = [
    {
      icon: Code2,
      title: lang === 'es' ? 'Desarrollo a la medida' : 'Custom development',
      description: lang === 'es'
        ? 'Aplicaciones web y SaaS a medida con Django, React y PostgreSQL, listas para escalar con tu negocio.'
        : 'Custom web and SaaS applications with Django, React and PostgreSQL, ready to scale with your business.',
    },
    {
      icon: BrainCircuit,
      title: lang === 'es' ? 'Inteligencia Artificial' : 'Artificial Intelligence',
      description: lang === 'es'
        ? 'Analítica predictiva para tu operación: proyección de ganancias, ventas y carga laboral con modelos ligeros.'
        : 'Predictive analytics for your operation: profit, sales and workload forecasting with lightweight models.',
    },
    {
      icon: Cloud,
      title: lang === 'es' ? 'Soluciones Cloud' : 'Cloud Solutions',
      description: lang === 'es'
        ? 'Despliegue contenedorizado con Docker y AWS. Migración, monitoreo y servicios gestionados.'
        : 'Containerized deployment with Docker and AWS. Migration, monitoring and managed services.',
    },
    {
      icon: Cog,
      title: lang === 'es' ? 'Automatización' : 'Automation',
      description: lang === 'es'
        ? 'Reportes, notificaciones y recordatorios automáticos que eliminan tareas manuales del día a día.'
        : 'Automated reports, notifications and reminders that remove day-to-day manual tasks.',
    },
    {
      icon: GitBranch,
      title: lang === 'es' ? 'Integración de Sistemas' : 'System Integration',
      description: lang === 'es'
        ? 'Conecta tu software con APIs: facturación DGII e-CF, pasarelas de pago y sincronización de datos.'
        : 'Connect your software with APIs: DGII e-CF invoicing, payment gateways and data sync.',
    },
    {
      icon: HeadphonesIcon,
      title: lang === 'es' ? 'Consultoría' : 'Consulting',
      description: lang === 'es'
        ? 'Asesoría técnica para digitalizar tu operación y elegir la arquitectura correcta.'
        : 'Technical guidance to digitize your operation and choose the right architecture.',
    },
  ]

  return (
    <Section id="services">
      <SectionHeader
        label={lang === 'es' ? 'Servicios' : 'Services'}
        title={lang === 'es' ? 'Más allá de las Editions' : 'Beyond the Editions'}
        description={lang === 'es'
          ? 'Ayudamos a negocios que necesitan más que una Edition: desarrollo a la medida, IA, automatización, cloud e integración — construidos sobre el mismo stack de AURON Suite.'
          : 'We help businesses that need more than an Edition: custom development, AI, automation, cloud and integration — built on the same AURON Suite stack.'}
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
