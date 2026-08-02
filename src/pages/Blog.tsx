import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { Container } from '../components/container'
import { Seo } from '../components/seo'

const posts = [
  { title: 'El futuro de la tecnología en restaurantes en 2026', excerpt: 'Cómo la IA, la automatización y las plataformas unificadas están transformando la industria restaurantera.', date: '15 de enero de 2026', category: 'Industria', author: 'Equipo Auron' },
  { title: 'Cómo construimos software empresarial que perdura', excerpt: 'Nuestros principios de ingeniería para construir sistemas de software escalables y mantenibles.', date: '8 de enero de 2026', category: 'Ingeniería', author: 'Equipo Auron' },
  { title: 'Por qué tu negocio necesita un ecosistema de software unificado', excerpt: 'Los costos ocultos de usar herramientas desconectadas y cómo una plataforma unificada los resuelve.', date: '20 de diciembre de 2025', category: 'Negocio', author: 'Equipo Auron' },
  { title: 'Guía de transformación digital para proveedores de salud', excerpt: 'Pasos prácticos para pasar de operaciones en papel a flujos de trabajo digitales modernos.', date: '12 de diciembre de 2025', category: 'Salud', author: 'Equipo Auron' },
  { title: 'Cómo construimos Auron Suite: un SaaS multinegocio para salones', excerpt: 'De Django y Angular a las ganancias por período de pago — las decisiones detrás de la plataforma.', date: '28 de noviembre de 2025', category: 'Ingeniería', author: 'Equipo Auron' },
  { title: 'El auge de los hoteles inteligentes: tecnología en la hospitalidad', excerpt: 'Cómo los hoteles usan la tecnología para mejorar la experiencia del huésped y optimizar las operaciones.', date: '15 de noviembre de 2025', category: 'Hospitalidad', author: 'Equipo Auron' },
]

export function BlogPage() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <>
      <Seo
        title="Blog — Auron Software"
        description="Ideas, historias y novedades del equipo de Auron Software sobre tecnología para negocios de servicio en República Dominicana."
        path="/blog"
      />
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'var(--auron-gradient-1)' }} />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[var(--auron-text)] leading-[1.05]">Blog</h1>
            <p className="mt-6 text-lg md:text-xl max-w-xl text-[var(--auron-text-secondary)]" style={{ lineHeight: 1.7 }}>
              Ideas, historias y novedades del equipo de Auron.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-2xl border border-[var(--auron-card-border)] bg-[var(--auron-card-bg)] p-6 md:p-8"
                style={{ transition: 'box-shadow 0.3s ease, transform 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--auron-glow)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border border-[var(--auron-border)]" style={{ color: 'var(--auron-text-tertiary)' }}>
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--auron-text-tertiary)' }}>
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[var(--auron-text)] leading-snug mb-3">{post.title}</h3>
                <p className="text-sm text-[var(--auron-text-secondary)] leading-relaxed">{post.excerpt}</p>
                <div className="mt-6 text-xs" style={{ color: 'var(--auron-text-tertiary)' }}>
                  {post.author}
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
