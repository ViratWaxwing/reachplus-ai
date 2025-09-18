import React from "react";

interface CardProps {
	children: React.ReactNode;
	title?: string;
	className?: string;
	shadow?: "sm" | "md" | "lg" | "xl";
}

const Card: React.FC<CardProps> = ({
	children,
	title,
	className = "",
	shadow = "md",
}) => {
	const shadowClasses = {
		sm: "shadow-sm",
		md: "shadow-md",
		lg: "shadow-lg",
		xl: "shadow-xl",
	};

	const baseClasses =
		"bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700";
	const classes = `${baseClasses} ${shadowClasses[shadow]} ${className}`;

	return (
		<div className={classes}>
			{title && (
				<div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
						{title}
					</h3>
				</div>
			)}
			<div className="p-6">{children}</div>
		</div>
	);
};

export default Card;
