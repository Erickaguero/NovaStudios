
import Link from 'next/link';
import React from 'react';

const BlogArea = () => {
  return (
    <>
      <div className="blog-wrapper">
      <div className="divider"></div>

      <div className="container">
         <div className="row">
            <div className="col-12">
               <div className="section-heading d-md-flex align-items-end justify-content-between">
                  <h2 className="mb-4 mb-md-0">Ideas On Strategy, <br />Content &amp; Growth</h2>
                  <a href="#" className="btn btn-primary"><span>ALL BLOGS</span><span>ALL BLOGS</span></a>
               </div>
            </div>
         </div>
      </div>

      <div className="divider-sm"></div>

      <div className="container">
         <div className="row g-4">

             
            <div className="col-12 col-md-6 col-lg-4">
               <div className="blog-card">
                  <img src="/assets/img/nova/post-03.jpg" alt="Copying what everyone else does doesn't build a brand. It builds noise." />
                  <div className="blog-meta d-flex align-items-center">
                     <a href="#">March 26, 24</a>
                     <div className="dot"></div>
                     <a href="#">Branding</a>
                  </div>
                  <Link className="post-title" href="/blog-details">Copying what everyone else does builds noise, not a brand</Link>
               </div>
            </div>

             
            <div className="col-12 col-md-6 col-lg-4">
               <div className="blog-card">
                  <img src="/assets/img/nova/post-11.jpg" alt="You need a system." />
                  <div className="blog-meta d-flex align-items-center">
                     <a href="#">March 26, 24</a>
                     <div className="dot"></div>
                     <a href="#">Branding</a>
                  </div>
                  <Link className="post-title" href="/blog-details">You don&apos;t need to publish more — you need a system</Link>
               </div>
            </div>

             
            <div className="col-12 col-md-6 col-lg-4">
               <div className="blog-card">
                  <img src="/assets/img/nova/post-05.jpg" alt="We build presence. We create perception and design. We drive results." />
                  <div className="blog-meta d-flex align-items-center">
                     <a href="#">March 26, 24</a>
                     <div className="dot"></div>
                     <a href="#">Branding</a>
                  </div>
                  <Link className="post-title" href="/blog-details">Presence, perception, results: growing with intention</Link>
               </div>
            </div>

         </div>
      </div>

      <div className="divider"></div>
   </div>
    </>
  );
};

export default BlogArea;