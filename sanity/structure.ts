// @ts-ignore
export const structure = (S) =>
	S.list()
		.title("Content")
		.items([
			S.listItem()
				.title("Global Settings")
				.child(
					S.editor()
						.id("global")
						.schemaType("global")
						.documentId("global")
						.title("global")
				),
			S.divider(),
			S.listItem()
				.title("About")
				.child(
					S.editor()
						.id("about")
						.schemaType("about")
						.documentId("about")
						.title("about")
				),
			S.divider(),
			...S.documentTypeListItems().filter(
				(item: { getId: () => string }) =>
					["show"].includes(item.getId()) ||
					["art_work"].includes(item.getId())
			),
		]);
