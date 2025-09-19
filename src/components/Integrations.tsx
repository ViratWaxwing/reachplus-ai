import React from "react";
import Microsoft from "./../../public/images/microsoft.png";
import HubSpot from "./../../public/images/hub.png";
import Salesforce from "./../../public/images/salesforce.png";
import Mailchimp from "./../../public/images/mail.png";
import Image from "next/image";

interface IntegrationsProps {
	className?: string;
}

const Integrations: React.FC<IntegrationsProps> = ({ className = "" }) => {
	return (
		<section className={`py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] ${className}`}>
			<div className="max-w-6xl mx-auto text-center">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center p-11 max-w-[800px] mx-auto">
					<div className="text-sm font-semibold h-[6rem]  flex items-center justify-center rounded-[1.87rem] py-[4rem] bg-[#F7F7F8]">
						<Image src={HubSpot} alt="HubSpot" width={120} />
					</div>
					<div className="text-sm font-semibold h-[6rem] flex items-center justify-center rounded-[1.87rem] py-[4rem] bg-[#F7F7F8]">
						<Image src={Salesforce} alt="Salesforce" width={120} />
					</div>
					<div className="text-sm font-semibold h-[6rem] flex items-center justify-center rounded-[1.87rem] py-[4rem] bg-[#F7F7F8]">
						<Image src={Mailchimp} alt="Mailchimp" width={120} />
					</div>
					<div className="text-sm font-semibold h-[6rem] flex items-center justify-center rounded-[1.87rem] py-[4rem] bg-[#F7F7F8]">
						<Image src={Microsoft} alt="Microsoft" width={120} />
					</div>
				</div>
				{/* Main Heading */}

				<div className="flex flex-col gap-4">
					<div>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D293D] mb-3">
							We plug into{" "}
							<span
								style={{
									background:
										"linear-gradient(104deg, #744FFB 10.82%, #80E6E6 108.25%)",
									backgroundClip: "text",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
								}}
								className="text-blue-600 font-bold"
							>
								your tech stack.
							</span>{" "}
						</h1>
						<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D293D]">
							Seamlessly.
						</h2>
					</div>

					{/* Subtitle */}
					<p className="text-lg text-[#2D293DBF] max-w-4xl mx-auto mb-16 leading-relaxed">
						{
							"Instant media kits and hyper-personalized newsletters are two of our most-loved experiences — but they're not the limit. With Reach+, you shape what comes next."
						}
					</p>
				</div>

				{/* First row of integrations */}

				{/* Don't see your tool section */}
			</div>
		</section>
	);
};

export default Integrations;
