import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import PortableText from "react-portable-text";
import PageWrapper from "../components/PageWrapper";
export default async function About() {
	const data = await client.fetch(groq`*[_type == "about"][0]{
       about,
    }`);
	return (
		<PageWrapper>
			<div className="grid grid-cols-9">
				<div className="col-span-9">
					<PortableText content={data.about} />
				</div>
			</div>
		</PageWrapper>
	);
}
