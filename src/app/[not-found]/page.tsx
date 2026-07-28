
import ErrorArea from '@/components/error';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
	title: "404 Error | Nova Studios",
	description: "Nova Studios is a communication and advertising agency based in NYC – NJ. Strategy. Content. Growth.", 
};



const index = () => {
  return (
    <Wrapper>
      <ErrorArea />      
    </Wrapper>
  );
};

export default index;