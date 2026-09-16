import React from 'react';
import { getSectionContent } from '@/lib/content';
import { getSocialLinks } from '@/lib/social';
import SocialNav from '@/components/SocialIcons';

const FooterOne = async ({ style_2 }: any) => {
  const [c, redes] = await Promise.all([
    getSectionContent('footer'),
    getSocialLinks(),
  ]);

  return (
    <>
      <footer className={`footer-wrapper ${style_2 ? 'footer-2 bg-secondary' : ''}`}>
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5">


            <div className="col-12 col-md-6 col-xl">
              <div className="footer-card">

                <a href="/">
                  <img className="dark-logo" src="/assets/img/core-img/logo-light.png" alt="Nova Studios" style={{ height: '42px', width: 'auto' }} />
                  <img className="light-logo" src="/assets/img/core-img/logo.png" alt="Nova Studios" style={{ height: '42px', width: 'auto' }} />
                </a>

                <p className="mb-0">{c.descripcion}</p>

                <SocialNav links={redes} />
              </div>
            </div>


            <div className="col-12 col-md-6 col-xl">
              <div className="footer-card">
                <h5 className="mb-0">{c.titulo_servicios}</h5>

                <ul className="footer-nav">
                  <li><a href="/servicios#estrategia-de-marca">Estrategia de Marca</a></li>
                  <li><a href="/servicios#branding">Branding</a></li>
                  <li><a href="/servicios#produccion-audiovisual">Producción Audiovisual</a></li>
                  <li><a href="/servicios#marketing-digital">Marketing Digital</a></li>
                  <li><a href="/servicios#desarrollo-web">Desarrollo Web</a></li>
                  <li><a href="/servicios#consultoria">Consultoría</a></li>
                </ul>
              </div>
            </div>


            <div className="col-12 col-md-6 col-xl">
              <div className="footer-card">
                <h5 className="mb-0">{c.titulo_recursos}</h5>

                <ul className="footer-nav">
                  <li><a href="/nosotros">Nosotros</a></li>
                  <li><a href="/planes">Planes</a></li>
                  <li><a href="/portafolio">Portafolio</a></li>
                  <li><a href="/contacto">Contacto</a></li>
                  {redes.instagram && <li><a href={redes.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>}
                  {redes.facebook && <li><a href={redes.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>}
                  {redes.youtube && <li><a href={redes.youtube} target="_blank" rel="noopener noreferrer">YouTube</a></li>}
                  {redes.whatsapp && <li><a href={redes.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>}
                </ul>
              </div>
            </div>


            <div className="col-12 col-md-6 col-xl-4">
              <div className="footer-card">
                <h5 className="mb-0">{c.titulo_suscribete}</h5>
                <form action="#" className="subscribe-form">
                  <input type="email" className="form-control" placeholder="Correo electrónico" />
                  <button className="btn">
                    <span className="material-symbols-outlined">arrow_forward</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </form>

                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                  <label className="form-check-label ps-2" htmlFor="flexCheckDefault">
                    Acepto los términos y condiciones.
                  </label>
                </div>


              </div>
            </div>

          </div>
        </div>

        <div className="container">
          <div className="footer-line"></div>
        </div>

        <div className="container">
          <div className="row align-items-center">

            <div className="col-12 col-lg-6">
              <p className="mb-0 copyright">Copyright © {new Date().getFullYear()} <span id="year"></span> <a href="/"> Nova Studios </a></p>
            </div>

            <div className="col-12 col-lg-6">
              <div className="footer-bottom-nav">
                <a href="#">Términos y condiciones</a>
                <a href="#">Aviso de privacidad</a>
              </div>
            </div>
          </div>
        </div>

        <div className="divider-sm"></div>
      </footer>
    </>
  );
};

export default FooterOne;
