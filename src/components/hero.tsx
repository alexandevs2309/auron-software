import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
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
  const mx = useMotionValue(-9999)
  const my = useMotionValue(-9999)
  const sx = useSpring(mx, { stiffness: 70, damping: 20, mass: 0.6 })
  const sy = useSpring(my, { stiffness: 70, damping: 20, mass: 0.6 })

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduce) return
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set(e.clientX - rect.left)
    my.set(e.clientY - rect.top)
  }

  return (
    <section
      ref={ref}
      onMouseMove={onMouseMove}
      className="auron-noise relative min-h-[90vh] flex items-center overflow-hidden pt-20"
    >
      <motion.div aria-hidden className="absolute inset-0" style={reduce ? undefined : { y: yBg }}>
        <div className="absolute inset-0 bg-[image:var(--auron-gradient-1)]" />
        <SectionBg variant="waves" />
        <div className="auron-mesh-drift-reverse absolute bottom-1/4 -right-32 w-[30rem] h-[30rem] rounded-full" style={{ background: 'var(--auron-accent)', opacity: 0.06, filter: 'blur(130px)' }} />
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute z-0 rounded-full"
        style={{
          x: sx,
          y: sy,
          width: 640,
          height: 640,
          marginLeft: -320,
          marginTop: -320,
          background: 'radial-gradient(circle, var(--auron-spotlight-color) 0%, transparent 60%)',
        }}
      />

      <Container className="relative z-10">
        <motion.div style={reduce ? { opacity } : { y, opacity }} className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--auron-border-light)] bg-[var(--auron-bg-secondary)]"
            style={{ backdropFilter: 'blur(8px)' }}
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: 'var(--auron-accent-text)' }} />
            <span className="text-xs font-medium text-[var(--auron-text-secondary)]">
              Plataforma multi-producto · Hecho en República Dominicana
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight leading-[1.05]"
            style={{ color: 'var(--auron-text)' }}
          >
            La plataforma para
            <br />
            <span
              className="font-display italic"
              style={{ background: 'var(--auron-gradient-accent)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              negocios de servicio
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-[var(--auron-text-secondary)]"
            style={{ lineHeight: 1.7 }}
          >
            AURON Suite es la plataforma que agrupa múltiples Editions para negocios de servicio:
            <br />
            Beauty Edition para salones y spas (disponible ahora), más Hospitality, Health, Restaurant y Retail Editions en camino.
            <br />
            Un núcleo compartido, facturación DGII e-CF nativa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="primary" size="lg" as="a" href="/products">
              Ver todas las Editions <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="lg" as="a" href="/contact">
              Contacto
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-16 md:mt-20 relative mx-auto max-w-5xl"
          >
            <div aria-hidden className="absolute -inset-x-10 top-10 h-48 rounded-full blur-3xl" style={{ background: 'var(--auron-accent)', opacity: 0.14 }} />
            <div className="relative rounded-2xl border border-[var(--auron-card-border)] bg-[var(--auron-card-bg)] shadow-xl overflow-hidden">
              <HubMockup />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
