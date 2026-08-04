import { Container } from '../components/container'
import { Section } from '../components/section'
import { Seo } from '../components/seo'
import { CTA } from '../components/cta'
import { useLang, type Lang } from '../lib/i18n'

interface LegalSection {
  title: string
  body: string
}

interface LegalPageData {
  title: Record<Lang, string>
  intro: Record<Lang, string>
  updated: Record<Lang, string>
  sections: Record<Lang, LegalSection[]>
}

function LegalLayout({ data }: { data: LegalPageData }) {
  const { lang } = useLang()
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'var(--auron-gradient-1)' }} />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[var(--auron-text)] leading-[1.05]">{data.title[lang]}</h1>
            <p className="mt-6 text-lg md:text-xl max-w-xl text-[var(--auron-text-secondary)]" style={{ lineHeight: 1.7 }}>
              {data.intro[lang]}
            </p>
            <p className="mt-4 text-sm text-[var(--auron-text-tertiary)]">{lang === 'es' ? 'Última actualización:' : 'Last updated:'} {data.updated[lang]}</p>
          </div>
        </Container>
      </section>

      <Section animate={false}>
        <div className="max-w-3xl space-y-12">
          {data.sections[lang].map((s) => (
            <div key={s.title}>
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--auron-text)]">{s.title}</h2>
              <p className="mt-4 text-base text-[var(--auron-text-secondary)] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  )
}

const privacy: LegalPageData = {
  title: { es: 'Política de Privacidad', en: 'Privacy Policy' },
  intro: {
    es: 'En Auron Software tratamos tus datos con transparencia y responsabilidad. Esta política explica qué información recopilamos y cómo la usamos.',
    en: 'At Auron Software we handle your data with transparency and responsibility. This policy explains what information we collect and how we use it.',
  },
  updated: { es: '15 de enero de 2026', en: 'January 15, 2026' },
  sections: {
    es: [
      {
        title: 'Información que recopilamos',
        body: 'Recopilamos información que nos proporcionas directamente — como tu nombre, correo electrónico y detalles de tu negocio al contactarnos — así como datos de uso anónimos del sitio (páginas visitadas, dispositivo y duración de la sesión) que nos ayudan a mejorar la experiencia.',
      },
      {
        title: 'Uso de la información',
        body: 'Usamos tu información para responder consultas, gestionar demostraciones, mejorar nuestros productos y enviarte comunicaciones relevantes cuando lo hayas autorizado. Nunca vendemos tus datos personales a terceros.',
      },
      {
        title: 'Cookies',
        body: 'Usamos cookies estrictamente necesarias para el funcionamiento del sitio, como recordar tu preferencia de tema (claro u oscuro) y datos de sesión. Puedes desactivarlas desde tu navegador sin que el sitio deje de funcionar.',
      },
      {
        title: 'Compartición con terceros',
        body: 'Podemos compartir datos con proveedores de infraestructura y análisis que operan bajo acuerdos de confidencialidad, y cuando la ley nos lo exija. Solo procesamos datos para los fines descritos en esta política.',
      },
      {
        title: 'Seguridad de los datos',
        body: 'Aplicamos cifrado en tránsito y en reposo, control de accesos y monitoreo continuo. Ninguna transmisión por internet es 100% segura, pero mantenemos medidas razonables para proteger tu información.',
      },
      {
        title: 'Tus derechos',
        body: 'Puedes solicitar acceso, corrección o eliminación de tus datos personales en cualquier momento escribiendo a legal@auronsuite.com. Responderemos en un plazo máximo de 30 días.',
      },
      {
        title: 'Contacto',
        body: 'Para cualquier consulta sobre esta política, escríbenos a legal@auronsuite.com o a través del formulario de contacto.',
      },
    ],
    en: [
      {
        title: 'Information we collect',
        body: 'We collect information you provide directly — such as your name, email address and business details when you contact us — as well as anonymous site usage data (pages visited, device and session duration) that help us improve the experience.',
      },
      {
        title: 'How we use your information',
        body: 'We use your information to answer inquiries, manage demos, improve our products and send relevant communications when you have authorized it. We never sell your personal data to third parties.',
      },
      {
        title: 'Cookies',
        body: 'We use strictly necessary cookies for the site to work, such as remembering your theme preference (light or dark) and session data. You can disable them from your browser without the site stopping to work.',
      },
      {
        title: 'Sharing with third parties',
        body: 'We may share data with infrastructure and analytics providers that operate under confidentiality agreements, and when required by law. We only process data for the purposes described in this policy.',
      },
      {
        title: 'Data security',
        body: 'We apply encryption in transit and at rest, access control and continuous monitoring. No internet transmission is 100% secure, but we maintain reasonable measures to protect your information.',
      },
      {
        title: 'Your rights',
        body: 'You can request access, correction or deletion of your personal data at any time by writing to legal@auronsuite.com. We will respond within a maximum of 30 days.',
      },
      {
        title: 'Contact',
        body: 'For any question about this policy, write to legal@auronsuite.com or use the contact form.',
      },
    ],
  },
}

