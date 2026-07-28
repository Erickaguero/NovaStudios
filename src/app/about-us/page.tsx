 
import Aboutus from "@/components/about-us"; 
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "About us | Nova Studios",
	description: "Nova Studios is a communication and advertising agency based in NYC – NJ. Strategy. Content. Growth.", 
};

const index = () => {
	return (
		<Wrapper>
			<Aboutus />
		</Wrapper>
	);
};

export default index;
