import { Hero } from '../components/hero'
import { Marquee } from '../components/marquee'
import { Metrics } from '../components/metrics'
import { ProductsSection } from '../components/products-section'
import { AISection } from '../components/ai-section'
import { Mission } from '../components/mission'
import { CoreDiagram } from '../components/core-diagram'
import { Industries } from '../components/industries'
import { ServicesSection } from '../components/services-section'
import { Faq } from '../components/faq'
import { CTA } from '../components/cta'
import { Seo } from '../components/seo'

export function HomePage() {
  return (
    <>
      <Seo
        title="Auron Software — Software para negocios de servicio en República Dominicana"
        description="Auron Software diseña y opera software vertical para negocios de servicio: Auron Suite para belleza y bienestar, Auron Restaurant OS para restaurantes, Auron Health y Auron Hospitality. Facturación DGII e-CF nativa."
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: '¿Qué es Auron Software?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Auron Software diseña y opera plataformas de gestión para negocios de servicio en República Dominicana: salones y barberías, restaurantes, clínicas y hoteles. Cada producto tiene su propia landing page con su plan y precio.',
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
      <Marquee />
      <Metrics />
      <ProductsSection />
      <AISection />
      <Mission />
      <CoreDiagram />
      <Industries />
      <ServicesSection />
      <Faq />
      <CTA />
    </>
  )
}
