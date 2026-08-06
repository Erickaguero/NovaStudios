
import HeroArea from "./HeroArea";
import TickerArea from "./TickerArea";
import ClientsArea from "./ClientsArea";
import AboutArea from "./AboutArea";
import ServiceArea from "./ServiceArea";
import WorkprocessArea from "./WorkprocessArea";
import WhyNovaArea from "./WhyNovaArea";
import ProjectsArea from "./ProjectsArea";
import ResultsArea from "./ResultsArea";
import TestimonialArea from "./TestimonialArea";
import ContactHomeArea from "./ContactHomeArea";
import FaqNova from "@/common/FaqNova";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import { getSectionContent } from "@/lib/content";

const HomeOne = async () => {
	// Los carruseles son componentes de cliente: su contenido editable
	// se carga aquí (en el servidor) y se les pasa como props.
	const [proyectos, testimonios] = await Promise.all([
		getSectionContent("proyectos"),
		getSectionContent("testimonios"),
	]);

	return (
		<>
			<HeaderOne />
      <HeroArea />
      <TickerArea />
      <ClientsArea />
      <AboutArea />
      <ServiceArea />
      <WorkprocessArea />
      <WhyNovaArea />
      <ProjectsArea content={proyectos} />
      <ResultsArea />
      <TestimonialArea imagen={testimonios.imagen} />
      <FaqNova />
      <ContactHomeArea />
      <FooterOne />
		</>
	);
};

export default HomeOne;
