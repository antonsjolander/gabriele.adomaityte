import { groq } from "next-sanity";
import { client } from "../../../../sanity/lib/client";
import SanityImage from "@/app/components/SanityImage";
import Link from "next/link";
import PortableText from "react-portable-text";
import ArtWork from "@/app/components/ArtWork";

export default async function ArtistPage({ params }: { params: any }) {
	const { slug } = params;
	const data = await client.fetch(
		groq`*[_type == "art_work" && slug.current == "${slug}"][0]{...,coverImage{asset->{...}},images[]{asset->{...}}},
		}`
	);
	const { name, image, work, bio } = data;

	return (
		<div className="grid grid-cols-9">
			<div className="col-span-4 md:col-star-2 md:col-span-1 justify-self-start">
				<Link className="link" href={`/artists`}>
					<span className="mr-2 mb-[1px]">{`← `}</span>
					<span>{`Back`}</span>
				</Link>
			</div>
			<div className="place-self-end md:place-self-start col-span-5 md:col-span-3">
				<h1>{name}</h1>
			</div>
			<div className="mt-4 md:mt-0 col-span-9 md:col-start-5 md:col-span-4 relative">
				{image ? (
					<SanityImage image={image} />
				) : (
					<div className="bg-[#d0d0d0] w-full aspect-square"></div>
				)}
				<p className="mt-4">{bio && <PortableText content={bio} />}</p>
				{work && work.length > 0 && <ArtWork work={work} />}
			</div>
		</div>
	);
}
