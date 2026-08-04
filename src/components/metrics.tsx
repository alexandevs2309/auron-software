import { useEffect, useRef } from 'react'
import { motion, useInView, animate, useReducedMotion } from 'framer-motion'
import { Section } from './section'
import { useLang } from '@/lib/i18n'

function MetricValue({ value, active, delay }: { value: string; active: boolean; delay: number }) {
  const numRef = useRef<HTMLSpanElement>(null)
  const match = value.match(/^(\d+)(.*)$/)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!active || !match || !numRef.current) return
    if (reduce) {
      numRef.current.textContent = match[1]
      return
    }
    const controls = animate(0, Number(match[1]), {
      duration: 1.3,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: v => {
        if (numRef.current) numRef.current.textContent = String(Math.round(v))
      },
    })
    return () => controls.stop()
  }, [active, match, delay, reduce])

  if (!match) {
    return (
      <motion.span
        initial={{ opacity: 0, y: 14 }}
        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
        transition={{ duration: 0.5, delay }}
        className="inline-block"
      >
        {value}
      </motion.span>
    )
  }

  return (
    <span className="tabular-nums">
      <span ref={numRef}>0</span>
      <span>{match[2]}</span>
    </span>
  )
}

export function Metrics() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const { t } = useLang()

  const metrics = [
    { value: '100%', label: t('metrics.compliance') },
    { value: '0', label: t('metrics.offline') },
    { value: 'RD', label: t('metrics.local') },
    { value: 'e-CF', label: t('metrics.native') },
  ]

  return (
    <Section className="py-16 md:py-20">
      <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold" style={{ color: 'var(--auron-accent-text)' }}>
              <MetricValue value={m.value} active={isInView} delay={0.2 + i * 0.12} />
            </div>
            <div className="text-sm text-[var(--auron-text-secondary)] mt-1">{m.label}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
