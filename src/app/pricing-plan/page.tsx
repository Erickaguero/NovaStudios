 
import PricingPlan from "@/components/pricing-plan";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Pricing Plan | Nova Studios",
	description: "Nova Studios is a communication and advertising agency based in NYC – NJ. Strategy. Content. Growth.",
	 
};

const index = () => {
	return (
		<Wrapper>
			<PricingPlan />
		</Wrapper>
	);
};

export default index;
