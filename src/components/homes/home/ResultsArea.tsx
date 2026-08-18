
import React from 'react';
import { getSectionContent } from '@/lib/content';

const ResultsArea = async () => {
  const c = await getSectionContent('resultados');
  return (
    <>
      <div id="resultados" className="cta-wrap"
        style={{ backgroundImage: "url(/assets/img/nova/bg-dark.svg)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 justify-content-between align-items-stretch">
            <div className="col-12 col-lg-5 col-xl-5 col-xxl-6">
              <div className="cta-side-image">
                <img className="nova-card-img" src={c.imagen} alt="Entrada principal del edificio de Nova Studios" />
              </div>
            </div>

            <div className="col-12 col-sm-11 col-md-10 col-lg-7 col-xl-6 col-xxl-5">
              <div className="cta-card">

                <div className="total-clients-wrap">
                  <div className="total-number">
                    <h3>{c.dato_principal}</h3>
                    <p className="mb-0">{c.dato_principal_texto}</p>
                  </div>

                </div>


                <div className="cta-stats">
                  {[1, 2, 3, 4].map((n) => (
                    <div key={n}>
                      <h2>{c[`stat_${n}_numero`]}</h2>
                      <p className="mb-0">{c[`stat_${n}_texto`]}</p>
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

export default ResultsArea;
