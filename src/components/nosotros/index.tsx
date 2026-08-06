
import Breacrumb from '@/common/Breacrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import Link from 'next/link';
import React from 'react';
import { getTeamMembers } from '@/lib/team';

const valores = [
  { title: "La Excelencia Es Nuestro Estándar", text: "La calidad está en los detalles. Cada entrega refleja el nivel premium que tu marca merece." },
  { title: "Estrategia Antes que Ejecución", text: "Todo gran trabajo empieza con entendimiento. Primero pensamos, después producimos." },
  { title: "Personas Antes que Proyectos", text: "Relaciones basadas en confianza, comunicación clara y cuidado genuino." },
  { title: "Crecimiento a Través de Alianzas", text: "Nuestros clientes son socios, no transacciones. Crecemos junto a las marcas que acompañamos." },
  { title: "Los Sistemas Crean Excelencia", text: "Procesos que permiten calidad consistente y escalar con propósito." },
];

const metodo = [
  { title: "Descubrir", text: "Panorama del negocio, industria, audiencia, marketing actual, identidad de marca, competencia y objetivos." },
  { title: "Definir", text: "Posicionamiento, mensaje central, pilares de contenido, estilo de comunicación, objetivos y métricas." },
  { title: "Diseñar", text: "Estrategia de marketing, calendario de contenido, campañas, dirección visual, estructura web y recorrido del cliente." },
  { title: "Entregar", text: "Producción, diseño, edición, publicación, lanzamiento de campañas e implementación web." },
  { title: "Optimizar", text: "Medición de rendimiento, interacción, conversión y retroalimentación — y el ciclo vuelve a empezar." },
];

const promesa = [
  "Recomendaciones honestas",
  "Comunicación clara",
  "Procesos organizados",
  "Pensamiento estratégico",
  "Calidad creativa excepcional",
  "Respeto por los plazos",
  "Relación colaborativa",
];

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path
      d="M12.1473 23.354C12.144 23.354 12.1402 23.354 12.1369 23.354C12.0013 23.3512 11.8733 23.2932 11.7814 23.1937L2.40471 12.9978C2.24392 12.8228 2.22916 12.5592 2.36971 12.3672C2.51025 12.1758 2.76619 12.1102 2.98166 12.2108L11.5638 16.2293C11.636 16.2632 11.7213 16.2468 11.7765 16.1893L24.8676 2.50708C25.0448 2.32169 25.3346 2.30145 25.5359 2.46114C25.7371 2.62083 25.7836 2.90739 25.6431 3.12231L12.6209 23.0712C12.6023 23.1002 12.5804 23.1265 12.5563 23.1511L12.4989 23.2085C12.4054 23.3015 12.2785 23.354 12.1473 23.354Z"
      fill="#FEFEFE" />
  </svg>
);

