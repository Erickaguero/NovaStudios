 
import TeamDetails from "@/components/team-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Team Details | Nova Studios",
	description: "Nova Studios is a communication and advertising agency based in NYC – NJ. Strategy. Content. Growth.",
	 
};

const index = () => {
	return (
		<Wrapper>
			<TeamDetails />
		</Wrapper>
	);
};

export default index;
