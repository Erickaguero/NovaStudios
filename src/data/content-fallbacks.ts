// Contenido por defecto del sitio. Si un texto no existe (o no se puede leer)
// en Supabase, se muestra el valor de este archivo — el sitio nunca queda vacío.

export const contentFallbacks: Record<string, Record<string, string>> = {
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
};
