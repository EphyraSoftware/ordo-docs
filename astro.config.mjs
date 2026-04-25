// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.ordo.ephyrasoftware.com',
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
			sidebar: [
				{ label: 'Getting Started', slug: 'getting-started' },
				{ label: 'Concepts', slug: 'concepts' },
				{ label: 'Reference', slug: 'reference' },
				{ label: 'Architecture', slug: 'architecture' },
			],
		}),
	],
});
