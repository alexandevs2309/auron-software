import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Code2, BrainCircuit, Cloud, Cog, GitBranch, HeadphonesIcon } from 'lucide-react'
import { Container } from '../components/container'
import { Section, SectionHeader } from '../components/section'
import { Button } from '../components/button'
import { Seo } from '../components/seo'
import { CTA } from '../components/cta'

const services = [
  {
    id: 'custom',
    icon: Code2,
    title: 'Desarrollo de software a la medida',
    description: 'Diseñamos y construimos aplicaciones web y plataformas SaaS adaptadas a cómo funciona realmente tu negocio.',
    features: ['Aplicaciones web y SaaS', 'Django + React / Angular', 'Sistemas multinegocio (multi-tenant)', 'Desarrollo de APIs e integración', 'MVP y prototipado rápido', 'Control de calidad y pruebas'],
  },
  {
    id: 'ai',
    icon: BrainCircuit,
    title: 'Inteligencia Artificial',
    description: 'Machine learning ligero que predice resultados reales del negocio — ganancias, ventas y carga laboral.',
    features: ['Pronóstico de ganancias y ventas', 'Predicción de carga laboral', 'Modelos ML ligeros (regresión y series de tiempo)', 'Actualizaciones semanales automáticas vía Celery', 'Paneles predictivos', 'Decisiones basadas en datos'],
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Soluciones Cloud',
    description: 'Infraestructura contenedorizada diseñada para confiabilidad, seguridad y costo predecible.',
    features: ['Docker y contenedores', 'Infraestructura AWS', 'Pipelines CI/CD', 'Despliegue y migración', 'Monitoreo y respaldos', 'Optimización de costos'],
  },
  {
    id: 'automation',
    icon: Cog,
    title: 'Automatización',
    description: 'Elimina tareas repetitivas con procesos en segundo plano que corren mientras te enfocas en el negocio.',
    features: ['Tareas en segundo plano con Celery', 'Reportes automatizados', 'Notificaciones y recordatorios', 'Procesamiento de documentos', 'Automatización de email', 'Sincronización programada de datos'],
  },
  {
    id: 'integration',
    icon: GitBranch,
    title: 'Integración de sistemas',
    description: 'Conecta tus herramientas, plataformas y fuentes de datos en un flujo unificado.',
    features: ['Facturación DGII e-CF', 'Pasarelas de pago', 'Desarrollo de APIs REST', 'Sincronización de datos', 'Webhooks y flujos basados en eventos', 'Conectividad con terceros'],
  },
  {
    id: 'consulting',
    icon: HeadphonesIcon,
    title: 'Consultoría tecnológica',
    description: 'Guía práctica para tomar las decisiones tecnológicas correctas para tu negocio.',
    features: ['Roadmap tecnológico', 'Revisión y diseño de arquitectura', 'Estrategia de transformación digital', 'Buenas prácticas de seguridad', 'Capacitación técnica', 'Selección de proveedores y herramientas'],
  },
]

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Servicios — Desarrollo a la medida, IA y Cloud | Auron Software"
        description="Servicios de software de Auron: desarrollo a la medida con Django y React, inteligencia artificial predictiva, soluciones cloud, automatización e integración DGII e-CF."
        path="/services"
      />
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'var(--auron-gradient-1)' }} />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[var(--auron-text)] leading-[1.05]">Servicios</h1>
            <p className="mt-6 text-lg md:text-xl max-w-xl text-[var(--auron-text-secondary)]" style={{ lineHeight: 1.7 }}>
              Además de nuestros productos, ayudamos a las empresas con desarrollo a la medida, IA, automatización e integración — construido sobre el mismo stack que usamos nosotros.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="space-y-20 md:space-y-28">
          {services.map((s, i) => (
            <ServiceDetail key={s.id} service={s} index={i} />
          ))}
        </div>
      </Section>

      <section className="py-16 md:py-24 bg-[var(--auron-bg-secondary)] border-y border-[var(--auron-border-light)]">
        <Container className="text-center">
          <SectionHeader label="Proceso" title="Cómo trabajamos" description="Un proceso simple y honesto: entender el negocio, diseñar la solución, construirla y desplegarla." />
          <div className="grid sm:grid-cols-4 gap-6 mt-12 text-left">
            {[
              { step: '01', title: 'Descubrir', desc: 'Aprendemos tu negocio, tus metas y tu panorama técnico.' },
              { step: '02', title: 'Diseñar', desc: 'Arquitectura, UX y especificaciones técnicas.' },
              { step: '03', title: 'Construir', desc: 'Desarrollo ágil con entrega continua.' },
              { step: '04', title: 'Escalar', desc: 'Desplegar, monitorear y optimizar para crecer.' },
            ].map((step) => (
              <div key={step.step} className="p-6 rounded-2xl border border-[var(--auron-card-border)] bg-[var(--auron-card-bg)]">
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--auron-accent-text)' }}>{step.step}</div>
                <h4 className="text-base font-semibold text-[var(--auron-text)] mb-1">{step.title}</h4>
                <p className="text-sm text-[var(--auron-text-secondary)]">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  )
}

function ServiceDetail({ service, index }: { service: typeof services[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      id={service.id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
    >
      <div style={index % 2 === 1 ? { order: 2 } : undefined}>
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'var(--auron-gradient-accent-subtle)' }}>
          <service.icon className="w-7 h-7" style={{ color: 'var(--auron-accent-text)' }} />
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--auron-text)]">{service.title}</h2>
        <p className="mt-4 text-base text-[var(--auron-text-secondary)] leading-relaxed">{service.description}</p>
        <ul className="mt-6 grid sm:grid-cols-2 gap-3">
          {service.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-[var(--auron-text-secondary)]">
              <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--auron-accent-text)' }} />
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button variant="primary" size="md" as="a" href="/contact">
            Empezar <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div style={index % 2 === 1 ? { order: 1 } : undefined}>
        <div className="aspect-[4/3] rounded-2xl border border-[var(--auron-border)] flex items-center justify-center" style={{ background: 'var(--auron-gradient-accent-subtle)' }}>
          <service.icon className="w-24 h-24" style={{ color: 'var(--auron-accent-text)', opacity: 0.2 }} />
        </div>
      </div>
    </motion.div>
  )
}
