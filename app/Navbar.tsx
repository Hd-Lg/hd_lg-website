import React from "react";
import Link from "next/link";

type Props = {};

export default function Navbar({}: Props) {
	return (
		<nav className="p-5 w-full top-0 left-0 flex justify-between bg-slate-300">
			<div className="w-1/3">
				{/* Replace by a logo that part */}
				<Link href={"/"} className="px-2 py-1 cursor-pointer">
					Hd-Lg
				</Link>
			</div>
			<div className="flex justify-end mr-3 w-2/3">
				<Link href={"/"} className="mr-7">
					Home
				</Link>
				<Link href={"/projects"} className="mr-7">
					Projects
				</Link>
				<Link href={"/contact"} className="mr-7">
					Contact
				</Link>
			</div>
		</nav>
	);
}
