import React from "react";
import Link from "next/link";
import { Button } from "./";
import Image from "next/image";
import ReachPlusLogo from "./../../public/icons/reachplus.png";

interface HeaderProps {
	className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
	const navigationItems = [
		{ label: "Use case", href: "#use-case" },
		{ label: "How it works", href: "#how-it-works" },
		{ label: "Pricing", href: "#pricing" },
		{ label: "Contact", href: "/contact" },
	];

	return (
		<header className={`bg-white border-b border-gray-100 ${className}`}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-4">
					{/* Logo */}
					<div className="flex items-center">
						<Link
							href="/"
							className="flex items-center space-x-2 text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
						>
							<Image src={ReachPlusLogo} alt="Reach+" width={32} height={32} />
							<span>Reach+</span>
						</Link>
					</div>

					{/* Navigation */}
					<nav className="hidden md:flex space-x-8">
						{navigationItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="text-[#2D293DBF] hover:text-[#2D293D] hover:font-medium transition-colors font-medium"
							>
								{item.label}
							</Link>
						))}
					</nav>

					{/* Auth Buttons */}
					<div className="hidden md:flex items-center space-x-4">
						<Link
							href="https://app.waxwing.ai/"
							className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
						>
							Log in
						</Link>
						<Link
							href="https://app.waxwing.ai/sign-up"
							className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
						>
							<Button size="sm" className="bg-gray-900 hover:bg-gray-800">
								Sign up
							</Button>
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button
							className="text-gray-600 hover:text-gray-900 transition-colors"
							aria-label="Open mobile menu"
						>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
