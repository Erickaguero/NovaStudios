 
import HomeOne from "@/components/homes/home";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Nova Studios — Helping brands grow with intention",
	description: "Nova Studios is a communication and advertising agency based in NYC – NJ. Strategy. Content. Growth.", 
};

const index = () => {
	return (
		<Wrapper>
			<HomeOne />
		</Wrapper>
	);
};

export default index;
