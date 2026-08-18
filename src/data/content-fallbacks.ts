// Contenido por defecto del sitio. Si un texto no existe (o no se puede leer)
// en Supabase, se muestra el valor de este archivo — el sitio nunca queda vacío.
//
// IMPORTANTE: el panel de mantenimiento (admin-panel/index.html) tiene una
// copia de estos valores en su constante DEFAULTS. Si agregas o cambias una
// clave aquí, actualiza también el panel para que muestre el mismo texto.

export const contentFallbacks: Record<string, Record<string, string>> = {
  titulos: {
    // Imagen de fondo del banner de título de todas las páginas interiores
    // (Servicios, Planes, Nosotros, Contacto, Error).
    imagen: "/assets/img/nova/breadcrumb-av.svg",
  },
  hero: {
    badge: "Agencia de Crecimiento Creativo",
    titulo_1: "Tu marca tiene",
    titulo_destacado: "potencial",
    titulo_2: "Nosotros lo convertimos en crecimiento.",
    parrafo:
      "Estrategia, narrativa y producción trabajando como un solo sistema para construir marcas poderosas, historias significativas y resultados medibles.",
    boton_primario: "AGENDA UNA CONSULTA",
    boton_secundario: "NUESTROS SERVICIOS",
    imagen: "/assets/img/nova/cta-side.jpg",
    imagen_tarjeta_1: "/assets/img/nova/av-clapper.svg",
    imagen_tarjeta_2: "/assets/img/nova/av-waveform.svg",
  },
  ticker: {
    palabras:
      "Estrategia, Narrativa, Producción, Branding, Fotografía, Video, Podcast, Marketing, Web",
  },
  clientes: {
    titulo: "Marcas e industrias que crecen con Nova",
    industrias:
      "Startups, Restaurantes y Hospitalidad, Prácticas Médicas, Bienes Raíces, Marcas Personales, Instituciones Educativas, Organizaciones Sin Fines de Lucro, Pequeñas y Medianas Empresas",
  },
  quienes_somos: {
    titulo: "Quiénes Somos",
    parrafo:
      "Nova Studios es una agencia de crecimiento creativo que combina estrategia, narrativa y producción para crear experiencias de marca significativas y crecimiento sostenible. A diferencia de las agencias enfocadas solo en ejecución, integramos la producción creativa con el pensamiento estratégico empresarial.",
    punto_1: "Estrategia — dirección, posicionamiento y propósito",
    punto_2: "Narrativa — historias que conectan, no ruido",
    punto_3: "Producción — calidad premium en cada detalle",
    boton: "CONOCE MÁS DE NOSOTROS",
    imagen: "/assets/img/nova/edificio-01.jpg",
  },
  servicios_inicio: {
    titulo: "Qué Hacemos en Nova",
    card_1_titulo: "Estrategia de Marca",
    card_1_texto:
      "Posicionamiento, mensaje y dirección para que cada movimiento de tu marca tenga un propósito claro.",
    card_2_titulo: "Branding",
    card_2_texto:
      "Identidad visual, tipografía y sistemas de color que hacen a tu marca clara, memorable y consistente.",
    card_3_titulo: "Producción Audiovisual",
    card_3_texto:
      "Fotografía, video y podcasts con mirada cinematográfica que generan conexión emocional.",
    card_4_titulo: "Marketing Digital",
    card_4_texto:
      "Estrategia de redes, campañas y comunidad que convierten la atención en conexión real.",
    card_5_titulo: "Desarrollo Web",
    card_5_texto:
      "Experiencias web que construyen credibilidad, comunican con claridad y convierten.",
    card_6_titulo: "Consultoría",
    card_6_texto:
      "Acompañamiento estratégico y dirección creativa para escalar con propósito.",
  },
  metodo_inicio: {
    titulo: "El Método Nova",
    parrafo:
      "El crecimiento con propósito no sucede por accidente. Nuestro framework estratégico de 5 fases conecta estrategia, contenido y distribución en un solo sistema, para que cada pieza que publica tu marca tenga un trabajo que hacer.",
    boton: "TRABAJEMOS JUNTOS",
    paso_1_titulo: "Descubrir",
    paso_1_texto:
      "Analizamos tu negocio, tu industria, tu audiencia y tu competencia para entender dónde estás y a dónde quieres llegar.",
    paso_2_titulo: "Definir",
    paso_2_texto:
      "Posicionamiento, mensaje central, pilares de contenido y métricas — un plan claro antes de producir cualquier pieza.",
    paso_3_titulo: "Diseñar",
    paso_3_texto:
      "Estrategia de marketing, dirección visual, calendario de contenido y recorrido del cliente, todo conectado como un sistema.",
    paso_4_titulo: "Entregar",
    paso_4_texto:
      "Producción, diseño, edición y lanzamiento — ejecución con calidad premium y respeto por los plazos.",
    paso_5_titulo: "Optimizar",
    paso_5_texto:
      "Medimos rendimiento, interacción y conversión, aprendemos de los datos y reiniciamos el ciclo para seguir creciendo.",
  },
  por_que_nova: {
    titulo: "¿Por Qué Nova?",
    parrafo:
      "Porque no somos un proveedor de producción: somos un socio estratégico. A diferencia de las agencias enfocadas solo en ejecución, integramos la creatividad con el pensamiento de negocio. Cinco principios lo hacen posible:",
    card_1_titulo: "La Excelencia Es Nuestro Estándar",
    card_1_texto:
      "La calidad está en los detalles: cada entrega refleja el nivel premium que tu marca merece.",
    card_2_titulo: "Estrategia Antes que Ejecución",
    card_2_texto:
      "Todo gran trabajo empieza con entendimiento. Primero pensamos, después producimos.",
    card_3_titulo: "Personas Antes que Proyectos",
    card_3_texto:
      "Construimos relaciones basadas en confianza, comunicación clara y cuidado genuino.",
    card_4_titulo: "Crecimiento a Través de Alianzas",
    card_4_texto:
      "Nuestros clientes son socios, no transacciones. Crecemos junto a las marcas que acompañamos.",
    card_5_titulo: "Los Sistemas Crean Excelencia",
    card_5_texto:
      "Procesos claros que permiten calidad consistente y escalar con propósito.",
    cta_titulo: "¿Listo para crecer con propósito?",
    cta_texto: "Construyamos una estrategia para tu marca.",
    cta_boton: "HABLEMOS",
  },
  proyectos: {
    titulo: "Proyectos Destacados",
    boton: "SÍGUENOS EN INSTAGRAM",
    post_1_imagen: "/assets/img/nova/post-01.jpg",
    post_1_titulo: "Estrategia",
    post_1_subtitulo: "Dirección y Posicionamiento",
    post_2_imagen: "/assets/img/nova/post-11.jpg",
    post_2_titulo: "Contenido",
    post_2_subtitulo: "Sistemas, No Ruido",
    post_3_imagen: "/assets/img/nova/post-07.jpg",
    post_3_titulo: "Identidad",
    post_3_subtitulo: "Innovación y Estrategia",
    post_4_imagen: "/assets/img/nova/post-17.jpg",
    post_4_titulo: "Crecimiento",
    post_4_subtitulo: "Publicar Mejor, No Más",
    post_5_imagen: "/assets/img/nova/post-04.jpg",
    post_5_titulo: "Creatividad",
    post_5_subtitulo: "Ideas Que Conectan",
    post_6_imagen: "/assets/img/nova/post-09.jpg",
    post_6_titulo: "Comunidad",
    post_6_subtitulo: "Conexión Real",
    post_7_imagen: "/assets/img/nova/post-13.jpg",
    post_7_titulo: "Diseño",
    post_7_subtitulo: "Voz Visual",
    post_8_imagen: "/assets/img/nova/post-15.jpg",
    post_8_titulo: "Estudio",
    post_8_subtitulo: "Detrás de Cámaras",
  },
  resultados: {
    imagen: "/assets/img/nova/edificio-02.jpg",
    dato_principal: "50+",
    dato_principal_texto: "Marcas creciendo con nosotros",
    stat_1_numero: "2019",
    stat_1_texto: "Año de fundación",
    stat_2_numero: "5",
    stat_2_texto: "Fases del Método Nova",
    stat_3_numero: "10+",
    stat_3_texto: "Industrias atendidas",
    stat_4_numero: "100+",
    stat_4_texto: "Proyectos entregados",
  },
  testimonios: {
    titulo: "Testimonios",
    imagen: "/assets/img/nova/av-lens.svg",
    testimonio_1_texto:
      "“Trabajar con Nova Studios cambió la forma en que nuestra marca se presenta. Primero nos dieron una estrategia clara y después contenido que realmente suena a nosotros — y el crecimiento llegó. Todo conectado, todo con propósito.”",
    testimonio_1_nombre: "Cliente de Nova",
    testimonio_1_rol: "Alianza de Marca",
    testimonio_2_texto:
      "“Nova no es un proveedor más: es un socio estratégico. Entendieron nuestro negocio antes de producir una sola pieza, y eso se nota en cada entrega. Recomendaciones honestas y calidad excepcional.”",
    testimonio_2_nombre: "Cliente de Nova",
    testimonio_2_rol: "Empresa en Crecimiento",
    testimonio_3_texto:
      "“El Método Nova puso orden donde había ruido: posicionamiento claro, contenido consistente y resultados que podemos medir. La mejor decisión que tomamos para nuestra marca.”",
    testimonio_3_nombre: "Cliente de Nova",
    testimonio_3_rol: "Marca Personal",
  },
  faq: {
    titulo: "Preguntas Frecuentes",
    imagen: "/assets/img/nova/av-strategy.svg",
    dato_numero: "5",
    dato_texto: "Fases del Método Nova",
    pregunta_1: "¿Con qué tipo de empresas trabaja Nova?",
    respuesta_1:
      "Acompañamos a pequeñas y medianas empresas, startups, restaurantes y hospitalidad, prácticas médicas, bienes raíces, iglesias y organizaciones sin fines de lucro, marcas personales e instituciones educativas, en Norteamérica y Latinoamérica.",
    pregunta_2: "¿Cómo cotizan sus proyectos?",
    respuesta_2:
      "Cotizamos por valor y transformación, no por hora. Cada propuesta se diseña alrededor de tus objetivos: agenda una consulta y recibirás una cotización personalizada con entregables, cronograma e inversión.",
    pregunta_3: "¿Cómo es el proceso para empezar?",
    respuesta_3:
      "Comienza con una consulta inicial y una llamada de descubrimiento para entender tus objetivos, retos y audiencia. Después preparamos una propuesta con servicios, entregables y cronograma, y al aceptarla iniciamos el onboarding.",
    pregunta_4: "¿Qué diferencia a Nova de otras agencias?",
    respuesta_4:
      "Integramos la producción creativa con el pensamiento estratégico empresarial. No ejecutamos por ejecutar: cada pieza parte de una estrategia y se mide contra objetivos de negocio. Somos un socio estratégico, no un proveedor.",
    pregunta_5: "¿Qué incluyen los planes Essential, Growth y Scale?",
    respuesta_5:
      "Essential establece una presencia de marca consistente; Growth expande tu marketing con más producción y campañas estratégicas; Scale suma dirección creativa completa y producción a gran escala. También creamos planes personalizados.",
  },
  contacto_inicio: {
    titulo: "Contacto",
    parrafo:
      "Si tu marca está lista para crecer, nosotros también. Cuéntanos a dónde quieres llegar y diseñaremos el camino: estrategia, narrativa y producción con propósito.",
    correo: "hello@novastudios.agency",
    instagram: "@nova.studios_co",
    cobertura: "Norteamérica y Latinoamérica",
    form_titulo: "Agenda tu consulta inicial",
  },
  header: {
    boton: "HABLEMOS",
  },
  footer: {
    descripcion:
      "El sistema operativo detrás del crecimiento creativo. Estrategia. Narrativa. Producción. 📍 Norteamérica y Latinoamérica",
    titulo_servicios: "Servicios",
    titulo_recursos: "Recursos",
    titulo_suscribete: "Suscríbete",
  },
  servicios_pagina: {
    intro_titulo: "Soluciones diseñadas alrededor de tus objetivos",
    intro_parrafo:
      "Organizamos nuestro trabajo en tres grandes categorías — Desarrollo de Marca, Contenido y Producción, y Crecimiento Digital — que se traducen en seis servicios concretos. Todos comparten un mismo punto de partida: la estrategia.",
    boton_servicio: "AGENDA UNA CONSULTA",
    s_1_titulo: "Estrategia de Marca",
    s_1_intro:
      "Todo gran trabajo empieza con entendimiento. Definimos la dirección estratégica de tu marca antes de producir cualquier pieza, para que cada movimiento tenga un propósito claro.",
    s_1_item_1: "Posicionamiento y diferenciación",
    s_1_item_2: "Mensaje central y pilares de comunicación",
    s_1_item_3: "Definición de audiencia y objetivos",
    s_1_item_4: "Dirección creativa y de marca",
    s_1_imagen: "/assets/img/nova/av-strategy.svg",
    s_2_titulo: "Branding",
    s_2_intro:
      "Construimos identidades visuales claras, memorables y consistentes: sistemas de marca que comunican quién eres y por qué importas, en cada punto de contacto.",
    s_2_item_1: "Identidad visual y sistemas de color",
    s_2_item_2: "Tipografía y lenguaje gráfico",
    s_2_item_3: "Mensajería y voz de marca",
    s_2_item_4: "Guías de marca y aplicación",
    s_2_imagen: "/assets/img/nova/av-lens.svg",
    s_3_titulo: "Producción Audiovisual",
    s_3_intro:
      "Fotografía y video con mirada cinematográfica: momentos auténticos, iluminación intencional y calidad premium que genera conexión emocional con tu audiencia.",
    s_3_item_1: "Fotografía de marca y producto",
    s_3_item_2: "Producción de video y narrativa",
    s_3_item_3: "Podcasts y contenido para campañas",
    s_3_item_4: "Contenido para redes sociales",
    s_3_imagen: "/assets/img/nova/cta-side.jpg",
    s_4_titulo: "Marketing Digital",
    s_4_intro:
      "Estrategia, no ruido. Conectamos contenido, canales y campañas en un sistema que convierte la atención en comunidad y la comunidad en crecimiento.",
    s_4_item_1: "Estrategia y gestión de redes sociales",
    s_4_item_2: "Campañas digitales y pauta",
    s_4_item_3: "Calendario y pilares de contenido",
    s_4_item_4: "Crecimiento de audiencia y comunidad",
    s_4_imagen: "/assets/img/nova/av-waveform.svg",
    s_5_titulo: "Desarrollo Web",
    s_5_intro:
      "Tu sitio web es la casa de tu marca. Diseñamos experiencias web que construyen credibilidad, comunican con claridad y convierten visitantes en clientes.",
    s_5_item_1: "Diseño y desarrollo de sitios web",
    s_5_item_2: "Experiencia de usuario (UX) y conversión",
    s_5_item_3: "Mensajes claros y arquitectura de contenido",
    s_5_item_4: "Credibilidad y presencia de marca",
    s_5_imagen: "/assets/img/nova/av-web.svg",
    s_6_titulo: "Consultoría",
    s_6_intro:
      "Acompañamiento estratégico para equipos que quieren crecer con dirección: pensamiento de negocio aplicado a la creatividad, el marketing y la comunicación.",
    s_6_item_1: "Consultoría creativa y de marca",
    s_6_item_2: "Dirección estratégica de marketing",
    s_6_item_3: "Auditoría de presencia y comunicación",
    s_6_item_4: "Acompañamiento a equipos internos",
    s_6_imagen: "/assets/img/nova/av-clapper.svg",
    cta_titulo: "¿No sabes por dónde empezar?",
    cta_texto:
      "Cada marca está en una etapa distinta. Agenda una llamada de descubrimiento y construyamos juntos la estrategia que tu negocio necesita.",
    cta_boton: "CONOCE LOS PLANES",
  },
  planes_pagina: {
    intro_titulo: "Un plan para cada etapa de tu marca",
    intro_parrafo:
      "En Nova no cotizamos por hora: cotizamos por valor y transformación. Elige el nivel que corresponde a la etapa de tu negocio — establecer, expandir o acelerar — y diseñaremos una propuesta a la medida de tus objetivos.",
    boton_plan: "Agenda una consulta",
    plan_1_nombre: "Nova Essential",
    plan_1_precio: "Cotización personalizada",
    plan_1_ideal:
      "Ideal para empresas que están estableciendo una presencia de marca consistente.",
    plan_1_item_1: "Consistencia de marca",
    plan_1_item_2: "Contenido fundamental",
    plan_1_item_3: "Gestión de redes sociales",
    plan_1_item_4: "Recursos creativos profesionales",
    plan_2_nombre: "Nova Growth",
    plan_2_precio: "Cotización personalizada",
    plan_2_ideal:
      "Ideal para empresas listas para expandir su marketing y su audiencia.",
    plan_2_item_1: "Mayor producción de contenido",
    plan_2_item_2: "Gestión multiplataforma",
    plan_2_item_3: "Campañas estratégicas",
    plan_2_item_4: "Crecimiento de audiencia",
    plan_3_nombre: "Nova Scale",
    plan_3_precio: "Cotización personalizada",
    plan_3_ideal:
      "Ideal para empresas que buscan crecimiento acelerado y alianzas a largo plazo.",
    plan_3_item_1: "Dirección creativa completa",
    plan_3_item_2: "Estrategia avanzada de marketing",
    plan_3_item_3: "Producción a gran escala",
    plan_3_item_4: "Desarrollo empresarial a largo plazo",
    pers_titulo: "Planes Personalizados",
    pers_texto:
      "¿Tu proyecto no encaja en un paquete? También trabajamos por proyecto — branding, sitios web, campañas, producciones — y como alianza recurrente con dirección creativa mensual. Creamos soluciones diseñadas alrededor de tus objetivos.",
    pers_boton: "CUÉNTANOS TU PROYECTO",
    proceso_titulo: "Proceso de Contratación",
    proceso_parrafo:
      "Trabajar con Nova es simple y transparente. En cinco pasos pasamos de una primera conversación a un plan de crecimiento en marcha.",
    proceso_boton: "EMPEZAR AHORA",
    paso_1_titulo: "Consulta inicial",
    paso_1_texto: "Escribes o agendas una llamada y nos cuentas sobre tu marca.",
    paso_2_titulo: "Llamada de descubrimiento",
    paso_2_texto:
      "Conversamos sobre objetivos, retos, audiencia, presupuesto esperado y resultados deseados.",
    paso_3_titulo: "Evaluación interna",
    paso_3_texto:
      "Analizamos tu proyecto y definimos el enfoque correcto para tu etapa de crecimiento.",
    paso_4_titulo: "Propuesta",
    paso_4_texto:
      "Recibes una propuesta con objetivos, servicios, entregables, cronograma, inversión y condiciones.",
    paso_5_titulo: "Acuerdo y onboarding",
    paso_5_texto:
      "Firmamos el acuerdo, alineamos el cronograma y arrancamos con el proceso de integración.",
  },
  nosotros_pagina: {
    quienes_titulo: "Quiénes Somos",
    quienes_parrafo:
      "Para empresas y organizaciones que buscan mejorar la presencia de su marca y su comunicación, Nova Studios es una agencia de crecimiento creativo que combina estrategia, narrativa y producción para crear experiencias de marca significativas y crecimiento sostenible.",
    quienes_punto_1: "Estratégicos, creativos y cercanos",
    quienes_punto_2: "Calidad premium en cada detalle",
    quienes_punto_3: "Socios de tu crecimiento, no proveedores",
    quienes_boton: "HABLEMOS",
    quienes_imagen: "/assets/img/nova/cta-side.jpg",
    historia_titulo: "Nuestra Historia",
    historia_parrafo_1:
      "Nova Studios nació en 2019 como una compañía de fotografía y producción de video. Con cada proyecto entendimos algo esencial: las marcas no necesitan más contenido, necesitan contenido con estrategia. Así evolucionamos hasta convertirnos en una agencia integral de crecimiento creativo que hoy acompaña a empresas en Norteamérica y Latinoamérica.",
    historia_parrafo_2:
      "Detrás de Nova están Gamaliel Noriega, fundador y director creativo con trayectoria en producción audiovisual, branding, marketing y medios; y Stephanie Salas, co-fundadora y directora de operaciones, quien lidera los procesos, los sistemas y la experiencia del cliente.",
    historia_imagen: "/assets/img/nova/av-camera.svg",
    mision_titulo: "Misión",
    mision_parrafo:
      "Empoderar a empresas y organizaciones con soluciones creativas estratégicas que transformen su visión en historias significativas, marcas poderosas y crecimiento medible.",
    vision_titulo: "Visión",
    vision_parrafo:
      "Convertirnos en una agencia líder de crecimiento creativo, reconocida en Norteamérica y Latinoamérica por construir marcas a través del pensamiento estratégico, la creatividad excepcional y las alianzas a largo plazo.",
    valores_titulo: "Nuestros Valores",
    valores_parrafo:
      "Cinco principios guían cada decisión, cada proyecto y cada relación que construimos. No son frases en la pared: son la forma en que trabajamos todos los días.",
    valor_1_titulo: "La Excelencia Es Nuestro Estándar",
    valor_1_texto:
      "La calidad está en los detalles. Cada entrega refleja el nivel premium que tu marca merece.",
    valor_2_titulo: "Estrategia Antes que Ejecución",
    valor_2_texto:
      "Todo gran trabajo empieza con entendimiento. Primero pensamos, después producimos.",
    valor_3_titulo: "Personas Antes que Proyectos",
    valor_3_texto:
      "Relaciones basadas en confianza, comunicación clara y cuidado genuino.",
    valor_4_titulo: "Crecimiento a Través de Alianzas",
    valor_4_texto:
      "Nuestros clientes son socios, no transacciones. Crecemos junto a las marcas que acompañamos.",
    valor_5_titulo: "Los Sistemas Crean Excelencia",
    valor_5_texto:
      "Procesos que permiten calidad consistente y escalar con propósito.",
    filosofia_titulo: "Filosofía: Creatividad con Propósito",
    filosofia_parrafo:
      "No creamos contenido simplemente para llenar plataformas. Creamos experiencias estratégicas diseñadas para generar impacto. Cada proyecto parte de cuatro preguntas:",
    filosofia_pregunta_1: "¿Quién es la audiencia?",
    filosofia_pregunta_2: "¿Qué mensaje hay que comunicar?",
    filosofia_pregunta_3: "¿Qué acción debe tomar la audiencia?",
    filosofia_pregunta_4: "¿Cómo apoya la creatividad la visión mayor?",
    filosofia_imagen: "/assets/img/nova/av-strategy.svg",
    metodo_titulo: "El Método Nova",
    metodo_parrafo:
      "Nuestro framework estratégico de 5 fases convierte la visión de tu marca en un sistema de crecimiento: de entender tu negocio a medir y optimizar cada resultado.",
    metodo_boton: "EMPECEMOS",
    fase_1_titulo: "Descubrir",
    fase_1_texto:
      "Panorama del negocio, industria, audiencia, marketing actual, identidad de marca, competencia y objetivos.",
    fase_2_titulo: "Definir",
    fase_2_texto:
      "Posicionamiento, mensaje central, pilares de contenido, estilo de comunicación, objetivos y métricas.",
    fase_3_titulo: "Diseñar",
    fase_3_texto:
      "Estrategia de marketing, calendario de contenido, campañas, dirección visual, estructura web y recorrido del cliente.",
    fase_4_titulo: "Entregar",
    fase_4_texto:
      "Producción, diseño, edición, publicación, lanzamiento de campañas e implementación web.",
    fase_5_titulo: "Optimizar",
    fase_5_texto:
      "Medición de rendimiento, interacción, conversión y retroalimentación — y el ciclo vuelve a empezar.",
    equipo_titulo: "Equipo",
    cultura_titulo: "Cultura",
    cultura_parrafo:
      "Creemos en un ambiente creativo donde la excelencia y el cuidado por las personas van de la mano. Trabajar con Nova es trabajar con un equipo que promete y cumple:",
    cultura_promesa_1: "Recomendaciones honestas",
    cultura_promesa_2: "Comunicación clara",
    cultura_promesa_3: "Procesos organizados",
    cultura_promesa_4: "Pensamiento estratégico",
    cultura_promesa_5: "Calidad creativa excepcional",
    cultura_promesa_6: "Respeto por los plazos",
    cultura_promesa_7: "Relación colaborativa",
    cultura_imagen: "/assets/img/nova/av-mic.svg",
  },
  contacto_pagina: {
    form_titulo_1: "¿Tu marca tiene potencial?",
    form_titulo_2: "Construyamos una estrategia",
    boton_enviar: "ENVIAR MENSAJE",
    instagram: "@nova.studios_co",
    correo: "hello@novastudios.agency",
    cobertura: "Norteamérica y Latinoamérica",
    agenda_titulo: "Agenda una Reunión",
    agenda_parrafo:
      "La mejor forma de saber si somos el socio correcto para tu marca es conversar. En cuatro pasos pasamos de un primer mensaje a un plan de crecimiento en marcha.",
    agenda_boton: "AGENDAR AHORA",
    paso_1_titulo: "Consulta inicial",
    paso_1_texto:
      "Escríbenos por el formulario o por Instagram y cuéntanos sobre tu marca.",
    paso_2_titulo: "Llamada de descubrimiento",
    paso_2_texto:
      "Agendamos una reunión para hablar de objetivos, retos, audiencia y resultados deseados.",
    paso_3_titulo: "Propuesta",
    paso_3_texto:
      "Recibes una propuesta clara con servicios, entregables, cronograma e inversión.",
    paso_4_titulo: "Arrancamos",
    paso_4_texto:
      "Firmamos el acuerdo, hacemos el onboarding y tu marca empieza a crecer con propósito.",
    redes_titulo: "Redes Sociales",
    redes_texto:
      "Síguenos para ver el detrás de cámaras, contenido educativo y las historias de las marcas que crecen con Nova.",
    redes_boton: "SÍGUENOS EN INSTAGRAM",
  },
};
