import Image from "next/image";
import React from "react";

import Profile_Picture from "../assets/8_Pixel_Face.png";

type Props = {};

const About = (props: Props) => {
	return (
		<div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				About
			</h3>
			<Image
				src={Profile_Picture}
				alt="Profile Picture"
				placeholder="blur"
				className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-full md:w-64 md:h-90 xl:w-[500px] xl:h-[600px]"
			/>
			<div className="space-y-5 px-0 md:px-10">
				<h4>
					A{" "}
					<span className="underline decoration-[#F7AB0A]/50">
						little
					</span>{" "}
					background about me
				</h4>
				<p className="text-sm">
					I&apos;m in retraining to become a React & React Native
					developer with the end goal of becoming a full-stack dev.
				</p>
				<p className="text-sm">
					I&apos;ve a master degree in Innovation and Management of
					Technology with a specialization in entrepreneurship.
					I&apos;ve started a side project (for the fun of it) by
					running servers for some projects. I really had fun with it
					which led me to learn more about programming.
				</p>
				<p className="text-sm">And here I am today.</p>
			</div>
		</div>
	);
};

export default About;
