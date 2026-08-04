export interface BlogSection {
  heading: string
  body: string
}

export interface BlogPostContent {
  title: string
  excerpt: string
  content: BlogSection[]
}

export interface BlogPost {
  slug: string
  dateISO: string
  dateLabelES: string
  dateLabelEN: string
  categoryES: string
  categoryEN: string
  author: string
  es: BlogPostContent
  en: BlogPostContent
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'el-futuro-de-la-tecnologia-en-restaurantes-2026',
    dateISO: '2026-01-15',
    dateLabelES: '15 de enero de 2026',
    dateLabelEN: 'January 15, 2026',
    categoryES: 'Industria',
    categoryEN: 'Industry',
    author: 'Equipo Auron',
    es: {
      title: 'El futuro de la tecnología en restaurantes en 2026',
      excerpt:
        'Cómo la IA, la automatización y las plataformas unificadas están transformando la industria restaurantera.',
      content: [
        {
          heading: 'De sistemas aislados a plataformas unificadas',
          body: 'Durante años los restaurantes operaron con una herramienta para el punto de venta, otra para el inventario, otra para las comisiones del personal y otra para la facturación. Cada herramienta guarda su propia copia de la verdad y conectarlas se convierte en trabajo de tiempo completo. En 2026, la tendencia clara es una sola plataforma que centralice la operación, con cada módulo pensado para trabajar junto a los demás.',
        },
        {
          heading: 'El POS local-first ya no es un lujo, es un requisito',
          body: 'Una falla de internet no debería detener la cena de un viernes por la noche. Los sistemas locales-first mantienen la venta, la cocina y la caja funcionando aunque el proveedor de internet falle, y sincronizan todo cuando vuelve la conexión. Para la facturación electrónica, esa conexión solo se necesita en el momento de enviar el comprobante.',
        },
        {
          heading: 'La IA predictiva entra a la cocina',
          body: 'Los modelos de machine learning ligero ya pronostican la demanda de un día, ayudan a preparar inventario y ajustan horarios de personal según la carga esperada. No se trata de reemplazar al equipo, sino de darle información para decidir mejor.',
        },
      ],
    },
    en: {
      title: 'The future of restaurant technology in 2026',
      excerpt:
        'How AI, automation and unified platforms are transforming the restaurant industry.',
      content: [
        {
          heading: 'From siloed systems to unified platforms',
          body: 'For years, restaurants ran one tool for the point of sale, another for inventory, another for staff commissions and another for invoicing. Each tool keeps its own copy of the truth, and connecting them becomes a full-time job. In 2026, the clear trend is a single platform that centralizes the operation, with every module designed to work alongside the others.',
        },
        {
          heading: 'Local-first POS is no longer a luxury, it is a requirement',
          body: 'An internet outage should not stop a Friday night dinner service. Local-first systems keep sales, kitchen and cashier running even when the internet provider fails, and sync everything once the connection returns. For e-invoicing, that connection is only needed at the moment of sending the fiscal receipt.',
        },
        {
          heading: 'Predictive AI enters the kitchen',
          body: 'Lightweight machine learning models already forecast daily demand, help prepare inventory and adjust staff schedules according to expected workload. It is not about replacing the team, but about giving them information to make better decisions.',
        },
      ],
    },
  },
  {
    slug: 'como-construimos-software-empresarial-que-perdura',
    dateISO: '2026-01-08',
    dateLabelES: '8 de enero de 2026',
    dateLabelEN: 'January 8, 2026',
    categoryES: 'Ingeniería',
    categoryEN: 'Engineering',
    author: 'Equipo Auron',
    es: {
      title: 'Cómo construimos software empresarial que perdura',
      excerpt:
        'Nuestros principios de ingeniería para construir sistemas de software escalables y mantenibles.',
      content: [
        {
          heading: 'Elegir un núcleo compartido',
          body: 'Cada producto de Auron Software nace del mismo núcleo: autenticación, APIs, facturación y seguridad en común. Eso significa que una mejora de seguridad se despliega en todas las Editions a la vez, y que los equipos no reescriben lo que ya funciona.',
        },
        {
          heading: 'Pensar en el operador del negocio',
          body: 'El software empresarial perdura cuando la persona que lo usa todos los días lo entiende. Diseñamos flujos que siguen la forma real de trabajar — la caja, el turno, el corte del día — y no al revés.',
        },
        {
          heading: 'Pruebas primero para lo fiscal',
          body: 'La facturación electrónica no admite errores: un ITBIS mal calculado es un problema con la DGII. Por eso validamos la lógica fiscal con pruebas antes de cualquier lanzamiento, y automatizamos esa verificación para que nunca se rompa en silencio.',
        },
      ],
    },
    en: {
      title: 'How we build enterprise software that lasts',
      excerpt:
        'Our engineering principles for building scalable and maintainable software systems.',
      content: [
        {
          heading: 'Choose a shared core',
          body: 'Every Auron Software product is born from the same core: authentication, APIs, invoicing and security in common. That means a security improvement ships to all Editions at once, and teams do not rewrite what already works.',
        },
        {
          heading: 'Think about the business operator',
          body: 'Enterprise software lasts when the person using it every day understands it. We design flows that follow the real way of working — the cashier, the shift, the end-of-day close — and not the other way around.',
        },
        {
          heading: 'Tests first for fiscal logic',
          body: 'E-invoicing leaves no room for error: a miscalculated VAT is a problem with the tax authority. That is why we validate fiscal logic with tests before any release, and automate that verification so it never breaks silently.',
        },
      ],
    },
  },
  {
    slug: 'por-que-tu-negocio-necesita-un-ecosistema-de-software-unificado',
    dateISO: '2025-12-20',
    dateLabelES: '20 de diciembre de 2025',
    dateLabelEN: 'December 20, 2025',
    categoryES: 'Negocio',
    categoryEN: 'Business',
    author: 'Equipo Auron',
    es: {
      title: 'Por qué tu negocio necesita un ecosistema de software unificado',
      excerpt:
        'Los costos ocultos de usar herramientas desconectadas y cómo una plataforma unificada los resuelve.',
      content: [
        {
          heading: 'El costo oculto de las herramientas desconectadas',
          body: 'Cuando el sistema de citas no habla con la caja, cada cambio se duplica a mano. Esos minutos se convierten en horas al mes, y cada copia manual es una oportunidad de error. El costo real de las herramientas desconectadas no está en sus precios, sino en el trabajo que generan.',
        },
        {
          heading: 'Una sola fuente de verdad',
          body: 'Una plataforma unificada guarda cada dato una sola vez: el cliente, su historial, sus citas, sus compras y sus comisiones. Los reportes dejan de armarse a mano y la gerencia ve el negocio completo desde un solo lugar.',
        },
        {
          heading: 'Escalar sin reconstruir',
          body: 'Cuando una solución está integrada por naturaleza, abrir una segunda sucursal o sumar un nuevo servicio no significa volver a comprar y conectar herramientas. Significa crecer dentro de la misma plataforma.',
        },
      ],
    },
    en: {
      title: 'Why your business needs a unified software ecosystem',
      excerpt:
        'The hidden costs of disconnected tools and how a unified platform solves them.',
      content: [
        {
          heading: 'The hidden cost of disconnected tools',
          body: 'When the appointment system does not talk to the cash register, every change is duplicated by hand. Those minutes become hours per month, and every manual copy is a chance for error. The real cost of disconnected tools is not in their prices, but in the work they generate.',
        },
        {
          heading: 'A single source of truth',
          body: 'A unified platform stores each piece of data once: the customer, their history, their appointments, their purchases and their commissions. Reports stop being assembled by hand and management sees the whole business from one place.',
        },
        {
          heading: 'Scale without rebuilding',
          body: 'When a solution is integrated by nature, opening a second branch or adding a new service does not mean buying and connecting tools again. It means growing inside the same platform.',
        },
      ],
    },
  },
  {
    slug: 'guia-de-transformacion-digital-para-proveedores-de-salud',
    dateISO: '2025-12-12',
    dateLabelES: '12 de diciembre de 2025',
    dateLabelEN: 'December 12, 2025',
    categoryES: 'Salud',
    categoryEN: 'Health',
    author: 'Equipo Auron',
    es: {
      title: 'Guía de transformación digital para proveedores de salud',
      excerpt:
        'Pasos prácticos para pasar de operaciones en papel a flujos de trabajo digitales modernos.',
      content: [
        {
          heading: 'Empezar por la agenda, no por el expediente',
          body: 'La transformación digital en salud suele fracasar cuando empieza por lo más complejo. Nuestra recomendación es empezar por la agenda: digitalizar las citas genera valor inmediato y acostumbra al equipo al nuevo sistema antes de migrar los datos clínicos.',
        },
        {
          heading: 'Digitalizar la facturación',
          body: 'La facturación electrónica en salud agiliza el cobro, reduce el papeleo y facilita el reclamo a aseguradoras. Elegir una plataforma con cumplimiento fiscal nativo evita integraciones frágiles con sistemas externos.',
        },
        {
          heading: 'Capacitar antes de imponer',
          body: 'El software no se adopta por decreto. Se adopta cuando el personal entiende qué problema le resuelve. Programar sesiones cortas, con datos reales del propio centro, reduce la resistencia y acelera el uso cotidiano.',
        },
      ],
    },
    en: {
      title: 'Digital transformation guide for healthcare providers',
      excerpt:
        'Practical steps to move from paper operations to modern digital workflows.',
      content: [
        {
          heading: 'Start with the schedule, not the record',
          body: 'Digital transformation in healthcare often fails when it starts with the most complex part. Our recommendation is to start with the schedule: digitalizing appointments creates immediate value and gets the team used to the new system before migrating clinical data.',
        },
        {
          heading: 'Digitalize invoicing',
          body: 'E-invoicing in healthcare speeds up payment collection, reduces paperwork and simplifies insurance claims. Choosing a platform with native fiscal compliance avoids fragile integrations with external systems.',
        },
        {
          heading: 'Train before imposing',
          body: 'Software is not adopted by decree. It is adopted when staff understand which problem it solves for them. Short sessions with real data from their own center reduce resistance and accelerate daily use.',
        },
      ],
    },
  },
  {
    slug: 'como-construimos-auron-suite-saas-multinegocio-para-salones',
    dateISO: '2025-11-28',
    dateLabelES: '28 de noviembre de 2025',
    dateLabelEN: 'November 28, 2025',
    categoryES: 'Ingeniería',
    categoryEN: 'Engineering',
    author: 'Equipo Auron',
    es: {
      title: 'Cómo construimos Auron Suite: un SaaS multinegocio para salones',
      excerpt:
        'De Django y Angular a las ganancias por período de pago — las decisiones detrás de la plataforma.',
      content: [
        {
          heading: 'La arquitectura multitenant',
          body: 'Auron Suite guarda cada negocio en un espacio aislado: sus empleados, servicios, comisiones, caja y datos propios, dentro de una misma plataforma. Esto permite escalar de una barbería a una franquicia sin migrar de sistema.',
        },
        {
          heading: 'El núcleo compartido',
          body: 'Autenticación, APIs, facturación DGII e-CF y seguridad viven en un núcleo común que todas las Editions comparten. Construir sobre ese núcleo en vez de empezar de cero por vertical es lo que hace sostenible el mantenimiento.',
        },
        {
          heading: 'Ganancias reales por período de pago',
          body: 'Una de las funciones más valoradas es el cálculo de ganancias por período de pago: cada venta de caja se convierte en ganancia para el negocio y en comisión correcta para el equipo, sin hojas de cálculo.',
        },
      ],
    },
    en: {
      title: 'How we built Auron Suite: a multi-business SaaS for salons',
      excerpt:
        'From Django and Angular to profits per pay period — the decisions behind the platform.',
      content: [
        {
          heading: 'The multi-tenant architecture',
          body: 'Auron Suite keeps each business in an isolated space: its own employees, services, commissions, cash register and data, within a single platform. That makes it possible to scale from one barbershop to a franchise without migrating systems.',
        },
        {
          heading: 'The shared core',
          body: 'Authentication, APIs, DGII e-CF invoicing and security live in a common core that all Editions share. Building on that core instead of starting from scratch per vertical is what keeps maintenance sustainable.',
        },
        {
          heading: 'Real profits per pay period',
          body: 'One of the most valued features is profit calculation per pay period: every cashier sale becomes profit for the business and the correct commission for the team, with no spreadsheets.',
        },
      ],
    },
  },
  {
    slug: 'el-auge-de-los-hoteles-inteligentes-tecnologia-en-la-hospitalidad',
    dateISO: '2025-11-15',
    dateLabelES: '15 de noviembre de 2025',
    dateLabelEN: 'November 15, 2025',
    categoryES: 'Hospitalidad',
    categoryEN: 'Hospitality',
    author: 'Equipo Auron',
    es: {
      title: 'El auge de los hoteles inteligentes: tecnología en la hospitalidad',
      excerpt:
        'Cómo los hoteles usan la tecnología para mejorar la experiencia del huésped y optimizar las operaciones.',
      content: [
        {
          heading: 'Del check-in en papel a la experiencia digital',
          body: 'El huésped moderno espera un check-in ágil, comunicación por mensajes y el control de su estadía desde su teléfono. Los hoteles que digitalizan estos puntos convierten la estadía en una experiencia, no solo en una habitación.',
        },
        {
          heading: 'Housekeeping y operaciones sincronizadas',
          body: 'Cuando la recepción y el housekeeping comparten la misma base de datos, el huésped que llega temprano encuentra su habitación lista y el equipo sabe en tiempo real qué limpiar. La sincronización elimina las llamadas por radio y las listas impresas.',
        },
        {
          heading: 'Analíticas para decidir tarifas',
          body: 'Los datos de ocupación histórica alimentan decisiones de tarifa y canal. Un sistema que integra reservas, tarifas y revenue management le da a la gerencia una visión clara de dónde está el ingreso.',
        },
      ],
    },
    en: {
      title: 'The rise of smart hotels: technology in hospitality',
      excerpt:
        'How hotels use technology to improve the guest experience and optimize operations.',
      content: [
        {
          heading: 'From paper check-in to the digital experience',
          body: 'The modern guest expects a fast check-in, message-based communication and control of their stay from their phone. Hotels that digitalize these touchpoints turn a stay into an experience, not just a room.',
        },
        {
          heading: 'Synchronized housekeeping and operations',
          body: 'When front desk and housekeeping share the same database, the early-arriving guest finds their room ready and the team knows in real time what to clean. Synchronization eliminates radio calls and printed lists.',
        },
        {
          heading: 'Analytics to decide rates',
          body: 'Historical occupancy data feeds rate and channel decisions. A system that integrates reservations, rates and revenue management gives management a clear view of where revenue lives.',
        },
      ],
    },
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}
