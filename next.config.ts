import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about-us", destination: "/nosotros", permanent: true },
      { source: "/team", destination: "/nosotros", permanent: true },
      { source: "/team-details", destination: "/nosotros", permanent: true },
      { source: "/service", destination: "/servicios", permanent: true },
      { source: "/service-details", destination: "/servicios", permanent: true },
      { source: "/pricing-plan", destination: "/planes", permanent: true },
      { source: "/portfolio", destination: "/", permanent: true },
      { source: "/portfolio-details", destination: "/", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog-details", destination: "/", permanent: true },
      { source: "/portafolio", destination: "/", permanent: true },
      { source: "/portafolio/detalle", destination: "/", permanent: true },
      { source: "/insights", destination: "/", permanent: true },
      { source: "/insights/detalle", destination: "/", permanent: true },
      { source: "/contact", destination: "/contacto", permanent: true },
      { source: "/faq", destination: "/contacto", permanent: true },
      { source: "/home-2", destination: "/", permanent: true },
      { source: "/login", destination: "/", permanent: true },
      { source: "/register", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
