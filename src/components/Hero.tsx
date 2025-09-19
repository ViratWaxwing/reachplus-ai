"use client";
import React, { useState } from "react";
import { Button } from "./";
import { Input } from "./ui/input";
// import NoCodePlatform from "../../public/icons/star.png";
// import Image from "next/image";
import DotGrid from "./ui/DotGrid";
import GradientText from "./ui/GradientText";
import { PiSparkle } from "react-icons/pi";
import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/16/solid";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";

interface HeroProps {
	className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = "" }) => {
	const [websiteUrl, setWebsiteUrl] = useState("");

	const handleDemoClick = () => {
		// Handle demo logic here
		console.log("Demo clicked with URL:", websiteUrl);
	};

	return (
		<section className={`h-[700px] relative ${className}`}>
			<DotGrid
				dotSize={2}
				gap={18}
				baseColor="#E4E3E8"
				activeColor="#7888F3"
				proximity={120}
				shockRadius={4}
				shockStrength={5}
				resistance={750}
				returnDuration={1.5}
			/>
			<div className="absolute inset-0 flex items-center justify-center z-[1111]">
				<div className="max-w-6xl mx-auto px-4">
					<div className="text-center">
						{/* No Code Platform Badge */}
						<div
							style={{}}
							className="inline-flex border shadow-sm shadow-[#7957FE1A] z-30 bg-white border-[#DDD4FE] items-center px-4 py-2 rounded-full text-sm font-medium mb-8"
						>
							<span className="mr-2">
								<SparklesIcon className="h-6 w-6 text-xl text-[#7957FE]" />
							</span>
							{/* <span className="text-[#2D293D] font-thin text-sm">
								No Code Platform
							</span> */}
							<GradientText
								colors={["#7957FE", "#80E6E6", "#7957FE", "#80E6E6", "#7957FE"]}
								animationSpeed={3}
								showBorder={false}
								className="text-sm font-medium"
							>
								No Code Platform
							</GradientText>
						</div>

						{/* Main Heading */}
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D293D] mb-6">
							Captivate your users,{" "}
							<span className="italic text-[#2D293D] font-thin">instantly</span>
						</h1>

						{/* Subheading */}
						<div className="flex flex-col items-center mb-12">
							<p className="text-lg text-[#2D293DD9] max-w-3xl mx-auto">
								Build and deploy AI powered mini experiences to captivate and
								re-engage your users.
							</p>

							{/* Description */}
							<p className="text-lg text-[#2D293DD9] max-w-2xl mx-auto">
								Personalized media kits, newsletters, quizzes, configurators,
								and more.
							</p>
						</div>

						{/* CTA Section */}
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-3xl mx-auto">
							<div className="flex w-full max-w-lg relative">
								<input
									type="url"
									placeholder="Enter your website URL"
									value={websiteUrl}
									onChange={(e) => setWebsiteUrl(e.target.value)}
									height={98}
									className="bg-white py-[1.4rem] rounded-[0.625rem] w-full px-5 placeholder:text-[#2D293D66] border border-[#E3E6E8] focus:outline-none"
								/>
								<Button className="absolute bg-[#2D293D] px-4 pr-2 py-1 text-white justify-between flex items-center gap-4 rounded-lg right-2 top-1/2 -translate-y-1/2">
									Live Demo
									<span
										style={{
											background:
												"linear-gradient(104deg, #744FFB 10.82%, #80E6E6 108.25%)",
										}}
										className="rounded-lg p-2"
									>
										<ArrowRightIcon className="w-5 h-5" />
									</span>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
