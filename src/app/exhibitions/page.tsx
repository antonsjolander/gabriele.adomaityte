import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import PageWrapper from "../components/PageWrapper";
import ShowList from "../components/ShowList";
export default async function Exhibitions({}) {
	const data = await client.fetch(groq`*[_type == "show"]{
        title,
        slug,
        image{asset->{...}},
        date_start,
        date_end,
    }`);

	return (
		<PageWrapper>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-9 pb-24">
				<ShowList shows={data} />
			</div>
		</PageWrapper>
	);
}
