import { type SchemaTypeDefinition } from "sanity";
import about from "./schemas/about";
import artWork from "./schemas/artWork";
import global from "./schemas/settings";
import show from "./schemas/shows";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [about, artWork, global, show],
};
