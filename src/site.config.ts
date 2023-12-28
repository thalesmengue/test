import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "Thales Potocas",
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: "Potocas Insights",
	// Meta property used as the default description meta property
	description: "Insights do Potocas",
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: "pt-BR",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "pt_BR",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "pt-BR",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	webmentions: {
		link: "https://webmention.io/astro-cactus.chriswilliams.dev/webmention",
	},
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "About",
		path: "/about/",
	},
	{
		title: "Blog",
		path: "/posts/",
	},
];
