import { useRef, useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Calendar, ArrowLeft } from 'lucide-react'
import { Container } from '../components/container'
import { Seo } from '../components/seo'
import { CTA } from '../components/cta'
import { getPostBySlug } from '../config/blog'
import { useLang } from '../lib/i18n'

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const { lang } = useLang()
  const post = slug ? getPostBySlug(slug) : undefined

  const contentRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(contentRef, { once: true, margin: '-60px' })

  useEffect(() => {
    if (post) window.scrollTo(0, 0)
  }, [post, slug])

  if (!post) return <Navigate to="/blog" replace />

  const c = post[lang]
  const dateLabel = lang === 'es' ? post.dateLabelES : post.dateLabelEN
  const category = lang === 'es' ? post.categoryES : post.categoryEN
  const backLabel = lang === 'es' ? 'Volver al blog' : 'Back to blog'

  return (
    <>
      <Seo
        title={`${c.title} — Auron Software`}
        description={c.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
      />
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'var(--auron-gradient-1)' }} />
        <Container className="relative z-10">
          <Link
            to="/blog"
            className="auron-focus-ring inline-flex items-center gap-2 text-sm font-medium mb-8"
            style={{ color: 'var(--auron-accent-text)' }}
          >
            <ArrowLeft className="w-4 h-4" /> {backLabel}
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border border-[var(--auron-border)]" style={{ color: 'var(--auron-text-tertiary)' }}>
                {category}
              </span>
              <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--auron-text-tertiary)' }}>
                <Calendar className="w-3 h-3" /> {dateLabel}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--auron-text)] leading-[1.1]">
              {c.title}
            </h1>
            <p className="mt-5 text-lg md:text-xl text-[var(--auron-text-secondary)]" style={{ lineHeight: 1.7 }}>
              {c.excerpt}
            </p>
            <p className="mt-4 text-sm" style={{ color: 'var(--auron-text-tertiary)' }}>
              {post.author}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div ref={contentRef} className="max-w-3xl mx-auto space-y-12">
            {c.content.map((section, i) => (
              <motion.div
                key={section.heading}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <h2 className="text-2xl font-semibold tracking-tight text-[var(--auron-text)]">{section.heading}</h2>
                <p className="mt-4 text-base text-[var(--auron-text-secondary)] leading-relaxed">{section.body}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  )
}
