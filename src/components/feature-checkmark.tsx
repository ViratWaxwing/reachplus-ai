import { Check } from "lucide-react";

interface FeatureCheckmarkProps {
	text: string;
}

export function FeatureCheckmark({ text }: FeatureCheckmarkProps) {
	return (
		<div className="flex items-center gap-2 text-sm text-muted-foreground">
			<div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#444249]">
				<Check className="w-3 h-3 text-white" />
			</div>
			<span className="text-[#A9A3C2]">{text}</span>
		</div>
	);
}
