import React from "react";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
	return (
		<header className="p-5 bg-blue-500 flex justify-between">
			<div>
				{/* Replace by a logo that part */}
				<Link href={"/"} className="px-2 py-1 bg-white cursor-pointer">
					Hd-Lg
				</Link>
			</div>
			<div>
				<Link href={"/projects"}>Projects</Link>
				<Link href={"/contact"}>Contact</Link>
			</div>
		</header>
	);
}
