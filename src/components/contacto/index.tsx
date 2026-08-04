"use client"
import Breacrumb from '@/common/Breacrumb';
import FaqNova from '@/common/FaqNova';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import { useWeb3Form } from '@/hooks/use-web3form';
import React from 'react';

const pasos = [
  { title: "Consulta inicial", text: "Escríbenos por el formulario o por Instagram y cuéntanos sobre tu marca." },
  { title: "Llamada de descubrimiento", text: "Agendamos una reunión para hablar de objetivos, retos, audiencia y resultados deseados." },
  { title: "Propuesta", text: "Recibes una propuesta clara con servicios, entregables, cronograma e inversión." },
  { title: "Arrancamos", text: "Firmamos el acuerdo, hacemos el onboarding y tu marca empieza a crecer con propósito." },
];

const Contacto = () => {
  const { status, handleSubmit } = useWeb3Form();

  return (
    <>
      <HeaderOne />
      <Breacrumb title="Contacto" subtitle="Contacto" />

      <div className="contact-details-wrap">

        {/* Formulario */}
        <div id="formulario" className="contact-form-wrap contact-page-form">
          <div className="divider"></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <div className="contact-form bg-secondary m-0 mt-0">
                  <div className="section-heading text-center">
                    <h2>¿Tu marca tiene potencial? <br />Construyamos una estrategia</h2>
                  </div>

                  <div className="divider-sm"></div>

                  <form onSubmit={handleSubmit}>
                    <input type="hidden" name="subject" value="Nuevo mensaje desde el formulario de contacto" />
                    <div className="row g-4 g-xl-5">
                      <div className="col-12 col-lg-6">
                        <input type="text" name="name" required className="form-control" placeholder="Tu nombre" />
                      </div>
                      <div className="col-12 col-lg-6">
                        <input type="email" name="email" required className="form-control" placeholder="Correo electrónico" />
                      </div>
                      <div className="col-12 col-lg-6">
                        <input type="text" name="phone" className="form-control" placeholder="Teléfono / WhatsApp" />
                      </div>
                      <div className="col-12 col-lg-6">
                        <select name="servicio" className="form-control" defaultValue="">
                          <option value="" disabled>¿Qué necesita tu marca?</option>
                          <option value="Estrategia de Marca">Estrategia de Marca</option>
                          <option value="Branding">Branding</option>
                          <option value="Producción Audiovisual">Producción Audiovisual</option>
                          <option value="Marketing Digital">Marketing Digital</option>
                          <option value="Desarrollo Web">Desarrollo Web</option>
                          <option value="Consultoría">Consultoría</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <textarea name="message" required className="form-control" rows={20} cols={30}
                          placeholder="Cuéntanos sobre tu proyecto y tus objetivos"></textarea>
                      </div>
                      <div className="col-12">
                        <div className="text-center">
                          <button type="submit" disabled={status === "sending"} className="btn btn-primary rounded-pill">
                            <span>{status === "sending" ? "ENVIANDO..." : "ENVIAR MENSAJE"}</span>
                            <span>{status === "sending" ? "ENVIANDO..." : "ENVIAR MENSAJE"}</span>
                          </button>
                          {status === "success" && (
                            <p className="mt-3 mb-0" style={{ color: '#2E9E5B', fontWeight: 600 }}>
                              ¡Mensaje enviado! Te responderemos muy pronto.</p>
                          )}
                          {status === "error" && (
                            <p className="mt-3 mb-0" style={{ color: '#D64545', fontWeight: 600 }}>
                              Hubo un problema al enviar. Inténtalo de nuevo o escríbenos a hello@novastudios.agency.</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Información */}
        <div id="informacion" className="divider"></div>

        <div className="container">
          <div className="row g-4 justify-content-center">

            <div className="col-12 col-md-6 col-lg-4">
              <div className="contact-info-card">
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <g clipPath="url(#clip0_1_3077)">
                      <path
                        d="M39.8523 29.6017C39.5773 28.0233 38.2257 26.765 36.564 26.5433L27.349 25.31C25.6773 25.0817 24.0207 25.97 23.329 27.46C23.1523 27.84 23.004 28.235 22.884 28.6417C20.3023 27.565 17.9857 26.01 15.9857 24.0117C13.9857 22.0133 12.4323 19.6967 11.3557 17.115C11.764 16.9933 12.1573 16.845 12.5373 16.6667C14.0273 15.9733 14.909 14.3217 14.6857 12.6483L13.4523 3.435C13.2307 1.77333 11.974 0.42 10.3657 0.141667C9.78067 0.045 9.29401 0 8.82901 0C5.80401 0 2.94234 1.59833 1.36067 4.17333C-0.349328 6.96 -0.110994 10.5267 0.285672 13.3217C1.18734 19.6517 4.43901 26.0167 9.20901 30.7867C12.754 34.3317 17.1357 36.9883 21.879 38.4683C24.294 39.2233 27.3173 40.01 30.2273 40.01C32.4057 40.01 34.5207 39.5683 36.269 38.3433C38.6057 36.7033 39.999 34.0217 39.999 31.1667C39.999 30.7017 39.954 30.2133 39.8523 29.6017Z"
                        fill="#ECC80B" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_3077">
                        <rect width="40" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <p className="mb-0">Instagram</p>
                <h4><a href="https://www.instagram.com/nova.studios_co/" target="_blank" rel="noopener noreferrer">@nova.studios_co</a></h4>
              </div>
            </div>


            <div className="col-12 col-md-6 col-lg-4">
              <div className="contact-info-card">
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path
                      d="M32.5 4.16602H19.1667C15.9117 4.16602 13.1633 6.26268 12.1267 9.16602H20.8333C25.8867 9.16602 30 13.2777 30 18.3327V24.166H32.5C36.635 24.166 40 20.801 40 16.666V11.666C40 7.53102 36.635 4.16602 32.5 4.16602ZM28.3333 18.3327C28.3333 14.1977 24.9683 10.8327 20.8333 10.8327H7.5C3.365 10.8327 0 14.1977 0 18.3327V23.3327C0 27.4677 3.365 30.8327 7.5 30.8327H8.33333V34.9993C8.33333 35.336 8.53667 35.641 8.84833 35.7693C8.95167 35.8127 9.06 35.8327 9.16667 35.8327C9.38333 35.8327 9.59667 35.7477 9.75667 35.5893L14.5133 30.8327H20.835C24.97 30.8327 28.335 27.4677 28.335 23.3327V19.9993L28.3333 18.3327Z"
                      fill="#ECC80B" />
                  </svg>
                </div>

                <p className="mb-0">Correo electrónico</p>
                <h4>hello@novastudios.agency</h4>
              </div>
            </div>


            <div className="col-12 col-md-6 col-lg-4">
              <div className="contact-info-card">
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path
                      d="M20.0026 0C12.1909 0 5.83594 6.355 5.83594 14.1667C5.83594 27.8633 18.9009 39.3167 19.4576 39.7967C19.6143 39.9317 19.8093 40 20.0026 40C20.1959 40 20.3909 39.9317 20.5476 39.7967C21.1043 39.315 34.1693 27.8617 34.1693 14.1667C34.1693 6.355 27.8143 0 20.0026 0ZM20.0026 21.6667C15.8609 21.6667 12.5026 18.3083 12.5026 14.1667C12.5026 10.025 15.8609 6.66667 20.0026 6.66667C24.1443 6.66667 27.5026 10.025 27.5026 14.1667C27.5026 18.3083 24.1443 21.6667 20.0026 21.6667Z"
                      fill="#ECC80B" />
                  </svg>
                </div>

                <p className="mb-0">Cobertura</p>
                <h4>Norteamérica y Latinoamérica</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        {/* Agenda una Reunión */}
        <div id="agenda" className="work-process-wrapper bg-secondary">
          <div className="divider"></div>

          <div className="container">
            <div className="row g-5">
              <div className="col-md-5 col-xl-6">
                <div className="section-heading">
                  <h2 className="mb-4">Agenda una Reunión</h2>
                  <p className="mb-5">La mejor forma de saber si somos el socio correcto para tu marca
                    es conversar. En cuatro pasos pasamos de un primer mensaje a un plan de
                    crecimiento en marcha.</p>
                  <a href="#formulario" className="btn btn-primary"><span>AGENDAR AHORA</span><span>AGENDAR AHORA</span></a>
                </div>
              </div>

              <div className="col-md-7 col-xl-6">
                <div className="work-process">
                  {pasos.map((paso, i) => (
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

        {/* Preguntas Frecuentes */}
        <FaqNova id="faq" />

        {/* Redes Sociales */}
        <div id="redes" className="cta-wrapper bg-secondary">
          <div className="divider"></div>

          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-12 col-lg-6">
                <h2>Redes Sociales</h2>
              </div>
              <div className="col-12 col-lg-6">
                <p>Síguenos para ver el detrás de cámaras, contenido educativo y las historias de las
                  marcas que crecen con Nova.</p>
                <a href="https://www.instagram.com/nova.studios_co/" target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary"><span>SÍGUENOS EN INSTAGRAM</span><span>SÍGUENOS EN INSTAGRAM</span></a>
              </div>
            </div>
          </div>

          <div className="divider"></div>
        </div>
      </div>

      <FooterOne />
    </>
  );
};

export default Contacto;
