import React from "react";

interface ExperienceCardProps {
	badge: string;
	title: string;
	description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
	badge,
	title,
	description,
}) => {
	return (
		<div className="flex-1 flex flex-col bg-[#F7F7F8] p-5 rounded-xl">
			{/* Header with icon and badge */}
			<div className="mb-6 flex flex-col gap-2">
				<div className="flex items-center rounded-full w-max bg-[#FFFFFF] px-3 py-2 gap-3 mb-4">
					{/* Purple circular icon with star */}
					<span className="text-sm font-medium text-[#2D293D99] rounded-full">
						{badge}
					</span>
				</div>
				<h3 className="text-xl font-bold text-[#2D293D] mb-3 leading-tight">
					{title}
				</h3>
				<p className="text-[#2D293DCC]  leading-relaxed">{description}</p>
			</div>

			{/* Preview area */}
			<div className="flex-1 bg-[#FFFFFF] rounded-xl min-h-[150px] flex items-center justify-center">
				<div className="text-center text-gray-400"></div>
			</div>

			{/* Generate button */}
		</div>
	);
};

const BelovedExperiences: React.FC = () => {
	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF]">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D293D] mb-4">
						Beloved Experiences
					</h2>{" "}
					<p className="text-4xl sm:text-5xl lg:text-6xl">
						(but just the beginning)
					</p>
				</div>

				{/* Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
					<ExperienceCard
						badge="Most Popular"
						title="Personalized Media Kits & Proposals"
						description="Sales teams & customers get tailored plans instantly."
					/>
					<ExperienceCard
						badge="High ROI"
						title="Hyper-Personalized Newsletters"
						description="Re-engagement and cross-sell that feels human."
					/>
					<ExperienceCard
						badge="New"
						title="Interactive Configurators"
						description="Let customers build and visualize their perfect solution."
					/>
				</div>

				{/* Call to Action */}
				<div className="text-center">
					<button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
						Explore use cases
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							className="transition-transform duration-200"
						>
							<path
								d="M8 1L15 8L8 15M15 8H1"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
};

export default BelovedExperiences;