const Nosotros = async () => {
  const equipo = await getTeamMembers();

  return (
    <>
      <HeaderOne />
      <Breacrumb title="Nosotros" subtitle="Nosotros" />

      {/* Quiénes Somos */}
      <div id="quienes-somos" className="about-us-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 g-xl-5 align-items-center">
            <div className="col-12 col-md-6">
              <div className="about-us-thumbnail">
                <img className="nova-card-img" src="/assets/img/nova/cta-side.jpg" alt="El equipo de Nova Studios grabando una producción en vivo" />              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="about-us-text-content ps-md-4">
                <div className="section-heading">
                  <h2 className="mb-0">Quiénes Somos</h2>
                </div>
                <p className="mb-0">Para empresas y organizaciones que buscan mejorar la presencia de
                  su marca y su comunicación, Nova Studios es una agencia de crecimiento creativo que
                  combina estrategia, narrativa y producción para crear experiencias de marca
                  significativas y crecimiento sostenible.</p>

                <ul className="ps-0 list-unstyled mb-0">
                  <li><CheckIcon /> Estratégicos, creativos y cercanos</li>
                  <li><CheckIcon /> Calidad premium en cada detalle</li>
                  <li><CheckIcon /> Socios de tu crecimiento, no proveedores</li>
                </ul>

                <div>
                  <Link href="/contacto" className="btn btn-primary mt-1"><span>HABLEMOS</span><span>HABLEMOS</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>

      {/* Nuestra Historia */}
      <div id="historia" className="about-us-wrapper bg-secondary">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 g-xl-5 align-items-center">
            <div className="col-12 col-md-6 order-md-2">
              <div className="about-us-thumbnail">
                <img className="nova-card-img" src="/assets/img/nova/av-camera.svg" alt="Ilustración de una cámara de cine, el origen de Nova Studios" />              </div>
            </div>

            <div className="col-12 col-md-6 order-md-1">
              <div className="about-us-text-content pe-md-4">
                <div className="section-heading">
                  <h2 className="mb-0">Nuestra Historia</h2>
                </div>
                <p className="mb-0">Nova Studios nació en 2019 como una compañía de fotografía y
                  producción de video. Con cada proyecto entendimos algo esencial: las marcas no
                  necesitan más contenido, necesitan contenido con estrategia. Así evolucionamos
                  hasta convertirnos en una agencia integral de crecimiento creativo que hoy
                  acompaña a empresas en Norteamérica y Latinoamérica.</p>
                <p className="mb-0">Detrás de Nova están Gamaliel Noriega, fundador y director
                  creativo con trayectoria en producción audiovisual, branding, marketing y medios;
                  y Stephanie Salas, co-fundadora y directora de operaciones, quien lidera los
                  procesos, los sistemas y la experiencia del cliente.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>

      {/* Misión y Visión */}
      <div className="work-process-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 g-lg-5">
            <div id="mision" className="col-12 col-lg-6">
              <div className="section-heading">
                <h2 className="mb-4">Misión</h2>
                <p className="mb-0">Empoderar a empresas y organizaciones con soluciones creativas
                  estratégicas que transformen su visión en historias significativas, marcas
                  poderosas y crecimiento medible.</p>
              </div>
            </div>

            <div id="vision" className="col-12 col-lg-6">
              <div className="section-heading">
                <h2 className="mb-4">Visión</h2>
                <p className="mb-0">Convertirnos en una agencia líder de crecimiento creativo,
                  reconocida en Norteamérica y Latinoamérica por construir marcas a través del
                  pensamiento estratégico, la creatividad excepcional y las alianzas a largo plazo.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>

      {/* Valores */}
      <div id="valores" className="work-process-wrapper bg-secondary">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5">
            <div className="col-md-5 col-xl-6">
              <div className="section-heading">
                <h2 className="mb-4">Nuestros Valores</h2>
                <p className="mb-0">Cinco principios guían cada decisión, cada proyecto y cada
                  relación que construimos. No son frases en la pared: son la forma en que
                  trabajamos todos los días.</p>
              </div>
            </div>

            <div className="col-md-7 col-xl-6">
              <div className="work-process">
                {valores.map((valor, i) => (
                  <div className="process-card" key={i}>
                    <div className="number">{i + 1}</div>
                    <div className="process-text">
                      <h4>{valor.title}</h4>
                      <p className="mb-0">{valor.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>

      {/* Filosofía */}
      <div id="filosofia" className="about-us-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 g-xl-5 align-items-center">
            <div className="col-12 col-md-6">
              <div className="about-us-thumbnail">
                <img className="nova-card-img" src="/assets/img/nova/av-strategy.svg" alt="Ilustración de un storyboard con foco estratégico" />              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="about-us-text-content ps-md-4">
                <div className="section-heading">
                  <h2 className="mb-0">Filosofía: Creatividad con Propósito</h2>
                </div>
                <p className="mb-0">No creamos contenido simplemente para llenar plataformas.
                  Creamos experiencias estratégicas diseñadas para generar impacto. Cada proyecto
                  parte de cuatro preguntas:</p>

                <ul className="ps-0 list-unstyled mb-0">
                  <li><CheckIcon /> ¿Quién es la audiencia?</li>
                  <li><CheckIcon /> ¿Qué mensaje hay que comunicar?</li>
                  <li><CheckIcon /> ¿Qué acción debe tomar la audiencia?</li>
                  <li><CheckIcon /> ¿Cómo apoya la creatividad la visión mayor?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>

      {/* Método */}
      <div id="metodo" className="work-process-wrapper bg-secondary">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5">
            <div className="col-md-5 col-xl-6">
              <div className="section-heading">
                <h2 className="mb-4">El Método Nova</h2>
                <p className="mb-5">Nuestro framework estratégico de 5 fases convierte la visión de
                  tu marca en un sistema de crecimiento: de entender tu negocio a medir y optimizar
                  cada resultado.</p>
                <Link href="/contacto" className="btn btn-primary"><span>EMPECEMOS</span><span>EMPECEMOS</span></Link>
              </div>
            </div>

            <div className="col-md-7 col-xl-6">
              <div className="work-process">
                {metodo.map((fase, i) => (
                  <div className="process-card" key={i}>
                    <div className="number">{i + 1}</div>
                    <div className="process-text">
                      <h4>{fase.title}</h4>
                      <p className="mb-0">{fase.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>

      {/* Equipo */}
      <div id="equipo" className="team-member-wrap">
        <div className="divider"></div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">
                <h2 className="mb-0">Equipo</h2>
              </div>
            </div>
          </div>

          <div className="divider-sm"></div>

          <div className="row g-4 g-lg-5 justify-content-center">
            {equipo.map((miembro, i) => (
              <div className="col-12 col-sm-6 col-lg-4" key={i}>
                <div className="team-card">
                  <img src={miembro.imagen_url} alt={`${miembro.nombre}, ${miembro.rol} de Nova Studios`} />
                  <div className="team-info">
                    <h4>{miembro.nombre}</h4>
                    <p className="mb-0">{miembro.rol}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="divider"></div>
      </div>

      {/* Cultura */}
      <div id="cultura" className="about-us-wrapper bg-secondary">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 g-xl-5 align-items-center">
            <div className="col-12 col-md-6 order-md-2">
              <div className="about-us-thumbnail">
                <img className="nova-card-img" src="/assets/img/nova/av-mic.svg" alt="Ilustración de un micrófono de estudio, la voz de la cultura Nova" />              </div>
            </div>

            <div className="col-12 col-md-6 order-md-1">
              <div className="about-us-text-content pe-md-4">
                <div className="section-heading">
                  <h2 className="mb-0">Cultura</h2>
                </div>
                <p className="mb-0">Creemos en un ambiente creativo donde la excelencia y el cuidado
                  por las personas van de la mano. Trabajar con Nova es trabajar con un equipo que
                  promete y cumple:</p>

                <ul className="ps-0 list-unstyled mb-0">
                  {promesa.map((item, i) => (
                    <li key={i}><CheckIcon /> {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>

      <FooterOne />
    </>
  );
};

export default Nosotros;
