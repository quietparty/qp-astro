import {glob} from "astro/loaders"
import {defineCollection, z, type SchemaContext} from "astro:content"

export const songSchema = (context: SchemaContext) =>
	z
		.object({
			art: context.image(),
			url: z.string(),
			sources: z.array(
				z.object({
					format: z.string(),
					url: z.string(),
				})
			),
		})
		.partial()
		.refine(data => data.url || data.sources, "needs a URL or sources")
export const attachmentSchema = z.object({
	type: z.string(),
	url: z.string(),
})

const blog = defineCollection({
	loader: glob({base: "./src/content/blog", pattern: "**/*.{md,mdx}"}),
	schema: context =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			date: z.coerce.date(),
			updated: z.coerce.date().optional(),
			song: songSchema(context).optional(),
			attachments: z.array(attachmentSchema).optional(),
		}),
})

export const collections = {blog}
