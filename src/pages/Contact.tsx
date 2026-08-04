import { useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Mail, Clock } from 'lucide-react'
import { Container } from '../components/container'
import { Button } from '../components/button'
import { Seo } from '../components/seo'
import { useLang } from '../lib/i18n'

const CONTACT_ENDPOINT = 'https://api.auronsuite.com/api/settings/contact/presentation/'

const baseSubjects: { value: string; es: string; en: string }[] = [
  { value: 'Consulta de producto', es: 'Consulta de producto', en: 'Product inquiry' },
  { value: 'Desarrollo a la medida', es: 'Desarrollo a la medida', en: 'Custom development' },
  { value: 'Alianzas', es: 'Alianzas', en: 'Partnerships' },
  { value: 'Soporte técnico', es: 'Soporte técnico', en: 'Technical support' },
  { value: 'Otro', es: 'Otro', en: 'Other' },
]

type SubmitStatus = 'idle' | 'sending' | 'success' | 'rateLimited' | 'error'

export function ContactPage() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLang()
  const { search } = useLocation()

  const initialSubject = (() => {
    const s = new URLSearchParams(search).get('subject')
    return s ? s.trim() : ''
  })()

  const subjectOptions = useMemo(() => {
    const custom = initialSubject && !baseSubjects.some((b) => b.value === initialSubject)
      ? [{ value: initialSubject, label: initialSubject }]
      : []
    return [...custom, ...baseSubjects.map((b) => ({ value: b.value, label: b[lang] }))]
  }, [initialSubject, lang])

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState(initialSubject)
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const botRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`.trim() || (lang === 'es' ? 'Sin nombre' : 'No name'),
          email,
          message: subject ? `Asunto: ${subject}\n\n${message}` : message,
          website: botRef.current?.value ?? '',
        }),
      })
      if (res.status === 429) throw new Error('rate_limited')
      if (!res.ok) throw new Error('contact_error')
      setFirstName('')
      setLastName('')
      setEmail('')
      setSubject('')
      setMessage('')
      setStatus('success')
    } catch (err) {
      const isRateLimited = err instanceof Error && err.message === 'rate_limited'
      if (isRateLimited) {
        setStatus('rateLimited')
        return
      }
      setStatus('error')
      const body = encodeURIComponent(
        (lang === 'es'
          ? `Hola, mi nombre es ${firstName} ${lastName}.\n\nAsunto: ${subject || 'Consulta'}\n\n${message}`
          : `Hello, my name is ${firstName} ${lastName}.\n\nSubject: ${subject || 'Inquiry'}\n\n${message}`),
      )
      window.location.href = `mailto:ventas@auronsuite.com?subject=${encodeURIComponent(subject || 'Contacto')}&body=${body}`
    }
  }

  return (
    <>
      <Seo
        title={lang === 'es' ? 'Contacto — Auron Software' : 'Contact — Auron Software'}
        description={lang === 'es'
          ? 'Contáctanos para conocer las plataformas de Auron Software, hacer una consulta de producto o conversar sobre un proyecto a la medida. Respondemos en 24 horas.'
          : 'Contact us to learn about Auron Software platforms, ask about a product or discuss a custom project. We reply within 24 hours.'}
        path="/contact"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: lang === 'es' ? 'Contacto' : 'Contact',
          url: 'https://auronsuite.com/contact',
          mainEntity: {
            '@type': 'Organization',
            name: 'Auron Software EIRL',
            email: 'ventas@auronsuite.com',
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'sales',
              email: 'ventas@auronsuite.com',
              availableLanguage: ['es', 'en'],
            },
          },
        }}
      />
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'var(--auron-gradient-1)' }} />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[var(--auron-text)] leading-[1.05]">
              {lang === 'es' ? 'Contacto' : 'Contact'}
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-xl text-[var(--auron-text-secondary)]" style={{ lineHeight: 1.7 }}>
              {lang === 'es'
                ? '¿Tienes un proyecto en mente? Cuéntanos y te responderemos dentro de 24 horas.'
                : 'Do you have a project in mind? Tell us about it and we will reply within 24 hours.'}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div ref={ref} className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            <div className="lg:col-span-2 space-y-8">
              {[
                { icon: Mail, label: lang === 'es' ? 'Email' : 'Email', value: 'ventas@auronsuite.com' },
                { icon: Clock, label: lang === 'es' ? 'Horario' : 'Hours', value: lang === 'es' ? 'Lunes a viernes, 9:00 AM – 6:00 PM' : 'Monday to Friday, 9:00 AM – 6:00 PM' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--auron-gradient-accent-subtle)' }}>
                    <item.icon className="w-5 h-5" style={{ color: 'var(--auron-accent-text)' }} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: 'var(--auron-text-tertiary)' }}>{item.label}</div>
                    <div className="text-sm text-[var(--auron-text)]">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                <input ref={botRef} type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--auron-text)] mb-2">{lang === 'es' ? 'Nombre' : 'First name'}</label>
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl border border-[var(--auron-border-input)] bg-[var(--auron-card-bg)] text-sm text-[var(--auron-text)] placeholder:text-[var(--auron-text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--auron-accent)] focus:border-transparent"
                      placeholder={lang === 'es' ? 'Tu nombre' : 'Your name'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--auron-text)] mb-2">{lang === 'es' ? 'Apellido' : 'Last name'}</label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl border border-[var(--auron-border-input)] bg-[var(--auron-card-bg)] text-sm text-[var(--auron-text)] placeholder:text-[var(--auron-text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--auron-accent)] focus:border-transparent"
                      placeholder={lang === 'es' ? 'Tu apellido' : 'Your last name'}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--auron-text)] mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl border border-[var(--auron-border-input)] bg-[var(--auron-card-bg)] text-sm text-[var(--auron-text)] placeholder:text-[var(--auron-text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--auron-accent)] focus:border-transparent"
                    placeholder="nombre@empresa.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--auron-text)] mb-2">{lang === 'es' ? 'Asunto' : 'Subject'}</label>
                  <select
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl border border-[var(--auron-border-input)] bg-[var(--auron-card-bg)] text-sm text-[var(--auron-text)] focus:outline-none focus:ring-2 focus:ring-[var(--auron-accent)] focus:border-transparent"
                  >
                    <option value="">{lang === 'es' ? 'Selecciona un asunto' : 'Select a subject'}</option>
                    {subjectOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--auron-text)] mb-2">{lang === 'es' ? 'Mensaje' : 'Message'}</label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--auron-border-input)] bg-[var(--auron-card-bg)] text-sm text-[var(--auron-text)] placeholder:text-[var(--auron-text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--auron-accent)] focus:border-transparent resize-none"
                    placeholder={lang === 'es' ? 'Cuéntanos sobre tu proyecto...' : 'Tell us about your project...'}
                  />
                </div>
                {status === 'success' && (
                  <div
                    role="status"
                    className="rounded-xl border border-[var(--auron-accent)]/30 bg-[var(--auron-accent)]/10 px-4 py-3 text-sm font-medium text-[var(--auron-accent-text)]"
                  >
                    {lang === 'es'
                      ? '¡Mensaje enviado! Te responderemos en menos de 24 horas.'
                      : 'Message sent! We will reply within 24 hours.'}
                  </div>
                )}
                {status === 'rateLimited' && (
                  <div
                    role="alert"
                    className="rounded-xl border border-[var(--auron-warm-300)] bg-[var(--auron-warm-100)] px-4 py-3 text-sm text-[var(--auron-text)]"
                  >
                    {lang === 'es'
                      ? 'Enviaste varios mensajes en poco tiempo. Espera unos minutos e intenta de nuevo.'
                      : 'You sent several messages in a short time. Wait a few minutes and try again.'}
                  </div>
                )}
                {status === 'error' && (
                  <div
                    role="alert"
                    className="rounded-xl border border-[var(--auron-warm-300)] bg-[var(--auron-warm-100)] px-4 py-3 text-sm text-[var(--auron-text)]"
                  >
                    {lang === 'es'
                      ? 'Hubo un error al enviar tu mensaje. Se abrió tu correo con el mensaje listo; envía el correo o escribe directo a'
                      : 'There was an error sending your message. Your email app opened with the message ready; send it or write directly to'}{' '}
                    <span className="font-medium">ventas@auronsuite.com</span>.
                  </div>
                )}
                <Button variant="primary" size="lg" className="w-full sm:w-auto" type="submit" disabled={status === 'sending'}>
                  {status === 'sending'
                    ? (lang === 'es' ? 'Enviando…' : 'Sending…')
                    : (lang === 'es' ? 'Enviar mensaje' : 'Send message')}
                </Button>
                <p className="text-xs text-[var(--auron-text-tertiary)]">
                  {lang === 'es'
                    ? 'Al enviar, tu mensaje llega directo a ventas@auronsuite.com. Respondemos en menos de 24 horas.'
                    : 'When you send, your message goes straight to ventas@auronsuite.com. We reply within 24 hours.'}
                </p>
              </form>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  )
}
