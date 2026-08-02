import { Container } from '../components/container'
import { Section } from '../components/section'
import { Seo } from '../components/seo'
import { CTA } from '../components/cta'

interface LegalSection {
  title: string
  body: string
}

interface LegalLayoutProps {
  title: string
  intro: string
  updated: string
  sections: LegalSection[]
}

function LegalLayout({ title, intro, updated, sections }: LegalLayoutProps) {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'var(--auron-gradient-1)' }} />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[var(--auron-text)] leading-[1.05]">{title}</h1>
            <p className="mt-6 text-lg md:text-xl max-w-xl text-[var(--auron-text-secondary)]" style={{ lineHeight: 1.7 }}>
              {intro}
            </p>
            <p className="mt-4 text-sm text-[var(--auron-text-tertiary)]">Última actualización: {updated}</p>
          </div>
        </Container>
      </section>

      <Section animate={false}>
        <div className="max-w-3xl space-y-12">
          {sections.map((s) => (
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

export function PrivacyPage() {
  return (
    <>
      <Seo
        title="Política de Privacidad | Auron Software"
        description="Política de privacidad de Auron Software: qué información recopilamos y cómo la usamos."
        path="/privacy"
        noindex
      />
      <LegalLayout
      title="Política de Privacidad"
      intro="En Auron Software tratamos tus datos con transparencia y responsabilidad. Esta política explica qué información recopilamos y cómo la usamos."
      updated="15 de enero de 2026"
      sections={[
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
          body: 'Puedes solicitar acceso, corrección o eliminación de tus datos personales en cualquier momento escribiendo a privacy@auronsoftware.do. Responderemos en un plazo máximo de 30 días.',
        },
        {
          title: 'Contacto',
          body: 'Para cualquier consulta sobre esta política, escríbenos a privacy@auronsoftware.do o a través del formulario de contacto.',
        },
      ]}
    />
    </>
  )
}

export function TermsPage() {
  return (
    <>
      <Seo
        title="Términos y Condiciones | Auron Software"
        description="Términos y condiciones de uso del sitio y de los productos y servicios de Auron Software."
        path="/terms"
        noindex
      />
      <LegalLayout
      title="Términos y Condiciones"
      intro="Estos términos rigen el uso de este sitio web y de los productos y servicios de Auron Software."
      updated="15 de enero de 2026"
      sections={[
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
          body: 'Si tienes preguntas sobre estos términos, escríbenos a legal@auronsoftware.do.',
        },
      ]}
    />
    </>
  )
}

export function SecurityPage() {
  return (
    <>
      <Seo
        title="Seguridad | Auron Software"
        description="Medidas de seguridad de la plataforma de Auron Software: cifrado TLS, control de acceso y cumplimiento con los requisitos de la DGII."
        path="/security"
        noindex
      />
      <LegalLayout
      title="Seguridad"
      intro="La seguridad de tus datos es una prioridad en Auron Software. Estas son las medidas que aplicamos en nuestra plataforma."
      updated="15 de enero de 2026"
      sections={[
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
          body: 'Si descubres una vulnerabilidad en nuestros productos, te agradecemos reportarla de forma responsable a security@auronsoftware.do. Investigamos y resolvemos con prioridad.',
        },
        {
          title: 'Contacto',
          body: 'Para asuntos de seguridad, escríbenos a security@auronsoftware.do.',
        },
      ]}
    />
    </>
  )
}
