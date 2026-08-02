import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Store, UtensilsCrossed, HeartPulse, Hotel } from 'lucide-react'
import { Section, SectionHeader } from './section'
import { SpotlightCard } from './spotlight-card'

const industries = [
  { icon: Store, name: 'Beauty Edition', tagline: 'Salones y spas' },
  { icon: UtensilsCrossed, name: 'Restaurant Edition', tagline: 'Restaurantes' },
  { icon: HeartPulse, name: 'Medical Edition', tagline: 'Clínicas y hospitales' },
  { icon: Hotel, name: 'Hospitality Edition', tagline: 'Hoteles y resorts' },
]

export function Industries() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <Section id="industries">
      <SectionHeader
        label="Editions"
        title="Una Edition para cada rubro"
        description="Beauty Edition para salones y spas, Restaurant Edition para restaurantes, Medical Edition para clínicas y Hospitality Edition para hoteles."
      />
      <div ref={ref} className="grid grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="h-full"
          >
            <SpotlightCard lift={false} className="flex flex-col items-center text-center p-6 md:p-8 h-full">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110" style={{ background: 'var(--auron-gradient-accent-subtle)' }}>
                <ind.icon className="w-6 h-6" style={{ color: 'var(--auron-accent-text)' }} />
              </div>
              <span className="text-sm font-semibold text-[var(--auron-text)]">{ind.name}</span>
              <span className="text-xs text-[var(--auron-text-tertiary)] mt-1">{ind.tagline}</span>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
