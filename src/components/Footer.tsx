"use client";

import { Button } from "./";
import { Input } from "./";
import { FeatureCheckmark } from "./feature-checkmark";
import { AvatarGroup } from "./avatar-group";
// import { LiveDemoButton } from "./live-demo-button";
import { ArrowRight, Linkedin } from "lucide-react";
import EmailEnvelope3D from "./../../public/images/let.png";
import Image from "next/image";
import ReachPlusLogo from "./../../public/icons/reachplus.png";

export default function Footer() {
	return (
		<div className="min-h-screen bg-[#24222A] text-[#FFFFFF]">
			{/* Main Content */}
			<main className="container mx-auto px-4 py-16">
				{/* Email Signup Section */}
				<section className="flex flex-col lg:flex-row items-center justify-between gap-16 py-[7.5rem]">
					{/* Left side - 3D Envelope */}
					<div className="flex-1 flex justify-center">
						<Image src={EmailEnvelope3D} alt="Email Envelope" />
					</div>

					{/* Right side - Content */}
					<div className="flex-1 ">
						<AvatarGroup count="2,000+" label="growth leaders" />

						<h1 className="text-4xl lg:text-[3.375rem] font-bold leading-[4.25rem]">
							Ready to Unlock Your Growth Potential?
						</h1>

						<p className="text-lg text-[#A9A3C2] mb-8 text-pretty">
							Join thousands of growth leaders who receive personalized AI
							insights every week. Your competitive advantage starts with your
							next email.
						</p>

						{/* Email Form */}
						<div className="flex gap-2 max-w-lg mb-6 bg-white relative rounded-lg ">
							<Input
								type="email"
								placeholder="Enter your email"
								className="flex-1 border-none"
							/>
							<Button className="bg-primary hover:bg-primary/90 text-primary-foreground  absolute right-1 top-1/2 -translate-y-1/2">
								Subscribe
							</Button>
						</div>

						{/* Features */}
						<div className="flex flex-wrap gap-6">
							<FeatureCheckmark text="Free forever." />
							<FeatureCheckmark text="No spam, ever." />
							<FeatureCheckmark text="Unsubscribe anytime." />
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="text-center py-[7.5rem]">
					<h2 className="text-4xl lg:text-[3.375rem] font-bold mb-6 max-w-2xl leading-[4.25rem] mx-auto">
						Ready to build your first mini experience?
					</h2>

					<p className="text-lg text-[#FFFFFFBF] mb-12 max-w-2xl mx-auto text-pretty">
						Try Reach+ self-serve at $299/mo, or let us build your vision
						starting at $5,000. Either way — personalize everything.
					</p>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
						<button
							style={{
								background:
									"linear-gradient(104deg, #744FFB 10.82%, #80E6E6 108.25%)",
							}}
							className="rounded-lg px-8 py-3 text-white text-lg border-none"
						>
							Start Self-Serve
							{/* <ArrowRight className="w-5 h-5 ml-2" /> */}
						</button>
						<Button
							variant="outline"
							className="bg-[#FFFFFF] text-[#2D293D] rounded-lg px-8 py-3 text-lg border-none"
						>
							Talk to Sales
							{/* <ArrowRight className="w-5 h-5 ml-2" /> */}
						</Button>
					</div>

					{/* Live Demo button showcase */}
					{/* <div className="flex justify-center mb-8">
						<LiveDemoButton onClick={() => console.log("Live Demo clicked")} />
					</div> */}

					{/* Features */}
					<div className="flex flex-wrap justify-center gap-8">
						<FeatureCheckmark text="No setup fees" />
						<FeatureCheckmark text="Cancel anytime" />
						<FeatureCheckmark text="30-day pilot program" />
					</div>
				</section>
			</main>

			{/* Footer */}
			<footer className="border-t border-border/20 py-12">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
						{/* Logo and Copyright */}
						<div className="flex flex-col gap-4">
							<div className="flex items-center gap-2">
								<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
									<Image src={ReachPlusLogo} alt="Reach+" />
								</div>
								<span className="font-semibold text-lg">Reach+</span>
							</div>
							<p className="text-sm text-muted-foreground">
								2025 Waxwing AI Ltd.
							</p>
						</div>

						{/* Navigation */}
						<nav className="flex flex-wrap gap-8">
							<a
								href="#use-case"
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Use cases
							</a>
							<a
								href="#how-it-works"
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								How it works
							</a>
							<a
								href="#pricing"
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Pricing
							</a>
							<a
								href="/contact"
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Contact us
							</a>
						</nav>

						{/* Social and Legal */}
						<div className="flex items-center gap-6">
							<a
								href="#"
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								<Linkedin className="w-5 h-5" />
							</a>
							<div className="flex gap-4 text-sm text-muted-foreground">
								<a href="#" className="hover:text-foreground transition-colors">
									Terms of Service
								</a>
								<a href="#" className="hover:text-foreground transition-colors">
									Privacy Policy
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
