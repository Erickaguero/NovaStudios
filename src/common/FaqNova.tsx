
import React from 'react';

const faqs = [
  {
    q: "¿Con qué tipo de empresas trabaja Nova?",
    a: "Acompañamos a pequeñas y medianas empresas, startups, restaurantes y hospitalidad, prácticas médicas, bienes raíces, iglesias y organizaciones sin fines de lucro, marcas personales e instituciones educativas, en Norteamérica y Latinoamérica.",
  },
  {
    q: "¿Cómo cotizan sus proyectos?",
    a: "Cotizamos por valor y transformación, no por hora. Cada propuesta se diseña alrededor de tus objetivos: agenda una consulta y recibirás una cotización personalizada con entregables, cronograma e inversión.",
  },
  {
    q: "¿Cómo es el proceso para empezar?",
    a: "Comienza con una consulta inicial y una llamada de descubrimiento para entender tus objetivos, retos y audiencia. Después preparamos una propuesta con servicios, entregables y cronograma, y al aceptarla iniciamos el onboarding.",
  },
  {
    q: "¿Qué diferencia a Nova de otras agencias?",
    a: "Integramos la producción creativa con el pensamiento estratégico empresarial. No ejecutamos por ejecutar: cada pieza parte de una estrategia y se mide contra objetivos de negocio. Somos un socio estratégico, no un proveedor.",
  },
  {
    q: "¿Qué incluyen los planes Essential, Growth y Scale?",
    a: "Essential establece una presencia de marca consistente; Growth expande tu marketing con más producción y campañas estratégicas; Scale suma dirección creativa completa y producción a gran escala. También creamos planes personalizados.",
  },
];

const FaqNova = ({ style_2, id = "faq" }: any) => {
  return (
    <>
      <div id={id} className={`faq-wrapper ${style_2 ? 'bg-secondary' : ''}`}>
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-12 col-lg-6">
              <div className="section-heading">
                <h2 className="mb-0">Preguntas Frecuentes</h2>
              </div>

              <div className="divider-sm"></div>


              <div className="faq-image">
                <img src="/assets/img/nova/av-strategy.svg" alt="Ilustración de un storyboard con foco estratégico" />


                <div className="faq-info d-flex align-items-center">
                  <h2 className="mb-0">5</h2>
                  <p className="mb-0">Fases del Método Nova</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="faq-accordion ps-lg-4">
                <div className="accordion" id="faqAccordion">

                  {faqs.map((faq, i) => (
                    <div className="accordion-item" key={i}>
                      <h2 className="accordion-header">
                        <button className={`accordion-button ${i === 0 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse"
                          data-bs-target={`#faqQuestion${i + 1}`} aria-expanded={i === 0 ? "true" : "false"} aria-controls={`faqQuestion${i + 1}`}>
                          {faq.q}
                        </button>
                      </h2>
                      <div id={`faqQuestion${i + 1}`} className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`} data-bs-parent="#faqAccordion">
                        <div className="accordion-body pt-0">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default FaqNova;
