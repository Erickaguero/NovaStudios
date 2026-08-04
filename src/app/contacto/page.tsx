
import Contacto from "@/components/contacto";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Contacto — Nova Studios",
  description: "Agenda una consulta inicial con Nova Studios. Cuéntanos sobre tu marca y construyamos una estrategia de crecimiento con propósito.",
};

const index = () => {
  return (
    <Wrapper>
      <Contacto />
    </Wrapper>
  );
};

export default index;
