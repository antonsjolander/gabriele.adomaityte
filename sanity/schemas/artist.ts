// eslint-disable-next-line import/no-anonymous-default-export
export default {
	name: "artist",
	title: "Artist",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 96,
			},
		},
		{
			name: "image",
			title: "Image",
			type: "image",
		},
		{
			name: "bio",
			title: "Bio",
			type: "array",
			of: [{ type: "block" }],
		},
		{
			name: "work",
			title: "Work",
			type: "array",
			of: [{ type: "reference", to: [{ type: "art_work" }] }],
		},
	],
};
