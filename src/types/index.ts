import type { Image, Slug } from "@sanity/types";
export interface ArtistPageProps {
	name: string;
	slug: Slug;
	image: Image;
}

export interface ShowPageProps {
	title: string;
	slug: Slug;
	image: Image;
	description: string;
	date_start: string;
	date_end: string;
	artists: ArtistPageProps[];
}
