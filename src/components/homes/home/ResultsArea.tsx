
import React from 'react';

const ResultsArea = () => {
  return (
    <>
      <div id="resultados" className="cta-wrap"
        style={{ backgroundImage: "url(/assets/img/nova/bg-dark.svg)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 justify-content-between align-items-stretch">
            <div className="col-12 col-lg-5 col-xl-5 col-xxl-6">
              <div className="cta-side-image">
                <img className="nova-card-img" src="/assets/img/nova/av-mic.svg" alt="Ilustración de un micrófono de estudio con onda de audio" />
              </div>
            </div>

            <div className="col-12 col-sm-11 col-md-10 col-lg-7 col-xl-6 col-xxl-5">
              <div className="cta-card">

                <div className="total-clients-wrap">
                  <div className="total-number">
                    <h3>50+</h3>
                    <p className="mb-0">Marcas creciendo con nosotros</p>
                  </div>

                </div>


                <div className="cta-stats">
                  <div>
                    <h2>2019</h2>
                    <p className="mb-0">Año de fundación</p>
                  </div>

                  <div>
                    <h2>5</h2>
                    <p className="mb-0">Fases del Método Nova</p>
                  </div>

                  <div>
                    <h2>10+</h2>
                    <p className="mb-0">Industrias atendidas</p>
                  </div>

                  <div>
                    <h2>100+</h2>
                    <p className="mb-0">Proyectos entregados</p>
                  </div>
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

export default ResultsArea;
