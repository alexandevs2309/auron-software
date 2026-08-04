import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from './container'
import { Button } from './button'
import { SectionBg } from './section-bg'
import { HubMockup } from './hub-mockup'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 60])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const reduce = useReducedMotion()

  return (
    <section
      ref={ref}
      className="auron-noise relative min-h-[90vh] flex items-center overflow-hidden pt-20"
    >
      <motion.div aria-hidden className="absolute inset-0" style={reduce ? undefined : { y: yBg }}>
        <div className="absolute inset-0 bg-[image:var(--auron-gradient-1)]" />
        <SectionBg variant="waves" />
      </motion.div>

      <Container className="relative z-10">
        <motion.div style={reduce ? { opacity } : { y, opacity }} className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ color: 'var(--auron-text-tertiary)' }}
          >
            Auron Software · República Dominicana
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]"
            style={{ color: 'var(--auron-text)' }}
          >
            Plataformas de gestión
            <br />
            para negocios de servicio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-[var(--auron-text-secondary)]"
            style={{ lineHeight: 1.7 }}
          >
            Auron Software diseña y opera software empresarial para salones, restaurantes, clínicas
            y hoteles. Un núcleo compartido con facturación electrónica DGII e-CF nativa y operación
            local que no depende de internet.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="primary" size="lg" as="a" href="/products">
              Conocer las plataformas <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="lg" as="a" href="/contact">
              Contáctanos
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-16 md:mt-20 relative mx-auto max-w-5xl"
          >
            <div className="relative rounded-2xl border border-[var(--auron-card-border)] bg-[var(--auron-card-bg)] shadow-xl overflow-hidden">
              <HubMockup />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
