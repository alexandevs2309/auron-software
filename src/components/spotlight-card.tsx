import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SpotlightCardProps {
  children: React.ReactNode
  className?: string
  /** Tamaño del halo radial que sigue al cursor (px). */
  spotlightSize?: number
  /** Color del halo con canal alfa, ej. rgba(26, 86, 219, 0.12). */
  spotlightColor?: string
  /** Levantar la tarjeta al hacer hover. */
  lift?: boolean
  /** Inclinación 3D que sigue al cursor. */
  tilt?: boolean
  /** Máxima inclinación 3D en grados. */
  maxTilt?: number
}

export function SpotlightCard({
  children,
  className,
  spotlightSize = 360,
  spotlightColor = 'var(--auron-spotlight-color)',
  lift = true,
  tilt = true,
  maxTilt = 5,
}: SpotlightCardProps) {
  const reduce = useReducedMotion()
  const mx = useMotionValue(-9999)
  const my = useMotionValue(-9999)
  const tx = useMotionValue(0)
  const ty = useMotionValue(0)

  const sx = useSpring(mx, { stiffness: 140, damping: 24, mass: 0.4 })
  const sy = useSpring(my, { stiffness: 140, damping: 24, mass: 0.4 })
  const rx = useSpring(ty, { stiffness: 160, damping: 22, mass: 0.4 })
  const ry = useSpring(tx, { stiffness: 160, damping: 22, mass: 0.4 })

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    if (!reduce) {
      mx.set(e.clientX - rect.left)
      my.set(e.clientY - rect.top)
    }
    if (tilt && !reduce) {
      tx.set(((e.clientX - rect.left) / rect.width - 0.5) * maxTilt)
      ty.set(-((e.clientY - rect.top) / rect.height - 0.5) * maxTilt)
    }
  }

  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.boxShadow = 'none'
    mx.set(-9999)
    my.set(-9999)
    tx.set(0)
    ty.set(0)
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--auron-glow)' }}
      onMouseLeave={onMouseLeave}
      whileHover={lift && !reduce ? { y: -3 } : undefined}
      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      style={tilt && !reduce ? { rotateX: rx, rotateY: ry, transformPerspective: 900 } : undefined}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-[var(--auron-card-border)] bg-[var(--auron-card-bg)]',
        'transition-[box-shadow,border-color] duration-300',
        'hover:border-[var(--auron-accent)]/25',
        className,
      )}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute z-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          x: sx,
          y: sy,
          width: spotlightSize,
          height: spotlightSize,
          marginLeft: -spotlightSize / 2,
          marginTop: -spotlightSize / 2,
          background: `radial-gradient(circle, ${spotlightColor} 0%, transparent 65%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
