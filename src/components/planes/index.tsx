
import Breacrumb from '@/common/Breacrumb';
import Header from '@/layouts/headers/Header';
import FooterOne from '@/layouts/footers/FooterOne';
import Link from 'next/link';
import React from 'react';
import { getSectionContent } from '@/lib/content';

// El ancla y cuál plan va resaltado son fijos; los textos se editan desde el
// panel de mantenimiento (sección planes_pagina).
const planesMeta = [
  { id: "essential", featured: false },
  { id: "growth", featured: true },
  { id: "scale", featured: false },
];

const Planes = async () => {
  const c = await getSectionContent('planes_pagina');

  const planes = planesMeta.map((meta, i) => ({
    ...meta,
    name: c[`plan_${i + 1}_nombre`],
    tagline: c[`plan_${i + 1}_precio`],
    ideal: c[`plan_${i + 1}_ideal`],
    items: [1, 2, 3, 4].map((j) => c[`plan_${i + 1}_item_${j}`]).filter(Boolean),
  }));

  const proceso = [1, 2, 3, 4, 5].map((n) => ({
    title: c[`paso_${n}_titulo`],
    text: c[`paso_${n}_texto`],
  }));

  return (
    <>
      <Header />
      <Breacrumb title="Planes" subtitle="Planes" />

      {/* Comparativa / intro */}
      <div id="comparativa" className="about-us-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9 text-center">
              <div className="section-heading">
                <h2 className="mb-4">{c.intro_titulo}</h2>
                <p className="mb-0">{c.intro_parrafo}</p>
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
                        <span>{c.boton_plan}</span><span>{c.boton_plan}</span>
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
              <h2>{c.pers_titulo}</h2>
            </div>
            <div className="col-12 col-lg-6">
              <p>{c.pers_texto}</p>
              <Link href="/contacto" className="btn btn-primary"><span>{c.pers_boton}</span><span>{c.pers_boton}</span></Link>
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
                <h2 className="mb-4">{c.proceso_titulo}</h2>
                <p className="mb-5">{c.proceso_parrafo}</p>
                <Link href="/contacto" className="btn btn-primary"><span>{c.proceso_boton}</span><span>{c.proceso_boton}</span></Link>
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
