// eslint-disable-next-line import/no-anonymous-default-export
export default {
	name: "global",
	title: "Global Settings",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "description",
			title: "Description",
			type: "text",
		},
		{
			name: "hero_image",
			title: "Hero Image",
			type: "image",
		},
		{
			name: "share_image",
			title: "OG Image",
			type: "image",
		},
		{
			name: "logo",
			title: "Logo",
			type: "image",
		},
		{
			name: "contact",
			title: "Contact",
			type: "text",
		},
	],
};
