// eslint-disable-next-line import/no-anonymous-default-export
export default {
	name: "show",
	title: "Shows",
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
			// @ts-ignore
			validation: (Rule) => Rule.required(),
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		},
		{
			name: "image",
			title: "Image",
			type: "image",
		},
		{
			name: "description",
			title: "Description",
			type: "array",
			of: [{ type: "block" }],
		},
		{
			name: "date_start",
			title: "Date Start",
			type: "datetime",
		},
		{
			name: "date_end",
			title: "Date End",
			type: "datetime",
		},
		{
			name: "art_work",
			title: "Art Work",
			type: "array",
			of: [{ type: "reference", to: [{ type: "art_work" }] }],
		},
	],
};
