import React from "react";
import Skill from "./Skill";

import {
	html,
	ant_design,
	blender,
	chakraui,
	css,
	express,
	figma,
	firebase,
	git,
	github,
	illustrator,
	indesign,
	material,
	js,
	mongodb,
	node,
	react,
	redux,
	spline,
	tailwindcss,
	typescript,
} from "../assets";

type Props = {};

const Skills = (props: Props) => {
	return (
		<div className="flex relative flex-col text-center max-w-[2000px] min-h-screen justify-center mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Skills
			</h3>
			<h5>My main programming languages:</h5>
			<div className="flex flex-row">
				<Skill image={html} text="html" />
				<Skill image={css} text="css" />
				<Skill image={js} text="js" />
				<Skill image={react} text="react/react native" />
			</div>
			<h5>UI libraries I&apos;m familiar with:</h5>
			<div className="flex flex-row">
				<Skill image={ant_design} text="ant design" />
				<Skill image={chakraui} text="chakra ui" />
				<Skill image={material} text="material" />
				<Skill image={tailwindcss} text="tailwind css" />
			</div>
			<h5>Design Tools:</h5>
			<div className="flex flex-row">
				<Skill image={figma} text="figma" />
				<Skill image={illustrator} text="illustrator" />
				<Skill image={indesign} text="indesign" />
				<Skill image={blender} text="blender" />
				<Skill image={spline} text="spline 3D" />
			</div>
		</div>
	);
};

export default Skills;
