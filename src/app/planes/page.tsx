
import Planes from "@/components/planes";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Planes — Nova Studios",
  description: "Nova Essential, Nova Growth y Nova Scale: planes de crecimiento creativo para cada etapa de tu marca, con cotización personalizada por valor y transformación.",
};

const index = () => {
  return (
    <Wrapper>
      <Planes />
    </Wrapper>
  );
};

export default index;
