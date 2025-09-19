import QuoteIcon from "./../../public/icons/quotes.png";
import BhavyRawat from "./../../public/images/bhavy.png";
import Image from "next/image";

const Testimonial = () => {
	return (
		<div className="py-[6.25rem] max-w-6xl mx-auto">
			<div className="grid lg:grid-cols-2 gap-[3.75rem] items-center">
				{/* Left Side - Heading */}
				<div className="text-center mb-16">
					{/* Main Heading */}
					<h2 className="font-bold text-[3.125rem] leading-[3.75rem] mb-6">
						<span className="text-[#2D293D]">{"Real results. "}</span>
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
							Real creativity unleashed.
						</span>
					</h2>

					{/* Subheading */}
					<p className="text-lg text-[#2D293DBF] max-w-3xl mx-auto">
						{
							"See how companies are using Reach+ to create experiences that convert."
						}
					</p>
				</div>

				{/* Right Side - Testimonial Card */}
				<div className="bg-[#F7F7F8] flex flex-col gap-5 rounded-xl p-8 shadow-lg border border-gray-100">
					{/* Quote Icon */}
					<div className="">
						<Image src={QuoteIcon} alt="Quote" className="w-12" />
					</div>

					{/* Testimonial Text */}
					<blockquote className="text-[#2D293D] text-xl leading-relaxed">
						I had an amazing experience with this software! It streamlined my
						workflow and s aved me so much time. The customer support team was
						incredibly helpful and responsive. I can't imagine going back to my
						old system. Highly recommend it to anyone looking to improve their
						productivity!
					</blockquote>

					{/* Author Info */}
					<div className="flex items-center gap-4 pt-5">
						<div className="w-12 h-12 rounded-full overflow-hidden">
							<Image
								src={BhavyRawat}
								alt="Bhavy Rawat"
								className="w-full h-full object-cover"
							/>
						</div>
						<div>
							<div className="font-semibold text-gray-900">Bhavy Rawat</div>
							<div className="text-sm text-gray-500">Founder @ OutBuzz.ai</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
