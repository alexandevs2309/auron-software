export type Lang = 'es' | 'en'

export const dictionaries: Record<Lang, Record<string, string>> = {
  es: {
    // Navegación
    'nav.products': 'Productos',
    'nav.services': 'Servicios',
    'nav.company': 'Compañía',
    'nav.about': 'Nosotros',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'nav.pricing': 'Planes',
    'nav.contactCta': 'Contáctanos',
    'nav.theme.light': 'Cambiar a modo claro',
    'nav.theme.dark': 'Cambiar a modo oscuro',
    'nav.theme.lightTitle': 'Modo claro',
    'nav.theme.darkTitle': 'Modo oscuro',
    'nav.menu.toggle': 'Abrir o cerrar menú',
    'nav.lang.toggle': 'Cambiar idioma a inglés',
    'nav.lang.label': 'Idioma',

    // Footer
    'footer.editions': 'Ediciones',
    'footer.services': 'Servicios',
    'footer.company': 'Compañía',
    'footer.legal': 'Legal',
    'footer.about': 'Nosotros',
    'footer.blog': 'Blog',
    'footer.contact': 'Contacto',
    'footer.privacy': 'Privacidad',
    'footer.terms': 'Términos',
    'footer.security': 'Seguridad',
    'footer.custom': 'Desarrollo a la medida',
    'footer.ai': 'Inteligencia Artificial',
    'footer.cloud': 'Soluciones Cloud',
    'footer.automation': 'Automatización',
    'footer.tagline':
      'Plataformas de gestión para negocios de servicio en República Dominicana. Facturación electrónica DGII e-CF nativa y operación local sin depender de internet.',
    'footer.footnote': 'Facturación electrónica e-CF integrada con la DGII · Operación local sin dependencia de internet',
    'footer.rights': 'Auron Software EIRL. Todos los derechos reservados.',
    'footer.madeIn': 'Hecho en República Dominicana',

    // Común
    'common.contactCta': 'Contáctanos',
    'common.learnMore': 'Conocer las plataformas',
    'common.start': 'Empezar',
    'common.open': 'Abrir',
    'common.seeAll': 'Ver todos',
    'common.requestInfo': 'Solicitar información',
    'common.contactSubject.product': 'Consulta de producto',
    'common.contactSubject.custom': 'Desarrollo a la medida',

    // Hero
    'hero.eyebrow': 'Auron Software · República Dominicana',
    'hero.title1': 'Plataformas de gestión',
    'hero.title2': 'para negocios de servicio',
    'hero.subtitle':
      'Auron Software diseña y opera software empresarial para salones, restaurantes, clínicas y hoteles. Un núcleo compartido con facturación electrónica DGII e-CF nativa y operación local que no depende de internet.',

    // CTA
    'cta.title': 'Hablemos de tu operación',
    'cta.subtitle':
      'Cuéntanos sobre tu negocio y conoce cómo las plataformas de Auron Software operan tu día a día, con facturación electrónica DGII e-CF nativa y sin depender de internet.',
    'cta.seeServices': 'Ver Servicios',

    // Métricas
    'metrics.compliance': 'Cumplimiento fiscal DGII e-CF',
    'metrics.offline': 'Dependencia de internet para operar',
    'metrics.local': 'Datos y desarrollo en República Dominicana',
    'metrics.native': 'Facturación electrónica nativa',

    // FAQ
    'faq.label': 'Preguntas frecuentes',
    'faq.title': 'Resolvemos tus dudas',
    'faq.description':
      'Respuestas a las preguntas más comunes sobre Auron Software y sus productos. ¿Tienes otra duda? Escríbenos por el formulario de contacto.',
    'faq.q1': '¿Qué es Auron Software?',
    'faq.a1':
      'Auron Software diseña y opera plataformas de gestión para negocios de servicio en República Dominicana: salones y barberías, restaurantes, clínicas y hoteles. Nuestros productos cubren agendamiento, clientes, inventario, ventas, comisiones y facturación.',
    'faq.q2': '¿Cuánto cuesta cada producto?',
    'faq.a2':
      'Cada edición tiene su propia página de producto con su plan, precio y condiciones. En esta web presentamos la empresa y la plataforma; para conocer los detalles de la edición de tu sector, escríbenos a través del formulario de contacto.',
    'faq.q3': '¿Incluye facturación electrónica DGII?',
    'faq.a3':
      'Sí. La facturación electrónica comprobante fiscal (e-CF) está integrada de forma nativa en nuestra plataforma, con soporte para los esquemas de la DGII. Es una de las razones por las que Auron Software nace en República Dominicana.',
    'faq.q4': '¿Funciona sin internet?',
    'faq.a4':
      'Sí. El punto de venta (POS) funciona localmente en la computadora de tu negocio, por lo que puedes seguir vendiendo y operando aunque se caiga el internet. La conexión solo es necesaria para enviar los comprobantes a la DGII y para los respaldos.',
    'faq.q5': '¿Cómo pruebo un producto?',
    'faq.a5':
      'Escríbenos por el formulario de contacto y coordinamos una sesión en la que te mostramos la edición de tu rubro con datos de tu tipo de negocio. Luego defines el plan, la fecha de arranque y la migración de tu operación.',
    'faq.q6': '¿Puedo usarlo en varios negocios o sucursales?',
    'faq.a6':
      'Depende del producto. Los productos de Auron están pensados para crecer contigo; consulta la landing page del producto que te interesa para ver si soporta múltiples negocios, sucursales o acceso por API.',
    'faq.q7': '¿Ofrecen desarrollo a la medida?',
    'faq.a7':
      'Sí. Además de nuestros productos, ofrecemos servicios de desarrollo a la medida, integración de sistemas y consultoría tecnológica. Puedes ver los detalles en nuestra página de servicios.',
  },
  en: {
    'nav.products': 'Products',
    'nav.services': 'Services',
    'nav.company': 'Company',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.pricing': 'Plans',
    'nav.contactCta': 'Contact us',
    'nav.theme.light': 'Switch to light mode',
    'nav.theme.dark': 'Switch to dark mode',
    'nav.theme.lightTitle': 'Light mode',
    'nav.theme.darkTitle': 'Dark mode',
    'nav.menu.toggle': 'Open or close menu',
    'nav.lang.toggle': 'Switch language to Spanish',
    'nav.lang.label': 'Language',

    'footer.editions': 'Editions',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.legal': 'Legal',
    'footer.about': 'About',
    'footer.blog': 'Blog',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.security': 'Security',
    'footer.custom': 'Custom development',
    'footer.ai': 'Artificial Intelligence',
    'footer.cloud': 'Cloud Solutions',
    'footer.automation': 'Automation',
    'footer.tagline':
      'Management platforms for service businesses in the Dominican Republic. Native DGII e-CF e-invoicing and local operation that does not depend on the internet.',
    'footer.footnote': 'e-CF e-invoicing integrated with the DGII · Local operation with no internet dependency',
    'footer.rights': 'Auron Software EIRL. All rights reserved.',
    'footer.madeIn': 'Made in the Dominican Republic',

    'common.contactCta': 'Contact us',
    'common.learnMore': 'Explore the platforms',
    'common.start': 'Get started',
    'common.open': 'Open',
    'common.seeAll': 'See all',
    'common.requestInfo': 'Request information',
    'common.contactSubject.product': 'Product inquiry',
    'common.contactSubject.custom': 'Custom development',

    'hero.eyebrow': 'Auron Software · Dominican Republic',
    'hero.title1': 'Management platforms',
    'hero.title2': 'for service businesses',
    'hero.subtitle':
      'Auron Software designs and operates enterprise software for salons, restaurants, clinics and hotels. A shared core with native DGII e-CF e-invoicing and local operation that does not depend on the internet.',

    'cta.title': "Let's talk about your operation",
    'cta.subtitle':
      'Tell us about your business and learn how Auron Software platforms run your day to day, with native DGII e-CF e-invoicing and no internet dependency.',
    'cta.seeServices': 'See Services',

    'metrics.compliance': 'DGII e-CF fiscal compliance',
    'metrics.offline': 'Internet dependency to operate',
    'metrics.local': 'Data and development in the Dominican Republic',
    'metrics.native': 'Native e-invoicing',

    'faq.label': 'Frequently asked questions',
    'faq.title': 'We answer your questions',
    'faq.description':
      'Answers to the most common questions about Auron Software and its products. Have another question? Write to us through the contact form.',
    'faq.q1': 'What is Auron Software?',
    'faq.a1':
      'Auron Software designs and operates management platforms for service businesses in the Dominican Republic: salons and barbershops, restaurants, clinics and hotels. Our products cover scheduling, customers, inventory, sales, commissions and invoicing.',
    'faq.q2': 'How much does each product cost?',
    'faq.a2':
      'Each edition has its own product page with its plan, price and conditions. On this website we present the company and the platform; to learn the details of your industry edition, write to us through the contact form.',
    'faq.q3': 'Does it include DGII e-invoicing?',
    'faq.a3':
      'Yes. Electronic fiscal receipt (e-CF) invoicing is natively integrated into our platform, with support for DGII schemes. It is one of the reasons Auron Software was born in the Dominican Republic.',
    'faq.q4': 'Does it work without internet?',
    'faq.a4':
      'Yes. The point of sale (POS) runs locally on your business computer, so you can keep selling and operating even if the internet goes down. The connection is only needed to send receipts to the DGII and for backups.',
    'faq.q5': 'How do I try a product?',
    'faq.a5':
      'Write to us through the contact form and we will schedule a session where we show you the edition for your industry with data from your type of business. Then you define the plan, the start date and the migration of your operation.',
    'faq.q6': 'Can I use it across several businesses or branches?',
    'faq.a6':
      'It depends on the product. Auron products are designed to grow with you; check the landing page of the product you are interested in to see if it supports multiple businesses, branches or API access.',
    'faq.q7': 'Do you offer custom development?',
    'faq.a7':
      'Yes. In addition to our products, we offer custom development, system integration and technology consulting services. You can see the details on our services page.',
  },
}
