import React from "react";
import {
	PiChartBar,
	PiChartLine,
	PiCode,
	PiGlobe,
	PiShieldCheck,
} from "react-icons/pi";

import { FaCode } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { IoShieldOutline } from "react-icons/io5";
import { BiBarChartAlt2 } from "react-icons/bi";

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
		<div className="bg-[#FFFFFF]  group rounded-[1.25rem] p-5 flex flex-col gap-[60px] hover:border-[1.5px] border-[#744FFB] justify-between ">
			<div className="w-14 h-14 text-[#2D293D80] group-hover:bg-gradient-to-r group-hover:text-white group-hover:from-[#744FFB] group-hover:to-[#80E6E6] scale-125 mb-6 bg-[#F1F1F3] rounded-lg flex items-center justify-center shadow-sm">
				{icon}
			</div>
			<div>
				<h3 className="text-xl font-bold text-[#2D293D] mb-4">{title}</h3>
				<p className="text-[#2D293DBF] leading-relaxed">{description}</p>
			</div>
		</div>
	);
};

const Features: React.FC = () => {
	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					{/* Main Heading */}
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
						<span className="text-[#2D293D] block">
							{"Personalization shouldn't be rare."}
						</span>
						<span
							className="bg-clip-text text-transparent"
							style={{
								background:
									"linear-gradient(104deg, #744FFB 10.82%, #80E6E6 108.25%)",
								backgroundClip: "text",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
							}}
						>
							It should be everywhere.
						</span>
					</h2>

					{/* Subheading */}
					<p className="text-lg text-[#2D293DD9] max-w-3xl mx-auto">
						{
							"Instant media kits and hyper-personalized newsletters are two of our most-loved experiences — but they're not the limit. With Reach+, you shape what comes next."
						}
					</p>
				</div>

				{/* Feature Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-[#F1F1F3] p-[1px] rounded-[1.25rem]">
					<FeatureCard
						icon={<FaCode size={26} />}
						title="No-code toolset"
						description="Drag, drop, connect AI + data with an intuitive visual editor"
					/>
					<FeatureCard
						icon={<CiGlobe size={26} />}
						title="Deploy everywhere"
						description="Web, apps, emails, push notifications — embed anywhere"
					/>
					<FeatureCard
						icon={<IoShieldOutline size={26} />}
						title="Full guardrails"
						description="Content rules, human reviews, moderation built-in"
					/>
					<FeatureCard
						icon={<BiBarChartAlt2 size={26} />}
						title="Analytics + experimentation"
						description="A/B testing and detailed performance insights baked in"
					/>
				</div>
			</div>
		</section>
	);
};

export default Features;
