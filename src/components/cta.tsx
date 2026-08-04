import { useRef } from 'react'
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from './container'
import { Button } from './button'

export function CTA() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const yLeft = useTransform(scrollYProgress, [0, 1], [60, -60])
  const reduce = useReducedMotion()

  return (
    <section ref={ref} className="auron-noise relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'var(--auron-gradient-cta)' }} />
      <motion.div style={reduce ? undefined : { y: yLeft }} className="auron-glow-pulse absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full" aria-hidden>
        <div className="w-full h-full" style={{ background: 'var(--auron-accent)', opacity: 0.05, filter: 'blur(150px)' }} />
      </motion.div>
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--auron-text)] leading-[1.1]">
            Hablemos de tu operación
          </h2>
          <p className="mt-6 text-base sm:text-lg md:text-xl max-w-xl mx-auto" style={{ color: 'var(--auron-text-secondary)', lineHeight: 1.7 }}>
            Cuéntanos sobre tu negocio y conoce cómo las plataformas de Auron Software operan tu día a día,
            con facturación electrónica DGII e-CF nativa y sin depender de internet.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" as="a" href="/contact">
              Contáctanos <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="secondary" size="lg" as="a" href="/services">
              Ver Servicios
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
