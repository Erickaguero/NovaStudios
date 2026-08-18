
import Breacrumb from '@/common/Breacrumb';
import Header from '@/layouts/headers/Header';
import FooterOne from '@/layouts/footers/FooterOne';
import Link from 'next/link';
import React from 'react';
import { getSectionContent } from '@/lib/content';

// Ícono y ancla de cada servicio son fijos (estructura del sitio); los textos
// e imágenes se editan desde el panel de mantenimiento (sección servicios_pagina).
const serviciosMeta = [
  { id: "estrategia-de-marca", icon: "lightbulb" },
  { id: "branding", icon: "design_services" },
  { id: "produccion-audiovisual", icon: "movie" },
  { id: "marketing-digital", icon: "ads_click" },
  { id: "desarrollo-web", icon: "code" },
  { id: "consultoria", icon: "trending_up" },
];

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path
      d="M12.1473 23.354C12.144 23.354 12.1402 23.354 12.1369 23.354C12.0013 23.3512 11.8733 23.2932 11.7814 23.1937L2.40471 12.9978C2.24392 12.8228 2.22916 12.5592 2.36971 12.3672C2.51025 12.1758 2.76619 12.1102 2.98166 12.2108L11.5638 16.2293C11.636 16.2632 11.7213 16.2468 11.7765 16.1893L24.8676 2.50708C25.0448 2.32169 25.3346 2.30145 25.5359 2.46114C25.7371 2.62083 25.7836 2.90739 25.6431 3.12231L12.6209 23.0712C12.6023 23.1002 12.5804 23.1265 12.5563 23.1511L12.4989 23.2085C12.4054 23.3015 12.2785 23.354 12.1473 23.354Z"
      fill="#FEFEFE" />
  </svg>
);

const Servicios = async () => {
  const c = await getSectionContent('servicios_pagina');

  const servicios = serviciosMeta.map((meta, i) => ({
    ...meta,
    title: c[`s_${i + 1}_titulo`],
    intro: c[`s_${i + 1}_intro`],
    img: c[`s_${i + 1}_imagen`],
    items: [1, 2, 3, 4].map((j) => c[`s_${i + 1}_item_${j}`]).filter(Boolean),
  }));

  return (
    <>
      <Header />
      <Breacrumb title="Servicios" subtitle="Servicios" pagina="servicios" />

      {/* Intro */}
      <div className="about-us-wrapper">
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

              <div className={`col-12 col-md-6 ${i % 2 === 0 ? 'order-md-1' : 'order-md-1'}`}>
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
                    <Link href="/contacto" className="btn btn-primary mt-1"><span>{c.boton_servicio}</span><span>{c.boton_servicio}</span></Link>
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
              <h2>{c.cta_titulo}</h2>
            </div>
            <div className="col-12 col-lg-6">
              <p>{c.cta_texto}</p>
              <Link href="/planes" className="btn btn-primary"><span>{c.cta_boton}</span><span>{c.cta_boton}</span></Link>
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
