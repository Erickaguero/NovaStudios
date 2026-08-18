
"use client";
import React from 'react';
import Marquee from 'react-fast-marquee';

const TickerArea = ({ content }: { content: Record<string, string> }) => {
  const words = (content.palabras || "")
    .split(",")
    .map((w) => w.trim())
    .filter(Boolean);
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
