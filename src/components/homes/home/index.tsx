
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
import Header from "@/layouts/headers/Header";
import FooterOne from "@/layouts/footers/FooterOne";
import { getSectionContent } from "@/lib/content";

const HomeOne = async () => {
	// Los carruseles y demás componentes de cliente no pueden leer Supabase por
	// sí mismos: su contenido editable se carga aquí (en el servidor) y se les
	// pasa como props.
	const [ticker, clientes, serviciosInicio, proyectos, testimonios, contactoInicio] =
		await Promise.all([
			getSectionContent("ticker"),
			getSectionContent("clientes"),
			getSectionContent("servicios_inicio"),
			getSectionContent("proyectos"),
			getSectionContent("testimonios"),
			getSectionContent("contacto_inicio"),
		]);

	return (
		<>
			<Header />
      <HeroArea />
      <TickerArea content={ticker} />
      <ClientsArea content={clientes} />
      <AboutArea />
      <ServiceArea content={serviciosInicio} />
      <WorkprocessArea />
      <WhyNovaArea />
      <ProjectsArea content={proyectos} />
      <ResultsArea />
      <TestimonialArea content={testimonios} />
      <FaqNova />
      <ContactHomeArea content={contactoInicio} />
      <FooterOne />
		</>
	);
};

export default HomeOne;
