
import Breacrumb from '@/common/Breacrumb';
import Header from '@/layouts/headers/Header';
import FooterOne from '@/layouts/footers/FooterOne';
import Link from 'next/link';
import React from 'react';
import { getPortfolioProjects, youtubeId } from '@/lib/portfolio';
import { getSectionContent } from '@/lib/content';

const Portafolio = async () => {
  const [proyectos, c] = await Promise.all([
    getPortfolioProjects(),
    getSectionContent('portafolio_pagina'),
  ]);

  return (
    <>
      <Header />
      <Breacrumb title="Portafolio" subtitle="Portafolio" pagina="portafolio" />

      {/* Proyectos */}
      <div id="proyectos" className="team-member-wrap">
        <div className="divider"></div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="section-heading">
                <h2 className="mb-4">{c.titulo}</h2>
                <p className="mb-0">{c.parrafo}</p>
              </div>
            </div>
          </div>

          <div className="divider-sm"></div>

          <div className="row g-4 g-lg-5">
            {proyectos.map((proyecto, i) => {
              const videoId = youtubeId(proyecto.youtube_url);
              return (
                <div className="col-12 col-md-6" key={i}>
                  <div className="team-card">
                    {videoId ? (
                      <div style={{ aspectRatio: '16 / 9', borderRadius: '20px', overflow: 'hidden', background: '#1c1c1c' }}>
                        <iframe
                          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                          title={proyecto.titulo}
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
                        />
                      </div>
                    ) : (
                      <img
                        src={proyecto.imagen_url}
                        alt={proyecto.titulo}
                        style={{ aspectRatio: '16 / 9', objectFit: 'cover' }}
                      />
                    )}
                    <div className="team-info">
                      <h4>{proyecto.titulo}</h4>
                      <p className="mb-0">{proyecto.descripcion}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="divider"></div>
      </div>

      {/* Llamado a la acción */}
      <div id="cta" className="about-us-wrapper bg-secondary">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 align-items-center justify-content-between">
            <div className="col-12 col-md-7">
              <div className="section-heading">
                <h2 className="mb-0">{c.cta_titulo}</h2>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="text-md-end">
                <Link href="/contacto" className="btn btn-primary"><span>{c.cta_boton}</span><span>{c.cta_boton}</span></Link>
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

export default Portafolio;
