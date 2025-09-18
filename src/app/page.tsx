import {
	Header,
	Integrations,
	Features,
	WidgetsDemo,
	BelovedExperiences,
	HowWork,
	Hero,
} from "@/components";

const Home = () => {
	return (
		<div className="min-h-screen bg-white">
			<Header />
			<Hero />
			<WidgetsDemo />
			<Features />
			<BelovedExperiences />
			<HowWork />
			<Integrations />
		</div>
	);
};

export default Home;
