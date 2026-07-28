 
import Login from "@/components/login"; 
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Login | Nova Studios",
	description: "Nova Studios is a communication and advertising agency based in NYC – NJ. Strategy. Content. Growth.",
	 
};

const index = () => {
	return (
		<Wrapper>
			<Login />
		</Wrapper>
	);
};

export default index;
