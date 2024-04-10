"use client";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import type { Image as ImageType } from "@sanity/types";
import { client } from "../../../sanity/lib/client";

export default function SanityImage({
	image,
	className = "",
}: {
	image: ImageType;
	className?: string;
}) {
	const nextImageProps = useNextSanityImage(client, image, {});

	return (
		<Image
			{...nextImageProps}
			className={className}
			style={{ width: "100%", height: "auto" }} // layout="responsive" prior to Next 13.0.0
			sizes="(max-width: 800px) 100vw, 800px"
			// @ts-ignore
			placeholder={image?.asset?.metadata?.lqip ? "blur" : "empty"}
			// @ts-ignore
			blurDataURL={image?.asset?.metadata?.lqip}
			alt="image"
		/>
	);
}
