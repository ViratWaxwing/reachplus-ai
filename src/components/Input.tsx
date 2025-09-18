import React from "react";

interface InputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
	variant?: "default" | "outline";
	size?: "sm" | "md" | "lg";
	className?: string;
}

const Input: React.FC<InputProps> = ({
	variant = "default",
	size = "md",
	className = "",
	...props
}) => {
	const baseClasses =
		"w-full rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";

	const variantClasses = {
		default: "border-gray-300 bg-white text-gray-900 placeholder-gray-500",
		outline:
			"border-2 border-gray-300 bg-transparent text-gray-900 placeholder-gray-500 focus:border-blue-500",
	};

	const sizeClasses = {
		sm: "px-3 py-2 text-sm",
		md: "px-4 py-3 text-base",
		lg: "px-6 py-4 text-lg",
	};

	const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

	return <input className={classes} {...props} />;
};

export default Input;
