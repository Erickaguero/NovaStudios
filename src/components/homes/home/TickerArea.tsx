
"use client";
import React from 'react';
import Marquee from 'react-fast-marquee';

const words = [
  "Estrategia",
  "Narrativa",
  "Producción",
  "Branding",
  "Fotografía",
  "Video",
  "Podcast",
  "Marketing",
  "Web",
];

const TickerArea = () => {
  return (
    <div className="nova-ticker">
      <Marquee gradient={false} speed={50} autoFill={true}>
        {words.map((word, i) => (
          <span className="ticker-item" key={i}>
            {word}
            <span className="ticker-dot"></span>
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default TickerArea;