const terms: LegalPageData = {
  title: { es: 'Términos y Condiciones', en: 'Terms and Conditions' },
  intro: {
    es: 'Estos términos rigen el uso de este sitio web y de los productos y servicios de Auron Software.',
    en: 'These terms govern the use of this website and of Auron Software products and services.',
  },
  updated: { es: '15 de enero de 2026', en: 'January 15, 2026' },
  sections: {
    es: [
      {
        title: 'Aceptación de los términos',
        body: 'Al acceder a este sitio o usar nuestros servicios, aceptas estos términos. Si no estás de acuerdo con alguna parte, por favor no utilices el sitio.',
      },
      {
        title: 'Uso del sitio',
        body: 'El sitio está destinado a fines informativos y de contacto. Te comprometes a no usarlo con fines ilícitos, a no intentar acceder a áreas no autorizadas y a no interferir con su funcionamiento.',
      },
      {
        title: 'Propiedad intelectual',
        body: 'Todo el contenido del sitio — textos, gráficos, logotipos, códigos y materiales de marca — es propiedad de Auron Software o de sus licenciantes y está protegido por las leyes de propiedad intelectual. No puede reproducirse sin autorización previa por escrito.',
      },
      {
        title: 'Productos y servicios',
        body: 'Las descripciones de productos en este sitio tienen fines informativos. Las características, plazos y disponibilidad pueden cambiar sin previo aviso. Los acuerdos comerciales se rigen por contratos específicos firmados con el cliente.',
      },
      {
        title: 'Limitación de responsabilidad',
        body: 'Auron Software no será responsable por daños indirectos, incidentales o consecuentes derivados del uso o la imposibilidad de uso del sitio. El sitio se ofrece "tal cual" y "según disponibilidad".',
      },
      {
        title: 'Ley aplicable',
        body: 'Estos términos se rigen por las leyes de la República Dominicana. Cualquier controversia será sometida a los tribunales competentes de Santo Domingo.',
      },
      {
        title: 'Contacto',
        body: 'Si tienes preguntas sobre estos términos, escríbenos a legal@auronsuite.com.',
      },
    ],
    en: [
      {
        title: 'Acceptance of terms',
        body: 'By accessing this site or using our services, you agree to these terms. If you do not agree with any part, please do not use the site.',
      },
      {
        title: 'Use of the site',
        body: 'The site is intended for informational and contact purposes. You agree not to use it for unlawful purposes, not to attempt access to unauthorized areas and not to interfere with its operation.',
      },
      {
        title: 'Intellectual property',
        body: 'All site content — texts, graphics, logos, code and brand materials — is owned by Auron Software or its licensors and is protected by intellectual property laws. It may not be reproduced without prior written authorization.',
      },
      {
        title: 'Products and services',
        body: 'Product descriptions on this site are for informational purposes. Features, timelines and availability may change without notice. Commercial agreements are governed by specific contracts signed with the client.',
      },
      {
        title: 'Limitation of liability',
        body: 'Auron Software will not be liable for indirect, incidental or consequential damages arising from the use or inability to use the site. The site is provided "as is" and "as available".',
      },
      {
        title: 'Governing law',
        body: 'These terms are governed by the laws of the Dominican Republic. Any dispute will be submitted to the competent courts of Santo Domingo.',
      },
      {
        title: 'Contact',
        body: 'If you have questions about these terms, write to legal@auronsuite.com.',
      },
    ],
  },
}

