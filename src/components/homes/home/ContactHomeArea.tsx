"use client"
import React from 'react';

const infoStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  color: '#FEFEFE',
  marginBottom: '18px',
  fontSize: '17px',
};

const ContactHomeArea = () => {
  return (
    <>
      <div id="contacto" className="cta-wrap"
        style={{ backgroundImage: "url(/assets/img/nova/bg-dark.svg)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 g-lg-5 align-items-center">
            <div className="col-12 col-lg-6">
              <h2 className="mb-4" style={{ color: '#FEFEFE' }}>Contacto</h2>
              <p className="mb-4" style={{ color: '#C8C8CD', fontSize: '18px', lineHeight: 1.7 }}>
                Si tu marca está lista para crecer, nosotros también. Cuéntanos a dónde
                quieres llegar y diseñaremos el camino: estrategia, narrativa y producción
                con propósito.</p>

              <div>
                <div style={infoStyle}>
                  <span className="material-symbols-outlined" style={{ color: '#ECC80B', fontSize: '28px' }}>mail</span>
                  <span><span style={{ color: '#ECC80B', fontWeight: 600 }}>Correo:</span> hello@novastudios.agency</span>
                </div>
                <div style={infoStyle}>
                  <span className="material-symbols-outlined" style={{ color: '#ECC80B', fontSize: '28px' }}>photo_camera</span>
                  <span><span style={{ color: '#ECC80B', fontWeight: 600 }}>Instagram:</span>{" "}
                    <a href="https://www.instagram.com/nova.studios_co/" target="_blank" rel="noopener noreferrer"
                      style={{ color: '#FEFEFE', textDecoration: 'underline' }}>@nova.studios_co</a>
                  </span>
                </div>
                <div style={{ ...infoStyle, marginBottom: 0 }}>
                  <span className="material-symbols-outlined" style={{ color: '#ECC80B', fontSize: '28px' }}>public</span>
                  <span><span style={{ color: '#ECC80B', fontWeight: 600 }}>Cobertura:</span> Norteamérica y Latinoamérica</span>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="contact-form" style={{ margin: 0 }}>
                <h3 className="mb-4">Agenda tu consulta inicial</h3>

                <form onClick={e => e.preventDefault()} className="mt-3">
                  <input type="text" name="text" className="form-control" placeholder="Tu nombre" />
                  <input type="email" name="email" className="form-control" placeholder="Correo electrónico" />
                  <textarea name="message" className="form-control" placeholder="Cuéntanos sobre tu proyecto" id="message"></textarea>
                  <button className="btn btn-primary mt-3"><span>ENVIAR MENSAJE</span><span>ENVIAR MENSAJE</span></button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default ContactHomeArea;
