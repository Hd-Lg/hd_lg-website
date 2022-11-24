import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
	image: StaticImageData;
	text: string;
};

const Skill = ({ image, text }: Props) => {
	return (
		<div className="flex flex-col justify-center m-3">
			<Image
				src={image}
				alt={`image of ${text}`}
				placeholder="blur"
				className="rounded-3xl h-24 w-24 bg-white mx-auto"
			/>
			<p className="text-xl mt-2 uppercase text-center">{text}</p>
		</div>
	);
};

export default Skill;
