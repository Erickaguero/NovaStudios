
import React from 'react';
import { getSectionContent } from '@/lib/content';
import HeaderOne from './HeaderOne';

// Envoltura de servidor: lee los textos editables del encabezado y se los
// pasa a HeaderOne (que es un componente de cliente y no puede leerlos solo).
const Header = async ({ style_2 }: any) => {
  const content = await getSectionContent('header');
  return <HeaderOne style_2={style_2} content={content} />;
};

export default Header;
