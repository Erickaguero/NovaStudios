
import HomeOne from "@/components/homes/home";
import Wrapper from "@/layouts/Wrapper";

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
