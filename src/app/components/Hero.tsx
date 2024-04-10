"use client";
import { motion } from "framer-motion";
import type { Image as ImageType } from "@sanity/types";
import SanityImage from "@/app/components/SanityImage";
export default function Hero({
	image,
	className,
}: {
	image: ImageType;
	className?: string;
}) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, delay: 0.5 }}
			className={className}
		>
			{image && <SanityImage image={image} />}
		</motion.div>
	);
}
