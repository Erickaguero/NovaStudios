 
import ServiceDetails from "@/components/service-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Service Details | Nova Studios",
	description: "Nova Studios is a communication and advertising agency based in NYC – NJ. Strategy. Content. Growth.",
	 
};

const index = () => {
	return (
		<Wrapper>
			<ServiceDetails />
		</Wrapper>
	);
};

export default index;
