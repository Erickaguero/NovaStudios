 
import PortfolioDetails from "@/components/portfolio-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Portfolio Details | Nova Studios",
	description: "Portfolio Nova Studios is a communication and advertising agency based in NYC – NJ. Strategy. Content. Growth.",
	 
};

const index = () => {
	return (
		<Wrapper>
			<PortfolioDetails />
		</Wrapper>
	);
};

export default index;
