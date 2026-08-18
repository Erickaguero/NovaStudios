"use client"
import { useWeb3Form } from '@/hooks/use-web3form';
import React from 'react';

// Formulario de contacto (componente de cliente): recibe sus textos editables
// desde el componente de servidor de la página.
const ContactoForm = ({ content }: { content: Record<string, string> }) => {
  const { status, handleSubmit } = useWeb3Form();

  return (
    <div className="contact-form bg-secondary m-0 mt-0">
      <div className="section-heading text-center">
        <h2>{content.form_titulo_1} <br />{content.form_titulo_2}</h2>
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
                <span>{status === "sending" ? "ENVIANDO..." : content.boton_enviar}</span>
                <span>{status === "sending" ? "ENVIANDO..." : content.boton_enviar}</span>
              </button>
              {status === "success" && (
                <p className="mt-3 mb-0" style={{ color: '#2E9E5B', fontWeight: 600 }}>
                  ¡Mensaje enviado! Te responderemos muy pronto.</p>
              )}
              {status === "error" && (
                <p className="mt-3 mb-0" style={{ color: '#D64545', fontWeight: 600 }}>
                  Hubo un problema al enviar. Inténtalo de nuevo o escríbenos a {content.correo}.</p>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactoForm;
