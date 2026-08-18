
import React from 'react';
import { getSectionContent } from '@/lib/content';

const FaqNova = async ({ style_2, id = "faq" }: any) => {
  const c = await getSectionContent("faq");
  const faqs = [1, 2, 3, 4, 5]
    .map((n) => ({ q: c[`pregunta_${n}`], a: c[`respuesta_${n}`] }))
    .filter((faq) => faq.q);
  return (
    <>
      <div id={id} className={`faq-wrapper ${style_2 ? 'bg-secondary' : ''}`}>
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-12 col-lg-6">
              <div className="section-heading">
                <h2 className="mb-0">{c.titulo}</h2>
              </div>

              <div className="divider-sm"></div>


              <div className="faq-image">
                <img src={c.imagen} alt="Ilustración de un storyboard con foco estratégico" />


                <div className="faq-info d-flex align-items-center">
                  <h2 className="mb-0">{c.dato_numero}</h2>
                  <p className="mb-0">{c.dato_texto}</p>
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
