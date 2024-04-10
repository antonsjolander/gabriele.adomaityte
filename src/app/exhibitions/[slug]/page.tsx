import { groq } from "next-sanity";
import { client } from "../../../../sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import PortableText from "react-portable-text";
import EventHeading from "@/app/components/EventHeading";
import { ArtistPageProps } from "@/types";
import SanityImage from "@/app/components/SanityImage";
import ArtWork from "@/app/components/ArtWork";

export default async function Exhibition({ params }: { params: any }) {
	const { slug } = params;
	const data = await client.fetch(
		groq`*[_type == "show" && slug.current == "${slug}"][0]{...,image{asset{..., metadata}},artists[]->{name, slug}, art_work[]->{..., image{asset->{...}}}}`
	);

	return (
		<div className="grid grid-cols-9 pb-24">
			<div className="col-span-9 mb-4 md:mb-0 md:col-star-2 md:col-span-1 justify-self-start">
				<Link href={`/exhibitions`}>
					<span className="mr-2 mb-[1px]">{`← `}</span>
					<span>{`Back`}</span>
				</Link>
			</div>
			<div className="col-span-9 mb-4 md:mb-0 md:col-span-2">
				<h1 className="hidden">{data.title}</h1>
				<div className="mb-4">
					<EventHeading showName={false} show={data} />
				</div>
			</div>
			<div className="col-span-9 md:col-start-5 md:col-span-4 relative">
				{data.image ? (
					<SanityImage image={data.image} />
				) : (
					<div className="bg-[#d0d0d0] w-full aspect-square"></div>
				)}
				<div className="mt-4">
					{data.description && (
						<PortableText content={data.description} />
					)}
				</div>
				{data.art_work && data.art_work.length > 0 && (
					<ArtWork work={data.art_work} />
				)}
			</div>
		</div>
	);
}
