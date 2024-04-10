"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { ArtistPageProps } from "@/types";
import { useState } from "react";
import SanityImage from "@/app/components/SanityImage";

export default function WorkList({ work }: { work: ArtistPageProps[] }) {
	const [activeImage, setActiveImage] = useState(null);
	const onHover = (artist: string) => {
		if (artist.length === 0) return;
		const filter = work.filter((item: any) => {
			return item.slug.current.includes(artist);
		});
		// @ts-ignore
		setActiveImage(filter[0].coverImage);
	};

	return (
		<>
			<div className="col-span-9 md:col-span-4">
				{work.map((item: ArtistPageProps, i) => (
					<motion.div
						key={item.slug.current}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: i * 0.05 }}
						onHoverStart={() => onHover(item.slug.current)}
						onHoverEnd={() => setActiveImage(null)}
					>
						<Link
							className="link"
							href={`/artists/${item.slug.current}`}
						>
							<span>{item.title}</span>
						</Link>
					</motion.div>
				))}
			</div>
			<div className="col-span-4 col-start-6 hidden md:block">
				{activeImage && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1 }}
					>
						<SanityImage image={activeImage} />
					</motion.div>
				)}
			</div>
		</>
	);
}
