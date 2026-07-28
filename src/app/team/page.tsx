 
import Team from "@/components/team";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Team | Nova Studios",
	description: "Nova Studios is a communication and advertising agency based in NYC – NJ. Strategy. Content. Growth.",
	 
};

const index = () => {
	return (
		<Wrapper>
			<Team />
		</Wrapper>
	);
};

export default index;
