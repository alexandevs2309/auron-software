import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Container } from './container'
import { SectionBg, type SectionVariant } from './section-bg'

interface SectionProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  id?: string
  dark?: boolean
  animate?: boolean
  pattern?: SectionVariant
}

export function Section({ children, className, containerClassName, id, dark, animate = true, pattern }: SectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id={id}
      ref={ref}
      className={cn('relative py-24 md:py-32 lg:py-40', dark && 'auron-dark bg-[var(--auron-bg)]', className)}
    >
      {pattern && <SectionBg variant={pattern} />}
      <Container className={cn(pattern && 'relative z-10', containerClassName)}>
        {animate ? (
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {children}
          </motion.div>
        ) : (
          children
        )}
      </Container>
    </section>
  )
}

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({ label, title, description, align = 'center', className }: SectionHeaderProps) {
  return (
    <div className={cn('max-w-3xl mb-16 md:mb-20 lg:mb-24', align === 'center' && 'mx-auto text-center', className)}>
      {label && (
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[var(--auron-accent-text)] mb-4 md:mb-5">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--auron-text)] leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 md:mt-6 text-base sm:text-lg text-[var(--auron-text-secondary)] leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}
