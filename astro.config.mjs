// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.getordo.dev',
	// No standalone docs landing page — the marketing site (getordo.dev) is the
	// front door. The docs root lands on the first page of the walkthrough.
	redirects: {
		'/': '/getting-started/',
	},
	integrations: [
		starlight({
			title: 'Ordo',
			description:
				'Self-hosted, declarative infrastructure management for stateful machines.',
			head: [
				// Declare the colour scheme during HTML parsing so the browser
				// paints a dark canvas on the first frame. Without this the
				// initial blank paint (before the render-blocking CSS applies)
				// is white, which flashes on the otherwise-dark site. Dark is
				// listed first to match the default theme.
				{
					tag: 'meta',
					attrs: { name: 'color-scheme', content: 'dark light' },
				},
			],
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/EphyraSoftware/ordo-docs',
				},
			],
			plugins: [
				starlightOpenAPI([
					{
						base: 'reference/api',
						label: 'Management API',
						schema: './openapi.json',
					},
				]),
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [{ autogenerate: { directory: 'getting-started' } }],
				},
				{
					label: 'Guides',
					items: [{ autogenerate: { directory: 'guides' } }],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Overview', slug: 'reference' },
						{
							label: 'CLI',
							items: [
								{ autogenerate: { directory: 'reference/cli' } },
							],
						},
						{ label: 'Deployment templates', slug: 'reference/deployment' },
						...openAPISidebarGroups,
					],
				},
				{ label: 'Architecture', slug: 'architecture' },
			],
		}),
	],
});
