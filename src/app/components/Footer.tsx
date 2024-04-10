"use client";
import type { ShowPageProps } from "@/types";
import EventHeading from "./EventHeading";
import Link from "next/link";
export default function Home({
	adress,
	show,
	link,
}: {
	adress: string;
	show: ShowPageProps;
	link: string;
}) {
	return (
		<div className="footer w-full fixed left-0 bottom-8 md:bottom-24">
			<div className="flex justify-between px-4 md:px-16">
				{/* <div className="justify-self-start">
					<Link href={link} target="_blank">
						<p className="w-[190px]">{adress}</p>
					</Link>
				</div> */}
				{/* <div className="justify-self-end text-right">
					<EventHeading showName show={show} />
				</div> */}
			</div>
		</div>
	);
}
