
import Link from 'next/link';
import React from 'react';
import { getSectionContent } from '@/lib/content';

const Breacrumb = async ({title, subtitle, pagina}: any) => {
  const c = await getSectionContent('titulos');
  const imagen = c[`imagen_${pagina}`] ?? "/assets/img/nova/breadcrumb-av.svg";
  return (
    <>
         <div className="breadcrumb-wrapper bg-img jarallax bg-overlay" data-jarallax="" data-speed="0.6"
      style={{backgroundImage: `url(${imagen})`, backgroundSize: "cover", backgroundPosition: "center"}}>
      <div className="container h-100">
         <div className="breadcrumb-content h-100">
            <h2 className="wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="700ms">{title}</h2>
            <ul className="list-unstyled wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="1000ms">
               <li><Link href="/">Inicio</Link></li>
               <li>{subtitle}</li>
            </ul>
         </div>
      </div>
   </div>
    </>
  );
};

export default Breacrumb;
