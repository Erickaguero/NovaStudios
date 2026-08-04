
import Link from 'next/link';
import React from 'react';

const reasons = [
  { icon: "workspace_premium", title: "La Excelencia Es Nuestro Estándar", text: "La calidad está en los detalles: cada entrega refleja el nivel premium que tu marca merece." },
  { icon: "lightbulb", title: "Estrategia Antes que Ejecución", text: "Todo gran trabajo empieza con entendimiento. Primero pensamos, después producimos." },
  { icon: "favorite", title: "Personas Antes que Proyectos", text: "Construimos relaciones basadas en confianza, comunicación clara y cuidado genuino." },
  { icon: "handshake", title: "Crecimiento a Través de Alianzas", text: "Nuestros clientes son socios, no transacciones. Crecemos junto a las marcas que acompañamos." },
  { icon: "settings_suggest", title: "Los Sistemas Crean Excelencia", text: "Procesos claros que permiten calidad consistente y escalar con propósito." },
];

const cardStyle: React.CSSProperties = {
  background: '#0E0E0E',
  border: '1px solid rgba(236, 200, 11, 0.3)',
  borderRadius: '20px',
  padding: '36px 30px',
  height: '100%',
};

const WhyNovaArea = () => {
  return (
    <>
      <div id="por-que-nova" className="bg-secondary">
        <div className="divider"></div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <div className="section-heading">
                <h2 className="mb-4">¿Por Qué Nova?</h2>
                <p className="mb-0">Porque no somos un proveedor de producción: somos un socio
                  estratégico. A diferencia de las agencias enfocadas solo en ejecución, integramos
                  la creatividad con el pensamiento de negocio. Cinco principios lo hacen posible:</p>
              </div>
            </div>
          </div>

          <div className="divider-sm"></div>

          <div className="row g-4">
            {reasons.map((reason, i) => (
              <div className="col-12 col-md-6 col-xl-4" key={i}>
                <div style={cardStyle}>
                  <span className="material-symbols-outlined mb-3" style={{ fontSize: '42px', color: '#ECC80B' }}>{reason.icon}</span>
                  <h4 style={{ color: '#FEFEFE' }}>{reason.title}</h4>
                  <p className="mb-0" style={{ color: '#C8C8CD' }}>{reason.text}</p>
                </div>
              </div>
            ))}

            <div className="col-12 col-md-6 col-xl-4">
              <div style={{ ...cardStyle, background: '#ECC80B', border: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                <h4 style={{ color: '#0E0E0E' }}>¿Listo para crecer con propósito?</h4>
                <p className="mb-4" style={{ color: '#0E0E0E' }}>Construyamos una estrategia para tu marca.</p>
                <Link href="/contacto" className="btn btn-dark"><span>HABLEMOS</span><span>HABLEMOS</span></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default WhyNovaArea;
