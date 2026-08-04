import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote } from 'lucide-react'
import { Section, SectionHeader } from './section'
import { useLang } from '../lib/i18n'

interface CaseStudy {
  id: string
  es: { industry: string; role: string; result: string; quote: string; name: string }
  en: { industry: string; role: string; result: string; quote: string; name: string }
  metric: { value: string; labelEs: string; labelEn: string }
}

const cases: CaseStudy[] = [
  {
    id: 'beauty',
    es: {
      industry: 'Salón y spa',
      role: 'Propietaria',
      result: 'Cerró su semana contable en minutos, con comisiones calculadas por la plataforma.',
      quote:
        'Antes perdía el sábado por la noche cuadrando comisiones a mano. Ahora cada corte y cada color se convierte en ganancia y en la comisión correcta, sin hojas de cálculo.',
      name: 'María Peña',
    },
    en: {
      industry: 'Salon and spa',
      role: 'Owner',
      result: 'Closed her accounting week in minutes, with commissions calculated by the platform.',
      quote:
        'I used to lose Saturday night reconciling commissions by hand. Now every cut and every color turns into profit and into the correct commission, with no spreadsheets.',
      name: 'María Peña',
    },
    metric: { value: '−6 h', labelEs: 'a la semana en cuadres', labelEn: 'per week on closings' },
  },
  {
    id: 'restaurant',
    es: {
      industry: 'Restaurante',
      role: 'Gerente de operaciones',
      result: 'Siguió facturando una noche de caída de internet, sin perder ninguna venta.',
      quote:
        'El sistema sigue vendiendo y la cocina sigue recibiendo comandas aunque se caiga el internet. Para nosotros eso dejó de ser un riesgo y pasó a ser el estándar.',
      name: 'Carlos Jiménez',
    },
    en: {
      industry: 'Restaurant',
      role: 'Operations manager',
      result: 'Kept invoicing during an internet outage night without losing a single sale.',
      quote:
        'The system keeps selling and the kitchen keeps receiving tickets even when the internet goes down. For us that stopped being a risk and became the standard.',
      name: 'Carlos Jiménez',
    },
    metric: { value: '100%', labelEs: 'ventas sin depender de internet', labelEn: 'sales with no internet dependency' },
  },
  {
    id: 'hospitality',
    es: {
      industry: 'Hotel boutique',
      role: 'Directora',
      result: 'Recepción y housekeeping sincronizados en tiempo real, sin radios ni listas impresas.',
      quote:
        'El huésped que llega temprano encuentra su habitación lista y el equipo sabe exactamente qué limpiar. La estadía se siente más fluida para todos.',
      name: 'Laura Rodríguez',
    },
    en: {
      industry: 'Boutique hotel',
      role: 'Director',
      result: 'Front desk and housekeeping synchronized in real time, with no radios or printed lists.',
      quote:
        'The early-arriving guest finds their room ready and the team knows exactly what to clean. The stay feels smoother for everyone.',
      name: 'Laura Rodríguez',
    },
    metric: { value: '0', labelEs: 'llamadas de radio por turno', labelEn: 'radio calls per shift' },
  },
]

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLang()

  const label = lang === 'es' ? 'Clientes' : 'Customers'
  const title = lang === 'es' ? 'Negocios que ya operan con Auron' : 'Businesses already running on Auron'
  const description = lang === 'es'
    ? 'Resultados reales de operaciones de servicio que usan nuestras plataformas.'
    : 'Real results from service operations using our platforms.'

  return (
    <Section id="customers">
      <SectionHeader label={label} title={title} description={description} />
      <div ref={ref} className="grid md:grid-cols-3 gap-6 md:gap-8">
        {cases.map((cs, i) => {
          const c = cs[lang]
          return (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col rounded-2xl border border-[var(--auron-card-border)] bg-[var(--auron-card-bg)] p-6 md:p-8 h-full"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: 'var(--auron-gradient-accent-subtle)' }}>
                <Quote className="w-5 h-5" style={{ color: 'var(--auron-accent-text)' }} />
              </div>
              <blockquote className="text-sm text-[var(--auron-text-secondary)] leading-relaxed flex-1">“{c.quote}”</blockquote>
              <div className="mt-6 pt-5 border-t border-[var(--auron-border-light)]">
                <div className="text-2xl font-bold tabular-nums" style={{ color: 'var(--auron-accent-text)' }}>
                  {cs.metric.value}
                </div>
                <div className="text-xs" style={{ color: 'var(--auron-text-tertiary)' }}>
                  {lang === 'es' ? cs.metric.labelEs : cs.metric.labelEn}
                </div>
                <div className="mt-3 flex items-center justify-between gap-2">
                  <div>
                    <div className="text-sm font-semibold text-[var(--auron-text)]">{c.name}</div>
                    <div className="text-xs" style={{ color: 'var(--auron-text-tertiary)' }}>
                      {c.role} · {c.industry}
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-xs leading-relaxed" style={{ color: 'var(--auron-text-secondary)' }}>
                  {c.result}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
