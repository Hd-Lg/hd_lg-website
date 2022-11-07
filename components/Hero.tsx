import React from "react";

import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
	return (
		<div className="text-left py-5">
			<div>
				<h2 className="font-bold">Welcome!</h2>
				<p>
					I&apos;sm <span className="font-semibold">Hd-Lg</span> and
					this is my personal website to showcase my abilities as a
					dev and my work.
				</p>
			</div>
			<div>
				<h3>Check out my links</h3>
				<div>
					<a
						target={"_blank"}
						rel="noreferrer"
						href="https://github.com/Hd-Lg/Hd-Lg">
						GitHub
					</a>
				</div>
			</div>
		</div>
	);
}
