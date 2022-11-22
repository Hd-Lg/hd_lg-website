import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
	return (
		<header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
			<div className="cursor-pointer">
				<Link href="/">Hd-Lg</Link>
			</div>
			<div className="flex items-center space-x-6 text-gray-400">
				<p className="uppercase text-sm cursor-pointer">
					<a href={"mailto:embauche@hd-lg.com"}>Contact me</a>
				</p>
				<p className="uppercase text-sm cursor-pointer">
					<Link href={"https://github.com/Hd-Lg"}>GitHub</Link>
				</p>
			</div>
		</header>
	);
};

export default Header;
