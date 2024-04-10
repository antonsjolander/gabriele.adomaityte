/* eslint-disable @next/next/no-img-element */
"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Nav({ logo }: { logo: any }) {
	const pathname = usePathname();
	const [navOpen, setNavOpen] = useState<boolean>(false);
	return (
		<nav className="col-span-9 z-10 md:col-span-2 md:row-span-6 flex justify-between md:justify-normal  md:flex-col items-start bg-white relative">
			<div className="sticky top-9 w-full md:w-auto place-items-start grid  md:grid-cols-1 grid-cols-6 grid-rows-6 justify-between items-center md:items-start h-full">
				<Link
					href={"/"}
					className="logo place-self-center col-start-1 row-start-2 md:row-start-1 col-span-3 md:col-span-1"
				>
					<h1 className="text-4xl">Gabrielė Adomaitytė</h1>
				</Link>
				<div
					onClick={() => setNavOpen(!navOpen)}
					className={`${
						navOpen ? "rotate-90" : "rotate-0"
					} transition-transform ease-in-out pb-1 inline col-span-1 row-start-2 place-self-end col-start-6 duration-500 origin-center md:hidden relative z-50`}
				>{`→`}</div>
				<ul
					className={`${
						navOpen ? "h-auto opacity-100" : "opacity-0"
					} flex flex-col items-end md:items-start  right-0 z-50 top-8  ease-in-out md:translate-y-0 transition-opacity md:transition-none duration-500 absolute md:opacity-100 md:static md:h-auto overflow-hidden`}
				>
					<li
						className={`nav-item flex-grow-0 inline-block ${
							pathname.includes("exhibitions") ? "active" : ""
						}`}
					>
						<Link href={`/exhibitions`}>Exhibitions</Link>
					</li>
					<li
						className={`nav-item flex-grow-0 inline-block ${
							pathname.includes("artists") ? "active" : ""
						}`}
					>
						<Link href={`/work`}>Work</Link>
					</li>
					<li
						className={`nav-item flex-grow-0 inline-block ${
							pathname.includes("about") ? "active" : ""
						}`}
					>
						<Link href={`/about`}>About</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
