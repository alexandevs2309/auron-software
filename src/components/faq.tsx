import { ChevronDown } from 'lucide-react'
import { Section, SectionHeader } from './section'

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: '¿Qué es Auron Software?',
    answer:
      'Auron Software diseña y opera plataformas de gestión para negocios de servicio en República Dominicana: salones y barberías, restaurantes, clínicas y hoteles. Nuestros productos cubren agendamiento, clientes, inventario, ventas, comisiones y facturación.',
  },
  {
    question: '¿Cuánto cuesta cada producto?',
    answer:
      'Cada producto de Auron tiene su propia landing page con su plan, precio y condiciones. En esta web presentamos la empresa; para ver el precio de un producto concreto visita su página de producto y agenda una demostración.',
  },
  {
    question: '¿Incluye facturación electrónica DGII?',
    answer:
      'Sí. La facturación electrónica comprobante fiscal (e-CF) está integrada de forma nativa en nuestra plataforma, con soporte para los esquemas de la DGII. Es una de las razones por las que Auron Software nace en República Dominicana.',
  },
  {
    question: '¿Funciona sin internet?',
    answer:
      'Sí. El punto de venta (POS) funciona localmente en la computadora de tu negocio, por lo que puedes seguir vendiendo y operando aunque se caiga el internet. La conexión solo es necesaria para enviar los comprobantes a la DGII y para los respaldos.',
  },
  {
    question: '¿Cómo pruebo un producto?',
    answer:
      'El primer paso es agendar una demostración: te mostramos el producto con datos de tu tipo de negocio, y luego defines el plan, la fecha de arranque y la migración.',
  },
  {
    question: '¿Puedo usarlo en varios negocios o sucursales?',
    answer:
      'Depende del producto. Los productos de Auron están pensados para crecer contigo; consulta la landing page del producto que te interesa para ver si soporta múltiples negocios, sucursales o acceso por API.',
  },
  {
    question: '¿Ofrecen desarrollo a la medida?',
    answer:
      'Sí. Además de nuestros productos, ofrecemos servicios de desarrollo a la medida, integración de sistemas y consultoría tecnológica. Puedes ver los detalles en nuestra página de servicios.',
  },
]

export function Faq() {
  return (
    <Section id="faq">
      <SectionHeader
        label="Preguntas frecuentes"
        title="Resolvemos tus dudas"
        description="Respuestas a las preguntas más comunes sobre Auron Software y sus productos. ¿Tienes otra duda? Escríbenos por el formulario de contacto."
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
