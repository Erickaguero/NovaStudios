
 
import Register from "@/components/register"; 
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Register | Nova Studios",
	description: "Nova Studios is a communication and advertising agency based in NYC – NJ. Strategy. Content. Growth.",
	 
};

const index = () => {
	return (
		<Wrapper>
			<Register />
		</Wrapper>
	);
};

export default index;
