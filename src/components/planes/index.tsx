
import Breacrumb from '@/common/Breacrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import Link from 'next/link';
import React from 'react';

const planes = [
  {
    id: "essential",
    name: "Nova Essential",
    tagline: "Cotización personalizada",
    ideal: "Ideal para empresas que están estableciendo una presencia de marca consistente.",
    items: [
      "Consistencia de marca",
      "Contenido fundamental",
      "Gestión de redes sociales",
      "Recursos creativos profesionales",
    ],
    featured: false,
  },
  {
    id: "growth",
    name: "Nova Growth",
    tagline: "Cotización personalizada",
    ideal: "Ideal para empresas listas para expandir su marketing y su audiencia.",
    items: [
      "Mayor producción de contenido",
      "Gestión multiplataforma",
      "Campañas estratégicas",
      "Crecimiento de audiencia",
    ],
    featured: true,
  },
  {
    id: "scale",
    name: "Nova Scale",
    tagline: "Cotización personalizada",
    ideal: "Ideal para empresas que buscan crecimiento acelerado y alianzas a largo plazo.",
    items: [
      "Dirección creativa completa",
      "Estrategia avanzada de marketing",
      "Producción a gran escala",
      "Desarrollo empresarial a largo plazo",
    ],
    featured: false,
  },
];

const proceso = [
  { title: "Consulta inicial", text: "Escribes o agendas una llamada y nos cuentas sobre tu marca." },
  { title: "Llamada de descubrimiento", text: "Conversamos sobre objetivos, retos, audiencia, presupuesto esperado y resultados deseados." },
  { title: "Evaluación interna", text: "Analizamos tu proyecto y definimos el enfoque correcto para tu etapa de crecimiento." },
  { title: "Propuesta", text: "Recibes una propuesta con objetivos, servicios, entregables, cronograma, inversión y condiciones." },
  { title: "Acuerdo y onboarding", text: "Firmamos el acuerdo, alineamos el cronograma y arrancamos con el proceso de integración." },
];

const Planes = () => {
  return (
    <>
      <HeaderOne />
      <Breacrumb title="Planes" subtitle="Planes" />

      {/* Comparativa / intro */}
      <div id="comparativa" className="about-us-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9 text-center">
              <div className="section-heading">
                <h2 className="mb-4">Un plan para cada etapa de tu marca</h2>
                <p className="mb-0">En Nova no cotizamos por hora: cotizamos por valor y
                  transformación. Elige el nivel que corresponde a la etapa de tu negocio —
                  establecer, expandir o acelerar — y diseñaremos una propuesta a la medida de tus
                  objetivos.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="divider-sm"></div>

        {/* Planes */}
        <div className="price-table-wrapper">
          <div className="container">
            <div className="row g-4">
              {planes.map((plan) => (
                <div id={plan.id} className="col-12 col-md-6 col-lg-4" key={plan.id}>
                  <div className="price-card">
                    <div className="price-info">
                      <h6>{plan.name}</h6>
                      <h3 className="price">{plan.tagline}</h3>
                      <p className="mb-0">{plan.ideal}</p>
                    </div>

                    <ul className="price-description list-unstyled">
                      {plan.items.map((item, j) => (
                        <li key={j}><span className="material-symbols-outlined">check</span> {item}</li>
                      ))}
                    </ul>

                    <div className="choose-plan">
                      <Link href="/contacto" className={`btn ${plan.featured ? 'btn-primary' : 'btn-dark'} w-100`}>
                        <span>Agenda una consulta</span><span>Agenda una consulta</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>

      {/* Personalizados */}
      <div id="personalizados" className="cta-wrapper bg-secondary">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-6">
              <h2>Planes Personalizados</h2>
            </div>
            <div className="col-12 col-lg-6">
              <p>¿Tu proyecto no encaja en un paquete? También trabajamos por proyecto — branding,
                sitios web, campañas, producciones — y como alianza recurrente con dirección
                creativa mensual. Creamos soluciones diseñadas alrededor de tus objetivos.</p>
              <Link href="/contacto" className="btn btn-primary"><span>CUÉNTANOS TU PROYECTO</span><span>CUÉNTANOS TU PROYECTO</span></Link>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>

      {/* Proceso de contratación */}
      <div id="proceso" className="work-process-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5">
            <div className="col-md-5 col-xl-6">
              <div className="section-heading">
                <h2 className="mb-4">Proceso de Contratación</h2>
                <p className="mb-5">Trabajar con Nova es simple y transparente. En cinco pasos pasamos
                  de una primera conversación a un plan de crecimiento en marcha.</p>
                <Link href="/contacto" className="btn btn-primary"><span>EMPEZAR AHORA</span><span>EMPEZAR AHORA</span></Link>
              </div>
            </div>

            <div className="col-md-7 col-xl-6">
              <div className="work-process">
                {proceso.map((paso, i) => (
                  <div className="process-card" key={i}>
                    <div className="number">{i + 1}</div>
                    <div className="process-text">
                      <h4>{paso.title}</h4>
                      <p className="mb-0">{paso.text}</p>
                    </div>
                  </div>
                ))}
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

export default Planes;
