
import React from 'react';

const HeroArea = () => {
  return (
    <>
      <section className="hero-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="hero-content">
                <h2 className="mb-0 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">Helping Brands</h2>
                <h2 className="mb-0 d-md-flex align-items-center wow fadeInUp" data-wow-duration="1000ms"
                  data-wow-delay="800ms">
                  Grow With Intention
                  <span className="hero-subtitle mt-3 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="1000ms">
                    Nova Studios is a communication and advertising agency based in
                    NYC – NJ. Strategy. Content. Growth. We build brands that look clear,
                    communicate better, and grow with intention.</span>
                </h2>
                <div className="d-flex flex-wrap mt-4 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="1200ms" style={{ gap: '12px' }}>
                  <span style={{ background: '#0E0E0E', color: '#FEFEFE', border: '1px solid #ECC80B', borderRadius: '50rem', padding: '10px 26px', fontWeight: 600, letterSpacing: '0.5px' }}>Strategy</span>
                  <span style={{ background: '#ECC80B', color: '#0E0E0E', borderRadius: '50rem', padding: '10px 26px', fontWeight: 600, letterSpacing: '0.5px' }}>Content</span>
                  <span style={{ background: '#ECC80B', color: '#0E0E0E', borderRadius: '50rem', padding: '10px 26px', fontWeight: 600, letterSpacing: '0.5px' }}>Growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </section>
    </>
  );
};

export default HeroArea;