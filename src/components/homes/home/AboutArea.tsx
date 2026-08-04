
import Link from 'next/link';
import React from 'react';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path
      d="M12.1473 23.354C12.144 23.354 12.1402 23.354 12.1369 23.354C12.0013 23.3512 11.8733 23.2932 11.7814 23.1937L2.40471 12.9978C2.24392 12.8228 2.22916 12.5592 2.36971 12.3672C2.51025 12.1758 2.76619 12.1102 2.98166 12.2108L11.5638 16.2293C11.636 16.2632 11.7213 16.2468 11.7765 16.1893L24.8676 2.50708C25.0448 2.32169 25.3346 2.30145 25.5359 2.46114C25.7371 2.62083 25.7836 2.90739 25.6431 3.12231L12.6209 23.0712C12.6023 23.1002 12.5804 23.1265 12.5563 23.1511L12.4989 23.2085C12.4054 23.3015 12.2785 23.354 12.1473 23.354Z"
      fill="#FEFEFE" />
  </svg>
);

const AboutArea = () => {
  return (
    <>
      <div id="quienes-somos" className="about-us-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 g-xl-5 align-items-center">

            <div className="col-12 col-md-6">
              <div className="about-us-thumbnail">
                <img className="nova-card-img" src="/assets/img/nova/av-camera.svg" alt="Ilustración de una cámara de cine sobre trípode" />
              </div>
            </div>


            <div className="col-12 col-md-6">
              <div className="about-us-text-content ps-md-4">
                <div className="section-heading">
                  <h2 className="mb-0">Quiénes Somos</h2>
                </div>
                <p className="mb-0">Nova Studios es una agencia de crecimiento creativo que combina
                  estrategia, narrativa y producción para crear experiencias de marca significativas
                  y crecimiento sostenible. A diferencia de las agencias enfocadas solo en ejecución,
                  integramos la producción creativa con el pensamiento estratégico empresarial.</p>

                <ul className="ps-0 list-unstyled mb-0">
                  <li>
                    <CheckIcon />
                    Estrategia — dirección, posicionamiento y propósito</li>
                  <li>
                    <CheckIcon />
                    Narrativa — historias que conectan, no ruido</li>
                  <li>
                    <CheckIcon />
                    Producción — calidad premium en cada detalle</li>
                </ul>

                <div>
                  <Link href="/nosotros" className="btn btn-primary mt-1"><span>CONOCE MÁS DE NOSOTROS</span><span>CONOCE MÁS DE NOSOTROS</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default AboutArea;
