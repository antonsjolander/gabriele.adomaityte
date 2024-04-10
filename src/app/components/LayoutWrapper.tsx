"use client";
import { usePathname } from "next/navigation";
export default function LayoutWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	return (
		<div
			className={`col-start-1 md:col-start-3 col-span-7 ${
				pathname !== "/" ? "row-start-2" : "row-start-2 md:row-start-1"
			} row-span-6`}
		>
			{children}
		</div>
	);
}
