import React from "react";

interface FeatureCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
	icon,
	title,
	description,
}) => {
	return (
		<div className="bg-[#FFFFFF] rounded-[1.25rem] p-5 flex flex-col gap-[60px] justify-between ">
			<div className="w-16 h-16 mb-6 bg-[#F1F1F3] rounded-lg flex items-center justify-center shadow-sm">
				{icon}
			</div>
			<div>
				<h3 className="text-xl font-bold text-[#2D293D] mb-4">{title}</h3>
				<p className="text-[#2D293DBF] leading-relaxed">{description}</p>
			</div>
		</div>
	);
};

const HowWork: React.FC = () => {
	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 ">
			<div className="max-w-7xl mx-auto bg-[#F7F7F8] rounded-[1.25rem] px-11 py-[3.75rem]">
				<div className="text-center mb-16">
					{/* Main Heading */}
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
						<span className="text-[#2D293D] block">How it Works</span>
					</h2>

					{/* Subheading */}
					<p className="text-lg text-[#2D293DD9] max-w-3xl mx-auto">
						From idea to deployment in four simple steps. No technical expertise
						required.
					</p>
				</div>

				{/* Feature Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-[#F1F1F3] p-1 rounded-[1.25rem]">
					<FeatureCard
						icon={
							<svg
								className="w-8 h-8 text-purple-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						}
						title="Imagine"
						description="Start with an idea. It could be What can you do for me?, a quiz, or a surprise preview."
					/>
					<FeatureCard
						icon={
							<svg
								className="w-8 h-8 text-gray-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
								/>
							</svg>
						}
						title="Build"
						description="Use our editor: chain together AI, rules, data, and brand elements.
"
					/>
					<FeatureCard
						icon={
							<svg
								className="w-8 h-8 text-gray-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
								/>
							</svg>
						}
						title="Review & Approve"
						description="Set up moderation, validation, style checks."
					/>
					<FeatureCard
						icon={
							<svg
								className="w-8 h-8 text-gray-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
								/>
							</svg>
						}
						title="Deploy Everywhere"
						description="Embed on site, app, email, or send via push.
"
					/>
				</div>
			</div>
		</section>
	);
};

export default HowWork;
