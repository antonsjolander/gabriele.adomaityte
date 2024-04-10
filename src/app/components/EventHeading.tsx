"use client";
import type { ShowPageProps } from "@/types";
import Link from "next/link";
export default function EventHeading({
	show,
	showName,
}: {
	show: ShowPageProps;
	showName: boolean;
}) {
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sept",
		"Oct",
		"Nov",
		"Dec",
	];

	const formatDate = (date: string) => {
		const d = new Date(date);
		return `${months[d.getMonth()]} ${d.getDate()}`;
	};
	return (
		<>
			<Link href={`/exhibitions/${show.slug.current}`}>
				<h2 className="italic">{show.title}</h2>
				<div>
					<span>{formatDate(show.date_start)}</span>
					<span>{" → "}</span>
					<span>{formatDate(show.date_end)}</span>
				</div>
			</Link>
		</>
	);
}
