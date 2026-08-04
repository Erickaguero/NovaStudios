
import React from 'react';

const steps = [
  { number: 1, title: "Descubrir", text: "Analizamos tu negocio, tu industria, tu audiencia y tu competencia para entender dónde estás y a dónde quieres llegar." },
  { number: 2, title: "Definir", text: "Posicionamiento, mensaje central, pilares de contenido y métricas — un plan claro antes de producir cualquier pieza." },
  { number: 3, title: "Diseñar", text: "Estrategia de marketing, dirección visual, calendario de contenido y recorrido del cliente, todo conectado como un sistema." },
  { number: 4, title: "Entregar", text: "Producción, diseño, edición y lanzamiento — ejecución con calidad premium y respeto por los plazos." },
  { number: 5, title: "Optimizar", text: "Medimos rendimiento, interacción y conversión, aprendemos de los datos y reiniciamos el ciclo para seguir creciendo." },
];

const WorkprocessArea = () => {
  return (
    <>
      <div id="metodo" className="work-process-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5">
            <div className="col-md-5 col-xl-6">
              <div className="section-heading">

                <h2 className="mb-4">El Método Nova</h2>
                <p className="mb-5">El crecimiento con propósito no sucede por accidente. Nuestro
                  framework estratégico de 5 fases conecta estrategia, contenido y distribución en
                  un solo sistema, para que cada pieza que publica tu marca tenga un trabajo que hacer.</p>
                <a href="/contacto" className="btn btn-primary"><span>TRABAJEMOS JUNTOS</span><span>TRABAJEMOS JUNTOS</span></a>
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
