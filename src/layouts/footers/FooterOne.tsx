
import React from 'react';

const FooterOne = ({ style_2 }: any) => {
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

                <p className="mb-0">El sistema operativo detrás del crecimiento creativo. Estrategia. Narrativa. Producción. 📍 Norteamérica y Latinoamérica</p>

                <div className="social-nav">
                  <a href="https://www.instagram.com/nova.studios_co/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      className="bi bi-instagram" viewBox="0 0 16 16">
                      <path
                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>


            <div className="col-12 col-md-6 col-xl">
              <div className="footer-card">
                <h5 className="mb-0">Servicios</h5>

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
                <h5 className="mb-0">Recursos</h5>

                <ul className="footer-nav">
                  <li><a href="/nosotros">Nosotros</a></li>
                  <li><a href="/planes">Planes</a></li>
                  <li><a href="/contacto">Contacto</a></li>
                  <li><a href="https://www.instagram.com/nova.studios_co/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
              </div>
            </div>


            <div className="col-12 col-md-6 col-xl-4">
              <div className="footer-card">
                <h5 className="mb-0">Suscríbete</h5>
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
              <p className="mb-0 copyright">Copyright © {new Date().getFullYear()} <span id="year"></span> <a href="https://www.instagram.com/nova.studios_co/" target="_blank" rel="noopener noreferrer"> Nova Studios </a></p>
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