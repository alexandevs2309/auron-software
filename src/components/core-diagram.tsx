import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Section, SectionHeader } from './section'

const nodes = [
  { x: 150, y: 100, code: 'BE', name: 'Beauty Edition', status: 'En operación', statusColor: 'var(--auron-accent)' },
  { x: 650, y: 100, code: 'RE', name: 'Restaurant Edition', status: 'En desarrollo', statusColor: 'var(--auron-gold)' },
  { x: 150, y: 320, code: 'HO', name: 'Hospitality Edition', status: 'En desarrollo', statusColor: 'var(--auron-gold)' },
  { x: 650, y: 320, code: 'ME', name: 'Medical Edition', status: 'Planeado', statusColor: 'var(--auron-badge-planned)' },
]

export function CoreDiagram() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <Section id="architecture">
      <SectionHeader
        label="Plataforma"
        title="Un núcleo, todas las Editions"
        description="Cada Edition de AURON Suite nace de la misma plataforma compartida: autenticación, APIs, facturación DGII e-CF y seguridad en común."
      />
      <div ref={ref} className="relative">
        <div className="auron-dots absolute inset-0 rounded-3xl opacity-40" aria-hidden />
        <svg viewBox="0 0 800 440" className="relative w-full h-auto" role="img" aria-label="Diagrama del núcleo de AURON Suite y sus Editions">
          <defs>
            <linearGradient id="auron-core-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1A56DB" />
              <stop offset="100%" stopColor="#123F9E" />
            </linearGradient>
          </defs>

          {nodes.map((n, i) => (
            <motion.line
              key={`line-${n.code}`}
              x1={400}
              y1={220}
              x2={n.x}
              y2={n.y}
              stroke="var(--auron-border)"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.9, delay: 0.3 + i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            />
          ))}

          <motion.circle
            cx={400}
            cy={220}
            r={70}
            fill="none"
            stroke="var(--auron-accent)"
            strokeOpacity="0.25"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ transformOrigin: '400px 220px' }}
          />

          <motion.g
            initial={{ opacity: 0, scale: 0.7 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{ transformOrigin: '400px 220px' }}
          >
            <circle cx={400} cy={220} r={56} fill="url(#auron-core-grad)" />
            <text x={400} y={214} textAnchor="middle" fill="#ffffff" fontWeight="600" fontSize="17" fontFamily="inherit">Auron Core</text>
            <text x={400} y={234} textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="11" fontFamily="inherit">Núcleo compartido</text>
          </motion.g>

          {nodes.map((n, i) => (
            <motion.g
              key={n.code}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <circle cx={n.x} cy={n.y} r={30} fill="var(--auron-card-bg)" stroke="var(--auron-border)" strokeWidth="1.5" />
              <circle cx={n.x} cy={n.y} r={30} fill="none" stroke="var(--auron-accent)" strokeOpacity="0.12" strokeWidth="8" />
              <text x={n.x} y={n.y + 5} textAnchor="middle" fill="var(--auron-text)" fontWeight="600" fontSize="15" fontFamily="inherit">{n.code}</text>
              <text x={n.x} y={n.y + 56} textAnchor="middle" fill="var(--auron-text)" fontWeight="500" fontSize="13" fontFamily="inherit">{n.name}</text>
              <text x={n.x} y={n.y + 74} textAnchor="middle" fill={n.statusColor} fontSize="10.5" fontFamily="inherit">{n.status}</text>
            </motion.g>
          ))}
        </svg>
      </div>
    </Section>
  )
}
