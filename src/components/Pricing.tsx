import { Check, ArrowRight } from "lucide-react";
import Button from "@/components/Button";

export default function PricingPage() {
	const features = [
		"100 runs per month",
		"Full access to the builder",
		"Deploy to websites, apps, emails, push",
		"Core integrations",
		"Basic analytics & A/B testing",
		"Community support",
	];

	return (
		<div id={"pricing"} className="py-16 px-4">
			<div className="max-w-4xl mx-auto">
				{/* Header Section */}
				<div className="text-center mb-16">
					{/* Main Heading */}
					<h2 className="font-bold text-[3.125rem] leading-[3.75rem] mb-6">
						<span className="text-[#2D293D] block">{"Two ways to start."}</span>
						<span
							className="bg-clip-text  text-transparent"
							style={{
								background:
									"linear-gradient(104deg, #744FFB 10.82%, #80E6E6 108.25%)",
								backgroundClip: "text",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
							}}
						>
							One shared promise.
						</span>
					</h2>

					{/* Subheading */}
					<p className="text-lg text-[#2D293DBF] max-w-3xl mx-auto">
						{"Build on your own, or let our team bring your ideas to life."}
					</p>
				</div>

				{/* Pricing Cards */}
				<div className="grid md:grid-cols-2 gap-8 max-w-5xl h-full mx-auto pt-12">
					{/* Self-Serve Plan */}{" "}
					<div
						style={{
							background:
								"linear-gradient(180deg, rgba(121, 87, 254, 0.20) 0%, rgba(121, 87, 254, 0.00) 29.81%)",
						}}
						className=" flex flex-col rounded-2xl p-8  border border-purple-200/50"
					>
						<div className="mb-6">
							<h3 className="text-2xl font-bold text-gray-900 mb-2">
								Self-Serve
							</h3>
							<p className="text-gray-600 mb-6">
								Everything you need to build and deploy
							</p>

							<div className="flex items-baseline mb-8">
								<span className="text-4xl font-bold text-gray-900">$299</span>
								<span className="text-gray-500 ml-1">/month</span>
							</div>
						</div>

						{/* Features List */}
						<div className="space-y-4 mb-8">
							{features.map((feature, index) => (
								<div key={index} className="flex items-center gap-3">
									<div className="w-5 h-5 bg-gray-700 rounded-sm flex items-center justify-center flex-shrink-0">
										<Check className="w-3 h-3 text-white" />
									</div>
									<span className="text-gray-700">{feature}</span>
								</div>
							))}
						</div>

						<div className="flex flex-col h-full self-end w-full">
							{/* CTA Button */}
							<Button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg font-medium mb-4 group">
								Start Self-Serve
								{/* <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /> */}
							</Button>

							<p className="text-center text-sm text-gray-500">
								No setup fee • Cancel anytime
							</p>
						</div>
					</div>
					{/* Built-For-You Plan */}{" "}
					<div className=" bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-[1px] overflow-hidden relative flex flex-col justify-end">
						<div className="absolute top-0 flex justify-center self-start pt-3 left-0 right-0  text-white text-center py-1 text-sm font-medium">
							<p className="pb-3">Most Popular</p>
						</div>
						<div className="bg-white rounded-2xl p-8 pt-4 shadow-lg border border-purple-200 relative overflow-hidden">
							{/* Most Popular Badge */}

							<div className="mb-6">
								<h3 className="text-2xl font-bold text-gray-900 mb-2">
									Built-For-You
								</h3>
								<p className="text-gray-600 mb-6">
									Full-service solution with dedicated team
								</p>

								<div className="mb-8">
									<span className="text-4xl font-bold text-gray-900">
										Custom Pricing
									</span>
								</div>
							</div>

							{/* Features List */}
							<div className="space-y-4 mb-8">
								{features.map((feature, index) => (
									<div key={index} className="flex items-center gap-3">
										<div className="w-5 h-5 bg-gray-700 rounded-sm flex items-center justify-center flex-shrink-0">
											<Check className="w-3 h-3 text-white" />
										</div>
										<span className="text-gray-700">{feature}</span>
									</div>
								))}
							</div>

							{/* CTA Button */}
							<div className="flex flex-col self-end">
								<Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-3 rounded-lg font-medium mb-4 group">
									Connect with us
									{/* <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /> */}
								</Button>

								<p className="text-center text-sm text-gray-500">
									Custom pricing • 30-day pilot program
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
