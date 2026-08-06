
import Contacto from "@/components/contacto";
import Wrapper from "@/layouts/Wrapper";

// Regenera cada minuto: la sección FAQ lee su imagen desde el panel.
export const revalidate = 60;

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
