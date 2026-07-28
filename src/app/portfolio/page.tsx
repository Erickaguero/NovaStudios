 
import Portfolio from "@/components/portfolio";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Portfolio | Nova Studios",
	description: "Portfolio Nova Studios is a communication and advertising agency based in NYC – NJ. Strategy. Content. Growth.",
	 
};

const index = () => {
	return (
		<Wrapper>
			<Portfolio />
		</Wrapper>
	);
};

export default index;
