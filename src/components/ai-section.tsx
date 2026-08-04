import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BrainCircuit, TrendingUp, CalendarClock, Sparkles, ArrowRight } from 'lucide-react'
import { Section, SectionHeader } from './section'
import { Button } from './button'
import { useLang } from '@/lib/i18n'

const predicted = [40, 48, 44, 56, 52, 62, 58, 70, 66, 78, 74, 86]
const actual = [38, 46, 47, 52, 55, 60, 63, 67, 72, 75, 80, 84]

export function AISection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLang()

  const highlights = [
    {
      icon: TrendingUp,
      title: lang === 'es' ? 'Proyección de ganancias' : 'Profit projection',
      description: lang === 'es'
        ? 'Modelos ligeros que estiman el ingreso del próximo período a partir del historial real de tu negocio.'
        : 'Lightweight models that estimate next period revenue from your business real history.',
    },
    {
      icon: CalendarClock,
      title: lang === 'es' ? 'Carga laboral anticipada' : 'Workload forecast',
      description: lang === 'es'
        ? 'Anticipa semanas ocupadas o flojas para ajustar horarios, compras e inventario con tiempo.'
        : 'Anticipate busy or slow weeks to adjust schedules, purchases and inventory in advance.',
    },
    {
      icon: Sparkles,
      title: lang === 'es' ? 'Actualización automática' : 'Automatic updates',
      description: lang === 'es'
        ? 'Los modelos se re-entrenan solos cada semana con tus datos, sin intervención manual.'
        : 'Models retrain themselves weekly with your data, with no manual intervention.',
    },
  ]

  return (
    <Section id="ai">
      <SectionHeader
        label={lang === 'es' ? 'Inteligencia Artificial' : 'Artificial Intelligence'}
        title={lang === 'es' ? 'Tu negocio, un paso adelante' : 'Your business, one step ahead'}
        description={lang === 'es'
          ? 'En AURON Suite integramos inteligencia artificial ligera en cada Edition y en nuestros servicios para predecir ganancias, ventas y carga laboral — para que decidas con datos, no con corazonadas.'
          : 'AURON Suite embeds lightweight AI in every Edition and service to predict profits, sales and workload — so you decide with data, not hunches.'}
      />

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="space-y-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--auron-gradient-accent-subtle)' }}>
                <h.icon className="w-5.5 h-5.5" style={{ color: 'var(--auron-accent-text)' }} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[var(--auron-text)] mb-1">{h.title}</h3>
                <p className="text-sm text-[var(--auron-text-secondary)] leading-relaxed">{h.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-2xl border border-[var(--auron-card-border)] bg-[var(--auron-card-bg)] p-6 md:p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2">
                <BrainCircuit className="w-4 h-4" style={{ color: 'var(--auron-accent-text)' }} />
                <span className="text-sm font-semibold text-[var(--auron-text)]">
                  {lang === 'es' ? 'Predicción de ganancias' : 'Profit forecast'}
                </span>
              </div>
              <span className="text-xs text-[var(--auron-text-tertiary)] mt-1 block">
                {lang === 'es' ? 'Próximo período · estimado vs. real' : 'Next period · estimated vs. actual'}
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border" style={{ color: 'var(--auron-accent-text)', borderColor: 'var(--auron-border)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--auron-accent)' }} />
              {lang === 'es' ? 'Modelo en producción' : 'Model in production'}
            </span>
          </div>

          <div className="relative h-40">
            <div className="absolute inset-0 flex flex-col justify-between">
              {[0, 1, 2, 3].map((g) => (
                <div key={g} className="border-t border-dashed border-[var(--auron-border-light)]" />
              ))}
            </div>

            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="auron-ai-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--auron-accent)" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="var(--auron-accent)" stopOpacity="0" />
                </linearGradient>
              </defs>

              <motion.polygon
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                points={`0,100 ${actual
                  .map((v, i) => `${(i / (actual.length - 1)) * 100},${100 - v * 0.9}`)
                  .join(' ')} 100,100`}
                fill="url(#auron-ai-fill)"
              />

              <motion.polyline
                points={predicted
                  .map((v, i) => `${(i / (predicted.length - 1)) * 100},${100 - v * 0.9}`)
                  .join(' ')}
                fill="none"
                stroke="var(--auron-accent)"
                strokeWidth="0.6"
                strokeDasharray="3 2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.4, delay: 0.2, ease: 'easeInOut' }}
              />

              <motion.polyline
                points={actual
                  .map((v, i) => `${(i / (actual.length - 1)) * 100},${100 - v * 0.9}`)
                  .join(' ')}
                fill="none"
                stroke="var(--auron-gold)"
                strokeWidth="0.6"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.4, delay: 0.5, ease: 'easeInOut' }}
              />
            </svg>
          </div>

          <div className="mt-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-2 text-xs text-[var(--auron-text-secondary)]">
                <span className="w-4 h-0.5 rounded-full" style={{ background: 'var(--auron-gold)' }} />
                {lang === 'es' ? 'Real' : 'Actual'}
              </span>
              <span className="flex items-center gap-2 text-xs text-[var(--auron-text-secondary)]">
                <span className="w-4 h-0.5 rounded-full" style={{ background: 'var(--auron-accent)' }} />
                {lang === 'es' ? 'Predicción' : 'Forecast'}
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold" style={{ color: 'var(--auron-accent-text)' }}>
              <TrendingUp className="w-3.5 h-3.5" /> +14%
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 text-center"
      >
        <Button variant="secondary" size="md" as="a" href="/services#ai">
          {lang === 'es' ? 'Conocer el servicio de IA' : 'Learn about the AI service'} <ArrowRight className="w-4 h-4" />
        </Button>
      </motion.div>
    </Section>
  )
}
