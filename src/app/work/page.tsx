import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import WorkList from "@/app/components/WorkList";
import SanityImage from "../components/SanityImage";

export default async function ArtistsPage({}) {
	const data = await client.fetch(groq`*[_type == "art_work"]{
        title,
        slug,
		coverImage{asset->{...}},
    }`);

	const filterData = (artist: string) => {
		return data.filter((item: any) => {
			return item.slug.current.includes(artist);
		});
	};
	console.log(data);
	return (
		<div className="grid grid-cols-9">
			<div className="grid grid-cols-9 col-start-1 col-span-9">
				<WorkList work={data} />
			</div>
		</div>
	);
}

//
