// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.getordo.dev',
	integrations: [
		starlight({
			title: 'Ordo',
			description:
				'Self-hosted, declarative infrastructure management for stateful machines.',
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
				{ label: 'Getting Started', slug: 'getting-started' },
				{ label: 'Concepts', slug: 'concepts' },
				{
					label: 'Reference',
					items: [
						{ label: 'Overview', slug: 'reference' },
						{
							label: 'CLI',
							autogenerate: { directory: 'reference/cli' },
						},
						...openAPISidebarGroups,
					],
				},
				{ label: 'Architecture', slug: 'architecture' },
			],
		}),
	],
});
