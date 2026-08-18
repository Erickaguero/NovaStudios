
import Planes from "@/components/planes";
import Wrapper from "@/layouts/Wrapper";

// La página se regenera cada minuto para reflejar pronto los cambios
// guardados en el panel de mantenimiento.
export const revalidate = 60;

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
