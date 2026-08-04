import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Cpu, Users, Globe } from 'lucide-react'
import { Section } from './section'
import { SpotlightCard } from './spotlight-card'
import { useLang } from '@/lib/i18n'

export function Mission() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { lang } = useLang()

  const values = [
    {
      icon: Shield,
      title: lang === 'es' ? 'Seguridad empresarial' : 'Enterprise security',
      description: lang === 'es'
        ? 'Infraestructura con cifrado de extremo a extremo. Tus datos están protegidos en cada capa.'
        : 'End-to-end encrypted infrastructure. Your data is protected at every layer.',
    },
    {
      icon: Cpu,
      title: lang === 'es' ? 'Arquitectura unificada' : 'Unified architecture',
      description: lang === 'es'
        ? 'Construido sobre una plataforma común. Todos los productos comparten APIs, autenticación y datos.'
        : 'Built on a common platform. All products share APIs, authentication and data.',
    },
    {
      icon: Users,
      title: lang === 'es' ? 'Primero el cliente' : 'Customer first',
      description: lang === 'es'
        ? 'Equipo de soporte dedicado con SLA de uptime. Somos tu socio tecnológico a largo plazo.'
        : 'Dedicated support team with uptime SLA. We are your long-term technology partner.',
    },
    {
      icon: Globe,
      title: lang === 'es' ? 'Hecho en RD' : 'Made in DR',
      description: lang === 'es'
        ? 'Diseñado y operado desde República Dominicana, con datos locales y facturación DGII e-CF nativa.'
        : 'Designed and operated from the Dominican Republic, with local data and native DGII e-CF invoicing.',
    },
  ]

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
            {lang === 'es' ? 'Por qué AURON Suite' : 'Why AURON Suite'}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--auron-text)] leading-[1.1]"
          >
            {lang === 'es' ? 'Una plataforma.' : 'One platform.'}
            <br />
            {lang === 'es' ? 'Múltiples Editions.' : 'Multiple Editions.'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base md:text-lg text-[var(--auron-text-secondary)] leading-relaxed"
          >
            {lang === 'es'
              ? 'AURON Suite es la plataforma que agrupa todas las Editions de Auron Software: Beauty Edition, Restaurant OS, Health y Hospitality. Cada Edition funciona sobre un núcleo compartido — datos, autenticación e infraestructura unificados.'
              : 'AURON Suite is the platform that groups all Auron Software Editions: Beauty Edition, Restaurant OS, Health and Hospitality. Every Edition runs on a shared core — unified data, authentication and infrastructure.'}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-base md:text-lg text-[var(--auron-text-secondary)] leading-relaxed"
          >
            {lang === 'es'
              ? 'Ya sea que necesites gestión para salones, un POS para restaurantes, una plataforma clínica u hotelera — AURON Suite tiene una Edition para tu rubro.'
              : 'Whether you need salon management, a restaurant POS, a clinical or hotel platform — AURON Suite has an Edition for your business.'}
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
