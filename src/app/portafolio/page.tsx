
import Portafolio from "@/components/portafolio";
import Wrapper from "@/layouts/Wrapper";

// La página se regenera cada minuto para reflejar pronto los cambios
// hechos desde el panel de mantenimiento (proyectos incluidos).
export const revalidate = 60;

export const metadata = {
  title: "Portafolio — Nova Studios",
  description: "Proyectos de Nova Studios: campañas, branding, producción audiovisual y contenido que ayuda a las marcas a crecer con intención.",
};

const index = () => {
  return (
    <Wrapper>
      <Portafolio />
    </Wrapper>
  );
};

export default index;
