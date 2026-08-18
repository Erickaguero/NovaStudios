
import React from 'react';
import Link from 'next/link';
import Breacrumb from '@/common/Breacrumb';
import Header from '@/layouts/headers/Header';
import FooterOne from '@/layouts/footers/FooterOne';

const ErrorArea = () => {
  return (
    <>
      <Header />
      <Breacrumb title="Error" subtitle="Error" pagina="error" />
      <div className="error-content text-center">
        <div className="divider"></div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-center">
                <img className="pb-2 dark-mode-404" src="/assets/img/core-img/404.png" alt="Página no encontrada" />
                <img className="pb-2 light-mode-404" src="/assets/img/core-img/404-light.png" alt="Página no encontrada" />
              </div>
              <div className="section-heading mt-5">
                <h2 className="mb-4">Parece que te perdiste</h2>
                <p>El enlace que seguiste está roto o la página fue eliminada</p>
                <Link href="/" className="btn btn-primary mt-5"><span>VOLVER AL INICIO</span><span>VOLVER AL INICIO</span></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
      <FooterOne />

    </>
  );
};

export default ErrorArea;
