
import Nosotros from "@/components/nosotros";
import Wrapper from "@/layouts/Wrapper";

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
