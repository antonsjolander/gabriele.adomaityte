// eslint-disable-next-line import/no-anonymous-default-export
export default {
	name: "about",
	title: "About",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "coverImage",
			title: "Cover Image",
			type: "image",
		},
		{
			name: "about",
			title: "About",
			type: "array",
			of: [{ type: "block" }],
		},
		{
			name: "contact",
			title: "Contact",
			type: "text",
		},
	],
};
