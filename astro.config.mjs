// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';
import starlightLlmsTxt from 'starlight-llms-txt';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.getordo.dev',
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
				// Emit /llms.txt and /llms-full.txt so AI tools can ingest the
				// docs in one fetch. Pairs with the in-repo AI tooling context
				// shipped from EphyraSoftware/ordo (ai-context/ tree).
				starlightLlmsTxt({
					description:
						'Self-hosted, declarative infrastructure management for stateful machines. Module authors write *.ordo.yaml state files; operators apply state to a tagged fleet.',
				}),
				starlightOpenAPI([
					{
						base: 'reference/api',
						label: 'Management API',
						schema: './openapi.json',
					},
				]),
			],
			sidebar: [
				{ label: 'Getting Started', slug: 'getting-started' },
				{ label: 'Concepts', slug: 'concepts' },
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
