import React from "react";

import { Hero, Skills } from "../components";

type Props = {};

export default function page({}: Props) {
	return (
		<main className="bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80s">
			<section className="snap-start">
				<Hero />
			</section>
			<section className="snap-center">
				<Skills />
			</section>
		</main>
	);
}
