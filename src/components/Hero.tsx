"use client";
import React, { useState } from "react";
import { Button, Input } from "./";
import NoCodePlatform from "../../public/icons/star.png";
import Image from "next/image";

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
		<section className={`py-48 px-4 sm:px-6 lg:px-8 ${className}`}>
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-16">
					{/* No Code Platform Badge */}
					<div
						style={{ background: "rgba(45, 41, 61, 0.05)" }}
						className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8"
					>
						<span className="mr-2">
							<Image
								src={NoCodePlatform}
								alt="No Code Platform"
								width={20}
								height={20}
							/>
						</span>
						<span className="text-[#2D293D] font-thin text-sm">
							No Code Platform
						</span>
					</div>

					{/* Main Heading */}
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D293D] mb-6">
						Captivate your users,{" "}
						<span className="italic text-[#2D293D] font-thin">instantly</span>
					</h1>

					{/* Subheading */}
					<div className="flex flex-col items-center mb-12 ">
						<p className="text-lg text-[#2D293DD9] max-w-3xl mx-auto">
							Build and deploy AI powered mini experiences to captivate and
							re-engage your users.
						</p>

						{/* Description */}
						<p className="text-lg text-[#2D293DD9] max-w-2xl mx-auto">
							Personalized media kits, newsletters, quizzes, configurators, and
							more.
						</p>
					</div>

					{/* CTA Section */}
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
						{/* Decorative Arrow */}
						{/* <div className="hidden sm:block text-gray-300 mr-4">
							<svg
								width="120"
								height="60"
								viewBox="0 0 120 60"
								fill="none"
								className="text-gray-300"
							>
								<path
									d="M10 30 Q 40 10, 90 30"
									stroke="currentColor"
									strokeWidth="2"
									strokeDasharray="4 4"
									fill="none"
								/>
								<path
									d="M85 25 L90 30 L85 35"
									stroke="currentColor"
									strokeWidth="2"
									fill="none"
								/>
							</svg>
						</div> */}

						<div className="flex w-full max-w-lg">
							<Input
								type="url"
								placeholder="Enter your website URL"
								value={websiteUrl}
								onChange={(e) => setWebsiteUrl(e.target.value)}
								className="rounded-r-none border-r-0 focus:border-r-0 placeholder:text-[#2D293D4D]"
								size="lg"
							/>
							<Button
								variant="primary"
								size="lg"
								onClick={handleDemoClick}
								className="rounded-l-none whitespace-nowrap flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
							>
								Live Demo
								<svg
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</Button>
						</div>
					</div>

					{/* Business Context */}
					{/* <div className="mt-12 text-sm text-gray-400 italic">
						<p>See what Reach+ can do</p>
						<p>for your business</p>
					</div> */}
				</div>

				{/* Decorative Border */}
			</div>
		</section>
	);
};

export default Hero;
