import React from 'react';
import { getSectionContent } from '@/lib/content';
import { getSocialLinks } from '@/lib/social';
import HeaderOne from './HeaderOne';

// Envoltura de servidor: lee los textos editables del encabezado y los enlaces
// de redes, y se los pasa a HeaderOne (que es un componente de cliente y no
// puede leerlos solo).
const Header = async ({ style_2 }: any) => {
  const [content, redes] = await Promise.all([
    getSectionContent('header'),
    getSocialLinks(),
  ]);
  return <HeaderOne style_2={style_2} content={content} redes={redes} />;
};

export default Header;
