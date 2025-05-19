// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Satvik',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
    				label: 'About',
    				items: [
      					{ label: 'About Me', slug: 'about/about' },
    					],
				},
				{
  					label: 'Projects',
  					autogenerate: { directory: 'projects' }, // This auto-generates sidebar from folder
				},
				{
    				label: 'Experience',
					items: [
	  					{ label: 'Experience', slug: 'experience/experience' },
						],
				},
				{
  					label: 'Blogs',
  					autogenerate: { directory: 'blogs' }, // This auto-generates sidebar from folder
				},
				{
    				label: 'Contact',
    				items: [
      					{ label: 'Contact Me', slug: 'contact/contact' },
    					],
				},
			],
		}),
	],
});
