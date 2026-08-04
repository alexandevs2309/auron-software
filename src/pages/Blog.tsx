import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import { Container } from '../components/container'
import { Seo } from '../components/seo'
import { BLOG_POSTS } from '../config/blog'
import { useLang } from '../lib/i18n'

export function BlogPage() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const { lang, t } = useLang()

  const seoTitle = lang === 'es'
    ? 'Blog — Auron Software'
    : 'Blog — Auron Software'
  const seoDesc = lang === 'es'
    ? 'Ideas, historias y novedades del equipo de Auron Software sobre tecnología para negocios de servicio en República Dominicana.'
    : 'Ideas, stories and news from the Auron Software team about technology for service businesses in the Dominican Republic.'

  return (
    <>
      <Seo
        title={seoTitle}
        description={seoDesc}
        path="/blog"
      />
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'var(--auron-gradient-1)' }} />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[var(--auron-text)] leading-[1.05]">
              {t('nav.blog')}
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-xl text-[var(--auron-text-secondary)]" style={{ lineHeight: 1.7 }}>
              {lang === 'es'
                ? 'Ideas, historias y novedades del equipo de Auron.'
                : 'Ideas, stories and news from the Auron team.'}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {BLOG_POSTS.map((post, i) => {
              const c = post[lang]
              return (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group rounded-2xl border border-[var(--auron-card-border)] bg-[var(--auron-card-bg)] p-6 md:p-8"
                  style={{ transition: 'box-shadow 0.3s ease, transform 0.3s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--auron-glow)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <Link to={`/blog/${post.slug}`} className="auron-focus-ring block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--auron-accent)] rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border border-[var(--auron-border)]" style={{ color: 'var(--auron-text-tertiary)' }}>
                        {lang === 'es' ? post.categoryES : post.categoryEN}
                      </span>
                      <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--auron-text-tertiary)' }}>
                        <Calendar className="w-3 h-3" />
                        {lang === 'es' ? post.dateLabelES : post.dateLabelEN}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--auron-text)] leading-snug mb-3">{c.title}</h3>
                    <p className="text-sm text-[var(--auron-text-secondary)] leading-relaxed">{c.excerpt}</p>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-xs" style={{ color: 'var(--auron-text-tertiary)' }}>
                        {post.author}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm font-medium transition-colors" style={{ color: 'var(--auron-accent-text)' }}>
                        {lang === 'es' ? 'Leer artículo' : 'Read article'} <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              )
            })}
          </div>
        </Container>
      </section>
    </>
  )
}
