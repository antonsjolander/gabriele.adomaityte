"use client";
import { motion } from "framer-motion";
import { useState } from "react";
export default function Loader() {
	const [render, setRender] = useState(true);
	return render ? (
		<motion.div
			onAnimationEnd={() => setRender(false)}
			initial={{ opacity: 1 }}
			animate={{ opacity: 0 }}
			transition={{ duration: 0.5, ease: "easeInOut" }}
			className="fixed bottom-0 left-0 right-0 bg-white w-full h-full pointer-events-none"
		></motion.div>
	) : null;
}
