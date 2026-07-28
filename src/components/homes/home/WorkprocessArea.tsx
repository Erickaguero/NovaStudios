
import React from 'react';

const WorkprocessArea = () => {
  return (
    <>
      <div className="work-process-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5">
            <div className="col-md-5 col-xl-6">
              <div className="section-heading">
                
                <h2 className="mb-4">How We Work</h2>
                <p className="mb-5">Growth with intention doesn't happen by accident. We connect
                  strategy, content and distribution into one system, so every piece your brand
                  publishes has a job to do.</p>
                <a href="/contact" className="btn btn-primary"><span>LET&apos;S WORK TOGETHER</span><span>LET&apos;S WORK TOGETHER</span></a>
              </div>
            </div>

            <div className="col-md-7 col-xl-6">
              <div className="work-process">

                <div className="process-card">
                  <div className="number">1</div>
                  <div className="process-text">
                    <h4>Discover</h4>
                    <p className="mb-0">We dig into your brand, your audience and your market to
                      understand where you are and where you want to go.</p>
                  </div>
                </div>


                <div className="process-card">
                  <div className="number">2</div>
                  <div className="process-text">
                    <h4>Design The Strategy</h4>
                    <p className="mb-0">Direction, positioning and messaging first — a clear plan
                      that gives every piece of content a purpose.</p>
                  </div>
                </div>


                <div className="process-card">
                  <div className="number">3</div>
                  <div className="process-text">
                    <h4>Create &amp; Publish</h4>
                    <p className="mb-0">Content and campaigns built as a system — consistent,
                      recognizable and made to connect, not to add noise.</p>
                  </div>
                </div>


                <div className="process-card">
                  <div className="number">4</div>
                  <div className="process-text">
                    <h4>Measure &amp; Grow</h4>
                    <p className="mb-0">We track what matters, learn from the data and double down
                      on what actually drives results.</p>
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

export default WorkprocessArea;