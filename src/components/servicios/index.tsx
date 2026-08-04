
import Breacrumb from '@/common/Breacrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import Link from 'next/link';
import React from 'react';

const servicios = [
  {
    id: "estrategia-de-marca",
    icon: "lightbulb",
    title: "Estrategia de Marca",
    img: "/assets/img/nova/av-strategy.svg",
    intro: "Todo gran trabajo empieza con entendimiento. Definimos la dirección estratégica de tu marca antes de producir cualquier pieza, para que cada movimiento tenga un propósito claro.",
    items: [
      "Posicionamiento y diferenciación",
      "Mensaje central y pilares de comunicación",
      "Definición de audiencia y objetivos",
      "Dirección creativa y de marca",
    ],
  },
  {
    id: "branding",
    icon: "design_services",
    title: "Branding",
    img: "/assets/img/nova/av-lens.svg",
    intro: "Construimos identidades visuales claras, memorables y consistentes: sistemas de marca que comunican quién eres y por qué importas, en cada punto de contacto.",
    items: [
      "Identidad visual y sistemas de color",
      "Tipografía y lenguaje gráfico",
      "Mensajería y voz de marca",
      "Guías de marca y aplicación",
    ],
  },
  {
    id: "produccion-audiovisual",
    icon: "movie",
    title: "Producción Audiovisual",
    img: "/assets/img/nova/cta-side.jpg",
    intro: "Fotografía y video con mirada cinematográfica: momentos auténticos, iluminación intencional y calidad premium que genera conexión emocional con tu audiencia.",
    items: [
      "Fotografía de marca y producto",
      "Producción de video y narrativa",
      "Podcasts y contenido para campañas",
      "Contenido para redes sociales",
    ],
  },
  {
    id: "marketing-digital",
    icon: "ads_click",
    title: "Marketing Digital",
    img: "/assets/img/nova/av-waveform.svg",
    intro: "Estrategia, no ruido. Conectamos contenido, canales y campañas en un sistema que convierte la atención en comunidad y la comunidad en crecimiento.",
    items: [
      "Estrategia y gestión de redes sociales",
      "Campañas digitales y pauta",
      "Calendario y pilares de contenido",
      "Crecimiento de audiencia y comunidad",
    ],
  },
  {
    id: "desarrollo-web",
    icon: "code",
    title: "Desarrollo Web",
    img: "/assets/img/nova/av-web.svg",
    intro: "Tu sitio web es la casa de tu marca. Diseñamos experiencias web que construyen credibilidad, comunican con claridad y convierten visitantes en clientes.",
    items: [
      "Diseño y desarrollo de sitios web",
      "Experiencia de usuario (UX) y conversión",
      "Mensajes claros y arquitectura de contenido",
      "Credibilidad y presencia de marca",
    ],
  },
  {
    id: "consultoria",
    icon: "trending_up",
    title: "Consultoría",
    img: "/assets/img/nova/av-clapper.svg",
    intro: "Acompañamiento estratégico para equipos que quieren crecer con dirección: pensamiento de negocio aplicado a la creatividad, el marketing y la comunicación.",
    items: [
      "Consultoría creativa y de marca",
      "Dirección estratégica de marketing",
      "Auditoría de presencia y comunicación",
      "Acompañamiento a equipos internos",
    ],
  },
];

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path
      d="M12.1473 23.354C12.144 23.354 12.1402 23.354 12.1369 23.354C12.0013 23.3512 11.8733 23.2932 11.7814 23.1937L2.40471 12.9978C2.24392 12.8228 2.22916 12.5592 2.36971 12.3672C2.51025 12.1758 2.76619 12.1102 2.98166 12.2108L11.5638 16.2293C11.636 16.2632 11.7213 16.2468 11.7765 16.1893L24.8676 2.50708C25.0448 2.32169 25.3346 2.30145 25.5359 2.46114C25.7371 2.62083 25.7836 2.90739 25.6431 3.12231L12.6209 23.0712C12.6023 23.1002 12.5804 23.1265 12.5563 23.1511L12.4989 23.2085C12.4054 23.3015 12.2785 23.354 12.1473 23.354Z"
      fill="#FEFEFE" />
  </svg>
);

const Servicios = () => {
  return (
    <>
      <HeaderOne />
      <Breacrumb title="Servicios" subtitle="Servicios" />

      {/* Intro */}
      <div className="about-us-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9 text-center">
              <div className="section-heading">
                <h2 className="mb-4">Soluciones diseñadas alrededor de tus objetivos</h2>
                <p className="mb-0">Organizamos nuestro trabajo en tres grandes categorías —
                  Desarrollo de Marca, Contenido y Producción, y Crecimiento Digital — que se
                  traducen en seis servicios concretos. Todos comparten un mismo punto de partida:
                  la estrategia.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>

      {/* Servicios */}
      {servicios.map((servicio, i) => (
        <div id={servicio.id} key={servicio.id} className={`about-us-wrapper ${i % 2 === 0 ? 'bg-secondary' : ''}`}>
          <div className="divider"></div>

          <div className="container">
            <div className="row g-4 g-xl-5 align-items-center">
              <div className={`col-12 col-md-6 ${i % 2 === 0 ? '' : 'order-md-2'}`}>
                <div className="about-us-thumbnail">
                  <img className="nova-card-img" src={servicio.img} alt={servicio.title} />
                </div>
              </div>

              <div className={`col-12 col-md-6 ${i % 2 === 0 ? '' : 'order-md-1'}`}>
                <div className={`about-us-text-content ${i % 2 === 0 ? 'ps-md-4' : 'pe-md-4'}`}>
                  <div className="section-heading">
                    <span className="material-symbols-outlined mb-3" style={{ fontSize: '48px', color: '#ECC80B' }}>{servicio.icon}</span>
                    <h2 className="mb-0">{servicio.title}</h2>
                  </div>
                  <p className="mb-0">{servicio.intro}</p>

                  <ul className="ps-0 list-unstyled mb-0">
                    {servicio.items.map((item, j) => (
                      <li key={j}><CheckIcon /> {item}</li>
                    ))}
                  </ul>

                  <div>
                    <Link href="/contacto" className="btn btn-primary mt-1"><span>AGENDA UNA CONSULTA</span><span>AGENDA UNA CONSULTA</span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="divider"></div>
        </div>
      ))}

      {/* CTA final */}
      <div className="cta-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-6">
              <h2>¿No sabes por dónde empezar?</h2>
            </div>
            <div className="col-12 col-lg-6">
              <p>Cada marca está en una etapa distinta. Agenda una llamada de descubrimiento y
                construyamos juntos la estrategia que tu negocio necesita.</p>
              <Link href="/planes" className="btn btn-primary"><span>CONOCE LOS PLANES</span><span>CONOCE LOS PLANES</span></Link>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>

      <FooterOne />
    </>
  );
};

export default Servicios;
