
"use client";
import React from 'react';
import Marquee from 'react-fast-marquee';

const industries = [
  "Startups",
  "Restaurantes y Hospitalidad",
  "Prácticas Médicas",
  "Bienes Raíces",
  "Marcas Personales",
  "Instituciones Educativas",
  "Organizaciones Sin Fines de Lucro",
  "Pequeñas y Medianas Empresas",
];

const ClientsArea = () => {
  return (
    <>
      <div id="clientes" className="bg-secondary">
        <div className="divider-sm"></div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading text-center">
                <h5 className="mb-0">Marcas e industrias que crecen con Nova</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="divider-sm"></div>

        <Marquee gradient={false} speed={40} pauseOnHover={true} autoFill={true}>
          {industries.map((name, i) => (
            <span key={i} className="d-inline-flex align-items-center" style={{ gap: '18px', paddingRight: '18px' }}>
              <span style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '1px', opacity: 0.85 }}>{name}</span>
              <span className="material-symbols-outlined" style={{ color: '#ECC80B', fontSize: '20px' }}>star</span>
            </span>
          ))}
        </Marquee>

        <div className="divider-sm"></div>
      </div>
    </>
  );
};

export default ClientsArea;
