"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import type { ShowPageProps } from "@/types";
import Link from "next/link";
import EventHeading from "./EventHeading";
import SanityImage from "./SanityImage";
import Image from "next/image";
export default function ShowList({ shows }: { shows: ShowPageProps[] }) {
	const [showsState, setShowsState] = useState<ShowPageProps[]>(shows);
	const [filter, setFilter] = useState<string>("all");
	const filterShows = (filter: string) => {
		switch (filter) {
			case "all":
				setShowsState(shows);
				setFilter("all");
				break;
			case "current":
				setShowsState(
					shows.filter(
						(show) =>
							Date.parse(show.date_start) < Date.now() &&
							Date.parse(show.date_end) > Date.now()
					)
				);
				setFilter("current");
				break;
			case "upcoming":
				setShowsState(
					shows.filter(
						(show) => Date.parse(show.date_start) > Date.now()
					)
				);
				setFilter("upcoming");
				break;
			case "past":
				setShowsState(
					shows.filter(
						(show) => Date.parse(show.date_end) < Date.now()
					)
				);
				setFilter("past");
				break;
			default:
				setShowsState(shows);
				setFilter("all");
				break;
		}
	};

	console.log(showsState);

	return (
		<>
			<div className="col-span-3">
				<div className="sticky top-[7.75rem]">
					<ul>
						<li>
							<button
								className={`${
									filter === "all" ? "active" : ""
								}`}
								onClick={() => filterShows("all")}
							>
								All Shows
							</button>
						</li>
						<li>
							<button
								className={`${
									filter === "current" ? "active" : ""
								}`}
								onClick={() => filterShows("current")}
							>
								Current Shows
							</button>
						</li>
						<li>
							<button
								className={`${
									filter === "upcoming" ? "active" : ""
								}`}
								onClick={() => filterShows("upcoming")}
							>
								Upcoming Shows
							</button>
						</li>
						<li>
							<button
								className={`${
									filter === "past" ? "active" : ""
								}`}
								onClick={() => filterShows("past")}
							>
								Past Shows
							</button>
						</li>
					</ul>
				</div>
			</div>
			<div className="col-span-6 ">
				{showsState.length !== 0 ? (
					showsState.map((show, i) => (
						<div key={show.slug.current}>
							<Link href={`/exhibitions/${show.slug.current}`}>
								<motion.div
									className="grid grid-cols-1 md:grid-cols-2"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{
										duration: 1,
										delay: i * 0.05,
									}}
								>
									<div className="mb-8 order-2 md:order-1">
										<div className="mb-4">
											<EventHeading
												showName={false}
												show={show}
											/>
										</div>
									</div>
									<div className="mb-8 order-1 md:order-2">
										{show.image && (
											<SanityImage image={show.image} />
										)}
									</div>
								</motion.div>
							</Link>
						</div>
					))
				) : (
					<div className="grid grid-cols-2">
						<span>
							There are no <span className="">{filter}</span>{" "}
							shows
						</span>
					</div>
				)}
			</div>
		</>
	);
}
