import { Hero } from '../components/hero'
import { Metrics } from '../components/metrics'
import { ProductsSection } from '../components/products-section'
import { AISection } from '../components/ai-section'
import { Mission } from '../components/mission'
import { CoreDiagram } from '../components/core-diagram'
import { ServicesSection } from '../components/services-section'
import { Testimonials } from '../components/testimonials'
import { Faq } from '../components/faq'
import { CTA } from '../components/cta'
import { Seo } from '../components/seo'

export function HomePage() {
  return (
    <>
      <Seo
        title="AURON Suite — Plataforma de software para negocios de servicio"
        description="AURON Suite agrupa todos los productos de Auron Software: Beauty Edition para salones y spas, Restaurant OS para restaurantes, Health para clínicas y Hospitality para hoteles. Un núcleo compartido, facturación DGII e-CF nativa."
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: '¿Qué es AURON Suite?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'AURON Suite es la plataforma y ecosistema de soluciones de software para negocios de servicio en República Dominicana. Agrupa múltiples Editions verticales — Beauty, Restaurant, Hospitality, Health y Retail — sobre un núcleo compartido con facturación DGII e-CF nativa.',
              },
            },
            {
              '@type': 'Question',
              name: '¿Incluye facturación electrónica DGII?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sí. La facturación electrónica comprobante fiscal (e-CF) está integrada de forma nativa, con soporte para los esquemas de la DGII.',
              },
            },
            {
              '@type': 'Question',
              name: '¿Funciona sin internet?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sí. El punto de venta (POS) funciona localmente, por lo que puedes seguir vendiendo aunque se caiga el internet. La conexión solo es necesaria para enviar comprobantes a la DGII y para los respaldos.',
              },
            },
          ],
        }}
      />
      <Hero />
      <Metrics />
      <ProductsSection />
      <AISection />
      <Mission />
      <CoreDiagram />
      <ServicesSection />
      <Testimonials />
      <Faq />
      <CTA />
    </>
  )
}
