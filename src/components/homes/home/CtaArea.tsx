
import React from 'react';

const CtaArea = () => {
  return (
    <>
      <div className="cta-wrap"
        style={{ backgroundImage: "url(/assets/img/nova/bg-dark.svg)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 justify-content-between align-items-stretch">
            <div className="col-12 col-lg-5 col-xl-5 col-xxl-6">
              <div className="cta-side-image">
                <img src="/assets/img/nova/cta-side.jpg" alt="Nova Studios team at work" />
              </div>
            </div>

            <div className="col-12 col-sm-11 col-md-10 col-lg-7 col-xl-6 col-xxl-5">
              <div className="cta-card">

                <div className="total-clients-wrap">
                  <div className="total-number">
                    <h3>50+</h3>
                    <p className="mb-0">Brands Growing With Us</p>
                  </div>

                </div>


                <div className="cta-stats">
                  <div>
                    <h2>2</h2>
                    <p className="mb-0">Cities: NYC &amp; NJ</p>
                  </div>

                  <div>
                    <h2>3</h2>
                    <p className="mb-0">Pillars: Strategy, Content, Growth</p>
                  </div>

                  <div>
                    <h2>10+</h2>
                    <p className="mb-0">Industries Served</p>
                  </div>

                  <div>
                    <h2>100+</h2>
                    <p className="mb-0">Projects Delivered</p>
                  </div>
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

export default CtaArea;