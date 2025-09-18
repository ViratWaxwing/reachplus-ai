"use client";
import React, { useState } from "react";
import { Button } from "./";

interface WidgetsDemoProps {
	className?: string;
}

// interface FeatureCardData {
// 	id: string;
// 	icon: React.ReactNode;
// 	title: string;
// 	description: string;
// 	badgeText: string;
// 	badgeVariant: "primary" | "secondary";
// }

const WidgetsDemo: React.FC<WidgetsDemoProps> = ({ className = "" }) => {
	const [isLoading, setIsLoading] = useState(false);

	const handleGenerate = async (featureType: string) => {
		setIsLoading(true);
		// Simulate API call
		setTimeout(() => {
			setIsLoading(false);
			console.log("Generated:", featureType);
		}, 2000);
	};
	return (
		<section
			className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white ${className}`}
			aria-labelledby="widgets-demo-heading"
		>
			<div className="max-w-7xl mx-auto">
				{/* Header Section */}
				<div className="text-center mb-12 sm:mb-16">
					<h1
						id="widgets-demo-heading"
						className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-[3.75rem] "
					>
						See{" "}
						<span
							style={{
								background:
									"linear-gradient(104deg, #744FFB 10.82%, #80E6E6 108.25%)",
								backgroundClip: "text",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
							}}
							className="text-blue-600 font-extrabold"
						>
							Reach+ widgets
						</span>{" "}
						in action — <br className="hidden sm:block" />
						instantly tailored to you
					</h1>

					<p className="text-lg sm:text-xl text-[#2D293DBF] text-center mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
						{
							"Enter your website (or your client's) and watch Reach+ generate two custom mini experiences just for you:"
						}
					</p>
				</div>

				{/* Features Grid */}
				<div className="flex w-full gap-8">
					<div className="flex-1 flex flex-col bg-[#F7F7F8] px-[1.88rem] py-[1.5rem]">
						{/* Header with icon and badge */}
						<div className="mb-6 flex flex-col gap-2">
							<div className="flex items-center rounded-full w-max bg-[#FFFFFF] px-3 py-1 gap-3 mb-4">
								{/* Purple circular icon with star */}

								<span className="text-sm font-medium text-[#2D293D99] px-3 py-1 rounded-full">
									Interactive Plans
								</span>
							</div>
							<h3 className="text-[1.75rem] font-bold text-[#2D293D] mb-3 leading-tight">
								Hyper-personalized Interactive plans for your clients
							</h3>
							<p className="text-[#2D293DCC] text-lg leading-relaxed">
								Show them instantly what your business can do for them.
							</p>
						</div>

						{/* Preview area */}
						<div className="flex-1 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 min-h-[300px] mb-6 flex items-center justify-center">
							<div className="text-center text-gray-400"></div>
						</div>

						{/* Generate button */}
						<div>
							<Button
								size="lg"
								className="bg-gray-800 hover:bg-gray-900 text-white flex font-bold items-center gap-2 px-4 py-2"
								onClick={() => handleGenerate("interactive-plans")}
								disabled={isLoading}
							>
								{isLoading ? (
									<>
										<svg
											className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
										>
											<circle
												className="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"
											></circle>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											></path>
										</svg>
										Generating...
									</>
								) : (
									<>
										Generate now
										<svg
											className="w-4 h-4"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M13 7l5 5m0 0l-5 5m5-5H6"
											/>
										</svg>
									</>
								)}
							</Button>
						</div>
					</div>
					<div className="flex-1 flex flex-col bg-[#F7F7F8] px-[1.88rem] py-[1.5rem]">
						{/* Header with icon and badge */}
						<div className="mb-6 flex flex-col gap-2">
							<div className="flex items-center rounded-full w-max bg-[#FFFFFF] px-3 py-1 gap-3 mb-4">
								{/* Purple circular icon with star */}

								<span className="text-sm font-medium text-[#2D293D99] px-3 py-1 rounded-full">
									Captivating Newsletters
								</span>
							</div>
							<h3 className="text-[1.75rem] font-bold text-[#2D293D] mb-3 leading-tight">
								Personalized newsletter based on your style and content
							</h3>
							<p className="text-[#2D293DCC] text-lg leading-relaxed">
								AI-generated newsletters that match your brand voice, content
								style, and audience interests for maximum engagement.
							</p>
						</div>

						{/* Preview area */}
						<div className="flex-1 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 min-h-[300px] mb-6 flex items-center justify-center">
							<div className="text-center text-gray-400"></div>
						</div>

						{/* Generate button */}
						<div>
							<Button
								size="lg"
								className="bg-gray-800 hover:bg-gray-900 text-white flex font-bold items-center gap-2 px-4 py-2"
								onClick={() => handleGenerate("interactive-plans")}
								disabled={isLoading}
							>
								{isLoading ? (
									<>
										<svg
											className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
										>
											<circle
												className="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"
											></circle>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											></path>
										</svg>
										Generating...
									</>
								) : (
									<>
										Generate now
										<svg
											className="w-4 h-4"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M13 7l5 5m0 0l-5 5m5-5H6"
											/>
										</svg>
									</>
								)}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WidgetsDemo;
