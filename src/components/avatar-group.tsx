import Image from "next/image";
import Avatar from "./../../public/images/avatar.png";
import Avatar1 from "./../../public/images/avatar1.png";
import Avatar2 from "./../../public/images/avatar2.png";
import Avatar3 from "./../../public/images/avatar3.png";
import Avatar4 from "./../../public/images/avatar4.png";

interface AvatarGroupProps {
	count: string;
	label: string;
}

export function AvatarGroup({ count, label }: AvatarGroupProps) {
	return (
		<div className="flex items-center gap-3 mb-8">
			<div className="flex -space-x-2">
				<div className="w-9 h-9 rounded-full ">
					<Image src={Avatar} alt="Avatar" />
				</div>
				<div className="w-9 h-9 rounded-full ">
					<Image src={Avatar1} alt="Avatar 1" />
				</div>
				<div className="w-9 h-9 rounded-full ">
					<Image src={Avatar2} alt="Avatar 2" />
				</div>
				<div className="w-9 h-9 rounded-full ">
					<Image src={Avatar3} alt="Avatar 3" />
				</div>
				<div className="w-9 h-9 rounded-full ">
					<Image src={Avatar4} alt="Avatar 4" />
				</div>
			</div>
			<span className=" text-[#C6C2D6]">
				Join {count} {label}
			</span>
		</div>
	);
}
