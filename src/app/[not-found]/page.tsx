
import ErrorArea from '@/components/error';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
	title: "Error 404 — Nova Studios",
	description: "La página que buscas no existe. Vuelve al inicio de Nova Studios, agencia de crecimiento creativo.",
};



const index = () => {
  return (
    <Wrapper>
      <ErrorArea />
    </Wrapper>
  );
};

export default index;
