import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import Hero from "./components/Hero";

export default async function Home() {
	const data = await client.fetch(groq`*[_type == "global"][0]{
		hero_image{asset->{...}},
	}`);

	return (
		<main className="grid grid-cols-6 grid-rows-2 ">
			<Hero
				image={data.hero_image}
				className="col-span-6 md:col-start-4 md:col-span-3 row-span-2 relative md:p-4 md:pt-20"
			/>
		</main>
	);
}
