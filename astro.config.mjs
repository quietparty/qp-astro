// @ts-check
import {defineConfig} from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"

import solidJs from "@astrojs/solid-js"
import netlify from "@astrojs/netlify"

// https://astro.build/config
export default defineConfig({
	site: "https://quietparty.net",
	integrations: [mdx(), sitemap(), solidJs()],
	adapter: netlify(),
	experimental: {
		contentIntellisense: true,
	},
})
