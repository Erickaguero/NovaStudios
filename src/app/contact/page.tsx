 
import Contact from "@/components/contact";  
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Contact | Nova Studios",
	description: "Nova Studios is a communication and advertising agency based in NYC – NJ. Strategy. Content. Growth.",
	 
};

const index = () => {
	return (
		<Wrapper>
			<Contact />
		</Wrapper>
	);
};

export default index;
