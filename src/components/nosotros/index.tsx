
import Breacrumb from '@/common/Breacrumb';
import Header from '@/layouts/headers/Header';
import FooterOne from '@/layouts/footers/FooterOne';
import Link from 'next/link';
import React from 'react';
import { getTeamMembers } from '@/lib/team';
import { getSectionContent } from '@/lib/content';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path
      d="M12.1473 23.354C12.144 23.354 12.1402 23.354 12.1369 23.354C12.0013 23.3512 11.8733 23.2932 11.7814 23.1937L2.40471 12.9978C2.24392 12.8228 2.22916 12.5592 2.36971 12.3672C2.51025 12.1758 2.76619 12.1102 2.98166 12.2108L11.5638 16.2293C11.636 16.2632 11.7213 16.2468 11.7765 16.1893L24.8676 2.50708C25.0448 2.32169 25.3346 2.30145 25.5359 2.46114C25.7371 2.62083 25.7836 2.90739 25.6431 3.12231L12.6209 23.0712C12.6023 23.1002 12.5804 23.1265 12.5563 23.1511L12.4989 23.2085C12.4054 23.3015 12.2785 23.354 12.1473 23.354Z"
      fill="#FEFEFE" />
  </svg>
);

const Nosotros = async () => {
  const [equipo, c] = await Promise.all([
    getTeamMembers(),
    getSectionContent('nosotros_pagina'),
  ]);

  const valores = [1, 2, 3, 4, 5].map((n) => ({
    title: c[`valor_${n}_titulo`],
    text: c[`valor_${n}_texto`],
  }));

  const metodo = [1, 2, 3, 4, 5].map((n) => ({
    title: c[`fase_${n}_titulo`],
    text: c[`fase_${n}_texto`],
  }));

  const preguntas = [1, 2, 3, 4].map((n) => c[`filosofia_pregunta_${n}`]).filter(Boolean);
  const promesa = [1, 2, 3, 4, 5, 6, 7].map((n) => c[`cultura_promesa_${n}`]).filter(Boolean);

  return (
    <>
      <Header />
      <Breacrumb title="Nosotros" subtitle="Nosotros" pagina="nosotros" />

      {/* Quiénes Somos */}
      <div id="quienes-somos" className="about-us-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 g-xl-5 align-items-center">
            <div className="col-12 col-md-6">
              <div className="about-us-thumbnail">
                <img className="nova-card-img" src={c.quienes_imagen} alt="El equipo de Nova Studios grabando una producción en vivo" />              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="about-us-text-content ps-md-4">
                <div className="section-heading">
                  <h2 className="mb-0">{c.quienes_titulo}</h2>
                </div>
                <p className="mb-0">{c.quienes_parrafo}</p>

                <ul className="ps-0 list-unstyled mb-0">
                  <li><CheckIcon /> {c.quienes_punto_1}</li>
                  <li><CheckIcon /> {c.quienes_punto_2}</li>
                  <li><CheckIcon /> {c.quienes_punto_3}</li>
                </ul>

                <div>
                  <Link href="/contacto" className="btn btn-primary mt-1"><span>{c.quienes_boton}</span><span>{c.quienes_boton}</span></Link>
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
                <img className="nova-card-img" src={c.historia_imagen} alt="Ilustración de una cámara de cine, el origen de Nova Studios" />              </div>
            </div>

            <div className="col-12 col-md-6 order-md-1">
              <div className="about-us-text-content pe-md-4">
                <div className="section-heading">
                  <h2 className="mb-0">{c.historia_titulo}</h2>
                </div>
                <p className="mb-0">{c.historia_parrafo_1}</p>
                <p className="mb-0">{c.historia_parrafo_2}</p>
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
                <h2 className="mb-4">{c.mision_titulo}</h2>
                <p className="mb-0">{c.mision_parrafo}</p>
              </div>
            </div>

            <div id="vision" className="col-12 col-lg-6">
              <div className="section-heading">
                <h2 className="mb-4">{c.vision_titulo}</h2>
                <p className="mb-0">{c.vision_parrafo}</p>
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
                <h2 className="mb-4">{c.valores_titulo}</h2>
                <p className="mb-0">{c.valores_parrafo}</p>
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
                <img className="nova-card-img" src={c.filosofia_imagen} alt="Ilustración de un storyboard con foco estratégico" />              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="about-us-text-content ps-md-4">
                <div className="section-heading">
                  <h2 className="mb-0">{c.filosofia_titulo}</h2>
                </div>
                <p className="mb-0">{c.filosofia_parrafo}</p>

                <ul className="ps-0 list-unstyled mb-0">
                  {preguntas.map((pregunta, i) => (
                    <li key={i}><CheckIcon /> {pregunta}</li>
                  ))}
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
                <h2 className="mb-4">{c.metodo_titulo}</h2>
                <p className="mb-5">{c.metodo_parrafo}</p>
                <Link href="/contacto" className="btn btn-primary"><span>{c.metodo_boton}</span><span>{c.metodo_boton}</span></Link>
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
                <h2 className="mb-0">{c.equipo_titulo}</h2>
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
                <img className="nova-card-img" src={c.cultura_imagen} alt="Ilustración de un micrófono de estudio, la voz de la cultura Nova" />              </div>
            </div>

            <div className="col-12 col-md-6 order-md-1">
              <div className="about-us-text-content pe-md-4">
                <div className="section-heading">
                  <h2 className="mb-0">{c.cultura_titulo}</h2>
                </div>
                <p className="mb-0">{c.cultura_parrafo}</p>

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
