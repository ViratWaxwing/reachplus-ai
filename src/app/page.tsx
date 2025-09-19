import {
	Header,
	Integrations,
	Features,
	WidgetsDemo,
	BelovedExperiences,
	HowWork,
	Hero,
	Footer,
} from "@/components";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";

const Home = () => {
	return (
		<div className="min-h-screen bg-white">
			<Header />
			<Hero />
			<WidgetsDemo />
			<Features />
			<BelovedExperiences />
			{/* <HowWork /> */}
			<Integrations />
			<Pricing />
			<Testimonial />
			<Footer />
		</div>
	);
};

export default Home;
