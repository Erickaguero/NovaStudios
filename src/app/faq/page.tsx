 
import Faq from "@/components/faq";  
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Faq | Nova Studios",
	description: "Nova Studios is a communication and advertising agency based in NYC – NJ. Strategy. Content. Growth.",
	 
};

const index = () => {
	return (
		<Wrapper>
			<Faq />
		</Wrapper>
	);
};

export default index;
