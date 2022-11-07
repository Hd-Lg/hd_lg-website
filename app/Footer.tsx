import React from "react";
import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
	return (
		<footer className="w-full flex justify-center bg-slate-300">
			<Link href={"/"}>Hd-Lg.com</Link>
		</footer>
	);
}