const security: LegalPageData = {
  title: { es: 'Seguridad', en: 'Security' },
  intro: {
    es: 'La seguridad de tus datos es una prioridad en Auron Software. Estas son las medidas que aplicamos en nuestra plataforma.',
    en: 'The security of your data is a priority at Auron Software. These are the measures we apply on our platform.',
  },
  updated: { es: '15 de enero de 2026', en: 'January 15, 2026' },
  sections: {
    es: [
      {
        title: 'Compromiso con la seguridad',
        body: 'Diseñamos nuestros sistemas con seguridad desde el inicio: autenticación robusta, permisos por rol, registro de auditoría y revisiones de código continuas.',
      },
      {
        title: 'Cifrado',
        body: 'Toda la comunicación con nuestros servidores viaja cifrada con TLS. Los datos sensibles se almacenan cifrados en reposo, tanto en nuestras bases de datos como en las copias de seguridad.',
      },
      {
        title: 'Control de acceso',
        body: 'El acceso a la infraestructura está restringido al personal autorizado mediante autenticación multifactor y el principio de menor privilegio. Todos los accesos quedan registrados.',
      },
      {
        title: 'Cumplimiento',
        body: 'Aplicamos las mejores prácticas de la industria (OWASP, ISO 27001) y cumplimos con la normativa aplicable, incluyendo los requisitos de la DGII para la facturación electrónica.',
      },
      {
        title: 'Reporte de vulnerabilidades',
        body: 'Si descubres una vulnerabilidad en nuestros productos, te agradecemos reportarla de forma responsable a legal@auronsuite.com. Investigamos y resolvemos con prioridad.',
      },
      {
        title: 'Contacto',
        body: 'Para asuntos de seguridad, escríbenos a legal@auronsuite.com.',
      },
    ],
    en: [
      {
        title: 'Security commitment',
        body: 'We design our systems with security from the start: robust authentication, role-based permissions, audit logging and continuous code reviews.',
      },
      {
        title: 'Encryption',
        body: 'All communication with our servers travels encrypted with TLS. Sensitive data is stored encrypted at rest, both in our databases and in backups.',
      },
      {
        title: 'Access control',
        body: 'Infrastructure access is restricted to authorized staff through multi-factor authentication and the principle of least privilege. All access is logged.',
      },
      {
        title: 'Compliance',
        body: 'We apply industry best practices (OWASP, ISO 27001) and comply with applicable regulations, including DGII requirements for e-invoicing.',
      },
      {
        title: 'Vulnerability reporting',
        body: 'If you discover a vulnerability in our products, we appreciate you reporting it responsibly to legal@auronsuite.com. We investigate and resolve it with priority.',
      },
      {
        title: 'Contact',
        body: 'For security matters, write to legal@auronsuite.com.',
      },
    ],
  },
}

export function PrivacyPage() {
  const { lang } = useLang()
  return (
    <>
      <Seo
        title={lang === 'es' ? 'Política de Privacidad | Auron Software' : 'Privacy Policy | Auron Software'}
        description={lang === 'es'
          ? 'Política de privacidad de Auron Software: qué información recopilamos y cómo la usamos.'
          : 'Auron Software privacy policy: what information we collect and how we use it.'}
        path="/privacy"
        noindex
      />
      <LegalLayout data={privacy} />
    </>
  )
}

export function TermsPage() {
  const { lang } = useLang()
  return (
    <>
      <Seo
        title={lang === 'es' ? 'Términos y Condiciones | Auron Software' : 'Terms and Conditions | Auron Software'}
        description={lang === 'es'
          ? 'Términos y condiciones de uso del sitio y de los productos y servicios de Auron Software.'
          : 'Terms and conditions for the site and for Auron Software products and services.'}
        path="/terms"
        noindex
      />
      <LegalLayout data={terms} />
    </>
  )
}

export function SecurityPage() {
  const { lang } = useLang()
  return (
    <>
      <Seo
        title={lang === 'es' ? 'Seguridad | Auron Software' : 'Security | Auron Software'}
        description={lang === 'es'
          ? 'Medidas de seguridad de la plataforma de Auron Software: cifrado TLS, control de acceso y cumplimiento con los requisitos de la DGII.'
          : 'Auron Software platform security measures: TLS encryption, access control and DGII compliance.'}
        path="/security"
        noindex
      />
      <LegalLayout data={security} />
    </>
  )
}
