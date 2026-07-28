 
import BlogDetails from "@/components/blog-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Blog Details | Nova Studios",
	description: "Nova Studios is a communication and advertising agency based in NYC – NJ. Strategy. Content. Growth.",
	 
};

const index = () => {
	return (
		<Wrapper>
			<BlogDetails />
		</Wrapper>
	);
};

export default index;
