
import HomeOne from "@/components/homes/home";
import Wrapper from "@/layouts/Wrapper";

// La página se sirve estática y se regenera cada minuto, para que los cambios
// guardados en el panel de mantenimiento se reflejen pronto en el sitio.
export const revalidate = 60;

export const metadata = {
	title: "Nova Studios — Agencia de Crecimiento Creativo",
	description: "Combinamos estrategia, narrativa y producción para crear experiencias de marca significativas y crecimiento sostenible. Creatividad con propósito.",
};

const index = () => {
	return (
		<Wrapper>
			<HomeOne />
		</Wrapper>
	);
};

export default index;
