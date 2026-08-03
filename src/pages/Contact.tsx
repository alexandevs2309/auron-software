import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Clock } from 'lucide-react'
import { Container } from '../components/container'
import { Button } from '../components/button'
import { Seo } from '../components/seo'

const info = [
  { icon: Mail, label: 'Email', value: 'ventas@auronsuite.com' },
  { icon: Clock, label: 'Horario', value: 'Lunes a viernes, 9:00 AM – 6:00 PM' },
]

const WEB3FORMS_ACCESS_KEY = '43a2aad1-05e8-4bf6-892f-1895859bde32'

export function ContactPage() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const botRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          botcheck: botRef.current?.value ?? '',
          subject: subject || 'Contacto desde el sitio',
          from_name: `${firstName} ${lastName}`.trim() || 'Sin nombre',
          email,
          message,
        }),
      })
      const data = await res.json()
      if (!data.success) throw new Error('web3forms_error')
      setFirstName('')
      setLastName('')
      setEmail('')
      setSubject('')
      setMessage('')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Seo
        title="Contacto — Agenda una demostración | Auron Software"
        description="Contáctanos para agendar una demostración de nuestros productos o conversar sobre un proyecto a la medida. Respondemos en 24 horas."
        path="/contact"
      />
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'var(--auron-gradient-1)' }} />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[var(--auron-text)] leading-[1.05]">Contacto</h1>
            <p className="mt-6 text-lg md:text-xl max-w-xl text-[var(--auron-text-secondary)]" style={{ lineHeight: 1.7 }}>
              ¿Tienes un proyecto en mente? Cuéntanos y te responderemos dentro de 24 horas.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div ref={ref} className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            <div className="lg:col-span-2 space-y-8">
              {info.map((item, i) => (
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
                    <label className="block text-sm font-medium text-[var(--auron-text)] mb-2">Nombre</label>
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl border border-[var(--auron-border-input)] bg-[var(--auron-card-bg)] text-sm text-[var(--auron-text)] placeholder:text-[var(--auron-text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--auron-accent)] focus:border-transparent"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--auron-text)] mb-2">Apellido</label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl border border-[var(--auron-border-input)] bg-[var(--auron-card-bg)] text-sm text-[var(--auron-text)] placeholder:text-[var(--auron-text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--auron-accent)] focus:border-transparent"
                      placeholder="Tu apellido"
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
                  <label className="block text-sm font-medium text-[var(--auron-text)] mb-2">Asunto</label>
                  <select
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl border border-[var(--auron-border-input)] bg-[var(--auron-card-bg)] text-sm text-[var(--auron-text)] focus:outline-none focus:ring-2 focus:ring-[var(--auron-accent)] focus:border-transparent"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="Consulta de producto">Consulta de producto</option>
                    <option value="Desarrollo a la medida">Desarrollo a la medida</option>
                    <option value="Alianzas">Alianzas</option>
                    <option value="Soporte técnico">Soporte técnico</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--auron-text)] mb-2">Mensaje</label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--auron-border-input)] bg-[var(--auron-card-bg)] text-sm text-[var(--auron-text)] placeholder:text-[var(--auron-text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--auron-accent)] focus:border-transparent resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>
                {status === 'success' && (
                  <div
                    role="status"
                    className="rounded-xl border border-[var(--auron-accent)]/30 bg-[var(--auron-accent)]/10 px-4 py-3 text-sm font-medium text-[var(--auron-accent-text)]"
                  >
                    ¡Mensaje enviado! Te responderemos en menos de 24 horas.
                  </div>
                )}
                {status === 'error' && (
                  <div
                    role="alert"
                    className="rounded-xl border border-[var(--auron-warm-300)] bg-[var(--auron-warm-100)] px-4 py-3 text-sm text-[var(--auron-text)]"
                  >
                    Hubo un error al enviar tu mensaje. Intenta de nuevo o escríbenos directo a{' '}
                    <span className="font-medium">ventas@auronsuite.com</span>.
                  </div>
                )}
                <Button variant="primary" size="lg" className="w-full sm:w-auto" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
                </Button>
                <p className="text-xs text-[var(--auron-text-tertiary)]">
                  Al enviar, tu mensaje llega directo a ventas@auronsuite.com. Respondemos en menos de 24 horas.
                </p>
              </form>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  )
}
