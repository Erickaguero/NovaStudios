
import Link from 'next/link';
import React from 'react';
import { getSectionContent } from '@/lib/content';

const reasonIcons = ["workspace_premium", "lightbulb", "favorite", "handshake", "settings_suggest"];

const cardStyle: React.CSSProperties = {
  background: '#0E0E0E',
  border: '1px solid rgba(236, 200, 11, 0.3)',
  borderRadius: '20px',
  padding: '36px 30px',
  height: '100%',
};

const WhyNovaArea = async () => {
  const c = await getSectionContent('por_que_nova');
  const reasons = reasonIcons.map((icon, i) => ({
    icon,
    title: c[`card_${i + 1}_titulo`],
    text: c[`card_${i + 1}_texto`],
  }));
  return (
    <>
      <div id="por-que-nova" className="bg-secondary">
        <div className="divider"></div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <div className="section-heading">
                <h2 className="mb-4">{c.titulo}</h2>
                <p className="mb-0">{c.parrafo}</p>
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
                <h4 style={{ color: '#0E0E0E' }}>{c.cta_titulo}</h4>
                <p className="mb-4" style={{ color: '#0E0E0E' }}>{c.cta_texto}</p>
                <Link href="/contacto" className="btn btn-dark"><span>{c.cta_boton}</span><span>{c.cta_boton}</span></Link>
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
