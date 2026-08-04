
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

const HomeOne = () => {
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
      <ProjectsArea />
      <ResultsArea />
      <TestimonialArea />
      <FaqNova />
      <ContactHomeArea />
      <FooterOne />
		</>
	);
};

export default HomeOne;
