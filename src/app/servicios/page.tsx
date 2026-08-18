
import Servicios from "@/components/servicios";
import Wrapper from "@/layouts/Wrapper";

// La página se regenera cada minuto para reflejar pronto los cambios
// guardados en el panel de mantenimiento.
export const revalidate = 60;

export const metadata = {
  title: "Servicios — Nova Studios",
  description: "Estrategia de marca, branding, producción audiovisual, marketing digital, desarrollo web y consultoría. Soluciones creativas diseñadas alrededor de tus objetivos.",
};

const index = () => {
  return (
    <Wrapper>
      <Servicios />
    </Wrapper>
  );
};

export default index;
