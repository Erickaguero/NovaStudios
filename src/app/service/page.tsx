 
import Service from "@/components/service";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Service | Nova Studios",
	description: "Nova Studios is a communication and advertising agency based in NYC – NJ. Strategy. Content. Growth.",
	 
};

const index = () => {
	return (
		<Wrapper>
			<Service />
		</Wrapper>
	);
};

export default index;
