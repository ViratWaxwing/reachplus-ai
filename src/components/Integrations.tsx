import React from "react";

interface IntegrationsProps {
	className?: string;
}

const Integrations: React.FC<IntegrationsProps> = ({ className = "" }) => {
	return (
		<section className={`py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] ${className}`}>
			<div className="max-w-6xl mx-auto text-center">
				{/* Main Heading */}
				<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
					We plug into{" "}
					<span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
						your tech stack.
					</span>
				</h1>
				<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-12">
					Seamlessly.
				</h2>

				{/* Subtitle */}
				<p className="text-lg text-gray-600 max-w-4xl mx-auto mb-16 leading-relaxed">
					{
						"Instant media kits and hyper-personalized newsletters are two of our most-loved experiences — but they're not the limit. With Reach+, you shape what comes next."
					}
				</p>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-8  items-center mb-16">
					<div className="p-20 px-24 bg-[#F7F7F8] rounded-xl w-full h-full">
						<div className="text-sm font-semibold text-gray-700 text-center">
							Mailchimp
						</div>
					</div>
					<div className="p-20 px-24 bg-[#F7F7F8] rounded-xl w-full h-full">
						<div className="text-sm font-semibold text-gray-700 text-center">
							HubSpot
						</div>
					</div>
					<div className="p-20 px-24 bg-[#F7F7F8] rounded-xl w-full h-full">
						<div className="text-sm font-semibold text-gray-700 text-center">
							Notion
						</div>
					</div>
					<div className="p-20 px-24 bg-[#F7F7F8] rounded-xl w-full h-full">
						<div className="text-sm font-semibold text-gray-700 text-center">
							Webflow
						</div>
					</div>
					<div className="p-20 px-24 bg-[#F7F7F8] rounded-xl w-full h-full">
						<div className="text-sm font-semibold text-gray-700 text-center">
							Slack
						</div>
					</div>
					<div className="p-20 px-24 bg-[#F7F7F8] rounded-xl w-full h-full">
						<div className="text-sm font-semibold text-gray-700 text-center">
							Google Calendar
						</div>
					</div>
					<div className=" bg-[#FFFFFF] rounded-xl w-full p-5 h-full flex flex-col items-start border col-span-2">
						<div className="">
							<div className="flex flex-col gap-2">
								<h3 className="text-xl text-left font-semibold text-[#2D293D]">
									{"Don't see your tool?"}
								</h3>
								<p className="text-[#2D293DBF] text-sm leading-relaxed">
									{
										"We're constantly adding new integrations. If you have a specific need, our team can build custom connections for enterprise customers."
									}
								</p>
							</div>
							<button className="inline-flex  gap-2 bg-white hover:bg-gray-800 text-[#2D293D] px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 mt-4">
								View all integrations
								<svg
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="transition-transform duration-200"
								>
									<path d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</button>
						</div>
					</div>
				</div>

				{/* First row of integrations */}

				{/* Don't see your tool section */}
			</div>
		</section>
	);
};

export default Integrations;
