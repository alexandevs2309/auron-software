import { ChevronDown } from 'lucide-react'
import { Section, SectionHeader } from './section'
import { useLang } from '@/lib/i18n'

export function Faq() {
  const { t } = useLang()

  const faqs = [1, 2, 3, 4, 5, 6, 7].map((n) => ({
    question: t(`faq.q${n}`),
    answer: t(`faq.a${n}`),
  }))

  return (
    <Section id="faq">
      <SectionHeader
        label={t('faq.label')}
        title={t('faq.title')}
        description={t('faq.description')}
      />

      <div className="max-w-3xl mx-auto divide-y divide-[var(--auron-card-border)] rounded-2xl border border-[var(--auron-card-border)] bg-[var(--auron-card-bg)] px-6 md:px-8">
        {faqs.map((item) => (
          <details key={item.question} className="group py-5">
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none select-none">
              <h3 className="text-base md:text-lg font-semibold text-[var(--auron-text)] leading-snug">{item.question}</h3>
              <ChevronDown className="w-5 h-5 shrink-0 text-[var(--auron-text-tertiary)] transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-sm md:text-base text-[var(--auron-text-secondary)] leading-relaxed">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
