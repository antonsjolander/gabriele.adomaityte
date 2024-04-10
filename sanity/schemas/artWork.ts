/* eslint-disable import/no-anonymous-default-export */
export default {
	name: "art_work",
	title: "Art Work",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		},
		{
			name: "coverImage",
			title: "Cover Image",
			type: "image",
		},
		{
			name: "images",
			title: "Images",
			type: "array",
			of: [{ type: "image" }],
		},
		{
			name: "description",
			title: "Description",
			type: "text",
		},
	],
};
