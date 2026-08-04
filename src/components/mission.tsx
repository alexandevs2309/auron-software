import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Cpu, Users, Globe } from 'lucide-react'
import { Section } from './section'
import { SpotlightCard } from './spotlight-card'

const values = [
  {
    icon: Shield,
    title: 'Seguridad empresarial',
    description: 'Infraestructura con cifrado de extremo a extremo. Tus datos están protegidos en cada capa.',
  },
  {
    icon: Cpu,
    title: 'Arquitectura unificada',
    description: 'Construido sobre una plataforma común. Todos los productos comparten APIs, autenticación y datos.',
  },
  {
    icon: Users,
    title: 'Primero el cliente',
    description: 'Equipo de soporte dedicado con SLA de uptime. Somos tu socio tecnológico a largo plazo.',
  },
  {
    icon: Globe,
    title: 'Hecho en RD',
    description: 'Diseñado y operado desde República Dominicana, con datos locales y facturación DGII e-CF nativa.',
  },
]

export function Mission() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <Section id="about">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: 'var(--auron-accent-text)' }}
          >
            Por qué AURON Suite
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--auron-text)] leading-[1.1]"
          >
            Una plataforma.
            <br />
            Múltiples Editions.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base md:text-lg text-[var(--auron-text-secondary)] leading-relaxed"
          >
            AURON Suite es la plataforma que agrupa todas las Editions de Auron Software:
            Beauty Edition, Restaurant OS, Health y Hospitality.
            Cada Edition funciona sobre un núcleo compartido — datos, autenticación e infraestructura unificados.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-base md:text-lg text-[var(--auron-text-secondary)] leading-relaxed"
          >
            Ya sea que necesites gestión para salones, un POS para restaurantes,
            una plataforma clínica u hotelera — AURON Suite tiene una Edition para tu rubro.
          </motion.p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="h-full"
            >
              <SpotlightCard className="h-full p-5 md:p-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'var(--auron-gradient-accent-subtle)' }}>
                  <v.icon className="w-5 h-5" style={{ color: 'var(--auron-accent-text)' }} />
                </div>
                <h3 className="text-base font-semibold text-[var(--auron-text)] mb-2">{v.title}</h3>
                <p className="text-sm text-[var(--auron-text-secondary)] leading-relaxed">{v.description}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
