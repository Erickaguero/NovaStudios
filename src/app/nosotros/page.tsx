
import Nosotros from "@/components/nosotros";
import Wrapper from "@/layouts/Wrapper";

// La página se regenera cada minuto para reflejar pronto los cambios
// hechos desde el panel de mantenimiento (equipo incluido).
export const revalidate = 60;

export const metadata = {
  title: "Nosotros — Nova Studios",
  description: "Conoce la historia, misión, visión, valores, filosofía, método y equipo detrás de Nova Studios, agencia de crecimiento creativo fundada en 2019.",
};

const index = () => {
  return (
    <Wrapper>
      <Nosotros />
    </Wrapper>
  );
};

export default index;
