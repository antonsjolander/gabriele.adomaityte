"use client";
import SanityImage from "@/app/components/SanityImage";
import { useState } from "react";

export default function ArtWork({ work }: { work: any }) {
	const [active, setActive] = useState({});
	const [open, setOpen] = useState(false);
	return (
		<div className="grid gap-4 grid-cols-3 mt-8">
			{work.map((work: any) => (
				<button
					key={work.title}
					className="no-hover"
					onClick={() => {
						setActive(work);
						setOpen(true);
					}}
				>
					<SanityImage key={work.title} image={work.coverImage} />
				</button>
			))}
			<div
				onClick={() => setOpen(false)}
				className={`modal fixed cursor-pointer left-0 top-0 w-full h-full flex items-center justify-center bg-white/80 z-50 ${
					open
						? "opacity-100 pointer-events-auto"
						: "pointer-events-none opacity-0"
				}`}
			>
				<div className="w-2/3 md:w-1/3">
					<SanityImage
						className="object-cover mb-2"
						// @ts-ignore
						image={active.image}
					/>
					{/* @ts-ignore */}
					<h3 className="italic">{active.title}</h3>
				</div>
			</div>
		</div>
	);
}
