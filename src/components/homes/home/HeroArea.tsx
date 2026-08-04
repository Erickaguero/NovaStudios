
import Link from 'next/link';
import React from 'react';

const HeroArea = () => {
  return (
    <>
      <section id="banner" className="hero-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5 align-items-center">

            <div className="col-12 col-lg-6">
              <span className="wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms"
                style={{
                  display: 'inline-block',
                  border: '1px solid #ECC80B',
                  color: '#ECC80B',
                  borderRadius: '50rem',
                  padding: '8px 22px',
                  fontWeight: 600,
                  fontSize: '13px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '24px',
                }}>
                Agencia de Crecimiento Creativo
              </span>

              <h1 className="wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms"
                style={{
                  fontSize: 'clamp(40px, 5vw, 72px)',
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: '-2px',
                  marginBottom: '24px',
                }}>
                Tu marca tiene <span style={{ color: '#ECC80B' }}>potencial</span>.<br />
                Nosotros lo convertimos en crecimiento.
              </h1>

              <p className="wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="700ms"
                style={{ fontSize: '18px', lineHeight: 1.7, maxWidth: '520px', marginBottom: '32px' }}>
                Estrategia, narrativa y producción trabajando como un solo sistema para
                construir marcas poderosas, historias significativas y resultados medibles.
              </p>

              <div className="d-flex flex-wrap wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="900ms" style={{ gap: '16px' }}>
                <Link href="/contacto" className="btn btn-primary"><span>AGENDA UNA CONSULTA</span><span>AGENDA UNA CONSULTA</span></Link>
                <Link href="/servicios" className="btn btn-dark"><span>NUESTROS SERVICIOS</span><span>NUESTROS SERVICIOS</span></Link>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="row g-3 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="600ms">
                <div className="col-6">
                  <div style={{ position: 'relative', height: '100%' }}>
                    <span className="nova-rec-badge">REC</span>
                    <img className="nova-card-img" src="/assets/img/nova/cta-side.jpg" alt="Equipo de camarógrafos de Nova Studios grabando un evento en vivo"
                      style={{ width: '100%', height: '100%', minHeight: '340px', objectFit: 'cover', borderRadius: '20px' }} />
                  </div>
                </div>
                <div className="col-6 d-flex flex-column" style={{ gap: '16px' }}>
                  <img className="nova-card-img nova-float" src="/assets/img/nova/av-clapper.svg" alt="Ilustración de una claqueta de cine"
                    style={{ width: '100%', height: '50%', objectFit: 'cover', borderRadius: '20px' }} />
                  <img className="nova-card-img nova-float-delay" src="/assets/img/nova/av-waveform.svg" alt="Ilustración de una línea de tiempo de edición de video"
                    style={{ width: '100%', height: '50%', objectFit: 'cover', borderRadius: '20px' }} />
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="divider"></div>
      </section>
    </>
  );
};

export default HeroArea;
