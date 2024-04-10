"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	return (
		// <AnimatePresence mode="wait">
		<motion.div
			key={pathname}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, delay: 0.5 }}
			className="h-full pt-2"
		>
			{children}
		</motion.div>
		// </AnimatePresence>
	);
}
