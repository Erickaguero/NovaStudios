
import React from 'react';
import { getSectionContent } from '@/lib/content';

const WorkprocessArea = async () => {
  const c = await getSectionContent('metodo_inicio');
  const steps = [1, 2, 3, 4, 5].map((n) => ({
    number: n,
    title: c[`paso_${n}_titulo`],
    text: c[`paso_${n}_texto`],
  }));
  return (
    <>
      <div id="metodo" className="work-process-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5">
            <div className="col-md-5 col-xl-6">
              <div className="section-heading">

                <h2 className="mb-4">{c.titulo}</h2>
                <p className="mb-5">{c.parrafo}</p>
                <a href="/contacto" className="btn btn-primary"><span>{c.boton}</span><span>{c.boton}</span></a>
              </div>
            </div>

            <div className="col-md-7 col-xl-6">
              <div className="work-process">
                {steps.map((step) => (
                  <div className="process-card" key={step.number}>
                    <div className="number">{step.number}</div>
                    <div className="process-text">
                      <h4>{step.title}</h4>
                      <p className="mb-0">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default WorkprocessArea;
